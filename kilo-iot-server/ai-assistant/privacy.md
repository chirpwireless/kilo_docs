# Privacy and Security

## Authentication

Every interaction with the assistant is authenticated using your active session. The assistant inherits your exact permissions and organizational context. It cannot see more data than you can, and it cannot perform actions beyond your access level.

## Permission inheritance

The assistant mirrors the access model of the account using it:

- **Organization administrators** can query all organizational data through the assistant, matching the full visibility they already have in the platform interface.
- **Standard users** see only the devices and data their permissions grant. If a user cannot access a device on the Devices page, the assistant cannot query that device either.
- **Read-only users** can query freely, but the assistant cannot modify anything on their behalf. The assistant is inherently read-only regardless of the user's role.

## Organization isolation

Conversations and data queries are strictly scoped to your current organization. The assistant cannot access data from any other organization, even if your account holds membership in multiple organizations. Switching organizations in the platform interface changes the assistant's data scope accordingly.

## What is stored

- **Chat history:** Your questions, the assistant's responses, timestamps, and session metadata are stored so you can revisit previous conversations.
- **Privacy:** Chat history is private to your individual account. No other user in your organization can see your conversations with the assistant.

## What is NOT stored

- Raw device telemetry is not duplicated or retained by the assistant beyond the scope of your query.
- Passwords, API credentials, and authentication tokens are never captured.
- Billing and payment data is not recorded in conversation logs.

## How queries are processed

1. Your question is sent to the assistant backend, authenticated with your active session.
2. A language model interprets the intent of your question.
3. The assistant queries only the data sources your permissions authorize.
4. Results are analyzed and a natural-language response is composed.
5. The response is streamed back to your browser in real time.

Only the question text is sent to the language model for interpretation. Your device telemetry stays within the Kilo IoT infrastructure and is not transmitted to external services for processing.

## Best practices

- Do not share passwords, API keys, or private credentials in the chat. The assistant does not need them and will not use them.
- Be specific about devices and time ranges to receive precise, relevant answers.
- All interactions with the assistant are logged for security audit purposes, consistent with the platform's audit trail.
