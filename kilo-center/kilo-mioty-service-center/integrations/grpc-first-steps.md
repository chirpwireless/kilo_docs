---
description: Check Kilo Center gRPC access through the local API gateway with grpcurl, discover methods, and supply authentication when enabled.
---

# gRPC First Steps

The Kilo Center **gRPC API** lets software call service-center operations using structured requests and responses. It includes endpoint management and downlink operations. Use `grpcurl`, a command-line gRPC client, to check a local installation before writing an integration.

The commands below use the local API entry point at `localhost:9090`, exposed by KC-Gateway. Have the stack running and check its [port configuration](../getting-started/configuration-basics.md) first. These examples use a local plaintext connection; authentication and transport settings must match the installation you are calling.

### Goal

Verify local gRPC connectivity through KC-Gateway and discover the KiloCenterService methods.

### Check Service Reachability

```bash
grpcurl -plaintext localhost:9090 list
```

### Inspect Main Service

```bash
grpcurl -plaintext localhost:9090 describe kilocenter.api.v1.KiloCenterService
```

### Check gRPC Health Service

```bash
grpcurl -plaintext localhost:9090 grpc.health.v1.Health/Check
```

### Call a Basic API Method

```bash
grpcurl -plaintext -d '{}' \
  localhost:9090 kilocenter.api.v1.KiloCenterService/GetSystemStatus
```

### Authentication and Organization Context

The Community Edition runs with authentication disabled by default in development mode. The gRPC commands above work without auth headers in this configuration.

If you enable authentication (Enterprise Edition or by setting `KILOCENTER_AUTH_ENABLED=true`), include metadata headers in gRPC calls:

```bash
grpcurl -plaintext \
  -H "authorization: Bearer <JWT_TOKEN>" \
  -H "x-organization-id: <ORG_ID>" \
  -d '{}' \
  localhost:9090 kilocenter.api.v1.KiloCenterService/GetSystemStatus
```

### Next Step

Use the full API reference for request/response contracts:

* `kilocenter-modules/docs/api.md`
