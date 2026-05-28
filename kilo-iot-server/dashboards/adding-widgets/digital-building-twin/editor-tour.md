---
description: Tour the Digital Building Twin editor in Kilo IoT Server — toolbars, Scene panel, camera controls, and floor selector for the 3D building modeler.
---

# Editor Tour

The Digital Building Twin editor is a full-screen workspace. Everything you do — drawing structure, placing objects, binding sensors, framing the view — happens here. This page is the map: what each toolbar and panel does, and how to move around the scene. The pages that follow go deep on each task; this one gets you oriented.

When you add a **Digital building twin** widget to a dashboard, the editor opens with a starter scene already in place: a building with one floor. You build outward from there.

## The bottom toolbar — your main control

The toolbar centered along the bottom of the screen is where most work begins. It has four modes:

* **Select** — the default. Click objects to select them, move them, and edit their properties. Press **Escape** at any time to return here.
* **Build** — opens a row of structure tools: **Wall**, **Door**, **Window**, **Fence**, plus **Trace from map**. Use these to draw the shell of the building. See [Drawing your building](drawing-your-building.md).
* **Furnish** — opens the object catalog: five category tabs (**Furniture**, **Appliance**, **Kitchen**, **Bathroom**, **Outdoor**) and a scrollable strip of 3D models to drop into the scene. See [Placing objects](placing-objects.md).
* **Sensors** — opens the Sensors panel, where you connect devices and bind their readings to objects in the model. See [Binding sensors and colors](binding-sensors-and-colors.md).

Click a mode to enter it; click it again to return to Select.

## The Scene panel

The **Scene** panel lists every element in the model as a tree — the building, its floors, and the walls, slabs, items, doors, windows, and zones on each floor. Click any entry to select that element in the 3D view. Double-click an entry (or use the pencil icon) to rename it — giving walls and zones meaningful names like "Loading Dock Wall" or "Server Row A" makes the model far easier to work with when you start binding sensors.

## The properties panel

Select any object and a properties panel opens with the settings for that specific element:

* **Items** (catalog objects) — Name, Position (X, Y height, Z), Rotation (with **+45°** / **-45°** buttons), Scale, and measured Dimensions.
* **Walls** — Length, Height, Thickness, and a **Material** grid (white, brick, concrete, wood, glass, metal, plaster, tile, marble, or a custom color).
* **Doors and windows** — Width, Height, position along the wall, hinge side and swing direction for doors, sill depth for windows.

Every selected object also gets an inline action badge floating above it in the scene, with quick **Move**, **Duplicate**, and **Delete** buttons.

## Moving the camera

The editor has two camera modes, switched from the floor selector (see below):

* **3D view** — orbit freely. Left-drag rotates, right-drag pans, the scroll wheel zooms. Hold **Space** to make left-drag pan instead of rotate.
* **2D view** — a straight top-down plan view. Rotation is locked; you can only pan and zoom. This is the cleaner view for laying out walls and reading a floor plate.

The camera angle and zoom you leave the editor with become the angle the dashboard tile opens at, so frame the view deliberately before you save.

## The floor selector

A floating stack of floor buttons sits to one side. It lists every floor (labelled **L0**, **L1**, and so on), lets you add a floor above or below, and switches the active floor. It also carries the **3D / 2D** view toggle and, for multi-floor models, a **Stack / Solo** toggle. See [Floors and levels](floors-and-levels.md).

## Undo, redo, and deleting

* **Undo** — Ctrl+Z (Cmd+Z on Mac).
* **Redo** — Ctrl+Shift+Z (Cmd+Shift+Z).
* **Delete** — select an object and press **Delete** or **Backspace**, or use the Delete button in the properties panel or the inline badge. The building and its floors are protected and cannot be deleted this way.
* **Cancel a tool** — press **Escape** or right-click to drop out of a drawing or placement action back to Select.

## Saving and leaving

* **Save** — the button in the top-right corner. It opens a **Widget name** dialog; enter or confirm the name and the model is saved to the dashboard.
* **Cancel** — leaves the editor. If you have unsaved changes, the editor asks you to confirm with a **Discard unsaved changes?** dialog — choose **Discard** to leave or **Keep editing** to stay.

## See also

* [Drawing your building](drawing-your-building.md) — Walls, doors, windows, and fences
* [Floors and levels](floors-and-levels.md) — Multi-floor models and the 2D/3D toggle
* [Placing objects](placing-objects.md) — The object catalog and placement
