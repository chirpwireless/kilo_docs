# MQTT Connector

The MQTT connector lets you bring any MQTT-capable device into the Kilo IoT Server — without going through LoRaWAN. Factory PLCs, HVAC controllers, building energy meters, and custom-firmware sensors that already publish data over MQTT can all be connected directly. Once connected, their data flows through the same normalization pipeline, triggers the same rules engine, and appears in the same dashboards as every other device on the server.

Two variants are available. You choose when adding the connector:

| Variant | Broker location | When to use |
|---------|----------------|-------------|
| **External MQTT** | Your infrastructure | You already operate an MQTT broker in your facility, cloud, or on-premise environment. Supports anonymous, username/password, and TLS certificate authentication. |
| **MQTT Cloud** | Kilo-managed | You want to avoid running your own broker. The server provides dedicated broker credentials. Devices publish directly to the cloud endpoint. |

---

## Prerequisites

- An MQTT broker accessible from the internet (External MQTT only) — or no broker at all (MQTT Cloud handles it).
- Device firmware or gateway software that publishes data to MQTT topics.
- Device IDs that are either embedded in the MQTT topic path or present in the JSON payload.
- At least one organization with the MQTT connector not yet added.

---

## Step 1: Add the MQTT connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector** in the top-right corner.
3. In the dialog, select **MQTT** from the **Connector type** dropdown.
4. Click **Add**.

The connector is created and appears in the connectors table. Click its row to open the connector detail page, where you configure the broker connection.

---

## Step 2: Configure the broker connection

On the MQTT connector detail page, click **Edit** or open the connector settings to configure the broker.

### For External MQTT

Fill in the following fields:

