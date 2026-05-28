---
description: Update permissions, revoke pending invitations, or remove members from a Kilo IoT Server organization — all from the Users table.
---

# Managing Access

After users join your organization, their access may need adjusting — permissions updated as responsibilities change, pending invitations revoked, or members removed when they leave the team. All of these actions require **Manage users** permission with Edit access.

## Where to Find It

Open the user menu and click **Users**. The organization page opens at `/superIot/organizations/users`, showing a table of all members and pending invitations.

## The Users Table

The table has four columns:

| Column | What it shows |
|---|---|
| **Name** | The member's full name (or email if no name is set). The organization owner has an **Owner** badge. Pending invitations show the invited email with an **"Awaiting invitation confirmation"** tooltip. |
| **Edit access** | A computed display label based on the user's edit permissions. If the permission set matches a predefined default template, shows Admin, Editor, or Viewer. Otherwise shows the individual feature names. The owner always shows Owner. |
| **View access** | A computed display label based on the user's view permissions, following the same logic. |
| **Actions** | **Edit** and **Remove** buttons for regular members. **Remove** only for pending invitations. No actions for the owner row. |

Use the **Search users...** input at the top to filter by name or email.

The table sorts the owner first, then other members, then pending invitations.

## Updating Permissions

1. Find the user in the table and click **Edit**. The edit dialog opens, showing the user's current **Page access** settings.
2. For each product surface, adjust the access level: **Edit**, **View**, or **No access**.
3. Click **Save changes**.

Permission updates are a full replacement — the system removes all existing access policies for the user and creates new ones based on what you selected. The [Audit Trail](../reports/audit-trail.md) records a **"Permissions changed"** event with the before-and-after difference, so you can always review what changed and when.

## Revoking a Pending Invitation

If an invitation has not been accepted yet, you can revoke it to invalidate the link.

1. Find the pending invitation row in the table.
2. Click **Remove**.
3. A confirmation dialog asks: *"Are you sure you want to delete the invitation for {email}?"*
4. Confirm the removal. The invitation link is invalidated and the row disappears from the table.

No audit event is recorded for invitation revocations.

## Removing a User

Removing a user ends their membership in the organization immediately.

1. Find the user in the table and click **Remove**.
2. A confirmation dialog asks: *"Are you sure you want to remove {userName} from {organizationName}?"*
3. Confirm the removal.

When a user is removed:

- All their access policies for this organization are deleted.
- Their organization membership is deleted.
- Their stored organization-selection record is removed.
- A **"User removed"** event is recorded in the [Audit Trail](../reports/audit-trail.md).
- Their Kilo IoT platform account is **not** affected — they can still log in and access other organizations they belong to.

## What You Cannot Do

- **You cannot remove the organization owner.** The owner row has no Remove button. To change the owner, the current owner must initiate an ownership transfer in [Organization Settings](organization-settings.md).
- **You cannot edit the owner's permissions.** The owner row has no Edit button. Owner access is automatic and cannot be customized.
