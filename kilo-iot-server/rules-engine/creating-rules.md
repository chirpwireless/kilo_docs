---
description: Create a new automation rule from scratch in the Kilo IoT Rules Engine — name it, design the workflow, save first.
---

# Creating Rules

This page walks through creating a new automation rule from scratch — from naming it to saving your first version.

## Prerequisites

- You have edit permissions for the Rules Engine in your organization
- Your organization has not reached its subscription rule limit

## Step by step

### 1. Open the rule creation page

From the Rules Engine page, click **Add Rule**. This opens a new rule editor at `/rules/create`, with an empty name field and a starter diagram — a **Start** event already connected to an **End** event.

<figure><img src="../../.gitbook/assets/rules-create-blank.jpg" alt="A new rule in the editor with an empty name field and a Start event connected to an End event"><figcaption></figcaption></figure>

### 2. Name your rule

The rule name field is at the top of the editor. Click it and type a descriptive name — up to 60 characters. Choose a name that tells your team what the rule monitors and why.

Good naming conventions for operations:
- "Cold storage — temperature breach" 
- "Warehouse B — humidity alert"
- "CO2 monitor — threshold escalation"

### 3. Add a description (optional)

Click the three-dot menu (⋮) next to the rule name and select **Edit description**. A dialog opens with a text area — up to 1,000 characters. Use this to explain the rule's purpose, which facility or zone it covers, or any operational context your team should know.

### 4. Build the workflow

The editor opens with a Start event and an End event already on the canvas. A complete rule needs at least:

1. A **Start Event** — the trigger that binds the rule to a device and sensor
2. One or more processing nodes (Script Tasks, Gateways, Enrichment, [Set Alarm](node-reference.md#set-alarm))
3. An **End Event** — at least one termination point

Drag nodes from the palette on the left side of the canvas. Connect them with flows (arrows) to define the execution order.

For many rules, this visual structure is the main work: Start Event, one or two decision or transformation steps, then Set Alarm or End Event. When the rule needs exact logic, specific fields accept CEL expressions — for example gateway conditions, Script Task logic, alarm motivation messages, or advanced inputs/outputs. Through CEL, even complex scenarios are possible: multi-step escalation, cross-sensor comparisons, computed derived values, and dynamic alert messages that include live readings.

For a detailed walkthrough of the canvas and available tools, see [Visual Editor](visual-editor.md). For the full list of node types and their configuration, see [Node Reference](node-reference.md).

### 5. Configure the Start Event

Click the Start Event node to open its properties panel on the right. You must configure:

- **Device** — Select the device that triggers this rule (searchable dropdown)
- **Sensor** — Select which sensor on that device to monitor (dropdown, enabled after choosing a device)

Optionally, you can:
- **Enable Schedule** — Toggle to restrict the rule to a specific time window. Choose a time range and time zone.
- **Add inputs/outputs** — Advanced CEL expressions for data transformation at the trigger level

See [Node Reference](node-reference.md) for full Start Event configuration details.

### 6. Save your rule

Click the **Save** button in the top-right corner. The rule is saved as a new version (version 1). The autosave indicator shows "Saved" when the save completes.

After saving, the editor switches from creation mode to edit mode. You now have access to the **History** tab, the **Build** button, and the full actions menu.

### 7. Build and deploy (when ready)

Saving a rule does not deploy it. To run the rule against live sensor data, you need to build and deploy it. See [Builds, Artifacts, and Deployment](builds-artifacts-and-deployment.md) for the deployment workflow.

## What happens after creation

- The rule appears in the Rules tab of the Rules Engine page
- Version 1 is recorded in the version history
- You hold an edit lock on the rule — others will see the lock icon
- Autosave is active — changes are saved periodically while you work
- The rule is **not running** until you explicitly build and deploy it

## Next steps

- [Visual Editor](visual-editor.md) — Learn the canvas tools, palette, and properties panel
- [Node Reference](node-reference.md) — See all available node types and how to configure them
- [Builds, Artifacts, and Deployment](builds-artifacts-and-deployment.md) — Build and deploy your rule to production
