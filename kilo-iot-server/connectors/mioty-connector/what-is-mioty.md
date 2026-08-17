---
description: MIOTY explained — the ETSI TS 103 357 LPWAN protocol that uses telegram splitting for interference-resistant IoT.
---

# What is MIOTY?

**MIOTY** is a low-power wide-area network (LPWAN) protocol built for industrial environments where radio conditions are hostile and device counts are large. It was developed at the **Fraunhofer Institute for Integrated Circuits (IIS)** and standardized by ETSI as **TS 103 357**, where it is specified as **TS-UNB** — Telegram Splitting Ultra Narrow Band. That name is not decoration: telegram splitting is the technique that defines the protocol and explains nearly everything MIOTY does well.

MIOTY is the newer of the two LPWAN technologies Kilo supports, and it is gaining ground quickly — not on novelty, but because it solves a problem the first generation of LPWAN left open. Those earlier technologies had to trade range against capacity and robustness. MIOTY was designed after that trade-off was well understood, and engineered from the physical layer up to avoid it.

Like other LPWAN technologies, MIOTY carries small messages from battery-powered sensors over long distances at very low energy cost. What sets it apart is how it survives interference. Instead of trying to push a whole message through a noisy channel in one attempt, MIOTY assumes the channel is noisy and designs around that assumption from the start.

***

### Telegram Splitting — the Core Idea

#### The message is protected, then broken into radio bursts

When an endpoint has data to send, MIOTY does not transmit that data as a single packet. The message — the *telegram* — is first encoded with forward error correction and interleaved, then divided into small sub-packets. A short telegram becomes **24 radio bursts**, each lasting only about **15 milliseconds**; longer payloads add further bursts. Each burst carries a fragment plus the information needed to place it back in sequence.

The redundancy matters more than the splitting. The error-correcting code is applied *before* the split and spread across every burst, so no single burst is critical — losing one costs you a slice of redundancy, not a piece of the message.

#### The bursts are scattered across frequency and time

Those sub-packets are then transmitted across **different frequencies and at different points in time**. No two fragments sit on the same channel at the same instant, and the full transmission is deliberately spread across several seconds and two dozen carriers rather than concentrated. A single interferer — a motor, a welding rig, a competing radio, a burst of broadband noise — can only ever occupy a narrow slice of that spread.

#### The receiver reconstructs the message from what survives

The base station collects the bursts it heard and reassembles the telegram. Crucially, it does not need all of them. Because the error correction is spread across the whole transmission, the receiver **reconstructs the complete message even when up to 50% of the radio bursts are lost** to interference or collision.

Read that precisely, because it is easy to inflate: it means half the *bursts within one message* can be destroyed and that message still arrives intact. An interferer has to take out more than half of a single transmission, across both time and frequency, to cost you one reading. What would be a failed delivery for a single-packet protocol is, for MIOTY, an ordinary successful one.

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

The figures below come from Fraunhofer IIS and the MIOTY Alliance. Each one depends on its conditions, so they are stated with them — a number without its assumptions is not much use when you are planning a site.

| | Figure | Conditions |
|---|---|---|
| **Range** | Up to **15 km** in flat, rural terrain; around **5 km** in urban centers | Sub-GHz, license-free bands |
| **Endpoints per base station** | Up to **110,000** | At roughly 2.5 km range — not at the 15 km figure above |
| **Messages per base station** | Up to **3.5 million per day** | Ultra-low-power mode, small payloads, endpoints reporting about hourly |
| **Battery life** | Around **10 years** on a single 2,200 mAh AA cell at one message every 15 minutes; **20 years and beyond** at lower reporting rates | Depends on payload size, interval, and cell chemistry |
| **Speed** | Up to **120 km/h** at full performance | Endpoints on moving assets |
| **Data rate** | Around **500 bit/s** | Sub-GHz; ~2.4 kHz carrier spacing |

Those properties reinforce each other. Robustness reduces retries; fewer retries preserve both battery life and airtime; preserved airtime is what lets a single base station carry so many endpoints. The density figure is a dividend of the interference tolerance, not an independent claim.

The mobility number deserves a note, because it is the one people assume is marketing. It isn't a waveform trick — spreading a telegram across seconds and carriers means a moving endpoint samples many moments and many channels instead of betting the message on one, and the base station's signal processing is what lifts the workable speed to 120 km/h. Fraunhofer measured the penalty for a fading channel versus a static one at under 2 dB.

***

### MIOTY on Kilo IoT

Kilo supports MIOTY alongside LoRaWAN, so the protocol is a design choice rather than a platform commitment. Once your endpoints are reporting, they behave like any other device on the platform: normalized data, dashboards, rules, and alarms all work the same way regardless of which radio delivered the reading.

* To bring MIOTY data into your Kilo organization, add the [MIOTY connector](README.md).
* To register and manage the base stations serving your endpoints, see [MIOTY base stations](../../gateways/mioty-base-stations/README.md).
* To run your own service center infrastructure, see the [Kilo MIOTY Service Center](../../../kilo-center/kilo-mioty-service-center/README.md).

Continue with [Core Benefits of MIOTY](core-benefits-of-mioty.md) to see what telegram splitting buys you in practice.

***

MIOTY is a registered trademark of the MIOTY Alliance. For the specification and the wider ecosystem, see [mioty-alliance.com](https://mioty-alliance.com).
