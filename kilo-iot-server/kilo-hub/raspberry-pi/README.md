---
description: "Why a Raspberry Pi makes a good on-site IoT hub, what it can do with Kilo Hub, and the steps to build one."
---

# How Do I Turn a Raspberry Pi into an IoT Hub?

A Raspberry Pi is a small, cheap computer about the size of a deck of cards. With Kilo Hub on it, it becomes the hub for your site: the box that records your IP cameras, runs your Zigbee and Thread devices and, if you add a LoRaWAN card, receives your LoRaWAN sensors. This guide takes you from buying the parts to a hub that works with Kilo.

## Why use a Raspberry Pi as a hub?

A small site, such as a shop, a branch office, a plant room, a holiday rental or a pilot installation, often ends up with a separate box for each kind of device:

* a video recorder in a cupboard for the cameras,
* a Zigbee bridge for plugs, lights and door sensors,
* a LoRaWAN gateway on the wall for long-range sensors.

Each one is bought, powered, connected and updated on its own.

A Raspberry Pi can record the cameras and run Zigbee, and if you want to build your own LoRaWAN gateway, it can be that too. It costs little, uses a few watts, fits on a shelf and can stay on day and night.

## What can a Raspberry Pi hub do?

You choose which of these you want. Start with one and add the others later.

* **Cameras.** Kilo Hub finds the IP cameras on your network and starts a recorder for each one, so video is recorded on site and can be watched in Kilo Lens. You need IP cameras on the same network as the Pi.
* **Zigbee.** Kilo Hub runs a Zigbee network for sensors, plugs and lights. You pair them in the app and see and control them on the hub. You need a USB Zigbee dongle.
* **Thread.** Kilo Hub runs Thread, the radio network that Matter devices use. Matter is a standard that lets devices from different brands work together. Thread needs its own USB radio, so with Zigbee as well you have two USB sticks.
* **LoRaWAN gateway, if you want to build your own.** The Pi receives the readings of LoRaWAN sensors and sends them to Kilo. You need three extra parts: a LoRaWAN card, an antenna, and a Pi HAT, which is an add-on board that sits on top of the Pi and holds the card. Buying a ready-made gateway is the other way to do this (see below).

A Raspberry Pi 4 records about six or seven cameras, even with Zigbee and a gateway running. A Raspberry Pi 5 handles more. The Dashboard in Kilo Hub shows how much room is left as you add cameras.

## Should I buy a LoRaWAN gateway or make the Pi one?

This only matters if you have LoRaWAN sensors. LoRaWAN sensors cannot reach the internet themselves. They send their readings by radio to a gateway, and the gateway passes them on to Kilo. You can get that gateway in two ways:

* **Buy a ready-made LoRaWAN gateway.** This is the usual choice. It works on its own, without the Pi. See [LoRaWAN Gateways](../../gateways/lorawan-gateways/README.md) and the [supported gateways](../../gateways/lorawan-gateways/supported-lorawan-gateways.md), or browse the [LoRaWAN gateways in the Kilo Electronics store](https://kiloelectronics.com/en/product-category/iothardware/gateways-en/).
* **Build your own on the Pi.** You put a Pi HAT with a LoRaWAN card and an antenna on the Pi, and Kilo Hub turns it into a gateway and walks you through connecting it to Kilo. This is a do-it-yourself project for people who like to build things, or who want one box that also does the cameras and Zigbee.

If you have no LoRaWAN sensors, or you buy a ready-made gateway, skip the LoRaWAN parts. The Pi works the same for cameras, Zigbee and Thread without them, and you can still add the card later.

## When is a computer a better choice than a Pi?

When a site has more cameras than a Pi can record, install Kilo Hub on a computer for the cameras: see [How Do I Run Kilo Hub on Windows, Mac or Linux?](../computer.md) A computer records as many cameras as its processor, memory and network allow. A computer cannot hold a LoRaWAN card, so for LoRaWAN sensors you add a ready-made gateway or a Pi built as one.

## How do I build a Raspberry Pi hub, step by step?

1. **Buy the parts:** [What Do I Need to Build a Raspberry Pi IoT Hub?](shopping-list.md)
2. **Put it together:** [How Do I Assemble a Raspberry Pi IoT Hub?](hardware.md)
3. **Set up the Pi and install Kilo Hub:** [How Do I Set Up the Raspberry Pi for Kilo Hub?](setup.md)
4. **Set up what you need:**
   * the LoRaWAN gateway, if you fitted the card: [How Do I Build a Raspberry Pi LoRaWAN Gateway?](lorawan-gateway.md)
   * cameras: [How Do I Add IP Cameras with Kilo Hub?](../cameras.md)
   * Zigbee: [How Do I Pair Zigbee Devices with Kilo Hub?](../zigbee.md)
   * Thread: [How Do I Add Thread to Kilo Hub?](../thread.md)
5. **If something does not work:** [Why Isn't My Raspberry Pi Hub Working?](troubleshooting.md)

The first hub takes about an hour. Most of that is waiting for downloads.

Build and test the hub on your desk first, then take it to the site. At the site, use a network cable rather than Wi-Fi, and keep the Pi somewhere with air around it. A Pi that gets too warm slows down, and you see that as a high **Processor load** on the Dashboard.

Kilo Hub runs on the Pi's own screen. Keep a screen and keyboard handy for when you add a camera or a device later. The hub keeps running without them.

Next: [What Do I Need to Build a Raspberry Pi IoT Hub?](shopping-list.md)
