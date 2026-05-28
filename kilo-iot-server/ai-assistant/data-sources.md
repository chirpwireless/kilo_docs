---
description: What the Kilo IoT AI Assistant can access — live device data, full telemetry history, the platform knowledge base, and IoT-scoped web search.
---

# What It Can Access

Every query the assistant runs is scoped to your permissions and your current organization. It sees exactly what you see in the platform interface — nothing more.

## Live device data

The assistant reads the current state of every device you have access to: online or offline status, last-seen timestamp, latest sensor readings, battery level, signal strength, GPS coordinates, device metadata, and any labels you have applied. If you can see a device on the Devices page, the assistant can answer questions about it.

## Historical records

Complete telemetry history for any device over any time period. The assistant supports aggregations (min, max, average, sum, count), threshold violation detection, event filtering by type or value, and period-over-period comparisons. The depth of available history depends on the data retention window configured in your subscription plan.

## Platform documentation

The full Kilo IoT Server knowledge base, searched semantically. The assistant interprets the meaning of your question rather than matching keywords, then returns relevant explanations with direct links to documentation pages. This makes it a fast way to find answers about features, configuration steps, or best practices without leaving your workflow.

## IoT web search

For IoT-related questions that fall outside the platform documentation — protocol specifications, sensor datasheets, industry best practices, compliance standards — the assistant can search the web. This capability is strictly limited to IoT topics. General web searches, non-technical questions, and unrelated subjects are declined.

## What it cannot access

The following data is outside the assistant's reach by design:

- **Other organizations' data.** Tenant isolation is absolute. The assistant cannot cross organizational boundaries, even if your account belongs to multiple organizations.
- **Devices outside your permission scope.** If your role does not grant access to a device or location, the assistant cannot query it.
- **Billing and payment information.** Subscription details, invoices, and payment methods are not accessible through the assistant.
- **Credentials.** User passwords, API secrets, and authentication tokens are never surfaced.
- **Admin-only settings.** Unless your account holds administrator permissions, system-level configuration is not visible.
- **Raw system logs.** Internal infrastructure logs and database tables are not exposed.
- **Real-time streaming data.** The assistant queries data at the moment you ask. It does not maintain a persistent live stream.
