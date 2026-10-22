---
description: Build a Raspberry Pi IoT hub with Kilo Hub — LoRaWAN gateway, IP cameras, Zigbee and Thread in one box at the site.
---

# How Do I Set Up Kilo Hub on a Raspberry Pi?

A Raspberry Pi running Kilo Hub becomes a complete IoT hub for one site. Add a concentrator card on a Pi HAT and it is also a LoRaWAN gateway, so a single small box connects LoRaWAN sensors, IP cameras, Zigbee devices and Thread devices to the Kilo IoT Server.

## Why use a Raspberry Pi as the site hub?

A typical small site — a retail store, a branch office, a plant room — ends up with a LoRaWAN gateway on the wall, a recorder for the cameras and a separate Zigbee bridge, each powered, networked and maintained on its own. A Raspberry Pi with Kilo Hub replaces all three with one device that draws a few watts, mounts in a cabinet and is set up from one window.

## What hardware does a Raspberry Pi hub need?

| Part | What to use | Needed for |
|---|---|---|
| Single-board computer | Raspberry Pi 4 (4 GB or 8 GB) or Raspberry Pi 5 | Everything |
| Storage | microSD card, 32 GB or larger | Everything |
| Power | 5 V / 3 A USB-C power supply | Everything |
| Operating system | Raspberry Pi OS (64-bit) | Everything |
| Pi HAT with an mPCIe slot | A RAK Pi HAT for mPCIe concentrators | LoRaWAN gateway |
| LoRaWAN concentrator | RAK5146 mPCIe card (Semtech SX1303) | LoRaWAN gateway |
| Antennas | LoRa antenna for your region's band; GPS antenna optional | LoRaWAN gateway |
| Zigbee coordinator | USB dongle such as SONOFF Zigbee Dongle Plus (MG24 or ZBDongle-E/P), SMLIGHT SLZB, ConBee | Zigbee |
| Thread radio | A second USB radio running Thread firmware | Thread |

Zigbee and Thread need one radio each: a single dongle runs either Zigbee firmware or Thread firmware, never both at the same time.

## How do I assemble the Raspberry Pi hub?

1. Insert the RAK5146 card into the mPCIe slot of the Pi HAT and secure it with its screw.
2. Mount the HAT on the Raspberry Pi's 40-pin GPIO header.
3. Connect the LoRa antenna to the concentrator's antenna connector **before** powering on. Transmitting without an antenna can damage the radio.
4. Optionally connect the GPS antenna, for accurate gateway time and location.
5. Plug the Zigbee dongle (and the Thread radio, if used) into USB ports. A short USB extension cable moves the radio away from the Pi's own interference.
6. Write Raspberry Pi OS (64-bit) to the microSD card, start the Pi with a screen, keyboard and mouse, and connect it to the network — wired Ethernet is best for cameras.

## How do I install Kilo Hub on the Raspberry Pi?

Download the `arm64` `.deb` package from the [Kilo Hub release page](https://github.com/chirpdepin/raspberry-pi-iot-hub/releases/latest) and install it as described in [Download and Install](../download-and-install.md#how-do-i-install-kilo-hub-on-linux-or-a-raspberry-pi). Start **Kilo Hub** from the applications menu. The Dashboard lists the Pi as the device and shows which capabilities found their hardware.

## What can the Raspberry Pi hub run?

* **LoRaWAN gateway** — the concentrator card turns the Pi into a gateway on Kilo's built-in LoRaWAN Network Server. See [Raspberry Pi LoRaWAN Gateway](lorawan-gateway.md).
* **Cameras** — a Raspberry Pi 4 records about **six cameras** comfortably while also running the gateway and Zigbee; a Raspberry Pi 5 handles roughly twice that. Kilo Hub shows the remaining capacity as you add cameras. See [Cameras](../cameras.md).
* **Zigbee** — pair sensors, plugs and lights with the USB coordinator. See [Zigbee](../zigbee.md).
* **Thread** — a dedicated Thread radio for Matter devices. See [Thread](../thread.md).

## Tips

* Use a good microSD card (A2 rating) or boot the Pi from an SSD. Cameras that record continuously write to storage all day.
* Keep the Pi ventilated. A Pi in a closed cabinet throttles its processor under camera load, which shows as a high **Processor load** on the Dashboard.
* For more than six to ten cameras, run Kilo Hub on a computer for the cameras and keep the Pi as the LoRaWAN gateway.
