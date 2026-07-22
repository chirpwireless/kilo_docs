#!/usr/bin/env node
/**
 * Builds a machine-readable changelog feed (releases.json) from faq/changelog.md.
 *
 * The changelog is authored in GitBook markdown: one <details> block per release,
 * a <summary> with the version, a banner <figure>, an intro paragraph, and a
 * "What's in This Release" (or "Major Changes") bullet list that maps 1:1 to
 * carousel slides consumed by the Chirp web app.
 *
 * Env (all optional locally, set by the workflow in CI):
 *   GITHUB_REPOSITORY  e.g. "chirpwireless/chirpwireless_docs"
 *   FEED_SOURCE_BRANCH branch whose assets raw URLs should point to (default "synchronize")
 *   DOCS_BASE_URL      published portal base (default "https://docs.chirpwireless.io")
 *   OUTPUT_DIR         where releases.json is written (default "out")
 */

import { existsSync, readFileSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const REPO = process.env.GITHUB_REPOSITORY || 'chirpwireless/chirpwireless_docs';
const BRANCH = process.env.FEED_SOURCE_BRANCH || 'synchronize';
const DOCS_BASE_URL = (process.env.DOCS_BASE_URL || 'https://docs.chirpwireless.io').replace(/\/$/, '');
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'out';

const CHANGELOG_PATH = 'faq/changelog.md';
const RAW_ASSETS_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const HIGHLIGHTS_HEADING = /^#{2,4}\s+(what's in this release|major changes)\s*$/i;

const structuralErrors = [];

const fail = (message) => structuralErrors.push(message);

/** Strips markdown emphasis and inline links, returning plain text. */
const toPlainText = (markdown) =>
  markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

/** "../.gitbook/assets/Flight 3.7.jpg" -> absolute raw.githubusercontent URL. */
const toAbsoluteAssetUrl = (src) => {
  if (/^https?:\/\//.test(src)) return src;
  const repoPath = src.replace(/^(\.\.\/)+/, '');
  return `${RAW_ASSETS_BASE}/${repoPath.split('/').map(encodeURIComponent).join('/')}`;
};

/** "../dashboards/sharing-your-dashboard.md" -> published docs portal URL. */
const toDocsUrl = (href) => {
  if (/^https?:\/\//.test(href)) return href;
  const cleaned = href
    .replace(/^(\.\.\/)+/, '')
    .replace(/\/README\.md$/i, '')
    .replace(/\.md$/i, '');
  return `${DOCS_BASE_URL}/${cleaned}`;
};

const extractFigureSrc = (block) => {
  const match = block.match(/<figure><img\s+src="([^"]+)"/);
  return match ? toAbsoluteAssetUrl(match[1]) : null;
};

/** Highest x.y.z found in the <summary>; combined entries keep the newest version. */
const extractVersion = (summary) => {
  const versions = summary.match(/\d+\.\d+\.\d+/g);
  if (!versions) return null;
  return versions
    .map((v) => v.split('.').map(Number))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2])
    .pop()
    .join('.');
};

/** First prose paragraph between the banner figure and the first *** divider. */
const extractIntro = (body) => {
  const head = body.split(/^\*\*\*$/m)[0];
  const paragraph = head
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .find((chunk) => chunk && !chunk.startsWith('<') && !chunk.startsWith('#') && !chunk.startsWith('*'));
  return paragraph ? toPlainText(paragraph) : null;
};

const extractHighlightBullets = (body) => {
  const lines = body.split('\n');
  const headingIndex = lines.findIndex((line) => HIGHLIGHTS_HEADING.test(line.trim()));
  if (headingIndex === -1) return [];

  const bullets = [];
  for (let i = headingIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('* ')) bullets.push(line.slice(2));
    else break;
  }
  return bullets;
};

const STOPWORDS = new Set([
  'a', 'an', 'the', 'this', 'that', 'these', 'those', 'your', 'you', 'it', 'its', 'their',
  'and', 'or', 'not', 'just', 'now', 'can', 'what', 'of', 'to', 'in', 'on', 'for', 'with', 'over', 'right',
]);

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const tokenize = (text) =>
  toPlainText(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length >= 2 && !STOPWORDS.has(word));

