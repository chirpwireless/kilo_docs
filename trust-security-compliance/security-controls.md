---
description: "Prepare account access, credentials, integrations and alert delivery before relying on your Kilo deployment."
---

# Security controls

Before connecting equipment, check who can administer your organisation, which permissions each person needs and where its credentials are stored. Remove access when it is no longer needed.

1. Use individual accounts and give each person the access their work requires. Follow [Users and permissions](../kilo-iot-server/account/users-and-permissions.md).
2. Treat API keys as credentials. Keep them out of source code, shared notes and ordinary messages. Follow [API keys](../kilo-iot-server/settings/api-keys.md).
3. Review what each external integration or AI application can access and what information it sends elsewhere. Read [AI assistant privacy](../kilo-iot-server/ai-assistant/privacy.md).
4. Test an alert's real destination and delivery before depending on it. Decide who will respond and what to do if the route fails.
5. For a customer-run installation, maintain the host and protect the local network. Use the security instructions for the installed product and version.

The [Customer security guide](customer-security-guide.md) brings these tasks together. The [Audit Trail](../kilo-iot-server/reports/audit-trail.md) describes its recorded event types. Confirm that the records and retention cover your use case before relying on them for an investigation.

If you find unexpected access or exposed credentials, use the [vulnerability-reporting instructions](incident-response-and-vulnerability-reporting.md).
