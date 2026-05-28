---
description: What is LR-FHSS — frequency-hopping LoRaWAN extension built for utility metering, wide-area sensing, and millions of devices per network.
---

# What is LR-FHSS?

### LR-FHSS over LoraWAN<br>

#### Significantly Higher Network Capacity

LR-FHSS can support **thousands to millions of devices** within the same network, making it ideal for massive-scale IoT deployments such as utility metering and wide-area sensing.

#### Superior Scalability

By distributing transmissions across a broader slice of the spectrum, LR-FHSS dramatically reduces collision risks. This enables **denser deployments** with less interference and improved network performance.

#### Strong Interference Resistance

The frequency-hopping nature of LR-FHSS makes it more resistant to channel noise and in-band interference—ensuring **reliable data delivery** even in crowded RF environments.

#### Improved Indoor Penetration

LR-FHSS maintains robust communication links with **deep indoor or underground devices**, such as utility meters in basements or behind thick walls—without requiring additional gateways.

#### Regulatory Compliance

In countries with **strict dwell time regulations** (time a signal can occupy a channel), LR-FHSS helps spread transmissions over time and frequency, enabling longer-range and larger-payload communications within legal constraints.

#### Long-Range Connectivity

With a link budget similar to or better than classic LoRa at low data rates, LR-FHSS is capable of **very long-range communication**, ideal for rural or infrastructure-light environments.

#### Hardware Compatibility

Many **existing LoRa chipsets**—such as the Semtech SX1261, SX1262, and LR1110—already support LR-FHSS with firmware updates. This makes it easy to upgrade existing deployments or mix LR-FHSS and LoRa devices within the same network.

***

### When to Use LR-FHSS

LR-FHSS is best suited for:

* **Massive metering deployments** (water, gas, electric utilities)
* **Rural or remote areas** with limited gateway coverage
* **Satellite and long-range terrestrial IoT networks**
* **Projects requiring strong interference immunity and regulatory efficiency**

***

### Important Considerations

* **Longer Time on Air:**\
  LR-FHSS packets generally stay on air longer than standard LoRa transmissions, but avoid collisions more effectively—resulting in **better efficiency overall** in high-density networks.
* **Ideal for Low Gateway Density:**\
  LR-FHSS is optimized for situations with **few gateways and high device density**. In dense urban environments with many gateways, traditional LoRa may still offer better throughput per gateway.
