---
description: Turn a Raspberry Pi into an inexpensive on-site IoT hub — LoRaWAN gateway, camera recorder, Zigbee and Thread.
---

# How Do I Turn a Raspberry Pi into an IoT Hub?

A Raspberry Pi with Kilo Hub is a small, inexpensive hub that sits at the site and does the jobs that usually need three or four separate boxes. Add a LoRaWAN card and an antenna, plug in a Zigbee dongle, point it at the site's IP cameras, and one Pi becomes the site's LoRaWAN gateway, camera recorder and smart-home radio — all set up from one app, without a terminal session per device.

This guide walks the whole way, from an empty shopping cart to a hub that is online in Kilo.

## What problem does a Raspberry Pi hub solve?

A small site — a shop, a branch office, a plant room, a holiday rental, a pilot installation — usually ends up with:

* a **LoRaWAN gateway** on the wall for the sensors,
* a **video recorder (NVR)** in a cupboard for the cameras,
* a **Zigbee bridge** for plugs, lights and door sensors,

each bought separately, powered separately, networked separately and updated separately. For a site with a handful of sensors and a few cameras, that is most of the project budget spent on boxes.

A Raspberry Pi hub replaces them with one device that draws a few watts, fits in a cabinet and is managed from one window. The parts cost a fraction of a commercial gateway plus an NVR, and every part is a standard component you can replace on its own.

## What does a Raspberry Pi hub do?

| Capability | What it does | Hardware it needs |
|---|---|---|
| **LoRaWAN gateway** | Receives LoRaWAN sensors and forwards them to Kilo's built-in LoRaWAN Network Server over an encrypted Basics Station connection | RAKwireless Pi HAT, RAK5146 concentrator card, LoRa antenna |
| **Cameras** | Finds IP cameras on the network and runs a recorder for each one, so video is recorded on site, ready to connect to Kilo Lens | IP cameras on the same network |
| **Zigbee** | Runs a Zigbee network for sensors, plugs and lights, with pairing from the app | USB Zigbee coordinator |
| **Thread** | Runs a Thread border router for Matter devices | A second USB radio with Thread firmware |

A Raspberry Pi 4 records about **six or seven cameras** while also running the gateway and Zigbee; a Raspberry Pi 5 handles more. Kilo Hub shows the remaining capacity as you add cameras.

You do not need every capability. A Pi with just the LoRaWAN card is a gateway; add a Zigbee dongle or cameras whenever the site needs them.

## When is a computer the better choice?

When a site has more cameras than a Pi can record, install Kilo Hub on a computer for the cameras — see [Windows, Mac and Linux](../computer.md). On a computer the number of cameras is limited only by its processor, memory and network. Keep the Pi as the LoRaWAN gateway: a computer has no slot for a LoRaWAN card.

## How do I build a Raspberry Pi hub, step by step?

1. **Buy the parts** — [What Do I Need to Build a Raspberry Pi IoT Hub?](shopping-list.md)
2. **Put it together** — [How Do I Assemble a Raspberry Pi LoRaWAN Hub?](hardware.md)
3. **Prepare the Pi and install Kilo Hub** — [How Do I Set Up the Raspberry Pi for Kilo Hub?](setup.md)
4. **Bring up each capability:**
   * the gateway — [How Do I Build a Raspberry Pi LoRaWAN Gateway?](lorawan-gateway.md)
   * cameras — [How Do I Add IP Cameras with Kilo Hub?](../cameras.md)
   * Zigbee — [How Do I Pair Zigbee Devices with Kilo Hub?](../zigbee.md)
   * Thread — [How Do I Add Thread to Kilo Hub?](../thread.md)
5. **If something does not come up** — [Why Isn't My Raspberry Pi Hub Working?](troubleshooting.md)

Plan about an hour for the first hub: most of it is waiting for the operating system to download and the setup script to finish.

## Tips

* Build and test the hub on a desk first, then install it at the site.
* Use wired Ethernet at the site. Cameras stream continuously, and a gateway on Wi-Fi drops off when the Wi-Fi does.
* Keep the Pi ventilated. A Pi in a closed cabinet slows down under camera load, which shows as a high **Processor load** on the Dashboard.
