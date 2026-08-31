---
description: Find, create, and manage the shared metrics that give device readings consistent names, units, and data types across Kilo.
---

# Metrics

A metric tells Kilo what a device reading means and how to store it. It combines a **normalized key**, such as `temperature`, with a unit, value type, and data type.

The two type fields answer different questions: **Data type** says whether the information is telemetry, device metadata, or a custom attribute; **Type** says whether its value is stored as a Float, Integer, String, or Boolean.

This shared definition lets devices from different manufacturers use the same dashboards and rules. One device may send `temp_c` and another may send `t_celsius`; mapping both raw keys to the `temperature` metric gives Kilo one consistent reading to work with.

## Open the metric catalog

Go to **Devices → Metrics**.

The list contains every metric available to your organization. Each row shows its normalized key, unit of measurement, value type, and data type.

<figure><img src="../../.gitbook/assets/device-metrics.jpg" alt="The Devices Metrics catalog with search, unit, type and data type filters and a sort control"><figcaption></figcaption></figure>

Use the controls above the list to find a metric:

- **Search** matches the normalized key.
- **All units** filters by unit and includes metrics without a unit. Select the units and click **Apply**.
- **All types** filters by String, Integer, Float, or Boolean and applies immediately.
- **All data type** filters by Telemetry, Device metadata, or Custom attributes and applies immediately.
- **Sort by** orders metrics by **Newest** or **Oldest**.

The unit, type, and data-type filters accept several values at once.

Metrics created by your organization provide **Edit** and **Delete** actions. Metrics supplied by Kilo do not, because their definitions are shared across deployments.

## Create a metric

1. Go to **Devices → Metrics**.
2. Click **Add metric**.
3. Complete the four fields in the **Add Metric** dialog.
4. Click **Add**.

<figure><img src="../../.gitbook/assets/device-metrics-add.jpg" alt="The Add Metric dialog with Data type, Type, Normalized key and Unit of measurement"><figcaption></figcaption></figure>

### Data type

Choose what kind of information the metric represents:

| Data type | Use it for | Examples |
|---|---|---|
| **Telemetry** | Readings that change over time | Temperature, humidity, battery level, pressure |
| **Device metadata** | Information the device reports about itself | Firmware version, hardware revision |
| **Custom attributes** | Information your organization adds | Installation date, asset tag, maintenance interval |

Only Telemetry metrics appear when mapping incoming device readings. Device metadata and Custom attributes are not offered as telemetry mappings.

### Type

Choose how Kilo stores the value:

| Type | Use it for | Examples |
|---|---|---|
| **Float** | Numbers with decimals | `22.5`, `67.3`, `3.28` |
| **Integer** | Whole numbers | `85`, `-120`, `42` |
| **String** | Text | `"open"`, `"standby"` |
| **Boolean** | True or false | Motion detected, alarm active |

Chart widgets and the gauge-style Last Data displays require an Integer or Float metric. The Last Data **Value** display can also show text and Boolean values.

### Normalized key

The normalized key is the standard name for the measurement, independent of the raw name sent by a device.

Open **Normalized key** and either select an existing key or choose **Create a new normalized key**. Use a descriptive name such as `soil_moisture`, not a device-specific name such as `sensor_3_value`. Lowercase names with underscores keep the catalog consistent.

Each normalized key can belong to only one metric. If the selected key is already in use, the form reports **A metric with this normalized key already exists**.

Normalized keys are created, renamed, and deleted from this field. Keys supplied by Kilo cannot be renamed or removed.

### Unit of measurement

Select the unit displayed beside the value, such as °C, %, lx, or mV. Choose an existing unit or select **Create a new unit** and enter the symbol exactly as it should appear.

A unit is required for Telemetry. It is optional for Device metadata and Custom attributes, where values such as a firmware version or asset tag may not have a unit.

Units are created, renamed, and deleted from this field. Units supplied by Kilo cannot be renamed or removed.

## Edit a metric

Metrics are shared across your organization, not configured separately for each device. Editing a metric changes the definition for every device mapped to it.

1. Find the metric under **Devices → Metrics**.
2. Click **Edit**.
3. Update the required fields.
4. Click **Save**.
5. Review the confirmation describing the organization-wide effect and confirm the change.

If only one device needs a different definition, create a new metric and remap that device instead of editing the shared metric.

## Delete a metric

Click **Delete** on a metric created by your organization and confirm the action.

Kilo refuses to delete a metric that is still mapped to a device. Remove the mapping from every device that uses it, then try again.

## Map a device reading to the metric

Creating a metric does not connect it to a device automatically. Open the device's **Metrics** tab and map the raw key sent by the device to the normalized metric.

After several device types map their raw temperature keys to `temperature`, the same dashboard widget, rule, or query can use all of them without manufacturer-specific logic.

## Troubleshooting

| Problem | What to check |
|---|---|
| A metric is missing from a chart or gauge-style Last Data display | Confirm its **Type** is Integer or Float and the device sends a numeric value. |
| A metric is missing from a device mapping | Confirm its **Data type** is Telemetry. |
| A normalized key cannot be selected | Another metric may already use it. Search the catalog for that key. |
| Edit and Delete are unavailable | The metric, key, or unit was supplied by Kilo and cannot be changed. |
| Delete is refused | Remove the metric from every device mapping before deleting it. |

## See also

- [Registering Devices](registering-devices.md) — map raw device data during registration
- [Device Management](device-management.md) — change mappings on an existing device
- [Chart Widget](../dashboards/adding-widgets/chart-widget.md) — display numeric metrics over time
