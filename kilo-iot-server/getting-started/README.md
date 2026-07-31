---
description: Get oriented with Kilo IoT Server and walk through your first LoRaWAN deployment from gateway to live dashboard.
---

# Getting Started

This section helps you get oriented: how the interface is organized and a simple walkthrough to get your first device online with live data on a dashboard. The hands-on walkthrough here uses the LoRaWAN path. Other protocol integrations do not always start in the same place. Each feature has its own dedicated section later in the documentation — this is just the quick path to getting started.

## What's in this section

| Page | What you'll learn |
|---|---|
| [Navigating the Interface](navigating-the-interface.md) | A walkthrough of every section of the dashboard — sidebar, user menu, overview page, themes, and language |
| [Your First Deployment](your-first-deployment.md) | A LoRaWAN quickstart: register a gateway, set up an LNS connector, add a device, build a dashboard, and set up an alarm |

## Prerequisites

- A Kilo IoT account (cloud or on-premise)
- A modern web browser (Chrome, Firefox, Safari, Edge)
- For the hands-on guide: a LoRaWAN gateway and at least one LoRaWAN sensor with its Device EUI and AppKey

If you don't have hardware yet, you can still explore the interface and understand the platform through the first two pages.

## The LoRaWAN quick-start flow

The typical LoRaWAN path from zero to a working deployment follows these steps:

```
Create account → Deploy gateway → Set up connector → Register device → View telemetry → Build dashboard → Set up alarm
```

Not every Kilo deployment begins with a gateway. LoRaWAN does. Direct integrations can start at the connector and device-modeling steps instead.

Each step builds on the previous one. In the LoRaWAN journey, the gateway provides network coverage, the device sends data through that gateway, the dashboard visualizes the data, and alert rules monitor it for conditions that need your attention.

The [Your First Deployment](your-first-deployment.md) guide walks through this entire sequence.

## After the basics

Once you have live data, integrate Kilo with your own systems through the [API](../api/README.md) — REST for standard integrations, and gRPC for typed, service-to-service, and on-premise/industrial automation.
