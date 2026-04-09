# LoRaWAN Gateways

A LoRaWAN gateway is the radio infrastructure that receives signals from your sensors and forwards them to the Kilo IoT Server. Gateways support both **LoRaWAN** and **LR-FHSS** (Long Range Frequency Hopping Spread Spectrum) protocols. Every LoRaWAN or LR-FHSS device in your deployment communicates through at least one gateway — it's the first link in the data chain.

A single gateway can serve hundreds of devices within its coverage area, which typically ranges from 2–5 km in urban environments to 15 km or more in open areas. LoRaWAN signals also penetrate many common walls and floors better than short-range building protocols, so a gateway mounted on the roof of a campus building can often provide usable coverage across the site and even into lower floors or basements. Actual performance still depends on construction materials, terrain, and underground layout. For multi-building or campus deployments, you add more gateways where coverage needs to be strengthened.

Gateways are not limited to office or plant-network installations. Depending on the hardware, they can run from mains power or autonomous power systems such as solar, and they can use different backhaul options including Ethernet, Wi-Fi, LTE, or satellite. That makes them suitable for remote industrial sites, outdoor infrastructure, and other locations where local network access is limited or unavailable. In dense structures or below-grade areas such as basements, tunnels, or plant rooms, it is common to add an extra indoor gateway if one outdoor gateway does not provide reliable signal penetration.

## Basics Station required

Kilo IoT supports gateways that use the **LoRa Basics Station** protocol. Basics Station establishes a secure, certificate-authenticated connection between the gateway and the server — unlike the legacy UDP Packet Forwarder, which transmits data without encryption.

During gateway setup, you download a certificate bundle and an LNS address. These are what your gateway uses to authenticate and establish its connection. If your gateway does not support Basics Station, it cannot connect to the server.

The gateway registration documented here is the current user-facing path available from the Gateways page. This is a transitional registration flow while the platform evolves. Earlier gateway workflows related to crypto-based onboarding programs are not covered and should not be used for new gateway deployments.

## What you can do with LoRaWAN gateways

- **[Deploy a LoRaWAN gateway](deploying-a-lorawan-gateway.md)** — Register a new gateway, download its certificates, and configure the hardware to connect.
- **[Monitor LoRaWAN gateways](lorawan-gateway-monitoring.md)** — View status, availability, traffic, and pings across your gateway fleet. Manage settings, regenerate certificates, and track firmware versions.
- **[Supported LoRaWAN gateways](supported-lorawan-gateways.md)** — Understand compatibility requirements for choosing gateway hardware.
