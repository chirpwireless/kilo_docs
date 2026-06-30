---
description: Kilo IoT Server API overview — REST and gRPC access, scoped keys, and cloud or on-premise integration endpoints.
---

# Kilo IoT Platform API

The Kilo IoT Platform exposes programmatic access so external systems can read and manage your deployment's data and configuration — and now send commands to your devices — covering backend integrations, analytics and reporting pipelines, industrial and automation tooling, and custom applications.

Use the **[API reference](https://api.kiloiot.io/)** for the complete list of endpoints, request fields, responses, and required scopes. This section covers what the API is for, how to choose a protocol, how requests authenticate, and where to manage keys.

> Device control is part of the API: a key with the **Commands** scope can create a device's commands and dispatch them as downlinks (on/off, setpoints, and the like). See [Device Commands](../devices/commands/) for the in-app workflow, and the [API reference](https://api.kiloiot.io/#tag/commands) for the command endpoints.

## What's available

Two protocols are offered on the same secured endpoint:

- **REST** — the primary path for most integrations. Standard HTTPS and JSON, usable from any HTTP client. Start here unless you have a specific reason not to. See [Public REST API](public-rest-api.md).
- **gRPC** — the advanced / on-premise path. Choose REST unless you specifically need gRPC for an on-premise or typed service-to-service integration. See [gRPC API](grpc-api.md).

## Authentication

Requests are authenticated with a scoped API key in the `X-API-Key` header (format `kilo_<key>`), plus your organization context in `X-Organization-Id`. Keys are created and managed in **Settings → API Keys**; the concepts are summarized in [Authentication & API keys](authentication-and-api-keys.md), and the full key-management workflow is in [API Keys](../settings/api-keys.md).

## Cloud and on-premise

Cloud deployments use the managed endpoint above. On-premise installations expose the same API within your own network boundary, where gRPC is a natural fit for internal service-to-service automation — but REST remains available and is still the simplest place to start.

## In this section

- [Public REST API](public-rest-api.md) — the standard integration path.
- [gRPC API](grpc-api.md) — the advanced / on-premise path (typed, service-to-service).
- [Authentication & API keys](authentication-and-api-keys.md) — how requests are authorized.
- [Examples](examples.md) — a minimal authenticated request to get started.
