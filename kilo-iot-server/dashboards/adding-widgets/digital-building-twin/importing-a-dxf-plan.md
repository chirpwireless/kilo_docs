---
description: Import an architectural DXF drawing into a Digital Building Twin — pick each floor plan, review walls, doors and windows, and add all levels at once.
---

# How to Import a DXF Floor Plan into a Digital Building Twin

Most commercial facilities already have an architectural drawing. Rather than redraw a warehouse or office floor wall by wall, you can import that drawing directly. The editor reads **DXF** files — the interchange format every major CAD application can export — recognizes walls, doors and windows, and creates them on the levels you choose. A drawing with several floor plans on one sheet becomes several levels in a single import.

The import is a **beta**. A **Beta** badge sits next to the dialog title, and hovering it shows *DXF import is in beta and may not work perfectly. Check the result after import.* Treat the preview as the proof, and expect that a clean architectural export reads better than a scanned or heavily converted drawing.

## What do I need to import a DXF file?

* A `.dxf` file of the building you want to model. Any CAD package — AutoCAD, BricsCAD, LibreCAD, and others — can export DXF.
* A **text (ASCII) DXF** file. Binary DXF and DWG files are not supported; if the drawing is a DWG, save it as DXF from your CAD tool first.
* The file is read entirely in your browser. Nothing is uploaded when you import it; the walls are saved with the widget like any other part of the twin.

## How do I import a floor plan into a Digital Building Twin?

1. Open the twin in the editor and click **Build** on the bottom toolbar.
2. In the import row of the toolbar, click **Import from file**. (The button sits next to **Trace from map**.) A full-screen dialog titled **Import from file** opens, with the **Beta** badge beside the title.
3. Drag a `.dxf` file onto the dialog, or click **Choose file** under **Import a floor plan**. The empty state reminds you that the file is read in your browser and is not uploaded, and that a DWG must be saved as DXF first.
4. Wait while the dialog shows **Reading file…**. The drawing appears in the preview, and a 360-pixel sidebar opens on the right.
5. Drag a rectangle around one floor plan on the drawing (the preview says **Drag a rectangle around the floor plan you want to import**).
6. Check the recognized walls, doors and windows, then click **Add as {level name}** in the sidebar.
7. Repeat for the other floors.
8. Click **Import levels: N** at the top right. If you never selected anything, the button reads just **Import** and the whole drawing becomes one level.

The sidebar lists the same sequence under its numbered steps:

1. **Drag a rectangle around one floor plan on the drawing**
2. **Check the walls, doors and windows, then add it as a level**
3. **Repeat for the other floors**
4. **Import all levels at once**

Each step is highlighted while it is the current one and shows a check mark when it is done.

If the file can't be read, the preview shows the error with the hint *Make sure it is a text (ASCII) DXF file. Binary DXF and DWG are not supported.* If it reads but contains nothing to turn into walls, the preview says **No supported geometry in this file** — *The file has no lines, polylines, arcs or circles to turn into walls.* DXF files sometimes hold only annotations or dimensions.

## What does each part of the import dialog do?

### Header

* **Import from file** — the title, with the file name underneath once a file is loaded.
* **Cancel** — closes the dialog without changing the twin. It is disabled while the import runs.
* **Import** / **Import levels: N** — creates every level in the list at once. It is disabled until there is something to import, and shows a spinner while it works (the preview reads **Importing…**).

### Preview

The preview shows your drawing as thin lines and overlays what the importer recognized. A legend explains the colors:

* **Drawing lines** — the raw CAD lines.
* **Walls**, **Doors**, **Passages**, **Windows** — recognized structure.
* **Current selection** — the dashed frame of the rectangle you are dragging or just drew.
* **Level to import** — the solid frame around a floor plan you already added.

Drag a new rectangle to replace the current selection. A **Choose another file** button above the preview lets you swap the drawing.

### Levels to import

This section lists every floor plan you added. Each row has:

