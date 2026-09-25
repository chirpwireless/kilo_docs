---
description: "Connect LoRaWAN sensors to Kilo digital twins: device profiles, keys, decoding, measurement mapping, commands and replacement."
---

# LoRaWAN Devices

A **LoRaWAN device** sends small readings over a radio link to a gateway. Kilo's LNS connector receives those messages through its built-in LoRaWAN Network Server. The physical sensor supplies the data; its **digital twin** keeps the name, measurement channels, and retained history you use in dashboards and automation.

For example, a refrigeration operator can keep **Refrigerator 1** as the lasting temperature record when a probe is replaced for maintenance or calibration. Choose this connection for compatible LoRaWAN hardware; a Wi-Fi or Zigbee sensor needs a different connection path.

## Before you start

- Create the [LNS connector](../connectors/lns-connector/README.md) and arrange coverage from a connected [LoRaWAN gateway](../gateways/lorawan-gateways/README.md). Gateway installation and network activation are separate from registering the sensor.
- Obtain the sensor's **Device EUI**, **AppKey**, model, frequency band, class and a compatible payload codec from the manufacturer. Match the band to the hardware and gateway; see [LoRaWAN Frequencies](../connectors/lns-connector/lorawan-frequencies.md).
- You need permission to create/edit devices and capacity in your subscription to add another twin. Read-only users can inspect the configuration but cannot save changes.

## Connect the sensor to its digital twin

1. Open **Devices → Add device**, or use **Add device** on the LNS connector row.
2. Enter **Device name**, such as **Refrigerator 1**, optionally add photos, and click **Save**. This creates the digital record before binding hardware. See [shared registration steps](registering-devices.md) for profile and Application settings.
3. Open **Connection** and choose your LNS connection under **Connector type**.
4. Enter the sensor identity and configure its profile using the reference below.
5. Set **Data sending interval** to the sensor's actual reporting schedule, then click **Save**.
6. Follow the manufacturer's commissioning procedure to make the sensor join this network. Registration alone does not initiate a radio join. Previously commissioned hardware may need a rejoin/reset procedure; use the manufacturer's instructions rather than assuming power-cycling is enough.
7. After an uplink arrives, open **Mapping**, map the decoded readings, and save. Wait for another uplink, then check **Logs** for recorded measurements.

<figure><img src="../../.gitbook/assets/device-connector-type-list.jpg" alt="Kilo Connection tab with the available LoRaWAN LNS connection in the connector picker"><figcaption><p>Select the LNS connection that will receive this sensor's radio traffic.</p></figcaption></figure>

### Identity and credentials

| Control | What to enter or do |
| --- | --- |
| **Connector type** | Select the LNS connection in your organisation. If it is missing, follow **Connector section** to create it. A saved physical binding locks the connection and identity during ordinary editing. |
| **Device EUI** | The manufacturer's 8-byte identifier: 16 hexadecimal characters, displayed in byte pairs. This identifies the physical sensor, not the asset's name. It becomes read-only after binding. |
| **Scan QR code** | Scan a compatible label with your browser's camera. The scanner can fill Device EUI and, when present in the code, AppKey. Review the result. If no camera is available or permission is denied, enter the values manually. |
| **AppKey** | The sensor's 16-byte activation key, entered as 32 hexadecimal characters. Use the key configured on the hardware. A profile template does not supply your individual sensor's key. Typing reveals the key; leaving the field or pressing Enter hides it again. The eye control reveals/hides a non-empty key, and a key loaded from a QR scan stays hidden. Avoid displaying it in shared screenshots. |
| **Add to Vault** | Save the EUI/key pair to [Key Vault](../reports/key-vault.md) while the credentials are available. Vault storage is separate from saving the device's connection. |
| **Detach physical device** | Immediately removes the hardware binding. Use it for replacement, then bind the new hardware to this twin. Keep the existing measurement rows and remap their incoming keys; see [replacement and history](device-management.md). |

