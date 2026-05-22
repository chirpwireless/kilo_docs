# Drop-Pins and Live Values

Conditional color tells an operator *that* something needs attention — a red zone, an amber unit. Sometimes they also need the **number**: not just "the cold store is in breach" but "the cold store is at 13.4 °C." A drop-pin puts that exact reading in the model, anchored to the spot it belongs to.

A pin is a marker placed at a specific point in the scene. It shows the metric's name and its current value with units, and the pin itself takes the same conditional color as the reading — so it's both a label and a status light.

## Pinning a metric

Pins are created from the Sensors panel, on a metric you've already set up (see [Binding sensors and colors](binding-sensors-and-colors.md)).

1. On the bottom toolbar, click **Sensors** and find the metric you want to pin.
2. On that metric, click **Pin to scene**.
3. The editor enters pick mode and shows the prompt **Click on the scene to pin this metric**.
4. Click the point in the model where the pin should sit — over the cold store, beside the pump, on the parking bay.
5. The pin appears at that point, showing the metric name and current value.

A pinned metric then offers two controls: **Re-pin** to move the marker to a new spot, and **Unpin** to remove it.

## What a pin shows

Each pin is a teardrop marker with a label floating above it. The label carries the metric's name and its current value with units — `Cold Store / Temperature  13.4 °C`. The marker and label are colored by the metric's conditions, exactly the way bound objects are colored: a reading in the "breach" band makes the pin red, a reading in the "compliant" band makes it green.

So a pin does two jobs at once — it reports the precise number, and it shows status through color without anyone having to read the number at all.

## Pins and floors

A pin belongs to the floor it was placed on. In a multi-floor model, a pin placed on the third floor shows when the third floor is in view and stays out of the way on the others — so a tall building doesn't end up with every floor's pins overlapping. See [Floors and levels](floors-and-levels.md).

## Showing and hiding pins

The Sensors panel header has a **Show sensor pins** toggle. It appears once at least one metric is pinned, and switches every pin in the model on or off at once.

Turn pins **off** for a clean, color-only view — useful for a wall-display dashboard where the shape and color carry the message. Turn them **on** when operators need the exact figures. Whichever way the toggle is set when you save the widget is how the dashboard tile shows it.

## When to pin

Color-only is enough for many objects — a parking bay doesn't need a number, occupied or free is the whole story. Reach for a pin when the value itself matters:

* A cold store or freezer where the exact temperature is the compliance record.
* A tank or silo where the fill percentage drives a refill decision.
* A plant-room pump where pressure or flow is the reading an engineer acts on.
* Any point where "how bad" matters as much as "there's a problem."

Pin the handful of readings that operators genuinely need as numbers, and leave the rest to color. A model peppered with pins is as hard to read as a spreadsheet; a few well-placed pins draw the eye exactly where it should go.

## See also

* [Binding sensors and colors](binding-sensors-and-colors.md) — Set up the metric a pin is based on
* [Floors and levels](floors-and-levels.md) — How pins behave across floors
* [GPS anchoring](gps-anchoring.md) — Anchor scene points to real-world coordinates
