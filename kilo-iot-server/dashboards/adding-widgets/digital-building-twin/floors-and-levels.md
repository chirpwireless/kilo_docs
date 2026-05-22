# Floors and Levels

Few facilities are single-storey. An office building has floors stacked on top of each other; a warehouse has a mezzanine; a site has a basement plant room under the ground floor. A Digital Building Twin models all of them in one widget — each floor is its own layer of the same model, with its own walls, objects, and sensor bindings.

This page covers adding floors, moving between them, and the two ways to view a multi-floor model.

## The floor selector

A floating stack of floor buttons sits to one side of the editor. It is the control center for everything to do with floors:

* Each floor is a button, labelled **L0**, **L1**, **L2**, and so on. The highest floor is at the top of the stack, the lowest at the bottom — the same order they sit in the real building.
* The **active floor** is highlighted. Everything you draw, place, or bind goes onto the active floor.
* Click any floor button to make that floor active and bring it into focus.

## Adding a floor

* Click the **+** button at the **top** of the stack to add a floor **above** the highest one.
* Click the **+** button at the **bottom** of the stack to add a floor **below** the lowest one.

When you add a floor, the editor gives it a slab (a floor plate) shaped to match the floor nearest it, so a new storey starts with a footprint instead of empty space. From there you draw its walls, place its objects, and bind its sensors independently.

A common pattern for a multi-storey building: add all the floors first, then work through them one at a time — make a floor active, build it out, move to the next.

## Deleting a floor

Select the floor in the stack, then click the **delete** icon on its button. A model must keep at least one floor, so the delete control only appears when there is more than one.

## Two ways to view a multi-floor model

Below the floor buttons, the selector carries two view toggles.

### 3D / 2D

Switches the camera between the **3D view** (orbit the model freely) and the **2D view** (a locked top-down plan). This is the same toggle described in the [Editor tour](editor-tour.md). Draw and lay out in 2D; review in 3D.

### Stack / Solo

This toggle controls how floors are shown, and only appears when the model has more than one floor:

* **Stack** — every floor is drawn in its real position, stacked vertically. You see the whole building at once. Best for a final review and for framing the dashboard view.
* **Solo** — only the active floor is shown; the others are hidden. Best while you are working — a single floor with no clutter from the levels above and below.

A typical rhythm: work in **Solo** so each floor is uncluttered while you build it, then switch to **Stack** to see the whole building before you save.

## What the dashboard shows

The dashboard tile renders the model from the camera angle and view mode you leave the editor with. For a multi-floor building, framing the model in **Stack** with a slight 3D tilt gives the dashboard a clear, whole-building view. If a particular floor is what matters most — the production floor, the floor with the critical cold store — frame that one and save.

## Tips

* Name your floors something meaningful in the **Scene** panel — "Ground Floor," "Mezzanine," "Plant Room" — instead of leaving them as L0, L1, L2.
* Build floor by floor. Switching to **Solo** keeps the floor you're working on free of visual noise.
* Sensor bindings are per-object, so a sensor on the third floor and a sensor on the ground floor stay correctly placed no matter which floor is active.

## See also

* [Editor tour](editor-tour.md) — The 3D/2D toggle and camera controls
* [Drawing your building](drawing-your-building.md) — Build out each floor
* [Binding sensors and colors](binding-sensors-and-colors.md) — Wire sensors on every floor
