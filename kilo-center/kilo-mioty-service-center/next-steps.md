---
description: KiloCenter next steps — install, onboard a base station, set up integrations, configure security, run operations.
---

# Next Steps

### Goal

Move from understanding the product to a running local installation.

### Choose the deployment path

Continue with this installation sequence when you want to self-host the free, open-source **KiloCenter Community Edition** and connect its MIOTY data to your own applications.

If you need more than the service center—such as visual rules, sustained-condition triggers, dashboards and charts, alarms and escalation, access control, audit history, or managed operations—use **Kilo Cloud** instead. Its built-in Enterprise edition of KiloCenter provides the MIOTY network layer, while the rest of Kilo turns endpoint data into complete operational workflows. See [KiloCenter or Kilo Cloud?](README.md#kilocenter-or-kilo-cloud).

### Recommended Sequence

1. [Getting Started](getting-started/) -- install and configure KiloCenter
2. [Onboarding](onboarding/) -- connect a base station and register endpoints
3. [Integrations](integrations/) -- set up gRPC and MQTT consumers
4. [Security](security/) -- TLS certificates and access control
5. [Operations](operations/) -- monitoring and troubleshooting

### Success Criteria

You have completed the initial setup when:

* KC-Core, KC-Gateway, and KC-Web are running
* At least one base station is connected
* At least one endpoint is registered
* One uplink message has been received end-to-end

After that uplink, either connect your own application through [gRPC or MQTT](integrations/README.md), or use the [Kilo Cloud MIOTY connector](../../kilo-iot-server/connectors/mioty-connector/README.md) when you want the data in Kilo's rules, dashboards, and alarms.