### Templates and manual profiles

A **device profile** supplies radio settings and a **codec**, the JavaScript that translates the sensor's binary uplinks into named readings. It does not create the measurement mappings for you.

| Control | Configuration |
| --- | --- |
| **Use device profile templates** | Enable to select a known profile. Disable to enter the profile manually. Review the populated fields before saving, especially if firmware or regional variants differ. |
| **Brand** (template selector) | Choose the manufacturer. This determines which models are available. |
| **Model** (template selector) | Choose the hardware model. This determines the available regional profiles. |
| **Profile** | Choose the matching regional profile. Selection loads the profile's class, band and codec into the form; it can replace values you previously entered. |
| **Class A / Class C** | Required. Choose the class actually supported/configured on the sensor. Class A receives downlinks in windows following uplinks; Class C listens between transmissions. Selecting Class C here does not convert Class A hardware into a continuously listening device. Both classes may have command definitions; delivery timing differs. |
| **Brand / Model** (text fields) | Required manufacturer and model names for the saved profile. These remain available for review/editing after template selection. |
| **Band** | Required regional radio plan. Options include EU868, US915, AU915, AS923, KR920, IN865, RU864, CN470, CN779, EU433 and ISM2400. Use the plan matching the sensor and gateway. |
| **Code functions** | Review or paste the manufacturer's compatible JavaScript codec. Without a suitable decoder, receiving a radio message does not guarantee usable measurement fields. Changes take effect for subsequent messages after saving; they do not decode old history again. |
| **Data sending interval** | A positive whole-number interval with **minute**, **hour**, **day**, **week**, or **month** units. The initial value is **1 hour**. Match the hardware's actual schedule. This tells reception diagnostics when data is expected; it does not reconfigure the physical sensor's transmission schedule. |

Use the manufacturer-provided codec for the exact model and payload format. The **Code functions** editor can also contain the codec's downlink encoder. The command guide explains when a command uses that encoder or supplies its own [custom encoder](commands/creating-commands.md).

## Map the readings you need

A probe might decode to `temperature` and `battery`. On **Mapping**, click **Add key**, choose a **Normalized key** template, then select the corresponding **Device data key**. Choose a temperature template with the correct unit and Float type for decimal readings. Save the key assignments and allow a new uplink to arrive.

The template defines meaning, unit and value type; selecting °C does not convert a Fahrenheit reading. **Value** and **Last update** help identify the received field. **Logs** shows retained measurements after mapping. See [mapping controls](device-management.md#metrics-tab), [metric templates](metric-templates.md), and [payload interpretation](payload-decoding.md) for all fields and conversion rules.

## Commands and ongoing operation

After the physical binding is saved, compatible devices offer **Commands & States**. Use **Add new command** to configure an action supported by the hardware. LoRaWAN commands require **fPort** and an encoded payload; **Confirmed downlink** controls radio acknowledgement, while verification settings check reported results. See [Creating Commands](commands/creating-commands.md) and [verification](commands/verification.md).

For **Refrigerator 1**, the same mapped readings can feed a chart and an alarm. If the probe is replaced, retain the twin and its measurement rows, then reconnect the new probe's decoded fields. The retained history remains subject to your subscription's retention period.

## If readings do not arrive

| What you see | What to check |
| --- | --- |
| Save cannot complete | Required identity/profile fields, device-edit permission, subscription restrictions, and whether the identifier is already assigned. |
| No join or uplink | Gateway reception, matching regional band, EUI/AppKey, hardware power and the manufacturer's join procedure. |
| Uplinks arrive but expected fields are missing | Codec compatibility, firmware version and actual decoded keys. |
| Values appear but history is empty | Saved key mappings, compatible template types, and a fresh uplink after saving. |
| Unexpected missing-data status | The actual reporting schedule and configured Data sending interval. Command execution has its own last-seen check. |

Continue with [device diagnostics](device-diagnostics.md) for reception status and processing errors.
