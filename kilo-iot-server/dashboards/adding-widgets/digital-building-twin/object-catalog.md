# Object Catalog

The editor includes a built-in catalog of more than 60 ready-made 3D objects, organized into five categories. This page is the reference inventory — what's in each category and how to think about using it. For the mechanics of dropping objects into a model, see [Placing objects](placing-objects.md).

Every object is a measured, properly-scaled 3D model, so a desk is desk-sized and a parking spot is the size of a real bay. That accuracy matters: a model built from correctly-scaled objects reads true, and an operator trusts what they see.

## Furniture

General-purpose objects for offices, interiors, and workspaces:

Sofa, Armchair, Dining Chair, Office Chair, Stool, Coffee Table, Dining Table, Office Table, Pool Table, Double Bed, Single Bed, Bunk Bed, Bookshelf, Dresser, Closet, Shelf, Trash Bin, Column, Round Carpet, Large Plant, Small Plant, Office Trash Bin, Office Wastebasket.

When you're laying out an office or workspace, **Office Table** and **Office Chair** do most of the work — place them as desks and workstations, then bind occupancy or environmental sensors to them. **Column** helps mark the structural grid of a large floor plate. None of this is prescriptive — the categories are a palette, and how you combine them is up to you.

## Kitchen

Objects for break rooms, canteens, and kitchen areas:

Stove, Fridge, Counter, Microwave.

## Bathroom

Fixtures for washrooms and facilities:

Toilet, Bathtub, Sink, Faucet, Vessel Sink, Vessel Sink with Faucet.

## Appliance

Equipment and building services — often the objects you most want to monitor:

Ceiling Lamp, Floor Lamp, Table Lamp, TV, Computer, Washer, AC Unit, Smoke Detector, Water Boiler, Gas Water Heater, Water Pump, Water Pump (Heavy Duty), Water Pump Station, Water Softener Cylinder, Water Softener Tank.

This category carries the building-services objects that map directly to operational monitoring: **AC Unit** for climate zones, **Smoke Detector** for fire-safety coverage, **Water Boiler** and **Gas Water Heater** for plant rooms, and the **Water Pump** and **Water Softener** objects for water-treatment installations. Bind a sensor to one of these and the equipment itself shows fault or status color in the model.

## Outdoor

Objects for yards, lots, perimeters, and site-level modeling:

Fir Tree, Bush, Patio Umbrella, Parking Spot, Car, AC Condenser, Rooftop AC Unit, Outdoor AC Unit, Traffic Barrier, Gate, Public Trash Bin, Public Trash Bin (Round), Wheelie Bin, Wheeled Trash Container, Waste Dumpster, Large Waste Dumpster.

If you're modelling a car park or a yard, **Parking Spot** is the object to reach for — it carries a **Spot #** label, and an occupancy sensor binds straight to it. **Traffic Barrier** and **Gate** stand in for access-control points. **AC Condenser** and **Rooftop AC Unit** represent the outdoor side of HVAC plant. The waste-container objects suit facility and waste monitoring — bind a fill-level sensor to a dumpster and the container shades as it fills.

## Wall-mounted vs floor objects

Most objects stand on the floor. Some are designed to mount on a wall — wall AC units, TVs, shelves, and wall sinks — and snap to a wall surface when you place them, facing into the room. The catalog handles this automatically; you don't choose a mount type, you just place the object and it behaves correctly. See [Placing objects](placing-objects.md) for placement detail.

## Choosing what to model

How far you take a building twin is up to you — some teams model every desk and partition, others place only what carries a sensor. What matters is that the model is *legible*: that anyone looking at it instantly knows which part of the building a colored object represents. A practical way to start:

1. Place the objects that carry sensors first — desks, racks, parking spots, AC units, pumps, the equipment you actually monitor.
2. Add structural and contextual objects — columns, a reception layout — so the space is recognizable.
3. From there, model as much or as little as serves your team. Empty floor space is perfectly fine; so is a richly detailed twin. Let the way your operators read the model guide how far you take it — and don't feel bound by these examples, the catalog is there to represent whatever your site actually contains.

## See also

* [Placing objects](placing-objects.md) — How to place, rotate, and arrange objects
* [Binding sensors and colors](binding-sensors-and-colors.md) — Turn objects into live status indicators
