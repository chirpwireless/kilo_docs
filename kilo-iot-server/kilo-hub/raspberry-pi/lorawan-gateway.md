---
description: Turn a Raspberry Pi with a RAK5146 concentrator into a LoRaWAN gateway on Kilo IoT, set up from Kilo Hub.
---

# How Do I Build a Raspberry Pi LoRaWAN Gateway?

A Raspberry Pi with a LoRaWAN concentrator card on a Pi HAT is a full LoRaWAN gateway. Kilo Hub reads the gateway ID from the card, sends you to Kilo to register it, and installs the certificates Kilo gives you, so the Pi joins Kilo's built-in LoRaWAN Network Server without anyone editing configuration files.

## Why build the gateway on the hub instead of buying one?

A site that already needs a box for cameras or Zigbee gets LoRaWAN coverage from the same device for the cost of a concentrator card and an antenna. There is one device to power, mount, network and update instead of two.

The gateway connects to Kilo over an encrypted **Basics Station** connection, the same secure protocol Kilo requires from every LoRaWAN gateway. See [LoRaWAN Gateways](../../gateways/lorawan-gateways/README.md) for how Kilo handles gateways in general.

## What do I need before I start?

* A Raspberry Pi set up as described in [Raspberry Pi](README.md): assembled with the RAK5146 card and a LoRa antenna, prepared with the setup script, and running Kilo Hub.
* A Kilo account with access to **Gateways**.
* The LoRaWAN region of the installation site, for example **EU868** in Europe or **US915** in North America.
* An internet connection on the Pi.

## How do I set up the Raspberry Pi as a gateway?

1. Open **Kilo Hub** on the Pi and select **LoRaWAN Gateway** in the left menu. The page shows the **Gateway ID**, read from the concentrator chip, and the radio it found. Kilo calls this ID the Gateway EUI.
2. Select **Copy** next to the Gateway ID, then **Open Kilo**. Kilo opens in the browser.
3. In Kilo, open **Gateways**, select **Add gateway**, then **3rd Party Gateway**.
4. Enter a name, choose the region the gateway is installed in, and paste the Gateway ID into **Gateway EUI**. Select **Next**.
5. Copy the **LNS Address** and download **certs.zip**. Unzip it: it holds the trust certificate (`tc.trust`), the gateway certificate (`tc.crt`) and the private key (`tc.key`).
6. Back in Kilo Hub, under **Add the files Kilo gave you**, select **Choose file** for **Trust certificate**, **Gateway certificate** and **Private key**, and paste the address into **LNS address**.
7. Select **Save** and approve the password prompt. Kilo Hub checks that the three files belong together before it changes anything, installs them and starts the gateway.
8. The page shows **This gateway is set up and running.** Select **Open Kilo** to watch the gateway come online under **Gateways**.

<figure><img src="../../../.gitbook/assets/kilo-hub-lorawan-gateway-id.jpg" alt="Kilo Hub LoRaWAN Gateway page with the Gateway ID, the registration steps for Kilo and the fields for the certificate files"><figcaption><p>The Gateway ID, the steps to follow in Kilo and the fields for the files Kilo issues.</p></figcaption></figure>

Kilo Hub refuses files that do not belong together, such as certificates from two different downloads or a password-protected key, and says which file to choose again. If installing fails partway, it puts the previous files back, so the gateway is never left with a mixed set.

## How do I know the gateway is connected?

Kilo Hub reports what it can see on the Pi: whether the files are in place and the gateway software is running. Whether the gateway has connected is Kilo's to say. Open the gateway under **Gateways** in Kilo to see its status and traffic; see [LoRaWAN Gateway Monitoring](../../gateways/lorawan-gateways/lorawan-gateway-monitoring.md).

When the gateway software has stopped, the page shows **This gateway is set up but not running.** with a **Start gateway** button.

## Why does the page say there is no LoRaWAN radio?

The LoRaWAN Gateway page needs the concentrator card and the Pi setup script. On a computer, or on a Raspberry Pi that was not prepared with the script, the page names the hardware it needs instead.

<figure><img src="../../../.gitbook/assets/kilo-hub-lorawan-no-radio.jpg" alt="Kilo Hub LoRaWAN Gateway page saying a concentrator such as a RAK5146 on a Raspberry Pi HAT is needed"><figcaption><p>Without a concentrator card, the LoRaWAN Gateway page names the hardware it needs.</p></figcaption></figure>

If the card is fitted but not found, power the Pi off, reseat the card in the HAT and the HAT on the GPIO header, and run the setup script again: it checks that the card answers.

## Tips

* Mount the antenna as high as practical and outside metal cabinets. Range depends far more on antenna placement than on the gateway itself.
* Keep `certs.zip` private. It identifies the gateway; if it leaks, regenerate the certificates in Kilo and add the new files in Kilo Hub.
* Add your LoRaWAN sensors in Kilo as usual: [LoRaWAN Devices](../../devices/lorawan-devices.md). The Pi forwards their uplinks like any other gateway.
