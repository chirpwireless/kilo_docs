---
description: KiloCenter gRPC API reference — Protocol Buffer definitions for base stations, endpoints, and integrations, with an interactive online portal.
---

# API Reference

KiloCenter provides a gRPC API for integrating with or extending the platform. All API definitions are Protocol Buffers hosted in the repository under `KC-Core/api/proto/`.

### Interactive API Reference

A browsable API reference with all RPC endpoints is available at:

[https://servicecenter-api.kiloiot.io/](https://servicecenter-api.kiloiot.io/)

### gRPC Overview

gRPC is a high-performance RPC framework that uses Protocol Buffers for serialization and HTTP/2 for transport. For background, see [grpc.io](https://grpc.io/).

KiloCenter's API is defined across three proto files:

| File               | Description                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| `kilocenter.proto` | Unified backward-compatible service (all 117 RPCs)                                                     |
| `core.proto`       | Core domain messages (endpoints, base stations, messages, downlinks, events, certificates, blueprints) |
| `identity.proto`   | Identity domain messages (users, organizations, API keys, auth)                                        |

### Client Generation

**Go (using buf — project default):**

```bash
cd KC-Core/api/proto && buf generate
```

Output: `KC-Core/api/gen/` (Go stubs only — `buf.gen.yaml` configures Go plugins).

**Other languages (using protoc):**

```bash
# Python example
python -m grpc_tools.protoc \
  -I KC-Core/api/proto \
  --python_out=./gen --grpc_python_out=./gen \
  KC-Core/api/proto/kilocenter.proto \
  KC-Core/api/proto/core.proto \
  KC-Core/api/proto/identity.proto
```

`buf.gen.yaml` only generates Go stubs. For other languages, use protoc or add buf plugins. See [grpc.io/docs/languages](https://grpc.io/docs/languages/) for language-specific guides.

### Authentication

#### Community Edition

Community Edition runs with authentication disabled (`KILOCENTER_AUTH_ENABLED=false`). No headers are required for any RPC — all methods are accessible directly.

```bash
# No auth headers needed
grpcurl -plaintext -d '{}' \
  localhost:9090 kilocenter.api.v1.KiloCenterService/GetSystemStatus
```

#### Enterprise Edition

When authentication is enabled (`KILOCENTER_AUTH_ENABLED=true`), three metadata headers apply:

| Header              | Required For                                    | Value                                      |
| ------------------- | ----------------------------------------------- | ------------------------------------------ |
| `authorization`     | All non-public RPCs                             | `Bearer <JWT_TOKEN>` or `Bearer <API_KEY>` |
| `x-organization-id` | All non-exempt RPCs                             | UUID of the target organization            |
| `x-user-id`         | RPCs called without JWT (header-only auth mode) | UUID of the acting user                    |

**Public methods** (no headers required): `Login`, `RefreshTokens`, `GetAuthSettings`, `ExchangeOIDC`, `ExchangeOAuth2`, `GetReleaseInfo`, `RegisterAccount` Source: `KC-Core/pkg/grpc/public_methods.go`

**Org-exempt methods** (auth required, no org header): `GetSystemStatus`, `GetProfile`, `Logout`, `ChangePassword`, User/Org/Membership CRUD (org context resolved from request fields) Source: `KC-Core/pkg/grpc/public_methods.go` → `OrgExemptMethods`

API tokens are created through KC-Web or the `CreateApiKey` RPC.

### API Reference by Domain

#### Endpoints (7)

`CreateEndPoint`, `GetEndPoint`, `UpdateEndPoint`, `DeleteEndPoint`, `ListEndPoints`, `AttachEndPoint`, `DetachEndPoint`

#### Base Stations (7)

`CreateBaseStation`, `GetBaseStation`, `UpdateBaseStation`, `DeleteBaseStation`, `ListBaseStations`, `GetBaseStationStats`, `UpdateBaseStationEui`

#### Messages (11)

`GetMessage`, `ListMessages`, `StreamMessages`, `ListBaseStationMessages`, `GetBaseStationMessage`, `GetBaseStationMessageStats`, `SearchBaseStationMessages`, `ExportBaseStationMessages`, `StreamBaseStationMessages`, `ListEndpointMessages`, `ListBaseStationActivity`

#### Downlinks (4)

`SendDownlink`, `RevokeDownlink`, `ListDownlinkQueue`, `GetDownlinkResults`

#### UL Transmit (1)

`SendULTransmit`

#### Base Station Control (2)

`RequestBaseStationStatus`, `InitiatePing`

#### DL RX Status (3)

`GetDLRXStatus`, `QueryDLRXStatus`, `GetDLRXStatusQueries`

#### System (3)

`GetSystemStatus`, `GetStatistics`, `GetReleaseInfo`

#### API Keys (4)

`CreateApiKey`, `GetApiKey`, `DeleteApiKey`, `ListApiKeys`

#### Integrations (5)

`CreateIntegration`, `GetIntegration`, `UpdateIntegration`, `DeleteIntegration`, `ListIntegrations`

#### Analytics (3)

`GetAnalyticsOverview`, `GetActivityAnalytics`, `GetSignalQualityAnalytics`

#### Events & Alerts (8)

`ListEvents`, `ListBaseStationEvents`, `ListEndPointEvents`, `StreamEvents`, `StreamBaseStationEvents`, `StreamEndPointEvents`, `ListAlerts`, `GetAlertSummary`

#### SCACI Monitoring (6)

`ListScaciSessions`, `GetScaciSession`, `GetScaciStatistics`, `ListScaciErrors`, `ListScaciQueues`, `GetScaciStatus`

#### Certificates (6)

`GenerateCertificate`, `DownloadCertificate`, `DownloadBaseStationCertificate`, `GenerateServerCertificates`, `RenewServerCertificates`, `GetServerCertificateStatus`

#### Manufacturers (5)

`CreateManufacturer`, `GetManufacturer`, `UpdateManufacturer`, `DeleteManufacturer`, `ListManufacturers`

#### Device Models (5)

`CreateDeviceModel`, `GetDeviceModel`, `UpdateDeviceModel`, `DeleteDeviceModel`, `ListDeviceModels`

#### Blueprints (8)

`CreateBlueprint`, `GetBlueprint`, `UpdateBlueprint`, `DeleteBlueprint`, `ListBlueprints`, `SetDefaultBlueprint`, `SubmitBlueprintToRegistry`, `CreateDeviceModelWithBlueprint`

#### Blueprint Utilities (1)

`DecodePreview`

#### Endpoint Stats (2)

`GetEndPointStats`, `GetEndPointOperations`

#### Auth & Session (8) — Enterprise

`Login`, `RefreshTokens`, `GetProfile`, `GetAuthSettings`, `Logout`, `ChangePassword`, `ExchangeOIDC`, `ExchangeOAuth2`

#### Self-Service Registration (1) — Enterprise

`RegisterAccount`

#### Users (6) — Enterprise

`CreateUser`, `GetUser`, `UpdateUser`, `DeleteUser`, `ListUsers`, `UpdateUserPassword`

#### Organizations (5) — Enterprise

`CreateOrganization`, `GetOrganization`, `UpdateOrganization`, `DeleteOrganization`, `ListOrganizations`

#### Organization Memberships (6) — Enterprise

`AddOrganizationUser`, `GetOrganizationUser`, `UpdateOrganizationUser`, `RemoveOrganizationUser`, `ListOrganizationUsers`, `ListUserOrganizations`

### Streaming RPCs

Five RPCs use server-side streaming to deliver real-time data:

| RPC                         | Use Case                   |
| --------------------------- | -------------------------- |
| `StreamMessages`            | Real-time uplink messages  |
| `StreamBaseStationMessages` | Base station message feed  |
| `StreamEvents`              | System event notifications |
| `StreamBaseStationEvents`   | Base station event feed    |
| `StreamEndPointEvents`      | Endpoint event feed        |

```typescript
const stream = client.streamMessages(request, metadata);
stream.on('data', (message) => { /* handle message */ });
stream.on('error', (err) => { /* handle error */ });
stream.on('end', () => { /* stream closed */ });
```

### Pagination

All `List*` RPCs support offset-based pagination via `page_size` and `page_token` fields.

**Standard list RPCs:** default 20, max 100 **High-volume lists** (endpoints, base stations, downlinks): default 100, max 1000

Source: `KC-Core/pkg/grpc/pagination.go`

```protobuf
message ListEndPointsRequest {
  int32 page_size = 1;    // Default 20, max 100
  string page_token = 2;  // From previous ListEndPointsResponse.next_page_token
}
```

### Error Handling

All errors use gRPC status codes with machine-readable error tokens from `KC-Core/pkg/grpc/errors_catalog.go`.

| gRPC Code                 | HTTP Equiv | Common Causes                          |
| ------------------------- | ---------- | -------------------------------------- |
| `INVALID_ARGUMENT` (3)    | 400        | Malformed request, validation failures |
| `NOT_FOUND` (5)           | 404        | Resource does not exist                |
| `ALREADY_EXISTS` (6)      | 409        | Duplicate resource                     |
| `PERMISSION_DENIED` (7)   | 403        | Authorization failure                  |
| `UNAUTHENTICATED` (16)    | 401        | Missing or invalid token               |
| `FAILED_PRECONDITION` (9) | 400        | State-based failure                    |
| `INTERNAL` (13)           | 500        | Server error                           |

For the full error model and error token ranges, see docs/api.md.

### API Console

gRPC reflection is enabled on KC-Gateway. Compatible tools:

```bash
# grpcui — interactive web UI
grpcui -plaintext localhost:9090

# grpcurl — command-line client
grpcurl -plaintext localhost:9090 list

# Postman — use the gRPC tab with server reflection
# BloomRPC — desktop gRPC client
```

### Further Reading

* Full API reference — request/response contracts and error token ranges
* Proto source files — canonical API definitions
* gRPC First Steps — verify connectivity and discover methods
