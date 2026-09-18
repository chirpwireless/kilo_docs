---
description: Kilo provides the IoT infrastructure that lets people, software, and AI operate connected assets safely at scale.
---

# Intro to Kilo

Kilo connects devices, cameras, automation, and AI-assisted setup across the physical world. Its products support the path from choosing equipment and connecting it to understanding conditions and acting on them—across industrial sites, property portfolios, transport infrastructure, and distributed operations.

The **[AI Assistant](kilo-iot-server/ai-assistant/README.md)** is like having an experienced integrator by your side. It helps you work through protocols and device compatibility, then takes on platform configuration: adding devices, configuring alarms, and building and deploying automation rules from the outcome you describe. You can begin with an [emulated device](kilo-iot-server/connectors/emulator-connector.md) before any hardware is on site.

The products serve different parts of that job:

- **[Kilo IoT Server](kilo-iot-server/README.md)** manages connected devices, readings, Lens cameras, dashboards, rules, alarms, and an AI assistant that carries out device and automation setup. **Kilo Cloud** is its hosted offering.
- **[Kilo Center](kilo-center/kilo-mioty-service-center/README.md)** is an open-source MIOTY service center for networking: connecting base stations, registering endpoints, and enabling communication. Kilo Cloud includes its enterprise version and adds widgets, rules, alarms, and the wider IoT platform.
- **[Kilo Connectivity](kilo-connectivity/what-is-kilo-connectivity/README.md)** includes cellular IoT SIM services for equipment that connects through mobile networks. Cellular service is separate from the IoT Server's software connectors.
- **[Kilo Electronics](https://kiloelectronics.com/)** supplies sensors, gateways, and other hardware for a project.

Choose the components your deployment needs. You can bring existing equipment to the IoT Server or begin with an [emulated device](kilo-iot-server/connectors/emulator-connector.md) to try dashboards and rules before connecting hardware.

[Lens](kilo-iot-server/lens/README.md) brings compatible existing IP cameras into the IoT platform. Lens runs in the cloud; each camera connects through its own **Twin**, a digital twin running as a Docker container at the customer’s premises. Teams can combine live video and selected-area motion with the same platform used for sensors, rules, and alarms.

The IoT Server also gives AI agents access to supported device operations through the [AI Assistant](kilo-iot-server/ai-assistant/README.md) and [MCP interface](kilo-iot-server/api/mcp-server.md). This is Kilo's [physical AI](kilo-iot-server/physical-ai.md) role: device data, saved commands, permissions, and automation workflows that an agent can use. Available actions depend on the integration and your access.

***

### How Kilo Fits the IoT Stack

#### Devices — Kilo Electronics

Kilo Electronics is our hardware distribution business, operating in Germany under **Kilo IoT, GmbH**. [Kilo Electronics](https://kiloelectronics.com/) supplies sensors, gateways, and other IoT hardware to support real deployments.

#### Connectivity — Kilo Connectivity

Kilo offers connectivity for device deployments, including cellular IoT SIM services. Check network availability, supported radio technologies, and plan terms for each target country and device before deployment. See [Kilo Connectivity](kilo-connectivity/what-is-kilo-connectivity/README.md).

#### IoT Platform — Kilo Cloud

Kilo Cloud is the hosted IoT Server for device management, dashboards, automation, and alerting. Its AI assistant helps you configure a deployment through conversation, from registering devices to building automation rules and setting up alarms. Access it at [**Kilo Cloud**](https://app.kiloiot.io/), the core IoT platform.

***

### Who Kilo Is Built For

Kilo is designed for flexibility and scale. It serves system integrators building solutions for customers, hardware developers deploying connected products, businesses operating hundreds or thousands of devices, and AI teams extending models and agents into real-world operations.
