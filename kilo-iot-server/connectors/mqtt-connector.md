---
description: Bring MQTT-capable devices into Kilo IoT — Cloud MQTT (platform-provisioned broker) or External MQTT (bridge yours).
---

# MQTT Connector

The MQTT connector lets you bring any MQTT-capable device into the Kilo IoT Server without going through LoRaWAN. Factory PLCs, HVAC controllers, building energy meters, MQTT-producing edge gateways (Modbus-to-MQTT, BACnet-to-MQTT, OPC-UA-to-MQTT bridges), and custom-firmware sensors that already publish data over MQTT can all be connected directly. Once connected, their data flows through the same normalization pipeline, triggers the same rules engine, and appears in the same dashboards as every other device on the server.

Two variants are available:

| Variant | How the broker is provided | Limit | Best for |
|---------|--------------------------|-------|----------|
| **External MQTT** | Your own broker — cloud-hosted, on-premise, or in a facility network, as long as it is reachable by the platform | Up to 10 per organization | Connecting existing infrastructure that already publishes to MQTT |
| **Cloud MQTT** | Platform-provisioned — the server provides a dedicated broker endpoint and credentials per connector | Unlimited | New deployments, pilots, and remote sites where you want MQTT ingestion without operating broker infrastructure yourself |

Use External MQTT when you already have a broker running. Use Cloud MQTT when you want the platform to provide one — you give the connector a name, the platform provisions the rest.

> **Scope.** This documentation covers MQTT telemetry ingestion and device mapping. MQTT command and control through the platform API is not covered here.

## In this section

- [What MQTT is](mqtt/what-is-mqtt.md) — Protocol primer for engineers new to MQTT or refreshing the model.
- [Cloud MQTT](mqtt/cloud-mqtt.md) — Provisioning a platform-managed broker for a connector.
- [External MQTT](mqtt/external-mqtt.md) — Connecting an existing broker, including network reachability, authentication, and verification.
- [Topics and device routing](mqtt/topics-and-device-routing.md) — How topic patterns, device-ID extraction, and the Mapping tab work together. Read before registering devices.
- [Troubleshooting](mqtt/troubleshooting.md) — Diagnosing connection, topic-match, and Logs-tab issues.

For the hardware/edge-gateway side of the integration — Modbus, BACnet, OPC-UA, Sparkplug B, and Zigbee2MQTT bridges that publish MQTT into the connector — see [MQTT Edge Gateways](../gateways/mqtt-edge-gateways/README.md) under Gateways.

---

## Adding an External MQTT connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector**.
3. Select **External MQTT** from the **Connector type** dropdown.
4. Fill in the configuration form:

   | Field | Required | Details |
   |-------|----------|---------|
   | **Name** | Yes | Display name for this connector |
   | **Broker URL** | Yes | Full URL with scheme and port. The broker must be network-reachable from the platform — a broker accessible only on an isolated local network will not connect. Accepted schemes: `mqtt://`, `mqtts://`, `tcp://`, `ssl://`. Example: `mqtts://broker.facility.example.com:8883` |

5. Choose an **authentication method** from the tabs:

   | Method | What to fill in |
   |--------|----------------|
   | **Anonymous** | No credentials required |
   | **Basic** | Username and Password (password has a show/hide toggle) |
   | **Certification** | Three file upload buttons: **CA Certificate**, **Client Certificate**, **Private Key**. Upload each file — do not paste PEM content |
   | **JWT Token** | Token field (show/hide + copy). The token is the required JWT credential. A Certificate upload field appears in the form — it is optional; the platform submits only the token for JWT authentication |

6. Click **Add**.

The connector appears in the connectors table. Click its row to open the connector detail page.

---

## Adding a Cloud MQTT connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector**.
3. Select **Cloud MQTT** from the **Connector type** dropdown.
4. Enter a **Name** for the connector.
5. Click **Add**.

The platform provisions a dedicated broker endpoint and displays the generated credentials:

| Credential | Details |
|-----------|---------|
| **Broker URL** | The managed MQTT endpoint. Copy it using the copy button. |
| **Topic prefix** | All messages published to this connector must use this prefix. It keeps your data organized under the connector's assigned namespace. Copy it using the copy button. |
| **Username** | Assigned automatically. Copy it using the copy button. |
| **Password** | Shown once. **Copy it immediately.** If lost, rotate the credentials from the connector settings — devices will need to be reconfigured with the new password. In edit mode, a regenerate button is available. |

#### Connecting devices to Cloud MQTT

Configure your devices or gateway software to publish to the provided endpoint. Key details before connecting:

