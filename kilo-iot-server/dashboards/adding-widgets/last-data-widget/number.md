---
description: Show a sensor reading as a plain figure with its unit using the Number display in the Kilo IoT Server Last Data widget.
---

# Number Display

<figure><img src="../../../../.gitbook/assets/last-data-number.jpg" alt="Last Data widget using the Number display type"><figcaption></figcaption></figure>

The Number display shows a reading as a plain figure with its unit — no gauge, no scale, just the value. When a tile holds several metrics, they sit side by side, each with its own color and label, so one compact panel can carry the temperature, humidity, and CO2 of a zone at once.

Reach for Number when the figure itself is the information and there is no range to visualize against — an exact instrument reading an engineer acts on, a status value where you only need to see the number, or a multi-metric summary where space is tight.

Because there is no scale, Number is the one Last Data display type with no **Value range** to set.

## When to choose it

- A precise reading operators act on directly — a calibrated pressure, a flow rate, a cold-store temperature.
- A compact multi-metric tile — several readings from one zone or asset in a single panel.
- A status or count value where the number is self-explanatory and a gauge would add nothing.

These are starting points — any reading where the bare figure communicates best suits the Number display.

## Configure a Number display

Here is a full setup for one real case — a tile that shows at a glance whether a pump is running. The pump controller reports just two values — `1` when running and `0` when stopped. Because the reading is only ever 0 or 1, there is nothing to fill or scale: a Number tile is the natural fit, and each condition only has to match one of those two values. This is one example: a Number tile suits any reading where the figure itself is the information — only the device and the conditions change.

1. Open the dashboard in edit mode and click **Last data** in the widget picker. The settings panel opens on the **Datasource** tab, with no data sources yet.
2. Click **Add datasource**. A **Datasource 1** block appears.
3. In the block, click **Choose device** and select the pump controller.
4. Click **Add metric**. A metric row appears.
5. In the row, set **Data type** to **Telemetry**, choose the running-state reading under **Device metric**, and pick an **Icon**.

   > **Can't find your metric?** The **Device metric** list only offers numeric metrics. If a reading you expect is missing, its metric **Type** is set to String or Boolean instead of Integer or Float. Open **Metric Templates** (the **Metrics Templates** button on a connection's Connected Devices list), find the metric on the **Metrics** tab, and set its **Type** to Integer or Float — provided the device actually reports a number. See [Metric Templates](../../../devices/metric-templates.md).
6. Click **Conditions: N** to open the Conditions modal. Set a **Default color** — the color the reading falls back to whenever none of your conditions match the current value — then for each state click **Add condition** and fill the row — enter a **Condition name**, set **Data type** to **Number** (the condition's own Data type, not the metric row's), because the pump only ever reports 0 or 1, set **From** and **To** to the same number — the value that condition should catch — and pick a **Color**. Then you can enter the two states. For example:
   - "Running" — **From** 1, **To** 1 — blue
   - "Stopped" — **From** 0, **To** 0 — gray

   Click **Save** to close the modal.
7. Click **Next** to move to the **Appearance** tab.
8. Enter a **Widget name** — for example "Pump 1" — and, if useful, a **Description**.
9. Under **Widget type**, choose **Number**. No **Value range** or **Tick marks** fields appear — Number has no scale, because a status reading like 0 or 1 has nothing to fill; the value itself is the message.
10. Switch on **Display data legend** if you want a labeled legend, then click **Save**.

The tile still shows the number — `1` or `0` — and the condition color paints it blue when the pump is running and gray when it is stopped, so the state reads at a glance without anyone interpreting the digit. Line up one Number tile per pump and a supervisor takes in the whole fleet at once. The same setup fits any status reading — a valve's open/closed flag, a door contact, a leak sensor — by changing the device and the two conditions.

## Worked examples

**An exact measured value**
When the figure itself matters, the Number tile shows it in full. A cold-storage probe reporting in °C needs no scale — the conditions are simply the temperature thresholds that matter. Take three: "Compliant" — From 2, To 8 — green; "Warning" — From 8, To 12 — amber; "Breach" — From 12, To 30 — red (the To value just sits above any temperature the rack would realistically reach). An operator sees the exact reading — `6.4 °C` — and the color delivers the compliance verdict at the same time. The number is never hidden; the color is meaning added on top of it. To confirm the rack held temperature across a whole shift, use the [Chart widget](../chart-widget.md).

**A multi-metric tile**
A Number widget can carry several readings at once. Add three metrics from one multi-sensor device — temperature, humidity, CO2 — and each keeps its own icon, conditions, and color, sitting side by side as one compact panel for the zone.

## See also

- [Last Data Widget](../last-data-widget.md) — Full setup reference and the other display types
- [Conditions](../conditions.md) — Numeric From/To color rules for each metric
- Other display types: [Doughnut](doughnut.md) · [Pie](pie.md) · [Gauge](gauge.md) · [Tube](tube.md)
