# Authentication & API Keys

Every API request — REST or gRPC — is authenticated with a **scoped API key**. This page covers the concepts; the step-by-step interface for creating, scoping, rotating, and revoking keys lives in [Settings → API Keys](../settings/api-keys.md) and is not duplicated here.

## How requests authenticate

- **`X-API-Key`** — your API key. Send it on every request.
- **`X-Organization-Id`** — the organization the request acts in. It must match the organization the key was created in. Some operations also accept the organization as an `organizationId` query parameter; the [reference](https://api.kiloiot.io/) shows which.

All requests are over TLS.

## Scopes

Keys are scoped. Each scope has a **Read** variant and a **Write** variant, and a key only grants what you select when you create it. Grant the minimum a given integration needs. The full scope list and exactly what each one grants is documented with the key-creation workflow in [API Keys](../settings/api-keys.md).

## Handling keys safely

- The full key value is shown **once** at creation; only a short prefix is visible afterward. Store it immediately in a secrets manager or vault.
- Use a **separate key per integration** so one can be revoked without disrupting the others.
- **Rotate or revoke** a key immediately if it may be exposed; rotation is the only recovery path for a lost key.
- Never embed a key in client-side code or commit it to source control.

## Where keys are managed

Create, scope, rotate, and revoke keys in [Settings → API Keys](../settings/api-keys.md). That page is the credential-management guide; this API section is about using the API with those credentials.
