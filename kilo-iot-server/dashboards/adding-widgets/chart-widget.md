# Chart Widget

Last Data tells you where a reading is now. Chart tells you where it has been — and whether the trend should concern you.

Cargo temperature is 7°C right now. Was it always within spec? A Last Data widget tells you the current value. Chart tells you the full story: the **large current reading** at the top shows where the metric stands now, and the **historical graph** below shows how it got there — the trace over the last hour, day, week, or month. Operators see whether a reading is rising, falling, stable, or drifting toward a threshold, without switching between views.

Threshold bands sit on the graph itself. Define compliant, warning, and breach zones with colors and labels. The bands make context visible at a glance — and the large current reading at the top changes color automatically when it falls inside a threshold range, so the widget communicates status even before an operator reads the graph.

## Setting up a Chart widget

### Step 1 — Select Chart from the widget picker

Click **Chart** in the picker. (See [Adding Widgets](../adding-widgets.md) for how to open edit mode and reach the picker.) The settings panel opens with two tabs: **Datasource** and **Appearance**.

### Step 2 — Datasource tab: connect one sensor

The Datasource tab is titled **"Chart configuration"** with the subtitle **"Configure chart and data sources."**

The Chart widget supports one data source at a time. Click **Add datasource** to open the device selection dialog and choose a device. Once a data source is added, the Add datasource button **disappears entirely** — it does not gray out. To switch to a different sensor, change the Device metric dropdown on the existing row.

The metric row contains:
- **Data type** — set to Telemetry
- **Device metric** — the sensor reading to graph
- **Color** — a color picker that sets both the line or bar color on the graph and the base color for the large current reading at the top
- **Delete** — remove this data source

Chart metric rows do not have an Icon picker or Conditions button. Per-metric color is set directly here. Contextual thresholds are set in the Appearance tab.

### Step 3 — Appearance tab: configure the chart

**Widget name** *(required)* — Shown as the widget header.

**Description** — Optional subtitle.

**Widget type:**
- **Line** — A smooth continuous curve. Best for readings that change gradually over time: temperature, pressure, humidity.
- **Bar** — Discrete vertical bars per interval. Useful when each individual report is meaningful, or when you want to compare readings across equal time intervals.

**Timeframe** — The historical period shown in the graph: Last hour, Last day, Last week, Last month.

**Value range** — Y-axis scale:
- **From** *(required)* — Bottom of the axis
- **To** *(required)* — Top of the axis

**Thresholds** — Colored bands drawn on the graph to mark operational ranges. Click **Add threshold** to create one. Each threshold has:
- **From** — Lower bound of the band
- **To** — Upper bound
- **Label** — Name shown in the legend (e.g., "Compliant", "Warning", "Breach")
- **Color** — The band color
- **Show fill** — Toggle to shade the area within the band
- **Show line** — Toggle to draw boundary lines at the band edges
- **Delete** — Remove this threshold

Threshold bands render on the graph in **both Line and Bar modes**.

**Toggles:**
- **Show average value** — Adds a dashed line at the period average with "Average" in the legend
- **Show vertical axis lines** — Time-axis grid lines
- **Show horizontal axis lines** — Value-axis grid lines
- **Display data legend** — Shows threshold labels and the average in a scrollable legend

### Step 4 — Save

Click **Save** to add the widget to the dashboard.

## How the current reading color works

The large value at the top of the widget defaults to the metric color set in the Datasource tab. When the current value falls inside one of your threshold ranges, the display switches to that threshold's color. When it moves outside the threshold, it returns to the metric base color.

This means a cold storage temperature widget can show green for a compliant reading and turn red the instant the temperature climbs into the breach range — without any separate configuration for the current reading.

## Thresholds vs conditions

Chart uses threshold bands — colored ranges drawn on the historical graph. The full conditions system (named rules, priority order, per-metric defaults) is for Last data and Image map widgets. See [Conditions](conditions.md).

## Same sensor type, different operational use cases

**Cold chain compliance — the primary use case:**
A refrigeration unit temperature sensor, Line chart, Last day timeframe. Value range: −5 to 20°C. Three thresholds: green 2–8°C "Compliant", yellow 8–12°C "Warning", red 12–20°C "Breach". The current reading at the top turns red the moment the load temperature crosses into the breach zone. The historical graph shows exactly when the breach started and whether it is worsening.

**Server room cooling — trend over a week:**
A rack air temperature sensor, Line chart, Last week. Threshold bands show the normal operating range and a high-temperature alert zone. An operator checking the dashboard after a weekend can see immediately whether the HVAC held steady or whether there were temperature spikes during off-hours.

**Vibration monitoring — Bar chart for discrete reports:**
An equipment vibration sensor reporting amplitude at regular intervals, Bar chart, Last day. Thresholds: green for normal amplitude, yellow for elevated, red for critical. Each bar represents one report interval. An operations engineer can see exactly which intervals had elevated vibration and correlate them with production schedules.

**Energy consumption — daily peaks and baseline:**
A power meter on a production line, Line chart, Last week. Threshold bands highlight off-hours baseline consumption and production-hours expected range. Deviations from the expected baseline are immediately visible as the line moves outside the green band.

## See also

- [Conditions](conditions.md) — Per-metric color rules for Last data and Image map widgets
- [Adding Widgets](../adding-widgets.md) — Edit mode and widget picker
