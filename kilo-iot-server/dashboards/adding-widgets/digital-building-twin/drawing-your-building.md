---
description: Draw walls, doors, windows, and fences for a Digital Building Twin in Kilo IoT Server — 2D plan and 3D views of the same scene.
---

# Drawing Your Building

The structure of a Digital Building Twin — its walls, doors, windows, and fences — is what makes the model recognizable as a specific facility. A few minutes of drawing turns a generic box into *your* warehouse, with the loading dock on the east side and the cold store in the corner where it really is. This page covers drawing that structure from scratch.

If you already have an architectural drawing or want to trace the building from a map, you can skip the manual drawing — see [Importing a DXF plan](importing-a-dxf-plan.md) and [Tracing from the map](tracing-from-the-map.md). The three approaches mix freely: import a shell, then draw an interior partition by hand.

## Drawing in 2D or 3D

The editor shows the same model two ways, and you can draw in either:

* **2D view** is a top-down plan. Rotation is locked, so it behaves like drawing on paper — the natural view for laying out a floor plate accurately.
* **3D view** shows the walls standing up at full height, so you can check the result at eye level.

Switch between them with the **3D / 2D** toggle on the floor selector. A common rhythm is to draw the plan in 2D, then flip to 3D to confirm it.

## Drawing a wall

1. On the bottom toolbar, click **Build**. A row of structure tools appears.
2. Click **Wall**.
3. Click once in the scene to set the wall's **start point**.
4. Move the cursor — a preview of the wall follows, with a live length label in meters.
5. Click a second time to set the **end point**. The wall is created.
6. The tool stays active, so you can immediately draw the next wall. Each wall begins a fresh two-click sequence.

Wall endpoints snap to a grid, which makes it easy to keep corners square and walls aligned. When a new wall crosses an existing one, the existing wall is split at the crossing point — so you can later select and color each segment independently.

To stop drawing, press **Escape** or right-click, or click **Build** again to leave the mode.

## Adding doors and windows

Doors and windows are placed **into** a wall, so draw the walls first.

1. Click **Build**, then click **Door** or **Window**.
2. Click on a wall where the opening should go.
3. The opening is cut into the wall.

Select a door or window with the **Select** tool to fine-tune it in the properties panel:

* **Doors** — Width, Height, position along the wall, **hinge side** (Left / Right), and **swing direction** (Inward / Outward).
* **Windows** — Width, Height, position along the wall, height off the floor, and sill depth.

## Drawing a fence

A fence is drawn exactly like a wall — click **Build**, click **Fence**, then click a start point and an end point. Fences are useful for the parts of a site that aren't enclosed building: a yard perimeter, a parking-lot boundary, a fenced compound.

## Adjusting walls after drawing

Switch to **Select** and click a wall to open its properties:

* **Length** — shown for reference.
* **Height** — how tall the wall stands.
* **Thickness** — how thick it is.
* **Material** — a grid of presets (white, brick, concrete, wood, glass, metal, plaster, tile, marble) plus a **custom** color swatch. Material is purely visual — it does not affect sensor binding — but a glass curtain wall or a concrete core makes the model read true to the real building.

To remove a wall, select it and press **Delete**, or use the Delete button in the properties panel.

## Naming what you draw

As the model grows, open the **Scene** panel and give your walls and zones meaningful names — double-click an entry to rename it. "North Dock Wall" is far easier to find later than "Wall 14," and clear names make sensor binding much quicker when you reach that step.

## Tips

* Draw the outer shell first, then interior partitions. The grid snap keeps everything aligned.
* Work in 2D for accuracy, then switch to 3D to sanity-check heights and openings.
* Undo (Ctrl+Z) steps back through every drawing action, so experiment freely.
* You don't need a perfect model — you need a *recognizable* one. The goal is for an operator to instantly know which part of the building a colored object represents.

## See also

* [Importing a DXF plan](importing-a-dxf-plan.md) — Start from an existing CAD drawing
* [Tracing from the map](tracing-from-the-map.md) — Trace the outline from an aerial map
* [Floors and levels](floors-and-levels.md) — Add and manage multiple floors
* [Placing objects](placing-objects.md) — Furnish and equip the space
