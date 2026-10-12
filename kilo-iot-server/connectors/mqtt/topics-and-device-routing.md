---
description: Configure Kilo MQTT topic segments, payload identifiers, topic-value extraction and measurement mapping, with examples and validation.
---

# How Does MQTT Topic and Device Routing Work?

MQTT routing identifies which digital device a message belongs to and which readings it contains. A **topic** is the message's named channel; the **payload** is its content. Configure routing on the device's **Connection** tab, then connect received fields to measurement templates on **Mapping**.

For a complete first-device walkthrough, start with [MQTT Devices](../../devices/mqtt-devices.md). This reference covers the routing controls, including payload-based identifiers and readings carried inside topic names. Broker setup remains in [Cloud MQTT](cloud-mqtt.md) and [External MQTT](external-mqtt.md).

## What does the MQTT topic look like on the platform?

For Cloud MQTT, the publisher's full topic begins with the connection's **Topic prefix**, such as `iot/{org}/{connection}`. The editor displays that prefix as a locked leading segment; configure the device-level pattern after it. Do not type the prefix twice.

For External MQTT, there is no Cloud prefix to add. Build a pattern matching the topic the equipment publishes to your own broker. For example, `meters/EM-4492/data` matches `meters/{{deviceId}}/data` with Device ID `EM-4492`.

The read-only **Resolved preview** includes the Cloud prefix when applicable and substitutes the entered Device ID. It is a preview of the pattern, not evidence that a message arrived.

## How do I build the device ID topic?

**MQTT Topic for device ID** is a segment builder on **Connection**. A slash separates each segment.

| Control | Behavior |
| --- | --- |
| **+ → Text segment** | Add a literal topic component, such as `meters`, `zigbee2mqtt`, or `data`. Type it exactly as the publisher sends it. |
| **+ → Device ID** | Add the identifier position. The builder permits one Device ID segment; the add option is unavailable when one is already present. |
| Drag handle | Reorder segments to match the topic. For example, move Device ID between `meters` and `data`. |
| Segment remove control | Remove editable text segments. The Device ID segment is locked in Topic mode; switch to Payload mode to remove it when changing the identifier source. |
| Locked prefix | Cloud MQTT's connection prefix; it cannot be edited or removed here. |
| **Resolved preview** | Shows the resulting topic using the entered identifier. A value placeholder in telemetry patterns is displayed as `value`, not as a real reading. |

Use `{{deviceId}}` as the identifier placeholder when reading a serialized pattern in these examples. It is not a literal device name. Topic templates are case-sensitive; matching requires the expected segments and positions. Telemetry templates reject `#`, unknown placeholders and unclosed placeholders. The two recognized placeholders are `{{deviceId}}` and `{{value}}`.

## How do I read the device ID from the payload?

**Where to get the device ID** offers **Topic** and **Payload**. Topic is the initial choice and extracts the Device ID segment. Payload mode reads the identifier from JSON instead:

1. Choose **Payload**.
2. Build the message topic without a Device ID segment, for example `building/readings`.
3. In **Payload template**, enter a dot-separated path, such as `deviceInfo.deviceId`.
4. Check **Payload preview**, which illustrates the JSON object around that path.
5. Set the device's **Device ID** to the value carried at that path and save.

For example, this message on `building/readings` identifies device `room-1`:

```json
{"deviceInfo": {"deviceId": "room-1"}, "temperature": 21.4}
```

The topic must be non-empty in either mode. Payload mode needs the payload path; its topic patterns must omit the Device ID placeholder. When changing modes, update both the selector and the segments so they agree. Topic mode instead needs the Device ID placeholder in the device pattern and every configured telemetry row.

## Why must the device ID match the extracted topic segment exactly?

**Device ID** accepts 1–64 characters: ASCII letters, digits, spaces, periods, underscores and hyphens. MQTT IDs preserve their case and spaces. Use the same identifier on the publishing side and in the platform. `room-1` and `Room-1` do not match.

For Zigbee2MQTT, use the device's friendly name. A simple name such as `LivingRoomSensor` is convenient. If the physical identity needs changing after binding, follow [device replacement](../../devices/device-management.md) on the same twin rather than deleting the twin and its measurement associations.

## How do I configure Topic Telemetry? {#topic-telemetry}

### When to configure telemetry topics {#telemetry-topics-when-to-configure-them}

Leave **Topic Telemetry** empty when a message carries its measurements in JSON. For example, `{"temperature":21.4,"battery":92}` provides the data keys `temperature` and `battery`. Nested objects produce dot-separated paths: `{"vibration":{"rms":0.42}}` provides `vibration.rms`.

Use the topic telemetry editor when the **value itself appears in a topic segment**. For example, the publisher sends on `meters/EM-4492/voltage/230.5`:

