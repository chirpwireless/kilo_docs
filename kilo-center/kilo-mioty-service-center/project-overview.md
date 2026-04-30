# Project Overview

KiloCenter is an open-source MIOTY Service Center which can be used to set up and manage MIOTY LPWAN networks. KiloCenter provides a web interface for the management of base stations, endpoints, and network traffic as well as data integrations for routing endpoint data to external systems, databases, and cloud platforms. KiloCenter provides a gRPC-based API that can be used to integrate with or extend KiloCenter, and supports MQTT for real-time event streaming.

### What You Can Do With KiloCenter

* Connect MIOTY base stations over the BSSCI protocol (TCP/TLS)
* Register and manage MIOTY endpoints
* Process uplink data from endpoints in real time
* Send downlink commands to bidirectional endpoints
* Integrate with external systems through gRPC and MQTT
* Monitor network health and endpoint status through the web interface

### Editions

| Edition        | Status    | Description                                                                                                                                     |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Community**  | Available | Full service center engine, open source, self-hosted. Includes KC-Core, KC-Gateway, KC-Web, gRPC API, API key management, and MQTT integration. |
| **Enterprise** | Available | Adds user authentication, organization management, multi-tenancy, tenant isolation, and extended MIOTY endpoint profile fields.                 |
| **Cloud**      | Planned   | Fully managed hosting with SLA-backed operations.                                                                                               |

#### Community Edition

The Community Edition is fully open-source and self-hosted. It includes:

Licensed under AGPL-3.0-or-later. See Licensing and Trademarks.

* KC-Core service center engine (BSSCI and SCACI protocol handling)
* KC-Gateway for external gRPC-web API access
* KC-Web operator interface
* gRPC API for programmatic access
* API key management
* MQTT integration for real-time data streaming
* PostgreSQL-backed persistence with Redis caching

#### Enterprise Edition

The Enterprise Edition extends the Community Edition with:

* Organization management and multi-tenancy
* User authentication and role-based access
* Tenant isolation for base stations and endpoints
* Extended MIOTY endpoint profile fields (dual channel mode, DL repetition, wide carrier offset, long interblock distance)

#### KiloCenter Cloud

A planned managed hosting option. Not yet available.

### How MIOTY Data Flows Through KiloCenter

1. MIOTY endpoints transmit data over the air using the MIOTY radio protocol.
2. Base stations receive the radio frames and forward them to KiloCenter over BSSCI (TCP with TLS).
3. KC-Core processes the protocol frames, validates sessions, and persists messages.
4. KC-Gateway exposes the gRPC-web API, proxying requests to KC-Core.
5. Operators view data through KC-Web (which connects via KC-Gateway). External systems consume data through gRPC (via KC-Gateway) or MQTT.

###
