---
description: Use one Kilo trigger for several devices, give each its own condition and wait, and understand shared readings and the device preview.
---

# One Trigger for Multiple Devices

A trigger watches device readings for a condition, such as a cold room being too warm. When several assets need the same monitoring, select them in one trigger and connect that trigger to a rule. You can maintain one condition and one response instead of copying the setup for every asset.

Each watched device is evaluated separately. Two rooms can exceed the temperature limit at different times, qualify independently, and start the same rule with their own device identity. For trigger creation and rule connection, see [Triggers](../triggers.md).

## What stays independent

Every watched device has its own condition state and, when configured, its own start and clear waits. One room becoming active or returning to normal does not advance or reset another room's wait.

AND/OR choices combine readings within each device's evaluation. Selecting several rooms does not mean they must all be too warm at once. The selected devices belong to this trigger; the selection does not create a reusable group elsewhere in Kilo.

## Select the devices

1. Add the condition's normalized keys—the common names of the readings it uses. Include any keys needed by a separate clear condition.
2. Under **Devices**, use **Search devices** to find devices that provide those readings. A compatible device supplies at least one required key; the final selection must cover all keys.
3. Select the devices you need. **Select all shown** adds the currently loaded eligible results. Use **Load more devices** to load further results before adding them. When all results for the current search are loaded, the button reads **Select all**.
4. Search again if needed. Earlier selections remain selected; **Clear selection** empties the selection.
5. Review **How this trigger will run** before clicking **Create trigger** or **Save changes**.

A trigger needs at least one watched device and accepts up to **500 selected devices** in total, including devices that only provide shared readings. Up to **10 distinct normalized keys** can be used across the start and clear conditions.

If a device is missing, check its **Mapping** tab. The relevant sensor needs an incoming source mapping. When two mapped sensors on one device answer the same key, the form directs you to resolve that ambiguity on **Mapping**; there is no sensor selector in the trigger form. Review existing uses before changing a device's mapping.

<figure><img src="../../../.gitbook/assets/trigger-device-group.jpg" alt="Kilo device selection with two devices evaluated separately using temperature"><figcaption>Each evaluated device gets a row in the preview.</figcaption></figure>

## Use several readings from each device

Suppose each pump provides vibration and running-state readings. A condition could require vibration above a chosen limit **AND** the pump to be running. Kilo evaluates that pair separately for each selected pump.

For this arrangement, every watched pump supplies both readings. A missing key is not supplied automatically by another pump unless the selection forms a valid shared-reading arrangement.

## Use one shared reading

A **shared reading** is supplied by one selected device and used in every watched device's evaluation. For example, several doors can each provide their own open state while one building controller supplies a heating-on reading. Each door is checked against the same heating status.

To configure this example:

1. Add the door-state and heating-state keys and their comparisons to the condition.
2. Select the door devices and the controller supplying the heating state.
3. Check the key description **Devices answering this key are the watched ones**. For this example it should describe the door-state key.
4. In the preview, confirm that every door has an **Evaluated device** row and that **Uses** identifies the controller's shared heating reading.

For each additional key, either every watched device must supply it, or exactly one selected device must supply it for all of them. A shared provider can itself be a watched device. Different additional keys can have different shared providers; each shared key still needs one unambiguous provider.

A key supplied by only some watched devices or several possible shared providers is rejected unless every watched device supplies it individually. Resolve the preview's explanation by changing the selection or mappings. A change to a shared reading can affect several device evaluations even though their states and waits remain separate.

## Read the run preview

The form determines which devices can be evaluated from the selected keys and their mappings. Check the displayed result rather than assuming every selected device is watched independently.

| Column | Meaning |
|---|---|
| **Check** | The row number of an independent device evaluation. |
| **Evaluated device** | The device whose condition is being watched and whose identity goes to the rule. |
| **Uses** | The input readings for that evaluation, including the named provider of any shared reading. |

The controller in the door example supplies an input but has no door-evaluation row. Save only after the expected doors and inputs appear. If the preview reports an unanswered or ambiguous key, fix it before saving.

## Identify the affected device

In a connected rule's **Set Alarm** node, include the watched device's name in **Motivation Message**:

```cel
"Temperature needs attention: " + vars.device_name
```

The name is not inserted automatically. The rule also receives the watched device and sensor IDs. It receives a trigger signal, not an individual sensor reading, so **`vars.value` is unavailable**. Use enrichment if the response needs another reading; see [CEL Reference](../cel-reference.md#available-after-the-start-event).

## Change the selection later

Edit the trigger to add or remove devices. Review the preview and any countdown-reset warning before saving. Removing a watched device stops monitoring it and requests clearing of its associated active trigger alarms through running rules. If a dependent rule was stopped, check **Alarm → Inbox** for unresolved incidents.

A mapping-change warning beside a saved trigger means its input mapping needs review. Check the device's **Mapping** tab, then edit the trigger and verify its selected inputs and preview. A mapping change does not automatically redesign the trigger for you.

## See also

- [Triggers](../triggers.md) — create the condition and connect a response
- [Trigger Timing](trigger-timing.md) — qualify, clear, and repeat independently per device
- [Metrics](../../devices/metric-templates.md) — normalized keys and mappings
