---
description: Dispatch device commands from the States tab in Kilo IoT Server and track each to confirmed, soft-warning, or failed.
---

# Executing Commands

Once a device has commands defined, the **States** sub-tab of the **Commands & States** tab is where you operate it. It shows what you can run, lets you dispatch a command with its parameters, and records the outcome of everything you've sent.

## Available commands

The **Available commands** table lists every command defined on the device:

| Column | Shows |
| --- | --- |
| **Name** | The command's action-oriented name |
| **Description** | What it does |
| **Parameters** | How many typed inputs it takes |
| **Verification** | How the platform confirms the result |
| **Execute** | The action that dispatches the command |

If the table is empty, the device has no commands yet — open the **Commands** sub-tab and define one (see [Creating Commands](creating-commands.md)).

## Executing a command

Click **Execute** on a command to open the **Execute command** dialog.

* If the command has no parameters, the dialog simply confirms there is nothing to set — press **Execute** to send it.
* If it takes parameters, fill in each **Value**. Numeric inputs show their allowed range (for example `Min: 0 - Max: 100`), and the dialog enforces the limits defined on the command, so you can't dispatch a value the device would reject.
* Click **Execute** to dispatch, or **Cancel** to back out.

The command is sent to the device and the platform begins tracking it according to the command's verification strategy.

## When a device is offline

If the device hasn't been heard from within its expected window, a banner appears at the top of the States tab indicating the device is offline, along with when it was last seen. Commands can't be executed against an offline device interactively — but queued commands are sent automatically when the device reconnects, so control intent is never silently lost.

## Recent executions

Every dispatch is logged in the **Recent executions** table, giving you a running history of control activity on the device:

| Column | Shows |
| --- | --- |
| **Command** | Which command was run |
| **Started** | When it was dispatched |
| **Updated** | When its status last changed |
| **Status** | The lifecycle outcome (below) |
| **Details** | A plain-language note on the result |

### Execution status

The platform collapses the full delivery lifecycle into four clear outcomes:

* **Pending** — In flight. The command has been dispatched and is moving through delivery and (if configured) verification.
* **Confirmed** — Success. The command was delivered and, where verification is configured, the device's reported state matched what was expected.
* **Soft warning** — Delivered and acknowledged, but the platform could not confirm the effect within the convergence window. Treat this as "couldn't verify," not "definitely failed" — worth a look, but the command may well have worked.
* **Failed** — The command did not go through. The **Details** column explains why — for example a validation failure or a full device downlink queue.

The **Details** text gives the human-readable reason behind each status, so triaging a problematic command rarely requires leaving the page.

## Operating commands from a dashboard

For day-to-day control, you don't have to open the device detail page at all. Add a [Control widget](../../dashboards/adding-widgets/control-widget.md) to a dashboard, bind it to a controllable device's command, and anyone with access to that dashboard can operate the device with a single Switch or Button — backed by the same execution pipeline and history described here.

## Related

* [Creating Commands](creating-commands.md) — define the actions a device can perform
* [Confirming Commands](verification.md) — set how the platform verifies a result
* [Control widget](../../dashboards/adding-widgets/control-widget.md) — put a command on a dashboard
