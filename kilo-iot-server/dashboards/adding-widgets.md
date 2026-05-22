# Adding Widgets

Widgets are the visual components of a dashboard. Each widget connects to one or more devices, displays metrics, and can be customized with value ranges, thresholds, and conditions that turn numbers into operational meaning. A temperature reading of 22°C is normal in an office but a compliance breach in cold storage — widgets let you encode that context so operators see green or red at a glance without looking up the raw reading.

## Entering edit mode

Widgets can only be added or modified when the dashboard is in **edit mode**.

1. Open a dashboard from the sidebar.
2. Click the **actions menu** (three dots) in the header and select **Edit dashboard**.

In edit mode, the header changes:

- The **Live Data** indicator is replaced by a small **pencil icon** for editing dashboard metadata.
- A **plus button** appears — this opens the widget picker.
- **Cancel** and **Save** buttons appear on the right.

Any changes you make in edit mode are only saved when you click **Save**. Clicking **Cancel** discards all changes and returns to view mode.

## The widget picker

Click the **plus button** in the edit mode header (or the **Add widget** button in the empty state) to open the widget picker.

The picker shows the available widget types.

| Widget | Use it when | What it shows |
|--------|------------|---------------|
| **Last data** | Operators need the current state of a machine, process, or asset | Latest value received — running/stopped, fill level, current temperature |
| **Chart** | You need to understand how a reading changed — compliance history, drift, or shift-to-shift comparison | Historical graph plus the live current reading |
| **Image** | Location context matters — which zone, floor, or component | Your own uploaded image — floor plan, machine diagram, or site layout — with live numeric readings pinned to locations |
| **Map** | The live location of something that moves matters | Current GPS position on an interactive outdoor map, plus one selected sensor value on the marker |
| **Digital building twin** | You want a 3D model of a building with sensors mapped to the objects they monitor | A built-in 3D editor that turns a facility into a live scene, recolored by sensor readings |

## Choosing a widget type

**Last data** is your default for displaying current operational state. Use it when you need to show the latest value from one or more devices in a single panel — a plain number for a quick reading, a Doughnut or Pie gauge when the value has a meaningful scale (tank fill, battery level, percentage within a range). Multiple devices can be combined into one widget.

**Chart** is for trend visibility. It shows a large current reading at the top and the historical graph below — you see where the reading is now and how it got there. Use it when operators need to spot trends, compare shifts, or watch whether a metric is drifting toward a threshold. One data source and one metric per Chart widget.

**Image** puts data in physical context. Upload a floor plan, site diagram, or equipment schematic, then pin live sensor readings to their exact locations. Use it when location matters — warehouse zone monitoring, building HVAC status by floor, server room rack temperatures.

**Map** plots where a GPS-equipped device is right now on an interactive outdoor map, with one additional metric on the marker. Vehicles, field equipment, mobile tools, shipments, livestock — anything that moves and reports its location can go on it. Date range controls let you review route history without leaving the dashboard.

**Digital building twin** is a 3D model of a facility, built and edited right on the dashboard. Draw the building, place objects from a catalog, and bind each one to a sensor — the model then recolors itself in real time, so an operator reads facility state spatially instead of from a list. See [Digital Building Twin](adding-widgets/digital-building-twin/README.md).

## Adding a widget

For all five widget types, the setup flow follows the same pattern:

1. Click the **plus button** or **Add widget** button to open the picker.
2. Select a widget type.
3. A device selection dialog opens — **"Choose a device"** / **"Select the device you want to add"**. Choose a device and click **Choose**, or click **Close** to cancel.
4. A settings panel opens with two tabs: **Datasource** and **Appearance**. (The Image widget opens Appearance first.)
5. Configure both tabs, then click **Save** to add the widget.

A **close button** (X icon) in the top right dismisses the panel without saving. The **Next** button navigates from Datasource to Appearance. Settings are not applied until you click **Save** in the panel and then **Save** in the dashboard header.

For full configuration details, see the widget-specific pages linked below.

## Editing an existing widget

To modify a widget already on the dashboard:

1. Enter edit mode.
2. Hover over the widget. A **three-dot menu** appears in the top-right corner.
3. Click the menu:
   - **Edit** — Opens the widget's settings panel with current values pre-filled.
   - **Delete** — Marks the widget for removal. The deletion is applied only when you click **Save** in the dashboard header. Clicking **Cancel** restores the widget.

The three-dot menu only appears in edit mode.

## The empty dashboard state

If a dashboard has no widgets, the center of the screen shows:

- **"You have no widgets here"**
- **"Add your first widget to build your dashboard"**
- An **Add widget** button

## Customization at a glance

Widgets are configurable, not fixed cards. Key options available across widget types:

- **Appearance settings** — Name, description, display type (Number, Doughnut, Pie, Line, Bar), and legend/axis toggles
- **Value ranges** — Min/max boundaries that set gauge scale or chart Y-axis limits
- **Thresholds** — Named bands (e.g., "Compliant", "Warning", "Breach") with colors, fills, and lines — Chart widget
- **Conditions** — Per-metric color rules based on the sensor's current value — Last data and Image widgets
- **Metric-level controls** — Data type, device metric selector, icon, and conditions per sensor

## Widget configuration guides

- [Last Data Widget](adding-widgets/last-data-widget.md) — Latest values, gauge types, value ranges, and conditions
- [Chart Widget](adding-widgets/chart-widget.md) — Time-series graphs with live current reading and threshold bands
- [Image Widget](adding-widgets/image-widget.md) — Any image — a floor plan, an equipment schematic, a site photo — with draggable live-data pins
- [Map Widget](adding-widgets/map-widget.md) — GPS tracker location with route history controls
- [Conditions](adding-widgets/conditions.md) — Per-metric color rules for Last data and Image widgets

## Related pages

- [Creating Dashboards](creating-dashboards.md) — Create the dashboard before adding widgets.
- [Organizing Dashboards](organizing-dashboards.md) — Manage folders and dashboard ordering.
- [Real-Time Data](real-time-data.md) — How live sensor data reaches your widgets.
