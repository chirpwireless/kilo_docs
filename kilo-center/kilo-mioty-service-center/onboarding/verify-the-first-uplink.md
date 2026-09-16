---
description: Verify the first MIOTY uplink in KiloCenter — confirm data from endpoint through base station to KC-Web.
---

# Verify the First Uplink

The first **uplink** shows that your MIOTY endpoint's message has reached Kilo Center through a base station. Verifying this path is the handoff from registering equipment to receiving data your application can use.

An endpoint is the communicating sensor or device, and a base station is its radio gateway. Check the fresh message and payload in the service center before connecting the traffic to an application through [gRPC or MQTT](../integrations/README.md).

Use this guide after [connecting a base station](connect-a-base-station.md) and [registering the endpoint](register-an-endpoint.md) with matching keys. The endpoint must be transmitting. Inspect the message time and payload to confirm new traffic, rather than relying only on a saved device record or an online base station.

### Goal

Confirm that uplink data travels end-to-end from an endpoint through a base station to KiloCenter.

### Prerequisites

* At least one base station connected and online
* At least one endpoint registered with matching keys (see Register an Endpoint)
* The endpoint is transmitting data

### Check Uplinks in KC-Web

1. Open KC-Web at `http://localhost/` (container) or `http://localhost:5173` (source dev).
2. Navigate to **Endpoints** and select your endpoint.
3. Open the **Messages** tab.
4. Look for uplink entries showing received payload data, timestamp, RSSI, and SNR values.

If messages appear here, your uplink path is working end-to-end.

### Check KC-Core Logs

```bash
tail -f kilocenter-modules/logs/runtime/kc-core.log
```

Look for `ulData` entries that include your endpoint's EUI. These log lines confirm KC-Core received and processed the uplink from the base station.

### Programmatic Verification (Optional)

You can also verify uplinks through the gRPC API:

```bash
grpcurl -plaintext -d '{"endpoint_eui": "<EP_EUI_HEX>"}' \
  localhost:9090 kilocenter.api.v1.KiloCenterService/ListMessages
```

### Troubleshooting

| Symptom                                   | Likely Cause                                                   |
| ----------------------------------------- | -------------------------------------------------------------- |
| No messages in KC-Web                     | Endpoint not transmitting, or not attached by any base station |
| Messages appear in logs but not in KC-Web | Browser cache or KC-Web not connected to KC-Gateway            |
| `ulData` errors in logs                   | Network session key mismatch or endpoint not registered        |
| RSSI/SNR values missing                   | Base station firmware not reporting radio metadata             |
