# Installation: Docker Compose

### Goal

Start a working local stack using Docker for infrastructure dependencies and source-built services for KC-Core, KC-Gateway, and KC-Web.

### Step 1: Start Infrastructure Containers

From `kilocenter-modules/`:

```bash
docker compose up -d postgres redis mosquitto
```

This starts PostgreSQL (mapped to host port 5433), Redis (6379), and Mosquitto (1883).

### Step 2: Install KC-Web Dependencies

From `kilocenter-modules/KC-Web/`:

```bash
bun install
```

### Step 3: Start All Services

From `kilocenter-modules/`:

```bash
./start-dev.sh
```

This builds and starts KC-Core, KC-Gateway, and KC-Web. Logs are written to `logs/runtime/`.

> **Note:** MQTT integration is disabled by default. The Mosquitto broker runs in Docker but KC-Core does not connect to it until you enable MQTT in `KC-Core/config.yaml`. See MQTT First Steps when you are ready to set up MQTT.

### Step 4: Validate Startup

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
