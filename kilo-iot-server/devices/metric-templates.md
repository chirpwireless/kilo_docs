# Metric Templates

Metric templates define the measurement vocabulary for your entire Kilo IoT Server deployment. They ensure that raw data from devices of different manufacturers, protocols, and firmware versions is normalized into a consistent format — so that dashboards, automation rules, and queries all work the same way regardless of which device produced the data.

Without metric templates, every device would report data in its own proprietary format. One temperature sensor might send `temp_c`, another `temperature`, and a third `t_celsius`. Metric templates solve this by mapping all of these to a single normalized key like `temperature`, with a defined unit (e.g., °C) and value type (e.g., Float). The result is a deployment where data from any device is immediately usable everywhere.

## How to reach the Metric Templates area

There are two ways to access metric templates:

- **Direct URL** — Navigate to `/metrics` in your browser. The server redirects to the **Units** tab at `/metrics/units`.
- **From the LNS device list** — When viewing the Connected Devices tab inside the [LNS Connector](../connectors/lns-connector.md), click the **Metrics Templates** button in the top-right corner.

## The three tabs

The Metric Templates area has three tabs, each managing a layer of the normalization system:

### Units

Units define the measurement units available in your deployment. Each unit has a name and a symbol.

**Table columns:** Name, Symbol, Actions (edit, delete).

**To add a unit:**

1. Click **Add Unit**.
2. In the dialog, enter the **Name** (e.g., "Celsius") and **Symbol** (e.g., "°C").
3. Click **Save**.

System-provided units cannot be edited or deleted — they are marked as read-only.

**Examples:** Celsius (°C), Fahrenheit (°F), Percent (%), Hectopascal (hPa), Lux (lx), Millivolt (mV).

### Normalized Keys

Normalized keys are the standard names used to identify what a measurement represents, independent of what any specific device calls it. They are the mapping targets for raw device data.

**Table columns:** Normalized Key, Type, Actions (edit, delete).

All normalized keys are currently of type **String**.

**To add a normalized key:**

1. Click **Add Normalized Key**.
2. In the dialog, enter the **Normalized Key** name (e.g., "temperature", "humidity", "battery_level").
3. Click **Save**.

System-provided normalized keys cannot be edited or deleted.

**Naming convention:** Use lowercase with underscores. Choose names that describe the measurement, not the device — `soil_moisture` rather than `sensor_3_value`.

### Metrics

Metrics are sensor templates that combine a normalized key, a unit, a value type, and a sensor type into a reusable measurement definition. When you register a device, you assign metric templates to map the device's raw output keys to these definitions.

**Table columns:** Normalized key, Unit of measurement, Type, Data type, Actions (edit, delete).

Each metric template specifies:

| Field | Options | Description |
|-------|---------|-------------|
| **Normalized key** | Select from existing or create new | The standard measurement name this metric maps to |
| **Unit of measurement** | Select from Units | The unit symbol displayed with values |
| **Type** (value type) | Integer, Float, String, Boolean | The data type of the measurement value |
| **Data type** (sensor type) | Telemetry, Device Metadata, User Metadata | How the measurement is classified |

**To add a metric template:**

1. A new row appears at the top of the table when you start editing.
2. Select or create a **Normalized key**.
3. Select a **Unit of measurement** from the dropdown.
4. Select the **Type** (value type): Integer for whole numbers, Float for decimal values, String for text, Boolean for true/false.
5. Select the **Data type** (sensor type): Telemetry for regular measurements, Device Metadata for device-reported attributes, User Metadata for user-assigned properties.
6. Click the save button on the row.

**Filtering:** Use the Type and Data type dropdown filters above the table to narrow the list to specific value types or sensor types.

## How metric templates connect to devices

When you register a device through the Manage Device dialog, the **Metrics** tab is where you assign metric templates. The device's raw output keys (whatever the manufacturer's firmware sends) are mapped to your normalized metric definitions.

This means:
- A temperature sensor from Manufacturer A and one from Manufacturer B can both map to the same `temperature` metric template.
- Dashboards and automation rules that reference `temperature` work with data from either device.
- Adding a new device type requires only mapping its raw keys to existing templates — no changes to dashboards or rules.

For the device-level metric mapping workflow, see [Registering Devices](registering-devices.md) and [Device Management](device-management.md).