* A **Level** selector. Options read **{name} (new)** for a level that does not exist yet, **{name} (empty)** for an existing level with nothing on it, and **{name} (replace)** for a level that already has content and will be overwritten. Levels already used by another row are disabled.
* A trash button (**Remove level**) that drops the floor plan from the import.
* A summary line, for example **12 walls · 3 doors · 4 windows**, or **Recognizing walls…** while it works, or **Walls could not be recognized in this area**.

With no selection yet, the section reads *Nothing selected yet. Without a selection the whole drawing is imported as one level.* and shows one **Level** selector for the whole drawing.

When a rectangle is drawn but not yet added, a card appears with its **Level** selector, its summary, and two buttons: **Add as {level name}** and **Clear selection**. Two messages can appear on the card:

* **Another floor already goes to this level.** — pick a different level.
* **Too many walls to import ({count}). Select one floor plan or fewer layers.** — draw a smaller rectangle or switch layers off.

If stairs were found, the card adds **Stairs were recognized and left out**; stairs are not imported.

### Drawing

* The file name.
* **Skipped elements: N. Text, dimensions, hatches and blocks are not imported.** — shown when the drawing carries other CAD elements. A high count is normal.
* **Drawing units** — **Millimeters (mm)**, **Centimeters (cm)**, **Meters (m)**, **Inches (in)**, **Feet (ft)** or **Unitless**. The importer reads the unit declared in the file and preselects it, with the note **Detected from the file**. If the file declares none, you see *The file does not declare its units. Check the scale in the preview.* If you pick a different unit than the file's, you see **Differs from the units declared in the file**. Getting this right makes the building come in at real-world size — if a model is far too large or small, the unit is almost always the cause.
* **Choose another file** — loads a different drawing.
* **Reset file** — clears the loaded file and returns to the empty state.

Warnings from the importer, such as a drawing that was flattened by a PDF conversion or had its blocks exploded, appear here too. For those, go back to the original CAD file if you have it.

### Recognition

* **Detect doors and windows** — turns gaps and door and window symbols in the walls into openings. Turn it off if the drawing produces false doors.
* **Import single lines as walls** — treats lone lines (not double-line walls) as walls. Turn it on for simple outlines.
* **Curve smoothness** — **Low (8)**, **Medium (16)** or **High (32)**: the number of straight segments used for each arc or circle. The note says *Arcs and circles become straight walls. More segments look smoother but add walls.*

The preview re-renders when you change an option, so you can tune the result before importing.

### Layers

A checkbox per CAD layer. Clear a layer — dimensions, furniture, hatches — to keep it out of recognition. Exporting only the wall layers from your CAD tool gives the best result.

## What happens when I replace a level?

If any selected level already has content, clicking **Import levels** first asks **Replace {names}?** and explains *{walls} walls, {openings} doors and windows and {other} other objects on {names} will be deleted. Devices bound to them will be unbound.* Click **Replace** to continue or **Cancel** to go back and choose a different level.

## What can I do after importing a DXF plan?

The imported walls behave exactly like walls you draw by hand. Select any of them to set height, thickness, and material, add doors and windows, and continue building. If the import isn't quite right, **Undo** (Ctrl+Z) reverses it, and you can adjust the drawing units or layers and try again.

A typical workflow: import the shell from DXF, switch to the **2D view** to confirm the layout, then draw any interior partitions the CAD file didn't include and move on to furnishing.

## What are the best tips for importing a DXF plan?

* If the building imports at the wrong size, the **Drawing units** setting is wrong — change it and import again.
* One drawing with several floor plans on it needs one rectangle per floor; give each a different **Level**.
* Clean DXF files import cleanly. If a drawing is cluttered with non-wall layers, switch those layers off.

## See also

* [Drawing your building](drawing-your-building.md) — Draw or adjust structure by hand
* [Tracing from the map](tracing-from-the-map.md) — Build from an aerial map instead
* [Floors and levels](floors-and-levels.md) — How levels are named and added
