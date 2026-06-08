---
description: Show a reading on a circular dial with the Radial Gauge — a configurable sweep angle, tick marks, and condition arcs for at-a-glance status.
---

# Radial Gauge Display

<!-- IMAGE: last-data-radial-gauge.jpg — alt: Last Data widget using the Radial Gauge display type -->

The Radial Gauge draws each reading as a needle on a **circular dial**. The dial is scaled between a minimum and a maximum, the condition bands you define paint colored arcs around it, and a configurable **sweep angle** lets the dial range from a near-full circle to a tight arc. It's the instrument-panel look — the reading you'd expect on a pressure gauge, a tachometer, or a fill indicator.

It is the sixth display type of the [Last Data widget](../last-data-widget.md), alongside Number, Doughnut, Pie, Tube, and the horizontal [Gauge](gauge.md).

## Radial gauge vs. the horizontal Gauge

Both plot a value against a scale with condition bands, so choose by shape and context:

* The **[Gauge](gauge.md)** is a horizontal track — compact, and it lines up neatly when several sit in a row.
* The **Radial Gauge** is a round dial — it reads like a physical instrument and carries more visual presence on a control-center screen, which suits a small number of headline readings rather than a dense row of many.

## When to choose it

* A flagship reading on a NOC or operations dashboard where an instrument dial communicates status instantly across a room.
* A value with a natural full-scale point — pressure against its rated maximum, a reserve against capacity, throughput against a ceiling.
* Any threshold reading where you want condition bands rendered as arcs the eye can read at a glance.

## Configure a Radial Gauge display

The setup follows the standard [Last Data widget](../last-data-widget.md) flow — add a datasource, choose the device and a numeric metric, and define [Conditions](../conditions.md). The radial-gauge-specific settings live on the **Appearance** tab once you select the type.

1. Open the dashboard in edit mode and click **Last data** in the widget picker.
2. On the **Datasource** tab, click **Add datasource**, choose the device, and **Add metric** — set **Data type** to **Telemetry** and pick the numeric reading.
3. Click **Conditions: N** and define a **Default color** and one band per status (each with a **From**/**To** range and color). On a Radial Gauge these render as colored arcs around the dial. **Save** the modal.
4. Click **Next** to open **Appearance**, and enter a **Widget name** and optional **Description**.
5. Under **Widget type**, choose **Radial gauge**. The radial settings appear:
   * **Min value** and **Max value** — the two ends of the dial's scale. **Min must be strictly less than Max.**
   * **Tick marks** — how many marks divide the scale around the dial.
   * **Sweep angle** — how far the dial sweeps, in degrees from **0 to 360**. The default is **300**, which leaves a gap at the bottom like a classic instrument; raise it toward 360 for a full ring, or lower it for a tighter arc.
   * **Radial Gauge name** — a short label shown with the dial (pre-filled from the metric, editable).
6. Toggle **Display data legend** if you want the metric listed, then click **Save**.

The dial appears with the needle at the current reading, the condition arcs behind it, and tick marks around the scale — updating as the sensor reports.

## Worked example

**Compressor discharge pressure.** A compressor rated to 10 bar gets a Radial Gauge scaled **Min value** 0, **Max value** 10, with **Tick marks** 10 and the default **Sweep angle** 300. Three condition arcs give it instant meaning: "Normal" From 0 To 7 green, "High warning" From 7 To 9 yellow, "Critical" From 9 To 10 red. On the operations screen the needle sits in the green during normal running and swings toward the red arc as pressure climbs — a glance tells the shift whether the machine is where it should be. To raise a notification on a crossing rather than just show it, pair the widget with an [Alarm](../../../alarm/README.md).

## See also

* [Last Data Widget](../last-data-widget.md) — Full setup reference and the other display types
* [Gauge Display](gauge.md) — The horizontal-track alternative
* [Conditions](../conditions.md) — Numeric From/To rules that become the dial's arcs
* Other display types: [Value](number.md) · [Doughnut](doughnut.md) · [Pie](pie.md) · [Tube](tube.md)
