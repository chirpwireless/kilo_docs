---
description: Everything to buy for a Raspberry Pi IoT hub — Pi, case, power, Pi HAT, RAK5146 card, antenna, Zigbee dongle, cameras.
---

# What Do I Need to Build a Raspberry Pi IoT Hub?

A Raspberry Pi hub is built from standard parts. The tables below list everything, grouped by what it is for. The LoRaWAN parts and the antenna are available in the [Kilo Electronics store](https://kiloelectronics.com/); the links open the store category, so you see every model currently in stock.

## What does every Raspberry Pi hub need?

| Part | What to buy | Why |
|---|---|---|
| Raspberry Pi | Raspberry Pi 4 Model B (4 GB or 8 GB) or Raspberry Pi 5 (4 GB or more) | Runs Kilo Hub. A Pi 5 records more cameras than a Pi 4 |
| Power supply | The official Raspberry Pi USB-C supply for your model: 15 W (5 V / 3 A) for a Pi 4, 27 W (5 V / 5 A) for a Pi 5 | A weak phone charger makes the Pi reset under load, which looks like random faults |
| microSD card | 32 GB or larger, A2 rated, from a known brand | Holds the operating system and the camera recordings. A card that keeps up with constant writes lasts longer |
| Case | A case with room for a Pi HAT on top, an opening for the antenna connector and some ventilation, ideally a fan | Standard Raspberry Pi cases are too low for a HAT |
| Network cable | Cat 5e or better | Wired Ethernet keeps the gateway and cameras online when Wi-Fi is not |
| For setup | A computer with a microSD card reader; a screen with an HDMI cable (micro-HDMI on the Pi), a USB keyboard and mouse | Writing the operating system, and using Kilo Hub on the Pi |

Raspberry Pi boards, power supplies and cases are sold by any Raspberry Pi reseller.

## What do I need for the LoRaWAN gateway?

| Part | What to buy | Where |
|---|---|---|
| Pi HAT | RAKwireless RAK2287/RAK5146 Pi HAT — the adapter that carries the concentrator card on the Pi's 40-pin header | [Raspberry Pi accessories](https://kiloelectronics.com/en/product-category/iothardware/raspberry-pi-en/) |
| Concentrator card | RAKwireless RAK5146 mPCIe card, **SPI** version, for your region's band (868 MHz in Europe, 915 MHz in North America and Australia). Optional GPS variant | [RF modules](https://kiloelectronics.com/en/product-category/modules/rfmodules/) |
| Antenna | A LoRa antenna for the same band, with an SMA or RP-SMA connector | [Antennas](https://kiloelectronics.com/en/product-category/iothardware/antennas/) |
| Antenna cable | An iPEX (MHF4)-to-SMA pigtail, to bring the card's antenna connector out through the case | [Cables](https://kiloelectronics.com/en/product-category/iothardware/cables/) |

The RF modules category also has a **RAK5146 Pi HAT kit**: the HAT and the card together, which saves matching them yourself.

<figure><img src="../../../.gitbook/assets/kilo-hub-rak-pi-hat.png" alt="RAKwireless RAK2287/RAK5146 Pi HAT, an adapter board with a 40-pin header and an mPCIe slot"><figcaption><p>The RAKwireless Pi HAT sits on the Raspberry Pi and holds the concentrator card.</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/kilo-hub-rak5146-card.png" alt="RAKwireless RAK5146 SPI concentrator card in mPCIe format with a LoRa and a GPS antenna connector"><figcaption><p>The RAK5146 concentrator card. The connector marked GPS is for the optional GPS antenna; the other one is for the LoRa antenna.</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/kilo-hub-rak5146-pi-hat-kit.png" alt="RAK5146 Pi HAT kit with the concentrator card next to the HAT"><figcaption><p>The RAK5146 Pi HAT kit: card and HAT together.</p></figcaption></figure>

{% hint style="warning" %}
Buy the card and the antenna for the band used in the country where the hub will run. The band cannot be changed later; everything else about the region is set in Kilo when you register the gateway.
{% endhint %}

## What do I need for Zigbee and Thread?

| Part | What to buy | Why |
|---|---|---|
| Zigbee coordinator | A USB Zigbee dongle Kilo Hub recognizes, for example SONOFF Zigbee Dongle Plus MG24 or ZBDongle-E/P, SMLIGHT SLZB-06/07, Home Assistant SkyConnect or Connect ZBT-1, dresden elektronik ConBee | Runs the Zigbee network. The full list is on the [Zigbee](../zigbee.md#which-zigbee-coordinators-does-kilo-hub-recognize) page |
| Thread radio | A second USB radio running OpenThread RCP firmware, for example a Nordic nRF52840 dongle | Thread needs its own radio; one dongle cannot run Zigbee and Thread at the same time |
| USB extension cables | Two short USB extension cables | Moves the radios away from the Pi and its USB 3 ports, which disturb 2.4 GHz |

## What do I need for cameras?

| Part | What to buy | Where |
|---|---|---|
| IP cameras | Cameras that support ONVIF and RTSP, which most current IP cameras do. About six or seven on a Raspberry Pi 4; for more, run Kilo Hub on a computer | [Surveillance](https://kiloelectronics.com/en/product-category/iothardware/surveillance/) |
| Power for the cameras | A PoE switch, or a PoE injector per camera, for cameras powered over the network cable | [Accessories](https://kiloelectronics.com/en/product-category/iothardware/accessories/) |

## Tips

* Starting with one site? Buy the core parts, the LoRaWAN parts and one Zigbee dongle. Cameras and Thread can be added later without rebuilding anything.
* Keep the antenna's box: it states the band, which you need when registering the gateway in Kilo.
* Next: [How Do I Assemble a Raspberry Pi LoRaWAN Hub?](hardware.md)
