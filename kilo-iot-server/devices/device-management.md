# Device Management

Once a device is registered, its Digital Twin is a living record that you can update, reconfigure, and inspect at any time. The same Manage Device dialog used during registration serves as the ongoing management interface — every device property, connection setting, metric mapping, and data log is accessible through it.

## Opening the Manage Device dialog

There are several ways to open the dialog for an existing device:

- **From Devices** — Click any device row in the **Devices** list in the sidebar. The dialog opens showing that device's current state.
- **From a connector's device list** — Open the LNS connector's **Connected Devices** tab or the Tracker connector's device page, then click a device row.
- **Edit button** — Click the edit icon (pencil) on any device row to go directly into edit mode.

## Device info tab

The Device info tab contains the device's identity and visual reference:

- **Device photos** — Upload, replace, or remove photos of the physical device. Photos help operations teams identify hardware during site visits or troubleshooting.
- **Device name** — Update the display name at any time. A consistent naming convention (e.g., including location or device type) helps when managing large fleets.

## Connection tab

The Connection tab manages the link between the Digital Twin and its physical device. The available fields depend on the connector type.

### Connector selection

The **Connector type** dropdown shows available connectors in your organization. Changing the connector re-binds the device to a different data source. A link below the dropdown directs you to the [Connectors](../connectors/) section if you need to add a new connector.

### For LoRaWAN devices (LNS connector)

- **Device EUI** — The device's unique LoRaWAN identifier. This field is locked once a physical device is bound. To change it, you must first detach the physical device.
- **Detach physical device** — Click the detach button (X icon) next to the Device EUI to unbind the physical device from this Digital Twin. The Digital Twin and its history are preserved; only the live connection is severed. You can then re-bind a different physical device.
- **Use device profile templates** — Toggle this checkbox to switch between template-based and manual configuration:
  - **Template mode:** Select **Brand**, **Model**, and **Profile** from dropdowns that filter based on your selections.
  - **Manual mode:** Enter Brand, Model, and Band as free text, choose **Class A** (battery-powered, uplink-first, power-efficient) or **Class C** (continuous listening, can receive downlinks at any time, typically mains-powered), and enter the **AppKey**. For full details on Class A vs Class C, band options, and the template flow, see [Registering Devices](registering-devices.md).
- **Code functions** — The device's payload codec: JavaScript logic that decodes raw LoRaWAN uplink data into the named fields that appear as connector keys in the Metrics tab. When a device profile template is selected, this field is pre-filled with the template's codec. If the decoded output is missing fields or producing incorrect values, you can edit the code directly. Alternative codecs can often be found in the device manufacturer's documentation or community repositories. For the full codec explanation, see [Registering Devices](registering-devices.md).
- **Data sending interval** — The expected reporting frequency for this device. If no message arrives within the configured interval, the device is marked as offline in the device list. Choose a number and a unit (minute, hour, day, week, or month).

### For vehicle trackers (Tracker connector)

- **Unique ID** — The tracker's device identifier. Locked once bound.
- **Device model** — Search and select from the tracker model library.
- **Url for GPS tracker** — The endpoint URL displayed after selecting a model. Copy this URL and configure the physical tracker to send data to it.

## Metrics tab

The Metrics tab maps the device's raw sensor output to your normalized metric templates. This is where you control what data the device contributes to dashboards and automation rules.

**Table columns:** Metrics template, Unit, Type, Data type, Connector key, Value, Last update, Actions.

**Working with metric mappings:**

- **Metrics template** — Select a metric template from the dropdown. Each template can only be assigned once per device. The dropdown shows all available templates from the [Metric Templates](metric-templates.md) area, with already-assigned templates grayed out.
- **Connector key** — Map the raw key that the device firmware sends (e.g., `temp_c`) to the selected metric template. This is the bridge between the device's native output and your normalized data model.
- **Value** — Shows the most recent value received for this connector key.
- **Last update** — Shows when the last value was received.
- **Add a row** — Click the add button to create a new metric mapping row.
- **Remove** — Click the remove button on a row to delete that mapping. Removing a metric template row takes effect on the server immediately. Other changes are saved when you click **Save**.

### User metadata

Below the telemetry metrics table, a separate **User Metadata** section allows you to define custom key-value pairs that are user-assigned properties (not reported by the device). These are useful for operational annotations like installation date, maintenance notes, or asset tags.

## Logs tab

The Logs tab displays the raw event history received from the device, providing a detailed record of every data point the server has processed.

**Log entries are grouped by timestamp.** Click a timestamp group header to expand or collapse it. Each entry within a group shows:

| Column | Description |
|--------|-------------|
| **Key** | The raw key name from the device payload |
| **Type** | The data type of the value |
| **Value** | The received value |
| **Status** | Processing status (currently empty for standard readings) |

**Date filtering:** Click the date button in the top-right corner of the Logs section to open a date range picker. You can select a preset range (e.g., "Last week") or define a custom date range to narrow the log view. This is especially useful for investigating specific incidents or reviewing data from a particular time window.

The logs description notes: *"This tab displays the latest registered data (Telemetry, Metadata) received from the device, including its value, type, and processing status by the platform."*

## Common management tasks

| Task | Where | How |
|------|-------|-----|
| Rename a device | Device info tab | Edit the Device name field and save |
| Re-bind to a different physical device | Connection tab | Detach the current physical device, then enter new identifiers |
| Change from manual to template profile | Connection tab | Check "Use device profile templates" and select Brand/Model/Profile |
| Add a new measurement type | Metrics tab | Add a row, select a metric template, map the connector key |
| Investigate missing data | Logs tab | Filter to the expected time range and review the entries |
| Copy a device configuration | Device list | Click the copy icon on a device row to create a new device with the same settings |
| Delete a device | Device list | Click the delete icon on a device row and confirm |

For metric template setup, see [Metric Templates](metric-templates.md). For organizing devices by location, see [Locations](../settings/locations.md).
