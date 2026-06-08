---
description: Send downlink commands from Kilo IoT Server to control almost any device — toggles, setpoints, dimming, color temperature, reboots, and configuration over MQTT or LoRaWAN.
---

# Device Commands

Monitoring tells you what a device is doing. **Commands** let you change it. With Device Commands, the Kilo IoT Server stops being a one-way data pipe and becomes a two-way control plane: you define the actions a device can perform, then dispatch them on demand, from a dashboard, or as the closing step of an automated workflow.

Almost anything a device can be told to do is a command. Switch a relay or smart plug on or off. Dim a luminaire to 40% and set its color temperature to 4000 K. Push a new temperature setpoint to an HVAC controller. Open or close a valve. Reboot a gateway-attached controller, change its reporting interval, or write a configuration register. If the hardware accepts a downlink, the platform can send it — and it sends it the same way whether the device speaks **MQTT** or **LoRaWAN**.

## Why it matters

Without an integrated command layer, controlling a device means leaving the platform: a separate vendor app, a hand-built MQTT publisher, a script that crafts raw downlink bytes, or a field technician with a laptop. Each of those is an unmanaged path with no audit, no verification, and no shared definition of what "turn it on" actually means for a given model.

Device Commands collapses that into one modeled, reusable, auditable surface:

* **Define once, reuse everywhere.** A command is a named action with typed parameters. Operators execute it without ever seeing the raw payload, byte layout, or topic.
* **Protocol-agnostic control.** The same command concept covers an MQTT downlink to a smart plug and a LoRaWAN downlink to a Class C controller — the platform handles the encoding and delivery for each.
* **Closed-loop confidence.** Commands can verify that the device actually acted, not just that the message left the building (see [Confirming Commands](verification.md)).
* **Full execution history.** Every dispatch is recorded with its outcome, giving operations and compliance teams a complete record of who changed what, and when.

## Where commands live

Commands are managed on the device's detail page, under the **Commands & States** tab. The tab has two sub-tabs:

* **Commands** — the design surface. Define, edit, and remove the actions a device can perform. See [Creating Commands](creating-commands.md).
* **States** — the operations surface. Execute available commands and review the lifecycle and result of every past execution. See [Executing Commands](executing-commands.md).

The **Commands & States** tab appears for devices that can receive downlinks:

* **MQTT devices** — any device connected through an MQTT connector.
* **Class C LoRaWAN devices** — Class C devices listen continuously and are always ready to receive commands, so the tab becomes available once a device is configured as Class C. (Class A devices only open a brief receive window after each uplink, so they are not eligible for on-demand control.)

A device is considered **controllable** once it has at least one command defined — that is also what makes it selectable for a dashboard [Control widget](../../dashboards/adding-widgets/control-widget.md).

## Prerequisites

Before you can control a device, make sure:

1. **The device can receive downlinks** — it is connected over MQTT, or it is a Class C LoRaWAN device.
2. **At least one command is defined** — an empty device exposes nothing to execute. Start in [Creating Commands](creating-commands.md).
3. **You have the access to manage or execute commands** — defining commands and dispatching them are governed by your organization's access policy.
4. **Parameters are valid** — when a command takes inputs (a brightness level, a setpoint), the values must satisfy the limits set on each parameter before the command will send.

## How control fits together

Device Commands is the engine. It surfaces in two other places in the platform:

* **Dashboards** — a [Control widget](../../dashboards/adding-widgets/control-widget.md) binds a command to a Switch or Button so anyone with dashboard access can operate the device without opening its detail page.
* **Automations** — rules respond to conditions and route alerts through the [Rules Engine](../../rules-engine/) and the Alarm system, so an out-of-bounds reading can trigger the right people and the right workflow.

Continue to [Creating Commands](creating-commands.md) to define your first action.
