---
description: Fix a Raspberry Pi hub that doesn't work — card not found, gateway not running, Zigbee not starting, password prompts.
---

# Why Isn't My Raspberry Pi Hub Working?

Most problems with a Raspberry Pi hub come from a part that is not seated properly, a step that was skipped, or a power supply that is too weak. Work through the section that matches what you see.

## What if the setup script says the concentrator did not answer?

The setup script stops with **FAILED: the concentrator did not answer** when it cannot talk to the RAK5146 card. This is a hardware problem, not a software one.

1. Run `sudo poweroff`, wait for the green light to stop, and unplug the power.
2. Check that the card is pushed fully into the HAT's mPCIe slot and held by its screw.
3. Check that the HAT sits fully on the Pi's 40-pin header, with no row of pins left outside the socket.
4. Check that the antenna is connected to the card's LoRa connector.
5. Power the Pi again and run `sudo ./scripts/install-ubuntu.sh --with-desktop` again.

To test the card directly, run these on the Pi. The second one prints the card's gateway ID when the card answers:

```sh
sudo concentrator-reset start
cd /opt/iot-hub/src/sx1302_hal && sudo util_chip_id -d /dev/spidev0.0
```

## Why does Kilo Hub say there is no LoRaWAN radio?

The LoRaWAN Gateway page says **No LoRaWAN radio on this computer** when the Pi was not prepared with the setup script, or when the script stopped before it found the card. Run the [setup script](setup.md#how-do-i-prepare-the-pi-for-the-lorawan-card-and-the-radios) until it finishes and prints the gateway ID, then restart the Pi.

## Why does the gateway not connect in Kilo?

Kilo Hub shows what it can see on the Pi; Kilo shows whether the gateway connected.

* **This gateway is set up and running.** in Kilo Hub but offline in Kilo: check that the LNS address in Kilo Hub is the one Kilo shows for this gateway, and that the gateway was registered for the band your card and antenna use. Check that the Pi has internet access.
* **This gateway is set up but not running.**: select **Start gateway**.
* **This gateway is only part-way set up.**: choose all three files again and select **Save**.
* **This device's gateway folder is not safe to write to, so nothing was changed.**: the gateway's settings folder on the Pi was not created by the setup script. Run the setup script again.

## Why does Zigbee not start?

* **No Zigbee coordinator found.**: plug the dongle in, preferably through a USB extension cable, and wait a few seconds.
* **Radios needing a decision**: Kilo Hub found more than one radio. Select **Use for Zigbee** on the Zigbee dongle.
* **Zigbee didn't come up.**: unplug the dongle, plug it back in and select **Start Zigbee** again. If that does not help, restart the Pi.
* **Zigbee on this device was set up with a different kind of dongle.**: the Zigbee network was made with another dongle. Plug that one back in to keep the paired devices.

## Why does Kilo Hub ask for a password?

Kilo Hub asks for the Pi's password — the one you set in Raspberry Pi Imager — whenever it changes something on the system: installing the gateway's certificates, starting or restarting the gateway, starting Zigbee the first time, or giving a radio its role. **Cancel** changes nothing. Nothing is stored; the next change asks again.

## Why is the Pi slow, or why do cameras stop?

* Check **Processor load** and **Memory used** on the Dashboard. A Raspberry Pi 4 records about six or seven cameras; beyond that, move the extra cameras to [Kilo Hub on a computer](../computer.md).
* A Pi that gets hot slows down. Use a case with a fan or open ventilation, and keep it out of closed metal cabinets.
* Random restarts usually mean a weak power supply. Use the official one for your Pi model.

## Where are the logs?

Open **Settings** in Kilo Hub and select **Open log folder** or **Copy system details** to send them to support.
