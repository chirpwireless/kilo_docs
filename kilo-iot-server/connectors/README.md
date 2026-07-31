---
description: Connect device protocols to Kilo IoT — LNS (LoRaWAN), Tracker (OBD2/CAN/GPS), MQTT, Mioty, and the Emulator in one pipeline.
---

# Connectors

Each connector establishes an organization-level connection to a specific device protocol or data source. Connectors do not create devices — device registration is a separate workflow. A connector enables the server to accept data from devices of that type once they are registered.

Without at least one connector, the server has no protocol binding to receive device data through. Every data path — whether LoRaWAN, vehicle tracker, or a future protocol — starts with a connector.

## Connector types

Kilo IoT Server supports the following connector types:

| Type | Protocol | Status | What it connects |
|------|----------|--------|------------------|
| **LNS** | LoRaWAN | GA | The server's built-in LoRaWAN Network Server. Manages LoRaWAN device communication automatically. |
| **Tracker** | OBD2 / CAN bus / GPS | GA | Vehicle trackers — OBD2, CAN bus, and standalone GPS vehicle tracking devices. Includes preconfigured templates for over 2,000 vehicle tracker models. |
| **MQTT** | MQTT | GA | Direct MQTT device connections. Two variants: **External MQTT** connects to your own broker (up to 10 per organization); **Cloud MQTT** uses a platform-provisioned broker with dedicated credentials per connector (unlimited). |
| **Mioty** | MIOTY | GA | The MIOTY service center binding for your organization. Provisions a BSSCI address that your MIOTY base stations connect to, and unlocks the MIOTY endpoint fields on the device form. |
| **Emulator** | — (generated data) | GA | Devices that generate their own telemetry, so you can build and test a deployment before any hardware arrives — then swap the device to a real connector when it does. |

Each organization can have **one LNS connector** and **one Tracker connector**. MQTT connectors come in two variants with different limits: External MQTT — up to 10 per organization; Cloud MQTT — unlimited.

## The Connectors page

Navigate to **Connectors** in the sidebar to see the connectors table. The table shows all connectors configured for your organization with the following columns:

| Column | Description |
|--------|-------------|
| **Name** | The connector name (assigned automatically during creation) |
| **Last data received** | When the connector last received data from a device |
| **Connected devices** | Number of devices registered through this connector |
| **Creation date** | When the connector was added |

### Row actions

Each connector row has action buttons:

- **Add device** — Opens the device registration dialog with this connector preselected — a shortcut into the shared registration flow.
- **Remove connector** — Removes the connector from the organization. A confirmation dialog appears before deletion.

Click anywhere on a connector row to open that connector's detail page, where you can manage gateways (for LNS) or view and manage connected devices.

## Adding a connector

1. From the **Connectors** page, click **Add connector** in the top-right corner.
2. In the dialog, select a **Connector type** from the dropdown:
   - **LNS** — if your organization does not already have an LNS connector
   - **Tracker** — if your organization does not already have a Tracker connector
   - **External MQTT** — connects to your own MQTT broker (up to 10 per organization)
   - **Cloud MQTT** — platform-provisioned broker; each connector gets its own dedicated credentials (unlimited)
   - **Mioty** — binds your organization to the MIOTY service center and provisions its BSSCI address
   - **Emulator** — generates device data with no hardware, so you can build and test before your sensors arrive (one per organization)
3. Click **Add**.

For LNS, Tracker and Emulator connectors, no additional configuration is required during creation — the server handles the integration automatically. For External MQTT, configure broker connection details after creation. For Cloud MQTT, the platform generates and displays credentials immediately after creation.

## What's next

Once a connector is in place, you can:

- **Configure the LNS connector** — manage LoRaWAN gateways and connected devices, and explore LoRaWAN protocol reference material including frequency bands by country. See [LNS Connector](lns-connector/README.md).
- **Configure the Tracker connector** — onboard vehicle trackers (OBD2, CAN bus, standalone GPS). See [Tracker Connector](tracker-connector.md).
- **Configure an MQTT connector** — connect PLCs, energy meters, building management systems, or any MQTT-capable hardware. Use External MQTT to connect your own broker, or Cloud MQTT to have the platform provision a broker endpoint for you. See [MQTT Connector](mqtt-connector.md).
- **Configure the Mioty connector** — bind your organization to the MIOTY service center, get its BSSCI address, and unlock base station registration and MIOTY endpoint fields. See [MIOTY Connector](mioty-connector.md).
- **Add the Emulator connector** — stand up devices that generate their own telemetry, so dashboards, rules and alarms can be built and proven before any hardware is on site. See [Emulator Connector](emulator-connector.md).
- **Register devices** — add devices through any connector and configure their Digital Twin. See [Registering Devices](../devices/registering-devices.md).
