# Dashboard Hierarchy & Management

Kilo dashboards are designed to scale with real-world environments — from single sites to multi-building and multi-floor deployments. To keep dashboards organized as your system grows, Kilo supports a **two-level hierarchy**:

**Folders → Dashboards**

This structure helps you group dashboards by site, building, department, or any other logical unit.

***

### Dashboard Hierarchy&#x20;

### Folders → Dashboards

Dashboards in Kilo can be organized into **folders**, where:

* **Folders** represent a top-level grouping (e.g., a building, facility, campus, or business unit)
* **Dashboards** live inside folders and represent specific views, layouts, or operational workflows

This structure is intentionally simple (two levels only) to ensure users can quickly navigate even large deployments.

***

### Folder Management

Folders are created from the dashboard menu using the **Settings icon** next to the **“Add dashboard”** button in the left navigation menu.

#### Creating a Folder

To create a folder:

1. Open the **Dashboards** menu (left sidebar)
2. Click the **Settings icon** next to **Add dashboard**
3. Select **Create Folder**
4. Name your folder (e.g., building name, location name, department)

<figure><img src="../../../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

1. Save

Folders act as the **top-level containers** for dashboards.

***

### Example Folder Use Cases

Folders can be used to organize dashboards in many different ways — depending on how your operation is structured. While location-based organization is common, folders can also represent **equipment categories, systems, departments, workflows, or any grouping that makes dashboards easier to navigate.**

#### Organizing by Location&#x20;

If you manage multiple buildings or sites, folders can represent each location:

* **Rockville Pike 9**
* **Main Street 108**

Each folder then contains dashboards relevant to that site (for example floor overviews, device lists, HVAC status, energy dashboards, etc.).

***

#### Organizing by Equipment Type (Factory / Industrial Use Case)

In industrial environments, it often makes more sense to group dashboards by **equipment category** rather than geography.

Example folders might include:

* **Boilers**
* **Compressors**
* **Cooling Towers**

Inside the **Boilers** folder, you could create dashboards such as:

* **Boiler Temperature Monitoring**\
  A dashboard showing temperature readings and trends for all boilers in operation.

This makes it easy for maintenance or operations teams to access dashboards by system type — especially when the same equipment exists across different areas.

***

#### Organizing by Equipment Group (Lab / Facility Use Case)

In labs and controlled environments, folders can represent equipment groups that require continuous monitoring.

Example folders might include:

* **Refrigerators**
* **Freezers**
* **Incubators**

Inside the **Refrigerators** folder, you could create dashboards such as:

* **Temperature & Humidity Overview**\
  A dashboard showing temperature and humidity readings across all monitored refrigerators.

This structure keeps monitoring dashboards grouped by purpose and makes it easier to spot anomalies quickly.

***

### Dashboard Management Within Folders

Once folders exist, dashboards can be **created, edited, deleted, and updated** within them.

To create a new dashboard:

1. In the left navigation menu, click **Add Dashboard**.
2. A configuration panel will appear.

<figure><img src="../../../.gitbook/assets/image (26).png" alt=""><figcaption></figcaption></figure>

1. Enter a **dashboard name** (for example: _“Lab Refrigerators”_).
2. Select an existing **folder** from the **Folder dropdown** to place the dashboard in.
3. Save to create the dashboard.

This allows you to build dashboards quickly while keeping them organized within your folder structure.

#### Common Dashboard Examples

Within a folder, dashboards can represent different operational needs. For example:

**Rockville Pike 9**

* **Lab Devices Overview**\
  A dashboard showing all devices located in the lab inside Rockville Pike 9.

**Main Street 108**

* **Floor 1 Overview**\
  A dashboard showing all HVAC units, temperature sensors, and airflow status for Floor 1.
* **Floor 2 Overview**\
  A dashboard showing all air conditioning units and energy consumption trends on Floor 2.

These are only examples — the same folder/dashboard logic can apply to any use case:

* Warehouses
* Retail branches
* Server rooms
* Municipal infrastructure zones
* Farms or remote sites
* Transportation hubs

***

### Reordering Dashboards & Folders

To restructure your dashboard hierarchy or change the order of dashboards, click the **Settings icon** next to **Add Dashboard** in the left navigation menu.

When the modal opens, you can **drag and drop folders and dashboards** to organize them in the order that best fits your workflow.

Users can:

* Change the order dashboards appear in
* Move dashboards between folders
* Reorder folders for faster navigation

This is especially useful as deployments grow and you want the dashboard structure to reflect real operational priorities.

***

### Widget Placement & Flexibility

Widgets can be added to **any dashboard**, regardless of where the dashboard sits in the hierarchy.

Folder placement affects **navigation**, not functionality.

This means you can build dashboards purely based on what you need to visualize or control — and organize them afterwards by building, workflow, or team.

***

## Recommended Best Practices

To keep large deployments manageable:

**Use folders for physical structure**\
(buildings, sites, regions, plants)

**Use dashboards for operational views**\
(floor overview, equipment type, alarms, energy reporting, automation controls)

**Keep dashboard names descriptive**

* “Floor 1 HVAC Overview”
* “Cold Storage Monitoring”
* “Leak Detection + Alerts”
* “Generator & Power System”

**Reorder dashboards so the most important ones appear first**\
(e.g., alarms and status pages)
