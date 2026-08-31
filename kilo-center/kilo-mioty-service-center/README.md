---
description: Run the free, open-source KiloCenter MIOTY Service Center yourself, or use its Enterprise edition inside the full Kilo Cloud IoT platform.
---

# KiloCenter MIOTY Service Center

KiloCenter Community Edition is a free, open-source MIOTY service center for organizations that want to operate the MIOTY network layer themselves. It connects MIOTY base stations, registers endpoints, processes uplinks and downlinks, and exposes data to other systems through gRPC and MQTT.

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
- A web console for service-center configuration and network monitoring
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
