---
description: Download the Kilo Hub installer for Windows, macOS, Linux or a Raspberry Pi and get past the first-open prompt.
---

# How Do I Download and Install Kilo Hub?

Kilo Hub is free to download. Every release is published on one page with an installer for each operating system:

**[Download Kilo Hub — latest release](https://github.com/chirpdepin/raspberry-pi-iot-hub/releases/latest)**

Install it on the machine that will stay at the site, not on a laptop that leaves with the technician: the cameras, the Zigbee network and the gateway run on the machine where Kilo Hub is installed.

## Which installer do I download?

Open the release page, scroll to **Assets**, and pick the file for the machine. The version number is part of every file name.

| Machine | File to download |
|---|---|
| Windows 10 or 11 (64-bit) | `Kilo-Hub-Setup-<version>.exe` |
| Mac with Apple silicon (M1 and later) | `Kilo-Hub-<version>-arm64.dmg` |
| Mac with an Intel processor | `Kilo-Hub-<version>.dmg` |
| Ubuntu or Debian computer | `kilo-hub_<version>_amd64.deb` |
| Raspberry Pi (Ubuntu 64-bit, prepared as in [Raspberry Pi](raspberry-pi/README.md)) | `kilo-hub_<version>_arm64.deb` |
| Any other Linux distribution | `Kilo-Hub-<version>.AppImage` (64-bit PC) or `Kilo-Hub-<version>-arm64.AppImage` (ARM) |

Ignore the `.yml` and `.blockmap` files on the page; they are not installers.

## How do I install Kilo Hub on Windows?

1. Download `Kilo-Hub-Setup-<version>.exe` and open it.
2. If Windows shows **Windows protected your PC**, select **More info**, then **Run anyway**. The installer is not yet code-signed, so Windows SmartScreen asks once.
3. Follow the installer. Kilo Hub opens when it finishes and appears in the Start menu.

Cameras need Docker Desktop. If it is missing, Kilo Hub offers to download and install it the first time you add a camera; approve the administrator prompt when it appears.

## How do I install Kilo Hub on a Mac?

1. Download the `.dmg` for your processor and open it.
2. Drag **Kilo Hub** into **Applications**, then start it from Applications, not from the disk image.
3. The first open is blocked because the build is not yet notarized by Apple. On macOS 15 and later, open **System Settings → Privacy & Security** and select **Open Anyway** next to Kilo Hub. On earlier versions, right-click Kilo Hub in Applications and choose **Open**.
4. When macOS asks whether Kilo Hub may find devices on your local network, select **Allow**. Without it, Kilo Hub cannot find or reach the cameras.

On macOS 13 and later, Kilo Hub sets up its own Docker engine on the Mac (a download of about 400 MB, no password, nothing added to Applications) and leaves any Docker you already use untouched.

## How do I install Kilo Hub on Linux or a Raspberry Pi?

On Ubuntu and Debian, use the `.deb` package. It installs everything Kilo Hub depends on:

```sh
sudo apt install ./kilo-hub_<version>_amd64.deb
```

On a Raspberry Pi, run the [setup script](raspberry-pi/README.md#how-do-i-prepare-the-raspberry-pi-for-kilo-hub) first, then install the `arm64` package. Then start **Kilo Hub** from the applications menu.

On other distributions, use the AppImage:

```sh
chmod +x Kilo-Hub-<version>.AppImage
./Kilo-Hub-<version>.AppImage
```

The AppImage needs `libfuse2` (`libfuse2t64` on Ubuntu 24.04). Install it with your package manager if the AppImage does not start.

When cameras need Docker and it is missing, Kilo Hub installs Docker Engine itself and asks for your password through the system password prompt.

## How do I update Kilo Hub?

Download the newer installer from the [release page](https://github.com/chirpdepin/raspberry-pi-iot-hub/releases/latest) and install it over the existing one, the same way as the first time. Cameras, the Zigbee network and paired devices are kept: they live in Kilo Hub's data folder, not in the program.

## Tips

* Check the version on the **Settings** page before and after an update to confirm the new one is running.
* Next steps: [Raspberry Pi](raspberry-pi/README.md) or [Windows, Mac and Linux](computer.md).
