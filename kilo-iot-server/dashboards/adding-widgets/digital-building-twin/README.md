# Digital Building Twin

The Digital Building Twin is a 3D model of a real facility — drawn, furnished, and wired to your sensors — that lives on a dashboard and recolors itself in real time as readings arrive. It turns a flat list of devices into a spatial picture of the building they monitor: a warehouse, an office floor, a parking lot, a server room, a production hall.

Instead of reading a temperature value in a table and mentally mapping it to "Cold Store 3, north rack," an operator looks at the model and sees the north rack glow red. Instead of scanning a list of parking sensors, a facility manager sees the lot with every occupied bay shaded and every free bay clear. The building twin is the layer that connects the sensor data you already collect to the physical space it describes.

This is a complete building editor built into the platform — no separate modeling tool, no CAD license, no plugin. You draw the structure, place objects from a catalog of more than 60 ready-made 3D models, bind any of them to a sensor, and define the colors that turn raw readings into an at-a-glance operational view.

## What you can build with it

* **A scale model of a real building** — draw walls, doors, windows, and fences across multiple floors, in a 2D plan view and a 3D view of the same scene. See [Drawing your building](drawing-your-building.md).
* **A model from existing plans** — import an architectural drawing as a DXF file instead of drawing from scratch. See [Importing a DXF plan](importing-a-dxf-plan.md).
* **A model traced from the real world** — sketch a building's outline directly on an aerial map. See [Tracing from the map](tracing-from-the-map.md).
* **A furnished, equipped space** — place desks, racks, AC units, parking spots, vehicles, and more from the object catalog. See [Placing objects](placing-objects.md) and the [Object catalog](object-catalog.md).
* **A live operational view** — bind sensors to objects and define conditional colors so the model reflects facility state as it changes. See [Binding sensors and colors](binding-sensors-and-colors.md).
* **Pinned readings in 3D space** — drop labelled value markers at exact points in the model. See [Drop-pins and live values](drop-pins-and-live-values.md).
* **A geographically anchored model** — tie the building and selected points to real GPS coordinates. See [GPS anchoring](gps-anchoring.md).

## Adding a Digital Building Twin to a dashboard

The Digital Building Twin is a dashboard widget. It appears in the widget picker as **Digital building twin**.

1. Open the dashboard you want to add it to and switch it to **edit mode**. (See [Adding Widgets](../../adding-widgets.md) for how to open edit mode and reach the widget picker.)
2. In the widget picker, click **Digital building twin**.
3. The full-screen building editor opens. This is where you draw, furnish, and wire the model — every page in this section walks through one part of that work.
4. When the model is ready, click **Save** in the top-right corner. A **Widget name** dialog appears — enter a name for the widget and click **Save** again.
5. The editor closes and the Digital Building Twin appears as a tile on the dashboard, rendering the saved model with live sensor colors.

To come back and change the model later, open the dashboard in edit mode and open the widget's settings — the same full-screen editor reopens with everything you built.

## What it looks like on the dashboard

Once saved, the widget renders on the dashboard grid like any other tile: it sits in the dashboard's folder hierarchy, follows organization-level sharing and access permissions, and resizes on the grid. The dashboard view is read-only — it shows the model with live colors and value markers, but editing happens only inside the full-screen editor.

If you saved the model in the 2D plan view, the dashboard shows the flat blueprint. If you saved it in the 3D view, the dashboard shows the three-dimensional scene. The camera angle and zoom you leave the editor with are the angle and zoom the dashboard tile opens at.

## Where to go next

* New to the editor? Start with the [Editor tour](editor-tour.md) to learn the toolbars and panels.
* Ready to build? Go straight to [Drawing your building](drawing-your-building.md).
* Already have a floor plan file? See [Importing a DXF plan](importing-a-dxf-plan.md).

## See also

* [Adding Widgets](../../adding-widgets.md) — Edit mode and the widget picker
* [Conditions](../conditions.md) — How conditional color rules work across widgets
