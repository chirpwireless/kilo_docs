---
description: "Fix a Raspberry Pi hub: LoRaWAN card not found, gateway not running, Zigbee not starting, password prompts, slow Pi."
---

# Why Isn't My Raspberry Pi Hub Working?

Most problems with a Raspberry Pi hub come from a part that isn't seated properly, a step that was skipped, or a power supply that is too weak. Find what you see below and follow the steps.

## Why does the setup script say no LoRaWAN card was found? {#what-if-the-setup-script-says-the-concentrator-did-not-answer}

If you didn't fit a LoRaWAN card, this message is expected. The Pi is set up for cameras, Zigbee and Thread, and you can carry on.

If you did fit a card and the script says **No LoRaWAN card found**, go through these steps in order:

1. **Did the script ask for a restart?** On a new Pi, the connection the card uses only turns on after a restart, so the first run cannot see the card. Run `sudo reboot`, sign in, and run `sudo ./scripts/install-ubuntu.sh --with-desktop` again from the `raspberry-pi-iot-hub` folder.
2. **Still not found?** Switch the Pi off with `sudo poweroff`, wait until the green light stops blinking, and unplug the power.
3. Push the card all the way into the HAT's mPCIe slot and check that its screw holds it down.
4. Check that the HAT sits fully on the Pi's 40 pins, with no row of pins left outside the socket. If in doubt, take it off and press it on again.
5. Check that the antenna is connected to the card's LoRa connector.
6. Plug the power back in, sign in and run the setup script again.

To test the card yourself, run these two commands on the Pi. If the card answers, the second one prints its gateway ID:

```sh
sudo concentrator-reset start
cd /opt/iot-hub/src/sx1302_hal && sudo util_chip_id -d /dev/spidev0.0
```

If the card still doesn't answer after you reseated it, the card or the HAT may be faulty. Contact support with the output of these commands.

## Why does Kilo Hub say there is no LoRaWAN radio?

The LoRaWAN Gateway page says **No LoRaWAN radio on this computer. LoRaWAN needs a concentrator such as a RAK5146 on a Raspberry Pi HAT.**, and the Dashboard card says **No LoRaWAN radio on this device.** This happens when the setup script did not find a card. That happens when the Pi has no card, when the script was never run, or when the card was fitted after the script ran.

Run the [setup script](setup.md#how-do-i-prepare-the-pi-for-the-lorawan-card-and-the-radios) again until it prints the gateway ID next to **Concentrator**, then restart the Pi. If it says no card was found, see the section above.

## Why doesn't my gateway connect to Kilo?

Kilo Hub shows what it can see on the Pi. Only Kilo can tell you whether the gateway actually connected.

* **This gateway is set up and running.** in Kilo Hub, but offline in Kilo: check that the **LNS address** in Kilo Hub is the one Kilo shows for this gateway, and that you registered the gateway for the band your card and antenna use. Check that the Pi has internet access.
* **This gateway is set up but not running.**: select **Start gateway**.
* **This gateway is only part-way set up.**: some of the gateway's files are missing, for example after a save that failed. Choose all three files again and select **Save**.
* **This device's gateway folder is not safe to write to, so nothing was changed.**: the gateway's settings folder on the Pi was not created by the setup script. Run the setup script again.

## Why won't Zigbee start?

* **No Zigbee coordinator found.**: plug the dongle in, ideally through a USB extension cable, and wait a few seconds.
* **Radios needing a decision**: Kilo Hub found more than one radio. Select **Use for Zigbee** on the Zigbee dongle.
* **Zigbee didn't come up.**: unplug the dongle, plug it back in and select **Start Zigbee** again. If that doesn't help, restart the Pi.
* **Zigbee on this device was set up with a different kind of dongle.**: your Zigbee network was created with another dongle. Plug that one back in to keep your paired devices.

## Why does Kilo Hub keep asking for my password?

Kilo Hub asks for the Pi's password, the one you set in Raspberry Pi Imager, whenever it changes something on the Pi. That includes installing the gateway's certificates, starting or restarting the gateway, starting Zigbee the first time, or selecting **Use for Zigbee** on a dongle. (Giving a radio the Thread job is done in the terminal with `sudo`, which asks for the same password there.) If you select **Cancel**, nothing changes. Kilo Hub doesn't store the password, so the next change asks again.

## Why is my Raspberry Pi slow, or why do the cameras stop?

* Look at **Processor load** and **Memory used** on the Dashboard. A Raspberry Pi 4 records about six or seven cameras. For more, move the extra cameras to [Kilo Hub on a computer](../computer.md).
* A Pi that gets hot slows down. Use a case with a fan or open vents, and keep it out of closed metal cabinets.
* If the Pi restarts by itself, the power supply is usually too weak. Use the official one for your Pi model.

## Where do I find the logs for support?

Open **Settings** in Kilo Hub. Select **Open log folder** to find the log files, or **Copy system details** to copy the details support asks for, and send both with your message.

Next: back to [What Is Kilo Hub?](../README.md)
