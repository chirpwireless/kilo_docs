# LoRaWAN gateways

A LoRaWAN gateway is the radio infrastructure that receives signals from your sensors and forwards them to the Kilo IoT Server. Gateways support both **LoRaWAN** and **LR-FHSS** (Long Range Frequency Hopping Spread Spectrum) protocols. Every LoRaWAN or LR-FHSS device in your deployment communicates through at least one gateway — it is the first link in the data chain.

A single gateway can serve hundreds of devices within its coverage area, which typically ranges from 2–5 km in urban environments to 15 km or more in open areas. LoRaWAN signals also penetrate many common walls and floors better than short-range building protocols, so a gateway mounted on the roof of a campus building can often provide usable coverage across the site and even into lower floors or basements. Actual performance depends on construction materials, terrain, and underground layout. For multi-building or campus deployments, additional gateways are added where coverage needs to be strengthened.

Gateways are not limited to office or plant-network installations. Depending on the hardware, they can run from mains power or autonomous power systems such as solar, and they can use Ethernet, Wi-Fi, LTE, or satellite backhaul. That makes them suitable for remote industrial sites, outdoor infrastructure, and other locations with limited or unavailable local network access. In dense structures or below-grade areas such as basements, tunnels, or plant rooms, an additional indoor gateway is often added when a single outdoor gateway does not provide reliable signal penetration.

## Basics Station required

Kilo IoT supports gateways that use the **LoRa Basics Station** protocol. Basics Station establishes a secure, certificate-authenticated connection between the gateway and the server — unlike the legacy UDP Packet Forwarder, which transmits data without encryption.

During gateway setup, you download a certificate bundle and an LNS address. These are what your gateway uses to authenticate and establish its connection. If your gateway does not support Basics Station, it cannot connect to the server.

The gateway registration documented here is the current user-facing path available from the Gateways page. This is a transitional registration flow while the platform evolves. Earlier gateway workflows related to crypto-based onboarding programs are not covered and should not be used for new gateway deployments.

## In this sub-section

- **[Deploying a LoRaWAN gateway](deploying-a-lorawan-gateway.md)** — Register a new gateway, download its certificates, and configure the hardware to connect.
- **[Monitoring LoRaWAN gateways](lorawan-gateway-monitoring.md)** — View status, availability, traffic, and pings across your gateway fleet. Manage settings, regenerate certificates, and track firmware versions.
- **[Supported LoRaWAN gateways](supported-lorawan-gateways.md)** — Compatibility requirements for choosing gateway hardware.
