# MQTT Connector

The MQTT connector lets you bring any MQTT-capable device into the Kilo IoT Server without going through LoRaWAN. Factory PLCs, HVAC controllers, building energy meters, and custom-firmware sensors that already publish data over MQTT can all be connected directly. Once connected, their data flows through the same normalization pipeline, triggers the same rules engine, and appears in the same dashboards as every other device on the server.

Two variants are available:

| Variant | How the broker is provided | Limit | Best for |
|---------|--------------------------|-------|----------|
| **External MQTT** | Your own broker — on-premise, cloud, or a local Mosquitto instance | Up to 10 per organization | Connecting existing infrastructure that already publishes to MQTT |
| **Cloud MQTT** | Platform-provisioned — the server provides a dedicated broker endpoint and credentials per connector | Unlimited | New deployments, pilots, and remote sites where you want MQTT ingestion without operating broker infrastructure yourself |

Use External MQTT when you already have a broker running. Use Cloud MQTT when you want the platform to provide one — you give the connector a name, the platform provisions the rest.

---

## Adding an External MQTT connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector**.
3. Select **External MQTT** from the **Connector type** dropdown.
4. Fill in the configuration form:

   | Field | Required | Details |
   |-------|----------|---------|
   | **Name** | Yes | Display name for this connector |
   | **Broker URL** | Yes | Full URL with scheme and port. Accepted schemes: `mqtt://`, `mqtts://`, `tcp://`, `ssl://`. Example: `mqtts://broker.facility.example.com:8883` |

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

Configure your devices or gateway software to publish to the provided endpoint using the displayed credentials. No broker configuration on your end is required — the platform manages the broker.

---

## Registering a device on MQTT

Each device that publishes through an MQTT connector must be registered individually. Registration maps the MQTT topic structure and payload format to the server's device model.

1. From the connector detail page, click **Add device** — or navigate to **Devices → Registering Devices** and select this connector.
2. Complete the standard device fields (name, connector, template).
3. The device opens with two MQTT-specific tabs: **Topic** and **Mapping**.

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

For devices that publish a flat JSON payload on a single topic — such as building management systems or PLCs publishing a status object — you can skip this section entirely. The server parses all top-level keys from the JSON payload automatically. Only add telemetry topic rows when you need explicit per-topic control: for example, when metric values are embedded in the topic path rather than the payload, or when you want to rename specific metrics.

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
| `{{value}}` | Telemetry topic templates | Marks a topic segment that carries a measurement value; requires a Connector Key |

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
| **Data type** | Dropdown | Telemetry, Reported State, or Device Metadata |
| **Connector key** | Editable | Must match the key published in the MQTT payload or the Connector Key from the Topic tab |
| **Value** | Read-only | Current live value received from the broker |
| **Last update** | Read-only | Timestamp of the most recently received value |
| **Actions** | Icon | Trash icon removes the row |

**Add key** — adds a new empty mapping row.

---

## Expected results

After the connector is configured and devices are registered:

- The connector row on the **Connectors** page shows **Last data received** updating as messages arrive.
- The **Connected devices** count reflects registered devices.
- Each device's Digital Twin updates with incoming telemetry — viewable on the device detail page and in dashboards.
- Rules engine conditions referencing these device metrics evaluate in real time.

---

## Troubleshooting

**No data arrives after connection:**
- For External MQTT: verify the broker URL scheme (`mqtt://`, `mqtts://`, `tcp://`, or `ssl://`), confirm the broker is reachable from the internet, and double-check credentials.
- For TLS (Certification auth): verify the CA certificate matches the broker's certificate chain, and that the client certificate and private key are a matching pair.
- For Cloud MQTT: confirm that your devices are publishing to the correct Broker URL and Topic prefix, and that the username and password are correct. If the password was lost, rotate it from the connector settings.

**Device is registered but no data appears:**
- Compare the registered Device ID Topic against the exact topic the device publishes to. Topics are case-sensitive and must match exactly.
- Confirm the `{{deviceId}}` placeholder position lines up with the actual device ID segment in the topic.
- If using Payload source: verify the Device ID Payload Path resolves correctly against the actual payload structure.

**Metric values missing or showing wrong keys:**
- Check that the Connector Key in the Mapping tab matches the key in the MQTT payload exactly (case-sensitive).
- If relying on automatic flat-JSON parsing (no telemetry topics defined): verify the payload is a flat JSON object. Nested objects are not automatically expanded — add explicit telemetry topic rows for nested values.

**Cloud MQTT password lost:**
The password cannot be retrieved after creation. Rotate the credentials from the connector settings and reconfigure devices with the new password.

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
