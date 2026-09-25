---
description: Build turn-on and turn-off commands for a smart socket end to end — payload, encoder, verification, and running them from the States tab.
---

# Example: On and Off Commands for a Smart Socket

This walkthrough builds two commands on one device and verifies that they worked. It uses an illustrative mains-powered LoRaWAN socket and byte layout. Use the port, payload, and feedback values specified for your actual model; these example bytes are not a universal socket command.

Follow it in order — each section produces something the next one needs.

## Before you start

* The LoRaWAN socket is registered and transmitting. This example uses Class C for responsiveness; Class A receives downlinks after an uplink.
* You can see its readings on the **Mapping** tab.

## 1. Find out how the device reports its state

Open the device and go to the **Mapping** tab. Look through the connector keys table for the field that carries the relay state, and note two things: the field name, and the value it is showing right now.

For this socket:

| Connector key | Current value |
| --- | --- |
| `socket_status` | `off` |

That value is what a verification check will compare against later, so write it down exactly as it appears — `off`, not `OFF` or `false`.

If the field is not mapped to a metric yet, map it now: the command editor selects sensors by their metric name, so an unmapped field cannot be used to verify anything. See [Payload Decoding and Connector Keys](../payload-decoding.md).

In this example `socket_status` is mapped to a metric named **Socket status**.

## 2. Create the Turn ON command

Open **Commands & States → Commands** and click **Add new command**.

<figure><img src="../../../.gitbook/assets/device-command-editor.jpg" alt="The command editor with the identity, routing and payload sections of a device command"><figcaption></figcaption></figure>

**1. Identity**

* **Command name** — `Turn ON`

**2. Routing**

* Set the **fPort** specified for your socket and turn **Confirmed downlink** on.

**3. Payload**

This command takes no parameters — it always sends the same thing — so add none, and define the payload the encoder should build. The illustrative payload uses three bytes: channel `0x08`, type `0x70`, and the state, `0x01` for on.

Set **Encoder input template** to `{"relay_on": true}`, enable **Use custom encoder JS**, and enter:

```javascript
function encodeDownlink(input) {
  return { bytes: [0x08, 0x70, input.data.relay_on ? 0x01 : 0x00] };
}
```

Use **Try Encoder** to check the result before saving. It shows the encoded output in hex and base64 with its size in bytes, so you can confirm the payload is `08 70 01` before the command ever reaches the device.

**4. Verification**

Choose **Wait for next uplink** — the socket reports its state in every routine message, so there is no need to poll it.

Under **Expected sensor states**, click **Add State**:

* **Metric** — *Socket status*
* **Expected value** — `on`

Use the spelling reported by the mapped String measurement. If your model reports `ON` instead, use `ON`. See [Confirming Commands](verification.md#expected-value).

Click **Save**.

## 3. Create the Turn OFF command

Repeat the steps above with three changes:

* **Command name** — `Turn OFF`
* **Encoder input template** — `{"relay_on": false}`, producing the state byte `0x00`
* **Expected value** — `off`

Everything else stays the same.

## 4. Run them and check the result

Go to the **States** tab, find **Turn ON** in the Available commands list, and click **Execute**.

Watch the entry appear in **Recent executions**:

1. It starts as **Pending** while the downlink is on its way.
2. When the socket's next message arrives reporting `socket_status: on`, the execution turns **Confirmed** — the platform has seen the device in the state you asked for.

Run **Turn OFF** and the same thing happens in reverse.

## If the execution never confirms

An execution that stays unconfirmed until its window closes is marked **Soft warning**. Read its Details to see whether acknowledgement or state confirmation was missing. Work through these in order:

1. **Check the value.** Open the Mapping tab and read what `socket_status` reports now. If the socket switched but reports `1` rather than `on`, the expected value has to match that form — and a typed literal is always text, so use a `{{ parameterName }}` reference to a Boolean or Integer parameter instead.
2. **Check the metric.** Make sure the Metric you selected is the one fed by `socket_status`, and that it is mapped and receiving readings.
3. **Check the window.** The default window is 1.5 × the device's data sending interval. If that interval is not set on the device, set it — see [Convergence timeout](verification.md#convergence-timeout).
4. **Check the payload.** Run **Try Encoder** again and compare the bytes against the manufacturer's documentation.

## Next

* Put the two commands on a dashboard with a [Control widget](../../dashboards/adding-widgets/control-widget.md) so the team can switch the socket without opening the device.
* Let a rule operate the socket on its own — see [Running Device Commands](../../rules-engine/running-device-commands.md).
