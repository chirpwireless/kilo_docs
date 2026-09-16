---
description: Connect Kilo Center’s MIOTY network to your application with gRPC or MQTT, or use Kilo Cloud for dashboards, rules, and alerts.
---

# Integrations

Connect Kilo Center's MIOTY network to your application through gRPC or MQTT. You can receive endpoint traffic, manage device records, and request downlinks without building the radio-network layer yourself.

These interfaces are the handoff from the open-source service center's networking to your application. If you want visualization, rules, and alerts ready in the same platform, [Kilo Cloud](../../../kilo-iot-server/connectors/mioty-connector/README.md) includes the enterprise service center and the wider Kilo IoT capabilities.

Choose the interface for your application:

- [gRPC First Steps](grpc-first-steps.md) introduces the API for calling defined operations with structured requests and responses.
- [MQTT First Steps](mqtt-first-steps.md) explains message-based integration through a broker, the server that distributes published messages to subscribers.
- [API Reference](api-reference/README.md) provides the contracts and language-specific examples.
- [LLM-Assisted Development](llm-assisted-development.md) explains how to use the project documentation when developing with an AI coding assistant.

Have a running installation and its endpoint and authentication details ready. MQTT must be enabled before using that path; access requirements depend on your installation's configuration.

