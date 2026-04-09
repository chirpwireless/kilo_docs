# Device Maps

Every device in the Kilo IoT Server can be associated with a physical location. When a device has location data, its detail page displays an interactive map showing exactly where the device is deployed. This is especially valuable for multi-site operations where knowing the physical position of sensors, gateways, and equipment matters for maintenance, troubleshooting, and compliance.

## Where to find the map

The map appears on a device's detail page, on the **Overview** tab:

1. Navigate to **Devices** in the sidebar.
2. Click any device to open its detail page.
3. The **Overview** tab is selected by default. The map card appears below the device overview section.

If the device has a location assigned, the map displays its position with a marker. Above the map, a **location info** bar shows the device's place and sub-location (for example, "Building A, Floor 2").

## When no location is set

If the device has not been assigned a location, the map area shows a placeholder instead:

- The text reads **"Your device location is empty"** and **"data will be available here soon"** (displayed in centered uppercase text).
- An **"Add device location"** button appears below the text. Clicking it navigates to the device's **Settings** tab, where you can assign a location from the available places hierarchy.

The add location button is only visible if you have edit permissions for the device.

## Map features

The map view provides:

- **Interactive navigation** — Pan and zoom to explore the area around the device.
- **Fullscreen mode** — Expand the map to fill the entire screen for a closer look.
- **Responsive layout** — On mobile devices, the map adjusts its height for comfortable viewing on smaller screens.
- **Theme-aware styling** — The map adapts to your chosen theme (light or dark mode).

## Adding a device location

To assign a location to a device that doesn't have one:

1. Click **"Add device location"** on the map placeholder, or navigate to the device's **Settings** tab directly.
2. In Settings, select a location from the places hierarchy (locations are created in [Locations](../../settings/locations.md)).
3. Save the settings. The map on the Overview tab now shows the device's position.

## Tracker devices and GPS history

For devices with GPS capabilities (tracker-type devices), the same map component can display location history — showing where the device has been over a selected time period. This functionality is covered separately in [GPS Tracking](gps-tracking.md), as it involves additional controls like date range selection, route visualization, and coordinate details that are specific to tracker devices.

## Related pages

- [Locations](../../settings/locations.md) — Create the places hierarchy used for device location assignment.
- [GPS Tracking](gps-tracking.md) — Location history and route playback for tracker devices.
- [Device Management](../../devices/device-management.md) — Edit device properties including location.
