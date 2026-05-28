---
description: Bind sensor readings to Digital Building Twin objects and define color rules — turn a 3D drawing into a live operational view of your facility.
---

# Binding Sensors and Colors

This is the step that makes a Digital Building Twin worth building. Up to now the model is a 3D drawing of a facility. Binding sensors turns it into a live operational view: a sensor reads "occupied" and the desk it's bound to turns red; a probe reports 14 °C and the cold store it's bound to turns from green to amber.

A **binding** connects one sensor reading to one or more objects in the model, plus a set of color rules that decide what color those objects show at any given value. This page covers building that connection.

## Opening the Sensors panel

On the bottom toolbar, click **Sensors**. The Sensors panel opens, headed **Source**. This is where every binding is configured.

## Step 1 — Add a data source

A data source is a device.

1. Click **Add datasource**. A new data-source card appears.
2. Click **Choose device** and pick the device whose readings you want to use.
3. The card now shows the device name. Add as many data sources as you need — one per device.

## Step 2 — Add a metric

Each data source exposes the device's individual sensor readings as **metrics**.

1. On the data-source card, click **Add metric**.
2. In the **Device metric** dropdown, choose the reading you want — temperature, occupancy, fill level, status, and so on.
3. Repeat to add more metrics from the same device.

Each metric is one binding. A device with a temperature sensor and an occupancy sensor gives you two metrics, and you bind each to different objects.

## Step 3 — Bind the metric to objects

1. On the metric, click **Configure**. The metric enters binding mode and its editor expands.
2. The editor shows the prompt **Click objects on the scene to bind them**.
3. Click any object in the 3D model — a desk, a parking spot, an AC unit, a wall, a whole floor zone. Each object you click is added to this metric, and appears in the editor's **Bound** list.
4. Bind as many objects as the reading should drive. To unbind one, remove it from the Bound list.
5. When you're done, click **Done**.

One metric can drive several objects at once — bind a single zone-temperature sensor to every desk in that zone and they all recolor together. The metric's **Bound** count shows how many objects it currently drives.

## Step 4 — Define the colors

A binding's editor carries the color rules. Two things control what an object shows:

* **Default color** — the color used when no condition matches. Set it with the color picker in the binding editor.
* **Conditions** — the rules that map readings to colors. Click **Add condition** to create one. Each condition has:
  * a **color**,
  * a **Name** (a label like "Occupied," "Breach," "Warning"),
  * a **Data type** — **Number**, **String**, or **Boolean**,
  * and a value test that depends on the type:
    * **Number** — a **From** / **To** range. The condition matches when the reading falls inside it.
    * **String** — a single **Value**. The condition matches when the reading equals it exactly.
    * **Boolean** — a **True** / **False** setting. The condition matches when the reading matches it.

Conditions are evaluated in order, and the **first one that matches wins**. If none match, the object shows the default color. This is the same conditional-color system used by the Last Data, Chart, and Image widgets — see [Conditions](../conditions.md) for the full reference.

## Step 5 — Test it

A binding's editor includes a **Value** slider. When the bound sensor isn't sending live data yet, drag the slider and watch the bound objects recolor in real time — it's the fastest way to confirm your conditions before the model goes on a dashboard. Once the device is reporting, the binding shows the real **Current value** and the model reflects live readings.

## Worked examples

**Parking availability.** Bind an occupancy sensor's status metric to a parking spot. Add two String conditions: `occupied` → red, `vacant` → green. The bay shows its real-time state; a lot full of these reads at a glance.

**Cold-chain compliance.** Bind a temperature probe to the cold-store zone. Add Number conditions: 2–8 °C green ("Compliant"), 8–12 °C amber ("Warning"), set the default color red for anything above. A supervisor sees compliance status without opening a single device page.

**Equipment and HVAC fault visibility.** Bind a status sensor to an AC unit or a pump. A Boolean condition — fault `true` → red — turns the equipment red in the model the moment it faults, so the failure is located as well as flagged.

**Facility occupancy.** Bind motion or occupancy sensors to the desks or zones of an office floor. Occupied desks shade one color, free desks another — space utilization becomes a picture instead of a report.

These four are a small sample of what binding makes possible. Any sensor in your deployment can drive any element of the model — if you can describe what a reading means for a place, you can make the twin show it. Let your own deployment suggest the rest.

## Tips

* Name objects clearly in the **Scene** panel before you bind — clicking the right desk is much easier when it's called "Rack B7."
* Bind one metric to many objects when they share a reading; bind separate metrics when each object has its own sensor.
* Use the test slider to prove every condition before you save.
* Keep conditions few and meaningful — three bands (good / warning / critical) usually communicate more clearly than ten.

## See also

* [Conditions](../conditions.md) — The full conditional-color reference
* [Drop-pins and live values](drop-pins-and-live-values.md) — Show the numeric value in the scene
* [Placing objects](placing-objects.md) — Add the objects sensors bind to
