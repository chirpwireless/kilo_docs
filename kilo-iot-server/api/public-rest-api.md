# Public REST API

The REST API is the primary way to integrate Kilo IoT Server with external systems over standard HTTPS. Any language or tool that can make an authenticated HTTP request can use it — backend services, data pipelines, reporting jobs, and operational tooling.

This page explains how the REST API works at a concept level. For the exact endpoints, parameters, and response schemas, use the interactive reference at [api.kiloiot.io](https://api.kiloiot.io/) — it is the source of truth and is intentionally not reproduced here.

## Base endpoint and authentication

Requests go to the secured production endpoint and carry two headers:

- `X-API-Key` — a scoped key created in [Settings → API Keys](../settings/api-keys.md).
- `X-Organization-Id` — the organization the request operates in; it must match the key's organization. Some operations also accept the organization as an `organizationId` query parameter — the reference shows which.

All traffic is over TLS. Treat the key like a credential — see [Authentication & API keys](authentication-and-api-keys.md).

## What you can do with it

At a concept level, and subject to the scopes granted to the key, REST lets integrations:

- read devices and their Digital Twin state, and read sensor metric definitions;
- read latest values and historical telemetry;
- read dashboards, rules, organizations, and logs;
- create or modify resources (devices, connectors, dashboards, rules, users) where a Write scope is granted;
- send device commands where the operation and scope allow.

Which specific endpoint backs each of these — and whether a given operation is REST, gRPC, or both — is defined in the reference portal. Do not assume parity between protocols.

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
