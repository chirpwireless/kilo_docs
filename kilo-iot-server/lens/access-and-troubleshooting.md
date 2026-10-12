---
description: "Manage access to Kilo Lens, reconnect a camera's Twin with a new token, and diagnose connection or playback failures."
---

# How do I troubleshoot Kilo Lens?

Lens cameras belong to an organization. Managing access through Kilo lets a team remove an employee's platform access without reconfiguring each camera's local installation. Keep local Twin administration credentials separate from users' Kilo accounts.

## What access do I need to use Lens?

Every Lens screen requires **Edit** access to Cameras. A member with only **View** access or **No access** does not get Lens, and opening a Lens address shows **You do not have camera management access for this organization.** Access to related rules, alarms, and devices is controlled separately. If a team member cannot open Lens or select a resource, check their organization and permissions first.

Organization membership and subscription capacity are also relevant when adding a camera. A Twin key identifies one installation; it cannot be used to create duplicate camera identities across organizations.

## How do I reconnect an existing Twin?

1. Open the camera in Lens.
2. Choose **Reconnect Twin** and obtain the new connection token.
3. Open that camera's Twin and select **Settings → Lens Connector**.
4. Select **Enter a new token to re-pair**. Check the **Lens API URL**, enter the new **Connection token**, and select **Save** in the connection section.
5. Confirm the camera returns online and test its live stream.

Keep the original Twin configuration volume so its identity remains the same. Reconnection does not require creating another camera record.

## How do I diagnose a Lens problem?

| Symptom | What to check |
|---|---|
| Docker CLI is not found | Verify Docker installation and the terminal's command path. Reopen the terminal after installation if necessary, then complete [Verify the Docker engine](installing-twin.md#verify-the-docker-engine). |
| Docker engine connection fails | Start the engine or Docker Desktop, confirm the configured Docker connection targets the intended host, and run `docker info`. The CLI-only `docker --version` check is insufficient. Refer to [Docker daemon troubleshooting](https://docs.docker.com/engine/daemon/troubleshoot/). |
| Docker access is denied | Resolve access for the account launching Twin using the instructions for your installation. For standard Linux Engine installations, consult [Docker's post-installation access guidance](https://docs.docker.com/engine/install/linux-postinstall/). Require a successful `docker info` before continuing. |
| All Twins on a host disconnect after sleep or shutdown | Restore the host and Docker engine, then verify the affected containers are running. Keep that host available for continuous camera operation. |
| The initial account form requests **Current password** | Supply the temporary setup password used to initialize this Twin, then create the permanent credential. See [First login and current password](installing-twin.md#first-login-and-current-password). Kilo and camera account passwords are separate. |
| Twin will not start | Supply a first-use username and password, inspect container logs, and check mount permissions. |
| Twin cannot show the camera | Verify power, the camera's local address, RTSP path, credentials, and supported stream settings. |
| Pairing reports an existing key | Find the existing camera and use Reconnect Twin; do not copy another instance's configuration. |
| A camera shows **Waiting for the Twin** or **Pairing window expired** | The one-time token was not entered in time. Open the camera and select **Reconnect Twin** to get a new token, then enter it under **Settings → Lens Connector** in the Twin |
| Adding a camera is refused | Check camera-management access and available organization device capacity. |
| Lens cannot reach the service | Check the platform service connection and whether the camera was created before retrying. |
| Camera is online but video fails | Check the selected video stream, codec settings, and the network path between the browser, cloud, and Twin. |
| No motion readings arrive | Check Motion mode, detector settings, areas, timetable, and external-condition restrictions. |
| Recordings disappear earlier than expected | Inspect both storage-size and recording-age cleanup limits on the camera's **Storage** tab. The age limit also removes cloud backups, and **Limit cloud storage** removes the oldest cloud copies when the cloud size limit is passed. |
| Cloud archive says the camera must be updated | Cloud archive needs Twin 1.1.0 or later. Update the Twin container, then check the camera's storage settings. Until then it records locally. |
| An archived recording plays but will not seek | The storage does not support partial reads. With Walrus, use an aggregator that supports range requests. See [Cloud Archive](cloud-archive.md). |
| A recording is labeled **Unreadable**, **Archive disconnected — key erased**, or **Storage period ended** | **Unreadable** means the upload was damaged and the file cannot be played; it still uses storage space, so record again. **Archive disconnected — key erased** means storage was disconnected and the platform erased its keys. **Storage period ended** means a Walrus paid period is over. See [Cloud Archive](cloud-archive.md). |
| A download stops or fails | **Failed to get download link. Please try again.** means the platform could not prepare the file; retry. **Could not save the file. Check the folder permissions and free disk space, then try again.** points to your computer. **This file is larger than 1 GiB. Download it in Chrome or Edge.** needs a different browser. **Click Download again to choose where to save it.** means the save dialog expired; select **Download** again. For a file above 1 GiB the same toast starts with **This file is larger than 1 GiB.** Select **Cancel download** to stop a running download |
| The player says **Playback unavailable. Storage connector could not provide a stream reference.** or **Storage is not responding. Try again.** | Check the connector with **Verify** on the **Storage connectors** page, confirm its credentials, then reload the recording |
| **This recording could not be loaded. Reload the page and try again.** | Reload the page. If it persists, contact support |
| **This browser can't play this recording. Download it instead.** | Use **Download** and open the MP4 file in a local player |
| An export stays on **Preparing your download package…** | Select **Dismiss** and wait; large packages take longer. If it ends with **Export failed. Please try again.**, export fewer recordings at a time |
| A camera is **Kept on the camera** instead of uploading | Read the line under the label: update Twin for **Update the camera to enable the cloud archive.**; use **Resend** on the key dialog for key problems; fix credentials for **The storage did not accept the upload.** See [Cloud Archive](cloud-archive.md) |
| A storage connector shows **Error** or **Disconnected** | Open the **Details** column for the reason, correct the settings with **Edit**, and select **Verify**. For **Disconnected** use **Reconnect**. See [Storage Connectors](storage-connectors.md) |
| **Disconnect storage** names cameras that still write to it | Open each camera's **Storage** tab and set **Backup to** to another connector or **None (local only)**, then disconnect |
| **Save test clip** is grayed out | Switch on **Enable recording** and set **When to record** to **Motion** |

For **local Twin viewing**, a WebRTC initialization failure causes a switch to SD only if the source exposes an SD stream. Otherwise, Twin reports the stream as unavailable. This recovery behavior belongs to Twin's local dashboard and does not describe the cloud Lens player. Verify camera reachability and source configuration if playback remains unavailable; selecting another viewing mode does not repair a disconnected source.

Keep camera passwords, Twin login credentials, and Lens tokens out of screenshots and support messages. Share the error wording and relevant connection state when requesting help.
