# Configuration Basics

### Goal

Understand and verify baseline runtime configuration for a local deployment.

### Configuration Files

* `kilocenter-modules/KC-Core/config.yaml` -- KC-Core configuration (source mode)
* `kilocenter-modules/KC-Gateway/config.yaml` -- KC-Gateway configuration (source mode)
* `kilocenter-modules/config/config.docker.yaml` -- KC-Core configuration (container mode)
* `kilocenter-modules/docker-compose.yml` -- infrastructure and container service definitions

### Startup Script Defaults

`kilocenter-modules/start-dev.sh` exports environment variables and auto-detects the PostgreSQL port:

* If Docker container `kilocenter-postgres` is running, it uses port `5433`.
* Otherwise, it falls back to `5432` for a host-local PostgreSQL.

### Settings to Verify Before Testing

* **Database**: host, port, credentials (default: `localhost:5433`, user `kilocenter`, password `changeme`)
* **KC-Core health**: port `8086`
* **KC-Gateway gRPC-web**: port `9090`
* **KC-Gateway health**: port `8087`
* **BSSCI**: port `5000`, TLS certificate paths
* **MQTT**: broker host, port, and credentials

### Default Credentials

These defaults exist for local development convenience. Change them for any non-local deployment:

* PostgreSQL: user `kilocenter`, password `changeme`
* MQTT broker: user `admin`, password `KiloCenter`
* AVA base station factory login: `ubuntu` / `123456`

### MQTT Integration

MQTT is **disabled by default** in `KC-Core/config.yaml`:

```yaml
mqtt:
  enabled: false
  host: "localhost"
  port: 1883
  username: "admin"
  password: "KiloCenter"
```

To enable MQTT, set `enabled: true` and restart KC-Core. The Mosquitto broker must be running (it is included in the Docker Compose stack). See MQTT First Steps for integration details.

### Validation Checklist

* KC-Core starts without errors and `/health` responds on port `8086`
* KC-Gateway starts and `/health` responds on port `8087`
* KC-Web loads at `http://localhost:5173`
* KC-Web can reach KC-Gateway on port `9090` (gRPC-web requests succeed in browser console)
