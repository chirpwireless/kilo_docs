# MQTT edge gateways

In commercial deployments, the MQTT connector is often the integration surface for **edge gateways** — small computers or industrial appliances that translate non-MQTT protocols into MQTT publishes. Modbus PLCs, BACnet building management systems, OPC-UA-exposed control systems, Sparkplug B-equipped automation, and Zigbee meshes don't speak MQTT natively, but well-supported gateway software can bridge each of these into the platform's connector with a uniform topic and payload model.

This page covers the architectural patterns for MQTT edge gateways and the design choices that affect how cleanly they integrate. It is not a step-by-step setup guide for a specific gateway product — vendor documentation handles installation; this page is the integration reference.

## What an MQTT edge gateway does

The edge gateway sits between non-MQTT field equipment and the MQTT broker. Its responsibilities:

1. **Read from the source protocol** — Modbus RTU/TCP polling cycles, BACnet COV subscriptions, OPC-UA subscriptions, Sparkplug B node sessions, Zigbee mesh participation.
2. **Normalize values** — apply scaling factors, convert units to a consistent set, decode bitfields and enumerations into human-readable values.
3. **Publish to MQTT** — emit JSON payloads (or Sparkplug B Protocol Buffers, where applicable) to a topic shape consumable by downstream subscribers.
4. **Optionally accept commands** — subscribe to control topics (`/set`, `/cmd`, vendor-specific) and write back to the source protocol. (The platform's connector consumes telemetry; control flows are gateway-side.)

The gateway is typically a small Linux device near the field equipment — an industrial PC, a DIN-rail computer, a Raspberry Pi, or a vendor appliance. Operationally, it runs as a system service with restart-on-failure semantics.

## Common gateway categories

| Category | Typical software / appliances | Topic shape | Payload format |
|----------|------------------------------|-------------|----------------|
| **Modbus → MQTT** | Modbus2MQTT, vendor-provided gateways (Advantech, Moxa), custom Node-RED flows | `{site}/{plc}/{deviceId}/data` or per-register topics | JSON object or one-value-per-topic |
| **BACnet → MQTT** | Vendor BMS bridges, EasyIO, custom integration platforms | `building/{floor}/{ahu-id}/{point}` | JSON with point-to-value mapping |
| **OPC-UA → MQTT** | OPC Router, FactoryStudio, Sparkplug B edge nodes | Sparkplug `spBv1.0/{group}/DDATA/{node}/{device}` or custom | **Must be JSON for the platform's connector to ingest it.** Sparkplug B Protocol Buffers must be translated to JSON by the edge gateway before publishing. |
| **Sparkplug B native** | Inductive Automation Ignition Edge, Cirrus Link edge gateways | `spBv1.0/{group}/DDATA/{node}/{device}` | **Must be translated to JSON by the edge gateway before MQTT-connector ingestion.** The platform's MQTT connector does not decode Sparkplug B Protocol Buffers. |
| **Zigbee → MQTT** | Zigbee2MQTT (open source, common in pilots and small commercial deployments) | `zigbee2mqtt/{friendlyName}` | Flat JSON |
| **Custom bridges** | Hand-rolled Python/Node.js bridges over vendor APIs | Whatever the bridge author chose | Usually JSON |

The platform consumes any of these — the connector is protocol-agnostic. What matters at integration time is matching the gateway's topic shape in the Device ID Topic field and the gateway's payload structure in the Mapping tab. See [Topics and device routing](topics-and-device-routing.md) for the routing details.

## Design considerations for new edge-gateway integrations

When choosing or configuring an edge gateway for a new commercial integration, four design decisions affect ingestion quality:

### Topic shape

A predictable, hierarchical topic shape simplifies device registration and makes topic patterns reusable across similar devices. Recommended:

```
{site}/{system}/{deviceId}/{metric-or-data}
```

For example, `plant-3/line-a/extruder-04/data` for a flat-JSON status object, or `plant-3/line-a/extruder-04/temperature` for one-value-per-topic. Pattern-friendly shapes let one Device ID Topic pattern cover many devices in the same family — `plant-3/line-a/{{deviceId}}/data` works for every device on Line A.

Avoid:

- Whitespace in any segment, particularly the device-identifier segment. The Device ID input strips whitespace.
- Mixing identifier conventions across a single integration. If some devices use hyphens and others use underscores, document the choice and apply it consistently.
- Embedding free-form metadata in the topic (operator names, dates, work-order numbers). Topics are routing keys, not annotations — put metadata in the payload.

### Payload format

Flat or shallowly-nested JSON simplifies the Mapping tab. The platform automatically flattens nested objects to dot-notation paths, so `{"vibration": {"rms": 0.42, "peak": 1.8}}` becomes `vibration.rms` and `vibration.peak` as Connector Key candidates. Deeply-nested hierarchies still work but are less ergonomic for operators reviewing mappings.

**Sparkplug B requires JSON translation at the edge.** The platform's MQTT connector consumes JSON payloads — it does not decode Sparkplug B Protocol Buffers natively. Edge gateways using Sparkplug B (Inductive Automation Ignition Edge, Cirrus Link MQTT Modules, OPC Router with Sparkplug output) must be configured to translate Protocol Buffers to JSON before publishing to topics the connector subscribes to. Most commercial Sparkplug-aware edge gateways provide this translation as a standard configuration option.

### Publishing cadence

Publishing cadence is a deployment-specific decision driven by rules-engine response-time targets, broker capacity, and device firmware capability. The edge gateway's COV / dead-band configuration is the lever for reducing redundant publishes once a baseline cadence is chosen for a given device class. Verify the cadence the edge gateway can sustain against the rules and dashboards that consume the data, and adjust as the deployment matures.

### Reliability and disconnection behavior

For mission-relevant telemetry, configure the gateway with:

- **MQTT QoS 1** for telemetry topics — at-least-once delivery; the gateway retries on broker reconnection.
- **MQTT Last Will and Testament (LWT)** — the gateway's "I disconnected unexpectedly" announcement, typically published as a retained message to a status topic. The platform consumes LWT messages identically to publisher-originated messages; you can map a `status` field that reflects gateway connectivity.
- **Retained "online" messages** — published on connect, replaced by LWT on disconnect. Subscribers (including new ones connecting later) see current connectivity state immediately.
- **Persistent local store** — the gateway buffers telemetry while disconnected from the broker and replays on reconnection. Most commercial edge gateways support this; verify the buffer size against expected disconnection windows.

## Zigbee2MQTT as an MQTT edge gateway

Zigbee2MQTT is one specific example of the MQTT edge gateway pattern, used most often in pilot and small commercial deployments where a Zigbee mesh is preferable to dedicated radios. Z2M runs on a Linux host with a USB Zigbee coordinator, joins devices to its mesh, and publishes each device's state and telemetry as flat JSON on `zigbee2mqtt/{friendlyName}`.

For commercial deployments evaluating Z2M:

- **Topology limits.** A single Z2M coordinator supports a mesh of up to several hundred devices, with practical limits driven by traffic volume and mesh routing depth.
- **Restart sensitivity.** Z2M is the active link between the Zigbee mesh and MQTT. If the host or container restarts, Zigbee mesh routing pauses for the duration. Plan for redundant coordinators in deployments where this is operationally unacceptable.
- **Vendor mix.** Zigbee 3.0 interoperability is good but not perfect; specific device models may need firmware-version-specific handling. Validate the planned device set against Z2M's [supported devices list](https://www.zigbee2mqtt.io/supported-devices/) before commitment.
- **Sparkplug B not native.** Z2M publishes flat JSON, not Sparkplug. For deployments standardized on Sparkplug, an additional Sparkplug-encoding bridge would be required.

For a complete Z2M setup reference, consult the Zigbee2MQTT project's own documentation. The platform's connector consumes Z2M's topic stream identically to any other MQTT edge gateway.

## Where to go next

- [Topics and device routing](topics-and-device-routing.md) — registering devices behind any of these gateways.
- [Cloud MQTT](cloud-mqtt.md) and [External MQTT](external-mqtt.md) — choosing the broker side.
- [Troubleshooting](troubleshooting.md) — diagnosing ingestion issues.
