# Image Map Widget

Upload any 2D image — a floor plan, site diagram, equipment schematic, building cross-section, or any spatial representation — and pin live numeric sensor readings directly onto it. Each pin shows the current value and an icon. Pin colors change automatically as conditions trigger — for example cold zone shows blue, a compliant zone shows green, and an out-of-spec zone shows red, all on the same diagram.

You see the reading where the sensor is. A facilities manager looks at the floor plan and sees which zone is out of spec. A maintenance engineer looks at the equipment schematic and sees which component is reading outside tolerance — no device list to scan.

A single Image Map widget can hold multiple layers — one per floor, one per zone, or one per section of a facility. A floor switcher lets operators move between layers without leaving the dashboard.

**Note:** Image Map only works with numeric sensor readings — INTEGER and FLOAT types. Temperature, humidity, pressure, fill level, vibration amplitude, battery percentage, and similar numeric values can be pinned. Sensors that report text or binary values are not available in the metric selector.

## Setting up an Image Map widget

### Step 1 — Select Image Map from the widget picker

Click **Image Map** in the picker. (See [Adding Widgets](../adding-widgets.md) for how to open edit mode and reach the picker.) Unlike other widgets, **the Appearance tab opens first** — you need to upload an image before placing pins.

### Step 2 — Appearance tab: upload images and configure layers

The Appearance tab is titled **"Add image map images and layers"** with the subtitle **"Upload images for each layer (e.g., floors or sections) and name them to keep things organized."**

**Widget name** *(required)* — The title shown on the dashboard. Placeholder: **"Type widget name here"**.

**Description** — Optional subtitle.

**Layers:**

Every Image Map starts with one layer created automatically. The first layer cannot be deleted.

For each layer:
- **Layer name** *(required)* — A clear name for this view ("Ground Floor", "Zone A", "Rack Row 1"). Shows a red border if empty.
- **Upload image** — Accepted formats: **PNG or JPG**. Hint text: **"PNG or JPG format"**. After uploading, a thumbnail preview appears alongside the filename.
- **Upload new** — Replace the current image.
- **Delete image** — Remove the image from this layer.
- **Expand/collapse arrow** — Minimize a layer's settings to keep the panel tidy when working with many layers.

Click **Add new layer** to add additional floors, zones, or views.

**Zoom controls** — Plus (+) and minus (−) buttons in the bottom right of the image preview. Range: 0.5× to 3× in 0.1× steps. These controls are **only visible in edit mode** and are for precise pin placement — zoom in before dragging a pin to its exact location. The zoom level does not affect how the widget appears on the dashboard.

### Step 3 — Datasource tab: add sensors and position pins

The Datasource tab is titled **"Image map configuration"** with the subtitle **"Configure image layers and data sources."**

For each layer:

1. Click **Add datasource** under that layer. A device selection dialog opens.
2. Choose a device with numeric sensors to display on this layer.
3. After selecting a device, metric rows appear. Each row contains:
   - **Data type** — set to Telemetry
   - **Device metric** — the numeric sensor to pin (only INTEGER and FLOAT sensors are offered)
   - **Icon** — the icon displayed on the pin
   - **Conditions button** — labeled **"Conditions: N"**. Click to set color rules for this metric. See [Conditions](conditions.md).
   - **Delete** — remove this metric
4. Click **Add metric** to include more numeric sensors from the same device. The button grays out when all available numeric metrics are added.

**Positioning pins on the image:**

When you add a metric, its pin appears on the layer image. **Drag the pin to the exact physical location** of that sensor — the corner of the warehouse zone, the rack position in a server room, the equipment pad on a factory floor plan. Pin positions are saved when you save the widget.

Use the zoom controls in the Appearance tab to zoom in for precise placement.

### Step 4 — Save

Click **Save** to add the widget to the dashboard.

## What the widget shows

On the dashboard, each layer displays its image with colored circular pins at the positions you set. Each pin shows the sensor icon and the current live value with its unit.

**Pin color is driven entirely by conditions.** The first matching condition wins. If no condition matches, the pin uses the default color set in the Conditions modal. If no default is set, the platform applies a standard color.

**Floor switcher** — When the widget has two or more layers, a floor switcher appears in the bottom left of the widget. It is hidden by default and appears on hover (and remains visible in edit mode). Click a layer name to switch to that view.

Pin values update in real time as sensors report.

**Empty states:**
- **"No saved plan"** — No image uploaded for this layer
- **"No widget data"** — No sensors configured

## Same diagram, different operational contexts

**Warehouse floor with zone temperature and humidity:**
Upload a warehouse floor plan. Place temperature and humidity pins at each storage zone. Conditions for temperature: green 15–25°C "Normal", yellow 25–30°C "Warm", red above 30°C "Alert". Conditions for humidity: green 40–65% "Acceptable", red above 80% "High". Instead of opening individual device pages, a shift supervisor sees the entire warehouse status — which zones are within spec and which need attention — on a single widget.

**Factory floor with equipment monitoring:**
Upload a machine layout diagram. Pin vibration sensors to each piece of equipment. Conditions per machine can be configured independently — a high-precision milling machine has tighter vibration tolerances than a conveyor motor. The same widget covers the entire production floor. Operators see at a glance which machines are within tolerance and which are approaching maintenance thresholds.

**Multi-floor building — HVAC monitoring:**
Add one layer per floor, each with its own plan image. Pin temperature and humidity sensors at HVAC monitoring points. A facilities manager uses the floor switcher to check each floor in sequence. Conditions are set to reflect the specific requirements of each floor — server room floors have tighter temperature bands than office floors.

**Server room rack temperatures:**
Upload a data center floor plan showing rack positions. Pin temperature sensors to each rack row. Conditions: green below 24°C "Normal", yellow 24–28°C "Elevated", red above 28°C "Hot spot". Hot spots are visible immediately at the row level, enabling rapid response before equipment damage occurs.

## See also

- [Conditions](conditions.md) — Define color rules for each metric so pin colors reflect operational status
- [Adding Widgets](../adding-widgets.md) — Edit mode and widget picker
