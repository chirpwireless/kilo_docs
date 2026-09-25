---
description: Register a device in Kilo IoT via LNS, MIOTY, Tracker, MQTT or the Emulator — build its Digital Twin, profile, and metric mappings.
---

# Registering Devices

Registration creates a **Digital Twin**: the lasting digital record of the asset or monitoring point you want to follow. For example, create **Refrigerator 1**, then connect the temperature probe installed inside it. The probe supplies data; the refrigerator's digital record keeps its identity when that probe changes.

Create the name and optional photo first, then configure the connection and measurements. You can create the record before binding hardware, or use the [Emulator](emulated-devices.md) to generate readings while preparing the deployment. See [Devices](README.md) for how digital twins, sources, and measurements fit together.

If you are replacing hardware on an existing asset, use [Device Management](device-management.md#replace-a-physical-sensor) instead of registering a new twin.

## Prerequisites

Before registering a device, you need:

- **A connector** — at least one LNS, Mioty, Tracker, MQTT (Cloud or External) or Emulator connector must be set up. See [Connectors](../connectors/) and the [MQTT Connector](../connectors/mqtt-connector.md) documentation.
- **Device identifiers** — for LoRaWAN devices: the Device EUI and AppKey (typically printed on the device or its packaging). For MIOTY endpoints: the End Point EUI and Network Session Key. For tracker devices: the Unique ID provided by the manufacturer. For MQTT devices: the device-level topic segment the device publishes under, used as the Device ID on the device record; it must match the published segment exactly, including case and spaces. **Emulated devices need none of this** — you choose the Device ID yourself.
- **For MQTT devices only — the device must be publishing before mapping can be completed.** The Device data key dropdown in the Mapping tab populates from payload keys actually received from the device. See the [MQTT-specific behavior section](#mqtt-specific-behavior) below for the two-pass workflow.

## Where to start

There are two entry points for device registration — both open the same device form:

1. **Devices** — Click **Devices** in the sidebar. This page shows all devices across all connectors. Click **Add device** in the top-right corner.
2. **Connector row action** — From the **Connectors** page, click the **+ Add device** button on any connector row. The page opens with that connector pre-selected.

The device form is laid out for small screens as well as desktop, so you can register hardware from a phone while standing at the installation point.

## Phase 1 — Create the device profile

The form opens in **Add device** mode, showing only the **Device info** section. No tabs or navigation are visible yet — the first step is simply to identify the device.

- **Device photos** — Optionally upload photos of the physical device for visual identification.
- **Device name** — Enter a descriptive name (required). Use a naming convention that scales across your deployment — for example, including the location or device type in the name.

Click **Save**. The Digital Twin is created with just the name and optional photo. The form automatically transitions to edit mode.

For an asset that will outlast its sensor, use the asset's name here. Keep the probe's hardware identifier in **Connection**. This makes it clear which identity should remain when you replace the probe.

## Phase 2 — Configure connection, metrics, and logs

After the first save, the device form shows **Device info**, **Connection**, **Mapping** and **Logs** tabs, and a **Next** button for navigating between them. This is where you bind the device to a connector and configure its data. Two more tabs appear when they apply: **Commands & States** on a device that can receive downlinks, and **Emulator** on a device bound to the Emulator connector.

### Connection tab

This tab binds the Digital Twin to the device that feeds it through a connector. The dropdown lists the connectors your organization actually has, by name and type, and the fields below it change to match the one you pick.

<figure><img src="../../.gitbook/assets/device-connector-type-list.jpg" alt="The Connection tab of a device with the connector type dropdown open, listing the organization's connectors by name and type"><figcaption></figcaption></figure>

#### For LoRaWAN devices (LNS connector)

Select the LNS connection and configure the sensor's Device EUI, AppKey, profile, codec and reporting interval. Follow [LoRaWAN Devices](lorawan-devices.md) for the complete field reference and commissioning procedure.

#### Add to Vault

Store the device's EUI/key pair separately in [Key Vault](../reports/key-vault.md). See [LoRaWAN identity and credentials](lorawan-devices.md#identity-and-credentials) for the device controls.

#### Code functions (codec)

The LoRaWAN codec translates binary uplinks into named fields. Templates can supply it; a custom profile needs a compatible codec. See [Templates and manual profiles](lorawan-devices.md#templates-and-manual-profiles).

#### Data sending interval

Tell the platform the reporting schedule configured on physical hardware. The initial value is 1 hour; select a positive whole number and minute/hour/day/week/month. This does not change the hardware's schedule. For an emulator, it instead controls generation; see [Emulated Devices](emulated-devices.md).

#### For vehicle trackers (Tracker connector)

1. **Connector type** — Select the Tracker connector from the dropdown.
2. **Unique ID** — Enter the tracker's unique device identifier.
3. **Device model** — Search and select from the tracker model library. Start typing to filter the list.
4. **Url for GPS tracker** — After selecting a model, a panel appears showing the endpoint URL. Click the copy button to copy it, then configure your tracker to send data to this URL.

#### For MQTT devices (Cloud or External MQTT)

Select your MQTT connection, enter the physical Device ID, and configure topic routing on **Connection**. Save and let a message arrive before completing **Mapping**. Follow [MQTT Devices](mqtt-devices.md) for the full workflow and [Topics and device routing](../connectors/mqtt/topics-and-device-routing.md) for advanced options.

#### For MIOTY endpoints (Mioty connector)

Select the Mioty connector from the dropdown and the form presents the MIOTY parameter set — End Point EUI, short address, network session key and counters. These fields, their valid ranges and the blueprint that decodes the endpoint's payloads are documented in full on [MIOTY Devices](mioty-devices.md).

#### For emulated devices (Emulator connector)

Select the Emulator connector and the device generates its own telemetry instead of receiving it — no identifiers, no credentials, no hardware. You give it a Device ID, choose what it measures (by hand or from a device preset), and set how often it reports. An extra **Emulator** tab then lets you drive its values directly.

This is how you build a deployment before the sensors arrive, and swap the same device onto real hardware when they do. See [Emulated Devices](emulated-devices.md).

### Mapping tab

See [mapping controls](device-management.md#metrics-tab) for every column, inline metric creation, and immediate template-change/removal behavior.

This tab maps the device's raw sensor data to normalized measurement definitions. A LoRaWAN profile supplies the network configuration and codec. Add the measurement templates you need, then map their incoming connector keys after the source reports.

#### Connector keys — see what the device sends

Once the device is connected and transmitting, the Mapping tab displays a **connector keys table** showing every field in the device's raw payload. Each row shows the field name (exactly as the device sends it — e.g., `t`, `temp1`, `humidity_pct`), its current value, and the last update timestamp. This is the live payload from the device, updated in real time.

Come back to this table whenever you need to know what a device reports and in what form — writing a rule condition, or setting the expected value on a command. See [Payload Decoding and Connector Keys](payload-decoding.md).

#### Mapping raw fields to metric templates

This is where you turn cryptic device output into meaningful, labeled measurements. When you map a raw connector key (like `t`) to a metric template (like "Temperature", unit: °C, type: Float), you are giving that raw field a human-readable identity. From that point on, dashboards, automation rules, alerts, and historical queries all display "Temperature (°C)" — not the raw field name the device firmware sends.

To normalize a raw field:

1. **Add a metric** — Click **Add key** and select a metric template from the dropdown (e.g., "Temperature", unit: °C, type: Float). The Unit, Type, and Data type columns auto-fill from the template. If the template you need does not exist, create one in [Metrics](metric-templates.md) first.
2. **Select the connector key** — In the **Device data key** dropdown for that metric, choose the raw field name that corresponds to this measurement (e.g., select `t` for a device that sends temperature as `t`).
3. **Save** — The mapping takes effect immediately. Normalized data flows through dashboards, automation rules, alarm evaluations, and historical queries.

If the Connector key is not filled in, the data for that metric will be ignored.

Repeat for each measurement the device reports. Multiple metrics can be mapped in a single session.

#### Any device, any payload format

A device does not need a library preset to supply measurements. It does need a compatible connector and decoding path: a LoRaWAN codec, a supported MQTT message shape, or the appropriate adapter. Once named fields arrive, map the readings you need. See [LoRaWAN Devices](lorawan-devices.md) and [MQTT Devices](mqtt-devices.md).

#### MQTT-specific behavior

Save the connection and routing, wait for a received message, then select its **Device data key** for each measurement and save. A fresh message after mapping starts recording history; old messages are not backfilled. See [MQTT Devices](mqtt-devices.md#map-messages-to-retained-measurements).

### Logs tab

The Logs tab is initially empty. After the device begins sending data, this tab displays retained measurement values and timestamps.

Click **Save** again to persist the connection and metrics configuration.

If **Save** is unavailable, check your device-edit permission, required fields, and subscription status. Creating an additional digital device also requires capacity in the plan. An existing twin can be saved before attaching hardware.

## After saving

The device appears in the device lists across the server — in the connector's device table, in Devices, and in any dashboards or automation rules that reference it.

For LoRaWAN devices, data begins flowing once the physical device sends a join request and the server accepts it. For tracker devices, data begins flowing once the tracker starts sending data to the configured URL endpoint.

Registering a device here does not make it join. A LoRaWAN device joins one network at a time, so a unit that was previously commissioned elsewhere — returned from another site, bought used, or run on a different platform — stays joined to that network until it is reset and sends a fresh join request. Factory-fresh hardware joins on its own; anything with a history usually needs a reset first. See [Before anything arrives: joining the network](device-diagnostics.md#before-anything-arrives-joining-the-network).

If the device is registered but no data is arriving, open its **Connection** tab and read the reception status — it reports whether the device has reached the network, whether messages are being received, and whether the values in them are being stored, with the specific next step for each case. See [Device Diagnostics](device-diagnostics.md).

## What's next

- **Configure metric templates** before or after registration to control how raw data is normalized. See [Metrics](metric-templates.md).
- **Edit device properties** at any time through the same dialog. See [Device Management](device-management.md).
- **Diagnose a silent device** from its Connection tab. See [Device Diagnostics](device-diagnostics.md).
- **Register a MIOTY endpoint** and its protocol-specific fields. See [MIOTY Devices](mioty-devices.md).
- **Start without hardware** and swap to the real device when it arrives. See [Emulated Devices](emulated-devices.md).

## Entering secret keys

The **AppKey** field reveals the value while you type. Leaving the field or pressing Enter masks it again; use the eye control when you need to inspect it. A key loaded from a QR code remains masked. Check the value without leaving it visible in screenshots or shared screens.
