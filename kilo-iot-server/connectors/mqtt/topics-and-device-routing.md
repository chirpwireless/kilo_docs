---
description: MQTT topic structure and Device ID routing in Kilo IoT Server — pattern placeholders, Mapping vs Topic sub-tabs, and the two-pass save flow.
---

# Topics and device routing

This page covers how the Kilo IoT Server resolves an inbound MQTT message to a specific Digital Twin: the structure of incoming topics, the **Device ID Topic** field's pattern semantics, the inner Mapping/Topic sub-tabs, the byte-for-byte match between the Device ID input and the device-level topic segment, and the two-pass save flow that the Mapping tab requires. Read this before registering MQTT devices in production deployments — most "device registered but no telemetry" support tickets resolve to one of the patterns documented here.

## Topic shape after broker-side processing

The platform's broker exposes incoming MQTT messages with a connector-scoped prefix. For Cloud MQTT, the prefix is the connector's Topic prefix (`iot/{org}/{connection}`). For External MQTT, the platform's outbound bridge re-publishes incoming messages from your broker into an internal namespace; the device-level topic shape is preserved.

After internal prefix-stripping, the topic seen for device routing is the device-level segment:

```
Cloud MQTT:    plant-3/line-a/EM-4492/data         (after prefix strip)
External MQTT: plant-3/line-a/EM-4492/data         (after bridge namespace strip)
```

The Device ID Topic field describes only this device-level shape. Connector-prefix handling is internal to the platform; the operator does not configure it.

## The Device ID Topic field accepts a topic pattern

The field accepts a topic pattern with placeholder substitution at the segment level. The pattern is matched literally against incoming topics, and segments containing placeholders contribute extracted values to the routing decision.

Standard placeholders:

| Placeholder | Effect |
|-------------|--------|
| `{{deviceId}}` | Marks the topic segment whose value is the device identifier. Required in every Device ID Topic pattern. The value extracted at this position is matched against the Device ID field on the device record. |
| `{{value}}` | Marks a topic segment whose value is the metric reading itself — for example, `meters/EM-4492/4.21` where `4.21` is the power reading. Use only when the metric value is encoded in the topic; for label-style segments (`/power`, `/temperature`) use the payload-side approach. |

Example patterns:

| Publishing pattern | Device ID Topic |
|-------------------|----------------|
| `plant-3/line-a/EM-4492/data` | `plant-3/line-a/{{deviceId}}/data` |
| `tasmota/PlugKitchen/SENSOR` | `tasmota/{{deviceId}}/SENSOR` |
| `zigbee2mqtt/LivingRoomSensor` | `zigbee2mqtt/{{deviceId}}` |
| `home/sensors/esp-kitchen/data` | `home/sensors/{{deviceId}}/data` |
| `meters/EM-4492/4.21` (value in topic) | `meters/{{deviceId}}/{{value}}` (rarely used; payload-side is the more common choice) |

For nested industrial topic shapes such as Sparkplug B (`spBv1.0/{group}/DDATA/{node}/{device}`), choose the segment that uniquely identifies the device record being registered. Hierarchical context (group, node) is matched literally as part of the pattern.

## Device ID input must match the extracted segment byte-for-byte

The Device ID field on the device record stores the canonical identifier the platform looks for at the `{{deviceId}}` position. The match is byte-for-byte: case-sensitive, whitespace-sensitive, and unicode-sensitive.

A pattern that catches integrators frequently: **the Device ID input strips whitespace on save.** A device publishing on `plant-3/line-a/EM 4492/data` (with a space in the device ID) will not match a Device ID typed as `EM 4492` — the input gets normalized to `EM4492` (or partially trimmed; the exact behavior is not guaranteed). The mismatch is silent — no error appears on save and no error appears when telemetry arrives. The Mapping tab simply stays empty.

The recommendation in production deployments: avoid whitespace in device identifiers entirely. Use hyphens (`EM-4492`), underscores (`EM_4492`), or no separator (`EM4492`). Whatever you choose, the publishing side and the Device ID field must produce the same exact string.

## The Mapping tab has two sub-tabs

When you open a device's Mapping tab, the UI presents an outer tab labeled **Mapping** containing two sub-tabs: **Topic** and **Mapping**. Selecting the outer tab lands on the **Topic** sub-tab by default.

- **Topic sub-tab** — Device ID Topic, Where to get the device ID, Device ID Payload Path (when source is Payload), Telemetry topics (per-topic metric definitions for one-metric-per-topic publishing schemes).
- **Mapping sub-tab** — connector-key rows that link payload keys to normalized metrics.

A device registered without visiting the inner Mapping sub-tab has Topic configuration but no metric mappings — so even if topic matching succeeds and Last data received updates, the device record holds no telemetry. Click **Next** at the bottom of the Topic sub-tab or click the inner **Mapping** label to reach the per-key rows.

## Telemetry topics: when to configure them

The **Telemetry topics** rows on the Topic sub-tab are for publishing schemes where each metric has its own MQTT topic — e.g., a PLC bridge publishing power to `meters/{deviceId}/power`, voltage to `meters/{deviceId}/voltage`, current to `meters/{deviceId}/current`, each with a single numeric value as the payload.

