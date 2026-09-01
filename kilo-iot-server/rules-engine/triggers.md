---
description: Define a saved condition that starts a Kilo rule immediately or after a delay for one or many devices.
---

# Triggers

A **trigger** is a saved condition that can start a rule. It tells Kilo what device data to watch, what comparison must become true, and which selected device caused the condition to be met.

A trigger is not only a timer and it is not a reusable device group. Timing and device selection are two independent parts of the same trigger:

- **Timing** decides whether Kilo starts the rule immediately or waits for the condition to remain true.
- **Devices** decide whether the condition is evaluated for one device or separately for several devices.

For example, one trigger can watch the `door_open` metric on 50 cold-store doors. It can start one shared rule as soon as any door opens, or only after that particular door has remained open for 20 minutes. Each door keeps its own state and countdown.

## When to use a trigger

Every rule's **Start Event** has two start sources:

| Required behavior | Start source | Additional setting |
|---|---|---|
| Run whenever one sensor reports | **Sensor reading** | Select one device and sensor in the Start Event. |
| Run when a condition becomes true | **Trigger condition** | Set the trigger to **Immediately**. |
| Ignore short-lived conditions | **Trigger condition** | Set the trigger to **Only if it lasts** and enter a duration. |
| Apply the same condition and response to several devices | **Trigger condition** | Select those devices inside the trigger. |
| Allow either source to run only during set hours | Keep the chosen source | Turn on **Enable Schedule** in the Start Event. |

Use **Sensor reading** when the rule needs every normalized sensor event and its `vars.value`. Use **Trigger condition** when Kilo must decide whether a saved condition has been met before the rule begins.

## How a trigger works

The trigger and the rule have separate responsibilities:

1. The trigger monitors normalized metrics and evaluates its condition.
2. Its timing and clear behavior determine when the condition becomes active and returns to normal.
3. When the trigger becomes active, it identifies the watched device and signals every deployed rule that uses that trigger.
4. The rule performs the operational response, such as raising an alarm, enriching data, or sending a command.

Saving a trigger therefore does not perform an action by itself. You must connect it to a rule, then build and deploy that rule.

## From a trigger to a running rule

A trigger is a saved **start source**, not a node that you drag onto the rule canvas. Creating the trigger and attaching it to a rule happen in two different tabs:

1. Open **Rules Engine → Triggers**, click **Add trigger**, configure the condition, timing, and devices, and click **Create trigger**.
2. Return to the **Rules** tab. The **Add Rule** button is available there, not on the Triggers tab.
3. Click **Add Rule**, or edit an existing rule that should respond to the trigger.
4. Find the **Start Event** already placed on the canvas. Select it and click the pencil beneath the node to open its properties.
5. Set **Start source** to **Trigger condition**, then choose the trigger you saved.
6. Click **Save** at the bottom of the Start Event panel. This applies the selection to the diagram.
7. Add the alarm, command, enrichment, or other nodes that define the response. Then click **Save** in the rule editor.
8. Click **Build** and deploy the resulting artifact. Only a deployed rule can respond when the trigger becomes active.

Creating a trigger does not create a rule, add a node to the canvas, or select the trigger automatically. The trigger decides **when and for which device** a rule starts; the nodes after the Start Event decide **what the rule does**.

## Create a trigger

1. Open **Rules Engine → Triggers**.
2. Click **Add trigger**.
3. Enter a **Name** that describes the situation, such as `Cold-store door left open`.
4. Under **What should start the rule?**, click **Add normalized key** and choose the metric to evaluate.
5. Choose an **Is** operator and enter the comparison **Value**.
6. Under **When should it start?**, choose **Immediately** or **Only if it lasts**.
7. Configure **Clear behavior** if returning to normal needs its own condition or delay.
8. Under **Devices**, select the device or devices whose data the trigger will use.
9. Review **How this trigger will run**, then click **Create trigger**.

<figure><img src="../../.gitbook/assets/trigger-time-window.jpg" alt="The Kilo Create trigger dialog showing a condition and its timing choice"><figcaption></figcaption></figure>

The form supports up to 10 normalized keys across the start and optional clear conditions, up to 500 selected devices, and a duration from 10 seconds to 30 days.

For the complete timing behavior, see [Trigger Timing](triggers/trigger-timing.md). For device selection, shared readings, and per-device evaluation, see [One Trigger for Multiple Devices](triggers/multiple-devices.md).

## Build the condition

For each normalized key, choose the comparison that Kilo should make:

- Numeric metrics offer **equals**, **is greater than**, and **is less than**.
- String and Boolean metrics offer **equals**.
- **Add check on ‹metric›** adds another comparison for the same metric.
- **Add normalized key** includes another metric in the condition.

Use **AND** when every check must be true and **OR** when any check may be true. A second AND/OR control combines different normalized keys. These controls combine readings for one watched device; they do not combine the states of different watched devices.

## Where triggers can be used

In the current rule editor, the Start Event is the only place where you select a saved trigger. Triggers are not available on gateways, Set Alarm, Execute Command, Enrichment, or other downstream nodes.

One saved trigger can be selected by several rules. When it becomes active, every deployed rule that uses it can run. Each individual rule still has exactly one Start Event and one start source.

<figure><img src="../../.gitbook/assets/rule-start-source.jpg" alt="The Kilo Start Event panel with Trigger condition selected as the start source"><figcaption></figcaption></figure>

A Start Event uses **Sensor reading** or **Trigger condition**, never both. **Enable Schedule** is an optional restriction on the selected source rather than another start source.

The trigger selector currently loads only its first page. If the required trigger is not listed, it cannot yet be selected from that field.

## Data available to the rule

A trigger-started rule receives information about the condition signal and the watched device:

| Variable | Value |
|---|---|
| `vars.device_name` | Name of the watched device that met the condition |
| `vars.subject_kind` | Watched resource type; currently `device` |
| `vars.subject_id` | ID of the watched device |
| `vars.sensor_id` | Sensor ID associated with the run and any alarm |
| `vars.detector_id` | ID of the trigger |
| `vars.timestamp` | Unix timestamp of the trigger signal |

`vars.value` is not available because the signal represents the trigger's condition transition rather than one normalized sensor event. Update expressions that require `vars.value` before changing an existing rule from **Sensor reading** to **Trigger condition**.

To identify the affected device in an alarm, include `vars.device_name` in its **Motivation Message**:

```cel
"Door left open: " + vars.device_name
```

The device name is not inserted automatically.

## Edit or delete a trigger

Editing a condition can restart active countdowns. Kilo displays a warning before saving a change that resets trigger state.

Deleting a trigger cannot be undone. It stops future monitoring and prevents connected rules from starting from it. Review the rules that use the trigger and any outstanding alarms before deleting it.

## Troubleshooting

| Problem | What to check |
|---|---|
| A device is missing | Confirm its incoming data is mapped to a normalized key used by the trigger. |
| A sensor cannot supply a metric | Confirm the sensor has a source mapping. If several sensors answer the same metric, select the intended sensor. |
| The trigger will not save | Check the duration and review **How this trigger will run** for a missing or ambiguously shared metric. |
| A CEL expression fails | Remove `vars.value` from a trigger-started path and use the variables listed above. |
| An alarm does not identify the device | Add `vars.device_name` to the alarm message. |

## See also

- [Creating Rules](creating-rules.md) — choose the correct Start Event source
- [Trigger Timing](triggers/trigger-timing.md) — immediate, duration, clearing, and schedules
- [One Trigger for Multiple Devices](triggers/multiple-devices.md) — participant selection and shared readings
- [CEL Reference](cel-reference.md) — write expressions for each start context
