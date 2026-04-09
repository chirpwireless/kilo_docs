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

Click the LNS connector row in the connectors table to open it. The LNS connector page has two tabs:

- **LoRaWAN Gateways** — Your gateway list. See [LoRaWAN Gateways](../gateways/) for gateway setup and monitoring.
- **Connected Devices** — Your device list. See [Registering Devices](../devices/registering-devices.md) and [Device Management](../devices/device-management.md) for the full workflow.
