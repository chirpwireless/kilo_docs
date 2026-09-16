---
description: Kilo IoT Server gRPC API — typed service-to-service path for on-premise installs, same scoped API-key auth.
---

# gRPC API

**gRPC** is an API protocol that lets one program call defined operations in another using structured messages and generated client code. Kilo's gRPC interface is intended for integrations that need those typed service contracts, particularly in on-premise environments.

Use it when your integration package supplies the service definitions and endpoint details. You also need the appropriate [API credentials and scopes](authentication-and-api-keys.md). For most cloud scripts and business-system integrations, start with the [Public REST API](public-rest-api.md).

## When to use gRPC

- A typed, generated client and a stable service contract in your own software.
- Direct service-to-service integration, including on-premise installations connecting internal systems within their own network.

## How it works

gRPC uses the same scoped API-key authentication as REST — `X-API-Key` plus organization context (see [Authentication & API keys](authentication-and-api-keys.md)). The [API reference](https://api.kiloiot.io/) lists the available gRPC services and methods. For native gRPC client definitions, use the materials provided with your on-premise or integration package.

## See also

- [Public REST API](public-rest-api.md)
- [Authentication & API keys](authentication-and-api-keys.md)
