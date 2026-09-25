---
description: "What the Kilo AI Assistant can access: your project configuration, live and historical device data, and platform docs."
---

# What It Can Access

The Kilo AI Assistant combines your deployment's configuration with device catalogs and platform documentation to help build the setup you need. It can inspect connections, device profiles, existing rules, alarm definitions, and dashboards before deciding what to create or change.

That context matters when you ask for an outcome rather than a sequence of clicks. The assistant can find the relevant device, use its actual readings in a rule, and work with the notification recipients already configured for your organization. Data history adds another layer when you want to investigate or refine the result.

## Your project configuration

The assistant reads configuration and performs changes through the operations available to your account in the current organization. It can create and update resources such as rules, alarm definitions, dashboards, and devices; see [Building With the Assistant](building-with-ai.md) for the setup workflows.

## Live device data

Check the reading time when interpreting a result: a quiet device may only have an older value, and stored history depends on your retention window.

The assistant reads the current state of every device you have access to: online or offline status, last-seen timestamp, latest sensor readings, battery level, signal strength, GPS coordinates, device metadata, and any labels you have applied. If you can see a device on the Devices page, the assistant can answer questions about it.

## Historical records

Stored telemetry within the available retention window and the requested time range. The assistant supports aggregations (min, max, average, sum, count), threshold violation detection, event filtering by type or value, and period-over-period comparisons. The depth of available history depends on the data retention window configured in your subscription plan.

## Platform documentation

The full Kilo IoT Server knowledge base, searched semantically. The assistant interprets the meaning of your question rather than matching keywords, then returns relevant explanations with direct links to documentation pages. This makes it a fast way to find answers about features, configuration steps, or best practices without leaving your workflow.

## IoT web search

For IoT-related questions that fall outside the platform documentation — protocol specifications, sensor datasheets, industry best practices, compliance standards — the assistant can search the web. This capability is strictly limited to IoT topics. General web searches, non-technical questions, and unrelated subjects are declined.

## What it cannot access

The following data is outside the assistant's reach by design:

- **Other organizations' data.** Queries use the currently selected organization, including when your account belongs to more than one.
- **Devices outside your permission scope.** If your role does not grant access to a device or location, the assistant cannot query it.
- **Billing and payment information.** Subscription details, invoices, and payment methods are not accessible through the assistant.
- **Credentials.** User passwords, API secrets, and authentication tokens are never surfaced.
- **Admin-only settings.** Unless your account holds administrator permissions, system-level configuration is not visible.
- **Raw system logs.** Internal infrastructure logs and database tables are not exposed.
- **Real-time streaming data.** The assistant queries data at the moment you ask. It does not maintain a persistent live stream.
