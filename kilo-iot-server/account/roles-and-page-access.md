# Roles and Page Access

Kilo IoT Server uses attribute-based access control (ABAC). Access is evaluated based on three attributes: which organization you belong to, whether you are the owner, and what per-feature permissions you have. Each feature can be set to Edit, View, or No access independently. There is no role selector — you work directly with per-feature permissions.

## The Per-Feature Model

When you invite a user or edit their permissions, the dialog shows a **Page access** list. Each feature has three radio options:

- **Edit** — the user can view and make changes
- **View** — the user can see the feature but not make changes
- **No access** — the feature is hidden from the user

The following features are configurable in the current dialog:

| Feature | Edit | View | No access | Notes |
|---|---|---|---|---|
| Overview | Yes | Yes | Yes | |
| Dashboards | Yes | Yes | Yes | |
| Devices | Yes | Yes | Yes | |
| Cameras | Yes | Yes | Yes | |
| SIM Cards | Yes | Yes | Yes | |
| Notifications | Yes | Yes | Yes | |
| Rules | Yes | Yes | Yes | |
| Subscription | Yes | Yes | Yes | |
| Manage users | Yes | Yes | Yes | |
| Connectors | Yes | Yes | Yes | |
| Audit Trail | No | Yes | Yes | Read-only — no Edit option exists |
| API Keys | Yes | No | Yes | Write-only — no View option exists |

Two features have restricted options:

- **Audit Trail** offers only View or No access. There is no Edit option because the audit trail is read-only for everyone, including the owner. Even if write access is requested through other means, it is automatically downgraded to read.
- **API Keys** offers only Edit or No access. There is no View option — API key management is self-service for all organization members who have access.

## Default Permission Templates

For new invitations, the dialog pre-fills defaults: Edit on most features, with **Manage users** and **Audit Trail** set to No access. You can adjust any feature individually before sending the invite.

The platform defines three named default templates that provide different starting points:

| Template | Default access |
|---|---|
| **Admin** | Edit on all features, including Subscription and Manage users |
| **Editor** | Edit on most features; No access to Subscription and Manage users |
| **Viewer** | View on most features; same exclusions as Editor |

These templates pre-fill the dialog as a convenience — they are not fixed roles. Every permission can be adjusted individually before sending the invite, and permissions can be changed at any time after the user joins.

## Display Labels in the Users Table

The users table shows **Edit access** and **View access** columns. These are computed display labels, not stored roles. The platform matches each user's actual permissions against the three default templates:

- If the permission set matches the Admin template → the column displays **Admin**
- If it matches the Editor template → **Editor**
- If it matches the Viewer template → **Viewer**
- If the set does not match any template → the column displays the individual feature names instead
- The owner always displays **Owner**

These labels help you see at a glance what kind of access each member has, but the underlying model is always per-feature.

## Owner Access

Owner is not a default template or a permission pattern. It is a property of the organization itself — exactly one member is the owner, and that status is stored as part of the organization record.

The owner gets automatic access to all features, with one exception: the audit trail is always read-only, even for the owner. This is enforced at two levels — owner permissions are generated with audit trail set to read, and a separate enforcement layer hard-denies audit trail write for every user.

Owner access cannot be edited or removed. It changes only through ownership transfer in [Organization Settings](organization-settings.md).

## When You Lack Access

When you do not have Edit access to a feature, the platform disables the relevant controls — buttons and inputs appear greyed out. Hovering over a disabled control shows a tooltip explaining why and who to contact:

- If no other administrators exist in the organization: *"You don't have the required permissions. Please contact your organization owner."*
- If administrators exist: *"Contact your administrators: Maria Schmidt (maria@example.com), ..."*

The administrators listed in the tooltip are automatically derived from the organization owner and all members who have **Manage users** set to Edit. These are the same contacts shown in [Organization Settings](organization-settings.md) — they are not manually configured.

## Access Evaluation

Access is checked per-feature: does this user have read or write permission for this feature in this organization? If no matching permission exists, access is denied. The owner is the only exception — the owner has automatic access to every feature, with audit trail limited to read.

The underlying permission model includes additional features not shown in the current dialog. These are enforced server-side but cannot be configured through the Users interface.
