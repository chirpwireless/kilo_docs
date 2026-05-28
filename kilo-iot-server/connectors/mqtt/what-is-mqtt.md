---
description: What is MQTT? A lightweight pub-sub IoT protocol — brokers, topics, QoS — and how it maps to the Kilo connector.
---

# What MQTT is

MQTT is a lightweight publish-subscribe messaging protocol designed for constrained networks and devices, originally specified by IBM in 1999 for SCADA over satellite links and now standardized as ISO/IEC 20922. Three properties make it the dominant industrial-IoT protocol today: small wire-format overhead suitable for cellular and battery-powered endpoints, decoupled producers and consumers via a central broker, and well-defined delivery guarantees (QoS 0/1/2) that allow integrators to trade throughput for reliability per topic.

If you are integrating an existing MQTT-producing system — a building management system, a fleet of cellular-connected meters, an MQTT-bridged PLC fleet — into the Kilo IoT Server, the orientation below covers the model the platform assumes. If you already operate MQTT in production and want to skip ahead, [Cloud MQTT](cloud-mqtt.md) and [External MQTT](external-mqtt.md) describe the connector configuration directly.

## Architectural roles

Three roles participate in any MQTT exchange:

- **Broker** — the routing fabric. Devices and applications connect to the broker; the broker matches publishers to subscribers based on topic patterns and handles delivery according to the QoS level requested. The broker is the single connection point for every MQTT participant; there is no peer-to-peer fallback.
- **Publishers** — produce messages to topics. Industrial publishers in practice include PLCs with MQTT firmware, edge gateways translating Modbus / BACnet / OPC-UA to MQTT, vendor-specific bridges (Zigbee2MQTT, ESPHome), and custom embedded firmware on field devices.
- **Subscribers** — consume messages. The Kilo IoT Server's MQTT connector is a subscriber. Multiple subscribers can consume the same topics independently — your existing dashboard, on-premise historian, and the platform can all receive the same data without coordination.

```
Field devices ──┐
PLCs ───────────┤
Bridges ────────┼──> Broker ──> Subscribers (Kilo, historian, dashboards, ...)
Edge gateways ──┘
```

Devices are typically both publishers (reporting telemetry) and subscribers (receiving setpoints, configuration, downlinks). The broker is the always-present middle.

## Topics: the routing key

Each MQTT message carries a **topic** — a slash-separated UTF-8 string. The broker uses topics to match publishers to subscribers; subscribers register interest in patterns using `+` (single-level wildcard) and `#` (multi-level wildcard at the end). Topics are not predefined; the publishing party chooses the topic, and a topic catalog is established by convention or vendor agreement.

Common conventions in industrial deployments:

- **Hierarchical topic structure by site/asset/metric** — for example, `plant-3/line-a/extruder-04/temperature` or `building-12/floor-2/ahu-1/setpoint`. This makes wildcard subscriptions natural for site-wide aggregation.
- **Vendor-prefixed schemes** for protocol bridges — e.g. `zigbee2mqtt/{friendlyName}`, `tasmota/{deviceName}/SENSOR`, `mosquitto/+/state`. The Kilo IoT Server supports any topic shape through the **Device ID Topic** pattern field — see [Topics and device routing](topics-and-device-routing.md).
- **Sparkplug B namespaces** for OPC-UA-style hierarchies — e.g. `spBv1.0/{group}/DDATA/{node}/{device}`. The platform consumes these as ordinary MQTT topics; Sparkplug-specific decoding is handled by the publishing edge gateway.

The platform's connector configuration treats topics as patterns: you specify a Device ID Topic like `plant-3/line-a/{{deviceId}}/data` and the platform extracts the device identifier from the placeholder position when each message arrives.

## Payloads: structured JSON in practice

The MQTT protocol itself is payload-agnostic — bytes go in, bytes come out. In production deployments JSON is overwhelmingly the format of choice for new systems, with occasional Sparkplug B (Protocol Buffers) and proprietary binary formats for legacy bridges. The Kilo IoT Server's MQTT connector parses JSON payloads automatically — flat objects, nested objects (flattened to dot-notation paths), and primitive values are all handled.

A typical industrial telemetry payload:

```json
{
  "timestamp": "2026-01-15T14:32:18Z",
  "temperature": 78.4,
  "pressure": 4.21,
  "vibration": {"rms": 0.42, "peak": 1.8},
  "status": "running"
}
```

When mapped to platform metrics, `temperature`, `pressure`, `vibration.rms`, `vibration.peak`, and `status` each become an addressable Connector Key. The Mapping tab links each Connector Key to a normalized metric, which is what then flows into the Digital Twin, the rules engine, and historical storage.

For one-metric-per-topic schemes (legacy bridges, OPC-UA aliasing patterns), the **Telemetry topics** rows on the Topic sub-tab let you map each topic to a named Connector Key explicitly.

## QoS, retained messages, last-will

Three protocol features come up enough in industrial deployments to be worth stating explicitly:

- **QoS levels** — 0 (at most once), 1 (at least once), 2 (exactly once). The platform's connector handles whatever QoS the publisher uses; pick the level that matches your operational tolerance for duplicates vs. drops. QoS 2 has the highest broker overhead and is typically reserved for control commands or critical state changes.
- **Retained messages** — flagged messages that the broker stores and replays to new subscribers on connect. Useful for current-state advertisement (e.g. "online/offline" announcements). If the broker delivers retained messages to the platform as standard subscribed publishes, they can be mapped like any other payload — verify against your broker's behavior.
- **Last-will and testament (LWT)** — a message the broker publishes on the publisher's behalf if it disconnects unexpectedly. Common pattern: a device's LWT publishes `"offline"` to its status topic, so subscribers see disconnection state changes without polling. If your broker delivers LWT messages to the connector as standard MQTT publishes, they can be mapped like any other payload.

These features are configured by the publishing party, not by the connector. The connector accepts whatever the broker delivers.

## Why MQTT for industrial IoT

The protocol's adoption in commercial deployments is driven by three properties that map cleanly to operational requirements:

- **Bandwidth efficiency.** Wire-format overhead is small enough for cellular-attached field devices and high-density wireless deployments. Keep-alives and pings are configurable to fit available connectivity windows.
- **Decoupled producers and consumers.** Adding a new subscriber (a historian, a third-party analytics platform, the Kilo IoT Server) does not require reconfiguring publishers. Operations teams can roll out new consumers without touching the field.
- **Mature ecosystem.** Mosquitto, HiveMQ, AWS IoT Core, Azure IoT Hub, and many other brokers exist. Most modern industrial protocol bridges (Modbus-to-MQTT, BACnet-to-MQTT, Sparkplug B edge gateways) ship with first-class MQTT publishing.

For deployment-specific configuration, continue to [Cloud MQTT](cloud-mqtt.md) for platform-managed brokers, or [External MQTT](external-mqtt.md) for connecting an existing broker.