- **The Broker URL is the complete endpoint** — copy it exactly as shown. It uses MQTTS (TLS) on port 1884. Configure your devices accordingly; this is not the standard port 1883.
- **All published topics must start with the Topic prefix.** The full topic your device publishes to is `{Topic prefix}/{device topic}` — for example, if the prefix is `iot/abc123/xyz789` and your device publishes power readings, you might publish to `iot/abc123/xyz789/EM-4492/power`.
- **Routing templates on the device do not include the prefix.** When configuring the Device ID Topic in the Topic tab, enter only the device-level portion — for example `{{deviceId}}/power`. The platform strips the prefix before routing.

No broker infrastructure on your end is required — the platform manages the broker.

---

## Registering a device on MQTT

Each device that publishes through an MQTT connector must be registered individually. Registration maps the MQTT topic structure and payload format to the server's device model.

1. From the connector detail page, click **Add device** — or navigate to **Devices → Registering Devices** and select this connector.
2. Complete the standard device fields (name, connector, template).

> **Device ID = topic segment, byte for byte.** Whatever you enter as the device's identifier must match the device-level topic segment your hardware publishes — exactly. The Device ID input strips whitespace, so identifiers like `EM 4492` will silently fail to match a device publishing on `EM-4492`. Use the same exact string in the device record and on the publishing side; capitalisation is preserved and significant.

3. The device opens with a **Mapping** tab. Inside Mapping there are two sub-tabs: **Topic** (where the platform learns how to find the device in the topic stream) and **Mapping** (where you map payload keys to normalized metrics). Selecting **Mapping** opens the **Topic** sub-tab first; click **Next** or the inner **Mapping** label to reach the per-key rows.

### Topic tab

The Topic tab tells the connector where to find the device identifier in each MQTT message, and which topics carry telemetry data.

#### Device ID Topic *(required)*

The MQTT topic pattern this device publishes to. Use `{{deviceId}}` to mark the segment of the topic that contains the device identifier.

**Example:** If your energy meter publishes to `facility/meters/EM-4492/power`, enter:
```
facility/meters/{{deviceId}}/power
```

The server extracts `EM-4492` from that segment and routes all matching messages to this device's Digital Twin.

#### Where to get the device ID

- **Topic** *(default)* — The ID is extracted from the `{{deviceId}}` segment of the topic.
- **Payload** — The ID is taken from a field inside the JSON payload. When selected, the **Device ID Payload Path** field becomes required.

#### Device ID Payload Path *(shown when source = Payload)*

A dot-notation path to the device ID field inside the JSON payload.

**Example:** For a payload `{"device": {"id": "EM-4492"}, "power": 4.2}`, enter:
```
device.id
```

#### Telemetry topics *(optional)*

Telemetry topic rows define how individual measurements are extracted from MQTT messages. They are optional.

For devices that publish a flat JSON payload on a single topic — such as building management systems or PLCs publishing a status object — you can skip this section entirely. The server parses all keys from the JSON payload automatically, including nested objects, which are flattened into dot-notation paths (for example, `{"device": {"temperature": 22.5}}` becomes accessible as `device.temperature`). The Mapping tab is still required — each payload key needs a corresponding row with a matching Connector Key to become a normalized platform metric. Only add telemetry topic rows when you need explicit per-topic control: for example, when metric values are embedded in the topic path rather than the payload, or when you want to rename specific metrics.

| Field | Details |
|-------|---------|
| **MQTT Topic for telemetry** | Topic pattern for this metric row, using `{{deviceId}}` placeholder |
| **Connector Key** | Names the source key arriving from MQTT. This key must match what the device publishes. The Connector Key does not create a platform metric on its own — the Mapping tab is where it is linked to a normalized metric. |

**Add new topic** — adds a telemetry topic row.

**Apply all** — uses the device ID topic pattern as a prefix to generate telemetry topic templates for rows that already have a Connector Key filled in. It generates per-topic patterns based on the device ID topic — it does not copy the device ID topic value verbatim.

#### Placeholder reference

| Placeholder | Where used | What it does |
|-------------|-----------|-------------|
| `{{deviceId}}` | Device ID Topic, telemetry topic templates | Marks the topic segment containing the device identifier |
| `{{value}}` | Telemetry topic templates | Marks a topic segment whose content is the measurement value itself — for example, `meters/EM-4492/230.5` where `230.5` is the reading. Do not use `{{value}}` for topic segments that name the metric (like `power` or `voltage`) — if the segment is a label rather than a value, use the payload-style approach instead |

---

### Mapping tab

The Mapping tab links incoming MQTT data to normalized platform metrics. This is where raw device values become queryable sensor data in the Digital Twin.

The Connector Key in the Mapping tab must match the key published in the MQTT message (or the Connector Key defined in the Topic tab). Without a match, the data is silently ignored — the helper text above the table confirms this: **"If the Connector key is not filled in, the data will be ignored."**

