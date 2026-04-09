# Adding Widgets

Widgets are the visual components of a dashboard. Each widget connects to a device, displays one or more metrics, and can be customized with value ranges, thresholds, and conditions that give meaning to the numbers. A temperature reading of 22°C might be perfectly normal in an office but alarming in a cold storage unit — widgets let you encode that context so operators see green or red at a glance.

This page covers how to enter edit mode, select widget types, choose devices and metrics, and understand the customization options available. For a complete field-by-field guide to every widget type, see [Widget Reference](widget-reference.md).

## Entering edit mode

Widgets can only be added or modified when the dashboard is in **edit mode**.

1. Open a dashboard from the sidebar.
2. Click the **actions menu** (three dots) in the header and select **Edit dashboard**.

In edit mode, the header changes:

- The **Live Data** indicator is replaced by a small **pencil icon** for editing dashboard metadata.
- A **plus button** (unlabeled) appears — this opens the widget picker.
- **Cancel** and **Save** buttons appear on the right.

Any changes you make in edit mode are only saved when you click **Save**. Clicking **Cancel** discards all changes and returns to view mode.

## The widget picker

Click the **plus button** in the edit mode header (or the **Add widget** button in the empty state) to open the widget picker.

The picker shows the available widget types. Not all types may be visible — some are available only on certain plans.

| Widget type | Description | Availability |
|-------------|-------------|-------------|
| **Device data** | Display a single metric from a specific device as a live-updating card. | Available on all plans. |
| **Last data** | Show the latest values from one or more devices, with options for number, doughnut, or pie visualization. | Available on selected plans. |
| **Image map** | Upload floor plan images, organize them as layers, and pin device data onto specific locations. | Available on selected plans. |
| **Chart** | Plot metric values over time as a line or bar chart, with configurable timeframes, thresholds, and axis controls. | Available on selected plans. |

## Adding a Device data widget

The Device data widget is the most common widget type. It follows a two-step selection flow:

### Step 1: Choose a device

After selecting **Device data** from the picker, a dialog opens with the title **"Choose a device"** and the subtitle **"Select the device you want to add"**.

Browse or search for the device you want. Select it and click **Choose** to proceed, or click **Close** to go back to the dashboard.

### Step 2: Choose a metric

The next dialog shows the title **"2 / Choose one or multiply widgets"** and lists the available metrics for the selected device.

- A dropdown labeled **"Choose widget or widgets"** lets you filter or select specific metrics.
- Each metric shows a live preview of how the widget will look.
- Metrics that are already on this dashboard are marked with an **"Already added"** indicator.

Select the metric you want and click **Choose** to add the widget, or click **Back** to return to the device selection step.

If the device has no active metrics, an empty state appears: **"The device has no active metrics and is not sending events."**

## Adding Last data, Chart, or Image map widgets

For these widget types, the flow begins with a device selection dialog (**"Choose a device"** / **"Choose"** / **"Close"**), followed by a full settings panel where you configure both the data source and the appearance.

Each widget type's settings panel has two tabs — **Datasource** and **Appearance** (Image map reverses the order). Navigate between them with the **Next** button, and finalize with **Save**. A **close button** (X icon) in the top right dismisses the panel without saving.

For full details on every field in each settings panel, see [Widget Reference](widget-reference.md).

## Editing an existing widget

To modify a widget that's already on the dashboard:

1. Enter edit mode.
2. Hover over the widget. A **three-dot menu** appears in the top-right corner.
3. Click the menu to see two options:
   - **Edit** — Opens the widget's settings panel with current values pre-filled.
   - **Delete** — Marks the widget for removal. Like all edit mode changes, the deletion is only applied when you click **Save**. If you click **Cancel**, the widget is restored along with all other pre-edit state.

The three-dot menu only appears in edit mode. In view mode, widgets display data without any edit controls.

## The empty dashboard state

If a dashboard has no widgets, the center of the screen displays:

- **"You have no widgets here"**
- **"Add your first widget to build your dashboard"**
- An **Add widget** button

Clicking the button opens the widget picker, same as the plus button in the header.

## Customization at a glance

Widgets are configurable display components, not fixed cards. The key customization surfaces include:

- **Appearance settings** — Widget name, description, display type (number, doughnut, pie, line, bar), and toggles for legends, axes, and averages.
- **Value ranges** — Define min/max boundaries that control chart scales and gauge fill levels. For Last data doughnut and pie widgets, ranges are set per sensor.
- **Thresholds** — Define labeled bands (e.g., "Normal", "Warning", "Critical") with custom colors, fill, and line visibility. A chart widget might show green below 25°C, yellow between 25–30°C, and red above 30°C.
- **Conditions** — Per-metric rules that change display color based on the data value. Conditions support number ranges, string matches, and boolean values, each with its own color. The same sensor in different widgets can have completely different condition sets — 20°C might be green in a room widget but red in a cold storage widget.
- **Metric-level controls** — Each metric in a widget's data source has its own data type, device metric selector, icon, unit, and condition set.

These options are covered in detail in the [Widget Reference](widget-reference.md).

## Related pages

- [Widget Reference](widget-reference.md) — Complete field-by-field configuration for every widget type.
- [Creating Dashboards](creating-dashboards.md) — Create the dashboard before adding widgets.
- [Organizing Dashboards](organizing-dashboards.md) — Manage folders and dashboard ordering.
