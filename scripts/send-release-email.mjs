#!/usr/bin/env node
/**
 * Sends a release email through listmonk when a file in mailing/ is added or changed.
 *
 * mailing/<version>.md starts with a front matter block:
 *   ---
 *   subject: "Kilo X.Y: ..."
 *   preheader: "Short line shown next to the subject in the inbox"
 *   list: Kilo customers            # listmonk list name; several: "Kilo customers, Kilo newsletter"
 *   send: now                       # now | draft | 2026-10-20T10:00:00+02:00
 *   ---
 * followed by the email body in Markdown.
 *
 * Safety: every image and link must resolve before anything is created; the test copy goes out
 * first; a campaign that has already started, finished or been scheduled is never touched again.
 *
 * Env: LISTMONK_URL, LISTMONK_USER, LISTMONK_TOKEN, BRAND (Kilo|Chirp), TEST_EMAILS (comma list),
 *      FILES (newline list of changed mailing/*.md paths), DRY_RUN=1 to validate only.
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const { LISTMONK_URL, LISTMONK_USER, LISTMONK_TOKEN, BRAND, TEST_EMAILS = '', FILES = '', DRY_RUN } = process.env;
const DONE_STATES = new Set(['running', 'finished', 'scheduled', 'paused', 'cancelled']);

const fail = (msg) => {
  console.error(`✗ ${msg}`);
  process.exitCode = 1;
};

const parseFrontMatter = (text) => {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error('missing front matter block (--- ... ---) at the top');
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*?)\s*(#.*)?$/i);
    if (kv) meta[kv[1].toLowerCase()] = kv[2].replace(/^["']|["']$/g, '');
  }
  return { meta, body: m[2].trim() };
};

const extractUrls = (body) => {
  const images = [...body.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)|<img[^>]+src="(https?:\/\/[^"]+)"/g)].map((x) => x[1] || x[2]);
  const links = [...body.matchAll(/(?<!!)\[[^\]]*\]\((https?:\/\/[^)\s]+)\)|<a[^>]+href="(https?:\/\/[^"]+)"/g)].map((x) => x[1] || x[2]);
  return { images: [...new Set(images)], links: [...new Set(links)] };
};

const toPlainText = (markdown) =>
  markdown
    .replace(/!\[[^\]]*\]\([^)]*\)\n*/g, '')
    .replace(/\[\*\*([^\]]*)\*\*\]\(([^)]*)\)/g, '$1: $2')
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '$1: $2')
    .replace(/ →:/g, ':')
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/\\\n/g, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const checkUrl = async (url) => {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'follow' });
      if (res.status < 400) return true;
    } catch {
      /* retry with GET */
    }
  }
  return false;
};

const api = async (method, route, body) => {
  const res = await fetch(`${LISTMONK_URL.replace(/\/$/, '')}${route}`, {
    method,
    headers: { Authorization: `token ${LISTMONK_USER}:${LISTMONK_TOKEN}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${method} ${route} → ${res.status} ${json.message || ''}`);
  return json.data;
};

const processFile = async (file) => {
  const version = path.basename(file, '.md');
  const { meta, body } = parseFrontMatter(await readFile(file, 'utf8'));
  const problems = [];
  if (!meta.subject) problems.push('subject is missing');
  if (!meta.list) problems.push('list is missing');
  const send = (meta.send || 'draft').toLowerCase();
  const sendAt = !['now', 'draft'].includes(send) ? new Date(meta.send) : null;
  if (sendAt && (Number.isNaN(sendAt.getTime()) || sendAt < new Date())) problems.push(`send "${meta.send}" is not now, draft or a future date`);
  if (!body) problems.push('the email body is empty');

  const { images, links } = extractUrls(body);
  for (const url of images) if (!(await checkUrl(url))) problems.push(`image does not load: ${url}`);
  for (const url of links) if (!(await checkUrl(url))) problems.push(`link does not open: ${url}`);
  if (problems.length) {
    problems.forEach((p) => fail(`${file}: ${p}`));
    return;
  }
  console.log(`✓ ${file}: ${images.length} image(s), ${links.length} link(s) checked`);
  if (DRY_RUN) return;

  const name = `${BRAND} ${version}`;
  const lists = (await api('GET', '/api/lists?per_page=all')).results;
  const listIds = meta.list.split(',').map((n) => n.trim()).map((n) => {
    const l = lists.find((x) => x.name === n);
    if (!l) throw new Error(`list "${n}" does not exist in listmonk (have: ${lists.map((x) => x.name).join(', ')})`);
    return l.id;
  });

  const existing = (await api('GET', `/api/campaigns?per_page=all&query=${encodeURIComponent(name)}`)).results.find((c) => c.name === name);
  if (existing && DONE_STATES.has(existing.status)) {
    console.log(`• ${name} is already ${existing.status}; nothing sent again.`);
    return;
  }

  const preheader = meta.preheader
    ? `<div style="display:none;max-height:0;overflow:hidden;">${meta.preheader}</div>\n\n`
    : '';
  const altbody = `${toPlainText(body)}\n\n--\nUnsubscribe: {{ UnsubscribeURL }}`;
  const payload = { name, subject: meta.subject, lists: listIds, content_type: 'markdown', body: preheader + body, altbody, messenger: 'email', type: 'regular', tags: ['release'] };
  const campaign = existing ? await api('PUT', `/api/campaigns/${existing.id}`, payload) : await api('POST', '/api/campaigns', payload);
  console.log(`✓ ${existing ? 'updated' : 'created'} campaign "${name}" (id ${campaign.id})`);

  const testTo = TEST_EMAILS.split(',').map((s) => s.trim()).filter(Boolean);
  if (testTo.length) {
    await api('POST', `/api/campaigns/${campaign.id}/test`, { ...payload, template_id: campaign.template_id, subscribers: testTo });
    console.log(`✓ test copy sent to ${testTo.join(', ')}`);
  }

  if (send === 'draft') {
    console.log('• send: draft, left as a draft in listmonk.');
  } else if (sendAt) {
    await api('PUT', `/api/campaigns/${campaign.id}`, { ...payload, send_at: sendAt.toISOString() });
    await api('PUT', `/api/campaigns/${campaign.id}/status`, { status: 'scheduled' });
    console.log(`✓ scheduled for ${sendAt.toISOString()}`);
  } else {
    await api('PUT', `/api/campaigns/${campaign.id}/status`, { status: 'running' });
    console.log('✓ sending now');
  }
};

const main = async () => {
  if (!DRY_RUN) for (const k of ['LISTMONK_URL', 'LISTMONK_USER', 'LISTMONK_TOKEN', 'BRAND']) if (!process.env[k]) throw new Error(`${k} is not set`);
  const files = FILES.split('\n').map((f) => f.trim()).filter((f) => /^mailing\/[^/]+\.md$/.test(f) && !/README\.md$/i.test(f));
  if (!files.length) return console.log('No release email files changed.');
  for (const f of files) {
    try {
      await processFile(f);
    } catch (e) {
      fail(`${f}: ${e.message}`);
    }
  }
};

main();
