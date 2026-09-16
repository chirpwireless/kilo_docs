---
description: KiloCenter onboarding — connect MIOTY base stations, register endpoints, verify first uplink and downlink.
---

# Onboarding

Bring your MIOTY radio network online by connecting a base station, registering an endpoint, and checking the messages between them. A **base station** is MIOTY's radio gateway; an **endpoint** is the sensor or other device using that network.

These guides configure the open-source Kilo Center service center. The result is working network communication that your own application can use. For device onboarding inside the full platform—with dashboards, widgets, rules, and alerts—follow the [Kilo Cloud MIOTY guide](../../../kilo-iot-server/connectors/mioty-connector/README.md).

Follow these guides in order:

1. [Connect a Base Station](connect-a-base-station.md) and confirm that its connection is online.
2. [Register an Endpoint](register-an-endpoint.md) with the identifiers and keys that match the hardware.
3. [Verify the First Uplink](verify-the-first-uplink.md), a message travelling from the device to Kilo Center.
4. [Verify the First Downlink](verify-the-first-downlink.md), a message sent toward the device, if both the endpoint and base station support bidirectional communication.

Begin after [installation and configuration](../getting-started/README.md). Receiving an uplink confirms the incoming data path; queuing a downlink alone does not prove that a device carried out an action.

