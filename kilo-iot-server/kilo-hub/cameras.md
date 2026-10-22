---
description: "Find the IP cameras on your site's network with Kilo Hub and start a recorder for each one, ready for Kilo Lens."
---

# How Do I Add IP Cameras with Kilo Hub?

An IP camera is a camera that connects to your network, by cable or Wi-Fi, instead of to a TV or a video recorder. To watch one in [Kilo Lens](../lens/README.md), the part of Kilo where you see your cameras, something at the site has to pick up the camera's video and record it. That something is [Twin](../lens/installing-twin.md): a small recording program, one per camera, that runs on the hub and connects the camera to Kilo Lens. Kilo Hub finds your cameras and starts a Twin for each one.

## Why use Kilo Hub to add cameras?

Each Twin runs in Docker, a free program that keeps each recorder in its own sealed-off space on the computer. Set up by hand, every camera needs its own Docker setup, typed into a terminal, with its own name, storage and network port. A site with fifteen cameras needs fifteen of them.

Kilo Hub does this for you. It installs Docker if the machine doesn't have it, starts a recorder for each camera, and shows all your cameras in one list.

## How do I find cameras on my network?

1. In **Kilo Hub**, select **Cameras** in the left menu.
2. Select **Scan for cameras**. Kilo Hub searches your local network, which takes about twenty seconds.
3. The cameras it finds appear under **Found on your network**, with their name and address.

<figure><img src="../../.gitbook/assets/kilo-hub-cameras-scan.jpg" alt="Kilo Hub Cameras page listing a camera found on the network with a Set up button"><figcaption><p>A scan lists the cameras that announce themselves on the local network.</p></figcaption></figure>

The scan only finds cameras that announce themselves on the network. In the camera's own settings this is usually called ONVIF discovery, and many cameras have it switched off. The camera also has to be on the same network as the hub. If your camera isn't listed, add it with **Add camera** (see below).

## How do I set up a camera the scan found?

1. Select **Set up** next to the camera. Kilo Hub shows its progress in three steps: **Docker**, **Camera software** and **Your camera**. The first camera downloads the camera software once. Every camera after it is ready in seconds.
2. When you see **Your camera is ready.**, write down the sign-in details shown with it.
3. Select **Open camera**. The camera's Twin page opens in your web browser (on a Raspberry Pi, in Firefox).
4. Sign in with the username and password Kilo Hub showed you. The Twin then asks you to choose your own password, and the details from Kilo Hub stop working.
5. Carry on in the Twin: enter the camera's stream address and pair it with Kilo Lens, as described in [Connecting a Camera](../lens/connecting-a-camera.md). The stream address is the network address of the camera's video, usually starting with `rtsp://`. [RTSP Camera URLs](../lens/rtsp-camera-urls.md) lists it for common camera brands.

<figure><img src="../../.gitbook/assets/kilo-hub-camera-ready.jpg" alt="Kilo Hub showing Your camera is ready with first sign-in details and an Open camera button"><figcaption><p>A new camera shows its first sign-in details and an Open camera button.</p></figcaption></figure>

Save the password you choose in your team's password manager. Kilo Hub does not keep it.

## How do I add a camera the scan doesn't find?

1. Select **Add camera**. Kilo Hub sets up a new camera right away and gives it a numbered name, such as **Camera 2**.
2. You see **Open your new camera and choose which camera it records.** with the sign-in details.
3. Select **Open camera**, sign in, and enter the camera's stream address in the Twin (the address of its video, usually starting with `rtsp://`). Until you do, the **Address** column says **Set in camera setup**. [RTSP Camera URLs](../lens/rtsp-camera-urls.md) lists the stream addresses for common camera brands.

<figure><img src="../../.gitbook/assets/kilo-hub-camera-add.jpg" alt="Kilo Hub camera list with a new Camera 2 whose address is set in camera setup"><figcaption><p>A camera added by hand gets its stream address in the camera's own setup page.</p></figcaption></figure>

## What if Docker is not installed?

When Docker is missing or stopped, Kilo Hub explains what it will do and offers one action, depending on the situation: **Install Docker and add camera**, **Start Docker and add camera** or **Fix permissions and add camera**. Then it finishes the camera by itself.

* **Windows:** Kilo Hub downloads and installs Docker Desktop. Approve the administrator prompt. The computer may restart, and Kilo Hub opens again afterwards to finish the camera.
* **Mac:** Kilo Hub sets up its own Docker (about 400 MB). There is no password to type and nothing is added to Applications.
* **Linux and Raspberry Pi:** Kilo Hub installs Docker and asks for your password.

## How do I manage or remove a camera?

Each camera under **Your cameras** has three actions:

* **Open camera** opens the camera's Twin page in your browser.
* **Sign-in details** shows the first sign-in details again. They only work until you choose your own password in the Twin. After that, use your own password.
* **Remove** asks what to do with the recordings. **Remove, keep recordings** stops the camera and keeps its recorded video on the machine. **Remove and delete recordings** deletes the video too.

## How many cameras can Kilo Hub record?

That depends on the machine Kilo Hub runs on. A [Raspberry Pi](raspberry-pi/README.md) 4 records about six or seven cameras alongside its other work. A [computer](computer.md) records as many as its processor, memory and network allow, so a site with many cameras runs Kilo Hub on a PC or a small server.

**Processor load** and **Memory used** on the Dashboard show how much room is left. Check them before you add another camera.

Next: [How Do I Pair Zigbee Devices with Kilo Hub?](zigbee.md)
