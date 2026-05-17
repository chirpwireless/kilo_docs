# gRPC API

Alongside REST, Kilo IoT Server offers a gRPC interface. **gRPC is the advanced / on-premise path: choose REST unless you specifically need gRPC for an on-premise or typed service-to-service integration.** For standard cloud and SaaS integrations, REST is the recommended default (see [Public REST API](public-rest-api.md)).

## When to use gRPC

- A typed, generated client and a stable service contract in your own software.
- Direct service-to-service integration, including on-premise installations connecting internal systems within their own network.

## How it works

gRPC uses the same scoped API-key authentication as REST — `X-API-Key` plus organization context (see [Authentication & API keys](authentication-and-api-keys.md)). The [API reference](https://api.kiloiot.io/) lists the available gRPC services and methods. For native gRPC client definitions, use the materials provided with your on-premise or integration package.

## See also

- [Public REST API](public-rest-api.md)
- [Authentication & API keys](authentication-and-api-keys.md)
