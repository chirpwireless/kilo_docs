---
description: Kilo IoT Server includes a fully managed LoRaWAN Network Server — no third-party LNS to deploy, join requests and downlinks handled automatically.
---

# Built-in Network Server

In any LoRaWAN deployment, the network server is the critical middleware layer between your gateways and your applications. It manages device authentication, session handling, message routing, uplink deduplication, and downlink scheduling. Without a network server, raw radio packets from gateways cannot be processed into usable application data.

Traditionally, deploying a LoRaWAN network meant setting up and maintaining a separate network server — either open-source or commercial — integrating it with your gateways, configuring device profiles, and connecting it to a separate platform for visualization and automation. That operational overhead scales with the size of the deployment and adds ongoing maintenance burden.

## How the Kilo IoT Server Handles This

The Kilo IoT Server includes a fully managed LoRaWAN Network Server (LNS) directly within the platform. There is nothing to install, configure, or maintain separately. When you add an LNS connector and register gateways, the built-in network server activates automatically for your organization.

All core network server functions are handled transparently:

- **Join requests** — Device authentication and session key generation for over-the-air activation (OTAA)
- **Uplink processing** — Receiving, deduplicating, and routing data from devices through gateways
- **Downlink scheduling** — Queuing and delivering commands and configuration updates to devices
- **Message deduplication** — When multiple gateways receive the same device transmission, the server deduplicates automatically

## What This Means for Your Deployment

- **No third-party network server required** — no separate LNS to procure, deploy, or maintain
- **No additional hosting burden** — the network server is managed as part of the platform
- **Immediate integration** — device data flows directly into dashboards, automation rules, alarm evaluations, and historical queries without additional integration work
- **Reduced time to deployment** — from gateway registration to live data in minutes, not days

By embedding the network server into the platform, the Kilo IoT Server eliminates an entire infrastructure layer from your LoRaWAN deployment — letting your team focus on the devices and the data, not on network plumbing.

For an overview of the LoRaWAN protocol, see [What is LoRaWAN?](what-is-lorawan.md). For gateway setup, see [Gateways](../../gateways/).
