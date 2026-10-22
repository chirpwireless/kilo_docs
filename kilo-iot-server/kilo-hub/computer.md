---
description: Run Kilo Hub on a Windows, macOS or Linux PC as the on-site edge hub for many cameras and, on Linux, Zigbee.
---

# How Do I Run Kilo Hub on Windows, Mac or Linux?

Kilo Hub installs on an ordinary Windows, macOS or Linux computer as well as on a Raspberry Pi. On a computer it is the site's edge hub: a PC in the server room or on the factory floor that records the site's cameras and runs its local radios, with far more processing power than a single-board computer.

## When should a site use a computer instead of a Raspberry Pi?

Choose a computer when the site has more cameras than a Raspberry Pi can record. A Raspberry Pi 4 records about six or seven cameras; on a computer the only limit is its processor, memory and network. Many sites already have a machine that runs around the clock, and installing Kilo Hub on it adds no new hardware.

A computer cannot be a LoRaWAN gateway: it has no slot for a concentrator card. Sites that need LoRaWAN pair the computer with a [Raspberry Pi LoRaWAN gateway](raspberry-pi/lorawan-gateway.md) or a [supported LoRaWAN gateway](../gateways/lorawan-gateways/supported-lorawan-gateways.md).

## What does Kilo Hub run on each operating system?

| Capability | Windows | macOS | Linux |
|---|---|---|---|
| Cameras | Yes | Yes | Yes |
| Zigbee (USB coordinator) | No | No | Yes |
| Thread border router | No | No | No — Raspberry Pi only |
| LoRaWAN gateway | No | No | No — Raspberry Pi only |

On Windows and macOS, Docker runs inside a virtual machine that USB radios cannot reach, so Kilo Hub runs Zigbee only on Linux. The Thread border router comes with the Raspberry Pi setup. The Zigbee page says so on Windows and macOS instead of asking for a dongle that could never work there.

## How do I set up a computer as the site hub?

1. [Download and install Kilo Hub](download-and-install.md) for the computer's operating system.
2. Open Kilo Hub. The **Dashboard** shows the computer's operating system, memory, processors and Docker version.
3. Add the site's cameras from **Cameras** ([Cameras](cameras.md)). If Docker is missing, Kilo Hub installs it the first time you add a camera.
4. On Linux, plug in the Zigbee coordinator and set up the network from **Zigbee** ([Zigbee](zigbee.md)).
5. Keep an eye on **Processor load** and **Memory used** on the Dashboard as cameras are added.

## Tips

* Turn off sleep and automatic shutdown on the computer. Cameras record only while it is running.
* Give the computer a fixed place on the network and a wired connection; cameras stream continuously to it.
* Leave Docker running on Windows and macOS. Kilo Hub's cameras stop when Docker stops.