The table has 8 columns:

| Column | Type | Details |
|--------|------|---------|
| **Normalized key** | Dropdown | Select from sensor templates; includes a "+ Add new metric" option |
| **Unit** | Read-only | Derived from the selected template |
| **Type** | Read-only | Integer, Float, String, or Boolean — derived from template |
| **Data type** | Dropdown | Reported State, Telemetry, or Device Metadata |
| **Connector key** | Dropdown | Lists keys received from this device's payload. Empty until at least one publish has arrived |
| **Value** | Read-only | Current live value received from the broker |
| **Last update** | Read-only | Timestamp of the most recently received value |
| **Actions** | Icon | Trash icon removes the row |

**Add key** — adds a new empty mapping row.

#### Reported State vs Telemetry

The **Data type** dropdown distinguishes two operational categories:

- **Reported State** — controllable device properties whose current value the device publishes. The setpoint of an HVAC controller, the on/off state of a smart actuator, the open/closed state of a valve. These are values the device can also be commanded to change.
- **Telemetry** — read-only measurements. Temperature probes, energy meter readings, vibration RMS values, link quality. These are observations the device makes about itself or its environment.

Pick the type that fits the operational intent of the value. Reported State is appropriate for state-machine fields and configurable setpoints; Telemetry is appropriate for sensor readings and diagnostics.

#### Connector Key dropdown is empty until the device publishes once

The **Connector key** column is a dropdown populated from payload keys actually received from the device — not a free-text input. Before the first publish arrives, the dropdown is empty and the rows cannot be completed.

Registering an MQTT device is therefore a two-pass workflow:

1. Add a row per metric, select the **Normalized key** from the templates dropdown (or use **+ Add new metric** to create one), set the **Data type**, and leave the **Connector key** empty.
2. Click **Save**. The device record is persisted.
3. Confirm the device is publishing — for an MQTT-producing edge gateway, that the gateway process is running and the device has emitted at least one message.
4. Reopen the device. The **Connector key** dropdown now lists keys received from the most recent publishes.
5. Match a key to each mapping row.
6. Click **Save** again.

#### Mapping tab Value column vs Logs tab history

The Mapping tab's **Value** column reflects the most recent payload — a live snapshot. Values appear here as soon as topic matching succeeds, even before Connector keys are populated.

The **Logs** tab is per-sensor history. It is populated only by publishes that arrive *after* Connector keys are saved. After the second pass of the workflow above, generate a fresh publish (a wake-on-event from the device, a scheduled report, or for development gateways a poll request) to confirm the Logs tab is receiving records.

#### Mapping is iterative — revisit after data arrives

MQTT mapping is not a one-shot operation. Initial registration is often based on the operator's expectation of what the device or edge gateway will publish; the first real payload frequently reveals additional keys — vendor-defined diagnostic fields, undocumented state fields, nested objects with useful sub-paths. Treat the Mapping tab as a place to revisit:

1. After live data has been arriving for a representative period, reopen the device record.
2. Inspect the **Connector key** dropdown and the **Value** column to see what the device is actually publishing.
3. Add Mapping rows for fields the deployment now wants to track (a diagnostic field for predictive maintenance, a state field that became operationally relevant, a nested vibration sub-metric, and so on).
4. Pick the right Normalized key and Data type for each new row.
5. Save.
6. Trigger a fresh publish so the Logs tab begins collecting history for the new mappings.

This iterative refinement is the expected workflow, particularly for vendor-mixed fleets where payload schemas vary subtly across firmware revisions of nominally-identical devices.

#### Payload type → metric Type translation

When a device publishes an enumerated state as a string (for example, an actuator publishing `"OPEN"`/`"CLOSED"`, or a Zigbee `state` field with `"ON"`/`"OFF"`), the value arrives as a string — even though the conceptual type is binary. Map these to the **String** Type in the metric template, not Boolean. Selecting Boolean for a string-encoded enum will result in null values.

