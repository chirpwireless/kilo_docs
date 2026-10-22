---
description: "Where to download Kilo Hub, which file to pick for Windows, Mac, Linux or a Raspberry Pi, and how to install it."
---

# How Do I Download and Install Kilo Hub?

Kilo Hub is free. Every version is published on one page, with a separate installer for each kind of computer:

**[Download the latest Kilo Hub](https://github.com/chirpdepin/raspberry-pi-iot-hub/releases/latest)**

Install it on the machine that will stay at the site, not on a laptop you take home. The cameras, the Zigbee network and the gateway run on the machine where Kilo Hub is installed, so they stop when that machine leaves.

**Setting up a Raspberry Pi?** Don't download anything yet. The Pi needs a few preparation steps first, and the [Raspberry Pi guide](raspberry-pi/README.md) includes installing Kilo Hub at the right moment.

## Which Kilo Hub file do I download?

Open the release page and scroll down to **Assets**. Pick the file for your machine. Each file name includes the version number.

| Your machine | File to download |
|---|---|
| Windows 10 or 11 (64-bit) | `Kilo-Hub-Setup-<version>.exe` |
| Mac with Apple silicon (M1 and later) | `Kilo-Hub-<version>-arm64.dmg` |
| Mac with an Intel processor | `Kilo-Hub-<version>.dmg` |
| Ubuntu or Debian computer | `kilo-hub_<version>_amd64.deb` |
| Raspberry Pi (prepared as in [How Do I Set Up the Raspberry Pi for Kilo Hub?](raspberry-pi/setup.md)) | `kilo-hub_<version>_arm64.deb` |
| Any other Linux | `Kilo-Hub-<version>.AppImage` (64-bit PC) or `Kilo-Hub-<version>-arm64.AppImage` (ARM) |

You can ignore the `.yml` and `.blockmap` files on that page. They are not installers.

## How do I install Kilo Hub on Windows?

1. Download `Kilo-Hub-Setup-<version>.exe` and open it.
2. Windows may show **Windows protected your PC**. Windows doesn't recognize our app's publisher yet, so it asks you to confirm. Select **More info**, then **Run anyway**.
3. Follow the installer. When it finishes, Kilo Hub opens, and you find it in the Start menu from then on.

To record cameras, Windows needs Docker Desktop. You don't have to install it yourself: the first time you add a camera, Kilo Hub offers to download and install it. Approve the administrator prompt when it appears.

## How do I install Kilo Hub on a Mac?

1. Download the `.dmg` file for your Mac's processor and open it.
2. Drag **Kilo Hub** into **Applications**. Start it from Applications, not from the window that opened.
3. The first time, macOS doesn't recognize our app's publisher yet, so it asks you to confirm. On macOS 15 and later, open **System Settings → Privacy & Security** and select **Open Anyway** next to Kilo Hub. On older versions, right-click Kilo Hub in Applications and choose **Open**.
4. macOS asks whether Kilo Hub may find devices on your local network. Select **Allow**. Without this, Kilo Hub cannot find or reach your cameras.

On macOS 13 and later, Kilo Hub sets up its own copy of Docker for the cameras. It downloads about 400 MB. There is no password to type, nothing is added to Applications, and any Docker you already use is left alone.

## How do I install Kilo Hub on Linux?

On Ubuntu and Debian, install the `.deb` file. It brings everything Kilo Hub needs with it:

```sh
sudo apt install ./kilo-hub_<version>_amd64.deb
```

Then start **Kilo Hub** from the computer's applications menu. (On a Raspberry Pi set up with the Pi guide, you don't need to: Kilo Hub opens by itself when the Pi starts.)

On other Linux systems, use the AppImage:

```sh
chmod +x Kilo-Hub-<version>.AppImage
./Kilo-Hub-<version>.AppImage
```

If the AppImage does not start, install `libfuse2` with your package manager (on Ubuntu 24.04 it is called `libfuse2t64`).

When you add your first camera and Docker is missing, Kilo Hub installs it for you and asks for your password.

## How do I update Kilo Hub?

Download the newer installer from the [release page](https://github.com/chirpdepin/raspberry-pi-iot-hub/releases/latest) and install it over the old one, the same way as the first time. Your cameras, your Zigbee network and your paired devices stay as they are. They are stored in Kilo Hub's data folder, not in the program itself.

To check which version is running, open **Settings** in Kilo Hub before and after the update.

Next: [How Do I Turn a Raspberry Pi into an IoT Hub?](raspberry-pi/README.md) If you installed Kilo Hub on a computer, go to [How Do I Run Kilo Hub on Windows, Mac or Linux?](computer.md)
