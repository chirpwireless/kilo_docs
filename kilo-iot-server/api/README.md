---
description: Kilo IoT Server API overview — REST and gRPC access, scoped keys, and cloud or on-premise integration endpoints.
---

# Kilo IoT Platform API

Kilo's **API** lets your existing applications work with the deployment: read device information, use sensor history in reports, and call the operations exposed by the platform. You can connect business software and custom tools without reproducing the browser workflow.

An **API**, or application programming interface, is the contract your software uses to make those requests. Start with the [Public REST API](public-rest-api.md), then use the [API reference](https://api.kiloiot.io/) to select the operation and its required scopes. For conversational setup from an external AI client, use [MCP](mcp-server.md).

Start with the [Public REST API](public-rest-api.md), which uses HTTP requests and structured responses. The [API reference](https://api.kiloiot.io/) lists the operations and permissions each requires. Create an [API key](../settings/api-keys.md)—an integration credential—and send it with the matching organization header. Choose only the permission **scopes** the integration needs.

## What's available

Two protocols are offered on the same secured endpoint:

- **REST** — the primary path for most integrations. Standard HTTPS and JSON, usable from any HTTP client. Start here unless you have a specific reason not to. See [Public REST API](public-rest-api.md).
- **gRPC** — the advanced / on-premise path. Choose REST unless you specifically need gRPC for an on-premise or typed service-to-service integration. See [gRPC API](grpc-api.md).

Alongside them, a separate endpoint serves AI clients rather than code you write:

- **MCP** — connect an MCP-capable AI client, such as Claude Code or Claude Desktop, to your organization. You authorize it in the browser with your usual Kilo account instead of issuing a key, and it works within your own permissions. See [MCP Server](mcp-server.md).

## Authentication

Requests are authenticated with a scoped API key in the `X-API-Key` header (format `kilo_<key>`), plus your organization context in `X-Organization-Id`. Keys are created and managed in **Settings → API Keys**; the concepts are summarized in [Authentication & API keys](authentication-and-api-keys.md), and the full key-management workflow is in [API Keys](../settings/api-keys.md).

## Cloud and on-premise

Cloud deployments use the managed endpoint above. On-premise installations expose the same API within your own network boundary, where gRPC is a natural fit for internal service-to-service automation — but REST remains available and is still the simplest place to start.

## In this section

- [Public REST API](public-rest-api.md) — the standard integration path.
- [gRPC API](grpc-api.md) — the advanced / on-premise path (typed, service-to-service).
- [MCP Server](mcp-server.md) — connect your own AI client to your organization.
- [Authentication & API keys](authentication-and-api-keys.md) — how requests are authorized.
- [Examples](examples.md) — a minimal authenticated request to get started.
