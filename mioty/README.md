---
description: MIOTY explained — the ETSI TS 103 357 LPWAN protocol that uses telegram splitting for interference-resistant IoT.
---

# What is MIOTY?

**MIOTY** is a low-power wide-area network (LPWAN) protocol built for industrial environments where radio conditions are hostile and device counts are large. It is standardized by ETSI as **TS 103 357**, and within that standard it is referred to as **TS-UNB** — Telegram Splitting Ultra Narrow Band. That name is not decoration: telegram splitting is the technique that defines the protocol and explains nearly everything MIOTY does well.

Like other LPWAN technologies, MIOTY carries small messages from battery-powered sensors over long distances at very low energy cost. What sets it apart is how it survives interference. Instead of trying to push a whole message through a noisy channel in one attempt, MIOTY assumes the channel is noisy and designs around that assumption from the start.

***

### Telegram Splitting — the Core Idea

#### The message is broken into radio bursts

When an endpoint has data to send, MIOTY does not transmit that data as a single packet. The message — the *telegram* — is divided into many small sub-packets, often called radio bursts. Each burst carries a fragment of the payload plus the information needed to place it back in sequence.

#### The bursts are scattered across frequency and time

Those sub-packets are then transmitted across **different frequencies and at different points in time**. No two fragments sit on the same channel at the same instant, and the full transmission is deliberately spread out rather than concentrated. A single interferer — a motor, a welding rig, a competing radio, a burst of broadband noise — can only ever occupy a narrow slice of that spread.

#### The receiver reconstructs the message from what survives

The base station collects the bursts it heard and reassembles the telegram. Crucially, it does not need all of them. Forward error correction is applied across the fragments, so the receiver can **reconstruct the complete message even when a substantial portion of the sub-packets is lost or collides** with another transmission. What would be a failed delivery for a single-packet protocol is, for MIOTY, an ordinary successful one.

#### Why this changes the outcome

Interference stops being a binary event. In a conventional single-packet transmission, a collision destroys the message and the endpoint must retry — burning battery and adding to the congestion that caused the problem. With telegram splitting, a collision destroys a fragment. The rest of the telegram still arrives, the message still decodes, and no retry is needed. This is why MIOTY holds up on factory floors, inside metal-dense buildings, and on assets that are moving through changing RF conditions.

***

### How a MIOTY Network Is Built

MIOTY's architecture is worth understanding on its own terms, because it does not map one-to-one onto other LPWAN topologies.

#### Endpoints

Endpoints are the sensors and trackers in the field. Each one is identified by an **EUI**, and its traffic is protected using a **network session key** established when the endpoint is attached to the network. Endpoints are battery-powered and designed for long service lives — they wake, transmit a short telegram as scattered bursts, and return to sleep. Because successful delivery does not depend on retries, the energy cost of a message stays predictable even in congested environments.

#### Base stations

Endpoints transmit to **base stations**. A base station listens across the spectrum, captures the sub-packets from every endpoint in range, and performs the reassembly and error correction that turn those fragments back into telegrams. A single base station is designed to serve **thousands of endpoints** — the protocol's collision tolerance is precisely what makes that density workable rather than theoretical.

There is no packet-forwarding gateway in the LoRaWAN sense here. The base station is not a transparent relay pushing raw radio frames upstream; it is the point where the telegram becomes a message.

#### The service center

Base stations connect to a **service center** using **BSSCI** (Base Station Service Center Interface), the standardized interface between the two. That connection is certificate-secured with mutual TLS, so each side authenticates the other and the link between the field and the network is encrypted end to end. The service center is where endpoints are provisioned, where base stations are attached, and where uplinks are handed onward to applications.

***

### Range, Scale, and Power

MIOTY delivers **long range comparable to other LPWAN technologies**, with particularly strong performance in dense industrial settings where competing signals and metal structures degrade conventional links. It is designed for **massive-scale deployments** — thousands of endpoints per base station — and for endpoints that run for years on a battery. These three properties reinforce each other: robustness reduces retries, fewer retries preserve both battery life and airtime, and preserved airtime is what lets a single base station carry so many devices.

***

### MIOTY on Kilo IoT

Kilo supports MIOTY alongside LoRaWAN, so the protocol is a design choice rather than a platform commitment. Once your endpoints are reporting, they behave like any other device on the platform: normalized data, dashboards, rules, and alarms all work the same way regardless of which radio delivered the reading.

* To bring MIOTY data into your Kilo organization, see the [MIOTY connector](../kilo-iot-server/connectors/mioty-connector.md).
* To register and manage the base stations serving your endpoints, see [MIOTY base stations](../kilo-iot-server/gateways/mioty-base-stations/README.md).
* To run your own service center infrastructure, see the [Kilo MIOTY Service Center](../kilo-center/kilo-mioty-service-center/README.md).

Continue with [Core Benefits of MIOTY](core-benefits-of-mioty.md) to see what telegram splitting buys you in practice.

***

MIOTY is a registered trademark of the MIOTY Alliance. For the specification and the wider ecosystem, see [mioty-alliance.com](https://mioty-alliance.com).
