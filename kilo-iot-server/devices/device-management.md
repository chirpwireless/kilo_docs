---
description: Manage a digital twin, replace its physical sensor, reconnect measurements, and review retained history in Kilo IoT Server.
---

# Device Management

A digital device is the lasting record of the asset or monitoring point you manage. Its physical source can change while the twin keeps its name, measurements, and stored history. Open the device to update its details, replace hardware, check incoming readings, or review history. For the full concept and refrigeration example, see [Devices](README.md).

## Opening a device's detail page

There are several ways to open the detail page for an existing device:

* **From Devices** — Click any device row in the **Devices** list in the sidebar. The device detail page opens showing that device's current state.
* **From a connector** — Open its connected-device list and select the existing device. **+ Add device** starts a new registration; it is not the replacement workflow.
* **Edit button** — Click the edit icon (pencil) on any device row to go directly to the device detail page.

## Replace a physical sensor

Use this procedure when the monitored asset stays the same but its hardware needs replacing. For example, keep **Refrigerator 1** when replacing a temperature probe that has failed or no longer meets your calibration requirements.

You need permission to edit devices, the replacement hardware's identifiers and connection settings, and access to the connector it will use. Record the existing measurement names, units, connector keys, and the time of the change. Arrange any necessary monitoring coverage during the replacement: the platform cannot record measurements that no device sends.

1. Open **Devices** and select the existing digital device, such as **Refrigerator 1**.
2. Check its measurement rows and recent **Logs**. Keep the temperature measurement that already contains the refrigerator's history.
3. Open **Connection**. For a bound LoRaWAN probe, click the X control labelled **Detach physical device** beside **Device EUI**. Detaching takes effect immediately; it is not deferred until the next **Save**. The digital device and its measurement channels remain, while the old physical binding and source mappings are removed.
4. Enter the replacement's **Device EUI**, **AppKey**, and matching device profile. Check its decoder and **Data sending interval**, then click **Save**. For another supported source type, use that connector's identifier and configuration fields.
5. Open **Mapping**. For each existing measurement, select the replacement's incoming **Connector key** and click **Save**. For example, change the source of the existing temperature measurement from `temp_c` to `temperature`. Check that the new value is in the same unit and format.
6. Wait for a new transmission. Confirm that **Value** and **Last update** change, and use the **Connection** diagnostics if they do not.
7. In **Logs**, choose a date range spanning the change. Check readings from before and after replacement, then check the dashboard and any rules using those measurements.

**Keep the existing measurement rows.** Change their connector keys instead of removing the rows and creating new ones. Stored history and dashboard/rule references belong to those measurements; reusing a name is not the same as retaining the original measurement.

