---
description: "Understand what Kilo AI conversations contain, where model requests go, and how conversation deletion differs from account closure."
---

# Privacy and Security

The Kilo AI Assistant uses your questions and relevant platform information to help with your connected devices. For example, a question about a cold room may include its device name and temperature readings in the request sent to the AI model. This page explains the information involved and the choices you control.

## Account access and action confirmations

The built-in assistant uses your signed-in account and selected organisation for its requests. Choose the correct organisation and review its members and permissions before delegating work. Read any **Confirm Action** prompt before approving a change to devices or data; choose **Cancel** if the proposed action is not what you want. Routine setup can proceed without a separate confirmation.

If the assistant returns information or proposes an action outside the access you expect, stop that task and contact **info [at] kiloiot.de** (replace `[at]` with `@`).

## What a conversation can contain

Conversation history can contain your messages, answers, timestamps and information retrieved by the assistant, including device names, readings, rules and alarms. It lets you return to earlier work. Even though chat is not a full archive of device history, a reading included in a conversation can remain part of that conversation.

Anything you type can become conversation content. Keep account passwords, payment details and unrelated secrets out of chat. Enter a model-provider API key in the dedicated settings described in [Managing chats and AI access](managing-chats-and-ai-access.md).

## Where the information goes

An AI model provider is the service that runs the model used to answer your request. Your messages and the information retrieved for the answer can reach that provider.

- **Kilo's configured provider:** the integrated route uses OpenRouter, which forwards requests to the selected model.
- **Your own provider credentials:** the selected provider processes the request under the arrangement associated with your credentials. Check its retention, training and location terms.
- **Your own model endpoint:** the configured address determines where model requests are sent. This does not remove Kilo's own conversation handling. Selecting Ollama's hosted address is different from entering an endpoint you operate yourself.
- **An external AI application:** an application connected through the [MCP server](../api/mcp-server.md) can send retrieved information to the providers it uses. Review that application's access and privacy settings separately.

Provider settings and agreements can differ. Before using information subject to confidentiality or location restrictions, confirm that the chosen arrangement meets them. Disconnecting an application does not erase information it already received.

## Deleting a conversation or closing an account

Conversation deletion and account closure are separate actions. Use the chat-management instructions for an individual conversation. Closing an account does not currently automate complete deletion of conversations and related copies across every system.

For a personal-data request or a result covering provider-held copies, email **info [at] kiloiot.de**. Identify the relevant account and the outcome you need without resending the conversation's sensitive contents. The response should explain the result and any records that must remain.

Read [Privacy and data protection](../../trust-security-compliance/privacy-and-data-protection.md) for your rights and [Data export and switching](../../trust-security-compliance/data-export-deletion-and-switching.md) for company data, retained records and backup handling.
