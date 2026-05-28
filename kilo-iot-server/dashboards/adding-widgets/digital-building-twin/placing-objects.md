---
description: Place 3D objects — desks, racks, parking bays, AC units — into a Digital Building Twin from the object catalog.
---

# Placing Objects

Walls make a building; objects make it *the* building. A row of desks turns an empty floor plate into an open-plan office. A parking spot turns an outdoor slab into a bay you can monitor. The objects you place are also what most sensors bind to — a sensor reads "occupied," and the desk it's bound to changes color.

The editor ships with a catalog of more than 60 ready-made 3D objects. This page covers placing them; the full inventory is in the [Object catalog](object-catalog.md).

## Opening the catalog

1. On the bottom toolbar, click **Furnish**.
2. A row of five category tabs appears — **Furniture**, **Appliance**, **Kitchen**, **Bathroom**, **Outdoor** — above a scrollable strip of object thumbnails.
3. Click a category tab to load its objects into the strip. Scroll the strip to browse them.

## Placing an object

1. With **Furnish** open, click an object's thumbnail in the strip to select it.
2. Move the cursor into the scene — a preview outline of the object follows it.
3. Click where you want the object to go. The object is placed.
4. The tool stays armed, so you can keep clicking to place more copies of the same object. Pick a different thumbnail to switch objects.
5. Press **Escape** or right-click to stop placing.

Objects snap to a fine grid as you place them, so a row of desks or a line of parking spots lands evenly spaced without fiddling.

### Rotating while you place

For objects that sit on the floor, press **R** or **T** while placing to rotate the preview by 45° before you click. This lets you face a desk, angle a vehicle, or orient a rack the right way as you drop it in.

### Wall-mounted objects

Some objects belong on a wall rather than the floor — wall-mounted AC units, TVs, shelves, wall sinks. When you place one of these, it attaches to the wall surface your cursor is over and orients itself to face into the room. Slide the cursor up or down the wall to set its mounting height.

## Adjusting an object after placing

Switch to **Select** and click an object to open its properties panel:

* **Name** — rename the object so it's easy to find in the Scene panel and when binding sensors.
* **Position** — X, Y (height), and Z, each adjustable precisely.
* **Rotation** — set the Y angle directly, or use the **+45°** / **-45°** buttons.
* **Scale** — a single uniform scale, useful when a catalog object needs to be a little larger or smaller than its default size.
* **Dimensions** — the object's measured size, shown for reference.

The selected object also gets an inline badge floating above it with quick **Move**, **Duplicate**, and **Delete** buttons. **Duplicate** is the fast way to lay out repeated objects — place one desk exactly how you want it, then duplicate it down the row.

## Parking spots

The **Parking Spot** object (in the **Outdoor** category) has one extra property: a **Spot #** field. Give each bay its real designation — "A12," "L2-44" — and that number shows on the spot in the model. When you duplicate a numbered parking spot, the number increments automatically, so you can lay out a whole row of correctly-numbered bays in seconds. Parking spots and occupancy sensors work well together — see [Binding sensors and colors](binding-sensors-and-colors.md).

## Tips

* Place the objects that will carry sensors first — the desks, racks, bays, and equipment you actually monitor — then add decorative objects if you want the model to read more naturally.
* Use **Duplicate** plus the grid snap to lay out repeated objects fast.
* Rename objects as you place them. "Rack B7" is far easier to bind a sensor to than "Office Table 23."
* You don't need to furnish every corner. Place what matters operationally; the model's job is clarity, not interior decoration.

## See also

* [Object catalog](object-catalog.md) — Every object, by category
* [Binding sensors and colors](binding-sensors-and-colors.md) — Wire objects to live readings
* [Drawing your building](drawing-your-building.md) — Build the structure objects sit in
