---
description: Design automation rules on the Kilo IoT visual BPMN canvas — drag nodes, draw flows, configure each step in panel.
---

# Visual Editor

The visual editor is where you design automation workflows. It presents a BPMN 2.0 canvas where you place nodes, connect them with flows, and configure each step through a properties panel.

This is a visual-first editor, not a drag-and-drop-only rule builder. Most work happens through node placement and form fields, while CEL is used in focused expression fields where the rule needs precise logic.

## Getting there

The editor opens when you:
- Click **Add Rule** to create a new rule (at `/rules/create`)
- Click **Edit** on a rule from the Rules list (at `/rules/:id/edit/editor`)
- Switch the mode selector from **Viewing** to **Editing** while viewing a rule

## Editor layout

The editor has four main areas:

1. **Toolbar / Palette** — On the left. Contains draggable node types and canvas tools.
2. **Canvas** — The central area. Your BPMN diagram lives here.
3. **Properties panel** — On the right. Opens when you select a node, showing its configuration fields.
4. **Header bar** — At the top. Shows the rule name, mode selector, autosave status, and action buttons.

## Palette

The palette provides tools and draggable elements you can place on the canvas.

### Tools

| Tool | What it does |
|---|---|
| **Hand Tool** | Pan the canvas without selecting anything |
| **Lasso Tool** | Draw a selection box around multiple elements |
| **Space Tool** | Create or remove space between elements |
| **Global Connect Tool** | Draw a connection (flow) between two nodes |

### Draggable elements

| Element | Description |
|---|---|
| **Start Event** | Entry point of the rule — bound to a device and sensor |
| **End Event** | Terminates a flow path |
| **Exclusive Gateway** | Decision point — routes to one branch based on conditions |
| **Script Task** | Evaluates a CEL expression to transform or classify data |
| **Set Alarm** | Triggers an alarm definition with a dynamic message |
| **Enrichment** | Fetches the latest reading from another sensor |
| **Boundary Error Event** | Attaches to a task to catch errors and route to a fallback path |

Drag an element from the palette onto the canvas to add it. Each element type and its full configuration are documented in [Node Reference](node-reference.md).

## Working with the canvas

### Adding nodes

Drag elements from the palette onto the canvas. Position them in the order you want the rule to execute.

### Connecting nodes

Use the **Global Connect Tool** from the palette, or hover over a node until connection handles appear, then drag from one node to another. This creates a **sequence flow** — an arrow showing the execution order.

Rules for connections:
- Start Events and task nodes can have one outgoing flow
- Exclusive Gateways can have multiple outgoing flows (one per branch)
- Every flow from a Gateway (except the default) must have a condition expression
- End Events have no outgoing flows

### Selecting and configuring nodes

Click a node to select it. The properties panel opens on the right, showing fields specific to that node type. Configure the node, then click **Save** at the bottom of the properties panel to apply your changes.

### Deleting nodes

Select a node and press the Delete key, or use the context menu to remove it. Deleting a gateway flow requires confirmation since it also removes the corresponding canvas connection.

## Properties panel

Each node type has its own properties panel with specific fields. When you click a node, the panel opens on the right side of the editor.

Common fields across most node types:
- **Name** — A descriptive label for the node

Many node types also expose CEL-based **Inputs** and **Outputs** sections for advanced data shaping. Node-specific fields are covered in detail in [Node Reference](node-reference.md).

After editing properties, click **Save** at the bottom of the panel to apply changes. Click **Cancel** to discard.

## Header bar

### Rule name

Click the rule name at the top to rename it inline (max 60 characters). The name is saved when you click away or press Enter.

### Mode selector

A dropdown that shows the current mode:
- **Editing** — Full access to the canvas and properties. Acquires an edit lock.
- **Viewing** — Read-only view of the diagram. No lock acquired.

Switching from Viewing to Editing acquires the edit lock (if available). Switching from Editing to Viewing navigates to the read-only route. If you have unsaved diagram changes, the platform asks you to confirm unlocking the rule and, in normal exit flows, attempts to persist the latest diagram state before releasing the lock.

### Autosave indicator

Shows the current save state:
- **Saving...** — A save is in progress (with spinner)
- **Saved** — The latest changes have been saved
- **Autosave Failed** — The automatic save failed. A dialog offers to retry or go back.

### Actions menu

The three-dot menu (⋮) provides:
- **Rename** — Opens the inline name editor
- **Edit description** — Opens a dialog to edit the rule description (max 1,000 characters)
- **Duplicate rule** — Creates a copy of the rule

### Action buttons

- **Save** — Manually save the current state. Creates a new version. Disabled when there are no unsaved changes.
- **Build** — Opens the build sidebar to validate and create a build artifact. See [Builds, Artifacts, and Deployment](builds-artifacts-and-deployment.md).

### Tabs

When editing an existing rule, two tabs appear below the header:
- **Editor** — The BPMN canvas (default)
- **History** — The version history table. See [Version History and Restore](version-history-and-restore.md).

These tabs are shown only while you are editing an existing saved rule. They do not appear in Viewing mode or while creating a brand-new unsaved rule.
