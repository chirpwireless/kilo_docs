---
description: "Every tab and setting on a Kilo Lens camera page: Details, Recording, Recording Area, and Storage, including cleanup limits and cloud backup."
---

# Camera Detail Page: Every Tab Explained

Open **Cameras** in the Lens menu and select a camera's name to open its detail page. This is where you check a camera's health, decide when it records, draw the area that triggers recording, and choose where recordings are kept. Changes are saved in Lens and sent to the camera's Twin.

<figure><img src="../../.gitbook/assets/kilo-lens-camera-details.jpg" alt="The Details tab of a camera page with the camera preview, Media capabilities, Lens connection, Device details, Device specs, and Storage policy panels"><figcaption><p>The Details tab. The Twin key and device ID in the Lens connection panel are blurred in this screenshot; they identify a real installation and you should not share them.</p></figcaption></figure>

## What does the Details tab show?

The tab opens with a large picture area and a set of information panels.

- **Preview** and **Live** switch the picture between a regular snapshot and a live stream. A camera that is offline shows **Camera is offline**.
- The pencil beside **Camera detail** renames the camera.
- **Media capabilities** states whether **Live audio** and **Talkback** are available for this camera.
- **Lens connection** shows the **Device ID**, **Name**, **Twin key**, and **Pairing** state. **Reconnect Twin** generates a new one-time token if the Twin lost its pairing. See [Managing Cameras](managing-cameras.md).
- **Device details** lists **Status**, **Uptime**, **Last Twin activity**, **Stream type**, and whether an **SD** and **HD** stream are **available**.
- **Device specs** lists the Twin's **Version**, **Hostname**, **Architecture**, **Memory**, **Camera type**, **IP addresses**, and **MAC addresses**. Check **Version** when you want cloud archive, which needs Twin 1.1.0 or later.
- **Storage policy** shows a badge such as **Local only** and a **Twin sync status**. A **Local override** status means the Twin is using settings it holds locally, not the policy configured in Lens.

## How do I decide when a camera records?

Open the **Recording** tab.

<figure><img src="../../.gitbook/assets/kilo-lens-camera-recording.jpg" alt="The Recording tab with Enable recording, When to record set to Motion, clip length and sensitivity fields, Fragmented recordings, and the Recording schedule section"><figcaption><p>The Recording tab. Recording is switched off for this demo camera.</p></figcaption></figure>

| Control | What it does |
|---|---|
| **Enable recording** | Turns recording on. When it is off, live view still works but the feed is not recorded |
| **When to record** | **Motion** records when movement is detected in your recording area. **Continuous** records all the time |
| **Maximum clip length (seconds)** | Caps one clip. Continued movement starts another clip |
| **Record before movement (seconds)** | Includes video from just before the trigger, so you see what led to the event |
| **Keep recording after movement (seconds)** | Keeps recording after movement stops, to capture the aftermath |
| **Motion sensitivity** | Counts changed pixels. Lower numbers detect smaller changes. About 150 is balanced |
| **Fragmented recordings** | Saves a streaming-friendly file format. Leave it off unless you need HLS playback. When on, **Fragment duration (seconds)** sets the length of each segment |
| **Recording schedule: Timezone** | The time zone the schedule follows, for example `Europe/Berlin` |
| **Recording schedule: Use schedule** | When on, a weekly timetable appears with two start and end times per weekday, so recording happens only inside those windows |
| **External recording check URL** | Before recording, Twin sends a POST to this address. A 200 response allows recording; anything else blocks it |
| **Save test clip** | Records a short clip immediately, without waiting for motion, so you can test your setup |
| **Save** | Saves the settings in Lens and sends them to the camera |

A green message confirms **Recording settings saved and sent to the camera**. If the camera is offline you see **Saved in Lens. Send to camera failed. Try again.** The settings are kept, and you can retry when the Twin is back. [Local Recordings](local-recordings.md) explains these same settings from the Twin side.

## How do I limit recording to the area that matters?

Open the **Recording Area** tab.

<figure><img src="../../.gitbook/assets/kilo-lens-camera-recording-area.jpg" alt="The Recording Area tab with the message that no snapshot is available because the camera must be online to edit zones"><figcaption><p>The Recording Area tab for an offline camera. Zones can be drawn only while the camera is online and a snapshot is available.</p></figcaption></figure>

The tab shows a snapshot of the camera. Draw one or more areas on it; movement outside them is ignored and does not start a recording. Saved clips still show the full camera picture. Select **Save** to apply the areas. If the camera is offline the tab says **No snapshot available. Camera must be online to edit zones.** See [Motion Zones](motion-zones.md) for how areas also drive motion readings for rules.

## Where do recordings get saved?

Open the **Storage** tab. It has three sections and two buttons.

<figure><img src="../../.gitbook/assets/kilo-lens-camera-storage.jpg" alt="The Storage tab showing the Local storage section with disk usage, Saving clips to, Writable, Recording folder override and Test on Twin, followed by Automatic cleanup"><figcaption><p>The top of the Storage tab: where this camera's Twin keeps clips on its own disk.</p></figcaption></figure>

**Local storage** describes the Twin's own disk.

- **Local disk usage** shows used and total space with a bar, and the percentage used and free.
- **Saving clips to** and **Writable** show the folder in use and whether the Twin can write to it.
- **Recording folder override** is an advanced field for a different folder. Leave it empty to use the default. **Test on Twin** checks that the folder you entered works.

**Automatic cleanup** removes the oldest recordings so the disk does not fill.

- **Limit by total size** with **Maximum recordings folder size (MB)** deletes the oldest recordings once the folder passes the size.
- **Limit by age** with **Maximum recording age (days)** deletes recordings older than that. This limit applies to **local recordings and cloud backups**, so cloud copies are removed when they pass the age as well.

<figure><img src="../../.gitbook/assets/kilo-lens-camera-storage-cloud-backup.jpg" alt="The lower part of the Storage tab with Automatic cleanup, the Cloud backup section with a Backup to menu set to None (local only), and Save and Send to camera buttons"><figcaption><p>Cleanup limits and the Cloud backup section. No storage connector exists yet in this demo organization, so Backup to offers only None (local only).</p></figcaption></figure>

**Cloud backup** is where you switch on [cloud archive](cloud-archive.md).

- **Backup to** lists **None (local only)** and every storage connector you created. Choose a connector to upload a copy of each clip. If you have none, the tab says **No storage connectors are configured yet. Add one to enable cloud backup.** and offers **Manage storage connectors**.
- **Upload queue folder** is an advanced field for the folder where clips wait for upload. Leave it empty for the default.
- **Delete local clips after upload** removes the local copy once Lens confirms the upload. Leave it off to keep a permanent local backup.
- **Limit cloud storage** with **Maximum cloud storage (MB)** removes the oldest cloud backups for this camera once the size limit is passed. Local recordings are not affected.
- A caption explains that removed cloud backups disappear from Lens immediately, though some providers release the physical space only when their retention period ends. **Uploads are encrypted (managed by Lens)** confirms encryption.

Select **Save** to store the settings in Lens and **Send to camera** to push them to the Twin again if it was offline when you saved.
