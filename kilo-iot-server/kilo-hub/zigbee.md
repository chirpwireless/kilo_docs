---
description: Start a Zigbee network with Kilo Hub, pair sensors, plugs and lights, and open the Zigbee2MQTT dashboard.
---

# How Do I Pair Zigbee Devices with Kilo Hub?

Kilo Hub turns a USB Zigbee coordinator into a working Zigbee network. It recognizes the dongle, picks the right radio driver, gives the network its own security key, runs Zigbee2MQTT and a local message broker, and opens a pairing window when you add a device. Zigbee runs on a Raspberry Pi and on Linux computers.

## Why use Kilo Hub for Zigbee?

A hand-built Zigbee2MQTT installation needs the dongle's serial port, the driver that matches its chip, a network key, a broker and a configuration file, and the wrong driver fails with an error that points nowhere useful. Kilo Hub fills all of that in from the dongle itself, keeps the dongle working after reboots and when other USB devices are plugged in, and gives every installation a network key of its own instead of a shared default.

## Which Zigbee coordinators does Kilo Hub recognize?

Kilo Hub recognizes the common USB coordinator families and chooses the driver for you:

* Silicon Labs EFR32 (EmberZNet) — SONOFF Zigbee Dongle Plus MG24 and ZBDongle-E, Home Assistant SkyConnect and ZBT-1, SMLIGHT SLZB-06MU and SLZB-07
* Texas Instruments CC2652 / CC1352 — SONOFF ZBDongle-P, SMLIGHT SLZB-06P and SLZB-07P
* dresden elektronik ConBee and RaspBee
* Nordic nRF52840 running ZBOSS

Plug the dongle in before opening the **Zigbee** page. With a single coordinator plugged in, Kilo Hub uses it for Zigbee automatically. With two or more — a Zigbee dongle and a Thread radio, for example — Kilo Hub does not guess: the page lists them under **Radios needing a decision**. Select **Use for Zigbee** on the dongle that runs Zigbee, and Kilo Hub remembers it by its serial number, so it keeps its role after reboots and in any USB port. When no coordinator is found, the page says **No Zigbee coordinator found. Plug in a supported USB dongle and it will appear here.**

## How do I start the Zigbee network?

1. Open **Kilo Hub** and select **Zigbee** in the left menu. The **Coordinator** table shows the dongle, its **Connection** (USB) and its **Type** (driver).
2. Select **Start Zigbee**. Kilo Hub starts the network and waits until it reports that it is online, which takes up to a minute the first time.
3. **Zigbee started.** confirms the network is running. Devices already paired appear in the **Devices** table.

<figure><img src="../../.gitbook/assets/kilo-hub-zigbee.jpg" alt="Kilo Hub Zigbee page with the coordinator and a paired lamp connected to the hub"><figcaption><p>The Zigbee page lists the coordinator and every paired device with its signal and battery.</p></figcaption></figure>

Selecting **Start Zigbee** on a network that is already running restarts it cleanly, which is also the first thing to try when devices stop responding.

## How do I pair a Zigbee device?

1. Select **Add device**. The network opens for new devices and a countdown shows how long it stays open.
2. Put the device into pairing mode while **Searching for new devices…** is shown. Most sensors have a button to hold for a few seconds; for a bulb, turn it off and on five times in a row until it flashes. The device's manual has the exact steps.
3. The device appears in the **Devices** table with its name, **Type**, **Status**, **Signal** and **Battery**. A green **Connected to hub** means the device has joined the Zigbee network.
4. Select **Stop searching** when all devices are paired, or let the countdown run out. The network closes to new devices either way.

<figure><img src="../../.gitbook/assets/kilo-hub-zigbee-pairing.jpg" alt="Kilo Hub Zigbee pairing window counting down while searching for new devices"><figcaption><p>While the pairing window is open, put the device into pairing mode.</p></figcaption></figure>

**Add device** asks you to start Zigbee first if the network is not running yet.

## How do I open the Zigbee2MQTT dashboard?

Zigbee2MQTT has its own dashboard for renaming devices, reading every value they report, switching lights and plugs, updating firmware and drawing the network map. Kilo Hub opens it for you.

1. Select **Open Zigbee2MQTT**. The dashboard opens in a tab of your web browser.
2. The first time, the dashboard shows **Auth** and asks for a **Token**. Kilo Hub shows the token under **Zigbee2MQTT is open in your browser.** — select **Copy** and paste it into the dashboard. Your browser remembers it after that.

<figure><img src="../../.gitbook/assets/kilo-hub-zigbee-dashboard-token.jpg" alt="Kilo Hub showing the Zigbee2MQTT address and the access token with a Copy button"><figcaption><p>Kilo Hub shows the dashboard's address and the token it asks for the first time.</p></figcaption></figure>

Every installation gets its own token, and the dashboard is reachable only from the machine running Kilo Hub.

## How does Zigbee work on a Raspberry Pi hub?

On a Raspberry Pi prepared with the [setup script](raspberry-pi/setup.md), Zigbee runs as a system service that starts with the Pi:

* The first **Start Zigbee** asks for the Pi's password once: Kilo Hub gives the dongle its Zigbee role and creates the network's settings.
* After that the network starts by itself at every boot, with or without a screen attached.
* The dongle keeps its role by serial number, so it can move to another USB port.

## Tips

* Pair devices where they will be installed. Zigbee builds its mesh through mains-powered devices such as plugs and lights, so place those first and battery sensors after.
* Plug the coordinator in through a short USB extension cable, away from USB 3 ports and the machine's own Wi-Fi.
* Rename devices in the Zigbee2MQTT dashboard with names your team recognizes; Kilo Hub shows the same names.
