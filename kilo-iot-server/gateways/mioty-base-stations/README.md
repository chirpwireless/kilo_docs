---
description: MIOTY base stations in Kilo IoT — radio infrastructure that reaches the service center over BSSCI with mTLS.
---

# MIOTY Base Stations

A MIOTY base station is the radio infrastructure that receives telegrams from your MIOTY endpoints and delivers them to the Kilo IoT Server. It is the first link in the MIOTY data chain, and it is a materially different piece of infrastructure from a LoRaWAN gateway — different protocol on the backhaul, different identity model, different registration flow.

MIOTY (ETSI TS 103 357) is designed for density and interference. Telegram splitting breaks each uplink into short bursts distributed across time and frequency, so a base station can recover a message even when a large share of its bursts collide with other traffic or noise. That is why a single station can serve thousands of low-power endpoints and still hold its message rate in the RF conditions typical of industrial sites — motor drives, welding, dense metal racking, or a metering rollout where thousands of units transmit through the same spectrum.

## How this differs from a LoRaWAN gateway

A LoRaWAN gateway is a packet forwarder. It has no session concept with your organization beyond the radio path it relays; it takes what it hears on air and pushes it upstream.

A MIOTY base station is an addressed peer. It holds a persistent, mutually authenticated session to a service center over **BSSCI** — the Base Station Service Center Interface — and both sides present certificates. That has three consequences worth internalizing before you deploy:

- **The station is provisioned, not just pointed.** During registration you receive a certificate pair as **certs.zip**, and the station uses it to prove its identity. There is no unauthenticated path.
- **The station has an identity that must be unique.** Every station is registered under a **BS EUI** — exactly 16 hexadecimal characters, from the hardware label. A duplicate BS EUI within your organization is rejected.
- **The station needs an address that belongs to you.** That address is the **BSSCI address**, provisioned when you add the [Mioty connector](../../connectors/mioty-connector.md). Without the connector, the **Mioty Base Stations** tab does not appear on the Gateways page.

<figure><img src="../../../.gitbook/assets/mioty-base-stations-list.jpg" alt="The Mioty Base Stations tab listing a station with its EUI, status and BSSCI address"><figcaption></figcaption></figure>

## Which base stations connect

The service center negotiates the **BSSCI protocol version** with each station as it connects, and supports **BSSCI 1.1** alongside earlier revisions. In practice that means you are not restricted to one vendor's firmware generation: a 1.1 station and an older one can serve the same site, and a firmware upgrade does not cost you the connection.

Station identifiers are accepted across the **full unsigned 64-bit EUI range**, including values above the signed-integer limit that some platforms reject. If your hardware ships with a high EUI, it registers normally.

## Where base stations live

Open **Gateways** in the sidebar. Once a Mioty connector exists, the page carries two tabs:

- **LoRaWAN Gateways** — your LoRaWAN radio fleet
- **Mioty Base Stations** — your MIOTY radio fleet

The two fleets are managed side by side but never mixed. A multi-protocol site commonly runs both: LoRaWAN gateways for the long-range sensor estate, MIOTY base stations for the high-density or high-interference segments.

## In this sub-section

- **[Registering a base station](registering-a-base-station.md)** — Add a station with its BS EUI, copy the BSSCI address, and download the certificate bundle the hardware needs to connect.
- **[Base station monitoring](base-station-monitoring.md)** — Track online status and last-seen, place stations on the map, regenerate certificates, and manage the station's lifecycle.

For endpoint commissioning and payload decoding — the other half of a MIOTY rollout — see [MIOTY Devices](../../devices/mioty-devices.md) and [MIOTY Blueprints](../../devices/mioty-blueprints.md).
