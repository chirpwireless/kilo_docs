---
description: Learn how triggers watch device readings, detect conditions that need attention, and start Kilo rules that raise alarms or control devices.
---

# Triggers

A **trigger** watches readings from your devices and detects a condition you choose. For example, it can detect that a cold room is too warm or that a loading-bay door has been left open for ten minutes. You choose the devices, the condition to look for, and whether it should be detected immediately or only after it lasts for a set time.

When the condition is met, the trigger can start a **rule**: the steps Kilo carries out in response. For a cold room, the trigger checks the temperature and the wait; the rule might raise an alarm for the operations team. A different rule could send a command to a device that supports it.

You save the trigger and the rule separately, then connect them. You can create a trigger before any rule exists. Saving the trigger alone does not send an alert or control a device.

## What is the difference between a trigger and a rule?

The trigger detects the situation; the rule defines the response. Both belong to **Rules Engine**, in separate **Triggers** and **Rules** tabs.

| Part | What you set up |
|---|---|
| **Trigger** | The readings to watch, the condition they must meet, the timing, and when the condition returns to normal. |
| **Rule** | The response: for example, raise an alarm, check another reading, or send a device command. |
| **Start Event** | The first node in the rule's diagram. Its **Start source** selects what can start that rule. |

One trigger can start several rules. An **alarm definition** is separate: it specifies how an alarm is handled and delivered. A rule uses a **Set Alarm** step to raise it.

## When to use a trigger

Use a trigger when you want Kilo to check a condition before starting the response. Choose **Immediately** for a condition such as a detected leak, or **Only if it lasts** to ignore a brief temperature rise during loading. One trigger can apply the same condition to several devices, with a separate state and wait for each.

A rule can also start directly from a sensor. In its Start Event, choose:

| Start source | Use it when |
|---|---|
| **Sensor reading** | You want incoming readings from one sensor to start the rule, with comparisons and decisions inside that rule. No saved trigger is needed. |
| **Trigger condition** | You want a saved trigger to check the condition and timing first, for one or several devices. |

Selecting a device and sensor under **Sensor reading** does not create a trigger. A rule uses one start source at a time. With either source, the rule must be running, and its schedule and execution-rate limits still apply.

## Before you start

- Select the organization containing your devices. You need Rules Engine write access to create or edit a trigger.
- Check that the required readings are arriving and mapped. A **normalized key** is the common name Kilo uses for a reading, such as temperature, so the same condition can work across different devices. See [Metrics](../devices/metric-templates.md).
- Use the reading's actual type, unit, and values. A door might report text such as `open`, a Boolean value, or a number, depending on its mapping.
- If two sensors on one device answer the same key, resolve the ambiguity on that device's **Mapping** tab. The trigger form links to that tab; it does not offer a selector for choosing between those sensors.

You do not need an existing rule or alarm definition to save the trigger. Set up an [alarm definition](../alarm/README.md) when you add an alarm response.

## Create a trigger

This example watches a temperature reading above an illustrative limit of **8°C for ten minutes**. Use the unit and operating limit appropriate to your own equipment.

