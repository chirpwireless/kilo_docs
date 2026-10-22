---
description: "Set up a Raspberry Pi for Kilo Hub: put Ubuntu on the card, run one setup command and install the Kilo Hub app."
---

# How Do I Set Up the Raspberry Pi for Kilo Hub?

Setting up the Pi has three parts. First you put the operating system on the memory card. Then you run one setup command on the Pi. Then you install the Kilo Hub app. Plan 30 to 45 minutes, most of it waiting for downloads.

The steps are the same whether or not you fitted a LoRaWAN card. The setup command checks for the card by itself.

## How do I put Ubuntu on the Raspberry Pi's microSD card?

The Pi runs **Ubuntu Server 24.04 LTS or 26.04 LTS (64-bit)**. Ubuntu is the operating system, like Windows on a PC. You put it on the microSD card from your own computer.

1. On your computer, install **Raspberry Pi Imager** from [raspberrypi.com/software](https://www.raspberrypi.com/software/). Insert the microSD card.
2. In Raspberry Pi Imager, choose:
   * **Device:** your Raspberry Pi model (Raspberry Pi 4 or Raspberry Pi 5).
   * **Operating system:** **Other general-purpose OS → Ubuntu → Ubuntu Server 24.04 LTS (64-bit)**, or 26.04 LTS when it is listed.
   * **Storage:** the microSD card.
3. When Imager offers to customize the settings, say yes and fill in:
   * a **hostname**, the Pi's name on the network, for example `kilo-hub`;
   * a **username and password**. You need them to sign in, and Kilo Hub asks for this password when it changes something on the Pi;
   * your **Wi-Fi** network, if the Pi will not use a network cable;
   * your **time zone and keyboard layout**;
   * under **Services**, turn on **SSH** if you want to type the next steps from your own computer. SSH lets you type commands on the Pi from another computer over the network.
4. Write the card. Put it in the Pi (the network cable, screen and keyboard are already connected from the assembly guide), then connect the power.

The first start takes a few minutes while Ubuntu finishes setting itself up.

## Where do I type commands on the Raspberry Pi?

Ubuntu Server has no desktop at first. The Pi's screen shows only text, and it asks for your login. Type the username, press Enter, type the password (nothing appears while you type it) and press Enter again.

You are now in the terminal. You see a line that ends in `$`, and that is where you type. For every command on this page, type the line exactly as shown and press Enter. Wait until the `$` line comes back before you type the next one. When a command starts with `sudo`, it asks for your password the first time.

To type the commands from your own computer instead, open a terminal there (Terminal on a Mac or Linux, PowerShell on Windows) and connect with SSH:

```sh
ssh <username>@kilo-hub.local
```

Replace `<username>` with your username and `kilo-hub` with the hostname you chose. Answer `yes` the first time, then enter your password. From then on you type on the Pi, the same as on its own screen.

## How do I run the setup script on the Raspberry Pi? {#how-do-i-prepare-the-pi-for-the-lorawan-card-and-the-radios}

The setup script prepares the Pi for everything Kilo Hub can do. In the terminal, type these three lines, one at a time. The first two download the script, and the third runs it:

```sh
git clone https://github.com/chirpdepin/raspberry-pi-iot-hub.git
cd raspberry-pi-iot-hub
sudo ./scripts/install-ubuntu.sh --with-desktop
```

It takes 10 to 20 minutes. While it runs, it:

* updates Ubuntu;
* turns on the connection the LoRaWAN card uses;
* looks for a LoRaWAN card. If it finds one, it reads the card's gateway ID and installs the gateway software. If it finds none, it says so and skips the gateway part;
* installs Docker, which the cameras need;
* installs support for Zigbee and Thread radios;
* with `--with-desktop`, gives the Pi a screen of its own for Kilo Hub, plus a web browser (Firefox) and an archive tool for opening zip files. Kilo Hub opens on that screen every time the Pi starts.

### What does the setup script say when it finishes?

**With a LoRaWAN card**, it prints the gateway ID next to **Concentrator** and says the gateway is installed but not registered yet. That is expected. You register it later, from Kilo Hub.

**Without a LoRaWAN card**, it says the Pi is ready for cameras, Zigbee and Thread, and that no LoRaWAN card was found, so the Pi is not set up as a LoRaWAN gateway. If you don't want a gateway, that is all fine, and you carry on.

**If it says a reboot is required**, run `sudo reboot`, sign in again and run the same command once more:

```sh
cd raspberry-pi-iot-hub
sudo ./scripts/install-ubuntu.sh --with-desktop
```

This is normal on a new Pi. Some changes, such as turning on the card's connection, only take effect after a restart, so the script may not see a fitted card the first time. Running it again is safe: it skips what is already done.

**If you fitted a card and the script still says no LoRaWAN card was found** after the restart, see [Why Isn't My Raspberry Pi Hub Working?](troubleshooting.md#what-if-the-setup-script-says-the-concentrator-did-not-answer)

### What if I add a LoRaWAN card later?

Switch off the Pi, fit the card as shown in [How Do I Assemble a Raspberry Pi IoT Hub?](hardware.md), switch it on and run the same setup command again. This time it finds the card and adds the gateway. Your cameras and Zigbee devices stay as they are.

## How do I install Kilo Hub on the Raspberry Pi?

Still in the terminal on the Pi, download the latest Kilo Hub package for the Pi and install it:

```sh
curl -s https://api.github.com/repos/chirpdepin/raspberry-pi-iot-hub/releases/latest \
  | grep -o 'https://[^"]*_arm64\.deb' | head -1 | xargs wget
sudo apt install ./kilo-hub_*_arm64.deb
```

The first command downloads `kilo-hub_<version>_arm64.deb` from the [latest release](https://github.com/chirpdepin/raspberry-pi-iot-hub/releases/latest). You can also download that file in a browser and copy it to the Pi.

Then restart the Pi:

```sh
sudo reboot
```

The restart also gives your user the permissions the setup script added. Kilo Hub needs them to reach the radios.

## What should I see after the restart?

With a screen connected, the Pi signs in by itself and **Kilo Hub** opens full screen on the **Dashboard**:

* **This device** shows the Raspberry Pi, its memory, processors and Docker.
* **LoRaWAN Gateway** says **LoRaWAN radio found. It is not set up yet.** if you fitted a card, or **No LoRaWAN radio on this device.** if you didn't.
* **Zigbee** shows the dongle, if one is plugged in.
* **Cameras** says **No cameras yet.**

<figure><img src="../../../.gitbook/assets/kilo-hub-dashboard.jpg" alt="Kilo Hub Dashboard with the device details and a card for cameras, LoRaWAN, Zigbee and Thread"><figcaption><p>The Dashboard shows the device and one card per capability.</p></figcaption></figure>

Kilo Hub runs on the Pi's own screen. Keep a screen and keyboard handy for when you add a camera or a device. The hub keeps running without them: the gateway, Zigbee and the cameras carry on, and when you need the app again, plug the screen in and restart the Pi. Kilo Hub opens by itself.

## What do I set up next on the Pi?

Set up the things you need, in any order:

1. **LoRaWAN gateway**, if you fitted the card: register the gateway in Kilo and add its certificates in Kilo Hub. See [How Do I Build a Raspberry Pi LoRaWAN Gateway?](lorawan-gateway.md)
2. **Cameras**: find and add the cameras at the site. See [How Do I Add IP Cameras with Kilo Hub?](../cameras.md) The first time, Kilo Hub may say **Docker is installed, but this account is not allowed to use it yet.** Select **Fix permissions** and enter your password.
3. **Zigbee**: start the network and pair devices. See [How Do I Pair Zigbee Devices with Kilo Hub?](../zigbee.md)
4. **Thread**: give the Thread radio its job. See [How Do I Add Thread to Kilo Hub?](../thread.md)

Kilo Hub asks for your password whenever it changes something on the Pi, for example when it starts the gateway, installs certificates or starts Zigbee for the first time. That is the password you set in Raspberry Pi Imager.

To update Kilo Hub later, download the newer `.deb` file and install it the same way. Gateway certificates, the Zigbee network and the cameras are kept.

Next: [How Do I Build a Raspberry Pi LoRaWAN Gateway?](lorawan-gateway.md) No LoRaWAN card? Go straight to [How Do I Add IP Cameras with Kilo Hub?](../cameras.md)
