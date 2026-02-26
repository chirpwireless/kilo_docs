# Installation: Linux Host

### Goal

Run KiloCenter without Docker by installing all dependencies directly on the host.

### Step 1: Install Infrastructure Dependencies

Install and start these services on the host:

* **PostgreSQL 18+** -- create a database named `kilocenter`
* **Redis 7+**
* **Mosquitto 2.0+**

### Step 2: Configure KC-Core

Update `kilocenter-modules/KC-Core/config.yaml` to match your host service addresses. Key settings:

* `storage.host` and `storage.port` -- PostgreSQL address (typically `localhost:5432` for host install)
* `storage.username` and `storage.password` -- database credentials
* BSSCI and SCACI TLS certificate paths

### Step 3: Build and Start KC-Core

From `kilocenter-modules/KC-Core/`:

```bash
go build -o kilocenter ./cmd/kilocenter/
./kilocenter -config config.yaml
```

### Step 4: Build and Start KC-Gateway

From `kilocenter-modules/KC-Gateway/`:

```bash
go build -o gateway ./cmd/gateway/
./gateway -config config.yaml
```

### Step 5: Start KC-Web

From `kilocenter-modules/KC-Web/`:

```bash
bun install
bun run dev
```

### Step 6: Validate

* KC-Core health: [http://localhost:8086/health](http://localhost:8086/health)
* KC-Gateway health: [http://localhost:8087/health](http://localhost:8087/health)
* KC-Web: [http://localhost:5173](http://localhost:5173)
