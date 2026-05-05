# Zigbee2MQTT hubs

Zigbee2MQTT (Z2M) is one MQTT edge-gateway pattern available to Kilo deployments that include Zigbee field hardware. It is not the default ingestion path, and it is not a fit for every deployment — Modbus, BACnet, OPC-UA, and Sparkplug B bridges all remain the conventional choices for industrial telemetry. But where Zigbee hardware genuinely fits the operational picture — pilot programs, lab and office instrumentation, facility-wide environmental sensors, occupancy and people-counting, smart-plug telemetry, building-management lighting and presence — Z2M provides a well-supported open-source bridge that turns a Zigbee mesh into MQTT publishes the platform's connector can consume.

This page covers Z2M as a gateway pattern. The MQTT-side registration of the resulting devices (Device ID Topic, Mapping tab, Connector keys) is documented in [Topics and device routing](../../connectors/mqtt/topics-and-device-routing.md) — that flow is identical regardless of which MQTT edge gateway is producing the topic stream.

## What a Z2M hub is

A Z2M hub is three things working together:

1. **A host machine** at the network edge — typically a small Linux device (industrial mini-PC, NUC, Raspberry Pi, vendor appliance) with USB or Ethernet to the coordinator and a stable network path to the broker. Operationally it runs as a system service with restart-on-failure semantics.
2. **A Zigbee coordinator** — a USB radio (for example, Sonoff ZBDongle-E with EFR32MG24, a commonly used option) or a network-attached coordinator (for example, SMLIGHT SLZB-06). The coordinator is the radio bridge between the Zigbee mesh and Z2M; it does not itself run MQTT.
3. **The Zigbee2MQTT software** — opens the coordinator's transport, joins Zigbee devices to the mesh, and publishes each device's state and telemetry as flat JSON on `zigbee2mqtt/{friendlyName}`.

The resulting MQTT stream looks like any other JSON-payload edge gateway from the platform's perspective.

## Where Z2M fits in commercial deployments

Z2M is appropriate where Zigbee end devices are operationally useful and the deployment scale matches what the open-source Z2M project is built for:

- **Pilot programs** evaluating sensor types or vendor mixes before committing to dedicated radio infrastructure.
- **Office, lab, and facility instrumentation** — temperature, humidity, CO₂, presence, light-level sensors, smart plugs, occupancy counters.
- **Building-management adjuncts** — supplementary sensors that complement an existing BMS rather than replace it.
- **Targeted commercial-lighting** scenarios where Zigbee bulbs and plugs are the chosen hardware.

Z2M is not the right tool for high-throughput process telemetry, factory-floor automation, or scenarios where hard real-time guarantees, deterministic latency, or formal redundancy architectures are operationally required. Those use cases are better served by Modbus, OPC-UA, BACnet, or Sparkplug B bridges — see the [MQTT edge gateways overview](README.md) for the broader category map.

## Capacity and recovery — validate, don't assume

Z2M is the active link between the Zigbee mesh and the broker. If the host or container restarts, Zigbee mesh routing pauses for the duration. Coordinator capacity, traffic-handling, and recovery behavior should all be validated against the specific device count and traffic pattern of your deployment before committing the design. Acceptable downtime windows, restart frequency, and operational tolerance for transient outages are deployment-specific decisions, not generic guidance — confirm them with a deliberate failure test before relying on Z2M for any operationally-relevant telemetry.

This guide does not prescribe redundancy patterns for Z2M. Z2M redundancy is non-trivial and depends on assumptions about coordinator vendor, mesh topology, and how clients tolerate brief disruptions; treat redundancy as a deployment-design question, not a documented pattern.

## Vendor and firmware caveats

- **Zigbee 3.0 interoperability is good but not perfect.** Specific device models may need firmware-version-specific handling. Validate the planned device set against the [Zigbee2MQTT supported devices list](https://www.zigbee2mqtt.io/supported-devices/) before procurement.
- **Sparkplug B is not native to Z2M.** Z2M publishes flat JSON, not Sparkplug. For deployments standardised on Sparkplug, an additional Sparkplug-encoding bridge sits between Z2M and the broker.
- **Coordinator firmware compatibility.** The `serial.adapter` setting in Z2M's `configuration.yaml` must match the coordinator chip family — `ezsp` for EFR32MG (Sonoff ZBDongle-E and similar), `zstack` for CC2652P (Sonoff ZBDongle-P). Mismatched values cause Z2M to fail to start.

## Routing handoff to the MQTT connector

Once Z2M is publishing, every Zigbee device becomes a regular MQTT publisher from the platform's perspective. The connector-side work is the same as for any other MQTT-publishing gateway:

1. Configure the [MQTT connector](../../connectors/mqtt-connector.md) (Cloud MQTT or External MQTT) and point Z2M at it via `mqtt.server` and `mqtt.base_topic` in `configuration.yaml`.
2. For each Zigbee device, register a device record with **Device ID** equal to the Z2M friendly name (byte-for-byte; whitespace is stripped on the platform side, so use whitespace-free names such as `LineA-Sensor-12` or `lab_temp_03`).
3. Set the **Device ID Topic** to `zigbee2mqtt/{{deviceId}}`.
4. Map the payload keys following the two-pass save pattern documented in [Topics and device routing](../../connectors/mqtt/topics-and-device-routing.md), and revisit Mapping iteratively as additional fields appear in live payloads.

For a complete Z2M setup reference (`docker-compose.yml`, `configuration.yaml` template, coordinator selection, channel choice), consult the Zigbee2MQTT project's own documentation. Z2M's published topic stream reaches the platform's MQTT connector identically to any other MQTT edge gateway producing flat JSON on the broker.