| Row field or action | How it works |
| --- | --- |
| **Add new topic** | Adds a row with a pinned **value** segment. Add text/Device ID segments to match the publisher. |
| **MQTT Topic for telemetry** | For this example, build `meters/{{deviceId}}/voltage/{{value}}`. The value segment identifies the reading `230.5`; it is not the word `voltage`. |
| **value** segment | Optional. A caption under the row tells you which mode it is in: **The value is read from the value segment of the topic**, or **No value segment: the value is read from the message payload**. Reposition the segment to match the publisher's topic, remove it when the reading travels in the message body, and add it back at any time. |
| **Device data key** | Required on every telemetry row, with or without a value segment (a row missing its key shows **Device data key is required** and cannot be saved). Enter the name under which the reading should appear, such as `voltage`. Map this key to a measurement on **Mapping**. |
| Row remove control | Removes that telemetry rule from the edited configuration. Save to apply the removal. |
| **Apply all** | Replaces every existing row's topic pattern with the device-ID topic plus a value segment, unless that pattern already contains one. It preserves the rows' data-key names. Review each row afterward and restore different literal segments such as `voltage` or `current` where needed. It does not create rows or save the device. |

Some equipment publishes one reading per topic and puts the value in the message body instead, for example a controller that sends `device/260/ap/5/upload` with the body `0`. For that case, build the topic without a value segment and give the row a data key such as `outlet_state`. Kilo then stores the message body under that key. Before this was optional, such devices could not be set up in the web interface, and opening and saving one configured elsewhere could silently break its telemetry; now stored patterns are shown exactly as they are saved.

In Payload identifier mode, telemetry rows omit Device ID and the message must still contain the identifier at the configured JSON path. A matching topic value takes precedence over a payload field with the same key.

The incoming parser can also accept JSON fields or raw payload data; that does not mean the topic editor exposes every possible protocol format. For plain non-JSON messages without a telemetry extraction row, inspect the incoming `raw` key and map it only when it represents the value you need. Binary vendor formats need an appropriate upstream conversion; recognizing a topic hierarchy alone does not decode Sparkplug or other binary payloads.

## What is the difference between the Connection and Mapping tabs? {#connection-and-mapping-tabs}

**Connection** contains topic routing and identity. **Mapping** contains measurement rows. These are separate device tabs. Saving a matching topic pattern does not automatically create every measurement in the received message.

After changing routing, click the device's **Save** button. Segment previews and **Apply all** only update the form. Empty telemetry rows are not a substitute for a complete value-extraction rule: fill its pattern and data key or remove the row. Read-only users cannot change routing.

## Why is the Device data key dropdown empty at first?

The **Device data key** dropdown lists incoming fields received for the bound source. Save the connection, let a message arrive, then complete the mappings and save again. If you created template rows before the first message, retain those rows and fill their data keys once available.

See [MQTT Devices](../../devices/mqtt-devices.md#map-messages-to-retained-measurements) for the walkthrough and [mapping controls](../../devices/device-management.md#metrics-tab) for every column and action.

## What does the Data type column do in the MQTT mapping? {#mapping-data-type}

The device-mapping form offers **Telemetry**. Use it for measurements and reported states that you want to record. The broader metric catalog's metadata/attribute categories are not additional choices in this mapping form. **Data type** is separate from the template's value **Type**.

## Which metric Type fits each incoming MQTT value? {#payload-type-metric-type-translation}

| Incoming value | Appropriate template Type |
| --- | --- |
| Decimal reading such as `21.4` | Float |
| Whole-number count such as `12` | Integer |
| `"ON"`, `"OFF"`, an enum or free text | String |
| JSON `true` or `false` | Boolean |

A Zigbee2MQTT feature described as binary can publish either booleans or configured string values. Inspect the actual payload rather than assigning a type from the feature category alone. Numeric strings can be converted to numeric templates; integer conversion truncates decimal values toward zero. Boolean conversion accepts true/false and 0/1 forms, but not `"ON"`/`"OFF"`. Incompatible readings are rejected individually, not stored as nulls. See [metric conversion rules](../../devices/metric-templates.md).

## Why does the Value column update but the Logs tab stay empty?

**Value** and **Last update** show the latest received field snapshot. **Logs** shows recorded measurements after valid mappings are saved. Allow a fresh message after mapping; earlier messages are not retroactively normalized.

MQTT history uses the time the platform receives the message. Fields named `timestamp`, `ts`, or `time` remain ordinary payload fields; they do not backdate the stored measurement. Buffered messages received after a disconnection therefore are not automatically placed at their original device time.

### How do I refine MQTT mapping after data arrives?

Return to **Mapping** when firmware or requirements change. Inspect new keys, add the needed templates, select compatible types, save and allow a fresh publish. Keep existing measurement rows when replacing hardware so the twin retains their history.

## Where to go next

- [MQTT Devices](../../devices/mqtt-devices.md) — first-device walkthrough and configuration checklist.
- [MQTT Troubleshooting](troubleshooting.md) — broker, routing and missing-history problems.
- [Creating Commands](../../devices/commands/creating-commands.md) — outbound MQTT topics and command payloads.
