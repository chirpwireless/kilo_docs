# LoRa 2.4 GHz

The Kilo IoT Server supports LoRa 2.4 GHz alongside traditional sub-GHz LoRa frequencies. The 2.4 GHz band opens deployment scenarios where global consistency, higher data throughput, or operation in dense wireless environments are required — without sacrificing the low-power characteristics that make LoRaWAN effective for IoT.

## Why 2.4 GHz Matters for Deployments

### Global, License-Free Operation

The 2.4 GHz ISM band is available worldwide without region-specific regulatory approvals. A single device hardware design can be manufactured and deployed across multiple countries without modifying the radio configuration or going through additional certifications. This significantly simplifies procurement, logistics, and inventory management for organizations operating across borders.

### Higher Data Throughput

Compared to sub-GHz LoRa, the 2.4 GHz band supports higher data rates. This makes it well-suited for applications where devices need to transmit larger payloads or communicate more frequently — without compromising battery life.

### Expanded Channel Availability

Operating at 2.4 GHz provides more frequency channels than traditional sub-GHz ISM bands. This reduces congestion in crowded radio environments and gives network designers greater flexibility when scaling device density within a site.

### Coexistence with Other Wireless Technologies

The 2.4 GHz spectrum is shared with Wi-Fi, Bluetooth, and Zigbee. LoRa 2.4 GHz is engineered to coexist with these technologies, making it practical for environments like industrial facilities, smart buildings, or commercial campuses where multiple wireless systems operate in parallel.

### Adequate Range for Most IoT Use Cases

While higher frequencies generally reduce transmission range, LoRa at 2.4 GHz can still achieve several kilometers of line-of-sight coverage — up to 8–10 km under optimal conditions. Indoor performance remains effective, making it suitable for building-level and campus-level deployments.

### Cost-Effective and Battery-Friendly

Modules for 2.4 GHz LoRa are similarly priced to their 868 MHz and 915 MHz counterparts, and remain well-suited for low-power, battery-operated devices.

## When to Use LoRa 2.4 GHz

LoRa 2.4 GHz is a strong choice for:

- **Global or cross-border deployments** — international asset tracking, logistics, or supply chain monitoring where devices move between regulatory regions
- **High-data IoT applications** — scenarios requiring increased bandwidth and channel density beyond what sub-GHz bands provide
- **Dense wireless environments** — factories, commercial buildings, and campuses where Wi-Fi, Bluetooth, and other 2.4 GHz systems are already operating
- **Larger payload transmissions** — low-power image or audio data where slightly higher throughput is required while staying energy-efficient

When registering a device on the Kilo IoT Server, select **ISM2400** in the Band field to configure a device for the 2.4 GHz band.

For sub-GHz regional frequency bands, see [LoRaWAN Frequencies](lorawan-frequencies.md). For an overview of the LoRaWAN protocol, see [What is LoRaWAN?](what-is-lorawan.md).
