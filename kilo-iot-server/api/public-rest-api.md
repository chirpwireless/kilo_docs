# Public REST API

The REST API is the primary way to integrate Kilo IoT Server with external systems over standard HTTPS. Any language or tool that can make an authenticated HTTP request can use it — backend services, data pipelines, reporting jobs, and operational tooling.

This page explains how the REST API works at a concept level. For the exact endpoints, parameters, and response schemas, use the interactive reference at [api.kiloiot.io](https://api.kiloiot.io/) — it is the source of truth and is intentionally not reproduced here.

## Base endpoint and authentication

Requests go to the secured production endpoint and carry two headers:

- `X-API-Key` — a scoped key created in [Settings → API Keys](../settings/api-keys.md).
- `X-Organization-Id` — the organization the request operates in; it must match the key's organization. Some operations also accept the organization as an `organizationId` query parameter — the reference shows which.

All traffic is over TLS. Treat the key like a credential — see [Authentication & API keys](authentication-and-api-keys.md).

## What the API can do

The public API spans REST **and** gRPC, and the two do not cover the same operations. At a concept level — and subject to the scopes granted to the key — the API as a whole lets integrations:

- read the user/account profile and list devices;
- read sensor history and last-seen values;
- read dashboards, automation rules, alarms, notifications, and organization data;
- create or modify resources (rules, dashboards, devices, sensor templates, connections, and similar) where a Write scope is granted.

Today the **REST** surface centers on the user profile, device listing, and automation rules; the remaining operations above are exposed as **gRPC** methods (see [gRPC API](grpc-api.md)). There is **no** device-command or downlink operation in the public API.

The [reference portal](https://api.kiloiot.io/) is the single source of truth for which operations exist and whether each is REST or gRPC. Do not assume an endpoint exists, or that REST and gRPC have the same coverage.

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
