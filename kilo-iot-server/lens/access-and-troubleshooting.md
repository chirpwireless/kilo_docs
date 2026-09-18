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
| Twin will not start | Supply a first-use username and password, inspect container logs, and check mount permissions. |
| Twin cannot show the camera | Verify power, the camera's local address, RTSP path, credentials, and supported stream settings. |
| Pairing reports an existing key | Find the existing camera and use Reconnect Twin; do not copy another instance's configuration. |
| Adding a camera is refused | Check camera-management access and available organization device capacity. |
| Lens cannot reach the service | Check the platform service connection and whether the camera was created before retrying. |
| Camera is online but video fails | Check the selected video stream, codec settings, and the network path between the browser, cloud, and Twin. |
| No motion readings arrive | Check Motion mode, detector settings, areas, timetable, and external-condition restrictions. |
| Recordings disappear earlier than expected | Inspect both storage-size and recording-age cleanup limits. |

Keep camera passwords, Twin login credentials, and Lens tokens out of screenshots and support messages. Share the error wording and relevant connection state when requesting help.
