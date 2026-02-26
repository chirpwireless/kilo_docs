# Security Basics

### Goal

Establish a secure baseline for KiloCenter deployments.

### Default Credentials

Local development includes convenience credentials that must be changed for any shared or production environment:

| Service     | Default                                | Notes                                        |
| ----------- | -------------------------------------- | -------------------------------------------- |
| PostgreSQL  | user `kilocenter`, password `changeme` | Change in `config.yaml` and Docker Compose   |
| MQTT broker | user `admin`, password `KiloCenter`    | Change in Mosquitto config and `config.yaml` |

### TLS for Base Station Communication

BSSCI requires TLS 1.2 or higher. Every base station connection to KC-Core uses TLS encryption.

#### Certificate Setup

1. KC-Core loads its TLS certificate and key from paths configured in `KC-Core/config.yaml` under the `bssci` section.
2. The CA certificate (`KC-Core/certificates/ca.crt`) must be imported into each base station's trust store.
3. Monitor `logs/runtime/kc-core.log` for TLS handshake errors after connecting a base station.

#### Certificate Rotation

When rotating certificates:

1. Generate new certificates signed by the same CA (or distribute the new CA to all base stations).
2. Update the certificate paths in `config.yaml`.
3. Restart KC-Core.
4. Verify base station reconnections succeed.

### Network Exposure

Limit which ports are accessible from outside your local network:

| Port  | Service               | Exposure Recommendation                |
| ----- | --------------------- | -------------------------------------- |
| 5000  | BSSCI                 | Only base station networks             |
| 5001  | SCACI                 | Only application center hosts          |
| 9090  | KC-Gateway (gRPC-web) | Operator and API consumer networks     |
| 5173  | KC-Web                | Operator networks only                 |
| 50051 | KC-Core internal gRPC | Loopback only, never expose externally |
| 5433  | PostgreSQL            | Loopback only                          |
| 6379  | Redis                 | Loopback only                          |
| 1883  | MQTT                  | Only MQTT consumer networks            |

### Hardening Checklist

* [ ] Rotate all default credentials listed above
* [ ] Restrict network access to management ports (50051, 5433, 6379)
* [ ] Verify TLS is active on all base station connections
* [ ] Store certificate private keys with restricted file permissions
* [ ] Enable audit-level logging in production environments
* [ ] Review `config.yaml` for any remaining development defaults

### Enterprise Edition

The Enterprise Edition adds multi-tenant security features:

* User authentication with JWT validation
* Organization-scoped data isolation
* Role-based access control
* API key management

These features are not available in the Community Edition.
