---
description: How Kilo IoT Server confirms a command took effect — no verification, next-uplink check, or query after the ack.
---

# Confirming Commands

Sending a command and knowing it worked are two different things. A downlink can be accepted for delivery and still never change the physical device — the device might be asleep, out of range, or simply ignore it. The **Verification** section of the command editor lets you tell the platform how to confirm that a command actually took effect, so an execution is only marked successful when there is real evidence behind it.

Verification is configured per command, in **section 4** of the [command editor](creating-commands.md). Choose one of three strategies.

## No verification

Fire-and-forget. The command is sent and the platform does not check the result.

With this strategy, an execution is marked **Confirmed as soon as the downlink is accepted for delivery — not when the device acts on it.** There is no guarantee the action had any effect. This is appropriate for non-critical, idempotent actions where a missed command is harmless and will be re-sent anyway, but never rely on it as proof that something physically changed.

## Wait for next uplink

After the command is sent, the platform waits for the device's next regular uplink and checks it against the **expected sensor states** you define. When the reported values match, the execution is confirmed.

This suits devices that report on a schedule and reflect their state in normal telemetry — for example, a controller that includes its current setpoint or relay position in every uplink.

## Query after ack

The most thorough option. After the device acknowledges the command, the platform sends a **query command** — a small read that pokes the device for its current state — and matches that query's uplink response against the expected states.

* **Query command** — Select an existing query command, or **create a new one** inline. A query command is a dedicated, lightweight command type: a **state-polling read with no operator parameters**, so there is nothing to fill in at execute time. It is always itself set to **No verification** — the query *is* the verification step, and its uplink is what gets checked, so it carries no verification block of its own. Once saved it appears in the Commands list, flagged as suitable as a query, and can be reused by any other command's *Query after ack*.
* In the **New query command** dialog you define the payload that polls the device. For MQTT devices, choose whether to **Send as-is** (deliver the payload exactly as written) or **Process with encoder** (run it through the device's encoder first).
* The query runs after the device acks, and its response is evaluated against the expected states below.

Use this when a device does not volunteer its state in routine uplinks but will answer a direct read.

## Expected sensor states

Both *Wait for next uplink* and *Query after ack* check the device's reported telemetry against the states you declare here. Click **Add State** to add a row:

* **Metric** — Select one of the device's mapped sensors. (If nothing is mapped yet, the editor links you to the Mapping section to set sensors up first.)
* **Expected value** — Either a literal value, or a reference to one of the command's parameters using `{{ parameterName }}` — so a "set brightness to 60" command can verify the device now reports brightness 60.

Reference at least one expected state; the placeholder you use must match a parameter defined in the payload section.

## Convergence timeout

The **Convergence timeout** is how long the platform waits for the reported state to match before it gives up.

* Leave it empty to use the platform default of **1.5 × the device's data sending interval**.
* If the window passes without a match, the execution is marked **Soft warning** rather than Failed — the command was delivered and acknowledged, but the platform could not confirm the effect within the expected time. This distinction matters operationally: a soft warning is "we couldn't confirm," not "it definitely failed."

## Choosing a strategy

| Strategy | Confirms | Best for |
| --- | --- | --- |
| No verification | Delivery only | Low-stakes, repeatable actions |
| Wait for next uplink | Reported state on the next scheduled message | Devices that report their state routinely |
| Query after ack | Reported state from a direct query | Devices that answer reads but don't volunteer state |

Once verification is set, move on to [Executing Commands](executing-commands.md) to dispatch the command and watch the result.
