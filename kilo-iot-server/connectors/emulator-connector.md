---
description: The Emulator connector generates device data in Kilo IoT, so you can build and test a full deployment before any hardware arrives.
---

# Emulator Connector

The Emulator connector lets you run the Kilo IoT Server with **no hardware at all**. Devices bound to it generate their own telemetry, so dashboards fill up, rules fire, and alarms escalate exactly as they will on site — while your sensors are still in a box, still on order, or still being specified.

Then comes the part that makes it more than a demo: **when the real device arrives, you point the same device at a real connector and keep everything you built.** The dashboards, the rules, the thresholds and the escalation chains stay exactly as they are. Only the source of the data changes.

<figure><img src="../../.gitbook/assets/emulator-connector-list.jpg" alt="The Connectors page showing an Emulator connector alongside a Mioty connector"><figcaption></figcaption></figure>

## What the Emulator is for

Three situations where it changes how a project runs:

- **Evaluating the platform.** See your use case working — a cold room breaching its limit, an escalation chain reaching a phone — before committing to hardware.
- **Building ahead of delivery.** Sensor lead times are measured in weeks. The configuration work does not have to wait for them: build the deployment now, and go live the day the hardware lands.
- **Testing what you cannot easily reproduce.** Freezer failures, tank run-dry, a value that only misbehaves at −30 °C. You can produce the exact reading that should trigger an alarm, on demand, instead of waiting for it to happen for real.

## Adding the connector

Go to **Connectors → Add connector**, choose **Emulator**, and save. That is the entire setup.

The Emulator connector has **no settings to configure** — no credentials, no endpoint, no certificates. It exists purely so devices have something to bind to, and there is one per organization.

<figure><img src="../../.gitbook/assets/emulator-connector-settings.jpg" alt="The Emulator connector page confirming it has no editable settings"><figcaption></figcaption></figure>

## Working with emulated devices

Everything else happens on the device, not here. Once the connector exists, you bind a device to it from the device's **Connection** tab, choose what it measures — by hand or from a device preset — set how often it reports, and drive its values from the device's **Emulator** tab.

**See [Emulated Devices](../devices/emulated-devices.md)** for the full workflow: the device fields, presets, data types, sending values on demand, running commands against an emulated device, cloning one, and the swap to real hardware when it arrives.

## What's next

- **Create your first emulated device.** See [Emulated Devices](../devices/emulated-devices.md).
- **Build automations against emulated data** so they are proven before go-live. See [Rules Engine](../rules-engine/README.md).
- **Rehearse an escalation chain** without waiting for a real failure. See [Alarms](../alarm/README.md).
- **Have the assistant do it for you** in plain language. See [Building with AI](../ai-assistant/building-with-ai.md).
