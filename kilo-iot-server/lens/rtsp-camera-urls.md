---
description: "Look up RTSP URL formats for major camera brands, choose main or substreams, and connect existing video equipment to Kilo Lens."
---

# RTSP Camera URLs

An **RTSP URL** identifies the video stream that Twin reads from an IP camera. Knowing the manufacturer's URL pattern helps you connect existing equipment across sites, even when the cameras come from different suppliers.

RTSP is the shared protocol; the stream path depends on the manufacturer, model, and firmware. This directory covers common commercial and residential camera brands. Each entry identifies a useful starting format and important variations. Confirm that the particular camera supports RTSP and that the service is enabled.

## Build the address

```text
rtsp://username:password@cameraip:port/path
```

Replace `username` and `password` with the camera's local streaming credentials, `cameraip` with its address reachable from the Twin host, and `port` with its configured RTSP port. These are camera credentials, separate from your Twin login and Lens pairing token. The examples use port `554`; replace it when the camera uses a different port.

A **main stream** normally provides the higher-resolution picture. A **substream** provides a lighter alternative that can reduce processing and bandwidth requirements. Their exact quality depends on the camera's encoding settings.

## Find your camera brand

[Tapo](#tapo) · [Hikvision / HiLook](#hikvision-and-hilook) · [Dahua](#dahua) · [Axis](#axis) · [Reolink](#reolink) · [Amcrest](#amcrest) · [Avigilon](#avigilon) · [Bosch](#bosch) · [EZVIZ](#ezviz) · [Foscam](#foscam) · [Hanwha / Wisenet](#hanwha-vision-and-wisenet) · [i-PRO](#i-pro) · [VIGI](#tp-link-vigi) · [Uniview](#uniview-and-unv) · [VIVOTEK](#vivotek)

## Tapo

For RTSP-capable Tapo cameras:

```text
Main: rtsp://username:password@cameraip:554/stream1
Sub:  rtsp://username:password@cameraip:554/stream2
```

Create a local **Camera Account** in the Tapo app under the camera's **Device Settings → Advanced Settings → Camera Account**. Use those credentials, not the TP-Link cloud account. Battery-powered models often lack RTSP; check the model's support details. Some dual-lens models use `/stream6` and `/stream7` for the second lens. See [TP-Link's RTSP setup guide](https://www.tp-link.com/us/support/faq/2680/).

## Hikvision and HiLook

The channel-one pattern is:

```text
Main: rtsp://username:password@cameraip:554/Streaming/Channels/101
Sub:  rtsp://username:password@cameraip:554/Streaming/Channels/102
```

The final number combines the channel and stream: `101` means channel 1, main stream; `102` means channel 1, substream. A recorder's channel 2 uses `201` and `202`. A standalone camera normally uses channel 1. These paths follow [Hikvision's RTSP examples](https://supportusa.hikvision.com/support/solutions/articles/17000129022-do-you-have-an-example-showing-the-format-for-getting-a-rtsp-stream-from-a-camera-); the HiLook camera used in our Lens setup also streams through `/Streaming/Channels/102`.

Use the device's configured RTSP port. HiLook exposes port settings under **Configuration → Network → Basic Settings → Port** in the [HiLook network camera manual](https://assets.hikvision.com/prd/public/all/doc/m000071288/UD22027B-C_HiLook_Network_Camera_User_Manual_5.5.111_20221223.pdf); labels may differ with firmware.

## Dahua

```text
Main: rtsp://username:password@cameraip:554/cam/realmonitor?channel=1&subtype=0
Sub:  rtsp://username:password@cameraip:554/cam/realmonitor?channel=1&subtype=1
```

`channel` starts at 1. `subtype=0` selects the main stream; `subtype=1` selects the first extra stream. Change the channel when connecting through a recorder. See [Dahua's RTSP reference](https://dahuawiki.com/Remote_Access/RTSP_via_VLC).

## Axis

```text
rtsp://username:password@cameraip:554/axis-media/media.amp
```

Axis uses this default endpoint. For devices with multiple video channels, a parameter such as `?camera=2` selects another channel. Stream profiles and other parameters control the requested video settings; Axis does not use the Tapo `stream1`/`stream2` naming pattern. See [Axis's streaming guide](https://developer.axis.com/video-streaming-and-recording/video-streaming/getting-started/) and [RTSP parameters](https://developer.axis.com/vapix/network-video/video-streaming/).

## Reolink

```text
Main: rtsp://username:password@cameraip:554/Preview_01_main
Sub:  rtsp://username:password@cameraip:554/Preview_01_sub
```

Reolink's current reference uses `Preview_01_main` and `Preview_01_sub` for a standalone camera. Recorder channels use two-digit numbers such as `02`. Check model compatibility and enable RTSP in the device's port settings. See [Reolink's RTSP guide](https://support.reolink.com/articles/900000630706-Introduction-to-RTSP/).

## More camera manufacturers

The following entries extend the reference to other common camera families. These are URL patterns, not a model-by-model Lens certification list. Use the camera’s configured port if it differs from the example.

### Amcrest

```text
rtsp://username:password@cameraip:554/cam/realmonitor?channel=1&subtype=0
```

IP camera example; supported extra streams use `subtype=1`. Recorder paths may instead use `/h264Preview_01_main`. [Manufacturer reference](https://support.amcrest.com/hc/en-us/articles/360059435271-Accessing-Amcrest-Products-Using-RTSP).

### Avigilon

```text
rtsp://username:password@cameraip:554/defaultPrimary?streamType=u
```

Prefer the URI generated on **Compression and Image Rate → RTSP Stream URI**, especially for multisensor cameras. [Manufacturer reference](https://www.avigilon.com/fs/documents/avigilon-camera-web-interface-user-guide-en.pdf).

### Bosch

```text
rtsp://username:password@cameraip:554/?inst=1
```

BVIP devices select encoding stream 2 with `inst=2`; multichannel encoders also use `line`. [Manufacturer reference](https://knowledge.keenfinity-group.com/video-systems/article/how-is-rtsp-usage-supported-with-bosch-vip-devices).

### EZVIZ

```text
rtsp://admin:cameraPassword@cameraip:554/ch1/main
```

Published for C6N/TY1/TY2; RTSP availability is model-specific. See the password note below. [Manufacturer reference](https://m-support.ezviz.com/faq/article/How-to-set-up-C6N-TY1-TY2-as-a-webcam).

### Foscam

```text
rtsp://username:password@cameraip:88/videoMain
```

Use `/videoSub` for the substream. Many models use port `88`; check the configured RTSP port. [Manufacturer reference](https://www.foscam.com/faqs/view.html?id=81).

### Hanwha Vision and Wisenet

```text
rtsp://username:password@cameraip:554/profileN/media.smp
```

Replace `N` with the configured profile number. Profile numbers select configured encodings, not universal main/sub quality. [Manufacturer reference](https://support.hanwhavision.com/hc/en-001/articles/47257361792659-What-are-the-RTSP-URLs-of-Hanwha-Devices).

### i-PRO

```text
rtsp://username:password@cameraip:554/Src/MediaInput/stream_1
```

Current documented H.264/H.265 path; `stream_2` selects stream 2. Older H.264 paths include `/Src/MediaInput/h264/stream_1`. [Manufacturer reference](https://i-pro.com/products_and_solutions/en/media/documentation_file/command-interface-ipro_h265models_ver114pdf).

### TP-Link VIGI

```text
rtsp://username:password@cameraip:554/stream1
```

Use `/stream2` for the substream and the VIGI camera’s local credentials. [Manufacturer reference](https://www.tp-link.com/id/support/faq/3718/).

### Uniview and UNV

```text
rtsp://username:password@cameraip:554/media/video1
```

Common single-camera paths use `/media/video2` for substream and `/media/video3` for a third stream when supported. [Manufacturer reference](https://www.uniview.com/res/202310/26/20231026_1890310_How%20to%20Get%20a%20Uniview%20Camera%27s%20RTSP%20Stream_974039_168459_0.pdf).

### VIVOTEK

```text
rtsp://username:password@cameraip:554/live.sdp
```

Traditional access name; `/live2.sdp` selects stream 2. Newer firmware can use profile URLs; see below. [Manufacturer reference](https://vivotek.zendesk.com/hc/en-001/articles/900005560446--All-cameras-Anystream-compatible-How-to-use-the-Anystream-functionality-in-VIVOTEK-cameras).

### EZVIZ local password

For the documented models, the initial local credential can be the verification code on the camera label. If you change the local connectivity/video encryption password, use that updated password. See [EZVIZ local authentication](https://m-support.ezviz.com/faq/article/How-should-I-set-the-login-password-for-local-connectivity-features-supported).

### VIVOTEK profile URLs

Firmware 2.2002.x.x and later can use this form:

```text
rtsp://username:password@cameraip:554/media2/stream.sdp?profile=profileToken
```

Replace `profileToken` with the actual video profile token from the camera; it is unrelated to a Lens pairing token. Some devices also expose `/live1sN.sdp` access names. Use the name shown by that camera rather than assuming the stream index. See [VIVOTEK’s firmware-specific instructions](https://vivotek.zendesk.com/hc/en-001/articles/4952515434649--All-cameras-2-2002-x-x-and-later-version-How-to-get-RTSP-streaming-with-camera-firmware-version-2-2002-x-x-and-later-version).

## Use the URL in Twin

Open **Settings → Camera Connector** in the camera's Twin and enter the full URL in its stream URL field. Configure the substream separately when available, then save and confirm that Twin receives video. Continue with [Connecting a Camera](connecting-a-camera.md) to pair Twin with Lens.

If the connection fails, check the address from the Twin host's network, the RTSP port, local account, and exact path capitalization. A working camera web login does not prove that RTSP is enabled. For a camera behind a recorder, use the recorder's address, credentials, and correct channel rather than the direct-camera example.

Keep credential-bearing URLs private. Twin reaches the camera locally; connecting it to Lens does not require exposing the camera's RTSP port to the public internet. See [Access and Troubleshooting](access-and-troubleshooting.md) for the rest of the connection checks.
