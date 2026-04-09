# Locations

Locations give your Kilo IoT Server deployment a spatial structure. By organizing devices into locations and sub-locations, you create a hierarchy that mirrors your real-world infrastructure — sites, buildings, floors, zones, or any other geographic grouping that makes sense for your operations.

This organizational layer matters as deployments scale. When you manage hundreds of devices across multiple sites, being able to filter by location, assign devices to specific zones, and see where your infrastructure is deployed makes the difference between operational clarity and data chaos. Locations also provide the foundation for spatial views on dashboards and maps (covered in the Dashboards section).

## Navigating to Locations

1. Click **Settings** in the sidebar.
2. Select **Locations** (or navigate directly to `/settings/locations`).

The page title reads **Location settings** with the subtitle "Manage your locations."

## Adding a location

1. Click **Add location** in the top-right corner of the Location settings page.
2. In the dialog that opens, enter a **Name** for the location (e.g., "Warehouse Berlin", "Building 3", "Farm North").
3. Click **Save**.

The new location appears in the location list below. If this is your first location, it replaces the empty state message ("You don't have locations yet").

**Naming convention:** Use names that are meaningful at a glance to your operations team. Include the site or function — "Cold Storage B" is more useful than "Location 2."

## Working with locations

Each location in the list shows:

- **Name** — An editable text field. Change the name directly by editing the field and clicking outside it (the change saves on blur).
- **Delete** — Click the trash icon to delete the location. A confirmation dialog will ask you to confirm.
- **Expand/collapse** — Click the chevron button to expand the location and reveal its details and sub-locations.

### Setting coordinates

When you expand a location, a **search/coordinates** input appears. Use this to set the geographic position of the location:

- Search for an address or place name.
- Or enter latitude and longitude coordinates directly.

Coordinates enable devices assigned to this location to appear correctly on maps.

### Sub-locations

Sub-locations create a hierarchy within a location — useful for organizing floors within a building, zones within a warehouse, or rooms within a facility.

**To add a sub-location:**

1. Expand the parent location by clicking the chevron.
2. Click the **+** button that appears below the sub-location list.
3. In the dialog, enter a name for the sub-location.
4. Click **Save**.

Sub-locations appear indented under their parent location. Each sub-location can be renamed or deleted independently.

### Controlling sub-location visibility

The **Show sub-locations** toggle at the top of the page controls whether sub-locations are displayed in the location list. When turned off, only top-level locations are shown — useful for getting a quick overview of your site structure without the detail of individual zones or floors.

This toggle defaults to **on**.

## Enterprise examples

| Deployment | Location structure |
|------------|-------------------|
| Multi-site warehouse network | Locations: each warehouse. Sub-locations: zones (receiving, cold storage, staging). |
| Office building portfolio | Locations: each building. Sub-locations: floors. |
| Agricultural operation | Locations: each farm or field. Sub-locations: irrigation zones, greenhouses, barns. |
| Retail chain | Locations: each store. Sub-locations: stockroom, sales floor, HVAC zone. |

## What's next

Once locations are in place, you can assign devices to specific locations through the [Device Management](../devices/device-management.md) workflow. Locations also become available as filters and grouping dimensions in dashboards and map views (covered in the Dashboards section).
