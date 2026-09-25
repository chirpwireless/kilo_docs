---
description: Self-host the free, open-source KiloCenter MIOTY Service Center, or use its Enterprise edition within Kilo Cloud.
---

# KiloCenter MIOTY Service Center

Use the current installation examples only in an isolated evaluation environment with test data.
Published credentials, signing-key defaults and network exposure need correction before customer use.
Changing only the administrator password is insufficient. Read the [installation safety notice](security/installation-safety.md) before running commands.

Kilo Center Community Edition is an **open-source MIOTY service center** for running the networking yourself. Connect **base stations**—MIOTY's radio gateways—register **endpoints**, the sensors or other communicating devices, and exchange their messages with your applications.

**Kilo Cloud includes the enterprise version of the service center and the full Kilo IoT platform around it.** The same MIOTY devices can feed widgets and dashboards, run automation rules, and raise alarms with escalation. Choose Cloud when you want to build and operate the application as well as connect the radio network.

The Community Edition is the complete self-hosted service-center path, not a trial. There is no software subscription fee. You provide and operate its infrastructure, and deployments and modifications must follow the [AGPL-3.0-or-later license](license-and-trademarks.md).

## KiloCenter or Kilo Cloud?

Choose based on whether you need a MIOTY service center by itself or a complete IoT operations platform around the network.

| Need | KiloCenter Community Edition | Kilo Cloud |
|---|---|---|
| MIOTY service center | Self-host the free, open-source Community Edition | The Enterprise edition of KiloCenter is built in and managed for you |
| Base stations, endpoints, uplinks, and downlinks | Included | Included through Kilo's [MIOTY connector](../../kilo-iot-server/connectors/mioty-connector/README.md) |
| Integrate MIOTY data with another system | Use gRPC or MQTT | Use Kilo APIs and connectors, or work with the data directly in Kilo |
| Visual dashboards and historical charts | Build or connect a separate application | Included in [Dashboards](../../kilo-iot-server/dashboards/README.md) |
| Visual automation and sustained-condition triggers | Build or connect a separate automation system | Included in the [Rules Engine](../../kilo-iot-server/rules-engine/README.md) |
| Operational alarms, notification channels, and escalation | Build or connect a separate alerting system | Included in [Alarms](../../kilo-iot-server/alarm/README.md) |
| Managed hosting, multi-tenancy, support, and operational guarantees | You own operations | Available with Kilo Cloud and enterprise terms |

Use **KiloCenter Community Edition** when the MIOTY network server is the product boundary and your team wants to host it, operate it, and connect its data to existing applications.

Use **Kilo Cloud** when MIOTY is one part of a broader deployment. The Enterprise edition of the service center runs inside Kilo Cloud, and MIOTY endpoint data enters the same device-management, normalization, dashboard, rules, alarm, audit, and AI workflows as data from Kilo's other supported connectors. Start with the [Kilo IoT Platform overview](../../kilo-iot-server/README.md).

## What Community Edition includes

- MIOTY base-station connections over BSSCI with certificate-based security
- Endpoint registration, attachment, uplink processing, and downlink support
- A web console for service-center configuration and network monitoring; application dashboards, widgets, rules, and alerts belong to Kilo Cloud or your own downstream application
- gRPC and MQTT interfaces for downstream applications
- Docker Compose, Linux-host, and Kubernetes deployment paths
- Source code under AGPL-3.0-or-later

Read the [Project Overview](project-overview.md) for the architecture, components, supported MIOTY behavior, and production-use boundaries.

## Start here

1. Follow [Getting Started](getting-started/README.md) to install Community Edition.
2. Use [Onboarding](onboarding/README.md) to connect a base station and register an endpoint.
3. Choose [Integrations](integrations/README.md) to send MIOTY data to your application.
4. Review [Security](security/README.md) before exposing a deployment outside a development network.
5. Use [Operations](operations/README.md) for monitoring and troubleshooting.

If you do not want to operate a service center—or you also need rules, visualization, alarms, access control, and managed operations—start with [MIOTY on Kilo Cloud](../../kilo-iot-server/connectors/mioty-connector/README.md).
