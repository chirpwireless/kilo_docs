---
sidebar_position: 3
---

# Kilo IoT Server

Kilo IoT is an IoT server for device management, data collection, real-time processing, visualization, automation, and alerting. It is available as a fully managed cloud deployment or as a self-hosted on-premise installation.

Kilo is built for organizations that need to connect, monitor, and automate physical devices at scale — whether that means five sensors in a single building or thousands of devices across dozens of sites.

### Who Kilo IoT is for

Kilo IoT is designed to serve any IoT use case where devices need to be connected, monitored, and automated — regardless of industry or vertical. The server provides the infrastructure; you define what it does.

Organizations across a wide range of sectors use Kilo to solve fundamentally similar problems: collecting data from distributed devices, making that data actionable, and automating responses when conditions change. Some examples:

* **Operations teams** managing environmental sensors, equipment monitors, or utility meters across facilities
* **System integrators** deploying IoT solutions for clients who need a reliable, multi-tenant server
* **IT departments** looking to centralize device data without building a platform from scratch
* **Facility managers** tracking conditions across buildings, floors, and zones
* **Agricultural operations** monitoring soil, weather, and irrigation systems
* **Logistics providers** tracking assets, cold chain compliance, and fleet conditions
* **Smart building operators** managing HVAC, energy, occupancy, and access

These are examples, not boundaries. If your use case involves connecting devices and acting on their data, Kilo is built for it.

### What the server does

#### Device management with Digital Twin technology

Every device you register becomes a full digital representation — a Digital Twin — that mirrors its state, configuration, telemetry history, and behavior in real time. The digital twin persists even when the physical device goes offline, so you always have a complete picture of your deployment.

You are not limited to a pre-approved device catalog or a single protocol. Connect LoRaWAN sensors and vehicle trackers today, with MQTT device connectivity coming soon — enabling virtually any device that communicates over MQTT. Different manufacturers report data differently — one vendor sends `temp_c`, another uses `temperature`, a third just sends a raw number. Kilo normalizes all of it through sensor templates, normalized key names, and unit measurements. You define how each device's raw data maps to standardized parameters, and the server handles the rest. Once mapped, every device — regardless of manufacturer or connectivity method — reports data in a consistent, unified format.

For many popular devices, premade templates with pre-configured mappings are already available — simplifying onboarding to just entering device credentials. For any other device, you map its raw output to meaningful parameters yourself. There is no dependency on a pre-approved device catalog.

#### Built-in LoRaWAN Network Server

The server includes a fully integrated LoRaWAN Network Server (LNS). There is no need to deploy, configure, or maintain a separate LNS. Device join requests, uplinks, downlinks, and message deduplication are handled automatically. This removes an entire layer of infrastructure from your deployment.

#### Visual rules engine with production-grade safety

