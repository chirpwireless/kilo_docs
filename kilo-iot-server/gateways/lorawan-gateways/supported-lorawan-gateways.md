# Supported LoRaWAN Gateways

Kilo IoT works with any LoRaWAN gateway that meets the compatibility requirements described on this page. There is no proprietary hardware requirement — you choose the gateway that fits your deployment environment, budget, and coverage needs.

## Requirements

### LoRa Basics Station protocol

The gateway must support the **LoRa Basics Station** protocol for its connection to the network server. This is a non-negotiable requirement.

Basics Station is the modern, secure standard for gateway-to-server communication in LoRaWAN deployments. It replaces the legacy Semtech UDP Packet Forwarder, which transmits data without encryption or authentication.

**Why Basics Station matters:**
- Communication between the gateway and the server is encrypted using TLS certificates
- The gateway authenticates itself to the server using a downloaded certificate bundle — preventing unauthorized gateways from connecting
- Session management and reconnection are handled automatically
- The protocol is maintained and recommended by the LoRa Alliance

### Legacy Packet Forwarder is not supported

Gateways that only support the legacy UDP Packet Forwarder (sometimes called "Semtech Packet Forwarder" or "Legacy mode") cannot connect to Kilo IoT. If your gateway offers both modes, ensure it is configured in Basics Station mode.

### Secure connectivity

During gateway registration, you receive:
- An **LNS Address** — the server endpoint the gateway connects to
- A **certificate bundle** (`certs.zip`) — the TLS credentials for authenticating the connection

The gateway must be capable of using these to establish a secure Basics Station connection to the provided LNS Address.

## Choosing a gateway

When selecting gateway hardware, verify:

1. **Basics Station support** — Check the manufacturer's specifications or firmware changelog. Most modern LoRaWAN gateways support Basics Station, but some budget or older models may only offer the legacy protocol.
2. **Frequency band** — The selected region must match the band supported by the gateway hardware, not just the country label in the UI. In many cases, a gateway bought for use in a given country already matches the common regional band, but you should still verify the hardware specification. For example, most EU deployments use EU868, while EU433 is a special-case option that should only be used with hardware specifically built or configured for 433 MHz.
3. **Indoor vs. outdoor** — Choose based on your deployment environment. Indoor gateways are typically smaller and less expensive. Outdoor gateways offer better range and weather resistance for campus or agricultural deployments.
4. **Power and connectivity** — Consider both the power source and the backhaul available at the installation site. Some gateways are mains-powered, while others can run from autonomous power systems such as solar. Backhaul options vary by model and may include Ethernet, Wi-Fi, cellular, or satellite.
5. **Antenna** — External antenna connections provide better range and flexibility than built-in antennas, especially in industrial or multi-building environments.

## Verifying compatibility

If you're unsure whether a specific gateway model is compatible:

1. Check the manufacturer's documentation for "Basics Station" or "LNS" support.
2. Look for firmware that includes Basics Station configuration options (LNS URI/address field and certificate upload).
3. If the documentation mentions "Semtech UDP Packet Forwarder" as the only connection mode, the gateway is not compatible in that firmware version — check for a firmware update that adds Basics Station.

## Coverage planning

- **Indoor:** LoRaWAN signals penetrate many walls better than short-range indoor protocols, but each concrete slab, metal wall, or service shaft reduces signal strength. A single gateway may cover a floor, several adjacent floors, or a small warehouse depending on the structure.
- **Campus / multi-building:** A gateway mounted high on a roof or other elevated point can often cover a large part of a campus and may still reach lower floors or basements in nearby buildings. Start with the highest practical placement, then validate signal quality where sensors will actually operate.
- **Basements and shielded spaces:** Basements, plant rooms, underground corridors, and reinforced service areas sometimes need additional indoor gateways even when rooftop coverage is good elsewhere.
- **Remote and outdoor sites:** For industrial yards, utility sites, agricultural land, or remote facilities, a single outdoor gateway can cover several kilometers of open area. Add more gateways where terrain, structures, or distance create weak spots.
- **Signal testing:** Before committing to permanent gateway placement, verify coverage at the actual sensor locations and add indoor gateways where penetration is not reliable enough for the use case.
