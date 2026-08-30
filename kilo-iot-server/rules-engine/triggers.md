---
description: Create one trigger that watches up to 500 devices independently, waits for a condition to hold, and starts a Kilo rule.
---

# Triggers

A trigger starts a rule when selected device data matches a condition. One trigger can watch up to **500 devices**, evaluate each device independently, and start the same rule for whichever device meets the condition.

Before triggers, a rule could be started by only one device. Applying the same response to 50 devices meant creating and maintaining 50 rules. With a trigger, you define the condition once, select the 50 devices, and connect one rule.

A trigger can start the rule immediately or wait until the condition has remained true for a set time. For example, you can ignore a cold-store door opened briefly for loading and act only if it remains open for 20 minutes.

## Before you start

Decide which devices need the same response and which metric the trigger will evaluate. A metric is a normalized reading such as `temperature`, `door_open`, or `pump_running`.

Each watched device must provide the metric used as the main condition. If a device is missing from the trigger's device list, open that device's **Mapping** tab and confirm that its incoming data is mapped to the required metric. See [Metrics](../devices/metric-templates.md).

You can create the trigger before the rule, but the trigger does not perform an action by itself. After saving it, connect it to a rule's Start Event.

## Open Triggers

Open **Rules Engine → Triggers**. This tab lists existing triggers and provides the **Add trigger** action.

<figure><img src="../../.gitbook/assets/trigger-empty-state.jpg" alt="The Triggers tab in the Rules Engine before any trigger exists"><figcaption></figcaption></figure>

## Create a trigger

Click **Add trigger** to open the **Create trigger** dialog. Complete the sections from top to bottom.

### 1. Name the trigger

Enter a **Name** that describes the situation, such as `Cold-store door left open` or `Pump running too long`. This is the name you will select later when configuring the rule.

### 2. Define what should start the rule

Under **What should start the rule?**, click **Add normalized key** and select the metric to evaluate.

For each metric, set:

- **Is** — the comparison operator. Numeric metrics offer **equals**, **is greater than**, and **is less than**. String and Boolean metrics offer **equals**.
- **Value** — the value to compare with the device reading.

Use **Add check on ‹metric›** when the same reading needs another comparison. For example, two checks can define a temperature range.

Use **Add normalized key** when the condition also depends on a different reading. By default, the trigger and optional clear condition can contain up to 10 normalized keys in total.

When a condition uses several metrics, the additional metric must be available in one of two ways:

- every watched device provides it; or
- exactly one selected device provides a shared value for all watched devices.

For example, each fire door can provide its own `door_open` reading while one building controller provides the shared `heating_on` reading. The form refuses combinations where only some watched devices provide the additional metric, preventing an incomplete condition from being saved.

### 3. Choose when the trigger starts

Under **When should it start?**, choose one timing mode:

- **Immediately** — start the rule as soon as the condition becomes true. Use this when you need device grouping without a delay.
- **Only if it lasts** — start the rule only after the condition has remained true for the duration you enter.

For **Only if it lasts**, select seconds, minutes, hours, or days. New triggers default to 10 minutes. The allowed range is 10 seconds to 30 days.

Set the duration longer than the device's reporting interval. If a device sends no new value during the wait, the countdown continues; silence does not reset it. A 10-minute duration on a device that reports every 15 minutes would still be based on only one reading.

<figure><img src="../../.gitbook/assets/trigger-time-window.jpg" alt="The Create trigger dialog with a condition and Only if it lasts set to 10 minutes"><figcaption></figcaption></figure>

### 4. Configure clear behavior

By default, the trigger clears on the first reading that no longer satisfies the starting condition.

Turn on **Clear by a separate condition** when returning to normal requires a different condition or its own delay. The clear condition has the same metric, comparison, and timing controls as the starting condition.

For example, a motion trigger can start after 10 minutes of continuous activity and clear only after the area has remained quiet for five minutes. This prevents one quiet reading from clearing the trigger too early.

