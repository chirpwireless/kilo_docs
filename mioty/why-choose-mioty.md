---
description: MIOTY vs LoRaWAN — how telegram splitting, base stations, and BSSCI decide which LPWAN protocol fits your site.
---

# Why Choose MIOTY?

Choosing an LPWAN protocol is a question about your environment, not about which technology is better in the abstract. MIOTY, LoRaWAN, and LR-FHSS all deliver small messages from battery-powered devices over long distances. They differ in what they assume about the world those messages travel through — and that assumption is what should decide your choice.

MIOTY assumes the channel is hostile and the device population is large, and designs for both from the physical layer up.

***

### The Case for MIOTY

#### Robustness is built in, not bolted on

Most reliability strategies are reactive: detect the failure, then retry. MIOTY is proactive. By splitting every telegram into sub-packets spread across frequency and time, and reconstructing the message from a partial set of them, it treats loss as the expected condition rather than the exception. There is no retry storm to manage in congested conditions, because the first attempt usually succeeds even when part of it does not arrive.

#### Density without degradation

Networks tend to degrade as they fill, because more devices means more collisions and more collisions means more retries — a feedback loop that gets worse exactly when the deployment gets valuable. When collisions cost fragments instead of messages, that loop does not close. Thousands of endpoints per base station is what this buys you, and it is what makes site-wide or portfolio-wide rollouts practical on modest infrastructure.

#### An open, standardized foundation

MIOTY is specified by ETSI as **TS 103 357** — currently part 2, version 2.1.1 (2024) — under the name TS-UNB. You are buying against a published standard with a multi-vendor ecosystem behind it, not a single supplier's interpretation of one. Endpoint and base station vendors implement the same specification, and the [MIOTY Alliance](https://mioty-alliance.com) maintains the ecosystem around it. The base station to service center interface, **BSSCI**, is specified separately by the Alliance.

***

### MIOTY and LoRaWAN, Side by Side

Kilo supports both. The comparison below is technical orientation for choosing the right tool for a given site — not an argument against either protocol.

| | **MIOTY** | **LoRaWAN** |
| --- | --- | --- |
| **Standard** | ETSI TS 103 357 (TS-UNB) | LoRaWAN specification (LoRa Alliance) |
| **Core technique** | Telegram splitting — sub-packets across frequency and time | LoRa chirp spread spectrum modulation |
| **Handling interference** | Reconstructs the telegram from a partial set of bursts | Message-level delivery; a collision costs the message |
| **Field infrastructure** | Base stations reassemble telegrams | Gateways forward packets to a network server |
| **Backhaul interface** | BSSCI over certificate-secured mutual TLS | Packet forwarding to the network server |
| **Device ecosystem** | Growing industrial vendor base | Very large, mature, broad sensor catalog |
| **Sweet spot** | Noisy, dense, or moving deployments | Broad general-purpose IoT with wide hardware choice |

#### Where the architectures genuinely differ

The structural distinction is worth stating plainly, because it shapes how you plan a site. In LoRaWAN, gateways forward radio packets onward and the network server does the protocol work — the gateway is a relay. In MIOTY, the **base station** is where the sub-packets are collected and the telegram is reassembled; it is doing the reconstruction, not passing raw frames along. Base stations then connect to a **service center** over **BSSCI**, on a certificate-secured mutual TLS link. There is no packet-forwarding gateway in the LoRaWAN sense, so plan MIOTY coverage around base stations and their backhaul, not around a gateway fleet.

***

### How to Decide

Choose **MIOTY** when:

* Interference is a known constraint — plant floors, heavy machinery, dense metal structure, crowded spectrum
* You are deploying thousands of endpoints and want to keep base station count down
* Devices are moving, or the environment around them changes
* Missed readings have a real cost — compliance records, billing data, failure trends

Choose **LoRaWAN** when:

* The radio environment is reasonably clean and device counts are moderate
* The widest possible catalog of off-the-shelf sensors matters to your build
* You want the most established LPWAN ecosystem for a general-purpose deployment

And it is not either-or. Nothing stops you running MIOTY where the RF is hard and LoRaWAN where it is not — within one Kilo organization, on the same dashboards, feeding the same rules. Once data is on the platform it is normalized, so the protocol that carried a reading stops mattering the moment it arrives.

***

### A Network Server, or a Platform

There is a second decision behind the protocol one, and it is worth separating: a MIOTY network server and an IoT platform are not the same product.

A service center moves messages. It manages base stations and endpoints, handles uplinks and downlinks, and hands the data onward. That is a necessary layer and a demanding one — but on its own it gives you telemetry, not answers. Everything you actually want to *do* with a reading — chart it, alert on it, act on it, keep it for an audit — happens somewhere else.

Kilo gives you both paths:

* **Kilo Center — the Community edition.** Our open-source MIOTY service center. Self-host it, own the infrastructure end to end, and integrate it with whatever you run downstream. It is a MIOTY network server: base stations, endpoints, traffic, and an operator console. See [Kilo MIOTY Service Center](../kilo-center/kilo-mioty-service-center/README.md).
* **Kilo Cloud — the Enterprise edition, built in.** The Enterprise edition of the service center runs inside Kilo Cloud, so there is no MIOTY infrastructure for you to host at all. Register a [MIOTY connector](../kilo-iot-server/connectors/mioty-connector.md), point your base stations at it, and your endpoints arrive on a full IoT platform rather than a bare network server.

That second path is what changes MIOTY from a data feed into an operation. The same readings land in the rules engine, alarms with escalation, dashboards, the Digital Building Twin, multi-tenant access control, and the audit trail — the machinery the rest of your fleet already uses. A MIOTY endpoint and a LoRaWAN sensor become the same kind of object the moment their data is normalized, and a single rule can reason across both.

### Starting a MIOTY Deployment on Kilo

Data from MIOTY endpoints reaches your organization through the [MIOTY connector](../kilo-iot-server/connectors/mioty-connector.md), and the base stations serving those endpoints are registered and managed under [MIOTY base stations](../kilo-iot-server/gateways/mioty-base-stations/README.md).

***

MIOTY is a registered trademark of the MIOTY Alliance.
