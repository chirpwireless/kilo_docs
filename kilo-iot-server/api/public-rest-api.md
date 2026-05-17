# Public REST API

The REST API is the primary way to integrate Kilo IoT Server with external systems over standard HTTPS. Any language or tool that can make an authenticated HTTP request can use it — backend services, data pipelines, reporting jobs, and operational tooling.

This page explains how the REST API works at a concept level. For the exact endpoints, parameters, and response schemas, use the interactive reference at [api.kiloiot.io](https://api.kiloiot.io/) — it is the source of truth and is intentionally not reproduced here.

## Base endpoint and authentication

Requests go to the secured production endpoint and carry two headers:

- `X-API-Key` — a scoped key created in [Settings → API Keys](../settings/api-keys.md).
- `X-Organization-Id` — the organization the request operates in; it must match the key's organization. Some operations also accept the organization as an `organizationId` query parameter — the reference shows which.

All traffic is over TLS. Treat the key like a credential — see [Authentication & API keys](authentication-and-api-keys.md).

## What the API can do

REST is the broad, primary surface. Subject to the scopes granted to the key, integrations can work across the platform — for example: read the account/user profile; list and manage devices, their sensors, and sensor templates; read sensor **history and last-seen** values; read and manage connections and connectors; read and manage dashboards and widgets; read organization, membership, and subscription data; and read and manage automation rules.

The exact endpoints, parameters, response schemas, and the scope each one requires are defined in the [reference portal](https://api.kiloiot.io/) — it is the single source of truth and is not reproduced here. There is **no** device-command or downlink operation in the public API. The same capabilities are also offered over gRPC for [advanced / on-premise integrations](grpc-api.md); do not assume an operation exists under both protocols — the reference shows which.

## Workflow

1. Create a scoped key in [Settings → API Keys](../settings/api-keys.md) and store it securely.
2. Find the operation you need in the [API reference](https://api.kiloiot.io/).
3. Call it with `X-API-Key` and `X-Organization-Id`.
4. Handle standard HTTP status codes and JSON responses.

A minimal authenticated call is in [Examples](examples.md).

## See also

- [gRPC API](grpc-api.md) — when typed clients or service-to-service calls fit better.
- [Authentication & API keys](authentication-and-api-keys.md)
- [API Keys](../settings/api-keys.md) — create and manage keys.
