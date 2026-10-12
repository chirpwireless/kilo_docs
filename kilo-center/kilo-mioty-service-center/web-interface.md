---
description: Tour of the KiloCenter web interface — live dashboard, base stations, endpoints, traffic, logs, blueprints, certificates, users and API keys.
---

# What can I do in the KiloCenter web interface?

The KiloCenter web interface (KC-Web) is where you run the network day to day: see which base stations are online, watch uplinks arrive with their radio metrics and decoded values, queue a downlink and follow it to delivery, and manage who may do what. Since version 2.0 it updates live, so a new message or a status change appears within about a second without reloading the page.

The left navigation shows only the pages your roles allow. An Admin sees all of them; a Base Station Manager sees the base station pages; an Endpoint Manager sees the endpoint pages. The full list is in [User Roles and Permissions](security/users-and-roles.md).

## What does the dashboard show?

The Dashboard summarizes network health: base station and endpoint counts, message traffic and the health of the service center's own components. An **Alerts** card with a link to the Events Log appears for administrators.

## How do I see what a base station is doing?

Open **Base Stations** to list, register, edit and delete stations. Administrators also get a **map** of every base station that has a location, and each station shows its certificate status and expiry. A station's detail page has:

- an **Activity** table with each uplink the station heard, its radio metrics, payload and decoded values inline; expand a row to see every receiving station, the subpackets and the `ulData` message;
- a **Traffic** tab with the uplinks it heard and, for endpoint managers, the downlinks it holds and their results;
- a download of the station's **certificate bundle**, which a Base Station Manager or Admin can take once, so no private key is handed to anyone else.

See [How do I connect a base station?](onboarding/connect-a-base-station.md) for the first connection, and [Certificate renewal](security/certificate-renewal.md) to renew the server certificate without losing the names stations connect by.

## How do I see what an endpoint is sending?

Open **End Points** to register, edit, attach and detach endpoints. The network session key and application key are masked everywhere; you see only whether each is set. An Endpoint Manager or Admin can reveal a key on request, and every reveal is recorded in the Audit Log without the key itself.

An endpoint's page has the same **Activity** table as a base station. When the endpoint has a [blueprint](../../kilo-iot-server/connectors/mioty-connector/README.md), uplinks show decoded values, such as `temperature`. You can assign a blueprint from the endpoint's own page.

## How do I queue and follow a downlink?

Open **Traffic** to see uplinks and the downlink queue together. You can queue a downlink, revoke it while it waits, and follow it through `sent`, `acknowledged`, `expired` or `invalid`. A downlink that a base station already holds when its deadline passes shows as **Revoking** until the station answers. The same states reach your application over MQTT; see [MQTT First Steps](integrations/mqtt-first-steps.md).

## Where do I find errors and events?

Open **Logs**. The **Errors Center** and the **Events Log** replace the old activity feed and take filters. Each user sees only the event categories their roles cover, and the **Audit Log** is for administrators.

## How do I manage users and API keys?

- **Users & Roles** lets an administrator grant the Admin, Tenant Manager, Base Station Manager and Endpoint Manager roles. A refused password shows the reason.
- **API Keys** creates keys for software that calls the API. API keys can now be created in the Community edition.
- **Organizations** and organization members exist in the Enterprise edition only.

## What replaced the old System screen?

The old System screen and the WebSocket connection are removed in 2.0. Service health lives on the Dashboard, and live updates use gRPC-web server streams through KC-Gateway.

Not hosting it yourself? In Kilo Cloud the Enterprise edition of the service center is built in, and base stations and endpoints appear in the platform's own pages. See [MIOTY on Kilo Cloud](../../kilo-iot-server/connectors/mioty-connector/README.md).
