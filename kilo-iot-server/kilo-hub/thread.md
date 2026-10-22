---
description: Add a Thread radio to Kilo Hub for Matter devices, and why Thread needs a second USB radio beside Zigbee.
---

# How Do I Add Thread to Kilo Hub?

Thread is the low-power mesh network that Matter devices use: sensors, locks, blinds and lights from many manufacturers. Like Zigbee, it needs a radio on site, and Kilo Hub's **Thread** page recognizes that radio on a Raspberry Pi or a Linux computer.

## Why does Thread need its own radio?

Zigbee and Thread use the same 2.4 GHz radio chips, but different firmware. A dongle runs one or the other, never both at the same time. A site that uses both protocols therefore needs two USB radios: one with Zigbee coordinator firmware for the [Zigbee](zigbee.md) network, and one with Thread firmware. Kilo Hub keeps the two apart, so the Thread radio is never mistaken for the Zigbee coordinator or the other way round.

## What radio does Thread need?

Use a USB radio flashed with OpenThread radio co-processor (RCP) firmware, for example a second Silicon Labs MG24 or Nordic nRF52840 dongle. Many dongles sold for Zigbee can be reflashed for Thread; the dongle manufacturer publishes the firmware and the flashing steps.

## How do I check that Kilo Hub found the Thread radio?

1. Plug the Thread radio into a USB port of the Raspberry Pi or Linux computer, next to the Zigbee coordinator if there is one.
2. Open **Kilo Hub** and select **Thread** in the left menu.
3. When the radio is recognized, the page shows **Thread radio ready. No border router running yet.**

When no Thread radio is plugged in, the Thread page and the Thread card on the Dashboard both say **Thread needs its own radio. One dongle cannot run Zigbee and Thread at the same time.**

<figure><img src="../../.gitbook/assets/kilo-hub-thread-no-radio.jpg" alt="Kilo Hub Thread page explaining that Thread needs its own radio"><figcaption><p>Without a Thread radio, the page explains that Thread and Zigbee need separate radios.</p></figcaption></figure>

On Windows and macOS, Kilo Hub cannot use USB radios, so Thread runs on a Raspberry Pi or a Linux computer.

## Tips

* Label the two dongles. They often look identical, and a Zigbee dongle plugged in where Thread was expected is the most common reason the Thread page reports no radio.
* Keep both radios on short USB extension cables, a little apart from each other and from the machine's Wi-Fi antenna.
