---
description: Turn a Raspberry Pi with a RAK5146 concentrator into a LoRaWAN gateway on Kilo IoT, registered from Kilo Hub.
---

# How Do I Build a Raspberry Pi LoRaWAN Gateway?

A Raspberry Pi with a LoRaWAN concentrator card on a Pi HAT is a full LoRaWAN gateway. Kilo Hub reads the gateway's identity from the card, registers the gateway with Kilo, installs its security certificates and starts it, so the Pi joins Kilo's built-in LoRaWAN Network Server without anyone typing an EUI or a server address.

## Why build the gateway on the hub instead of buying one?

A site that already needs a box for cameras or Zigbee gets LoRaWAN coverage from the same device for the cost of a concentrator card and an antenna. There is one device to power, mount, network and update instead of two, and the gateway's status sits on the same Dashboard as everything else at the site.

The gateway connects to Kilo over an encrypted **Basics Station** connection, the same secure protocol Kilo requires from every LoRaWAN gateway. See [LoRaWAN Gateways](../../gateways/lorawan-gateways/README.md) for how Kilo handles gateways in general.

## What do I need before I start?

* A Raspberry Pi assembled as described in [Raspberry Pi](README.md#how-do-i-assemble-the-raspberry-pi-hub): Pi HAT with an mPCIe slot, RAK5146 concentrator card and a LoRa antenna for your region.
* Kilo Hub installed on the Pi ([Download and Install](../download-and-install.md)).
* The LoRaWAN region of the installation site, for example **EU868** in Europe or **US915** in North America.
* An internet connection on the Pi.

## How do I register the Raspberry Pi as a gateway?

1. Open **Kilo Hub** and select **LoRaWAN Gateway** in the left menu.
2. Kilo Hub checks the concentrator card. When the card answers, the **Gateway** table shows its **Gateway EUI** (read from the chip), the **Radio** model and the **Connection** (SPI). You never type the EUI.
3. Check the **Gateway name**. It is filled in for you; change it to something your team recognizes, such as the site and building.
4. Check the **Region**. Kilo Hub picks it from the computer's language and country settings; select the band used at the installation site from the list (EU868, US915, AU915, AS923, AS923-2, EU433, IN865, KR920, RU864, CN470, CN779, ISM2400).
5. Select **Register with Kilo**. Kilo Hub works through four steps and shows each one:
   * **Creating your gateway in Kilo…**
   * **Downloading security certificates…**
   * **Installing certificates…**
   * **Starting the gateway…**
6. When the screen shows **Your gateway is connected to Kilo.**, the gateway is online. It appears in Kilo under **Gateways** with the same name and EUI.

If a step fails, Kilo Hub stops there and shows the reason, with the technical details underneath for support. Nothing is half-installed: the gateway only starts once all of its certificates are in place.

## Why is Register with Kilo disabled?

On a computer, or on a Raspberry Pi without the card, the page explains what is missing and **Register with Kilo** stays disabled.

<figure><img src="../../../.gitbook/assets/kilo-hub-lorawan-no-radio.jpg" alt="Kilo Hub LoRaWAN Gateway page saying a concentrator such as a RAK5146 on a Raspberry Pi HAT is needed"><figcaption><p>Without a concentrator card, the LoRaWAN Gateway page names the hardware it needs.</p></figcaption></figure>

If the card is fitted but not found, power the Pi off, reseat the card in the HAT and the HAT on the GPIO header, and start again.

## Tips

* Mount the antenna as high as practical and outside metal cabinets. Range depends far more on antenna placement than on the gateway itself.
* Once the gateway is online, monitor it from Kilo: [LoRaWAN Gateway Monitoring](../../gateways/lorawan-gateways/lorawan-gateway-monitoring.md).
* Add your LoRaWAN sensors in Kilo as usual: [LoRaWAN Devices](../../devices/lorawan-devices.md). The Pi forwards their uplinks like any other gateway.
