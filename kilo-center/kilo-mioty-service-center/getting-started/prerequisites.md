---
description: KiloCenter prerequisites — Docker, Docker Compose, Git, and optional toolchains (Go, Bun) for install or build.
---

# Prerequisites

Kilo Center prerequisites depend on how you install it. Choose a route before preparing the host: the full Docker Compose stack runs packaged services in containers, a source build needs development tools, and Kubernetes uses a cluster and Helm.

The list below distinguishes those choices so you can prepare the required runtime, ports, and certificates without installing tools you will not use. Start with [Architecture and Components](architecture-and-components.md) if the service roles are unfamiliar.

### Required

For [Docker Compose](installation-docker-compose.md), install Docker, Docker Compose v2, and Git. The full container route does not require Go or Bun on the host.

For [Linux Host](installation-linux-host.md) or [Local VM and Automation](installation-local-vm-and-automation.md), follow that route's host and runtime requirements. For [Kubernetes](installation-kubernetes-helm.md), prepare the cluster, Helm, and storage requirements listed in that guide.

### Additional Requirements for Building from Source

If you are building KC-Core, KC-Gateway, or KC-Web from source (development or contribution):

* Go 1.24.4+
* Bun runtime (for KC-Web build and dev server)

### Optional Tools

Useful for validation and troubleshooting:

* `grpcurl` for gRPC API checks
* `mosquitto_sub` and `mosquitto_pub` for MQTT testing (only needed if you enable MQTT integration)
* `psql` for direct database inspection

### Infrastructure Dependencies

KiloCenter requires these services at runtime:

* **PostgreSQL 18+** -- primary data store
* **Redis 7+** -- caching
* **Mosquitto 2.0+** -- MQTT broker (optional for initial setup; MQTT is disabled by default in `KC-Core/config.yaml`)

In the recommended setup, all three run via Docker Compose. Mosquitto is included in the Docker Compose stack but KC-Core will not connect to it unless MQTT is explicitly enabled. See MQTT First Steps for setup instructions.

### Required Ports

The local deployment uses the ports below. Check the mappings for your installation route; these are not all ports that should be exposed publicly:

| Port  | Service            | Notes                        |
| ----- | ------------------ | ---------------------------- |
| 80    | KC-Web (container) | nginx — SPA + gRPC-web proxy |
| 9090  | KC-Gateway         | External gRPC-web API        |
| 8086  | KC-Core health     | Health and Prometheus        |
| 8087  | KC-Gateway health  | Gateway health endpoint      |
| 5000  | BSSCI              | Base station protocol (TLS)  |
| 5001  | SCACI              | Application center protocol  |
| 50051 | KC-Core gRPC       | Internal, loopback only      |
| 5433  | PostgreSQL         | Docker host port mapping     |
| 6379  | Redis              | Cache                        |
| 1883  | MQTT               | Mosquitto broker             |

Port 5173 is used only in source dev mode (Vite dev server).

### TLS Certificates

KiloCenter requires TLS certificates for base station communication (BSSCI) and application center communication (SCACI). For the Docker Compose route, generate them with the `certgen` service before starting KC-Core for the first time:

```bash
docker compose run --rm certgen
```

> **File ownership (Linux):** If generated files are owned by root, rerun with `UID=$(id -u) GID=$(id -g)` prefixed.

See the certificate bootstrap steps in [Docker Compose Installation](installation-docker-compose.md). Other installation routes have their own certificate setup steps.

### Repository Layout

Clone the repository and work from the `kilocenter-modules/` directory:

```bash
git clone <repository-url>
cd kilocenter-modules
```
