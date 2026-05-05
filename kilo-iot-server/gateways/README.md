# Gateways

Gateways are the connectivity infrastructure that brings field devices into the Kilo IoT Server. Different protocols use different gateway architectures, but they share the role of receiving telemetry at the network edge and forwarding it to the platform over an authenticated, encrypted channel.

This section is organized by gateway type. Today the platform supports one gateway category in production use cases, with the structure designed to accommodate additional categories as they are added:

## In this section

### [LoRaWAN gateways](lorawan-gateways/README.md)

Radio infrastructure for LoRaWAN and LR-FHSS deployments. A single gateway covers hundreds of devices across distances from 2–5 km in urban environments to 15 km or more in open areas, with backhaul options including Ethernet, Wi-Fi, LTE, and satellite. Required for any deployment using LoRaWAN-based sensors, meters, or asset trackers.

- [Deploying a LoRaWAN gateway](lorawan-gateways/deploying-a-lorawan-gateway.md)
- [Monitoring LoRaWAN gateways](lorawan-gateways/lorawan-gateway-monitoring.md)
- [Supported LoRaWAN gateways](lorawan-gateways/supported-lorawan-gateways.md)

## Choosing the right gateway category

For most commercial Kilo IoT Server deployments, the question is not "which category" but "how many" — the deployment topology is driven by the device fleet's protocol mix, coverage requirements, and operational redundancy needs. For LoRaWAN deployments, gateway placement and density planning are documented under the LoRaWAN gateways sub-section.

For deployments integrating non-LoRaWAN field equipment via MQTT-producing edge gateways (Modbus-to-MQTT, BACnet-to-MQTT, OPC-UA-to-MQTT, Sparkplug B), see the [MQTT edge gateways](../connectors/mqtt/mqtt-edge-gateways.md) page under the MQTT connector — those edge gateways are protocol-bridging hardware that publish into an MQTT broker, and they integrate via the [MQTT connector](../connectors/mqtt-connector.md) rather than as gateway records here.

## Secure by design

All gateway integrations to the Kilo IoT Server use encrypted, authenticated transport:

- **LoRaWAN gateways** use the LoRa Basics Station protocol, with certificate authentication — the legacy UDP Packet Forwarder, which transmits data without encryption, is not supported.
- **MQTT-producing edge gateways** connect via MQTTS (TLS) on port 1884 with credentials scoped to the connector.

In both cases, on-the-wire traffic is encrypted and unauthorized publishers cannot inject data into your namespace.
