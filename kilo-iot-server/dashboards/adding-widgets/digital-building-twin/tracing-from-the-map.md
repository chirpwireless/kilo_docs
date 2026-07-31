---
description: Trace a building outline from an aerial map in the Digital Building Twin — polygon to walls with real GPS anchor.
---

# Tracing from the Map

When you don't have a CAD drawing, you can build the shell of a Digital Building Twin straight from an aerial map. Open the map, find the building, click around its outline, and the editor turns the traced polygon into walls — and records where that building sits on the planet.

This is the right approach for sites you can see from above but don't have plans for: a depot, a yard, a parking lot, an outbuilding, a whole campus footprint. It is also how a building gets its **GPS anchor** — the trace stores a real-world geographic origin on the building, which is the foundation for the location-aware features described in [GPS anchoring](gps-anchoring.md).

## Opening the map

1. On the bottom toolbar, click **Build**.
2. In the structure-tools row, click **Trace from map**.
3. A full-screen map opens.

Pan and zoom the map to frame the building you want to trace. Use the navigation controls in the corner, or drag and scroll as you would on any web map.

## Tracing a building

1. Click **Trace building** to enter trace mode. The cursor becomes a crosshair and a hint appears: *Click on the map to add building corners*.
2. Click each **corner** of the building's outline in turn. Each click drops a point; the points connect into the polygon you're tracing.
3. Work your way around the full perimeter. The toolbar shows a running **point count**.
4. If you misplace a point, click **Undo** to remove the last one. **Reset** clears the trace and starts over. **Pause** stops adding points without discarding the ones you have.
5. When the outline is complete — at least three points — click **Import**.

The traced polygon is converted into one wall per edge, placed on the floor that is currently active. The map dialog closes and you're back in the editor with the building shell in place.

## What gets stored

Importing a traced building does two things:

* **Creates the walls** — one wall per edge of the polygon, on the active floor.
* **Stores the GPS origin and anchors on the building** — because the trace was drawn on a real map, the editor records the geographic coordinates of the outline. That anchor travels with the building when the widget is saved, and it's what later GPS features build on. See [GPS anchoring](gps-anchoring.md).

## After tracing

The traced walls are ordinary walls — select any of them to set height, thickness, and material, add doors and windows, draw interior partitions, and furnish the space. The trace gives you a correctly-proportioned, correctly-placed shell; everything inside it you build as normal.

## Tips

* Zoom in close on the map before tracing — the more of the building fills the screen, the more accurately you can place each corner.
* Trace the outline in order, going around the perimeter once. Don't jump across the building between clicks.
* For an L-shaped or irregular building, click a point at every corner, including the inside corners.
* Use **Pause** if you need to pan the map mid-trace, then resume clicking.

## See also

* [GPS anchoring](gps-anchoring.md) — What the geographic anchor enables
* [Drawing your building](drawing-your-building.md) — Add interior structure after tracing
* [Importing a DXF plan](importing-a-dxf-plan.md) — Build from a CAD drawing instead
