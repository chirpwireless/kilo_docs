# API Keys

API keys provide scoped, programmatic access to the Kilo IoT Server for external systems. Use them to connect CI/CD pipelines, synchronize data with warehouse management platforms, feed custom reporting scripts, or integrate with third-party operational systems. Each key carries only the permissions it needs, reducing the blast radius if a key is ever compromised.

## Accessing API Keys

Navigate to **Settings > API Keys** in the sidebar.

## Creating a Key

1. Click **Create API Key**.
2. Enter a **Name** for the key (required). Choose something descriptive — you will identify the key by this name later.
3. Optionally set an **Expires** date. If left empty, the key remains active indefinitely.
4. Select **Scopes** by checking the permissions the key should carry (for example, *Devices: Read*, *Devices: Write*). Only grant the scopes the integration actually requires.
5. Confirm creation.

After the key is created, the full key value is displayed **once** alongside a copy button. A warning reads: "Copy this key now. You will not be able to see it again." Store the key in a secure location such as a secrets manager or vault. Once you close this dialog, only the key prefix remains visible.

## Key Management Table

The API Keys page lists all keys with the following columns:

| Column | Description |
|---|---|
| **Name** | The label you assigned during creation |
| **Key Prefix** | A truncated portion of the key for identification |
| **Scopes** | Permission chips showing granted access |
| **Status** | Active, Rotated, or Revoked |
| **Created** | Timestamp of initial creation |
| **Expires** | Expiration date, or "Never" if no expiry was set |
| **Last Used** | Timestamp of the most recent API call using this key |

Keys are sorted newest first by default.

## Rotating a Key

Rotation generates a new key value while marking the previous one as **Rotated**. The old key stops working immediately.

1. Click the **Rotate** button on the key row you want to rotate.
3. Confirm the dialog: "This will generate a new key and mark the current key as rotated. The old key will stop working."
4. Copy the new key value — it is shown only once, just like during initial creation.

Use rotation on a regular schedule or whenever a key may have been exposed.

## Revoking a Key

Revocation permanently disables a key. This cannot be undone.

1. Click the **Revoke** button on the key row.
3. Confirm the dialog: "This will permanently revoke the API key. This action cannot be undone."

Revoked keys remain visible in the table for audit purposes but can no longer authenticate any request.

## Best Practices

- **Least privilege** — grant only the scopes each integration needs.
- **Set expiration dates** for keys used by contractors or temporary integrations.
- **Rotate keys periodically** — treat rotation as routine maintenance, not just incident response.
- **Name keys descriptively** (e.g., "Warehouse-Sync-Prod" or "CI-Pipeline-Staging") so the team can identify each key's purpose at a glance.
