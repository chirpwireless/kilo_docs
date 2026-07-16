---
description: Connect Claude Code or Claude Desktop to your Kilo IoT organization over MCP, using your own account sign-in.
---

# Kilo IoT MCP Server

MCP — the Model Context Protocol — is an open standard that lets an AI client discover and call tools on a remote server. The Kilo IoT Server publishes an MCP endpoint, so an MCP-capable client such as Claude Code or Claude Desktop can connect straight to your organization and work with your real deployment: your devices, connectors, rules, alarms, dashboards, and logs.

The endpoint is:

```
https://mcp-auth.kiloiot.io/mcp
```

You authorize the connection in your browser with your usual Kilo account. There is no API key to mint, no token to paste, and nothing to store on the machine running the client.

## Why it matters

Without MCP, putting an assistant to work against a live deployment means writing an integration first: a key, a client library, a script per question. That is fine for a scheduled job and heavy for an incident at 2 a.m.

With the MCP server connected, the client you already use becomes an operator's console over your deployment. An operations engineer can ask it which devices in a site have stopped reporting, pull the logs around a failure window, and export them for the post-incident review — in one conversation, against live data. An integrator building a rollout can have it provision a batch of devices against the right connector instead of clicking through the same dialog fifty times. A team lead can ask for open alarm statistics before a shift handover.

Because the connection carries your own account, the assistant is not an extra identity to govern. It can do what you can do, in the organization you are working in, and nothing else.

## Connect Claude Code

1. Add the server, giving it the name `kilo`:

   ```bash
   claude mcp add --transport http kilo https://mcp-auth.kiloiot.io/mcp
   ```

2. Start Claude Code in your project and run:

   ```
   /mcp
   ```

3. Select the `kilo` server. Claude Code opens your browser for authorization.
4. Sign in with your usual Kilo account and approve the request. The browser confirms the authorization, and you can return to the terminal.
5. Run `/mcp` again if you want to check the result. When the `kilo` server is reported as **connected**, its tools are available and you can start asking questions in plain language.

## Connect Claude Desktop

1. Open **Settings → Connectors**.
2. Click **Add custom connector**.
3. Paste the endpoint URL — `https://mcp-auth.kiloiot.io/mcp` — into the URL field.
4. Click **Connect**. Claude Desktop opens your browser for authorization.
5. Sign in with your usual Kilo account and approve the request.
6. Back in Claude Desktop, confirm the connector shows as active. Its tools are now available in any conversation.

## Choosing the organization

`https://mcp-auth.kiloiot.io/mcp` works against the organization **currently selected in the Kilo web app**. This is the right default for most people: whatever you are working on in the platform is what your client sees.

If you switch the active organization in the web app, reconnect the client so the default endpoint picks up the change.

To pin a client to one organization regardless of what is selected in the web app, connect it to the organization-scoped form of the endpoint instead:

```
https://mcp-auth.kiloiot.io/o/{organizationId}/mcp
```

Replace `{organizationId}` with the organization's ID from the web app. Pinning is worth doing when a client should always operate against a single production organization — an integrator maintaining one customer's deployment, for example, or a workstation that must never touch staging.

If you are not a member of the organization you pin to, the request is refused.

## What the assistant can do

Once connected, the client sees a set of tools it calls on your behalf. You do not call them yourself — you describe the task, and the client picks the tools it needs.

| Area | What the connected client can do |
|---|---|
| **Devices** | List devices in the organization, provision LoRaWAN devices and trackers, read device profiles, and inspect sensor mappings. `device_list`, `device_provision_lorawan`, `device_provision_tracker`, `device_profile_list`, `sensor_map` |
| **Connectors** | Review the connectors defined in the organization and create a connection for a device to report through. `connector_list`, `connection_create` |
| **Rules** | Review the automation rules that exist in the organization and what they are configured to do. `rule_list` |
| **Alarms** | List alarms, summarize alarm activity for a shift or a site, and send a test notification to verify a channel. `alarm_list`, `alarm_stats`, `notification_test` |
| **Dashboards** | List dashboards and query the data behind a widget, so the client can reason about the same numbers your operators watch. `dashboard_list`, `widget_data_query` |
| **Logs** | Query logs for an incident window and export the result for a report or a ticket. `log_query`, `log_export` |
| **Organization** | Read organization details, list teams, invite users, and assign roles. `org_get`, `team_list`, `user_invite`, `user_role_assign` |

## Security and permissions

- **You sign in, not a service account.** Authorization happens in your browser against your normal Kilo account. No key is generated, copied, or stored for the connection.
- **Your permissions are the ceiling.** The connection carries your own access. The client can only do what your account is allowed to do — if you cannot deploy a rule or invite a user, neither can it.
- **Organization boundaries hold.** A request for an organization you are not a member of is refused, whether it comes from the default endpoint or a pinned one.
- **Actions are still audited.** Work done through the connected client is your work, recorded like any other action in your organization.

Treat an authorized client like a signed-in session: it belongs on machines you control.

## How this differs from the built-in assistant

Kilo has an [IoT AI Assistant](../ai-assistant/README.md) built into the web app — open it from **AI Chat** and it works your deployment alongside you, with no setup at all. That is the fastest path for most people, and it is where confirmation gates, inline charts, and the platform knowledge base live.

The MCP server points the other way: it brings **your own client** to the same deployment. Use it when you want your deployment in the tool you already have open — a terminal beside the code of the integration you are building, or a desktop client where the deployment sits next to your other context. Both talk to the same platform, so which one you use is a question of where you are working.

## How this differs from REST and gRPC

The [Public REST API](public-rest-api.md) and the [gRPC API](grpc-api.md) are for programs you write: a sync job, a reporting pipeline, a SCADA bridge. They authenticate with a scoped [API key](../settings/api-keys.md) that runs unattended. MCP is for an AI client acting on your behalf, authorized by your own sign-in and bounded by your own permissions. If you are writing code, use REST. If you are working with an assistant, use MCP.

## Tips

- **Name the server `kilo` in Claude Code.** The command above does this, and it gives you a short handle when you want to point the client at a specific server.
- **Start read-only.** Ask for a device list or an alarm summary before you ask for a provisioning run. It is a quick way to confirm the connection landed on the organization you expected.
- **Confirm the organization before batch work.** Ask the client which organization it is connected to, or pin the endpoint, before anything that creates or changes resources.
- **Pin production, leave staging on the default.** A pinned endpoint cannot be moved by a stray click in the web app's organization switcher.
- **Reconnect after switching organizations** in the web app if you are using the default endpoint — the existing connection keeps the organization it authorized against.
- **Give it the incident window.** Log queries get far more useful when you say what you are looking for and over which period, rather than asking for everything.

## See also

- [IoT AI Assistant](../ai-assistant/README.md) — the assistant built into the platform.
- [Public REST API](public-rest-api.md) — the integration path for programs you write.
- [Authentication & API keys](authentication-and-api-keys.md) — how key-based API requests authorize.
