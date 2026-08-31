---
description: Apply one Kilo trigger and rule to multiple devices while keeping each device's condition and countdown independent.
---

# One Trigger for Multiple Devices

A trigger can select one device or many devices. This lets an operations team define one condition and maintain one rule for a fleet of comparable assets instead of copying the rule for every asset.

The selection belongs to that trigger. It does not create a reusable group elsewhere in Kilo, and changing another trigger does not change this device list.

## How per-device evaluation works

The normalized key marked **Devices answering this key are the watched ones** identifies the subject of the condition. Every selected device that supplies that key is evaluated separately.

For 50 cold-store doors:

- each door has its own condition state;
- each door has its own duration countdown;
- one door becoming active does not change another door;
- the connected rule receives the identity of the door that met the condition.

The same trigger can therefore start the same rule for different devices at different times.

## Select the devices

1. Define at least one normalized key in the trigger condition.
2. Open the **Devices** section.
3. Use **Search devices**, **Select all**, **Select all shown**, **Clear selection**, or **Load more devices** to make the selection.
4. If one device has several sensors mapped to the same key, choose the sensor the trigger should use.
5. Review **How this trigger will run** before saving.

A trigger needs at least one participant and accepts up to 500. The limit includes watched devices and any device selected only to provide a shared reading.

<figure><img src="../../../.gitbook/assets/trigger-device-group.jpg" alt="The Kilo trigger device selector and one preview row for each watched device"><figcaption></figcaption></figure>

If an expected device is absent, open its **Mapping** tab and map an incoming sensor value to a normalized key used in the trigger. A sensor without a source mapping cannot participate.

## Use several readings per device

When all watched devices provide every required normalized key, Kilo evaluates those readings within each device.

For example, a pump trigger can require `vibration > 12` AND `pump_running = true`. If every pump supplies both metrics, each pump is evaluated entirely from its own readings.

## Use one shared reading

An additional normalized key may instead be supplied by exactly one selected device for all watched devices.

For example:

- every fire door supplies its own `door_open` value;
- one building controller supplies `heating_on`;
- the trigger checks each door separately while using the same heating status for every door.

The building controller participates in the trigger but does not receive a door-condition row. Kilo refuses an ambiguous arrangement where an additional key is supplied by only some watched devices or by multiple possible shared providers.

## Read the run preview

**How this trigger will run** is the final composition check:

- **Evaluated device** identifies each independently watched device.
- **Check** shows the condition evaluated for that device.
- **Uses** identifies any device supplying a shared reading.

Do not save until every expected watched device has a row and every shared input points to the intended provider.

## Identify the device in the rule

The trigger signal includes `vars.device_name`, `vars.subject_id`, and `vars.sensor_id`. Use `vars.device_name` in an alarm message so operators know which asset requires attention:

```cel
"Cold-store door left open: " + vars.device_name
```

`vars.value` is not included because the rule starts from the trigger's condition transition rather than one sensor event.

## See also

- [Triggers](../triggers.md) — condition creation and rule connection
- [Trigger Timing](trigger-timing.md) — immediate and sustained conditions
- [Metrics](../../devices/metric-templates.md) — normalized keys and device mappings
