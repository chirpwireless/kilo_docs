# Registering Devices

Every physical device registered on the Kilo IoT Server becomes a Digital Twin — a complete digital representation that mirrors the device's current state, configuration, telemetry history, and behavioral patterns. The Digital Twin persists even when the physical device is offline, giving you a continuous operational view of your entire deployment. Because the physical device binding is optional, this architecture also lays the groundwork for device emulation — enabling teams to model an entire deployment with emulated devices first, then commission physical hardware incrementally without losing any configuration or history.

Device registration is the process of creating this Digital Twin and linking it to a physical device through a connector. The registration flow guides you through naming the device, binding it to a connector, configuring its communication profile, and mapping the measurements it reports.

## Prerequisites

Before registering a device, you need:

- **A connector** — at least one LNS or Tracker connector must be set up. See [Connectors](../connectors/).
- **Device identifiers** — for LoRaWAN devices: the Device EUI and AppKey (typically printed on the device or its packaging). For tracker devices: the Unique ID provided by the manufacturer.

## Where to start

There are three entry points for device registration — all open the same Manage Device dialog:

1. **Devices** — Click **Devices** in the sidebar. This page shows all devices across all connectors. Click **Add device** in the top-right corner.
2. **Connector row action** — From the **Connectors** page, click the **+** (Add device) button on any connector row. The dialog opens with that connector pre-selected.
3. **LNS Connected Devices** — Open the LNS connector, switch to the **Connected Devices** tab, and click **Add device**.

## Phase 1 — Create the device profile

The dialog opens in **Add device** mode, showing only the **Device info** section. No tabs or navigation are visible yet — the first step is simply to identify the device.

- **Device photos** — Optionally upload photos of the physical device for visual identification.
- **Device name** — Enter a descriptive name (required). Use a naming convention that scales across your deployment — for example, including the location or device type in the name.

Click **Save**. The Digital Twin is created with just the name and optional photo. The dialog automatically transitions to edit mode.

## Phase 2 — Configure connection, metrics, and logs

After the first save, the dialog reopens with four tabs — **Device info**, **Connection**, **Metrics**, and **Logs** — and a **Next** button for navigating between them. This is where you bind the device to a physical connector and configure its data.

### Connection tab

This tab binds the Digital Twin to a physical device through a connector. The fields change based on the connector type.

#### For LoRaWAN devices (LNS connector)

1. **Connector type** — Select the LNS connector from the dropdown. If only one LNS connector exists, it may be pre-selected.
2. **Device EUI** — Enter the device's unique LoRaWAN identifier. This is a hexadecimal string typically found on the device label or packaging. Once a physical device is bound, this field cannot be changed without detaching the device first.
3. **Use device profile templates** — Check this option to select from pre-configured device profiles:
   - **Brand** — Select the device manufacturer.
   - **Model** — Select the device model. The list filters based on the selected brand.
   - **Profile** — Select the frequency band/profile for the device.

   If you do not use a template, you can configure the profile manually:
   - **Class** — Choose **Class A** (battery-powered, low power) or **Class C** (mains-powered, always listening).
   - **Brand** and **Model** — Enter the device manufacturer and model as free text.
   - **Band** — Select the LoRaWAN frequency band (e.g., EU868, US915).
   - **AppKey** — Enter the device's application key. This is the LoRaWAN encryption key used for over-the-air activation (OTAA).

#### For vehicle trackers (Tracker connector)

1. **Connector type** — Select the Tracker connector from the dropdown.
2. **Unique ID** — Enter the tracker's unique device identifier.
3. **Device model** — Search and select from the tracker model library. Start typing to filter the list.
4. **Url for GPS tracker** — After selecting a model, a panel appears showing the endpoint URL. Click the copy button to copy it, then configure your tracker to send data to this URL.

### Metrics tab

This tab maps the device's raw sensor data to normalized measurement definitions. If metric templates have been configured for the device type, the mappings may populate automatically. Otherwise, you can assign metric templates manually.

#### Connector keys — see what the device sends

Once the device is connected and transmitting, the Metrics tab displays a **connector keys table** showing every field in the device's raw payload. Each row shows the field name (exactly as the device sends it — e.g., `t`, `temp1`, `humidity_pct`), its current value, and the last update timestamp. This is the live payload from the device, updated in real time.

#### Mapping raw fields to sensor templates

To normalize a raw field:

1. **Add a metric** — Click **Add metric** and select a sensor template from your organization's library (e.g., "Temperature", unit: °C, type: Float). If the template you need does not exist, create one in [Metric Templates](metric-templates.md) first.
2. **Select the connector key** — In the connector key dropdown for that metric, choose the raw field name that corresponds to this measurement (e.g., select `t` for a device that sends temperature as `t`).
3. **Save** — The mapping takes effect immediately. Normalized data flows through dashboards, automation rules, alarm evaluations, and historical queries.

Repeat for each measurement the device reports. Multiple metrics can be mapped in a single session.

#### Any device, any payload format

This workflow accepts data from any device the server can receive — including prototype hardware with evolving payload schemas, sensors from niche manufacturers with undocumented telemetry formats, and legacy field equipment that transmits encoded identifiers rather than human-readable field names. If the device sends data, the connector keys table displays it and you can map it.

For details on setting up metric templates, see [Metric Templates](metric-templates.md).

### Logs tab

The Logs tab is initially empty. After the device begins sending data, this tab displays the raw event log with timestamps and payload details.

Click **Save** again to persist the connection and metrics configuration.

## After saving

The device appears in the device lists across the server — in the connector's device table, in Devices, and in any dashboards or automation rules that reference it.

For LoRaWAN devices, data begins flowing once the physical device sends a join request and the server accepts it. For tracker devices, data begins flowing once the tracker starts sending data to the configured URL endpoint.

## What's next

- **Configure metric templates** before or after registration to control how raw data is normalized. See [Metric Templates](metric-templates.md).
- **Edit device properties** at any time through the same dialog. See [Device Management](device-management.md).
