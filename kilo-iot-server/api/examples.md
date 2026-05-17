# Examples

These examples show how to authenticate. They deliberately do not reproduce the endpoint catalog — pick the operation you need from the interactive reference at [api.kiloiot.io](https://api.kiloiot.io/), which is the source of truth.

## Authenticated REST request

Replace the placeholders with your key and organization ID:

```bash
curl -sS https://api.kiloiot.io/api/v2/devs \
  -H "X-API-Key: $KILO_API_KEY" \
  -H "X-Organization-Id: $KILO_ORG_ID"
```

`GET /api/v2/devs` returns the devices the key is allowed to see (it requires a Devices **Read** scope). For any other operation — latest values, history, sending a command, managing a resource — find its exact path or gRPC method in the [reference portal](https://api.kiloiot.io/) and call it with the same two headers. Do not guess a path or assume an endpoint exists; the portal lists exactly what is available under REST and under gRPC.

## gRPC

gRPC uses the same `X-API-Key` and organization context. Generate a client from the service definitions published in the [reference](https://api.kiloiot.io/#description/protocols), then call the method you need. The reference lists the available gRPC services and methods; not every REST operation has a gRPC equivalent.

## Good practice

- Keep the key in an environment variable or secret store — never in shell history or source control.
- Use a dedicated key per integration with only the scopes it needs.
- See [Authentication & API keys](authentication-and-api-keys.md) for the full guidance.
