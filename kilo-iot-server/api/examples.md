---
description: Authentication examples for the Kilo IoT API — curl REST and gRPC headers using X-API-Key and X-Organization-Id.
---

# Examples

These examples show how to authenticate. For the operations themselves, see the [API reference](https://api.kiloiot.io/).

## Authenticated REST request

Replace the placeholders with your key and organization ID:

```bash
curl -sS https://api.kiloiot.io/api/v2/devices \
  -H "X-API-Key: $KILO_API_KEY" \
  -H "X-Organization-Id: $KILO_ORG_ID"
```

`GET /api/v2/devices` returns the devices the key is allowed to see (it requires a Devices **Read** scope). Use the same two headers for other calls; check the API reference for the path and the scope each one needs.

## gRPC

gRPC uses the same headers. For native gRPC client definitions, use the materials provided with your on-premise or integration package.

## Good practice

- Keep the key in an environment variable or secret store — never in shell history or source control.
- Use a dedicated key per integration with only the scopes it needs.
- See [Authentication & API keys](authentication-and-api-keys.md) for the full guidance.