### 5. Select devices

Under **Devices**, select the devices the trigger should watch. The list becomes available after you select a normalized key and includes only compatible devices.

Use **Search devices**, **Select all**, **Select all shown**, **Clear selection**, and **Load more devices** to manage a large selection. A trigger requires at least one device and accepts up to 500. The limit includes watched devices and any device supplying a shared reading.

If an expected device is missing, open its **Mapping** tab and map its incoming data to the metric used by the trigger.

### 6. Review and save

**How this trigger will run** shows one row for every independently evaluated device. Review the **Check**, **Evaluated device**, and **Uses** columns before saving.

<figure><img src="../../.gitbook/assets/trigger-device-group.jpg" alt="The device picker and the How this trigger will run table, one row per selected device"><figcaption></figcaption></figure>

Click **Create trigger**. The trigger now watches the selected devices, but it will not perform an action until a rule uses it.

## Start a rule from the trigger

1. Open the rule that should respond to the trigger.
2. Select the **Start Event** node.
3. Click the pencil beneath the node to open its properties.
4. Set **Start source** to **Trigger condition**.
5. Select the trigger under **Trigger condition**.
6. Save, build, and deploy the rule as usual.

Set **Start source** to **Sensor reading** when a rule should continue to start directly from one device and sensor. A Start Event uses one source or the other, not both.

<figure><img src="../../.gitbook/assets/rule-start-source.jpg" alt="The Start Event panel with Start source set to Trigger condition and a trigger selected"><figcaption></figcaption></figure>

The selector currently shows only the first page of triggers. If the trigger you need is not listed, it cannot yet be selected from this field.

## Use trigger variables in the rule

A trigger-started rule provides these variables:

| Variable | Value |
|---|---|
| `vars.device_name` | Name of the device whose condition started the rule |
| `vars.sensor_id` | Sensor that supplied the reading |
| `vars.timestamp` | Time the condition was met |

`vars.value` is not available to a trigger-started rule. A trigger reports that a condition held; it does not pass one reading as the event value. Update any existing CEL expression that expects `vars.value` before changing its Start Event to a trigger.

To identify the affected device in an alarm, include `vars.device_name` in the alarm's **Motivation Message**:

```
"Door left open: " + vars.device_name
```

The device name is not added automatically.

## Combine a trigger with a schedule

**Enable Schedule** on the Start Event also applies to trigger-started rules. The trigger watches and counts continuously; the schedule is checked when the trigger finishes its countdown and starts the rule.

For a schedule of 22:00–06:00 and a 10-minute trigger:

- a condition that begins at 21:55 and completes at 22:05 can start the rule;
- a condition that completes at 06:05 cannot start the rule.

A trigger blocked by the schedule is recorded in the rule's execution history as skipped by schedule.

## Edit or delete a trigger

Editing a trigger's condition can restart active countdowns. Kilo warns you before saving a change that resets the current trigger state.

Deleting a trigger cannot be undone. It stops monitoring, clears alarms raised by that trigger, and prevents connected rules from starting. Check which rules use the trigger before deleting it.

## Troubleshooting

| Problem | What to check |
|---|---|
| A device is missing from the selection | Confirm its data is mapped to the normalized key on the device's **Mapping** tab. |
| The trigger will not save | Confirm the duration is between 10 seconds and 30 days and review any problem shown under **How this trigger will run**. |
| The rule starts but an expression fails | Remove uses of `vars.value`; use the trigger variables listed above. |
| The alarm does not identify the device | Add `vars.device_name` to the alarm's **Motivation Message**. |
| A condition reset after editing | Changes to the condition can restart countdowns; the confirmation dialog warns before this occurs. |

## See also

- [Creating Rules](creating-rules.md) — build the rule that a trigger starts
- [Node Reference](node-reference.md) — configure the Start Event and other nodes
- [CEL Reference](cel-reference.md) — use trigger variables in expressions
- [Alarm](../alarm/README.md) — configure the alarm raised by a rule
