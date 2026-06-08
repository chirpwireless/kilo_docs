---
description: Define a device command in Kilo IoT Server — identity, MQTT or LoRaWAN routing, typed parameters, payload encoding, and the built-in encoder test.
---

# Creating Commands

A command is a reusable, named action with typed inputs. You build it once in the command editor; afterward, operators run it from the **States** tab or a dashboard without touching topics, byte layouts, or payload templates.

To start, open the device's **Commands & States** tab, stay on the **Commands** sub-tab, and click **Add new command**. The editor opens in four numbered sections.

## 1. Identity

Give the command a clear, action-oriented name — this is what operators see when they execute it.

* **Command name** — Required. Use an imperative label such as `Reboot controller`, `Set brightness`, or `Open valve`. Names must be unique on the device; reusing one raises *"A command with this name already exists on this device."*
* **Description** — Optional but recommended. One line on what the command does and when to use it.

## 2. Routing

Routing tells the platform *where* and *how* the message is addressed. The fields differ by protocol.

### MQTT devices

* **MQTT topic** — Where the message is published on the broker.
  * For a Cloud MQTT connection, the read-only **topic prefix** is shown and you supply the remainder (for example `mqtt-test-01/set`). The device must subscribe to the full topic — prefix plus your value.
  * For an External MQTT connection, enter the full topic exactly as it is published on your broker (for example `devices/light-01/cmd`).
* If another command on the same connection already publishes to the topic you enter, the editor flags the overlap so you can avoid accidentally colliding two actions on one topic.

### LoRaWAN devices

* **fPort** — Required. The LoRaWAN port the downlink is addressed to, an integer between **1 and 223**.
* **Confirmed downlink** — A toggle:
  * **On — wait for MAC ACK:** the network waits for the device to acknowledge receipt at the radio layer.
  * **Off — fire-and-forget at MAC layer:** the downlink is sent without waiting for an acknowledgment.

## 3. Payload

This section defines the message body and the inputs that shape it.

### Parameters

Parameters are the typed inputs an operator fills in at execution time — a brightness percentage, a setpoint, a mode. Click **Add Parameter** for each one. Per parameter:

* **Name** and **Description** — the description is shown to operators in the Execute dialog, so make it useful.
* **Type** — one of:
  * **Integer** / **Float** — numeric, with optional **Min**, **Max**, and **Default**. A default outside the range is rejected, and **Max** must be greater than **Min**.
  * **String** — with optional **Min length**, **Max length**, an optional comma-separated **Enum** (for example `auto, manual, off`), and a **Default**.
  * **Boolean** — with a **Default** of `No default`, `true`, or `false`.

Typed parameters are what make commands safe to hand to an operator: a setpoint can't be sent out of range, and a mode can only be one of the allowed values.

### Building the message body

**MQTT** offers two modes:

* **Send as-is** — Publish the JSON body directly. Best when the device or an upstream consumer accepts JSON.
* **Process with encoder** — Run the body through an encoder function before publishing.

In encoder mode (and always for LoRaWAN, where downlinks must be raw bytes), you define an **Encoder input template** — the JSON object passed to the codec, using `{{ parameterName }}` placeholders to substitute the operator's inputs. Every placeholder must match a parameter defined above. For LoRaWAN, the platform notes that downlinks are bytes, so an encoder is always required; you can use the encoder defined on the connector or turn on **Use custom encoder JS** to override it with a per-command function.

For MQTT commands that send a payload verbatim (direct mode), you instead provide the target **MQTT topic** and the **Direct payload**, which is sent as written — `{{ parameterName }}` substitution still applies for typed values.

## Try Encoder

Whenever a command uses an encoder, the editor includes a **Try Encoder** tool (titled **Code function** for LoRaWAN, **Custom encoder** for MQTT). Enter test inputs and run it to see exactly what will be transmitted before you save:

* the encoded **Output**, or an **Error** if the function failed
* the result as **Hex** and **Base64**, plus the payload **Size** in bytes
* any **Console log** output and the execution time

This turns payload encoding from a guessing game into a verifiable step — you confirm the bytes are right before a single command ever reaches a device.

## Saving

Click **Save** to add the command to the device. It immediately appears in the **Commands** list and on the **States** tab, ready to execute. To change it later, reopen it from the Commands list with **Edit**; to remove it, use **Delete** (the platform warns you if other commands reference it as a query command).

## Next

* Decide how the platform confirms a command worked — see [Confirming Commands](verification.md).
* Run a command and watch its lifecycle — see [Executing Commands](executing-commands.md).
