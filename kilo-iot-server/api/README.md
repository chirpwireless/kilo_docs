# API

Kilo IoT Server exposes programmatic access so external systems can read and act on your deployment — backend integrations, analytics and reporting pipelines, industrial and automation tooling, and custom applications.

The full, interactive API reference lives at **[api.kiloiot.io](https://api.kiloiot.io/)** (protocol notes at [api.kiloiot.io/#description/protocols](https://api.kiloiot.io/#description/protocols)). That portal is the source of truth for the exact operations available. This section explains what the API is, how to choose a protocol, how requests authenticate, and where to manage keys — it does not reproduce the reference.

## What's available

Two protocols are offered on the same secured endpoint:

- **REST** — the primary path for most integrations. Standard HTTPS and JSON, usable from any HTTP client. Start here unless you have a specific reason not to. See [Public REST API](public-rest-api.md).
- **gRPC** — for strongly typed clients, service-to-service calls, and lower-overhead, latency-sensitive integration patterns, including on-premise and industrial automation. It is offered on the same public endpoint — it is not an on-premise-only feature. See [gRPC API](grpc-api.md).

The public reference includes REST endpoints **and** gRPC methods. Not every operation is exposed under both protocols — the reference portal is the single source of truth for which operations exist under each.

## Authentication

Requests are authenticated with a scoped API key in the `X-API-Key` header, plus your organization context in `X-Organization-Id`. Keys are created and managed in **Settings → API Keys**; the concepts are summarized in [Authentication & API keys](authentication-and-api-keys.md), and the full key-management workflow is in [API Keys](../settings/api-keys.md).

## Cloud and on-premise

Cloud deployments use the managed endpoint above. On-premise installations expose the same API within your own network boundary, where gRPC is a natural fit for internal service-to-service automation — but REST remains available and is still the simplest place to start.

## In this section

- [Public REST API](public-rest-api.md) — the standard integration path.
- [gRPC API](grpc-api.md) — typed, service-to-service, latency-sensitive integrations.
- [Authentication & API keys](authentication-and-api-keys.md) — how requests are authorized.
- [Examples](examples.md) — a minimal authenticated request to get started.
