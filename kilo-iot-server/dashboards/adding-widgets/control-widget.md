---
description: Operate a device straight from a Kilo IoT dashboard with the Control widget — a Switch or Button bound to a device command, with live state from a feedback sensor.
---

# Control widget

Most widgets report. The **Control widget** acts. It puts a **Switch** or **Button** on your dashboard, bound to one of a device's commands, so an operator can change the device's state with a single tap — right alongside the readings that tell them whether they need to. It is the dashboard face of [Device Commands](../../devices/commands/): the command does the work, the widget is the control surface.

Pair it with a feedback sensor and the widget also *reflects* the device's real state. A switch bound to a smart relay shows on when the relay reports on, and flips when you operate it — so the control and the live status are the same element.

## Before you add one

A Control widget needs a **controllable device** — one that already has at least one command defined on its **Commands & States** tab. If a device has no commands, it won't appear in the picker (you'll see *"No controllable devices in this organization"*). Define the command first; see [Creating Commands](../../devices/commands/creating-commands.md).

## Setting up a Control widget

Open the dashboard in edit mode and choose **Control** from the widget picker. The settings panel opens with two tabs: **Datasource** and **Appearance**.

### Step 1 — Datasource tab

Titled **"Control configuration"** (*"Configure control and data sources"*).

* Click to choose a device — the picker lists only controllable devices.
* Select the **feedback sensor** for the widget — the reading that tells the widget the device's current state (for example a relay-state or on/off metric). The first suitable sensor is selected automatically; change it if needed.

Click **Next** to continue.

### Step 2 — Appearance tab

Headed **"Add Control widget"** (*"Customize widget details."*).

* **Widget name** *(required)* — the label on the dashboard. Placeholder *"Enter widget name."*
* **Description** — optional supporting text.
* **Widget type** — choose how the control looks and behaves:
  * **Switch** — a toggle for two-state control (on/off, open/closed). Best for a state you flip back and forth.
  * **Button** — a press control for dispatching an action. Best for a one-direction command.
* **State bindings** — this is what makes the control work. You bind each state to a command:
  * **Label** — what the state is called on the widget.
  * **Command** *(required)* — which of the device's commands this state sends. (The list is empty until a device is selected; it shows the commands defined on that device.)
  * **Expected sensor value** *(required)* — what the feedback sensor reads when this state is active, so the widget knows when to show the control as "on." It is auto-filled from the command where possible — edit it if your sensor reports a different value.
  * If the command takes parameters, set each **Value** here too.

  A Switch binds an on-state and an off-state; a Button binds the action it sends.
* **Appearance options** — set the on, off, and disabled **colors** (the section is titled *Switch color* or *Button color* to match the type), toggle **Display labels** (Switch), choose a **Button size** of S, M, or L (Button), and toggle whether the widget shows its **name and last update**.

Click **Save** to place the widget.

## How it behaves

* **Tap to operate.** Operating the control dispatches the bound command through the same pipeline as the device's States tab — with the same validation, delivery, and execution history.
* **Reflects real state.** The widget reads the feedback sensor and shows the control in its on or off state accordingly, so it stays in sync with the device rather than just remembering the last tap.
* **Disabled when it can't act.** If the device is offline or the binding is incomplete, the control is shown disabled rather than sending into the void.

## See also

* [Device Commands](../../devices/commands/) — define and manage the commands this widget operates
* [Creating Commands](../../devices/commands/creating-commands.md) — set up the command to bind
* [Executing Commands](../../devices/commands/executing-commands.md) — the execution history behind every tap