| Field | Required | Details |
|-------|----------|---------|
| **Broker URL** | Yes | Full URL including scheme and port. Accepted schemes: `mqtt://`, `mqtts://`, `tcp://`, `ssl://`. Example: `mqtts://broker.facility.example.com:8883` |
| **Authentication method** | Yes | See [Authentication methods](#authentication-methods) below. |
| **QoS** | No | Quality of Service level (0, 1, or 2). Leave at the default unless your broker requires a specific level. |

#### Authentication methods

| Method | Fields to complete |
|--------|-------------------|
| **Anonymous** | No credentials required. |
| **Username / Password** | **Username** and **Password** fields. |
| **TLS / Certificate** | **CA Certificate** (PEM), **Client Certificate** (PEM), **Client Key** (PEM). Paste the PEM-encoded content of each file. |
| **Token / JWT** | **Token** field. Paste the JWT or bearer token issued by your broker. |

### For MQTT Cloud

No broker URL is needed. After creating the connector, the server generates:

- **Broker endpoint** — the managed cloud MQTT endpoint.
- **Username** — assigned automatically.
- **Password** — displayed once. **Copy it immediately.** You cannot retrieve this password after closing the dialog. If lost, you must rotate the credentials.

Configure your devices or gateway software to publish to the provided endpoint using the displayed credentials.

Click **Save** once all fields are complete.

---

## Step 3: Register a device on MQTT

Each device that publishes through this connector must be registered individually. The registration dialog maps the MQTT topic structure to the server's device model.

1. From the connector detail page, click **Add device** — or navigate to **Devices → Registering Devices** and select this connector.
2. Complete the standard device fields (name, connector, template).
3. In the **Connection** tab, configure the MQTT topic routing:

### Topic routing fields

#### Device ID Topic *(required)*

The topic pattern the device publishes to. Use the `{{deviceId}}` placeholder to mark the segment of the topic that contains the device identifier.

**Example:** If your energy meter publishes to `facility/meters/EM-4492/power`, enter:
```
facility/meters/{{deviceId}}/power
```

The server extracts the value at that segment (`EM-4492`) as the device ID, and routes all messages from that topic to this device's Digital Twin.

#### Device ID Source

Determines where the device ID is extracted from:

- **Topic** *(default)* — The ID is extracted from the topic segment where `{{deviceId}}` appears, as in the example above.
- **Payload** — The ID is taken from the JSON payload body instead of the topic. When set to **Payload**, the **Device ID Payload Path** field becomes required.

#### Device ID Payload Path *(required when source = Payload)*

A dot-notation path into the JSON payload where the device ID value is found.

**Example:** If the payload is `{"device": {"id": "EM-4492"}, "power": 4.2}`, enter:
```
device.id
```

### Telemetry topics *(optional)*

Telemetry topics define how individual measurements are extracted from MQTT messages. They are optional — if you skip this section, the server automatically parses the full JSON payload by treating each top-level key as a separate metric. This works well for flat JSON payloads in the style used by Zigbee2MQTT and many PLCs.

If you need fine-grained control — for example, when the metric name or value is embedded in the topic path, or when you want to rename metrics — add telemetry topic rows:

| Field | Details |
|-------|---------|
| **Topic template** | The topic pattern for this metric. Use `{{deviceId}}` and optionally `{{value}}` as placeholders. |
| **Connector key** | The metric key under which the value is stored in the server. Required when the topic contains `{{value}}`. |

**Example — topic carries the metric name:**
If your device publishes separate topics for each measurement:
- `factory/sensors/S-101/temperature` → payload `23.4`
- `factory/sensors/S-101/humidity` → payload `58`

Add two telemetry topic rows:
```
Topic: factory/sensors/{{deviceId}}/temperature   Key: temperature
Topic: factory/sensors/{{deviceId}}/humidity      Key: humidity
```

**Example — topic carries the value itself:**
If your device publishes metrics where the value is in the topic segment rather than the payload:
```
Topic: facility/meters/{{deviceId}}/reading/{{value}}   Key: power_kw
```

The server extracts the value from the `{{value}}` segment and stores it under the key `power_kw`.

### Placeholder reference

| Placeholder | Where used | What it does |
|-------------|-----------|-------------|
| `{{deviceId}}` | Device ID Topic, Telemetry topic template | Marks the topic segment containing the device identifier. The segment value is extracted and used as the device ID. |
| `{{value}}` | Telemetry topic template | Marks a topic segment that contains a measurement value. Requires a **Connector key** to name the resulting metric. |

4. Click **Next** to advance to the Metrics tab if available, then **Save** to complete registration.

---

## Expected results

After the connector is configured and devices are registered:

- The connector row on the **Connectors** page shows **Last data received** updating as messages arrive.
- The **Connected devices** count reflects registered devices.
- Each device's Digital Twin updates with incoming telemetry — viewable on the device detail page and in dashboards.
- Rules engine conditions referencing these device metrics evaluate in real time.

---

## Troubleshooting

**Connector status shows disconnected or no data arrives:**
- Verify the broker URL scheme is one of: `mqtt://`, `mqtts://`, `tcp://`, `ssl://`.
- Confirm the broker is reachable from the internet (for External MQTT). Check firewall rules and that the port is open.
- Double-check credentials — authentication failures typically prevent connection entirely.
- For TLS: verify the CA certificate matches the broker's certificate chain, and that the client certificate and key are a matching pair.

**Device is registered but no data appears:**
- Compare the registered Device ID Topic against the exact topic the device publishes to. Topics are case-sensitive and exact-match.
- Confirm the device ID segment lines up with the `{{deviceId}}` placeholder position.
- If using Payload source: verify the Device ID Payload Path matches the exact key path in the payload. Test with a JSON parser to confirm the path resolves correctly.

**Metric values missing or showing wrong keys:**
- If using telemetry topics: verify the connector key spelling matches what the template references.
- If relying on automatic flat-JSON parsing (no telemetry topics): verify the payload is a flat JSON object. Nested objects are not automatically expanded — add explicit telemetry topic rows for nested values.

**MQTT Cloud password lost:**
- The password cannot be retrieved. Rotate the credentials from the connector settings. Devices will need to be reconfigured with the new password.

---

## Operational examples

**Factory PLC — per-topic telemetry:**
A Siemens PLC publishes discrete measurements to separate MQTT topics on a plant-floor broker (`mqtts://plc-broker.plant.example.com:8883`). Device ID Topic: `plant/line-a/{{deviceId}}/data`. Auth: username/password. Telemetry topics: one row per measurement (cycle_time, reject_count, temperature).

**Building HVAC system:**
A building management system publishes JSON payloads with multiple zone readings to a single topic per device. The payload is flat JSON, so no telemetry topics are needed — all keys are automatically mapped. Device ID is in the topic segment.

**Sub-metering energy system:**
Energy meters publish individual readings (kWh, kW, voltage, current) to separate topics. Telemetry topic rows map each topic to a named connector key. The MQTT connector aggregates all readings into a single device Digital Twin.

---

## What's next

- [Registering Devices](../devices/registering-devices.md) — Complete device registration and Digital Twin configuration.
- [Connectors](README.md) — Overview of all connector types.
