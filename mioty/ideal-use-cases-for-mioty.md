---
description: Where MIOTY fits best — factory floors, utility metering, moving assets, rotating machinery, buildings, farms.
---

# Ideal Use Cases for MIOTY

MIOTY earns its place wherever the radio environment is the hard part. If your sensors sit in clean, quiet air with modest device counts, most LPWAN options will serve you. The scenarios below are the ones where telegram splitting stops being a technical footnote and starts being the reason the deployment works.

MIOTY is strongest when:

* The RF environment is noisy, reflective, or crowded with competing transmitters
* Endpoint counts run into the thousands per site
* Devices are in motion, or the environment around them changes
* Sensors are buried deep inside structures, machinery, or below ground
* Missed readings carry a real operational or compliance cost

***

### Common Applications

| **Domain**                       | **Example Applications**                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| **Factory Floor Sensing**        | Process monitoring, environmental sensing near drives and welding cells, safety interlocks |
| **Utility & Sub-Metering**       | Water, gas, heat, and electricity metering at portfolio scale; basement and riser meters   |
| **Logistics & Asset Tracking**   | Tags on moving pallets, containers, tools, and rolling stock across yards and warehouses   |
| **Condition Monitoring**         | Vibration and temperature on motors, pumps, gearboxes, fans, and other rotating machinery  |
| **Large Building Portfolios**    | Multi-site environmental sensing, occupancy, leak detection, plant room monitoring         |
| **Agriculture at Scale**         | Soil, microclimate, silo, irrigation, and livestock sensing across large landholdings      |

***

### Why Telegram Splitting Suits Each

#### Factory-floor sensing in high-interference environments

A production hall is one of the worst radio environments in industry: variable-frequency drives, welding equipment, contactors, and motors generate broadband noise, while steel structure and racking reflect and block signals unpredictably. A single-packet transmission has to find a clean channel at a clean moment. A MIOTY telegram does not — its bursts are scattered across the spectrum and across time, so a noise source that dominates one band or one instant only removes fragments the receiver can already do without.

#### Utility and sub-metering at scale

Metering is a density problem before it is a range problem. Thousands of meters, each sending small readings on a schedule, all contending for the same spectrum, many of them in basements, ducts, and risers with poor link margin. Collision tolerance is what lets one base station carry that population without the network degrading as meters are added, and the same robustness pulls readings out of the deeply buried locations where metering equipment is invariably installed. Fewer base stations for the same billing coverage is a direct capital saving.

#### Logistics and asset tracking in motion

A tag on a moving pallet is a moving radio problem. Multipath conditions change continuously, the endpoint passes behind obstructions, and the channel quality at the moment of transmission is unknowable in advance. Spreading the telegram across many frequencies and many time slots means the transmission samples a range of conditions instead of gambling on one. Deep fades take fragments; the message still arrives.

#### Condition monitoring on rotating machinery

Vibration and temperature sensors sit on or beside the machines that generate the electrical noise — mounted on metal, surrounded by metal, often in the least accessible corner of the plant. These are also the sensors you least want to lose, because their value lies in an unbroken trend: a gap in the data is a gap in the failure signature you are trying to detect before it becomes a shutdown. MIOTY's tolerance for interference keeps that series continuous where the interference is worst.

#### Large building portfolios

Across a portfolio, coverage is fought floor by floor: concrete slabs, elevator shafts, plant rooms, and firebreaks all attenuate. Every base station you add is an install, a network drop, and an ongoing maintenance obligation multiplied across every building. MIOTY's combination of endpoint density and robustness in obstructed structures keeps infrastructure lean, so a portfolio rollout scales by adding sensors rather than by re-engineering coverage each time.

#### Agriculture at scale

Large landholdings invert the usual problem: coverage is broad, mains power is absent, and site visits are expensive. Endpoints must run for years untouched, spread across fields, silos, and outbuildings. MIOTY's low-power operation and long range fit the geography; its robustness matters around the metal and machinery of grain stores, barns, and pump houses, where the infrastructure that most needs monitoring is also the noisiest.

***

### Where Another Protocol May Fit Better

MIOTY is not the answer to every deployment, and Kilo does not require you to pick one protocol for your whole estate. Where the radio environment is benign, device counts are modest, and you want the widest possible choice of off-the-shelf sensors, [LoRaWAN](../lorawan-lr-fhss/lorawan/README.md) remains an excellent fit — and the two can coexist across your organization. Choose MIOTY when interference, density, or motion are the constraints that decide whether your data arrives.

Next: [Why Choose MIOTY?](why-choose-mioty.md).