Detaching hardware is also different from deleting the digital device. If a replacement fails to connect, keep the twin and use [Device Diagnostics](device-diagnostics.md) to check reception and mapping. Earlier readings remain subject to your [retention period](../settings/subscription.md#data-retention).

For an emulator-to-hardware change, use the dedicated [go-live workflow](emulated-devices.md#going-live-swapping-to-a-real-device), which changes the source without first detaching it.

## Swap between an emulator and hardware

**Swap connection** is available when there is an eligible connection involving the emulator: emulator to real hardware, or real hardware to emulator. It is not a physical-to-physical replacement control.

1. Open **Connection** and click **Swap connection**. The connection picker shows eligible destinations and unlocks the target identity fields.
2. Choose the destination, fill its required configuration, and review mappings and commands for the new source.
3. Click **Save** to apply the swap. **Cancel swap** exits swap editing before saving and restores the original connection fields.
4. Confirm the new source supplies the expected readings. Keep the retained measurement identities; generated readings and real readings both remain subject to the history retention period.

For one physical sensor replacing another, use **Detach physical device**, bind the replacement and restore its key mappings. Detach takes effect immediately; it does not wait for the page's Save button. It removes the physical binding and source mappings while retaining the twin and its measurement channels.

## Device info tab

The Device info tab contains the device's identity and visual reference:

* **Device photos** — Upload, replace, or remove photos of the asset or its hardware. A refrigerator photo can remain useful after its probe is replaced.
* **Device name** — Update the display name at any time. A consistent naming convention (e.g., including location or device type) helps when managing large fleets.
* **Application** — Choose the solution this device belongs to, or **Default** for no named application.


**Photo controls:** Use **Add photo** or drag PNG/JPG files onto the upload area. You can keep up to three photos; the UI recommends 5 MB per photo. The first photo is the cover. Use the remove control on a photo to remove it from the edited list, then save. The name is required; **Application** assigns the twin to a named setup, or **Default** leaves it outside a named application. Save profile changes before leaving the page.

## Connection tab

The Connection tab manages the twin's current data source. The source's hardware identifier belongs here; the asset's lasting name belongs in **Device info**. The available fields depend on the connector type.

### Connector selection

The **Connector type** dropdown shows available connectors in your organization. A link below the dropdown directs you to the [Connectors](../connectors/) section if you need to add a new connector.

Changing the connector re-binds the device to a different data source, and is offered **only for pairs that involve the Emulator** — emulator to real, or real back to emulator. To replace one physical source with another, detach the old source and bind the replacement to this twin. See [Emulated Devices](emulated-devices.md#going-live-swapping-to-a-real-device).

### For LoRaWAN devices (LNS connector)

Follow [LoRaWAN Devices](lorawan-devices.md) for every identity, profile, codec and reporting-interval field. Existing physical identifiers are locked; detach before replacing hardware. Keep the same digital device and measurement rows, then restore the source-key mappings.

### For vehicle trackers (Tracker connector)

* **Unique ID** — The tracker's device identifier. Locked once bound.
* **Device model** — Search and select from the tracker model library.
* **Url for GPS tracker** — The endpoint URL displayed after selecting a model. Copy this URL and configure the physical tracker to send data to it.

## Mapping tab {#metrics-tab}

The **Mapping** tab connects incoming data keys to retained measurement channels. Use the same measurement rows when a sensor is replaced: changing an incoming key is different from replacing the measurement itself.

| Column or control | Purpose and configuration |
| --- | --- |
| **Device data key** | Select a received source field, such as `temperature` or `vibration.rms`. This is the incoming connector key. Options appear after messages arrive; a blank choice records nothing for this measurement. Save changes to this key with **Save**. |
| **Value** | Latest received value for the selected source key. This snapshot is not the historical record. |
| **Last update** | When that source key was last received. An empty value means no corresponding received value is available. |
| **Normalized key** | Choose the metric template defining the measurement. Only Telemetry templates are offered. A template already assigned to this device is disabled in the dropdown. |
| **Unit** | The template's unit, shown for reference. Set or change it in [metric templates](metric-templates.md); the mapping does not perform unit conversion. |
| **Type** | Read-only template value type: Integer, Float, String or Boolean. It controls conversion of incoming readings. |
| **Data type** | Telemetry in this mapping form. Reported switch states can be recorded as telemetry too. |
| **Add key** | Add a mapping row, then select a template and an incoming key. |
| **+ Add new metric** | Opens **Add Metric** from the Normalized key dropdown. Enter a non-empty **Normalized key**, choose **Type** (initially String), and keep **Data type** as Telemetry. **Add** creates the template and selects it; **Cancel** closes without creating it. This compact dialog has no unit selector; use the full metric catalog to configure units. |
| **Remove** | Removes the row and its measurement assignment immediately on a saved device. This is not the procedure for changing hardware. |

Selecting a template adds its measurement immediately on an existing device. Selecting a different template on an existing row removes the old measurement assignment and creates the new one. Closing the page without clicking Save does not undo those actions. Preserve templates during replacement and change only source-key assignments, then save.

After saving mappings, allow a fresh message and check **Logs**. A field can appear in the incoming snapshot before its mapping is complete; older messages are not backfilled. Match template types to the actual values: `"ON"` and `"OFF"` are strings, while `true` and `false` are booleans. See [metric templates](metric-templates.md) for conversion and rejection rules.

## Asset identification {#user-metadata}

Use the device name, photo, and application assignment to identify the monitored asset. Keep calibration certificates, installation notes, and maintenance records in your organisation's record-keeping system; device measurement history is not a maintenance log.

## Commands & States tab

For devices that can receive downlinks — MQTT devices, LoRaWAN devices, and emulated devices with **Support commands** enabled — a **Commands & States** tab appears. This is where you define the actions a device can perform and dispatch them on demand, turning the Digital Twin from a read-only record into a control surface. The full workflow has its own section: see [Device Commands](commands/).

## Logs tab

The Logs tab displays stored readings for the digital device's attached measurements, within the available retention period. It can therefore show readings from an earlier physical source as well as its replacement when you keep those measurements. A status indicator in the device header reflects its live connection and logging activity, so you can tell at a glance whether new data is currently flowing in.

**Log entries are grouped by the minute.** All readings received within the same minute are collected under a single group header — so even when several batches arrive in the same minute, the view stays tidy. Click a group header to expand or collapse the readings inside it. Each entry within a group shows:

| Column     | Description                                               |
| ---------- | --------------------------------------------------------- |
| **Key**    | The measurement's normalized key                  |
| **Type**   | The data type of the value                                |
| **Value**  | The received value                                        |

**Date filtering:** Click the date button in the top-right corner of the Logs section to open a date range picker. You can select a preset range (e.g., "Last week") or define a custom date range to narrow the log view. This is especially useful for investigating specific incidents or reviewing data from a particular time window.

The Logs tab shows you the readings themselves. If the readings are missing and you need to know *why* — whether messages reached the platform at all, whether their keys matched your sensors, and whether the values were stored — read the reception status, pipeline, and event feed on the **Connection** tab. See [Device Diagnostics](device-diagnostics.md).

The date button shows the current preset or date range. Choose a quick range or a custom start/end range and click **Apply changes**. **Clear filter** resets the selection. Available dates and presets are limited by your plan's retention. **Timestamp** identifies each reading; **Key** is the normalized measurement name, followed by **Type** and **Value**. Expand/collapse the minute groups to inspect individual readings. **No logs found** means no retained readings match the range; check mapping and a fresh message before widening it. If loading fails, reload the page.

## Copying a device

Click the copy icon on a device row to create a new device pre-filled from that one. The form arrives carrying the original's **name**, its **metric-template rows**, its **connection selection and settings**, and its **images**. Identity is deliberately not carried: give the copy its own name and its own device identifier before saving.

For a physical device, the copy creates new measurement rows from the selected templates. Open the saved copy and assign its **Connector keys**; pre-filled source mappings are not saved onto the new measurement identities.

An emulator copy also carries its generated signal configuration, reporting interval, command-support setting, and preset commands. Give it a new **Device ID** before saving. See [Copying an emulated device](emulated-devices.md#copying-an-emulated-device).

Copying creates another digital device with its own measurements and history. It does not transfer historical readings. Use the original twin when replacing hardware on the same asset.

## Common management tasks

| Task                                   | Where           | How                                                                               |
| -------------------------------------- | --------------- | --------------------------------------------------------------------------------- |
| Rename a device                        | Device info tab | Edit the Device name field and save                                               |
| Re-bind to a different physical device | Connection tab  | Detach the current physical device, enter new identifiers, then reconnect existing measurements                    |
| Change from manual to template profile | Connection tab  | Check "Use device profile templates" and select Brand/Model/Profile               |
| Add a new measurement type             | Mapping tab     | Add a row, select a metric template, map the connector key                        |
| Investigate missing data               | Logs tab        | Filter to the expected time range and review the entries                          |
| Copy a device configuration            | Device list     | Click the copy icon on a device row to create a new device with the same settings |
| Delete a device                        | Device list     | Click the delete icon on a device row and confirm                                 |

For metric template setup, see [Metrics](metric-templates.md). Use an asset-oriented name and application assignment to keep related devices recognizable.

## Organize the device in an application

On **Device Info**, use **Application** to associate this device with an operational solution. Choose **Default** to leave it outside named applications, then save. The device can belong to one application at a time. See [Organizing Content](../applications/organizing-content.md).

## Protocol setup references

Use [LoRaWAN Devices](lorawan-devices.md) or [MQTT Devices](mqtt-devices.md) for the complete connection fields, then return here for common profile, mapping and history controls.