1. Open **Rules Engine → Triggers** and click **Add trigger**.
2. Enter a **Name**, such as `Cold room too warm`.
3. Under **What should start the rule?**, click **Add normalized key** and choose the temperature key used by your device.
4. Under **Is**, choose **is greater than**. Enter `8` under **Value** if the reading is in degrees Celsius and that is your chosen limit.
5. Under **When should it start?**, choose **Only if it lasts**, enter `10`, and select **minutes**. Choose **Immediately** instead when no wait is needed.
6. Leave **Clear by a separate condition** off for this first example. The trigger will return to normal when the reported temperature no longer exceeds the limit. Use [Trigger Timing](triggers/trigger-timing.md#when-the-condition-returns-to-normal) for a different recovery threshold or wait.
7. Under **Devices**, select the device to watch.
8. Review **How this trigger will run**. **Evaluated device** names the device being watched; **Uses** lists its input readings, including any shared readings. Resolve any reported problem before saving.
9. Click **Create trigger**.

The form closes and returns to the **Triggers** list. Your trigger is saved and can monitor incoming data. It has not created a rule. Continue below to configure the response.

<figure><img src="../../.gitbook/assets/trigger-time-window.jpg" alt="Kilo trigger form comparing temperature with 8 and waiting ten minutes"><figcaption>The condition and timing are configured together. Devices are selected further down the form.</figcaption></figure>

### Build a condition from several checks

Numeric readings support **equals**, **is greater than**, and **is less than**. Text and Boolean readings support **equals**. The value field follows the reading's type. A **Reported over the last … days** hint shows observed values or a range; it is not a complete list of allowed values or a recommended threshold.

**Add check on ‹key›** adds another comparison for the same reading. For example, use two checks joined by **AND** to require a temperature above `2` and below `8`. **Add normalized key** adds another kind of reading, such as whether equipment is running.

**AND** requires every check to match; **OR** requires at least one to match. There is a separate AND/OR choice between reading keys. These choices combine inputs for each watched device, not the watched devices into one collective condition. Every required key still needs a valid input. See [One Trigger for Multiple Devices](triggers/multiple-devices.md).

A trigger supports up to **10 distinct keys** across its starting and optional clear conditions, and up to **500 selected devices**, including providers of shared readings. A delayed condition can last from **10 seconds to 30 days**.

## From a trigger to a running rule

1. Open **Rules Engine → Rules**. Click **Add Rule**, or edit the rule that should respond.
2. Select the **Start Event**, the first node already on the diagram, and click the pencil beneath it.
3. Set **Start source** to **Trigger condition**, then select the trigger you saved.
4. Click **Save** in the Start Event panel.
5. Add and connect the response steps. For an alert, configure a **Set Alarm** node with an alarm definition and a message, then connect the flow to an End Event. See [Node Reference](node-reference.md#set-alarm).
6. Save the rule, then [build and deploy it](builds-artifacts-and-deployment.md). Deployment makes the saved rule available to run; confirm that it is running.

The trigger itself needs no Build or Deploy step. In the current editor, you select a saved trigger only in the Start Event, not in gateways or action nodes further along the diagram.

<figure><img src="../../.gitbook/assets/rule-start-source.jpg" alt="Kilo Start Event properties selecting a saved trigger as the rule's start source"><figcaption>Select the saved trigger in the rule's Start Event.</figcaption></figure>

## Check your setup

Use a test device and an alert-only rule before connecting commands that operate equipment.

1. Confirm that the device's mapped reading is arriving with the expected value and unit.
2. Produce a matching reading on the test device. For a delayed trigger, allow the full duration; a reported non-matching condition breaks the qualifying period.
3. Check the rule's [execution history](debugging-rules.md) and **Alarm → Inbox**. If the rule raises an alarm but no notification arrives, check the alarm's recipients and delivery settings.
4. Produce a normal reading and check the expected clearing behavior. Test a brief matching period followed by a normal reading as well.

The trigger uses received data. Silence alone does not cancel its wait. Further qualifying readings can also start the rule again while the condition remains active. [Trigger Timing](triggers/trigger-timing.md) explains both behaviors.

## Edit or delete a trigger

On **Rules Engine → Triggers**, click **Edit**, change the settings, and click **Save changes**. If Kilo displays a countdown-reset warning, review it before confirming **Save**. Affected waits must qualify again. All rules connected to this trigger use its updated condition; the trigger has no separate deployment step.

When removing a watched device, review any active alarm for that device. Removing it stops that trigger from watching it and requests clearing of its associated active trigger alarm.

To delete the trigger, click its trash icon and confirm **Delete**. Monitoring stops, pending waits end, and connected rules stop receiving its signals. The rules remain saved. Trigger deletion cannot be undone through the rules' **Trash** tab, and it does not reverse commands already sent.

Clearing an active trigger, removing a watched device, or deleting the trigger can request resolution of associated alarms through connected rules that are still running. If a rule was stopped first, check **Alarm → Inbox** and resolve remaining incidents after confirming the situation.

## Troubleshooting

| Problem | What to check |
|---|---|
| A device is missing or unavailable | Check its **Mapping** tab. At least one required key must have a sensor with an incoming source mapping. Resolve duplicate sensors for the same key there. |
| The preview reports a missing or ambiguous input | Every key needs an input. For shared readings, use one provider per shared key or supply that key on every watched device. Review [device selection](triggers/multiple-devices.md). |
| A warning appears beside a saved trigger | Its telemetry mapping has changed. Review the device's mapping, then edit the trigger and check its readings, devices, and preview before saving. |
| Saving is disabled | Complete the name, values, duration, and device selection. If the form says the condition cannot be displayed, it cannot safely edit that trigger. |
| A trigger is missing from the list or Start Event selector | Both currently load only the first page. A notice appears when more triggers exist; the selector cannot choose a trigger beyond that page. |
| The trigger is saved but nothing happens | Connect it to a deployed, running rule. Check incoming readings, the qualifying duration, the rule's schedule, and execution history. Saving a trigger alone sets up no response. |
| The response happens again | Active triggers can signal again on further readings. Account for repeated execution when configuring commands; alarm notification intervals are separate. |

## Data available to the rule

To name the affected device in an alarm's **Motivation Message**, use:

```cel
"Cold room needs attention: " + vars.device_name
```

Kilo does not add that name automatically. A trigger-started rule receives device and trigger identity information, but **no `vars.value`**. Replace expressions that require it before switching a rule from **Sensor reading** to **Trigger condition**; use enrichment when another reading is needed.

`vars.timestamp` is the activation time in whole Unix seconds. Repeated signals for the same active occurrence retain that time; it is not the time of the latest reading or each subsequent rule run. See [CEL Reference](cel-reference.md#available-after-the-start-event) for the full variable list.

## See also

- [Trigger Timing](triggers/trigger-timing.md) — waits, clearing, repeated responses, and schedules
- [One Trigger for Multiple Devices](triggers/multiple-devices.md) — device selection and shared readings
- [Creating Rules](creating-rules.md) — design and save the response
