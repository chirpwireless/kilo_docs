---
description: Manage KiloCenter base stations and end points: cards, filters, map, status request, Edit dialog, location, EUI change, certificate regeneration and deletion.
---

# How do I manage base stations and end points in KiloCenter?

This page covers the day-to-day controls of the **Base Stations** and **End Points** pages that the [web interface tour](../web-interface.md) only names: the clickable cards, filters, the map, the Edit dialog with location and certificates, and what each state means. To add a base station or end point for the first time, see [Connect a Base Station](../onboarding/connect-a-base-station.md) and [Register an Endpoint](../onboarding/register-an-endpoint.md).

You need the **Base Station Manager** role (or **Admin**) for base stations and the **Endpoint Manager** role (or **Admin**) for end points. Every role is explained in [User Roles and Permissions](../security/users-and-roles.md).

## How do I find a base station quickly?

On **Base Stations**, four cards sit above the table. **Total Base Stations** only counts. The other three are buttons that move matching rows to the top of the table; the card then shows a caption and a second click removes it:

| Card | What it counts | When clicked |
|---|---|---|
| **Online** | Stations the service center reports as online | "Sorted by online" |
| **Offline** | All other stations | "Sorted by offline" |
| **Expiring Certificates** | Certificates that expire within 60 days or have expired | "Sorted by expiry", soonest first |

The expiry card turns yellow when a certificate is inside 60 days and red when one is inside 30 days or expired. In the table, **Certificate Expiry** shows the days left, or **Expired**. **Search base stations...** filters by name or EUI.

An Admin also sees a **Map** above the table with a pin for every base station of the installation that has a location. "No base station has a location yet" means none is set. Select a pin and **Open base station** to jump to its page. Base Station Managers who are not Admins do not see the map.

## What can I do on a base station page?

* **Request station status** is the first of the three icon buttons at the top right of the page, left of the pencil (**Edit**) and the trash can (**Delete**). It asks the base station to report now instead of waiting for its next periodic report. The page says "Status requested; the metrics update when the base station answers"; if the request fails it says "The status request could not be sent".
* **Performance Metrics** shows **Temperature**, **CPU Load**, **Memory Load** and **Duty Cycle**; **System Information** shows **System Time**, **Uptime** and **Last Status Update**; **BS Config** summarizes the station's configuration. A field the station did not report reads **Not available**.
* **Ping** (under **Actions**) sends a BSSCI ping while the station is online; the toast reads "Ping sent (opId …)".
* The **Certificate** panel shows the certificate status, the expiry, the fingerprint and the last handshake.

### How do I edit a base station?

Click the pencil icon. **Edit Base Station** holds:

* **Base Station Name**.
* **Base Station EUI** with a copy button (**Copy EUI**, then "EUI copied"). Use it to correct a mistyped EUI; an empty value shows "Base Station EUI is required." and a malformed one the format error. A successful change reads "Base station EUI updated successfully".
* **Latitude** (decimal degrees, -90 to 90), **Longitude** (-180 to 180) and **Altitude** (meters above sea level), or **Pick on Map**: click the map to place a marker and **Confirm** it. Latitude and longitude must be given together or both left empty ("Both latitude and longitude are required, or leave both empty"). When the station reports its own GPS position, the fields are locked: "Location is reported by the base station's GPS and cannot be edited manually". A station that has no position shows "No GPS fix: the base station reports no position" or "No Base Station Location Set".
* **Service Center URL** with **Copy Service Center URL** ("URL copied"). Enter this address in the base station's configuration. It comes from `protocol.bsci_external_url`.
* **Certificates**: **Regenerate Certificates** issues a new certificate and key for this station and replaces its current certificate, including one issued outside the service center. Confirm **Regenerate Certificates?**, then **Regenerate**. The page reads "Certificates regenerated" and shows the download buttons. The service center refuses the station until you load the new files on it, so download them and install them straight away. The links expire 15 minutes after issuance and the private key downloads once.

Save with **Save** ("Base station updated").

### How do I delete a base station?

Click the trash icon, read **Delete Base Station** ("Are you sure you want to delete the base station … This action cannot be undone.") and select **Delete**. The toast reads "Base station deleted".

## What do the certificate statuses mean?

The same labels appear on the **Base Stations** table, the base station page and the **Certificates** page. The thresholds are fixed in KC-Web.

| Status | Meaning |
|---|---|
| **Valid** | 60 days or more left. |
| **Expiring** | Fewer than 60 days left. |
| **Expires soon** | Fewer than 30 days left. |
| **Expired** | The expiry date has passed. |
| **Not issued** | No certificate has been issued to the station. |
| **Expiry not recorded** | A certificate is pinned to the station, but its expiry date is not stored yet. |

The **Certificates** page lists each station with **Name**, **EUI**, **Status**, **Expires**, **Days Left**, **Fingerprint (SHA-256)**, **Last Handshake** and **Open base station**. For the server certificate, see [Renew a server certificate](../security/certificate-renewal.md).

## How do I filter the end point list?

On **End Points**, **Total End Points**, **Active** and **Inactive** count the registered end points. An end point is **Active** when the service center heard it in the last 24 hours. **Search end points...** matches name and EUI, and **Filters** opens two choices:

* **Attach state**: **Attached**, **Detached**, **Attaching**, **Pending** or **Unknown**.
* **Activity**: **Active** or **Inactive**.

Active filters appear as chips (for example "Search: …"), the list says "Showing N of M", and **Clear filters** removes them. An empty list reads "No endpoints registered yet", and a filter that matches nothing reads "No endpoints match your search". An end point without a name shows as **Unnamed Device**.

Attach states mean:

| State | Meaning |
|---|---|
| **Attached** | The service center reports the end point as attached. |
| **Attaching** | An attach is in progress. |
| **Pending** | The end point has a short address, but the service center has not confirmed the attach yet. |
| **Detached** | The end point is registered but not attached. |
| **Unknown** | The service center reported no attach state. |
