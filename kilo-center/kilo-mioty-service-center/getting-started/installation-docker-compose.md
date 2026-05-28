---
description: Install KiloCenter with Docker Compose — start the full four-service MIOTY stack including KC-Web in containers, no host toolchain required.
---

# Installation: Docker Compose

### Goal

Start a working local stack using Docker Compose. The full stack — including KC-Web — runs entirely in containers. No host Go toolchain or Bun runtime is required.

### Step 1: Configure Environment

From `kilocenter-modules/`:

```bash
cp .env.example .env
```

Edit `.env` if you want to change database credentials or log level. The defaults work for a local evaluation.

### Step 2: Generate TLS Certificates

KC-Core requires TLS certificates for BSSCI and SCACI. Generate them using the `certgen` service built into the KC-Core image:

```bash
docker compose run --rm certgen
```

> **File ownership (Linux):** If generated files are owned by root, rerun with `UID=$(id -u) GID=$(id -g)` prefixed.

This creates four files in `KC-Core/certificates/`:

| File         | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| `ca.crt`     | CA certificate (distribute to base stations)                   |
| `ca.key`     | CA private key (keep secure, used to sign client certs)        |
| `server.crt` | Server certificate (used by KC-Core BSSCI/SCACI TLS listeners) |
| `server.key` | Server private key                                             |

For a production FQDN, pass `-server`:

```bash
docker compose run --rm certgen -dir /app/certificates -days 365 -server bssci.example.com
```

> **Important:** KC-Core will fail to start without these certificates. See the Security page for the full certgen flag reference, certificate renewal, and client certificate generation.

### Step 3: Start All Services

```bash
docker compose up --build -d
```

This builds and starts all seven runtime services. Subsequent starts after a rebuild use cached layers where possible.

### Step 4: Validate Startup

```bash
# Check all services are up
docker compose ps

# KC-Core health
curl -s http://localhost:8086/health

# KC-Gateway health
curl -s http://localhost:8087/health

# Verify nginx gRPC-web proxy (200/401/403 = OK; 502/404 = proxy broken)
curl -s -o /dev/null -w "%{http_code}" \
  -X POST \
  -H "Content-Type: application/grpc-web+proto" \
  -H "X-Grpc-Web: 1" \
  --data-binary $'\x00\x00\x00\x00\x00' \
  http://localhost/kilocenter.api.v1.KiloCenterService/GetSystemStatus
```

Then open KC-Web in your browser:

* [http://localhost/](http://localhost/)

> **Note:** MQTT integration is disabled by default. The Mosquitto broker runs in Docker but KC-Core does not connect to it until you enable MQTT in `config/config.docker.yaml`. See MQTT First Steps when you are ready to set up MQTT.

### Stop All Services

```bash
docker compose down
```

To also remove persistent data volumes:

```bash
docker compose down -v
```

***

### Source Dev Mode

For contributors who want to run KC-Core, KC-Gateway, and KC-Web from source:

#### Step 1: Start Infrastructure Containers

```bash
docker compose up -d postgres redis mosquitto
```

This starts PostgreSQL (mapped to host port 5433), Redis (6379), and Mosquitto (1883).

#### Step 2: Generate TLS Certificates

Same as above — use the `certgen` compose service:

```bash
docker compose run --rm certgen
```

#### Step 3: Install KC-Web Dependencies

From `kilocenter-modules/KC-Web/`:

```bash
bun install
```

#### Step 4: Start All Services from Source

From `kilocenter-modules/`:

```bash
./start-dev.sh
```

This builds and starts KC-Core, KC-Gateway, and KC-Web. Logs are written to `logs/runtime/`. KC-Web is available at `http://localhost:5173`.

#### Stop Source Services

```bash
./stop-all-services.sh

# Stop infrastructure containers
docker compose stop postgres redis mosquitto
```
