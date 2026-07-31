---
description: Core MIOTY benefits — interference resistance, massive endpoint density, long range, low power, and mobility.
---

# Core Benefits of MIOTY

MIOTY is a newer LPWAN than the technologies most deployments were built on, and it is being adopted quickly for a straightforward reason: it was designed after the first generation's limits were understood, and it engineers around them rather than trading between them.

Every advantage below traces back to a single design decision. MIOTY encodes each telegram with forward error correction, splits it into 24 or more radio bursts of about 15 milliseconds, and scatters those bursts across frequency and time. The base station reconstructs the message even when **up to 50% of the radio bursts are lost**. Read the rest of this page as consequences of that one choice.

***

#### Interference Resistance in Hostile RF

This is MIOTY's headline property, and it is worth stating precisely: **up to half of a message's radio bursts can be destroyed and the message still arrives intact.** Not half of your messages — half of one transmission. An interferer has to take out more than 50% of a single telegram, spread across both time and frequency, to cost you one reading.

That changes what interference *is*. For a single-packet protocol, a collision is a lost message and a retry. For MIOTY, a collision costs a fragment that the error correction was already carrying redundancy for. Environments that punish conventional transmissions — factory floors with variable-frequency drives and welding equipment, plant rooms packed with metal, sites crowded with competing radio traffic — degrade MIOTY gracefully instead of breaking it.

#### Massive Endpoint Density

A single base station serves **up to 110,000 endpoints** and handles **up to 3.5 million messages a day** — the latter with endpoints in low-power mode sending small payloads roughly hourly. Note the range these figures assume: the endpoint count is measured at around 2.5 km, not at MIOTY's maximum reach. Density and distance are a trade you make per site.

Those numbers are a dividend of collision tolerance rather than an independent claim. When overlapping transmissions stop destroying each other, you can pack far more devices into the same spectrum before the network saturates. For a metering rollout or a site-wide sensor fleet, that is the difference between a handful of base stations and a fleet of them.

#### Long Range

MIOTY reaches **up to 15 km in flat, rural terrain** and around **5 km in urban centers**, in license-free sub-GHz spectrum. That is competitive with other LPWAN technologies rather than exceptional — the distinguishing behavior is at the edges. In dense industrial environments, where obstruction and interference erode link margin, robustness keeps distant and deeply buried endpoints reporting instead of intermittently dropping out. A link that merely *reaches* is not the same as a link that *delivers*.

#### Low Power, Long-Lived Endpoints

Robustness is what protects the battery. A protocol that loses messages to interference must retransmit, and every retransmission is energy spent and airtime consumed. Because a MIOTY message that meets interference usually still arrives the first time, the energy budget per reading stays predictable — including in exactly the congested conditions that would drain a less tolerant device fastest.

In practice: roughly **10 years on a single 2,200 mAh AA cell** at one message every 15 minutes, and **20 years or more** at lower reporting rates. As always, the interval and the payload size decide it — a figure without them is a marketing number.

#### Reliability for Devices in Motion

MIOTY endpoints work at speeds of **up to 120 km/h** at full performance. An endpoint on a moving asset passes through a constantly changing radio environment: reflections shift, obstructions come and go, and the channel that was clear a second ago is not. Spreading a telegram across seconds and two dozen carriers means the transmission samples many moments and many channels rather than betting the whole message on one — and the base station's signal processing is what lifts the workable speed to 120 km/h.

The measured effect is small enough to be worth quoting: Fraunhofer puts the penalty for a fading channel versus a static one at **under 2 dB**. Movement is close to free.

#### Standardized and Secured

MIOTY is an ETSI standard — **TS 103 357**, TS-UNB — not a proprietary scheme, so endpoints and base stations from different vendors interoperate against a published specification. Endpoints are identified by an **EUI** and their traffic is protected with a **network session key**, while base stations reach the service center over **BSSCI** on a certificate-secured mutual TLS connection. Both hops of the path — over the air and over the backhaul — are authenticated and encrypted.

#### Available Two Ways on Kilo

MIOTY runs on Kilo without you hosting any of it: the Enterprise edition of our service center is built into Kilo Cloud, so endpoints land straight in the rules engine, alarms, and dashboards. If you would rather run the network yourself, the Community edition — [Kilo Center](../kilo-center/kilo-mioty-service-center/README.md) — is open source and self-hosted. See [Why Choose MIOTY?](why-choose-mioty.md) for how that choice plays out.

***

### The Compounding Effect

These benefits are not independent line items. Interference resistance produces fewer retries; fewer retries preserve battery life and free airtime; free airtime raises the number of endpoints one base station can carry; higher density means fewer base stations for the same coverage. One property at the physical layer propagates all the way up to the cost of the deployment.

Next: [Ideal Use Cases for MIOTY](ideal-use-cases-for-mioty.md).
