---
description: Install KiloCenter with Docker Compose — start the four-service MIOTY stack including KC-Web, no host toolchain.
---

# Installation: Docker Compose

Use the current installation examples only in an isolated evaluation environment with test data.
Published credentials, signing-key defaults and network exposure need correction before customer use.
Changing only the administrator password is insufficient. Read the [installation safety notice](../security/installation-safety.md) before running commands.

### Goal

Start a working local stack using Docker Compose. The full stack — including KC-Web — runs entirely in containers. No host Go toolchain or Bun runtime is required.

### Step 1: Configure Environment

From the `kilo-service-center` repository root:

```bash
cp .env.example .env
```

Edit `.env` if you want to change database credentials or log level. The defaults work for a local evaluation.

### Step 2: Choose the TLS hostname

The current Compose stack generates the CA and server certificate on first startup in the
`cert_data` volume mounted at `/app/certificates`. Set `KILOCENTER_TLS_SERVER_NAME` in `.env` before
first startup if stations use a hostname other than `localhost`.

For a later hostname change, use [certificate-only renewal](../security/certificate-renewal.md).
Do not delete data volumes or regenerate the CA to change a server certificate.

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

Only for an intentional full disposal after preserving needed data: the following command deletes persistent data, including the database and certificate keys. Never use it for certificate renewal or routine troubleshooting:

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

From `kilo-service-center/KC-Web/`:

```bash
bun install
```

#### Step 4: Start All Services from Source

From the `kilo-service-center` repository root:

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
