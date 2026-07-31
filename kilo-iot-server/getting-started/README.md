---
description: Get oriented with Kilo IoT Server and walk through your first LoRaWAN deployment from gateway to live dashboard.
---

# Getting Started

This section helps you get oriented: how the interface is organized and a simple walkthrough to get your first device online with live data on a dashboard. The hands-on walkthrough here uses the LoRaWAN path. Other protocol integrations do not always start in the same place. Each feature has its own dedicated section later in the documentation — this is just the quick path to getting started.

**Start here if you would rather not do it by hand.** [Let AI Set It Up for You](let-ai-set-it-up.md) covers the two ways to have AI do the setup work — the assistant built into Kilo, or the AI client you already use connected over MCP — and what each one will and will not do on its own. For many people that is the shortest route to a working deployment; the manual walkthrough below is still here whenever you want to understand the mechanics.

## What's in this section

| Page | What you'll learn |
|---|---|
| [Let AI Set It Up for You](let-ai-set-it-up.md) | Have the built-in assistant or your own AI client register devices, write the automation and configure alarms with you |
| [Navigating the Interface](navigating-the-interface.md) | A walkthrough of every section of the dashboard — sidebar, user menu, overview page, themes, and language |
| [Your First Deployment](your-first-deployment.md) | A LoRaWAN quickstart: register a gateway, set up an LNS connector, add a device, build a dashboard, and set up an alarm |

## Prerequisites

- A Kilo IoT account (cloud or on-premise)
- A modern web browser (Chrome, Firefox, Safari, Edge)

**Hardware is optional.** The [Emulator connector](../connectors/emulator-connector.md) creates devices that generate their own telemetry from real device presets, so you can build and test an entire deployment — dashboards, rules, escalating alarms — before any hardware arrives, then switch those same devices to a real connector when it does and keep everything you built.

To follow the hands-on LoRaWAN guide with real equipment you will want a LoRaWAN gateway and at least one sensor with its Device EUI and AppKey. Without them, use the Emulator and the guide still works end to end.

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
