# API Keys

Generate API keys to access the Kilo Public API programmatically without sharing your login credentials. API keys let you integrate external applications and scripts with your Kilo organization securely.

### Overview

API keys allow you to:

* **Authenticate external applications** and scripts against the Kilo Public API
* **Scope permissions** to specific resources (e.g., devices) so each key has only the access it needs
* **Set optional expiration dates** to automatically disable keys after a certain period
* **Manage access per organization** — each key is bound to the organization where it was created

### Creating an API Key

1. Navigate to **Settings > API Keys** in the sidebar.
2. Click **Create**.
3. Fill in the required fields:
   * **Name** (required) — A descriptive label for the key (e.g., "Warehouse Sync Script").
   * **Scopes** (required) — Select at least one scope checkbox to define what the key can access.
   * **Expiration date** (optional) — Choose a date after which the key will automatically stop working.
4. Click **Create**.
5. Copy the key from the confirmation dialog.

{% hint style="warning" %}
The full API key is shown **only once**. Copy it immediately and store it in a secure location. You will not be able to view it again.
{% endhint %}

\[Screenshot: Create API Key dialog showing name field, scope checkboxes, and expiration date picker]

### Available Scopes

| Scope              | Description                  |
| ------------------ | ---------------------------- |
| **Devices: Read**  | List and view device details |
| **Devices: Write** | Update and delete devices    |

### Using Your API Key

Authenticate requests to the Kilo Public API by including your key in the `X-API-Key` header.

**Base URL:** `https://api.chirpwireless.io`

**Required headers and parameters:**

* **Header:** `X-API-Key: <your-key>`
* **Query parameter:** `organizationId` (must match the organization the key belongs to)

**Example request:**

```bash
curl -X GET "https://api.chirpwireless.io/api/v1/devices?organizationId=<org-id>" \
  -H "X-API-Key: <your-key>"
```

#### Available Endpoints

| Method | Endpoint               | Scope Required |
| ------ | ---------------------- | -------------- |
| GET    | `/api/v1/devices`      | Devices: Read  |
| GET    | `/api/v1/devices/{id}` | Devices: Read  |
| PATCH  | `/api/v1/devices/{id}` | Devices: Write |
| DELETE | `/api/v1/devices/{id}` | Devices: Write |

{% hint style="info" %}
Requests that require a scope your key does not have will return **403 Forbidden**.
{% endhint %}

### Managing API Keys

Navigate to **Settings > API Keys** to view your API keys. You can only see keys you created — other members' keys are not visible. The key list shows:

* **Key prefix** — The first 8 characters of the key for identification
* **Status** — Whether the key is active, rotated, or revoked
* **Scopes** — The permissions granted to the key
* **Created** — When the key was created
* **Expires** — When the key will expire (if an expiration was set)
* **Last used** — When the key was last used to make an API request

#### Key Statuses

| Status      | Meaning                                                 |
| ----------- | ------------------------------------------------------- |
| **Active**  | Key is valid and can be used                            |
| **Rotated** | Key was replaced by a new one and can no longer be used |
| **Revoked** | Key was permanently disabled                            |

### Rotating a Key

Rotating a key generates a new secret while preserving the key name and scopes. The old key stops working immediately.

1. Navigate to **Settings > API Keys**.
2. Find the key you want to rotate and click the **Rotate** action.
3. Confirm the rotation.
4. Copy the new key from the confirmation dialog.

{% hint style="warning" %}
The new key is shown **only once**. Copy it immediately. The previous key is invalidated as soon as you confirm the rotation.
{% endhint %}

### Revoking a Key

Revoking permanently disables a key. Use this when a key is no longer needed or may have been compromised.

1. Navigate to **Settings > API Keys**.
2. Find the key you want to revoke and click the **Revoke** action.
3. Confirm the revocation.

{% hint style="warning" %}
Revoking a key **cannot be undone**. Any application using this key will immediately lose access.
{% endhint %}

### Limits & Best Practices

* **Default limit:** 5 keys per organization (may vary by subscription plan).
* Grant only the scopes your integration actually needs.
* Set expiration dates for temporary or short-lived integrations.
* Rotate keys periodically to reduce the impact of a potential leak.
* Never share API keys or commit them to source control.

### Permissions

* Organization members need the **API Keys: Edit** permission to create, rotate, and revoke keys.
* Only the member who created a key can rotate or revoke it.
* There is no view-only access to API keys — the permission grants full management.
* Admins can grant this permission in **Settings > Organization > Members**.

### Troubleshooting

| Problem                          | Possible Cause                                                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Key returns **401 Unauthorized** | The key may be expired, rotated, or revoked. Verify its status in **Settings > API Keys**.                      |
| Key returns **403 Forbidden**    | The key does not have the required scope for the endpoint you are calling. Check the Available Endpoints table. |
| Cannot create a new key          | Your organization has reached the key limit, or your account is missing the **API Keys: Edit** permission.      |
