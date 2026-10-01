---
description: "Connect existing IP cameras to Kilo for live video, selected motion zones, and camera-driven operational alerts."
---

# Cameras

Open **Cameras** in the main navigation to use **Lens**, Kilo’s camera monitoring product.

**Lens** brings video cameras into Kilo IoT Server alongside devices, sensor readings, rules, and alarms. It gives teams a common place to view compatible cameras and use camera motion as an input to operational workflows.

Existing cameras need not become a separate replacement project. A business with different camera brands in New York, Washington, and London can connect compatible RTSP feeds to the same Kilo organization. Operators gain a shared platform for video and IoT information instead of relying on a different manufacturer's application for each installation.


<figure><img src="../../.gitbook/assets/kilo-lens-live-view.jpg" alt="Two different camera brands together in the Kilo Lens workspace"><figcaption><p>Tapo and HiLook cameras connected to the same Kilo organization, shown in Preview mode.</p></figcaption></figure>

## What does Lens add to the cameras you already have?

### Can you see cameras from different brands in one place?

Yes. Different camera brands at different locations usually mean a different app, recorder and login for each. With Lens, compatible cameras from any manufacturer, at any number of sites, appear in one Kilo organization. Operators watch them in one place and save [videowalls](videowalls.md) for each site or task.

### Who can see and change the cameras?

Many camera systems give access through a shared login on each camera or recorder. In Kilo, access to cameras is set per user: **Edit**, **View** or **No access** (see [Roles and Page Access](../account/roles-and-page-access.md)). When someone leaves the team, you remove their access in Kilo once, without changing anything on the cameras. The local Twin administrator login stays separate from users' Kilo accounts (see [Access and Troubleshooting](access-and-troubleshooting.md)).

### Can an old camera become a smart camera?

Yes. Lens does not need analytics inside the camera. The camera only has to capture video and offer it as an RTSP stream, which most IP cameras can do, including older models. The processing happens off the camera: Twin, at your site, detects motion inside the zones you draw and can record locally, and Kilo uses each camera's motion reading in rules and alarms together with your other sensors.

For example, a loading dock has an older camera above the dock door and a wireless door sensor on the door. Draw a motion zone around the door in Twin. When the camera reports motion there, a rule checks the door sensor's state and raises an alarm if the door is open.

### Where is Lens going?

We are adding more AI to Lens. It runs off the camera, on the platform, where there is room for larger models and more advanced logic than a chip inside a single camera can hold. Because the processing does not depend on the camera's own hardware, cameras that are already installed, including older ones, gain new features through software updates instead of replacement. Today, Lens detection is motion inside selected zones; it does not recognize people or objects.

## Lens in the cloud, Twin at the site

**Twin** is the edge program you install at your site. It is the digital twin of one physical camera: it connects to that camera's video stream on your network and links the camera to Lens, which runs in the cloud. Twin runs as a Docker container. Each Twin connects to **one camera**: twenty cameras require twenty Twin containers. Multiple containers can run on a suitable host, with separate configuration and enough processing, network, and storage capacity for the workload.

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
