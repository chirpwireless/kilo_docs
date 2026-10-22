---
description: "Add a Thread radio to a Raspberry Pi running Kilo Hub for Matter devices, and why Thread needs its own USB radio."
---

# How Do I Add Thread to Kilo Hub?

Thread is a low-power radio network, much like Zigbee. Matter devices use it. Matter is a standard that lets smart devices from different brands work together, such as sensors, locks, blinds and lights. Thread devices only talk to each other by radio, so they need something that links their radio network to your ordinary network. That link is called a border router. A Raspberry Pi running Kilo Hub can be that border router, with a USB radio for Thread plugged in.

Thread works with Kilo Hub on a Raspberry Pi.

## Why does Thread need its own radio?

Zigbee and Thread use the same kind of radio chip, but different software on it. A dongle runs one or the other, never both at once. So if you want both, you need two USB sticks: one for [Zigbee](zigbee.md) and one for Thread. Kilo Hub keeps them apart, so the Thread radio is never used for Zigbee or the other way round.

## Which radio do I need for Thread?

A USB radio with OpenThread RCP firmware on it. Firmware is the software inside the stick, and OpenThread RCP is the version Thread needs. The easiest choice is a stick that the seller says comes with OpenThread RCP firmware already on it. A stick sold for Zigbee has Zigbee firmware on it, and you would have to load the Thread firmware yourself with the maker's tool before you plug it into the Pi.

## How do I set up Thread on a Raspberry Pi?

The [setup script](raspberry-pi/setup.md#how-do-i-prepare-the-pi-for-the-lorawan-card-and-the-radios) already installed the Thread software on the Pi. It starts by itself once you tell the Pi which USB stick is the Thread radio. You do that once, in the terminal (see [Where do I type commands on the Raspberry Pi?](raspberry-pi/setup.md#where-do-i-type-commands-on-the-raspberry-pi)).

1. Plug the Thread radio into a USB port, next to the Zigbee dongle if you have one.
2. List the radios the Pi can see:

   ```sh
   sudo detect-radios.sh
   ```

   Each radio gets a line like this one. Your names and numbers will be different:

   ```
     Thread USB Dongle [E1A2B3C4D5F6A7B8] -> /dev/ttyACM1
   ```

   The code in square brackets is the radio's serial number. Copy it without the brackets. In this example, that is `E1A2B3C4D5F6A7B8`. If you have two sticks, pick the line with your Thread stick's name. Below an unassigned radio, the list also suggests a command ending in `zigbee`. Ignore that one for Thread.
3. Give that radio the Thread job. Put your serial number in place of the example:

   ```sh
   sudo iot-hub-radio-assign E1A2B3C4D5F6A7B8 thread
   ```

   The command checks that the radio is plugged in and is not already your Zigbee radio. Then it makes it the Thread radio, and Thread starts. The Pi remembers the radio by its serial number, so this survives restarts and moving it to another USB port.
4. In **Kilo Hub**, select **Thread** in the left menu. The page says **Thread radio found.**

That is where Kilo Hub's part ends: the Thread page tells you whether the Pi has a working Thread radio. Kilo Hub itself has no page for adding Matter devices.

If no Thread radio is plugged in, the Thread page and the Thread card on the Dashboard both say that **Thread needs its own radio**.

<figure><img src="../../.gitbook/assets/kilo-hub-thread-no-radio.jpg" alt="Kilo Hub Thread page explaining that Thread needs its own radio"><figcaption><p>Without a Thread radio, the page explains that Thread and Zigbee need separate radios.</p></figcaption></figure>

On Windows and Mac, Kilo Hub cannot use USB radios, so Thread only runs on a Raspberry Pi.

## How do I keep the Zigbee and Thread dongles apart?

* Put a label on each one. They often look the same, and a Zigbee dongle plugged in where you expected the Thread radio is the most common reason the Thread page finds no radio.
* Put each radio on a short USB extension cable, a little apart from each other and from the machine's Wi-Fi.

Next: [Why Isn't My Raspberry Pi Hub Working?](raspberry-pi/troubleshooting.md)
