# External MQTT

External MQTT connects the Kilo IoT Server to an MQTT broker you already operate. The platform connects out to the broker, subscribes to the relevant topics, and consumes messages into the same routing pipeline as Cloud MQTT data. Choose this option when the broker is already part of your infrastructure footprint — an on-premise Mosquitto cluster, AWS IoT Core, an enterprise HiveMQ deployment, or a vendor-managed broker shared across sites.

## When External MQTT is the right choice

- **An existing broker is already part of operations.** Devices already publish to it; multiple subscribers (historians, dashboards, integration platforms) already consume from it. Adding the platform as one more subscriber is operationally simpler than rerouting publishers.
- **Compliance or data-residency requirements** specify that telemetry must transit through your own broker before reaching SaaS consumers.
- **Hybrid architectures** where on-premise edge processing happens before a subset of telemetry is forwarded to the platform.

For deployments without an existing broker, [Cloud MQTT](cloud-mqtt.md) is the lower-overhead path.

## Reachability requirement

Kilo IoT Server connects out to your broker, so the broker must be reachable from the public internet via DDNS, port forwarding, or a dedicated public IP. A broker accessible only on a private VLAN is not reachable from the platform's cloud control plane.

Common production patterns:

- **Public IP / DDNS hostname** with firewall rules limiting source IPs to the platform's egress range.
- **VPN or private link** to the platform's cloud account (available in select deployment topologies — engage with platform engineering during deployment planning).
- **Reverse-proxy / TLS terminator** in your DMZ, fronting an internal broker.

For development or pilot deployments, an exposure tunnel such as ngrok works for short-lived testing — but note that running an exposure tool does not by itself confirm Kilo can reach the broker. After saving the connector, **publish a test message and confirm Last data received updates** in the connector's detail page. This is the only way to verify end-to-end reachability.

## Authentication options

The connector supports four authentication methods, selectable on creation:

| Method | When to use | Configuration fields |
|--------|-------------|---------------------|
| **Anonymous** | Development brokers only. **Do not use for production exposed brokers** — anyone on the internet who finds the broker can publish or subscribe. | None |
| **Basic** | Username + password authentication. The most common configuration for production deployments where TLS protects the credential in transit. | Username, Password |
| **Certification** | TLS mutual authentication using client certificates. Highest assurance; standard for regulated deployments. | CA Certificate file, Client Certificate file, Private Key file (uploaded as files; do not paste PEM content) |
| **JWT Token** | Token-based authentication compatible with brokers that validate JWTs (e.g. AWS IoT Core with custom authorizers, or other brokers with JWT plugins). | Token |

For Certification, the three uploaded files form the client side of an mTLS exchange; the broker must be configured to trust the CA and to validate the client certificate against it. The Private Key must be unencrypted at upload time.

## Provisioning the connector

1. Navigate to **Connectors** in the sidebar.
2. Click **Add connector**.
3. Select **External MQTT** from the **Connector type** dropdown.
4. Fill in:

   | Field | Required | Details |
   |-------|----------|---------|
   | **Name** | Yes | Operational label, e.g. `Plant 3 Mosquitto` or `North America Broker Cluster`. |
   | **Broker URL** | Yes | Full URL with scheme and port. Examples: `mqtts://broker.facility.example.com:8883`, `mqtt://10.x.y.z:1883` (only via private link), `ssl://broker.example.com:8883`. |

5. Choose the authentication method and complete its fields.
6. Click **Add**.

The connector appears in the connector table. Click into the detail page to find the **Last data received** indicator.

## Verification step

End-to-end reachability is confirmed only by an actual publish landing in the platform. After saving the connector:

1. Publish a test message to your broker on any topic the connector subscribes to.
2. Open the connector detail page in Kilo.
3. Confirm **Last data received** updates within a few seconds.

A simple one-shot test from a host that can reach the broker:

```bash
mosquitto_pub \
  -h broker.facility.example.com -p 8883 \
  --cafile /path/to/ca.crt \
  -u {username} -P {password} \
  -t "test/connectivity" \
  -m '{"hello":"world"}'
```

(Substitute scheme/port and credentials for your broker's authentication method.)

If **Last data received** does not update after a successful local publish, see [Troubleshooting](troubleshooting.md). The most common causes are firewall rules between the platform's egress and your broker, IP-allowlist mismatches, expired tunneling sessions in development setups, or wrong TLS configuration on the broker side.

## Self-hosted Mosquitto reference deployment

For deployments that need a quick reference for setting up a self-hosted Mosquitto broker for testing or pilot purposes, the minimal Docker compose looks like:

```yaml
services:
  mosquitto:
    image: eclipse-mosquitto:2
    container_name: mosquitto
    restart: unless-stopped
    ports:
      - "1883:1883"
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - ./mosquitto/data:/mosquitto/data
```

`mosquitto.conf`:

```
listener 1883
allow_anonymous false
password_file /mosquitto/config/passwd
persistence true
persistence_location /mosquitto/data/
log_dest stdout
```

Two operational notes:

- **`log_dest stdout`** is preferred over file-based logging in containerized deployments. Bind-mounted log directories often fail under SELinux/AppArmor or due to ownership mismatches; container stdout is collected by the Docker logging driver.
- **Port 1883 conflicts.** On developer or shared infrastructure, port 1883 may already be bound (e.g. a kubectl port-forward, another local broker). `ss -tlnp \| grep 1883` identifies the binding process. Remap the host-side port (e.g. `"1885:1883"`) and forward the new host port instead — the container internal port can remain 1883 for in-network publishers.

For TLS termination, a separate reverse-proxy or Mosquitto's native TLS configuration (out of scope here — see Mosquitto documentation) is required before public exposure.

## Limits

External MQTT connectors are limited to 10 per organization. For deployments needing additional broker integrations beyond this limit, engage platform engineering during deployment planning.