For Zigbee2MQTT-bridged devices specifically, the [zigbee2mqtt.io](https://www.zigbee2mqtt.io/supported-devices/) device pages list each feature with a type — translate as follows:

| Z2M feature type | Metric Type | Notes |
|------------------|-----------|-------|
| `binary` | **String** | Values are `"ON"`/`"OFF"` strings, not booleans |
| `numeric` | **Number** | Numeric ranges mapped directly |
| `enum` | **String** | Enumerated values arrive as strings |
| `text` | **String** | Free-form text |

#### How to discover what keys a device publishes

The Mapping tab does not auto-detect keys. Three discovery methods, in order of practicality:

1. **The device's documentation or vendor data sheet.** Industrial devices typically ship with a payload schema or topic catalog.
2. **For Zigbee2MQTT-bridged devices**, the device page at `https://www.zigbee2mqtt.io/devices/{modelId}.html` lists the Exposes set. Note that real payloads may include keys not on the device page — trust the live payload over the documentation when they differ.
3. **Subscribe to the broker and inspect the live payload** — `mosquitto_sub` against the broker (or the Logs tab once at least one mapping row resolves) shows the JSON payload directly. Every top-level key is a valid Connector Key.

---

## Expected results

After the connector is configured and devices are registered:

- The connector row on the **Connectors** page shows **Last data received** updating as messages arrive.
- The **Connected devices** count reflects registered devices.
- Each device's Digital Twin updates with incoming telemetry — viewable on the device detail page and in dashboards.
- Rules engine conditions referencing these device metrics evaluate in real time.

---

## Troubleshooting

A short list — see [Troubleshooting](mqtt/troubleshooting.md) for diagnostic recipes covering authentication failures, certificate mismatches, the empty-Logs-tab pattern, and verification tooling.

**No data arrives after connection:**
- For External MQTT: verify the broker URL scheme (`mqtt://`, `mqtts://`, `tcp://`, or `ssl://`), confirm the broker is reachable from the public internet (Kilo IoT Server connects out to your broker), and double-check credentials.
- For TLS (Certification auth): verify the CA certificate matches the broker's certificate chain, and that the client certificate and private key are a matching pair.
- For Cloud MQTT: confirm that your devices are publishing to the correct Broker URL and Topic prefix, and that the username and password are correct. If the password was lost, rotate it from the connector settings.

**Device is registered but no data appears:**
- Compare the registered Device ID Topic against the exact topic the device publishes to. Topics are case-sensitive and must match exactly.
- Confirm the `{{deviceId}}` placeholder position lines up with the actual device ID segment in the topic.
- Confirm the Device ID field is byte-for-byte identical to the device-level segment — whitespace is stripped on input and breaks the match.
- If using Payload source: verify the Device ID Payload Path resolves correctly against the actual payload structure.

**Mapping tab Value column updates but Logs tab is empty:**
This is the most common pattern when Connector keys are saved after the most recent publish arrived. The Logs tab is populated only by publishes received *after* Connector keys are saved. Trigger a fresh publish — a device wake-up, a scheduled report, or a `/get` poll for development gateways — and the Logs tab will populate.

**Metric values missing or showing wrong keys:**
- Check that the Connector Key in the Mapping tab matches the key in the MQTT payload exactly (case-sensitive).
- If relying on automatic JSON parsing (no telemetry topics defined): the platform flattens the entire JSON payload, including nested objects, into dot-notation keys — for example, `{"device": {"temperature": 22.5}}` becomes accessible as `device.temperature`. Use these dot-notation paths in the Connector Key column of the Mapping tab.

**Cloud MQTT password lost:**
The password cannot be retrieved after creation. Rotate the credentials from the connector settings and reconfigure devices with the new password.

**Device fails to save on a Cloud MQTT connector:**
If saving a device on a Cloud MQTT connector fails, contact support. Support can help complete the registration through the supported API-assisted path.

---

## Operational examples

**Factory PLC — per-topic telemetry:**
A PLC publishes discrete measurements to separate MQTT topics on a plant-floor broker (`mqtts://plc-broker.plant.example.com:8883`). External MQTT connector, username/password auth. Device ID Topic: `plant/line-a/{{deviceId}}/data`. One telemetry topic row per measurement (cycle_time, reject_count, temperature). Each row maps to a normalized platform metric in the Mapping tab.

**Building HVAC system — flat JSON payload:**
A building management system publishes a JSON status object per device on a single topic. The payload is flat JSON, so no telemetry topic rows are needed — all keys are automatically parsed. Device ID is in the topic segment. Mapping tab maps each JSON key to the appropriate normalized metric.

**New site deployment — Cloud MQTT:**
A remote facility site needs MQTT ingestion but the team doesn't want to operate a broker. A Cloud MQTT connector is created; the platform provisions a broker endpoint. Energy meters and environmental sensors are configured to publish to the provided endpoint and topic prefix. No broker infrastructure to manage — the platform handles it.

**Sub-metering energy system:**
Energy meters publish individual readings (kWh, kW, voltage, current) to separate topics. Telemetry topic rows map each topic to a named Connector Key. The Mapping tab links each Connector Key to normalized platform metrics. All readings aggregate into a single device Digital Twin.

---

## What's next

- [Registering Devices](../devices/registering-devices.md) — Complete device registration and Digital Twin configuration.
- [Connectors](README.md) — Overview of all connector types.
