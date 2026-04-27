# Widget Reference

This page documents every configuration option for each widget type in the Kilo IoT Server dashboard system. Use it as a reference when setting up new widgets or fine-tuning existing ones.

Widgets are configurable display components. The same sensor data can drive completely different visualizations depending on how you configure the widget. A temperature sensor reading 20°C is normal in an office (green) but alarming in cold storage (red). Thresholds, conditions, value ranges, and display modes let you encode that operational context directly into the widget.

For an overview of how to add widgets and enter edit mode, see [Adding Widgets](adding-widgets.md).

## Common controls

All widget settings panels share these navigation elements:

- **Close** (X icon, top right) — Closes the settings panel without saving.
- **Next** button — Navigates from the Datasource tab to the Appearance tab.
- **Save** button — Saves the configuration and closes the panel.

## Device data widget

**Availability:** All plans.

The Device data widget displays a single metric from a specific device as a live-updating card. It has no separate settings panel — configuration happens inline during the selection flow described in [Adding Widgets](adding-widgets.md).

**Configuration:**
- Device selector — Choose the device.
- Metric selector — Choose which metric to display.
- Live preview — A preview of the widget updates as you select options.

---

## Last data widget

**Availability:** Available on selected plans (feature-flagged).

The Last data widget shows the latest values from one or more devices, with configurable display types and per-sensor value ranges.

### Settings panel: Datasource tab

**Title:** "Last Data configuration"
**Subtitle:** "Configure last data and data sources"

- **Add datasource** button — Opens a device selection dialog. You can add multiple data sources, each connecting to a different device.
- Per data source:
  - **Choose device** button — Appears when no device is selected for this data source. Opens the device selection dialog. Once a device is selected, the button is replaced by the device name with an **edit icon** to change the selection.
  - A list of sensor metrics from the selected device.
  - **Add metric** button — Adds another metric from the same device. Disabled when all available metrics have been added.