For modern flat-JSON publishing schemes — Zigbee2MQTT, Tasmota with a SENSOR object, custom firmware that emits a JSON status object — Telemetry topics rows are not needed. The platform automatically parses every key in the JSON payload and exposes them as Connector Key candidates. Nested objects are flattened to dot-notation paths (`{"vibration": {"rms": 0.42}}` becomes `vibration.rms`).

Configure Telemetry topic rows only when you genuinely have one-topic-per-metric publishing or when you want to override the automatic parser for a specific topic shape.

## Connector key dropdown: the two-pass save flow

The Mapping sub-tab's **Connector key** column is a dropdown. The dropdown options are sourced from payload keys actually received from the device — not a free-form text input.

For a brand-new device with no historical traffic, the dropdown is empty. The platform doesn't yet know what the device sends, so it has nothing to populate the options with. This is intentional, but it means the registration flow is two-pass:

**Pass 1:**

1. Add a Mapping row per metric the device produces.
2. Select the **Normalized key** from the templates dropdown. Use **+ Add new metric** to create a new sensor template if needed. (The modal handles creating both the normalized name and the sensor template — pre-creating names from the Metrics Templates page is optional.)
3. Set **Data type** (Reported State, Telemetry, or Device Metadata — see below).
4. Leave **Connector key** empty.
5. Save the device record.

**Pass 2:**

6. Confirm the device is publishing — for a Z2M-bridged device, that the bridge is running and the device has reported at least once. For a PLC bridge, that the bridge process is publishing data.
7. Reopen the device record. The **Connector key** dropdown now lists the keys received from the device.
8. Match a payload key to each Mapping row.
9. Save again.

Subsequent publishes for the mapped keys flow through to the Logs tab.

## Reported State vs Telemetry vs Device Metadata

The **Data type** dropdown classifies each metric:

- **Reported State** — controllable device properties whose current value the device publishes. The setpoint of an HVAC controller, the open/closed state of a valve, the on/off state of an actuator. Values that the device can also be commanded to change.
- **Telemetry** — read-only measurements. Process variables, energy meter readings, vibration RMS values, link quality, environmental measurements. The device observes; it does not change these.
- **Device Metadata** — values that describe the device itself rather than its operational state. Firmware version, hardware model, serial number, calibration date.

Pick the type that matches the operational intent. Reported State is appropriate for state-machine fields and configurable setpoints; Telemetry is appropriate for sensor readings and diagnostics; Device Metadata is appropriate for static device-identity fields.

## Payload type → Metric Type translation

The metric template Type (Integer, Float, String, Boolean) is fixed by the template chosen for the Normalized key. Match the template Type to the data the device actually sends:

- **String-encoded enums and binary states** — values like `"OPEN"`/`"CLOSED"`, `"ON"`/`"OFF"`, `"running"`/`"stopped"` arrive as JSON strings. Map to a **String** Type. Do not select Boolean — it will result in null values.
- **Numeric scalars** — Integer or Float, depending on whether the device produces decimals.
- **Free-form text** — String.

For Zigbee2MQTT-bridged devices, the [zigbee2mqtt.io](https://www.zigbee2mqtt.io/supported-devices/) device pages list each feature with a type — translate as follows:

| Z2M feature type | Metric Type | Example |
|------------------|-----------|---------|
| `binary` | **String** | `state` (`"ON"`/`"OFF"`) |
| `numeric` | **Number** | `brightness`, `linkquality` |
| `enum` | **String** | `power_on_behavior`, `color_mode` |
| `text` | **String** | Free-form text fields |

## Mapping tab Value column vs Logs tab history

After Pass 2 of the save flow:

- The **Value** column on the Mapping tab updates from the most recent payload — a live snapshot. Values appear as soon as topic matching succeeds, even before all Connector keys are populated.
- The **Logs** tab is per-sensor history. It is populated only by publishes that arrive *after* Connector keys are saved. Older publishes are not retroactively normalized.

Operationally: after completing Pass 2, generate a fresh publish (a device wake-on-event, a scheduled report, a poll request from the bridge) to confirm the Logs tab is receiving records. If the device only reports on schedule or on state change, plan validation around that cadence.

### Iterative mapping refinement

Initial mapping rarely covers every useful field a device exposes. Operators commonly discover after deployment that the device publishes additional keys — vendor diagnostic fields, undocumented state values, nested sub-objects with operationally-relevant paths. The recommended pattern is to revisit the Mapping tab after data has been arriving for a representative period:

- Inspect the **Connector key** dropdown and the **Value** column to see exactly what the device is publishing in production.
- Add new Mapping rows for fields the deployment now wants in the Digital Twin.
- Set the appropriate Normalized key and Data type per row.
- Save.
- Generate a fresh publish so the Logs tab begins recording history for the newly-mapped fields.

For fleets of nominally-identical devices, run this refinement on a representative sample before rolling the mapping changes out to the rest of the fleet — firmware revisions can introduce subtle key differences.

## Where to go next

- [Troubleshooting](troubleshooting.md) — diagnostic recipes for topic-match failures and the empty-Logs-tab pattern.
- [MQTT Edge Gateways](../../gateways/mqtt-edge-gateways/README.md) — patterns for industrial MQTT-producing bridges that feed this routing pipeline (under Gateways).
