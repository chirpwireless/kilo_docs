---
description: Add the Mioty connector to bind your organization to the MIOTY service center and get its BSSCI endpoint.
---

# MIOTY Connector

The Mioty connector binds your organization to the MIOTY service center and unlocks the MIOTY side of the Kilo IoT Server: base station registration and MIOTY endpoint fields on the device form.

MIOTY (ETSI TS 103 357) is an LPWAN protocol built for massive-scale industrial telemetry. It splits every message into small radio bursts spread across time and frequency — telegram splitting — so a single interfered burst does not cost you the message. The practical result is thousands of low-power endpoints per base station, long range, and reliable delivery in RF environments that punish other protocols: plant floors, metal-dense warehouses, utility substations, and dense metering rollouts.

## Why the connector exists

MIOTY endpoints do not reach the network the way LoRaWAN devices do. There is no packet-forwarding gateway in the path. Endpoints transmit to **base stations**, and each base station holds a persistent, certificate-secured (mTLS) session to a service center using **BSSCI** — the Base Station Service Center Interface, the standard control protocol between the two.

That session has to terminate somewhere specific to you. The Mioty connector is what creates your organization's endpoint on the service center: when you add it, the server provisions a **BSSCI address** that your base stations connect to. Everything downstream — station identity, certificate issuance, endpoint attachment, telemetry — flows through that address.

Without a Mioty connector, the MIOTY surface is simply not there. The **Mioty Base Stations** tab does not appear on the Gateways page, and the MIOTY fields on the device form are unavailable with the message **"Create a Mioty connector first"**.

## Adding the Mioty connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector**.
3. In the **Connector type** dropdown, select **Mioty**.
4. Click **Add**.

The connector is created immediately and appears in the connectors table with its BSSCI endpoint address provisioned for your organization. No further configuration is required at the connector level — the work of pairing hardware happens at base station registration, where each station gets its own certificate bundle.

## What the connector unlocks

Once the Mioty connector exists, two parts of the server become available:

| Surface | Where | What you do there |
|---|---|---|
| **Mioty Base Stations** tab | Gateways page | Register base stations, download their certificates, monitor status and last-seen |
| MIOTY device fields | Device form | Enter the End Point EUI, network parameters, and security keys for each endpoint |

The BSSCI address is what you hand to the base station hardware, alongside the certificate pair it downloads during registration. You will see it again on each station's Overview and Settings — copying it from a station's detail page is usually more convenient than copying it from the connector, because that is where the matching certificates live.

## Planning your MIOTY deployment

- **Base stations first, endpoints second.** An endpoint has nowhere to attach until at least one base station is registered and online. Register the station, confirm it comes up, then commission endpoints against it.
- **Collect endpoint credentials before you commission.** Each endpoint needs its End Point EUI and Network Session Key. These come from the manufacturer, usually on a label or in a shipped provisioning file, and they are far easier to capture at the bench than on a pole.
- **Decide your blueprint strategy early.** MIOTY telemetry stays undecoded until a blueprint is bound to the device. If you are rolling out a few hundred units of one model, author or select the blueprint once and reuse it across the fleet.
- **Scale with base stations, not connectors.** A multi-site MIOTY deployment grows by adding base stations under your organization's BSSCI endpoint — coverage and density are a radio-infrastructure question, not a connector question.

## What's next

- **Register base stations** — bring your MIOTY radio infrastructure online with its BSSCI address and certificates. See [MIOTY base stations](../gateways/mioty-base-stations/README.md).
- **Commission endpoints** — enter EUIs, network parameters, and session keys for each MIOTY sensor. See [MIOTY Devices](../devices/mioty-devices.md).
- **Decode payloads** — bind a blueprint so raw endpoint telemetry becomes named, normalized measurements. See [MIOTY Blueprints](../devices/mioty-blueprints.md).