- Per metric: see [Metric-level controls](#metric-level-controls) below.

### Settings panel: Appearance tab

| Field | Type | Details |
|-------|------|---------|
| **Widget name** *(required)* | Text | Placeholder: "Enter widget name" |
| **Description** | Multiline text | Placeholder: "Enter description here" |
| **Widget type** | Tabs | **Number** (plain value), **Doughnut** (ring gauge), or **Pie** (filled gauge) |
| **Display data legend** | Toggle | On / Off — shows a legend identifying each data source |

### Value range section *(Doughnut and Pie only)*

When the widget type is set to **Doughnut** or **Pie**, a value range section appears. This section shows one row per sensor:

- **Min value** *(required)* — The low end of the gauge scale.
- **Max value** *(required)* — The high end. This is where the gauge reads "fully filled."
- Tooltip: **"Set min and max to define the chart scale. Max is the value where the indicator is fully filled (for a pie, the whole circle)."**

Ranges are **per sensor**, not global. A doughnut showing both room temperature (0–40°C range) and fridge temperature (0–10°C range) uses different min/max for each.

Cross-field validation: changing the min value triggers re-validation of the max value and vice versa.

---

## Chart widget

**Availability:** Available on selected plans (feature-flagged).

The Chart widget plots metric values over time as a line or bar chart.

### Settings panel: Datasource tab

**Title:** "Chart configuration"
**Subtitle:** "Configure chart and data sources"

- **Add datasource** button — Opens a device selection dialog. This button is **only visible when no data source has been added yet**. The Chart widget supports one data source at a time. Once a source exists, the button is hidden.
- Per data source:
  - **Choose device** button — Appears when no device is selected. Opens the device selection dialog. Once selected, replaced by the device name with an **edit icon** to change the selection.

**Initial metric setup:** When the data source has no metric configured yet, an **"Add metric"** button appears. Tap it to create the first metric row with Data type and Device metric dropdowns.

**Editing the metric:** Once a metric is added, the "Add metric" button disappears. The Chart widget uses a single metric row per data source. To change the metric, use the **Device metric** dropdown directly on the existing row — you do not add additional metric rows.

The Chart metric row contains:

| Control | Type | Details |
|---------|------|---------|
| **Data type** | Dropdown | Currently: **Telemetry** |
| **Device metric** | Dropdown | Lists available metrics from the selected device. Shows a disabled placeholder if none are available. |
| **Color** | Color picker | Sets the line or bar color for this metric (90px picker). |
| **Delete** | Trash icon | Removes this metric from the data source. |

Chart metrics do **not** have the Icon picker or Conditions button that Last data and Image map metrics have. Chart uses appearance-level thresholds (see above) and a per-metric color picker for visual differentiation instead.

### Settings panel: Appearance tab

| Field | Type | Details |
|-------|------|---------|
| **Widget name** *(required)* | Text | Placeholder: "Enter widget name" |
| **Description** | Multiline text | Placeholder: "Enter description here" |
| **Widget type** | Tabs | **Line** (continuous trend) or **Bar** (discrete intervals) |
| **Timeframe** | Dropdown | **Last hour**, **Last day**, **Last week**, **Last month**. Subtitle: "(x position)" |
| **Value range — From** *(required)* | Number | Y-axis minimum. Subtitle: "(y position)" |
| **Value range — To** *(required)* | Number | Y-axis maximum |
| **Show average value** | Toggle | On / Off |
| **Show vertical axis lines** | Toggle | On / Off |
| **Show horizontal axis lines** | Toggle | On / Off |
| **Display data legend** | Toggle | On / Off |

### Thresholds

The thresholds section lets you define colored bands on the chart that highlight important value ranges.

Click **Add threshold** to create a new threshold. Default values: Label "Label N", color green, From 20, To 40, Show fill off, Show line off.

Per threshold:

| Field | Type | Details |
|-------|------|---------|
| **From** | Number | Start of the threshold range |
| **To** | Number | End of the threshold range |
| **Label** | Text | Name displayed in the legend (e.g., "Normal", "Warning") |
| **Color** | Color picker | The color for this band |
| **Show fill** | Toggle | Shade the area between the threshold boundaries |
| **Show line** | Toggle | Draw the boundary lines |
| **Delete** | Trash icon | Removes this threshold |

**Example:** For a warehouse temperature chart, you might create three thresholds:
- Green band: 2–8°C, label "Compliant", show fill on
- Yellow band: 8–12°C, label "Warning", show fill on
- Red band: 12–25°C, label "Breach", show fill on, show line on

---

## Image map widget

**Availability:** Available on selected plans (feature-flagged).

The Image map widget lets you upload floor plan or site images, organize them as layers, and pin device data onto specific locations.

### Settings panel: Appearance tab *(note: Appearance comes first)*

**Title:** "Add image map images and layers"
**Subtitle:** "Upload images for each layer (e.g., floors or sections) and name them to keep things organized."

| Field | Type | Details |
|-------|------|---------|
| **Widget name** *(required)* | Text | Placeholder: "Type widget name here". Validation error shown below the field. |
| **Description** | Text | Placeholder: "Type description here" |

#### Layers

A layer represents a floor, section, or view of your space. The first layer is created automatically.

- **Add new layer** button — Creates an additional layer.
- Per layer (expanded view):
  - **Layer name** — Editable text field. Shows a red border if left empty.
  - **Upload image** button *(required)* — Accepted formats: **PNG or JPG**. A format hint reads "PNG or JPG format".
  - After uploading: a **thumbnail preview** (40px max height) with the image filename, an **Upload new** button to replace the image, and a **Delete** button to remove it.
  - **Delete layer** (trash icon) — Removes the entire layer. The **first layer cannot be deleted**.
  - **Expand/collapse arrow** — Toggle layer details.

### Settings panel: Datasource tab

**Title:** "Image map configuration"
**Subtitle:** "Configure image layers and data sources."

Per layer:
- Layer name displayed as a read-only header.
- **Add datasource** button — Opens a device selection dialog to bind a device to this layer.
- Per data source: device binding, sensor metric list.
- **Add metric** button — Add additional sensor readings from the same device. Disabled if no more metrics are available.
- Remove a data source to unbind a device from the layer.

---

## Metric-level controls

These controls appear for each metric in the Datasource tab of **Last data** and **Image map** widgets. Chart widgets use a simpler metric row with Data type, Device metric, Color, and Delete — see the [Chart widget](#chart-widget) section above.

| Control | Type | Details |
|---------|------|---------|
| **Data type** | Dropdown | Currently: **Telemetry** |
| **Device metric** | Dropdown | Lists the available metrics from the selected device. If no metrics are available, shows a disabled placeholder. |
| **Icon** | Icon picker | Choose a display icon for this metric (74px selector). |
| **Conditions** button | Button | Opens the Conditions modal. Shows the current count: "Conditions: N". |
| **Delete** | Trash icon | Removes this metric from the data source. |

### Conditions modal

**Title:** "Conditions"
**Subtitle:** "The conditions set first will be considered as a priority"

The conditions modal configures per-metric color rules.

**Header fields:**
| Field | Type | Details |
|-------|------|---------|
| **Device metric** | Read-only | Shows the current metric name |
| **Unit** | Text | Override the display unit |
| **Icon** | Icon picker | Override the display icon |
| **Default color** | Color picker | The color when no condition matches |

**Per condition:**
| Field | Type | Details |
|-------|------|---------|
| **Condition name** | Text | Label for the condition (e.g., "Normal", "Critical") |
| **Data type** | Dropdown | **Number**, **String**, or **Boolean** |
| **Value fields** | Varies | Number: **From** and **To** range. String: text **Value**. Boolean: **True** / **False** dropdown. |
| **Color** | Color picker | The color when this condition matches |
| **Delete** | Trash icon | Removes this condition |

**Add condition** button — Creates a new condition. Default: name "Condition N", type Number, range 0–100, color primary.

**Save** — Disabled if any condition has validation errors. **Cancel** — Discards changes.

**Example — cold chain monitoring:** A temperature metric on a refrigeration unit might have:
- Condition "Compliant": Number, From 2, To 8, Color green
- Condition "Warning": Number, From 8, To 12, Color yellow
- Condition "Breach": Number, From 12, To 50, Color red

The same temperature metric on an office environment sensor:
- Condition "Comfortable": Number, From 20, To 24, Color green
- Condition "Cool": Number, From 16, To 20, Color blue
- Condition "Warm": Number, From 24, To 28, Color orange

Same data type, completely different operational meaning.

---

## Map widget

The Map widget shows a tracker device's current position together with selected fields transmitted by that tracker. Place it on any dashboard to embed a live-updating map view alongside your other operational data — without leaving the dashboard to visit the device detail page.

Unlike the standalone GPS tracking page, the Map widget is designed for at-a-glance situational awareness: you see where the asset is and the current value of any device metric the tracker transmits on a single marker — all in the context of your other dashboard widgets.

### Settings panel: Datasource tab

**Title:** "Map configuration"
**Subtitle:** "Configure last data and data sources."

- **Device selector** — The selector does not pre-filter to devices that already have location metrics. After you select a device, the widget looks for sensors whose names match `lat`/`latitude` and `lon`/`longitude`/`lng`. If no sensors with matching names are found, no marker is shown on the map.
- **Additional metric** — After selecting a device, all non-lat/lon sensors on that device become selectable. Pick **one** additional metric to display its current value on the map marker. Once a metric is selected, the Add metric button disappears — exactly one additional metric is supported.
- **Metric display** — The value of the selected metric appears on the map marker. The marker color is driven by any conditions configured on that metric (same conditions system as Last data and Image map widgets). If no conditions are configured, the marker uses the default color.

### Settings panel: Appearance tab

| Field | Required | Details |
|-------|----------|---------|
| **Widget name** | Yes | Displayed as the widget header on the dashboard. |
| **Description** | No | Optional subtitle shown below the widget name. |
| **Theme** | No | **Light** or **Dark** — sets the map tile color scheme independently of the dashboard theme. |
| **Display data legend** | No | Toggle — shows a legend identifying the displayed metric. |

Navigation between tabs uses the **Next** button (Datasource → Appearance). **Save** commits the configuration.

### Controls after placing the widget on a dashboard

Once the Map widget is on a dashboard, it provides interactive controls directly on the widget:

- **History menu item** — Opens options to browse historical location data recorded by the tracker. Label: "History".
- **Date range button** — When a date range is active, the button displays the selected period in **DD.MM.YYYY - DD.MM.YYYY** format.
- **Clear data range** button — Resets the date filter and returns to the current position view. Label: "Clear data range".

### Historical route display

When a date range is selected:

- The widget plots the tracker's recorded position history for that period as a route on the map.
- The route is rendered as a **dashed blue line** (color: #678AFB, width: 2px).
- Up to **500 GPS position points** are rendered per selected range.

### Expected results

After placing the Map widget on a dashboard:

- The map renders immediately with the tracker's last known position.
- The marker shows the tracker's location with the selected metric value and its condition-based color.
- As the tracker transmits new positions, the marker updates in real time.
- Historical routes are visible when a date range is selected using the History control.

### Troubleshooting

**No marker appears on the map:**
The widget detects latitude and longitude by looking for sensors whose names match `lat`/`latitude` and `lon`/`longitude`/`lng`. If your device uses different field names, the widget will not find usable location data — align the metric names to the expected patterns and confirm the device is actively transmitting position values.

**Route is empty for the selected date range:**
The tracker did not transmit any position data during that period, or the device was not active. Try expanding the date range. If the device has never reported position data, no route will be available.

**Selected metric value not showing on the marker:**
The metric may not have been transmitted yet, or no data has arrived since the widget was configured. Check the device detail page to confirm whether the metric has any recorded values.

### Operational examples

**Fleet vehicle monitoring:**
A delivery vehicle equipped with a GPS tracker publishes position together with speed and fuel level. The Map widget shows the vehicle's current position on a depot operations dashboard, with speed visible on the marker. The route history lets the operations team review the full day's delivery path.

**Field technician dispatch:**
A facilities management team tracks service technicians across a building campus. A Map widget on the NOC dashboard shows current technician positions with battery level on each marker, so the coordinator knows who is nearby when a new task comes in.

**Mobile asset with environmental monitoring:**
A refrigerated transport unit transmits GPS position and cargo temperature. The Map widget shows cargo temperature on the marker with color conditions (green = compliant, red = breach), so dispatchers immediately see whether the load is within spec without drilling into individual device pages.

**Delivery route audit:**
Using the date range controls, a logistics supervisor reviews a specific vehicle's route for the previous day to verify route compliance and identify unexpected stops.

---

## Related pages

- [Adding Widgets](adding-widgets.md) — How to enter edit mode and select widget types.
- [Creating Dashboards](creating-dashboards.md) — Create the dashboard that holds your widgets.
- [Real-Time Data](real-time-data.md) — How live data reaches your widgets.
- [GPS Tracking](maps-and-tracking/gps-tracking.md) — Full GPS tracking interface on device detail pages.
