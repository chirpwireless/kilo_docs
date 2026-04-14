# Users and Permissions

Within each organization, Kilo IoT Server uses attribute-based access control (ABAC) to determine who can do what. Access is assigned per product surface — dashboards, devices, rules, connectors, and more — not through a single all-or-nothing role. When you invite someone or edit their permissions, you set each surface individually to Edit, View, or No access.

This per-surface model is more flexible than coarse role-only access. A deployment engineer might get Edit access to devices and connectors but No access to billing. An operations manager might have Edit access to dashboards and alerts but View-only access to the rules engine. A stakeholder might see everything but change nothing. And because access is scoped to each organization, the same person can hold completely different permissions in different organizations.

## How Permission Labels Work

The platform uses per-surface permissions as the primary access model. There is no "select a role" step — when you invite a user, you set each surface individually to Edit, View, or No access. The dialog starts with hardcoded defaults (Edit on most surfaces, with Manage Users and Audit Trail set to No access), and you can adjust every surface before sending.

After permissions are saved, the platform computes a display label by matching the user's actual permission set against three named patterns — **Admin**, **Editor**, and **Viewer**. If the set matches the Admin pattern, the users table shows "Admin." If it matches Editor, it shows "Editor." Custom combinations that do not match any pattern display the individual surface names instead.

**Owner** is not a predefined role in the same sense. It is a property of the organization itself — exactly one member is the owner, and that status grants automatic access across the org (with audit trail limited to read). Owner access cannot be customized or removed; it changes only through ownership transfer.

| Display label | What it means | Customizable? |
|---|---|---|
| **Owner** | Org ownership status. Automatic access across the org. Audit trail is read-only. | No — implicit in ownership |
| **Admin** | Edit on all surfaces, including Subscription and Manage Users. Audit Trail is always View. API Keys is always Edit. | Yes — per surface |
| **Editor** | Edit on most surfaces. Audit Trail = View. API Keys = Edit. No access to Subscription or Manage Users. | Yes — per surface |
| **Viewer** | View on most surfaces. Audit Trail = View. API Keys = Edit (self-service exception). No access to Subscription or Manage Users. | Yes — per surface |

## In This Section

| Page | What it covers |
|---|---|
| [Inviting Users](inviting-users.md) | How to send an invitation to an existing platform user, assign per-surface permissions, and manage pending invites. |
| [Accepting Invitations](accepting-invitations.md) | What happens when someone clicks a membership or ownership transfer invitation link. |
| [Roles and Page Access](roles-and-page-access.md) | The full permission reference — every configurable surface, restricted options, defaults, and how access is evaluated. |
| [Managing Access](managing-access.md) | Updating permissions, revoking pending invitations, and removing users from the organization. |
