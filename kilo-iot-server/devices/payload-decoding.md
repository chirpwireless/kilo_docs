---
description: Find out which fields your device reports and what values they carry, and how those field names become the metrics you see across Kilo IoT Server.
---

# Payload Decoding and Connector Keys

A device transmits a compact payload — a handful of bytes, or a small JSON message. A **decoder** turns that payload into named fields, and those fields are what the rest of the platform works with. When you write a rule, build a dashboard widget, or tell a command which sensor to check, you are working with values that came out of the decoder.

Two names are involved, and they are usually not the same:

* A **connector key** is the field name your decoder produces — `t`, `socket_status`, `humidity_pct`. It comes from the device's firmware and its codec.
* A **metric** is the name you gave that field when you mapped it — *Temperature*, *Socket status*. This is the name shown on dashboards, in rules, and in the command editor.

Knowing which connector key sits behind which metric — and what values it actually carries — is what lets you write a condition or a verification check that works the first time.

## See what your device is reporting

Open the device and go to its **Metrics** tab (**Mapping** for MQTT devices). The connector keys table lists every field the device has actually sent, with:

* the **field name** exactly as the device sends it
* its **current value**
* the **last update** time

This is live data from the device, refreshed as new messages arrive, and it is the quickest way to answer "what does this device report, and in what form?". Copy the value from here when you need to match it elsewhere — a rule condition, a dashboard condition, or the expected value on a command.

A device that has not transmitted yet shows nothing. Wait for its next scheduled message, or trigger one from the device itself.

## Where the decoder lives

The decoder is the **Code functions** field on the device's **Connection** tab. Selecting a device profile template fills it in for you; configuring a device manually leaves it empty, and you paste in the codec from the manufacturer's documentation or a community codec repository.

You can edit it at any time. If the decoded output is missing fields, produces wrong values, or uses names that don't match the manufacturer's documentation, change the code and save — the next message the device sends is decoded with your version.

For the full device setup walkthrough, see [Registering Devices](registering-devices.md).

## Mapping keys to metrics

Mapping is what connects a connector key to a metric template, giving the raw field a readable name, a unit, and a type. Once mapped, that measurement appears under its metric name everywhere in the platform.

Do this from the same Metrics or Mapping tab — see [Registering Devices](registering-devices.md#mapping-raw-fields-to-metric-templates) for the step-by-step, and [Metric Templates](metric-templates.md) to create a template that doesn't exist yet.

A connector key that is never mapped keeps arriving but has nowhere to go: it will not appear in rules, dashboards or command verification.

## Values keep the form the device sent

The platform stores the value the decoder produced, unchanged. If your decoder returns the text `on`, the metric holds the text `on` — not `true`, and not `1`. If it returns the number `1`, the metric holds a number.

That matters wherever you compare a value:

* **In a rule**, a condition comparing text needs to compare against text: `vars.socket_status == "on"`.
* **On a command**, the expected value you type must match the form the sensor reports. See [Confirming Commands](commands/verification.md#expected-value).
* **In a dashboard condition**, the same rule applies.

When a comparison never matches, read the current value in the connector keys table and write your comparison to match what is there.

## Testing a mioty decoder before you rely on it

MIOTY devices decode through a blueprint rather than a code function, and blueprints come with **Decode preview** — run the decoder against a sample payload and inspect the fields it produces before you attach it to real devices. See [MIOTY Blueprints](mioty-blueprints.md).

For LoRaWAN and MQTT devices, the connector keys table is where you check the result: save the codec, wait for the next message, and read the fields it produced.

## When the fields aren't what you expected

**Keys are arriving but nothing appears in rules or dashboards.** The keys have not been mapped to metrics yet. Open the Metrics or Mapping tab and map the ones you want to use.

**The keys are not the ones you expected.** The decoder is producing different field names than the sensors on the device are looking for — a common result of a codec written for a different firmware or hardware revision. Compare the names in the connector keys table against your mappings, and either update the mappings or replace the codec.

**Nothing is decoded at all.** Check that the device is transmitting, then check the codec itself. [Device Diagnostics](device-diagnostics.md) shows how many keys were decoded from the most recent messages.

## Related

* [Registering Devices](registering-devices.md) — Device setup, codecs, and the mapping workflow
* [Metric Templates](metric-templates.md) — Normalized names, units, and value types
* [Device Diagnostics](device-diagnostics.md) — What the device last sent and whether it decoded
* [Confirming Commands](commands/verification.md) — Using a metric and its value to verify a command
