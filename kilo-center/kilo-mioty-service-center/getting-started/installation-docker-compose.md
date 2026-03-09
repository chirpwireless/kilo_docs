# Installation: Docker Compose

### Goal

Start a working local stack using Docker for infrastructure dependencies and source-built services for KC-Core, KC-Gateway, and KC-Web.

### Step 1: Start Infrastructure Containers

From `kilocenter-modules/`:

```bash
docker compose up -d postgres redis mosquitto
```

This starts PostgreSQL (mapped to host port 5433), Redis (6379), and Mosquitto (1883).

### Step 2: Generate TLS Certificates

KC-Core requires TLS certificates for BSSCI and SCACI communication. Generate them before starting services.

Build the certificate generator:

```bash
go build -o KC-Core/certgen KC-Core/cmd/certgen/main.go
```

Generate CA and server certificates:

```bash
KC-Core/certgen -dir KC-Core/certificates -days 365 -server localhost
```

Replace `localhost` with your server's FQDN for production deployments (e.g., `-server bssci.example.com`).

This creates four files in `KC-Core/certificates/`:

| File         | Purpose                                                        |
| ------------ | -------------------------------------------------------------- |
| `ca.crt`     | CA certificate (distribute to base stations)                   |
| `ca.key`     | CA private key (keep secure, used to sign client certs)        |
| `server.crt` | Server certificate (used by KC-Core BSSCI/SCACI TLS listeners) |
| `server.key` | Server private key                                             |

The server certificate automatically includes `localhost`, `127.0.0.1`, and all local network IPs as Subject Alternative Names.

> **Important:** KC-Core will fail to start without these certificates. See the Security page for full certgen flag reference, renewal, and client certificate generation.

### Step 3: Install KC-Web Dependencies

From `kilocenter-modules/KC-Web/`:

```bash
bun install
```

### Step 4: Start All Services

From `kilocenter-modules/`:

```bash
./start-dev.sh
```

This builds and starts KC-Core, KC-Gateway, and KC-Web. Logs are written to `logs/runtime/`.

> **Note:** MQTT integration is disabled by default. The Mosquitto broker runs in Docker but KC-Core does not connect to it until you enable MQTT in `KC-Core/config.yaml`. See MQTT First Steps when you are ready to set up MQTT.

### Step 5: Validate Startup

Check service health:

```bash
# KC-Core
curl -s http://localhost:8086/health | head -c 100

# KC-Gateway
curl -s http://localhost:8087/health | head -c 100
```

Then open KC-Web in your browser:

* [http://localhost:5173](http://localhost:5173)

### Stop All Services

From `kilocenter-modules/`:

```bash
# Stop application services
./stop-all-services.sh

# Stop infrastructure containers
docker compose stop postgres redis mosquitto
```
