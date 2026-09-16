---
description: Kilo provides the IoT infrastructure that lets people, software, and AI operate connected assets safely at scale.
---

# Intro to Kilo

Kilo provides hardware, connectivity, and software for collecting data from physical devices and responding to it. Use it to bring equipment readings into dashboards, notify the right people, and run configured device commands through controlled workflows.

The products serve different parts of that job:

- **[Kilo IoT Server](kilo-iot-server/README.md)** manages connected devices, readings, dashboards, rules, alarms, and supported AI-assisted operations. **Kilo Cloud** is its hosted offering.
- **[Kilo Center](kilo-center/kilo-mioty-service-center/README.md)** is the MIOTY service center: it manages traffic between MIOTY devices, base stations, and applications. It supplies the network-service layer rather than the IoT Server's dashboards and automation workspace.
- **[Kilo Connectivity](kilo-connectivity/what-is-kilo-connectivity/README.md)** includes cellular IoT SIM services for equipment that connects through mobile networks. Cellular service is separate from the IoT Server's software connectors.
- **[Kilo Electronics](https://kiloelectronics.com/)** supplies sensors, gateways, and other hardware for a project.

Choose the components your deployment needs. You can bring existing equipment to the IoT Server or begin with an [emulated device](kilo-iot-server/connectors/emulator-connector.md) to try dashboards and rules before connecting hardware.

The IoT Server also gives AI agents access to supported device operations through the [AI Assistant](kilo-iot-server/ai-assistant/README.md) and [MCP interface](kilo-iot-server/api/mcp-server.md). This is Kilo's [physical AI](kilo-iot-server/physical-ai.md) role: device data, saved commands, permissions, and automation workflows that an agent can use. Available actions depend on the integration and your access.

***

### How Kilo Fits the IoT Stack

#### Devices — Kilo Electronics

Kilo Electronics is our hardware distribution business, operating in Germany under **Kilo IoT, GmbH**. [Kilo Electronics](https://kiloelectronics.com/) supplies sensors, gateways, and other IoT hardware to support real deployments.

#### Connectivity — Kilo Connectivity

Kilo offers connectivity for device deployments, including cellular IoT SIM services. Check network availability, supported radio technologies, and plan terms for each target country and device before deployment. See [Kilo Connectivity](kilo-connectivity/what-is-kilo-connectivity/README.md).

#### IoT Platform — Kilo Cloud

Kilo Cloud is the hosted IoT Server for device management, dashboards, automation, and alerting. Its chat assistant can query deployment data and perform supported setup operations. Saved triggers are configured in the interface. Access it at [**Kilo Cloud**](https://app.kiloiot.io/), the core IoT platform.

***

### Who Kilo Is Built For

Kilo is designed for flexibility and scale. It serves system integrators building solutions for customers, hardware developers deploying connected products, businesses operating hundreds or thousands of devices, and AI teams extending models and agents into real-world operations.
