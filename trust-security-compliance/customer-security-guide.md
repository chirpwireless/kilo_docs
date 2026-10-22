---
description: "What Kilo secures and what your team must set up: access, credentials, API keys, alarms and offboarding steps."
---

# How Do I Secure My Kilo Deployment?

This guide is for the administrator who sets up and runs an organization in Kilo. Kilo runs and protects the hosted platform. Your organization decides who gets in, looks after its devices and network, and decides what data it collects. The checklist below covers your part, with a link to the place in Kilo where each step is done.

## Who is responsible for what?

| Area | Kilo | Your organization |
|---|---|---|
| Hosted platform | Runs the application, enforces sign-in and permissions, applies software changes and keeps the service's recovery arrangements | Chooses who is a member and what each person may do; keeps individual passwords private |
| Devices and local network | Documents how each connection type works | Changes factory passwords, updates firmware, protects device keys and the local network |
| Integrations and AI | Runs the API, integrations and the AI assistant | Decides what each API key and AI provider may read or change |
| Alarms | Operates the platform's alerting functions | Tests the full route to a real person and names who responds |
| Self-hosted software (for example KiloCenter or Kilo Hub) | Provides the product instructions | Runs the host, applies updates, protects its network and keeps its backups |

This split describes the day-to-day work. It does not change your contract or move any of Kilo's legal duties to you.

## How do I set up a new deployment securely?

1. **Give each person their own login and only the access they need.** For example, someone who only reads a building's measurements should not be able to manage users. See [Users and Permissions](../kilo-iot-server/account/users-and-permissions.md), [Roles and Page Access](../kilo-iot-server/account/roles-and-page-access.md) and [Inviting Users](../kilo-iot-server/account/inviting-users.md).
2. **Keep device keys in Key Vault, not in spreadsheets or chat.** LoRaWAN and mioty keys identify your devices on the network. Store them in [Key Vault](../kilo-iot-server/reports/key-vault.md) and limit who can view it. Change factory passwords on gateways and devices, and keep their firmware updated.
3. **Give every integration its own API key.** In **Settings → API Keys**, use a name that says what the key is for, select only the scopes it needs and set an expiry for temporary access. Keep keys out of source code and messages. See [API Keys](../kilo-iot-server/settings/api-keys.md).
4. **Decide what the AI assistant may see.** Choose the AI provider, keep passwords and unnecessary personal details out of prompts, and check an answer before acting on it. See [AI Privacy and Security](../kilo-iot-server/ai-assistant/privacy.md).
5. **Test each alarm all the way to a person.** Trigger it with a safe test value, confirm the right person receives it and knows what to do. See [Your First Alert](../kilo-iot-server/alarm/first-operational-alert.md). If a missed alarm could injure someone or stop essential operations, keep an independent safeguard as well.
6. **Collect only the data you need.** A device name, location or activity pattern can identify a person. Before monitoring employees, residents or visitors, settle the legal basis and tell the people affected. See [How Does Kilo Handle Personal Data?](privacy-and-data-protection.md)
7. **Know which activity records you have.** The [Audit Trail](../kilo-iot-server/reports/audit-trail.md) lists the recorded actions. Check that the events and retention cover your needs before you rely on them for an investigation.

## What do I do when someone leaves?

1. Remove them from the organization. See [Managing Access](../kilo-iot-server/account/managing-access.md).
2. Revoke the API keys they created or used. See [Revoking a key](../kilo-iot-server/settings/api-keys.md#revoking-a-key).
3. Change any device, gateway or integration passwords they knew.
4. Replace them as an alarm recipient and in escalation chains.
5. Check that their access really fails. If it still works, email **info [at] kiloiot.de** (replace `[at]` with `@`) right away.

Review alarm recipients after shift changes too, and review what data you collect whenever its purpose changes.

## What if I find a security problem?

If you notice unexpected access, exposed credentials, another organization's data or a control that isn't working, follow [How Do I Report a Kilo Security Vulnerability?](incident-response-and-vulnerability-reporting.md) Keep passwords, private keys and exported data out of the first email, preserve the relevant records, and don't open or change anyone else's information while you look into it.
