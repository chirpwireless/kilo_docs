---
description: Create, rename, and delete Kilo IoT Server dashboards — the named containers that hold widgets for device data, charts, and floor plans.
---

# Creating Dashboards

Every monitoring view in the Kilo IoT Server starts as a dashboard. A dashboard is a named container that holds widgets — the visual components that display device data, charts, and floor plans. Before you can add widgets, you need a dashboard to put them in.

This page covers creating new dashboards, editing their metadata, and deleting dashboards you no longer need. For folder management and drag-and-drop organization, see [Organizing Dashboards](organizing-dashboards.md).

## Where to find dashboards

Dashboards live in the **Dashboards** section of the sidebar. Click the section to expand it and see your existing dashboards. If you haven't created any yet, the sidebar shows **"No dashboards yet"** under the Dashboards heading.

Two controls appear alongside the Dashboards section when it is expanded:

- **Add dashboard** — A plus icon with the label "Add dashboard". Click it to open the creation dialog.
- **Dashboard settings** — A gear icon with the tooltip "Dashboard settings". This opens the dashboard management modal, covered in [Organizing Dashboards](organizing-dashboards.md).

When the sidebar is collapsed, only the add icon is visible.

## Creating a new dashboard

Click **Add dashboard** in the sidebar to open the dashboard creation dialog.

The dialog title reads **"Add dashboard"** with the subtitle **"Create your personalized dashboard, add the necessary widgets to meet your goals."**

### Fields

- **Icon** — Choose a visual icon for the dashboard. The default icon is a house. The selector is 80 pixels wide and sits to the left of the name field.

- **Name** *(required)* — Enter a name for the dashboard. The placeholder text reads **"My dashboard"**. If you try to save without entering a name, the validation message **"Dashboard name is required"** appears.

- **Folder** — Choose which folder to place the dashboard in. The dropdown shows **"None (top level)"** as the default option, followed by any folders you have already created. This field is only available when creating a new dashboard — it does not appear when editing an existing dashboard's metadata.

- **Description** — An optional multiline text field for notes about the dashboard's purpose. The placeholder reads **"Describe your dashboard, if needed"**.

### Saving

Click **Save** to create the dashboard. The dialog closes and the new dashboard opens automatically, ready for you to [add widgets](adding-widgets.md). Click **Cancel** to close the dialog without creating anything.

### Naming conventions for multi-site deployments

For deployments spanning multiple buildings or regions, a consistent naming scheme makes dashboards easier to find. Consider patterns like:

- `Building A — Temperature Overview`
- `Warehouse 3 — Cold Chain Compliance`
- `DC-East — Server Room Environment`

Combine folder structure with clear names so any team member can locate the right dashboard without guessing.

## Viewing a dashboard

Once created, a dashboard appears in the sidebar under its folder (or at the top level if no folder was selected). Click it to open the dashboard view.

The dashboard header shows the **dashboard name** on the left, a vertical divider, and a **Live Data** indicator on the right. The Live Data indicator is a non-interactive label that reads **"Live Data"** with an icon — it confirms that the dashboard receives real-time updates but does not have a click action (unlike the clickable Live Data button on the [overview page](../overview.md)).

To the far right of the header, an **actions menu** (three-dot icon) provides two options:

- **Edit dashboard** — Enters edit mode, where you can add, rearrange, and configure widgets.
- **Delete dashboard** — Opens a confirmation dialog (see below).

## Editing dashboard metadata

To change a dashboard's name, icon, or description after creation:

1. Open the dashboard.
2. Click the actions menu and select **Edit dashboard** to enter edit mode.
3. In edit mode, a small **pencil icon** appears to the left of the action buttons — this replaces the Live Data indicator. Click the pencil icon.
4. The edit dialog opens with the title **"Edit dashboard"**, pre-filled with the current name, icon, and description.
5. Make your changes and click **Save**.

The folder field is not available in the edit dialog. To move a dashboard between folders, use the [dashboard management modal](organizing-dashboards.md).

## Deleting a dashboard

To delete a dashboard:

1. Open the dashboard.
2. Click the actions menu and select **Delete dashboard**.
3. A confirmation dialog appears: **"Are you sure you want to delete {dashboard name} dashboard?"** with the warning **"Once deleted, this action cannot be undone."**
4. Click **Yes, delete** to confirm, or close the dialog to cancel.

Deleting a dashboard removes it and all its widgets permanently.

## Related pages

- [Adding Widgets](adding-widgets.md) — Populate your new dashboard with device data.
- [Organizing Dashboards](organizing-dashboards.md) — Create folders and reorder dashboards.
- [Overview Page](../overview.md) — The default summary view that exists before you create any dashboards.
