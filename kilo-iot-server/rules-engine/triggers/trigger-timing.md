---
description: Choose immediate or sustained trigger timing and control when a Kilo condition clears or starts a scheduled rule.
---

# Trigger Timing

Trigger timing answers one question: **how long must the condition be true before Kilo starts the connected rule?** It does not determine which devices are watched; device selection is configured separately in the same trigger.

## Choose a timing mode

Under **When should it start?**, choose:

- **Immediately** — activate the trigger as soon as its condition becomes true.
- **Only if it lasts** — start a countdown when the condition becomes true and activate the trigger after it has remained true for the specified duration.

Use **Immediately** for urgent conditions such as a water leak. Use **Only if it lasts** when short changes are expected, such as a cold-store door opening during loading.

<figure><img src="../../../.gitbook/assets/trigger-time-window.jpg" alt="A Kilo trigger set to Only if it lasts for 10 minutes"><figcaption></figcaption></figure>

## Configure Only if it lasts

1. Select **Only if it lasts**.
2. Enter a whole-number duration.
3. Select **seconds**, **minutes**, **hours**, or **days**.

The minimum is 10 seconds, the maximum is 30 days, and a new duration trigger begins at 10 minutes.

Set the duration with the reporting interval in mind. A gap with no new sensor report does not reset a running countdown. If a sensor reports every 15 minutes, a 10-minute duration may still rely on its last known reading rather than a second confirming report.

## Understand clearing

By default, the trigger clears when a new evaluation no longer satisfies the starting condition. Clearing returns that watched device to its normal state so a later occurrence can activate the trigger again.

Turn on **Clear by a separate condition** when recovery needs different logic. The clear condition has its own comparisons and can be:

- immediate; or
- delayed with **Only if it lasts**.

For example, start an overheating trigger after a temperature remains above 80°C for five minutes, but clear it only after the temperature remains below 70°C for 15 minutes. The separate threshold and delay prevent a single borderline reading from ending the incident.

Each watched device has its own start and clear state. One device clearing does not reset another device's countdown.

## Combine timing with a rule schedule

Trigger duration and the Start Event's **Enable Schedule** setting solve different problems:

- Trigger timing decides when the condition becomes active.
- The rule schedule decides whether the rule may run at that time.

The trigger continues monitoring outside the rule's schedule. When the trigger signals the rule, the rule checks its schedule and records an out-of-window attempt as skipped.

For a rule scheduled from 22:00 to 06:00 with a 10-minute trigger:

- a condition beginning at 21:55 and completing at 22:05 may run the rule;
- a condition completing at 06:05 is outside the schedule and is skipped.

## Operational examples

### Apartment-complex garage theft

An apartment operator needs to detect sustained activity in a garage where thieves have previously removed wheels from parked vehicles. Residents also enter the garage at night, so an alarm on every motion event would create frequent false alarms.

Configure the trigger and rule together:

- Trigger condition: the garage motion metric indicates movement.
- Trigger timing: **Only if it lasts — 10 minutes**.
- Rule schedule: **22:00–06:00** in the building's local time zone.
- Rule action: raise an alarm for the overnight response team.

A resident walking to a car and leaving after a few minutes does not complete the trigger duration. Movement that remains present for 10 minutes during the scheduled night hours starts the rule and raises the alarm. The duration reduces short-lived false alarms; the schedule prevents the same rule from treating normal daytime garage activity as an overnight incident.

### Freezer door left open overnight

For a supermarket or residential complex with shared cold storage, use `door_open = true`, **Only if it lasts — 10 minutes**, and the site's overnight schedule. A brief stock check is ignored. If the door stays open, the rule can raise a high-priority alarm before the temperature climbs far enough to damage stock.

### Loading-bay activity after closing

Set a loading-bay motion condition to last five minutes and restrict the rule to non-operating hours. A cleaner or employee passing through does not complete the duration, while sustained activity after closing starts the security response.

### Equipment condition without a schedule

Not every duration trigger needs a schedule. A vibration reading above the operating limit for two minutes can stop a machine or raise an alarm at any hour. Here the duration filters a brief spike, while the rule remains enabled around the clock.

## See also

- [Triggers](../triggers.md) — create and connect a trigger
- [One Trigger for Multiple Devices](multiple-devices.md) — independent device states and shared readings
- [Node Reference](../node-reference.md) — Start Event schedule fields
