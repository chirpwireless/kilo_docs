# Public REST API

The REST API is the primary way to integrate Kilo IoT Server with external systems over standard HTTPS. Any language or tool that can make an authenticated HTTP request can use it — backend services, data pipelines, reporting jobs, and operational tooling.

Use the [API reference](https://api.kiloiot.io/) for the full list of endpoints, request parameters, response schemas, and required scopes.

## Base endpoint and authentication

Requests go to the secured production endpoint and carry two headers:

- `X-API-Key` — a scoped key created in [Settings → API Keys](../settings/api-keys.md).
- `X-Organization-Id` — the organization the request operates in; it must match the key's organization. Some operations also accept the organization as an `organizationId` query parameter instead of the header.

All traffic is over TLS. Treat the key like a credential — see [Authentication & API keys](authentication-and-api-keys.md).

## What the API can do

REST is the broad, primary surface. Subject to the scopes granted to the key, integrations can work across the platform — for example: read the account/user profile; list and manage devices, their sensors, and sensor templates; read sensor **history and last-seen** values; read connector definitions and manage connections; read and manage dashboards and widgets; read organization, membership, and subscription data; and read and manage automation rules.

For typed service-to-service or on-premise integrations, see [gRPC API](grpc-api.md).

## Workflow

1. Create a scoped key in [Settings → API Keys](../settings/api-keys.md) and store it securely.
2. Find the operation you need in the API reference.
3. Call it with `X-API-Key` and `X-Organization-Id`.
4. Handle standard HTTP status codes and JSON responses.

A minimal authenticated call is in [Examples](examples.md).

## See also

- [gRPC API](grpc-api.md) — when typed clients or service-to-service calls fit better.
- [Authentication & API keys](authentication-and-api-keys.md)
- [API Keys](../settings/api-keys.md) — create and manage keys.
