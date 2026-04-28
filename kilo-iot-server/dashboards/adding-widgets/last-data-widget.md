# Last Data Widget

The Last Data widget shows the **last value received from a sensor**. When a device is actively transmitting, that is also the current value. When a device goes offline after its last transmission, the widget continues showing that last value — it does not clear the display or indicate that the device has stopped reporting. The widget shows what the sensor last said: current if the device is still transmitting, potentially stale if it is not.

Is the pump running or stopped? Is the valve open or closed? What is the cold storage temperature? These are Last Data questions. The widget shows the last transmitted value for each — no trend, no historical comparison, no time axis. For compliance history and shift-to-shift comparison, use the [Chart widget](chart-widget.md).

You can display a plain number, a Doughnut ring gauge, or a Pie filled gauge. One widget can hold multiple sensors across multiple devices — temperature, humidity, and CO2 for a zone, each styled and color-coded independently. Conditions encode operational context into the display: the same temperature reading that is green in a warehouse can be red in a pharmaceutical cleanroom, because you configure what the reading means in each specific environment.

## Setting up a Last Data widget

### Step 1 — Select Last Data from the widget picker

Click **Last Data** in the picker. (See [Adding Widgets](../adding-widgets.md) for how to open edit mode and reach the picker.) The settings panel opens with two tabs: **Datasource** and **Appearance**.

### Step 2 — Datasource tab: connect sensors

The Datasource tab is titled **"Last Data configuration"** with the subtitle **"Configure last data and data sources."**

**Adding a data source:**

1. Click **Add datasource**. A device selection dialog opens.
2. Choose the device whose sensor you want to display.
3. After selecting a device, its available metrics appear as rows. Each metric row contains:
   - **Data type** — set to Telemetry
   - **Device metric** — the sensor reading to display
   - **Icon** — a visual indicator for this metric on the widget
   - **Conditions button** — labeled **"Conditions: N"** where N is the current count. Click to define what color this reading shows at different values. The default color for the metric is also set here. See [Conditions](conditions.md).
   - **Delete** — remove this metric

There is no color picker directly in the metric row. The metric's base color and all threshold colors are set inside the Conditions modal.

**Adding more sensors:**

Click **Add datasource** again to add a second device. Duplicate devices are not allowed — each device can only appear once. To add more readings from the same device, click **Add metric** on that device's entry. The button grays out once all available metrics from that device have been added.

When you add a metric, a default value range of 0–100 is created for it automatically. This range controls the Doughnut and Pie gauge scales and can be changed in the Appearance tab.

### Step 3 — Appearance tab: set display style

**Widget name** *(required)* — The label shown on the dashboard. Placeholder: **"Enter widget name"**.

**Description** — Optional context note beneath the widget name.

**Widget type:**
- **Number** — A plain numeric value with unit. Best for readings where the current number is the primary information.
- **Doughnut** — A ring gauge. The ring fills proportionally between Min and Max. Use for fill levels, percentages, or anything with a defined operational range.
- **Pie** — A filled circle gauge. The circle fills completely at Max. Same scale concept as Doughnut, different visual weight.

**Value range** *(Doughnut and Pie only)* — One row per sensor. Set **Min** and **Max** to define the gauge scale. The tooltip reads: **"Set min and max to define the chart scale. Max is the value where the indicator is fully filled (for a pie, the whole circle)."** Min must be strictly less than Max — equal values are not accepted.

**Display data legend** — A toggle that shows a legend listing each sensor metric. Works for all three display types: Number, Doughnut, and Pie.

### Step 4 — Save

Click **Save** to add the widget to the dashboard.

## What to expect

The widget immediately shows the last known value from each sensor. Values update as sensors report new data.

The value shown is the last one received. If a device has gone offline or is outside communication range, the widget continues showing the last reading — it does not clear the display. Verify a sensor's last-reported time on the device page before acting on a reading if the device may be offline.

If a sensor hasn't reported yet: **"Waiting for live data"**. If the widget has no metrics configured: **"Add a metric to start visualizing data"** or **"Choose data source and add metric"**.

## Operational examples

**Pump running or stopped right now?**
A pump control sensor reports 1 (running) or 0 (stopped) as INTEGER. Number widget with two conditions: "Running" — Number, From 1, To 1 — blue; "Stopped" — Number, From 0, To 0 — grey. An operations panel shows a row of Last Data widgets — one per pump — so operators see current status at a glance without opening individual device pages.

**Valve position — open or closed?**
Same 0/1 pattern: "Open" — green; "Closed" — grey. Or inverted for a drain valve where closed is the safety-expected state. The widget shows operational state, not a raw number.

**Cold storage rack — current temperature:**
A temperature sensor on a refrigeration unit. Conditions: green 2–8°C "Compliant", yellow 8–12°C "Warning", red above 12°C "Breach". Shift supervisors see current compliance status at a glance. For whether the temperature was always compliant throughout the shift, use the Chart widget.

**Pharmaceutical cleanroom — same sensor type, different spec:**
Conditions configured entirely differently: green 20–22°C "Normal", yellow 22–24°C "Elevated", red above 24°C "Out of spec". The hardware is identical. The operational meaning is completely different.

**Warehouse zone — current humidity:**
A humidity sensor. Doughnut widget, Min: 0, Max: 100. Conditions: green 40–65% "Acceptable", yellow 65–80% "Elevated", red above 80% "High humidity alert". Operators see which zones need attention at a glance.

**Liquid tank — current fill level:**
Level sensor reporting in liters, capacity 5,000 L. Doughnut with Min: 0, Max: 5000. Conditions: green above 3000L "Adequate", yellow 1000–3000L "Plan refill", red below 1000L "Refill now". Each tank is configured independently with its own Max and threshold levels.

## See also

- [Conditions](conditions.md) — Define color rules for each metric
- [Adding Widgets](../adding-widgets.md) — Edit mode and widget picker