/** Share of slide-title tokens present in the text (word-prefix match covers plurals). */
const tokenOverlap = (slideTokens, text) => {
  const lowered = text.toLowerCase();
  const hits = slideTokens.filter((token) => new RegExp(`\\b${escapeRegExp(token)}`).test(lowered));
  return hits.length / slideTokens.length;
};

/**
 * Feature deep-dive sections (split by ***) open with a bold header line.
 * Tier 1: a header that starts with the slide title (writer kept the same wording).
 * Tier 2: best token overlap between the slide title and the whole section text —
 * covers sections headed with a tagline ("Your home, now hands-on" for the AI Helper).
 */
const findSlideSection = (sections, slideTitle) => {
  const needle = slideTitle.toLowerCase();

  const byPrefix = sections.find((chunk) => {
    const header = chunk.match(/\*\*([^*]+)\*\*/);
    return header && header[1].toLowerCase().startsWith(needle.slice(0, 12));
  });
  if (byPrefix) return byPrefix;

  const slideTokens = [...new Set(tokenize(slideTitle))];
  if (slideTokens.length === 0) return null;

  let best = null;
  let bestScore = 0;

  for (const section of sections) {
    const score = tokenOverlap(slideTokens, section);
    if (score > bestScore) {
      best = section;
      bestScore = score;
    }
  }

  if (bestScore >= 0.6) return best;

  // Tier 3: accept a partial match when the overlapping token is prominent — present in the
  // section's bold header ("MIOTY support" bullet vs "MIOTY — a second protocol…" section).
  if (best && bestScore >= 0.5) {
    const header = best.match(/\*\*([^*]+)\*\*/);
    if (header && tokenOverlap(slideTokens, header[1]) > 0) return best;
  }

  return null;
};

/** A section may document several small features — pick the link closest to the slide title. */
const findSlideDocsLink = (section, slideTitle) => {
  const links = [...section.matchAll(/\[→ ([^\]]+)\]\(([^)]+)\)/g)];
  if (links.length === 0) return null;
  if (links.length === 1) return links[0][2];

  const slideTokens = [...new Set(tokenize(slideTitle))];
  let best = links[0];
  let bestScore = 0;

  for (const link of links) {
    const score = slideTokens.length > 0 ? tokenOverlap(slideTokens, link[1]) : 0;
    if (score > bestScore) {
      best = link;
      bestScore = score;
    }
  }

  return best[2];
};

