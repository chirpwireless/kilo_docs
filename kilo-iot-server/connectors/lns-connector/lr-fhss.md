---
description: LR-FHSS in Kilo IoT Server — frequency-hopping LoRaWAN extension that scales to millions of devices for utility metering and wide-area sensing.
---

# LR-FHSS

LR-FHSS (Long Range Frequency Hopping Spread Spectrum) is an extension of the LoRaWAN protocol that uses frequency-hopping techniques to dramatically increase network capacity and interference resistance. For large-scale deployments — utility metering, wide-area sensing, satellite connectivity — LR-FHSS enables device densities that are impractical with standard LoRa modulation.

## Key Capabilities

### Massive Network Capacity

LR-FHSS can support thousands to millions of devices within the same network. By distributing each transmission across multiple frequency channels, it reduces the collision probability that limits standard LoRa in high-density scenarios. This makes it viable for deployments like city-wide metering infrastructure or national environmental monitoring grids.

### Superior Scalability

Standard LoRa transmissions occupy a single channel for their entire duration. LR-FHSS spreads each transmission across a broader slice of the available spectrum, dramatically reducing collision risk. The result is denser deployments with less interference and improved overall network throughput.

### Strong Interference Resistance

The frequency-hopping nature of LR-FHSS makes it inherently resistant to narrowband interference and channel noise. Even in crowded RF environments — industrial sites, urban areas with many competing radio systems — LR-FHSS maintains reliable data delivery.

### Improved Indoor Penetration

LR-FHSS maintains robust communication links with devices installed deep indoors or underground — utility meters in basements, sensors behind thick concrete walls — without requiring additional gateways to compensate for signal attenuation.

### Regulatory Compliance

In regions with strict dwell time regulations (limits on how long a signal can occupy a single channel), LR-FHSS naturally spreads transmissions over time and frequency. This enables longer-range and larger-payload communications while staying within legal constraints — a significant advantage for deployments in regulated markets.

### Long-Range Connectivity

With a link budget comparable to or better than classic LoRa at low data rates, LR-FHSS supports very long-range communication. This is particularly valuable for rural deployments, remote infrastructure monitoring, and satellite-based IoT networks.

## Hardware Compatibility

Many existing LoRa chipsets — including the Semtech SX1261, SX1262, and LR1110 — already support LR-FHSS through firmware updates. This means existing deployments can be upgraded to LR-FHSS capability without replacing hardware, and mixed networks (standard LoRa + LR-FHSS devices) can coexist on the same infrastructure.

## When to Use LR-FHSS

LR-FHSS is best suited for:

- **Massive metering deployments** — water, gas, and electric utility networks with tens of thousands of endpoints
- **Rural or remote areas** — limited gateway coverage where each gateway must serve a large number of devices
- **Satellite and long-range terrestrial IoT** — networks where devices communicate over extreme distances
- **Regulated environments** — markets with strict dwell time or duty cycle requirements

## Trade-offs

- **Longer time on air** — LR-FHSS packets generally spend more time transmitting than standard LoRa packets. However, the frequency-hopping avoids collisions more effectively, resulting in better overall efficiency in high-density networks.
- **Optimized for low gateway density** — LR-FHSS delivers its greatest advantage when few gateways serve many devices. In dense urban environments with many gateways, standard LoRa may still offer better per-gateway throughput.

For an overview of the LoRaWAN protocol, see [What is LoRaWAN?](what-is-lorawan.md). For regional frequency bands, see [LoRaWAN Frequencies](lorawan-frequencies.md).
