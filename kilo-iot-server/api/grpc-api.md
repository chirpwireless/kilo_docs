# gRPC API

Alongside REST, Kilo IoT Server offers a gRPC API on the same secured endpoint. gRPC suits integrations that benefit from strongly typed contracts, generated clients, direct service-to-service calls, and lower-overhead, latency-sensitive communication — including on-premise installations and industrial automation that connect internal systems within a controlled network.

gRPC is available generally, not only for on-premise deployments. For most cloud integrations, REST is the simpler starting point; choose gRPC when its specific strengths matter to your system design.

## When to use gRPC

- Service-to-service automation where a typed client and a stable contract reduce integration cost.
- Latency-sensitive or high-frequency internal workflows where lower overhead helps. (Lower-overhead integration patterns — no specific latency figures are promised.)
- On-premise and industrial deployments wiring internal systems together within their own network boundary.

## How it works

gRPC uses the same scoped API-key authentication as REST — `X-API-Key` plus organization context (see [Authentication & API keys](authentication-and-api-keys.md)). The available gRPC services and methods, their request/response messages, and how they map to product capabilities are listed in the interactive reference at [api.kiloiot.io](https://api.kiloiot.io/#description/protocols). The reference is the source of truth: not every REST operation has a gRPC equivalent, and vice-versa, so confirm the method you need there before building against it.

## Choosing between REST and gRPC

| Use REST when | Use gRPC when |
|---|---|
| Standard HTTP integrations, scripts, data pipelines | Typed clients and generated stubs are valuable |
| Broadest tooling and language support out of the box | Service-to-service / internal automation |
| You want the simplest path to a first call | Lower-overhead, latency-sensitive internal workflows, including on-prem industrial |

## See also

- [Public REST API](public-rest-api.md)
- [Authentication & API keys](authentication-and-api-keys.md)
- Reference: [api.kiloiot.io](https://api.kiloiot.io/)