/** First figure of the docs page a slide links to — feature pages usually open with a screenshot. */
const extractLinkedPageImage = (docsHref) => {
  if (!docsHref || /^https?:\/\//.test(docsHref)) return null;

  const relPath = docsHref.split('#')[0];
  const repoPath = path.posix.normalize(path.posix.join(path.posix.dirname(CHANGELOG_PATH), relPath));
  if (!repoPath.endsWith('.md') || !existsSync(repoPath)) return null;

  return extractFigureSrc(readFileSync(repoPath, 'utf8'));
};

// Drop the leading banner/intro chunk — it name-drops every feature and would steal matches.
const splitFeatureSections = (body) =>
  body
    .split(/^\*\*\*$/m)
    .slice(1)
    .filter((chunk) => !chunk.split('\n').some((line) => HIGHLIGHTS_HEADING.test(line.trim())));

const parseBullet = (bullet) => {
  const match = bullet.match(/^\*\*([^*]+)\*\*\s*—\s*([\s\S]+)$/);
  if (!match) return null;

  return { title: toPlainText(match[1]), description: toPlainText(match[2]) };
};

const buildSlides = (body, bullets) => {
  const sections = splitFeatureSections(body);
  const parsed = bullets.map(parseBullet).filter(Boolean);

  const matchedSections = parsed.map((slide) => findSlideSection(sections, slide.title));
  const sectionUsage = new Map();
  matchedSections.forEach((section) => {
    if (section) sectionUsage.set(section, (sectionUsage.get(section) ?? 0) + 1);
  });

  return parsed.map((slide, index) => {
    const section = matchedSections[index];
    if (!section) return slide;

    const docsHref = findSlideDocsLink(section, slide.title);
    const sectionImage = extractFigureSrc(section);
    const pageImage = extractLinkedPageImage(docsHref);

    // A section shared by several slides covers several features — its figure
    // rarely depicts this particular one, so the linked page's screenshot wins.
    const isSharedSection = (sectionUsage.get(section) ?? 0) > 1;
    const image = isSharedSection ? pageImage || sectionImage : sectionImage || pageImage;

    return {
      ...slide,
      ...(image ? { image } : {}),
      ...(docsHref ? { docsUrl: toDocsUrl(docsHref) } : {}),
    };
  });
};

const parseRelease = (block) => {
  const summaryMatch = block.match(/<summary>([\s\S]*?)<\/summary>/);
  if (!summaryMatch) {
    fail('Found a <details> block without a <summary>.');
    return null;
  }

  const summary = toPlainText(summaryMatch[1]);
  const version = extractVersion(summary);
  if (!version) {
    fail(`No x.y.z version found in summary "${summary}".`);
    return null;
  }

  const body = block.slice(block.indexOf('</summary>') + '</summary>'.length);
  const banner = extractFigureSrc(body);
  const intro = extractIntro(body);
  const bullets = extractHighlightBullets(body);
  const slides = buildSlides(body, bullets);

  const problems = [];
  if (slides.length === 0) problems.push(`Release ${version}: no highlight bullets parsed into slides.`);
  if (bullets.length !== slides.length) {
    problems.push(
      `Release ${version}: ${bullets.length - slides.length} bullet(s) did not match "**Title** — text" format.`
    );
  }
  if (!banner) problems.push(`Release ${version}: banner figure not found.`);

  return {
    version,
    problems,
    release: {
      version,
      title: summary,
      ...(banner ? { banner } : {}),
      ...(intro ? { intro } : {}),
      slides,
    },
  };
};

const compareVersionsDesc = (a, b) => {
  const [aMaj, aMin, aPatch] = a.split('.').map(Number);
  const [bMaj, bMin, bPatch] = b.split('.').map(Number);
  return bMaj - aMaj || bMin - aMin || bPatch - aPatch;
};

const main = async () => {
  const markdown = await readFile(CHANGELOG_PATH, 'utf8');

  const blocks = markdown.match(/<details>[\s\S]*?<\/details>/g) || [];
  if (blocks.length === 0) fail(`No <details> release blocks found in ${CHANGELOG_PATH}.`);

  const parsed = blocks
    .map(parseRelease)
    .filter(Boolean)
    .sort((a, b) => compareVersionsDesc(a.version, b.version));

  // The latest release feeds the in-app modal, so it must parse perfectly.
  // Older entries may predate the current authoring format — warn and skip.
  const latestProblems = parsed.length > 0 ? parsed[0].problems : [];
  const errors = [...structuralErrors, ...latestProblems];
  if (errors.length > 0) {
    console.error(`changelog feed: ${errors.length} blocking problem(s):\n`);
    for (const error of errors) console.error(`  ✗ ${error}`);
    process.exit(1);
  }

  const releases = [];
  for (const { problems, release } of parsed) {
    if (problems.length > 0) {
      for (const problem of problems) console.warn(`  ⚠ skipped: ${problem}`);
      continue;
    }
    releases.push(release);
  }

  const feed = {
    generatedAt: new Date().toISOString(),
    source: `${REPO}@${BRANCH}:${CHANGELOG_PATH}`,
    releases,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  const outputPath = path.join(OUTPUT_DIR, 'releases.json');
  await writeFile(outputPath, JSON.stringify(feed, null, 2) + '\n');

  console.log(`✓ ${outputPath}: ${releases.length} release(s), latest ${releases[0].version}`);
  for (const release of releases) {
    console.log(`  ${release.version}: ${release.slides.length} slide(s)${release.banner ? '' : ' (no banner)'}`);
  }

  // Non-blocking nudge for writers: the in-app modal falls back to the release
  // banner for these slides. A figure in the feature section or on the linked
  // docs page is picked up automatically.
  const latestImageless = releases[0].slides.filter((slide) => !slide.image);
  if (latestImageless.length > 0) {
    console.warn(`\n⚠ ${releases[0].version}: ${latestImageless.length} slide(s) without an own image:`);
    for (const slide of latestImageless) console.warn(`  – ${slide.title}`);
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
