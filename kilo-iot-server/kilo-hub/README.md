---
description: "Kilo Hub is an app for a small computer at your site. It sets up cameras, Zigbee, Thread and a LoRaWAN gateway."
---

# What Is Kilo Hub?

Kilo Hub is an app you install on a small computer that stays at your site, such as an office, a shop or a plant room. It sets up the devices in the building that Kilo cannot reach over the internet by itself: IP cameras (cameras that connect to your network instead of to a TV or a video recorder), Zigbee and Thread devices, and a do-it-yourself LoRaWAN gateway. Then it keeps them running.

<figure><img src="../../.gitbook/assets/kilo-hub-dashboard.jpg" alt="Kilo Hub dashboard showing this device, cameras recording, LoRaWAN, Zigbee and Thread status"><figcaption><p>The Dashboard shows the machine's resources and the state of every capability at a glance.</p></figcaption></figure>

## Why do I need a hub on site for Kilo?

Kilo runs in the cloud. Many devices sit inside a building and can only be reached from inside it:

* An IP camera sends its video over the building's own network.
* A Zigbee or Thread sensor, plug or light talks by radio to a small USB stick plugged into a computer nearby.
* A LoRaWAN sensor sends its readings by radio to a receiver at the site, called a gateway.

So something at the site has to talk to these devices. That something is the hub: a computer that stays at the site, stays on, and does this work.

Normally, someone has to set up each of these by hand on that computer. They install the recording software for every camera, configure the Zigbee radio, and copy the gateway's security certificates into the right place. That means typing many commands into a terminal and editing settings files.

Kilo Hub does that work for you. On a computer, you install the app and work in it. On a Raspberry Pi, you type a few commands once while you set up the Pi, and after that you work in the app too. You plug in the hardware and open the app. It finds the camera, the Zigbee dongle or the LoRaWAN card, and you finish each one on its own page, for example by selecting **Start Zigbee**.

## What can Kilo Hub set up?

Each of these has its own page in the left menu of the app. You only use the ones you need.

### Cameras

Kilo Hub looks for IP cameras on your network and starts a recorder for each one. The recorder is called [Twin](../lens/installing-twin.md). It is a small program that records one camera on site and connects it to [Kilo Lens](../lens/README.md). Kilo Lens is the part of Kilo where you watch your cameras, live and recorded.

Cameras run in Docker, a free program that runs each recorder in its own sealed-off space on the computer. If Docker is missing, Kilo Hub installs it for you.

Works on a Raspberry Pi and on Windows, Mac and Linux computers.

### Zigbee

Zigbee is a low-power radio network used by many sensors, plugs and lights. These devices talk to a USB stick called a Zigbee dongle, or coordinator. Kilo Hub recognizes the dongle and starts the Zigbee network, and you pair your devices from the app. You see and control them on the hub itself: the **Zigbee** page shows each device's signal and battery, and the Zigbee2MQTT dashboard shows its readings and lets you switch lights and plugs.

Zigbee works on a Raspberry Pi or a Linux computer, not on Windows or Mac.

### Thread

Thread is another low-power radio network. Matter devices use it. Matter is a standard that lets smart home and building devices from different brands work together. Thread needs its own USB radio. If you also use Zigbee, that means two USB sticks.

Works on a Raspberry Pi.

### LoRaWAN gateway

LoRaWAN is a long-range radio network for sensors that run for years on a battery. A LoRaWAN gateway is the receiver that picks up their readings and sends them to Kilo, where you see the sensors. Most people buy a [ready-made LoRaWAN gateway](../gateways/lorawan-gateways/README.md), which doesn't need Kilo Hub. You can also build your own from a Raspberry Pi with a LoRaWAN card, and Kilo Hub turns the Pi into the gateway. To compare the two, see [Should I buy a LoRaWAN gateway or make the Pi one?](raspberry-pi/README.md#should-i-buy-a-lorawan-gateway-or-make-the-pi-one)

Works on a Raspberry Pi with a LoRaWAN card.

If the hardware for something is missing, its page stays in the menu and tells you what to add.

## Should I install Kilo Hub on a Raspberry Pi or a computer?

Both work. Pick the one that fits the site.

**A Raspberry Pi** is a small, cheap computer about the size of a deck of cards. It uses very little power, fits on a shelf and can stay switched on all the time. A Raspberry Pi 4 records about six or seven cameras and also runs Zigbee and Thread. If you want to build your own LoRaWAN gateway instead of buying one, the Pi is the only machine that can do it, because only the Pi has a place to fit the LoRaWAN card. See [How Do I Turn a Raspberry Pi into an IoT Hub?](raspberry-pi/README.md)

**A Windows, Mac or Linux computer** has more processing power, so it records many more cameras. The limit is its processor, memory and network. It is a good choice if the site already has a PC that runs all day. Zigbee works only on Linux. A computer cannot be a LoRaWAN gateway, so for LoRaWAN sensors you add a ready-made gateway or a Raspberry Pi built as one. See [How Do I Run Kilo Hub on Windows, Mac or Linux?](computer.md)

You can also combine them at one site, for example a computer for a large number of cameras and a separate LoRaWAN gateway, either bought ready-made or built from a Raspberry Pi.

Whichever you choose, install Kilo Hub on a machine that stays at the site and stays on. Cameras record and sensors report only while it runs. Give it a network cable if you can: cameras send video all the time, and a wired connection keeps the recordings complete.

## How do I get started with Kilo Hub?

1. Make sure you have a Kilo account. You need it to watch cameras in Kilo Lens and to register a LoRaWAN gateway.
2. Decide where Kilo Hub will run: a Raspberry Pi or a computer.
3. Download and install Kilo Hub. On a Raspberry Pi, the Pi guide walks you through this as part of setting up the Pi.
4. Open Kilo Hub. The **Dashboard** shows the machine (system, memory, processors and Docker) and one card for each thing Kilo Hub can set up.
5. Open the page you need from the left menu: [Cameras](cameras.md), [Zigbee](zigbee.md), [Thread](thread.md) or [LoRaWAN Gateway](raspberry-pi/lorawan-gateway.md).

The **Processor load** and **Memory used** bars on the Dashboard show how busy the machine is. Check them before you add another camera.

## Where do I find the Kilo Hub version and logs?

Select **Settings** at the bottom of the left menu. It shows the Kilo Hub version, the operating system and the type of device.

<figure><img src="../../.gitbook/assets/kilo-hub-settings.jpg" alt="Kilo Hub Settings page with app version, system and diagnostics actions"><figcaption><p>Settings holds the version and the two diagnostics actions support asks for.</p></figcaption></figure>

If you contact support, they may ask for two things from this page:

* **Open log folder** opens the folder where Kilo Hub keeps its log files.
* **Copy system details** copies the version, operating system and hardware details, so you can paste them into your message.

At the bottom of the menu you can also switch the language (English, German, French, Spanish or Portuguese) and turn on **Dark** mode.

Next: [How Do I Download and Install Kilo Hub?](download-and-install.md)
