---
description: Make a Kilo rule act on its own — the Execute Command node sends a device command when conditions are met.
---

# Running Device Commands

This is the change that turns the Rules Engine from a system that *watches* into a system that *acts*. Until now, when a rule detected a problem, the most it could do was raise an alarm and put a human in the loop — someone had to read the alert and go flip the switch. The **Execute Command** node closes that gap. A rule can now send a command straight to a device the moment its conditions are met, with no person in between.

Consider what that means in practice. A leak sensor trips in a plant room. Before, the rule fired an alarm and an operator scrambled to shut the main valve — minutes of water damage either way. Now the same rule shuts the valve itself in the same evaluation that detected the leak, and *then* raises the alarm so the team knows it happened. Cold storage drifts out of range, and the rule pushes a lower setpoint to the controller before the product is at risk. A tank hits a high-level mark, and the rule closes the inlet. This is closed-loop automation: sense, decide, and act, end to end, in one rule.

The action runs on the same [Device Commands](../devices/commands/) engine you use by hand — the rule simply dispatches a command you have already defined on the device. So everything that makes manual commands safe (typed parameters, optional verification, a full execution record) applies automatically when a rule fires one.

## Before you start

The Execute Command node sends one of a device's **existing** commands. It does not define new ones. So before a rule can act on a device:

1. **The device must be controllable** — connected over MQTT, or a Class C LoRaWAN device (Class C devices listen continuously, so they can receive a downlink at any time).
2. **The device must have at least one command defined** — set this up first on the device's **Commands & States** tab. See [Creating Commands](../devices/commands/creating-commands.md).
3. **You have access to manage the rule and the device's commands** — both are governed by your organization's access policy.

If a device has no commands yet, it will not offer anything to run — define the command first, then come back to the rule.

## Adding an Execute Command node

1. Open the rule in the [Visual Editor](visual-editor.md) and switch to **Editing** mode.
2. Drag **Execute Command** from the palette onto the canvas. It sits in the same group as Set Alarm and Enrichment — it is an action the rule performs when execution reaches it.
3. Connect it into your flow. Typically it follows an Exclusive Gateway branch — the rule evaluates a condition, and the branch that means "act now" leads into the Execute Command node.
4. Click the node to open its properties panel and fill in the fields below.
5. Click **Save**, then **Build** and deploy the rule as usual. The command only fires once the rule is built and running.

## Properties panel

| Field | Description |
|---|---|
| **Name** | A label for the node on the canvas. If you leave it blank and pick a command, it fills in with the command's name. Example: "Shut intake valve". |
| **Device** | A searchable dropdown of the devices in your organization. Choose the device the command should be sent to. |
| **Command** | A dropdown of that device's defined commands. Disabled until a device is selected, then it lists every command available on the chosen device. |
| **Parameters** | Appears once a command is chosen, with one row per parameter the command expects (a brightness level, a setpoint, an open/close flag). Each parameter is supplied as either a literal **Value** or a **CEL Expression** — see below. |
| **Inputs / Outputs** | Optional. Named CEL expressions for advanced data shaping, the same pattern used on other nodes. Use Inputs to prepare helper values and Outputs to publish results for downstream nodes. |

**Save / Cancel** are at the bottom of the panel.

### Setting command parameters: Value or Expression

Each parameter the command defines gets its own row, and for each you choose how the value is supplied:

* **Value** — a fixed literal you type in. Use this when the rule should always send the same value: a setpoint of `4`, a state of `off`, a duty cycle of `100`. The field is validated against the command's parameter definition, so an out-of-range or wrong-type value is flagged before you can save.
* **Expression** — a [CEL](cel-reference.md) expression evaluated when the rule runs. This is what makes the action *dynamic*: the rule's live context is available through `vars`, so a command parameter can be computed from the very reading that triggered the rule. For example, set a fan speed from the measured temperature, or pass the sensor's value straight through with `vars.value`.

The combination is powerful: an Exclusive Gateway decides *whether* to act, and a CEL expression on the Execute Command node decides *what value to send* — so one rule can both react to a threshold and respond proportionally to how far past it the reading is.

## What happens when the node executes

1. The rule reaches the Execute Command node along its flow.
2. Each parameter is resolved — literals as-is, expressions evaluated against the current `vars`.
3. The command is dispatched to the device as a downlink, over MQTT or LoRaWAN, exactly as if it had been run by hand from the device's **States** tab.
4. The dispatch is recorded in the device's execution history with its outcome (Pending, Confirmed, Delivered, Soft warning, or Failed), so there is a complete audit of every action a rule has taken.

Because the command flows through the standard Device Commands path, any verification configured on that command applies here too — the rule can confirm the device actually acted, not just that the downlink was sent. See [Confirming Commands](../devices/commands/verification.md).

## Acting *and* alerting in one rule

Acting on a device does not replace alerting — the two work best together. A single rule can shut the valve **and** raise an alarm, so the situation is contained automatically *and* the right people are told. A common shape:

| Step | Node | What it does |
|---|---|---|
| Detect | Start Event → Exclusive Gateway | Bind to the leak sensor; branch when a leak is detected |
| Act | Execute Command | Send "close valve" to the shutoff valve |
| Notify | Set Alarm | Raise a Critical alarm so the team knows the valve was closed and why |

If the action itself might fail — the device is briefly offline, for instance — attach a [Boundary Error Event](node-reference.md#boundary-error-event) to the Execute Command node and route the error path to a Set Alarm, so a command that does not go through still reaches a human.

## A worked example

A cold-chain rule protects a pharmaceutical freezer. The Start Event binds to the freezer's temperature probe. An Exclusive Gateway routes any reading above −15 °C down a "drifting warm" branch. On that branch:

1. An **Execute Command** node sends a `set_setpoint` command to the freezer's controller, with the setpoint parameter set as an **Expression** that steps the target down based on how far the reading has drifted — colder correction for a bigger excursion.
2. A **Set Alarm** node raises a High-severity alarm with a motivation message that includes the live temperature, so the on-call engineer is informed even though the rule has already begun correcting the problem.

The product is protected in the moment the drift is detected, and the team still gets the full picture. That is the difference between a platform that tells you something went wrong and one that does something about it.

## Related pages

* [Device Commands](../devices/commands/) — define the commands a rule can run, and run them by hand
* [Node Reference](node-reference.md) — every node type, including Execute Command, in detail
* [CEL Reference](cel-reference.md) — the expression language for dynamic parameter values
* [Control widget](../dashboards/adding-widgets/control-widget.md) — operate the same commands from a dashboard
