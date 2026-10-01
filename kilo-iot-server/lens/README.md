---
description: "Connect existing IP cameras to Kilo for live video, selected motion zones, and camera-driven operational alerts."
---

# Cameras

Open **Cameras** in the main navigation to use **Lens**, Kilo’s camera monitoring product.

**Lens** brings video cameras into Kilo IoT Server alongside devices, sensor readings, rules, and alarms. It gives teams a common place to view compatible cameras and use camera motion as an input to operational workflows.

Existing cameras need not become a separate replacement project. A business with different camera brands in New York, Washington, and London can connect compatible RTSP feeds to the same Kilo organization. Operators gain a shared platform for video and IoT information instead of relying on a different manufacturer's application for each installation.


<figure><img src="../../.gitbook/assets/kilo-lens-live-view.jpg" alt="Two different camera brands together in the Kilo Lens workspace"><figcaption><p>Tapo and HiLook cameras connected to the same Kilo organization, shown in Preview mode.</p></figcaption></figure>

## Lens in the cloud, Twin at the site

Lens makes cameras part of the wider physical environment managed in Kilo. A camera contributes a view or a motion reading; another device may contribute a door state, temperature or equipment condition. Bringing these observations together lets an application respond to the situation across a site, rather than treating each camera as an isolated feed.

This is the camera side of Kilo's role as an [operating system for physical AI](../physical-ai.md). The shared platform connects information and permitted actions across supported devices and protocols. The camera continues to do its own job, while software gives its observations a role in the wider operation.

Lens runs in the cloud. **Twin** is a camera's digital twin running at the edge, on your premises, as a Docker container. Each Twin connects to **one camera**: twenty cameras require twenty Twin containers. Multiple containers can run on a suitable host, with separate configuration and enough processing, network, and storage capacity for the workload.

```mermaid
flowchart LR
  A[IP camera A] --> B[Twin A on site]
  C[IP camera B] --> D[Twin B on site]
  B --> E[Lens in the cloud]
  D --> E
  E --> F[Live viewing]
  E --> G[Camera readings and rules]
  G --> H[Operational alarms]
```

RTSP is a standard way for an IP camera to provide a video stream. A broad range of camera manufacturers support it. Twin connects to that stream; supported ONVIF cameras can also expose discovery and camera controls. Check your camera's stream settings and credentials before installation.

Twin is distinct from the platform's 3D Digital Building Twin visualization. Here, Twin specifically means the local runtime representing one camera.

## Camera hardware and shared local processing

One Twin per camera does not mean one physical computer per camera. A shared host can run several camera Twins, so useful cameras and the software processing their streams can be maintained separately. Check the host's processing, network and storage capacity against the actual feeds and enabled functions before expanding.

This arrangement gives a site flexibility, but also makes the host a shared dependency. If it stops, the Twins running on it stop. Plan power, maintenance access and recovery for the number of cameras that depend on it.

Local processing is not automatically AI recognition. Twin's selected-area motion detection compares frames; it does not establish what moved or why. A wider application can combine the motion reading with other observations and the response you deliberately configure.

## What depends on the internet connection?

Twin runs at the camera's site, while Lens runs in the cloud. Local camera access and enabled local recording have different dependencies from cloud viewing, platform rules and remote notifications. Do not assume that a locally running Twin makes the complete cloud workflow available during an internet outage.

Validate the functions your installation needs with its actual power and network arrangement. After reconnecting, check camera status as well as motion: an unavailable camera is not evidence that the scene is quiet.

## Where Lens fits

| Deployment | Practical use |
|---|---|
| Security and property management | Check entrances and shared areas while monitoring environmental or equipment readings. |
| Smart cities | Bring compatible cameras from public spaces into the same platform as other IoT infrastructure. |
| Traffic monitoring | Observe roads, junctions, or access points alongside relevant sensor information. |
| Public transportation | View stations, stops, and depots and configure responses to motion in selected areas. |
| Distributed enterprises | Reuse different camera brands across offices and facilities with organization-managed access. |

The per-camera Twin model lets deployments expand camera by camera and site by site. Size each site's host and connection for its actual feeds, and check organization subscription limits when expanding.

## Give an existing camera a useful new role

Suppose an entrance camera sees a busy pavement, stairs, and an office door. Drawing a motion zone around the doorway lets Twin detect movement there without using the entire scene as the trigger. The camera does not need built-in AI for this selected-area motion detection.

The resulting motion reading can start a Kilo rule. The rule can evaluate a condition and raise an alarm whose notification behavior you configure. This connects visual monitoring to the same automation system used by other IoT devices.

Use [motion zones](motion-zones.md) and [camera rules and alerts](camera-rules-and-alerts.md) together to build this example. Zone-based motion detects changing pixels; it does not identify people, vehicles, or the reason for movement.

## Keep operational views ready

Create [videowalls](videowalls.md) to save selected feeds in layouts tailored to a site or task. Arrange and resize panels for a security desk, transport hub, or property portfolio, then reopen the wall for routine monitoring.

## Connect the first camera

1. [Install Twin](installing-twin.md) at the camera's site.
2. [Connect and pair the camera](connecting-a-camera.md) with the correct Kilo organization.
3. [Open live video](watching-live-video.md).
4. Configure motion, a rule, and optional [local recording](local-recordings.md).

Download Twin from the official [chirpiot/lens-twin Docker Hub repository](https://hub.docker.com/r/chirpiot/lens-twin). Organization permissions control who can use Lens; [access and troubleshooting](access-and-troubleshooting.md) explains the current requirements.

For ongoing administration, see [Managing Cameras](managing-cameras.md). To connect an account-backed camera or HomeKit accessory, see [Provider Camera Sources](connecting-cloud-camera-sources.md).
