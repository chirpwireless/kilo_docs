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

You can point the assistant at your own model instead of the included allowance — useful for teams that already run a provider account or want a specific model. Open **Connect your AI** from the AI Chat top bar and fill in:

* **Provider** — choose **OpenAI**, **Anthropic**, **Ollama**, or **Custom (OpenAI compatible)**.
* **Base URL** — leave the default for OpenAI; for a compatible provider (for example DeepSeek or Qwen), enter that provider's endpoint URL.
* **API Key** — paste your provider key. It's handled as a secret and shown as a password field.
* **Model ID** — type or select the model you want the assistant to use.

Click **Check connectivity** to validate the key and endpoint — the panel shows **Connected** or **Not connected** — then **Save** to apply. Once connected, your own model serves your chats and the platform allowance no longer limits you. You can update or remove the key from the same panel at any time.

## Where to go next

* [Working With the Assistant](querying-your-data.md) — ask questions about your live deployment
* [Building With the Assistant](building-with-ai.md) — have it provision devices and author rules
* [Privacy and Security](privacy.md) — what the assistant can and can't see
