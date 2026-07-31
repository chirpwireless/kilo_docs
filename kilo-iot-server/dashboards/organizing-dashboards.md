---
description: Organize many Kilo IoT dashboards into folders with drag-and-drop reordering — multi-site deployments stay scannable.
---

# Organizing Dashboards

As your deployment grows, so does your collection of dashboards. A handful of dashboards is easy to scan in the sidebar, but when you're managing views across multiple buildings, floors, and teams, a flat list becomes unmanageable. Folders let you group dashboards by site, purpose, or team — and drag-and-drop reordering lets you put the most critical views at the top.

## Opening the dashboard management modal

Click the **gear icon** (tooltip: **"Dashboard settings"**) next to the Dashboards section in the sidebar. The management modal opens with the title **"Dashboard settings"** and the subtitle **"Create folders and rearrange dashboards and folders with a drag-and-drop gesture"**.

If you have no dashboards yet, the modal displays **"No dashboards yet"** in the center.

## Creating a folder

At the top of the management modal, a text input lets you create a new folder:

1. Enter a folder name. The placeholder reads **"My folder"**.
2. Click **Create folder**.

If you leave the name blank and try to create, the validation message **"Folder name is required"** appears.

Folders appear in the sidebar as expandable groups. Click a folder to expand it and see the dashboards inside.

### Folder structure

The folder system supports **one level of nesting** — folders can contain dashboards, but folders cannot contain other folders. This keeps the hierarchy flat and predictable:

```
Dashboards
├── Building A           (folder)
│   ├── Temperature Overview
│   └── Cold Chain Compliance
├── Building B           (folder)
│   └── HVAC Monitoring
└── Executive Summary    (top-level dashboard)
```

## Reordering with drag-and-drop

The management modal displays all your dashboards and folders in a tree view. You can drag items to:

- **Reorder** dashboards and folders within the list.
- **Move a dashboard into a folder** by dragging it onto the folder.
- **Move a dashboard out of a folder** by dragging it to the root level.

Changes are reflected immediately in the sidebar ordering.

## Deleting a folder

To delete a folder from the management modal, click the **delete icon** (trash) next to the folder name. A confirmation dialog appears:

**"Are you sure you want to delete {folder name} folder?"**

with the warning:

**"All dashboards inside this folder will also be deleted. Once deleted, this action cannot be undone."**

Click **Yes, delete** to confirm. This removes the folder and every dashboard it contains permanently.

## Deleting a dashboard from management

Individual dashboards can also be deleted from the management modal. The confirmation reads:

**"Are you sure you want to delete {dashboard name} dashboard?"**

**"Once deleted, this action cannot be undone."**

Click **Yes, delete** to confirm.

## Closing the modal

Click **Ok** to close the management modal. All changes to folder structure and ordering are already applied.

## Naming conventions for multi-site operations

A few conventions help teams navigate large dashboard collections:

- **Name folders by location** — "Building A", "Warehouse East", "DC-Frankfurt". This maps directly to physical sites.
- **Name dashboards by function** — "Temperature Overview", "Access Monitoring", "Energy Consumption". Function-based names stay useful even as devices change.
- **Avoid generic names** — "Dashboard 1" or "Test" become impossible to identify at scale.

## Related pages

- [Creating Dashboards](creating-dashboards.md) — Create the dashboards that go into your folders.
- [Adding Widgets](adding-widgets.md) — Populate dashboards with device data.
