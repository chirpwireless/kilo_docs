---
description: Troubleshoot MQTT integrations by failure phase — broker connection, TLS, authentication, topic routing, Last data.
---

# MQTT Troubleshooting

Diagnostic recipes for MQTT integrations on the Kilo IoT Server, organized by where the failure surfaces. Work through these in order — most issues fall into one of the first three phases, and the diagnostic sequence narrows the root cause efficiently.

Before working through the phases below, let the platform tell you which one you are in. A single silent device reports its own state on its **Connection** tab — whether the broker is reachable, whether a publish arrived on an unexpected topic, and whether its values were stored; see [Device Diagnostics](../../devices/device-diagnostics.md). When several devices go quiet at once, open the connector's **Connector diagnostics** area — **Source health** summarizes the broker subscription, **Incoming** shows what is arriving, and **Activity** shows the connector's recent event history. That reading usually points straight at the phase to start from.

## Phase 1 — Broker connection failures

**Symptom:** the publisher (an edge gateway, a Zigbee2MQTT instance, custom firmware) reports it cannot connect to the broker. **Last data received** never updates.

| Failure pattern | Root cause | Resolution |
|-----------------|-----------|------------|
| `connection refused` / `network unreachable` (Cloud MQTT) | Wrong host, port, or scheme | Verify the publisher uses `mqtts://` on port 1884 — not the default 1883. Re-copy the Broker URL from the connector page. |
| `connection refused` / `network unreachable` (External MQTT) | Network reachability | The platform connects out to your broker. Verify the broker is reachable from the public internet (DDNS hostname resolves, port forward active, firewall allows the platform's egress range). |
| `bad TLS handshake` / `certificate verify failed` | TLS configuration | For Cloud MQTT, the certificate is publicly-trusted — verify the publisher uses the system CA store. For External MQTT, verify CA Certificate, Client Certificate, and Private Key files were uploaded as separate files (not pasted PEM content), and that the Private Key was unencrypted at upload. |
| `authentication failed` / `not authorized` | Wrong credentials | Re-verify Username and Password. For Cloud MQTT, if the password was lost, rotate from the connector settings (the original is not retrievable). For Basic auth on External MQTT, check the broker's password file is correct. |
| `auth failed (JWT)` | Token issues | Verify the JWT is valid (not expired), signed with the correct key for the broker's validator, and has the required claims (subject, topic permissions). |

For Z2M-bridged setups specifically, the Z2M log shows the connection state explicitly:

```
docker compose logs zigbee2mqtt | grep -E "Connecting|Connected|MQTT|Error"
```

`Connected to MQTT server` confirms the publisher side. Absence of that line indicates a Phase 1 failure regardless of what the platform shows.

## Phase 2 — Connection succeeds but Last data received does not update

**Symptom:** the publisher reports a successful broker connection. Logs show successful publishes. **Last data received** in the Kilo connector page remains empty.

For Cloud MQTT, this is a topic-prefix mismatch. Every published topic must begin with the connector's Topic prefix exactly. Verify:

- The publisher's topic configuration uses the **full** Topic prefix from the connector page (typically `iot/{org}/{connection}`).
- For Z2M, `mqtt.base_topic` in `configuration.yaml` is `{Topic prefix}/zigbee2mqtt`.
- For custom firmware, every publish call prepends the prefix.

For External MQTT, this is a reachability or subscription mismatch:

- Run a one-shot test publish from a host that can reach your broker:
  ```bash
  mosquitto_pub -h {broker-host} -p {port} \
    --cafile {ca-bundle} \
    -u {username} -P {password} \
    -t "test/connectivity" -m '{"hello":"world"}'
  ```
  If **Last data received** still does not update, the platform cannot reach your broker. Investigate firewall rules, IP allowlists, or expired tunneling sessions when using ngrok for testing.
- For brokers behind NAT with port forwarding, verify the external port is open and forwarded to the broker's host port. Common misconfigurations include forwarding to the wrong host IP, blocking the source IP, or having a firewall rule that supersedes the port forward.

## Phase 3 — Last data received updates but device Mapping tab is empty

**Symptom:** the connector receives messages (Last data received is current), but a registered device's Mapping tab Value column shows nothing.

Two causes are common:

- **Device ID Topic pattern does not match the publishing topic.** Verify the pattern by comparing it byte-for-byte to a topic from the publisher's logs. Common mistakes: leading slash, missing intermediate segments, mismatched case, mismatched plurality (`meter` vs `meters`).
- **Device ID is byte-for-byte different from the extracted segment.** Whitespace stripping on the Device ID input is the silent killer here. If the publisher's topic is `plant-3/line-a/EM 4492/data` (containing a space) and the Device ID was typed as `EM 4492`, the platform stored a normalized string that no longer matches. Eliminate whitespace from device identifiers — use hyphens or underscores. Re-create the device record with the normalized identifier.

To verify what the publisher is actually sending:

```bash
# For Z2M:
docker compose logs zigbee2mqtt | grep "MQTT publish" | grep -v bridge | tail -5

# For other gateways: subscribe directly to the broker
mosquitto_sub -h {broker} -p {port} -t '#' -v
```

The topic shown in those output lines is the topic your Device ID Topic pattern and Device ID field need to match against.

## Phase 4 — Mapping tab Value column updates but Logs tab is empty

**Symptom:** Open a registered device. Mapping tab shows live values and Last update timestamps. Logs tab is empty.

This is the most common operational confusion when commissioning a new MQTT device. The two tabs read from different stores:

- **Mapping tab Value column** = live snapshot of the most recent payload. Updates on every accepted publish, regardless of whether Connector keys are populated.
- **Logs tab** = per-sensor history, populated only by publishes received *after* Connector keys are saved.

If the most recent publish arrived before Connector keys were saved, that publish never reaches Logs. Older publishes are not retroactively normalized.

Resolution: generate a fresh publish after saving Connector keys. Methods:

- **Wait for the device's next scheduled report** — for sensors on a periodic publish cadence.
- **Trigger a state change at the device** — for actuators with COV-on-state-change semantics.
- **Issue a poll request from the gateway** — for gateways with a `/get`-style read-poll mechanism.
- **Send a test publish from the broker side** — for development scenarios, `mosquitto_pub` to the device's topic with a representative payload.

After at least one publish arrives post-save, the Logs tab populates and continues to receive subsequent traffic.

## Phase 5 — null values in the Mapping tab Value column

**Symptom:** Connector keys are mapped, the Logs tab is receiving data, but specific metric values show as null in the Mapping tab.

The most common cause: the metric template Type does not match the published value's type. For example, mapping a Z2M `state` field (`"ON"`/`"OFF"` strings) to a Boolean-typed metric template results in nulls — the platform cannot parse the string as a boolean.

Check the [payload-type → Metric Type translation](topics-and-device-routing.md#payload-type--metric-type-translation):

- String-encoded enums (e.g. `"OPEN"`/`"CLOSED"`, `"ON"`/`"OFF"`) → **String**, not Boolean.
- Z2M `binary` features → String. Z2M `numeric` features → Number. Z2M `enum` features → String.

Resolution: edit the metric template (or replace the Mapping row with a row using the correct template type) so the Type matches the actual payload value type.

## Phase 6 — Inconsistent or duplicated metric values across multiple devices

**Symptom:** two device records appear to receive each other's telemetry, or a single device shows alternating values from different sources.

This is a Device ID Topic pattern collision. If two devices publish to topics that both match a single Device ID Topic pattern at different `{{deviceId}}` values, but the Device ID field on one device record matches both, both publishes route to that record.

Verify:

- Each device record has a unique Device ID.
- Publishing-side topics produce unique values at the `{{deviceId}}` placeholder position.
- No publisher is misconfigured to publish under another device's identifier.

## Resetting Cloud MQTT credentials

When a credential needs to be rotated:

1. Open the connector detail page.
2. In edit mode, regenerate the password.
3. Capture the new password immediately; the original is not retrievable after regeneration.
4. Update every publishing client (firmware configuration, Z2M `configuration.yaml`, edge gateway configuration) with the new password.
5. Restart publishers to pick up the rotation.

The username and Topic prefix do not change on rotation.

## Resetting External MQTT credentials

For Basic auth, change the password on the broker side and update the connector's authentication configuration. For Certification (TLS client cert), reissue the client certificate and re-upload. For JWT, regenerate the token and update the connector. In all cases, no platform-side credential rotation flow exists — the credential is on the broker; the platform stores a reference.

## Where to go next

- [Topics and device routing](topics-and-device-routing.md) — for routing configuration details.
- [External MQTT](external-mqtt.md) — for broker-side configuration of self-hosted brokers.
- [MQTT Edge Gateways](../../gateways/mqtt-edge-gateways/README.md) — for industrial edge-gateway integration patterns (under Gateways).
