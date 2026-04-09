# GPS Tracking

Tracker-type devices — vehicle trackers, standalone GPS units, and mobile tracker devices — report their position over time. The Kilo IoT Server captures this location history and displays it on an interactive map with route visualization, coordinate details, and signal metadata. This turns raw GPS coordinates into an auditable record of where an asset has been and when.

GPS tracking is available only for tracker device types. It is not a universal map feature for all devices. For static device location display, see [Device Maps](device-maps.md).

## Where to find GPS tracking

1. Navigate to **Devices** in the sidebar.
2. Click a tracker device to open its detail page.
3. The tracker page opens with the **Overview** tab selected by default. The map shows the device's location history for the selected time range.

### Tabs

The tracker detail page has a set of tabs that varies slightly depending on the device type and screen size:

**Desktop (all tracker types):**
- **Overview** — Map with location history and coordinates.
- **Device log** — Raw event log for the device.
- **Settings** — Device configuration and location assignment.

**Mobile (standard trackers and GPS trackers):**
- **Overview**, **Metrics**, **Device log**, **Settings**

**Mobile (mobile tracker type):**
- **Overview**, **Device log**, **Settings**

The **Metrics** tab appears on mobile for standard tracker and GPS tracker types, providing access to telemetry data that is displayed differently on the desktop layout.

## Selecting a date range

A **Date range** button appears in the tab header area. By default, it displays the text **"Date range"**. Once you select a range, it shows either:

- A quick-select label (e.g., "Today", "This week") in capitalized form, or
- The specific date range in **DD.MM.YYYY - DD.MM.YYYY** format.

Click the button to open a calendar picker. Dates that have no recorded events are disabled in the calendar, so you can quickly see which days have tracking data. Quick-select shortcuts are also available for common ranges.

## Reading the map

The Overview tab shows the tracker's location history on an interactive map. Each recorded position appears as a **point marker** on the map, connected by route lines that show the path the tracker followed.

### Marker interaction

- **Hover** over a marker to see the cursor change to a pointer, indicating it's clickable.
- **Click** a marker to select it. The map smoothly flies to the selected point and zooms in for a closer view.
- **Selected marker** — Appears at full opacity. All other markers dim to 40% opacity, making the selected point stand out clearly.
- **Tooltip** — The selected marker shows a tooltip with:
  - **Timestamp** in DD.MM.YYYY, HH:mm format.
  - **RSSI** (signal strength) — if available for this data point.
  - **Speed** — if available for this data point.

### Route visualization

Between markers, route lines trace the path the tracker followed. This lets you visually audit a delivery route, verify that a vehicle followed the expected path, or check where an asset spent the most time.

## Operational use cases

- **Fleet route auditing** — Select a date range and review the route a delivery vehicle took. Check for unexpected detours or extended stops.
- **Field asset monitoring** — Track the movement of portable equipment across job sites. Use the date range to verify an asset was at the right location on the right day.
- **Compliance verification** — For regulated logistics, the coordinate and timestamp data provides an auditable movement record.

## Related pages

- [Device Maps](device-maps.md) — Static location display for non-tracker devices.
- [Real-Time Data](../real-time-data.md) — How live position updates reach the map.
