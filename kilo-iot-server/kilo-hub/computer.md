---
description: "When to run Kilo Hub on a Windows, Mac or Linux computer instead of a Raspberry Pi, and what it can do on each system."
---

# How Do I Run Kilo Hub on Windows, Mac or Linux?

Kilo Hub also runs on an ordinary Windows, Mac or Linux computer. The computer then becomes the hub for your site: it records the cameras and, on Linux, runs the Zigbee network. It might be a PC in the server room, on the shop floor or in a back office.

## When should I use a computer instead of a Raspberry Pi?

Use a computer when the site has more cameras than a Raspberry Pi can record. A Raspberry Pi 4 records about six or seven. A computer records many more: the limit is its processor, memory and network.

A computer also makes sense if the site already has one that runs all day. Installing Kilo Hub on it means no new hardware.

A computer cannot be a LoRaWAN gateway, because it has no place for the LoRaWAN card. If you also have LoRaWAN sensors, add a [Raspberry Pi LoRaWAN gateway](raspberry-pi/lorawan-gateway.md) or one of the [supported LoRaWAN gateways](../gateways/lorawan-gateways/supported-lorawan-gateways.md).

## What can Kilo Hub do on Windows, Mac and Linux?

| | Windows | Mac | Linux |
|---|---|---|---|
| Cameras | Yes | Yes | Yes |
| Zigbee | No | No | Yes |
| Thread | No | No | No (Raspberry Pi only) |
| LoRaWAN gateway | No | No | No (Raspberry Pi only) |

Why no Zigbee on Windows and Mac? The cameras run in Docker, and on Windows and Mac Docker runs in a closed-off space that cannot reach USB sticks such as a Zigbee dongle. On those computers, the **Zigbee** page tells you this instead of asking you to plug in a dongle. Thread comes with the Raspberry Pi setup, so it runs only on a Pi.

## How do I set up a computer as the hub for my site?

1. [Download and install Kilo Hub](download-and-install.md) for the computer's operating system.
2. Open Kilo Hub. The **Dashboard** shows the computer's system, memory, processors and Docker.
3. Add the site's cameras from **Cameras**: see [How Do I Add IP Cameras with Kilo Hub?](cameras.md) If Docker is missing, Kilo Hub installs it the first time you add a camera.
4. On Linux, plug in the Zigbee dongle and start the network from **Zigbee**: see [How Do I Pair Zigbee Devices with Kilo Hub?](zigbee.md)
5. As you add cameras, watch **Processor load** and **Memory used** on the Dashboard.

## How do I keep the computer recording?

* Turn off sleep and automatic shutdown. Cameras record only while the computer is on.
* Connect the computer with a network cable, and keep it plugged into the same network as the cameras. Cameras send video to it all the time.
* On Windows and Mac, leave Docker running. When Docker stops, the cameras stop recording.

Next: [How Do I Add IP Cameras with Kilo Hub?](cameras.md)
