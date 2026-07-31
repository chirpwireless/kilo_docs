---
description: Install KiloCenter on a Linux host without Docker — PostgreSQL, Redis, Mosquitto, TLS certs, and the four KC services.
---

# Installation: Linux Host

### Goal

Run KiloCenter without Docker by installing all dependencies directly on the host.

### Step 1: Install Infrastructure Dependencies

Install and start these services on the host:

* **PostgreSQL 18+** -- create a database named `kilocenter`
* **Redis 7+**
* **Mosquitto 2.0+**

### Step 2: Generate TLS Certificates

Build the certificate generator and generate certificates before configuring or starting KC-Core:

```bash
cd kilocenter-modules
go build -o KC-Core/certgen KC-Core/cmd/certgen/main.go
KC-Core/certgen -dir KC-Core/certificates -days 365 -server your-hostname.example.com
```

Replace `your-hostname.example.com` with the FQDN or IP address that base stations will use to reach this server. For local-only testing, use `localhost`.

This creates four files in `KC-Core/certificates/`:

* `ca.crt` and `ca.key` -- CA certificate and private key
* `server.crt` and `server.key` -- server certificate and private key

The server certificate automatically includes `localhost`, `127.0.0.1`, and all local network IPs as SANs.

KC-Core will fail to start without these files. To renew later without regenerating the CA, use `-server-only`:

```bash
KC-Core/certgen -dir KC-Core/certificates -days 365 -server your-hostname.example.com -server-only
```

See Security for full certgen reference and client certificate generation.

### Step 3: Configure KC-Core

Update `kilocenter-modules/KC-Core/config.yaml` to match your host service addresses. Key settings:

* `storage.host` and `storage.port` -- PostgreSQL address (typically `localhost:5432` for host install)
* `storage.username` and `storage.password` -- database credentials
* BSSCI and SCACI TLS certificate paths

### Step 4: Build and Start KC-Core

From `kilocenter-modules/KC-Core/`:

```bash
go build -o kilocenter ./cmd/kilocenter/
./kilocenter -config config.yaml
```

### Step 5: Build and Start KC-Gateway

From `kilocenter-modules/KC-Gateway/`:

```bash
go build -o gateway ./cmd/gateway/
./gateway -config config.yaml
```

### Step 6: Start KC-Web

From `kilocenter-modules/KC-Web/`:

```bash
bun install
bun run dev
```

### Step 7: Validate

* KC-Core health: [http://localhost:8086/health](http://localhost:8086/health)
* KC-Gateway health: [http://localhost:8087/health](http://localhost:8087/health)
* KC-Web: [http://localhost:5173](http://localhost:5173)
