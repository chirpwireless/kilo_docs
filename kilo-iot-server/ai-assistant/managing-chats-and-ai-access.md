---
description: Start new chats, revisit history, track your request allowance, and connect your own model key in Kilo IoT.
---

# Managing chats and AI access

The assistant lives in **AI Chat** in the sidebar. This page covers the workspace around the conversation itself — starting and revisiting chats, the request allowance that comes with your plan, and connecting your own model when you'd rather not work against that allowance.

## Starting a new chat

The **New Chat** action in the AI Chat top bar opens a fresh conversation. Because the assistant keeps the context of a conversation as you go — so you can refine a task across several messages — start a new chat when you move to an unrelated task, so earlier context doesn't carry over into work where it doesn't belong.

## Chat history

The top bar also opens **Chat history**, a list of your past conversations with the most recent first. Each conversation is titled from its content; one without a title yet shows as **Untitled chat**. Select any entry to reopen it and pick up where you left off. Your history persists across sessions and is scoped to you and your current organization — switch organizations and you see that workspace's conversations. Before you've chatted, the panel reads **No conversations yet**.

## Deleting a conversation

In Chat history, **Delete conversation** removes a chat and its messages. Deletion is immediate and cannot be undone, so remove only conversations you no longer need.

## Your request allowance

The assistant is part of the platform and includes a monthly allowance of AI requests that scales with your plan — higher tiers include more. Your remaining allowance is shown above the message input, so you always know where you stand.

When you reach the limit, the assistant tells you you've **reached your AI assistant limit**. The rest of the platform is unaffected — you can still monitor alarms, manage devices, and work through the regular interface. To keep using the assistant for building rules, diagnostics, and automation, either upgrade your plan or connect your own model key, which is not subject to the allowance.

## Connecting your own AI

<figure><img src="../../.gitbook/assets/ai-connect-your-model.jpg" alt="The Connect your AI panel — provider, base URL, API key, and model ID"><figcaption></figcaption></figure>

You can point the assistant at your own model instead of the included allowance — useful for teams that already run a provider account, need one specific model, or want inference billed against their own contract. Open **Connect your AI** from the AI Chat top bar and fill in:

* **Provider** — **OpenAI**, **Anthropic**, **OpenRouter**, **Ollama**, or **Custom (OpenAI compatible)**.
* **Base URL** — prefilled for the provider you pick. Change it to reach a self-hosted endpoint or an internal gateway, remembering that the address has to be reachable from the platform — one that only resolves inside your own network will not connect.
* **API Key** — your provider key, handled as a secret and shown as a password field. Every provider requires one, Ollama included.
* **Model ID** — the provider's identifier for the model, written exactly as the provider writes it. Type it, or pick one of the suggestions offered for the provider you selected.

### Getting the Model ID right

The Model ID is passed to the provider verbatim, so it has to match their catalog character for character. The field offers a couple of current suggestions per provider, but anything else that provider serves is equally valid.

**Ollama identifiers carry a version tag.** Ollama names a model `name:tag` — `gpt-oss:120b`, `gemma4:31b` — and the tag is part of the identifier rather than an optional suffix. Leave it off and the model is not found. Two more things specific to Ollama: the prefilled Base URL is Ollama Cloud, and most of the Ollama Cloud catalog needs a paid subscription on your Ollama account. The suggested identifiers do not.

**OpenRouter identifiers are namespaced** — `vendor/model`, such as `anthropic/claude-sonnet-4-6`.

### Checking the connection before you save

**Check connectivity** runs a real request against the provider, so you learn now rather than the next time someone asks the assistant a question. The panel reports **Connected** or **Not connected**; **Save** then applies it. A refusal names its cause instead of leaving you to guess:

| Message | What it means |
|---|---|
| the provider rejected the API key | The key is wrong, revoked, or belongs to a different account. |
| the provider denied this key access to the model — check that your provider plan includes it | The key is valid, but the plan behind it does not cover the model you asked for. The usual cause on Ollama Cloud. |
| the provider does not serve this model — check the model id | The identifier is not in that provider's catalog. On Ollama, check the version tag. |
| this model has been retired by the provider — pick a current one | The model existed once and has since been withdrawn. |
| the provider refused the request for billing reasons — check the account behind this key | The provider account needs attention — an unpaid invoice or a spend cap. |
| the provider is rate limiting this key — try again in a moment | Too many requests in too short a window. |
| could not reach AI provider | The Base URL is not reachable from the platform. |

Once connected, your own model serves your chats and the platform allowance no longer limits you. The panel goes on showing the connection in use — base URL, masked key and Model ID — so you can confirm months later which model is actually answering. Update or remove the key from the same panel at any time.

## Where to go next

* [Working With the Assistant](querying-your-data.md) — ask questions about your live deployment
* [Building With the Assistant](building-with-ai.md) — have it provision devices and author rules
* [Privacy and Security](privacy.md) — what the assistant can and can't see
