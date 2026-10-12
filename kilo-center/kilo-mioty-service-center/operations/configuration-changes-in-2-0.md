---
description: KiloCenter 2.0 configuration and Helm changes: new settings and defaults, removed settings, stricter validation, health checks and rollout behavior.
---

# Which configuration settings changed in KiloCenter 2.0?

This page lists the settings that are new, removed or stricter in KiloCenter 2.0, with their defaults and where to set them. Settings live in the KC-Core configuration file (`config.yaml`), can be overridden with `KILOCENTER_` environment variables, and have Helm values in the chart under `kcCore.config`. Upgrading from 1.x also needs the steps in [How do I migrate KiloCenter key material to 2.0?](key-material-migration.md).

## Which settings are required now?

| Setting | What changed |
|---|---|
| `KILOCENTER_MASTER_KEY` | Required. It encrypts stored endpoint and base station keys, and the services do not start without it. |
| `identity.address` | KC-Core no longer starts without it, because it asks KC-Identity for every caller's roles. |
| `internal_auth.peer_secret` | Set the same value, at least 32 characters, on KC-Gateway, KC-Core and KC-Identity. KC-Core and KC-Identity then trust gateway identity headers only from a caller that presents it. Leaving it empty keeps the previous behavior on one host, and it is required when the services talk across hosts. |
| Authentication | A stack run with authentication disabled no longer serves data calls. |

Upgrade KC-Core and KC-Identity together: the internal `GetUserMembership` call is replaced by `GetUserRoles`.

## Which settings are new?

| Setting | Default | What it controls |
|---|---|---|
| `grpc.rbac_role_cache_ttl_seconds` | `30` | How long a caller's roles are cached. A role change applies within this time without a new sign-in. |
| `protocol.downlink_expiry.lifetime` | `24h` | How long a downlink waits for a downlink window before it is marked expired. Helm: `kcCore.config.protocol.downlinkExpiry.lifetime`. |
| `protocol.downlink_expiry.sweep_interval` | `5s` | How often KC-Core checks for expired downlinks. |
| `protocol.downlink_expiry.batch_size` | `100` | How many expired downlinks one check handles. |
| `protocol.downlink_expiry.revoke_not_held_codes` | `[2]` | The refusal codes of a base station's `dlDataRev` answer that mean the station does not hold the downlink. Any other refusal leaves the downlink in flight. Helm: `revokeNotHeldCodes`. |
| `protocol.delivery.max_backoff` | `5m` | The longest wait between retries of a failed uplink delivery to an Application Center or MQTT. Deliveries retry until they succeed. |
| `protocol.socket_write_timeout` | `10000` ms | The time limit for writing one BSSCI or SCACI frame, so one stalled peer cannot block delivery to the others. |
| `protocol.connection_establishment_timeout` | `30000` ms (Helm chart value) | The time a new SCACI connection has to finish its TLS handshake and connect. |
| `protocol.scaci_resume_max_pending_operations` | `10000` | How many operations KC-Core holds for a disconnected Application Center that may resume its session. The operation that would exceed it ends the session's resumability. Helm: `kcCore.config.scaci.resumeMaxPendingOperations`. |
| `general.org_cache_ttl_minutes` | `5` | How long KC-Identity and KC-Core cache a tenant's default organization. |
| `certificates.server_names` | none | Further DNS names and IP addresses the server certificate carries. The `certgen` tool takes them through `-san`, and the Certificates page lists the names before you confirm a renewal. |

## Which settings are removed?

- `protocol.delivery.max_attempts` (Helm `delivery.maxAttempts`): deliveries now retry until they succeed. Old configuration files that still set it load unchanged.
- `grpc.web.enable_websockets`: the web interface and gRPC-web clients use HTTP streams, not WebSockets. A file that still sets the key loads, and the key is ignored.
- `kcIdentity.config.auth.registrationEnabled` (Helm): no template read it, so KC-Identity always ran with self-registration off. Nothing changes.
- The organization and tenant quotas `can_have_base_stations`, `max_base_station_count` and `max_endpoint_count`, with their database columns and screens.

## Which settings are validated more strictly?

- An empty `certificates.certgen_path`, `certs_dir` or `temp_dir`, or a `server_validity_days` or `cleanup_interval_min` of zero or less, stops KC-Core at start-up. Leave a setting out to get its default.
- `protocol.strict_org_resolution: true` together with a SCACI listener needs `protocol.scaci_cert_tenant_mapping: true`. KC-Core checks it when it loads the configuration.
- The `downlink_expiry`, `delivery`, `socket_write_timeout` and `connection_establishment_timeout` values must be positive, and `max_backoff` must be at least the retry backoff.

## How do the health checks work now?

`/health/ready` on the KC-Core health port (`8086`) reports only what KC-Core needs to serve its API, which is PostgreSQL and the internal gRPC server. Use it for readiness probes. `/health` still lists every component, and its BSSCI and SCACI rows no longer open connections to the listeners.

## How does the Helm chart roll out?

- KC-Core and Mosquitto roll out with the `Recreate` strategy. A rolling update would start a new KC-Core beside the old one, and its start-up marks the old pod's live BSSCI sessions disconnected. Both pods also mount a `ReadWriteOnce` volume that attaches to one node at a time. Expect a short pause while the pod is replaced; base stations resume their sessions afterwards.
- A pre-upgrade hook runs the `rekey` command. It reads its own hook-scoped Secret and, by default, decrypts rows sealed with the retired published development passphrase (`rekey.allowPublishedDevelopmentKey: true`). To keep the retired `endpoint_keys` rows, set `rekey.archiveExport.existingClaim` to a persistent volume. `rekey.legacyPassphraseSecretKey` is replaced by `rekey.legacyPassphrase`.
- The chart and `docker-compose.prod.yml` now pull the published images `ghcr.io/kiloiot/kc-core`, `kc-gateway`, `kc-identity` and `kc-web`. An installation that overrides the repository keeps its override.

## Which other behavior changes affect operations?

- BSSCI sessions survive a service center restart or crash, so base stations resume instead of starting over. A base station that starts a new session discards its state, and the downlinks it held are queued again.
- A base station may complete its own operations out of order. Stations that sent the next uplink before completing the previous one used to be disconnected on every such overlap.
- Every private key download and every key reveal is written to the [Audit Log](audit-log-and-errors-center.md) before the secret is handed out.
