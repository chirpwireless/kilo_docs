---
description: "Manage Lens access, reconnect a Twin, and diagnose camera connection or playback failures."
---

# Access and Troubleshooting

Lens cameras belong to an organization. Managing access through Kilo lets a team remove an employee's platform access without reconfiguring each camera's local installation. Keep local Twin administration credentials separate from users' Kilo accounts.

## Required access

The current Lens workspace requires permission to manage cameras. Access to related rules, alarms, and devices is controlled separately. If a team member cannot open Lens or select a resource, check their organization and permissions first.

Organization membership and subscription capacity are also relevant when adding a camera. A Twin key identifies one installation; it cannot be used to create duplicate camera identities across organizations.

## Reconnect an existing Twin

1. Open the camera in Lens.
2. Choose **Reconnect Twin** and obtain the new connection token.
3. Open that camera's Twin and select **Settings → Lens Connector**.
4. Select **Enter a new token to re-pair**. Check the **Lens API URL**, enter the new **Connection token**, and select **Save** in the connection section.
5. Confirm the camera returns online and test its live stream.

Keep the original Twin configuration volume so its identity remains the same. Reconnection does not require creating another camera record.

## Diagnose a problem

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
| Adding a camera is refused | Check camera-management access and available organization device capacity. |
| Lens cannot reach the service | Check the platform service connection and whether the camera was created before retrying. |
| Camera is online but video fails | Check the selected video stream, codec settings, and the network path between the browser, cloud, and Twin. |
| No motion readings arrive | Check Motion mode, detector settings, areas, timetable, and external-condition restrictions. |
| Recordings disappear earlier than expected | Inspect both storage-size and recording-age cleanup limits. |

For **local Twin viewing**, a WebRTC initialization failure causes a switch to SD only if the source exposes an SD stream. Otherwise, Twin reports the stream as unavailable. This recovery behavior belongs to Twin's local dashboard and does not describe the cloud Lens player. Verify camera reachability and source configuration if playback remains unavailable; selecting another viewing mode does not repair a disconnected source.

Keep camera passwords, Twin login credentials, and Lens tokens out of screenshots and support messages. Share the error wording and relevant connection state when requesting help.
