---
description: Activate the built-in LoRaWAN Network Server via the LNS connector — no external LNS to configure, no credentials swap.
---

# LNS Connector

The LNS connector links the Kilo IoT Server's built-in LoRaWAN Network Server to your organization. Because the LoRaWAN network integration is built directly into the server, adding the LNS connector is a lightweight operation — there is no external LNS to configure, no credentials to exchange, and no third-party service to maintain.

## Adding the LNS connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector**.
3. In the **Connector type** dropdown, select **LNS**.
4. Click **Add**.

The connector is created immediately with the name assigned automatically. No additional configuration is needed — the server's LoRaWAN network integration activates for your organization.

Each organization can have only one LNS connector. If your organization already has one, the LNS option will not appear in the dropdown.

## Inside the LNS connector

Click the LNS connector row in the connectors table to open it. The page is a summary — connector type, creation date, connected device count, and when data last arrived — and it states that this connector type has no editable settings. Everything the connector enables is worked on elsewhere in the sidebar:

- **Gateways** — Register and monitor the gateways that carry LoRaWAN traffic. See [LoRaWAN Gateways](../../gateways/).
- **Devices** — Register and manage the devices themselves. See [Registering Devices](../../devices/registering-devices.md) and [Device Management](../../devices/device-management.md).

<figure><img src="../../../.gitbook/assets/connector-lns-detail.jpg" alt="The LNS connector page showing connector type, creation date, connected devices and last data received"><figcaption></figcaption></figure>

## LoRaWAN Reference

The LNS connector uses LoRaWAN — a long-range, low-power wireless protocol designed for IoT. These reference pages cover the protocol, frequency bands, and the built-in network server:

- [What is LoRaWAN?](what-is-lorawan.md) — Protocol overview, core benefits, and ideal use cases
- [LoRaWAN Frequencies](lorawan-frequencies.md) — Regional frequency bands by country and compliance guidance
- [LoRa 2.4 GHz](lora-2g4.md) — The global 2.4 GHz ISM band for cross-border and high-throughput deployments
- [LR-FHSS](lr-fhss.md) — Frequency-hopping for massive-scale networks and interference resistance
- [Built-in Network Server](built-in-lns.md) — How the integrated LPWAN server eliminates external infrastructure
