---
description: Set immediate or delayed trigger conditions, understand interrupted waits and clearing, and combine Kilo triggers with rule schedules.
---

# Trigger Timing

A trigger watches device readings for a condition. Its timing determines whether that condition needs a response immediately or must last for a while first. For example, a cold-room door may open briefly during loading; a ten-minute wait lets you respond when it is left open instead.

When the condition qualifies, the trigger becomes **active** for that device and can start a connected rule. When it returns to normal, the trigger **clears**. Device selection is separate from timing, and each watched device keeps its own state and wait. See [Triggers](../triggers.md) to create one and connect its response.

## Choose a timing mode

Open the trigger and find **When should it start?**:

- **Immediately** activates the trigger when the reported data satisfies the condition, with no configured waiting period.
- **Only if it lasts** requires the condition to qualify for the duration you enter. A reported false condition breaks that qualifying period; it is not enough for the condition to be true only at the end.

For a delayed condition, enter a whole number and select **seconds**, **minutes**, **hours**, or **days**. The supported range is **10 seconds to 30 days**. The initial duration is **10 minutes**.

<figure><img src="../../../.gitbook/assets/trigger-time-window.jpg" alt="Kilo temperature trigger with Only if it lasts set to ten minutes"><figcaption>Choose whether the condition should act immediately or qualify for a duration.</figcaption></figure>

## What happens if the condition changes during the wait?

Consider a trigger for a temperature above a chosen limit, with a ten-minute duration. This illustrative timeline uses the times of the reported readings:

| Time | Reading | Result |
|---|---|---|
| 10:00 | Above the limit | A qualifying period begins. |
| 10:04 | At or below the limit | That period is interrupted. |
| 10:07 | Above the limit again | A new qualifying period begins. |
| 10:10 | Still above the limit | The original deadline does not qualify: only three minutes have passed since 10:07. |
| 10:17 | No reported false condition since 10:07 | The new ten-minute period can qualify and signal the rule. |

A threshold crossing followed by a recovery report before the duration finishes does not qualify. If the condition becomes true again, the required duration runs from that later return to true.

## Missing reports do not cancel the wait

Kilo evaluates the data it receives. A gap without a new report does not reset a qualifying period or prove that the condition returned to normal. If a sensor reports every 15 minutes, a ten-minute wait may qualify using its last known value before another report arrives.

Choose the duration with the reporting interval in mind. Door and motion examples require the sensor to report both states: open and closed, or motion and no motion. A sensor that reports only a motion pulse cannot establish that movement stopped simply by going quiet. Unknown or unreadable data is not the same as a reported false condition.

## When the condition returns to normal

By default, a trigger clears when a new evaluation shows that its starting condition is false. For a simple `temperature > 8` condition, a reading of `8` or lower clears it. Clearing applies to that watched device, allowing a later occurrence to activate again.

To use different recovery logic:

1. Open **Clear behavior** and turn on **Clear by a separate condition**.
2. Add the recovery reading and comparison.
3. Choose **Immediately** for clearing without an added wait, or **Only if it lasts** and enter a recovery duration.
4. Check the devices and run preview, then save the trigger. Keys used only for clearing also need input readings.

For example, an equipment trigger could activate after a temperature exceeds **80°C for five minutes**, then clear only after it stays **below 70°C for 15 minutes**. These are illustrative limits. A reading of 75°C after activation does not clear it: the separate recovery condition has not been met. A recovery reading followed by a reported false recovery condition interrupts the recovery wait too.

Clearing can request resolution of associated trigger alarms through connected rules that are still running. If a rule was stopped first, inspect **Alarm → Inbox** for incidents requiring manual resolution. Clearing does not run a reverse device command.

## Can an active trigger run a rule again?

Yes. Further readings can signal the same active occurrence again. Connected rules may run again, subject to execution-rate limits and their schedules. A device command in the rule may therefore be sent more than once.

This is separate from alarm notification intervals, which belong to the alarm definition. Trigger duration controls how long a condition must qualify; it is not an interval between rule executions or notifications.

For expressions, `vars.timestamp` retains the original activation time on repeated signals for the same occurrence. Use rule execution history to see when a particular run happened.

## Combine timing with a rule schedule

The trigger monitors the condition. The Start Event's **Enable Schedule** limits when the connected rule may respond.

1. Open the rule's Start Event properties.
2. Turn on **Enable Schedule**.
3. Use **Change schedule** to set the days and **From**/**To** hours, and select the **Time Zone**.
4. Save the rule and build and deploy the updated version. See [Node Reference](../node-reference.md) for the schedule fields.

Monitoring and waits continue outside those hours. The rule checks its schedule when it processes a trigger signal; an out-of-window attempt is skipped and recorded in its history. The configured duration is not an exact wall-clock guarantee of when a response will finish.

For a 22:00–06:00 rule, a condition beginning at 21:55 and qualifying at 22:05 can lead to an allowed run. A signal processed at 06:05 is outside the window. Merely reaching 22:00 does not start the rule: a later signal is needed, which may come from another qualifying reading while the trigger remains active.

## Practical examples

- **Cold-room door:** watch the mapped open state for ten minutes, then raise an alarm for the site team. A brief opening is filtered when the closed report arrives before the period qualifies.
- **Loading-bay movement:** use a sustained-motion condition with an after-hours rule schedule. Verify that the sensor reports no motion as well as motion. The result indicates reported movement, not who caused it or whether a crime occurred.
- **Equipment temperature:** leave the rule schedule off when the response is needed at any hour. Configure the response and supported commands for the equipment; duration alone does not guarantee safe operation or prevent damage.

## See also

- [Triggers](../triggers.md) — conditions, creation, connection, and troubleshooting
- [One Trigger for Multiple Devices](multiple-devices.md) — individual device states and shared readings

## Resolution and subsequent readings

Manually resolving an alarm closes that incident; it does not reset the trigger’s view of incoming readings. A subsequent reading that still satisfies the raise condition can cause another alarm, subject to the configured suppression behavior. A reading that refutes the raise condition does not keep re-raising it merely because a separately held clear condition has not finished.
