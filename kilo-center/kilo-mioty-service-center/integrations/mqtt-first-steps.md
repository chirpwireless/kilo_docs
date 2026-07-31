---
description: First steps with KiloCenter MQTT — enable the disabled-by-default broker, subscribe to events, publish downlinks.
---

# MQTT First Steps

### Goal

Enable MQTT integration and validate event consumption and command publishing.

### Prerequisites

MQTT is **disabled by default** in KiloCenter. Before using MQTT:

1. Ensure the Mosquitto broker is running (included in the Docker Compose stack).
2. Enable MQTT in `kilocenter-modules/KC-Core/config.yaml`:

```yaml
mqtt:
  enabled: true
  host: "localhost"
  port: 1883
  username: "admin"
  password: "KiloCenter"
```

3. Restart KC-Core for the change to take effect.

### Local Broker Defaults

| Setting      | Value                                   |
| ------------ | --------------------------------------- |
| Broker       | `localhost:1883`                        |
| Username     | `admin`                                 |
| Password     | `KiloCenter`                            |
| Topic prefix | `mioty` (configurable in `config.yaml`) |

### Subscribe to Uplink Events

```bash
mosquitto_sub -h localhost -p 1883 \
  -u admin -P KiloCenter \
  -t 'mioty/+/device/+/event/up' -v
```

### Publish a Downlink Command

```bash
mosquitto_pub -h localhost -p 1883 \
  -u admin -P KiloCenter \
  -t 'mioty/default/device/<EP_EUI_HEX>/command/down' \
  -m '{"data":"AQIDBA==","confirmed":false}'
```

Replace `<EP_EUI_HEX>` with your endpoint's EUI in hex format.

### Observe Result Topic

```bash
mosquitto_sub -h localhost -p 1883 \
  -u admin -P KiloCenter \
  -t 'mioty/+/device/<EP_EUI_HEX>/event/downlink_result' -v
```

### Topic Contract and Payload Reference

For full topic structure and payload formats, see:

* `kilocenter-modules/docs/mqtt-integration.md`
