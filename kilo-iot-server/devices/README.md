---
description: "Understand IoT digital twins in Kilo: connect hardware, replace sensors, and keep an asset's measurement history together."
---

# Devices

A **Digital Twin** in Kilo IoT Server is a persistent digital device representing something you monitor or control: a refrigerator, a pump, a vehicle, or an individual sensor. Its name, measurements, history, and configuration belong to that digital record. Physical hardware supplies the readings through a connector and can be replaced without creating a new twin.

This is useful whenever the equipment you care about lasts longer than the sensor measuring it. A refrigeration operator needs the temperature record for **Refrigerator 1**, even after its original probe is replaced. Building the monitoring around the refrigerator's twin keeps that record together across hardware changes.

<figure><img src="../../.gitbook/assets/deviceslist.jpg" alt="Kilo Devices list showing the digital devices in a deployment"><figcaption><p>Each entry is a digital device with its own identity, configuration, and measurements.</p></figcaption></figure>

## How an IoT digital twin connects to hardware

Three parts work together:

| Part | What it represents | Refrigerator example |
|---|---|---|
| Digital device | The lasting record of the monitored object | Refrigerator 1, with its name, photo, and measurements |
| Connected source | The hardware or emulator supplying data through a connector | A LoRaWAN temperature probe |
| Measurements | The readings mapped onto the twin | Temperature in °C and the probe's battery level |

A digital device has one connected source at a time. That source can provide several measurements. Supported source types include LoRaWAN, MIOTY, MQTT-connected equipment, vehicle trackers, and the Emulator. A protocol adapter can bring other equipment in through MQTT; the connector must receive a supported payload and the readings must be mapped.

A **metric template** defines what a measurement means, including its unit and value type. A **connector key** is the field name arriving from the source. Mapping connects the two, so a probe reporting `temp_c` and its replacement reporting `temperature` can feed the same temperature measurement on the twin. See [Metrics](metric-templates.md).

## Replacing a refrigeration probe without starting over

Consider a pharmaceutical refrigerator whose probe is replaced after a failure or because it no longer meets the operator's calibration requirements:

1. Register a digital device named **Refrigerator 1** and connect the installed probe.
2. Map its temperature reading to a temperature metric in °C. Add a [chart](../dashboards/adding-widgets/chart-widget/line-chart.md) and configure an [alarm](../alarm/README.md) for the operating limits appropriate to the installation.
3. When the probe needs replacing, open **Refrigerator 1** and detach its physical device from the **Connection** tab.
4. Bind the replacement probe to that same digital device. Reconnect its incoming fields to the existing measurement rows.
5. Check the new values and timestamps, then review a history range spanning the replacement.

The refrigerator keeps its identity and existing measurement history. Dashboard and rule references to those retained measurements continue to refer to the same record. The new probe supplies future readings; it does not erase the old probe's readings or fill a gap when no probe was reporting.

Follow [Replace a physical sensor](device-management.md#replace-a-physical-sensor) for the detailed procedure. Keep the existing measurement rows when changing a source: deleting and recreating them is a different operation from remapping their incoming fields.

## Build around the asset's lifecycle

The same model supports more than replacement. Create the digital device before commissioning hardware, give it an asset-oriented name, and add a photo that helps the team recognize it. Use **Application** to associate it with the solution it belongs to. Use the [Emulator](emulated-devices.md) to prepare dashboards and automation with generated readings before connecting real equipment.

Once hardware reports, the twin's measurements can feed dashboards, alarm conditions, and rules. Where the hardware supports it, [commands](commands/README.md) also let users or rules request an action and check reported feedback. Replacing an actuator requires checking its command payloads and routing against the new model, even when the twin stays the same.

Across multiple refrigerators or sites, consistent metric definitions let the team compare the same kinds of readings while each asset keeps its own record.

## How long history is retained

History remains subject to the retention period included in your plan or agreed for your organisation. Replacing a probe does not reset that period or extend the lifetime of older readings.

For longer-term refrigeration records or other compliance and operational needs, contact the team to discuss extended retention. See [Data retention](../settings/subscription.md#data-retention) for plan limits and the request route.

## Choose the source for your digital twin

| Source | Start here |
| --- | --- |
| LoRaWAN sensor | [LoRaWAN Devices](lorawan-devices.md) — profiles, radio identity, decoding and first readings |
| MQTT publisher or bridged sensor | [MQTT Devices](mqtt-devices.md) — connect messages to a twin and its measurements |
| GPS tracker | [Tracker Connector](../connectors/tracker-connector.md) — tracker identity, model and reporting endpoint |
| MIOTY endpoint | [MIOTY Devices](mioty-devices.md) — endpoint configuration and blueprint decoding |
| Generated readings | [Emulated Devices](emulated-devices.md) — prepare a deployment before hardware arrives |

## In this section

- [Registering Devices](registering-devices.md) — the shared registration flow, and the fields each connector type asks for.
- [Device Management](device-management.md) — replace a physical sensor while keeping its twin, manage mappings, and review history.
- [Device Diagnostics](device-diagnostics.md) — why a device is silent: reception status, pipeline, and the event feed.
- [Metrics](metric-templates.md) — units, metric keys and templates that normalize raw sensor data across manufacturers.
- [Payload Decoding and Connector Keys](payload-decoding.md) — see which fields a device reports and what values they carry.
- [MIOTY Devices](mioty-devices.md) and [MIOTY Blueprints](mioty-blueprints.md) — commissioning MIOTY endpoints and decoding their payloads.
- [Emulated Devices](emulated-devices.md) — devices that generate their own data, so you can build before the hardware arrives.
- [Device Commands](commands/README.md) — defining, confirming and dispatching the actions a device can perform.
