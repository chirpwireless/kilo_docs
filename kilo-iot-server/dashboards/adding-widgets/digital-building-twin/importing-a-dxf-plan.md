---
description: Import an architectural DXF drawing into a Digital Building Twin in Kilo IoT Server — convert CAD line work into precise scaled walls instantly.
---

# Importing a DXF Plan

Most commercial facilities already have an architectural drawing. Rather than redraw a warehouse or office floor wall by wall, you can import that drawing directly. The editor reads **DXF** files — the interchange format every major CAD application can export — and converts the line work into walls on the current floor.

This is the fastest way to a precise model: the geometry comes straight from the architect's plan, already to scale, and you spend your time furnishing and binding sensors rather than tracing.

## What you need

* A `.dxf` file of the floor you want to model. Any CAD package — AutoCAD, BricsCAD, LibreCAD, and others — can export DXF.
* The file is read entirely in your browser. Nothing is uploaded until you save the widget.

## Importing a file

1. On the bottom toolbar, click **Build**, then click **Trace from map** — the import dialog is reached from the same area. (DXF import and map tracing share the structure-tools row.)
2. In the import dialog, click **Choose file** and select your `.dxf` file.
3. The dialog parses the file and shows a **preview** of the walls it found, so you can check the result before committing anything to the model.
4. Review the **Options** and **Statistics** in the sidebar (below).
5. Click **Import**. One wall is created for each line segment in the drawing, on the floor that is currently active.

If the file can't be read, the dialog reports it. If it parses but contains no usable geometry, the dialog says so — DXF files sometimes hold only annotations or dimensions with no actual walls.

## Options

Two settings control how the drawing is interpreted:

* **Source unit** — the unit the CAD file was drawn in: **Millimeters**, **Centimeters**, **Meters**, **Inches**, **Feet**, or **Unitless**. The importer reads the file's own declared unit when it has one and preselects it; override it if the file's declaration is wrong or missing. Getting this right is what makes the imported building come in at the correct real-world size — if a model imports far too large or too small, the source unit is almost always the cause.
* **Arc segments** — how finely curved geometry is approximated, since the model is built from straight wall segments: **Low**, **Medium**, or **High**. Medium is a good default; High gives smoother curves at the cost of more wall segments.

The preview re-renders every time you change an option, so you can dial in the scale visually before importing.

## Statistics and warnings

The sidebar reports what the importer did:

* **Walls** — straight segments converted into walls.
* **Arcs** and **Circles** — curved entities approximated as wall segments.
* **Skipped entities** — drawing elements that aren't walls (text, dimensions, hatching) and were left out.

Any **Warnings** explain what was dropped and why. A high skipped count is normal — a CAD drawing carries far more than walls, and only the wall geometry belongs in the building twin.

## After importing

The imported walls behave exactly like walls you draw by hand. Select any of them to set height, thickness, and material, add doors and windows, and continue building. If the import isn't quite right, **Undo** (Ctrl+Z) reverses it and you can adjust the source unit and try again.

A typical workflow: import the shell from DXF, switch to the **2D view** to confirm the layout, then draw any interior partitions the CAD file didn't include and move on to furnishing.

## Tips

* If the building imports at the wrong size, the **Source unit** is wrong — change it and re-import.
* Import each floor's drawing onto its own floor: add the floor first (see [Floors and levels](floors-and-levels.md)), make it active, then import.
* Clean DXF files import cleanly. If a drawing is cluttered with non-wall layers, exporting just the wall layer from the CAD tool gives the best result.

## See also

* [Drawing your building](drawing-your-building.md) — Draw or adjust structure by hand
* [Tracing from the map](tracing-from-the-map.md) — Build from an aerial map instead
* [Floors and levels](floors-and-levels.md) — Import each floor onto its own level