Automation rules are built on a visual canvas using a drag-and-drop editor. Conditions are written in [CEL (Common Expression Language)](https://cel.dev) — a fast, safe expression language that goes far beyond simple threshold comparisons. A rule can be as simple as `device.temperature > 30` or as complex as your operation requires — combining multiple sensor readings, spanning devices across different locations, evaluating decision tables with multi-criteria hit policies, and branching through conditional switch logic. There is no artificial ceiling on complexity.

Every rule change is automatically versioned. You can review the full history of any rule, compare versions, roll back to a previous state with one click, and clone rules as templates. Rules are built into deployable artifacts and deployed to production explicitly — giving you full control over what's running and when. This means automation you can trust in production — not automation you have to babysit.

Rules also support decision tables for structured multi-criteria evaluation, time-based schedules with day-of-week and timezone selection, and a "remain true for" parameter that requires a condition to persist for a specified duration before triggering — eliminating false alarms from transient sensor spikes.

#### Multi-channel alerting with escalation

When an alarm rule fires, the system delivers notifications across email, SMS, and push simultaneously. Each channel is independently configurable per rule. Alarms are categorized across five severity levels — Critical, High, Medium, Low, and Info — each with its own repeat interval and escalation behavior. Organizations can configure per-severity policies to control how each level is handled across the deployment.

Escalation steps let you define notification chains: if an alert isn't acknowledged within a set time, it escalates to the next recipient or channel. Quiet hours and weekly scheduling windows ensure that non-critical notifications respect operational schedules.

The notification delivery system is fault-tolerant. If a notification fails to send — because of a temporary email provider issue or an SMS gateway timeout — the system automatically retries with exponential backoff. If the automation service restarts during execution, workflows resume from where they left off. No alert is silently dropped.

#### Custom dashboards and real-time visualization

Build operational dashboards organized in a folder hierarchy — by site, building, floor, or any structure that reflects your deployment. Each dashboard holds widgets sourced from any device and any parameter.

Widgets are fully customizable. Set value boundaries to define normal operating ranges, choose alternative units, toggle graph visibility, and switch between display modes. Each widget type — line charts for trending data, numeric displays for live readings, boolean indicators for on/off states — can be configured to match your operational context. All data updates in real time.

The platform's transport infrastructure is protocol-agnostic — data from LoRaWAN, MQTT, and vehicle tracker devices all enters through the same pipeline, gets standardized and normalized, then flows through specialized channels to dashboards, the rules engine, and historical storage simultaneously. Live data reaches dashboards and automation rules through real-time streaming — no polling, no refresh cycles. Real-time streams are also available externally via WebSocket and Server-Sent Events (SSE).

The entire pipeline — from message queues to caching layers to query storage — uses specialized tools and an architecture designed for speed and scale:

* Historical queries across large datasets are optimized for fast response times
* Dashboard charts are designed to load quickly, even when visualizing months of data
* The architecture is built to scale as your deployment grows
* Data is partitioned by time for efficient retention and compressed for long-term storage

#### Maps, GPS tracking, and spatial views

Place devices on 2D maps for spatial context. For GPS-equipped trackers, review full location history with playback, coordinates tables, and route visualization.

#### AI assistant connected to your data

The built-in AI assistant is not a generic chatbot — it is connected to your actual deployment data. Ask questions in natural language: _"What was the average temperature in Warehouse B last week?"_ or _"Which devices haven't reported in 24 hours?"_ The assistant queries your device history, analyzes trends, and provides actionable answers.

#### Attribute-Based Access Control and multi-organization isolation

Kilo uses Attribute-Based Access Control (ABAC) rather than traditional role-based access. Permissions are evaluated dynamically based on organization membership, page-level assignments, and user context — giving you fine-grained, per-resource control without role explosion.

Each organization on the server is fully isolated: its own devices, users, dashboards, rules, billing, and audit trail. A single user can belong to multiple organizations with different permission levels in each. This makes Kilo a natural fit for managed service providers, facility management companies, and multi-tenant deployments.

#### Audit trail

Every significant action is logged — device registrations, rule changes, user access modifications, configuration updates. The audit trail provides full traceability for compliance, operational troubleshooting, and accountability.

#### API access and integrations

Secure, scoped API keys let you integrate the server with your existing systems. Each key can be limited to specific permissions, given an expiration date, and rotated on a schedule. Real-time data is available via Server-Sent Events (SSE) and WebSocket streams. Device commands can be sent programmatically via the API.

### Deployment options

* **Kilo Cloud** — Fully managed, scalable, and fault-tolerant. No infrastructure to maintain.
* **Kilo On-Premise** — The same server deployed within your own infrastructure, for organizations that require full control over data, access policies, and network boundaries.

### Languages and accessibility

The interface is available in English, German, French, and Spanish. Both light and dark themes are supported, and your preferences persist across sessions.

### Subscription plans

Kilo IoT offers multiple plan tiers — from a free tier for evaluation up to enterprise plans for large-scale deployments. Each tier defines limits for devices, automation rules, and access to advanced features. Plans can be viewed and managed from the **Subscription** section in the user menu.

### Where to start

If you're new to Kilo IoT, begin with the Getting Started guide — it walks you through the interface, explains what makes the server different, and takes you from zero to a working deployment with live data and alerts.
