---
description: "Turn a solution's virtual devices into real sensors in Kilo: open the device, use Swap connection, and keep mappings, rules, and widgets intact."
---

# How do I swap the Emulator for real devices?

A solution starts life with virtual devices standing in for the devices listed on the install screen. The real value arrives when you buy those devices and they replace the virtual ones. You can ask the AI chat to do this (for example, "I got these devices, can you connect them to the application I installed?") or follow the manual steps below. Kilo is built so that this is a change of data source, not a rebuild. This guide follows the path click by click and describes every tab of the device page.

## How do I get to the device?

1. Open **Applications → My applications** and select your application.
2. Select the **Content** tab. While the application has at least one emulated device, the **Emulator** card explains the idea: to go live, swap the Emulator for a real connector (LoRaWAN, MIOTY, MQTT, or Traccar), and the device, mappings, rules, and widgets stay intact.
3. In the **Devices** card, select a device row. The **Edit device** page opens.

<figure><img src="../../.gitbook/assets/kilo-solutions-installed-content.jpg" alt="The Content tab of an installed application with a Devices card, an Emulator card with a Go to connectors button, Rules, and Alarms"><figcaption><p>The Content tab. The Emulator card has a Go to connectors button if you first need to set up the real connector.</p></figcaption></figure>

If you have not yet connected the hardware that will replace the virtual devices, select **Go to connectors** first and set up the [connector](../connectors/README.md) for your sensors. Then come back to the device.

## What are the tabs of the Edit device page?

The page title is **Edit device**, with a back arrow, and a row of tabs: **Device info**, **Connection**, **Emulator**, **Mapping**, **Attributes**, **Calculated data**, and **Logs**. The three that matter for the swap are Connection, Emulator, and Mapping.

### What is on the Device info tab?

Device info holds the basics.

<figure><img src="../../.gitbook/assets/kilo-solutions-device-info.jpg" alt="The Edit device page on the Device info tab with an Add photo area, a Device name field, and an Application selector set to Building Monitoring"><figcaption><p>The Device info tab of a device that belongs to the Building Monitoring application.</p></figcaption></figure>

* **Add photo.** Drop a PNG or JPG (about 5 MB recommended) or browse for a file, so the device is recognizable in lists.
* **Device name.** Required.
* **Application.** The application this device belongs to. Choose Default to keep a device standalone. A link to the **Applications page** sits under the field.
* **Next.** Moves to the next tab.

### What is on the Connection tab?

The Connection tab is where the swap happens.

<figure><img src="../../.gitbook/assets/kilo-solutions-device-connection.jpg" alt="The Connection tab of a device showing a Connector type of Emulator, a Swap connection link, device settings, four device data keys with data types and Emulator buttons, and a reception status of Receiving and storing LIVE"><figcaption><p>The Connection tab of an emulated device. The Swap connection link is at the top right of the connector area.</p></figcaption></figure>

* **Connector type.** Grayed out and set to **Emulator** while the device is virtual.
* **Swap connection.** The link that starts the swap. Next to it is a note that to add a new connector you go to the **Connector section**.
* **Device info.** The **Device ID**, the **Data sending interval** (a number plus a unit such as minute), a **Support commands** switch, and a **Use device preset** checkbox.
* **Device data keys.** One row per reading the device sends, such as temperature, humidity, co2, or equipment_state. Each row has the key name, its **Data type** (for example Integer or Boolean), an **Emulator** button that opens that metric's emulator settings, and a trash icon to remove the row.
* **Add device data key.** Adds another reading.
* **Save.** Saves the tab.
* **Reception.** A status bar near the bottom, such as **Receiving & storing, LIVE**, with a count of mapped sensors, the time of the last value, and a **Details** link. It is your proof that data is arriving.

### How do I start the swap?

1. On the Connection tab, select **Swap connection**.
2. The link becomes **Cancel swap**, and **Connector type** becomes an empty selector you can change.
3. Choose the real connector type, for example LoRaWAN, MIOTY, MQTT, or Traccar.
4. Enter the identifiers of your physical device. The fields depend on the connector, and each connector's page describes them: see [Connectors](../connectors/README.md).
5. Select **Save**.

<figure><img src="../../.gitbook/assets/kilo-solutions-swap-connection.jpg" alt="The Connection tab in swap mode with a Cancel swap link and an empty Connector type selector above the same device data keys"><figcaption><p>Swap mode. The connector selector is empty until you choose the real connector; Cancel swap leaves the device as it was.</p></figcaption></figure>

Select **Cancel swap** at any time to leave the device on the Emulator.

A solution often includes the exact steps for each device in its description. For the smart-office demo, for example, the checklist says where to mount each sensor and how to build the topic for each device. Read the solution's **Content** text before you start.

### What do the Emulator and Mapping tabs do?

**Emulator.** While the device is virtual, this tab lets you test your rules without waiting. Each device data key has a **Value** field, a **Save** button that stores the value, and a **Send once** button that transmits a single reading right now. The note at the top explains that data is sent according to the data sending interval.

<figure><img src="../../.gitbook/assets/kilo-solutions-device-emulator.jpg" alt="The Emulator tab listing four device data keys, each with a Value field and Save and Send once buttons"><figcaption><p>The Emulator tab. Use it to force a value and watch a rule or alarm react.</p></figcaption></figure>

**Mapping.** This tab shows how each device reading becomes a platform metric.

<figure><img src="../../.gitbook/assets/kilo-solutions-device-mapping.jpg" alt="The Mapping tab with a table of device data keys, values, last update times, normalized keys, units, types, and data types"><figcaption><p>The Mapping tab. The mapping is what keeps your rules and widgets working when the source changes.</p></figcaption></figure>

The columns are **Device data key** (what the device sends), **Value** (the latest reading), **Last update**, **Normalized key** (the metric name the platform uses), **Unit**, **Type**, and **Data type**. For an emulated device the keys are defined by the device configuration on the Connection tab, and each row has a trash icon and a **Save** button below the table. Because rules and widgets use the normalized key, they keep working after you swap.

## What stays the same, and what changes?

| Stays the same | Changes |
|---|---|
| Metric mappings, so readings keep their names and units | The source of the readings |
| Rules and their alarms | The connector type of the device |
| Dashboards and widgets | You provide the identifiers of the real device |

## Can I mix virtual and real devices?

Yes. Swap devices one at a time. A solution with five devices can run with two real sensors while three keep emulating, which is a convenient way to move across gradually. The **Emulator** badges in the application mark what is still virtual.

## Why does the emulator count against my plan?

Emulated devices are real devices from the platform's point of view. They run continuously, so they use your plan's device allowance. When you swap one for a physical device, it is still a single device, so the count does not change. For more on emulated devices, see [Emulated Devices](../devices/emulated-devices.md) and the [Emulator Connector](../connectors/emulator-connector.md).
