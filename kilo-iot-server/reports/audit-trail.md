---
description: Audit Trail in Kilo IoT Server — searchable log of organization membership events including invites sent, accepted, permissions changed, removed.
---

# Audit Trail

The Audit Trail is a searchable log of organization membership events — who invited whom, who accepted, whose permissions changed, and who was removed. It provides an immutable record of access-related activity for compliance reviews and operational accountability.

The audit trail currently covers membership events. Device operations, rule changes, dashboard edits, and other platform activity are not logged here.

## Where to Find It

Open the sidebar and navigate to **Reports** > **Audit Trail**. The audit trail page opens at `/reports/audit-trail`, scoped to your current organization.

## What Is Logged

The audit trail records four types of membership events:

| Event | What it captures |
|---|---|
| **Invite sent** | Who sent the invitation, to which email, and with what permissions. |
| **Invite accepted** | Who accepted the invitation and which organization they joined. |
| **Permissions changed** | Who changed permissions, for which user, and the before-and-after difference showing exactly what changed. |
| **User removed** | Who removed the user and from which organization. |

Each event includes the **actor** (the person who performed the action), an optional **target** (the person affected), a timestamp, and a human-readable message summarizing what happened.

## The Audit Trail Table

Events are displayed in a table with three columns:

| Column | What it shows |
|---|---|
| **Time** | The time the event occurred (HH:mm:ss format). |
| **Actor** | The email address of the user who performed the action. |
| **Event** | A human-readable summary of what happened — for example, *"Changed access rights for Jens Müller."* |

Events are grouped by date. The table shows 50 events per page, with pagination controls at the bottom.

## Filtering Events

Three filters are available above the table. All filters can be combined — they apply together using AND logic.

### Actor Email

Filter by who performed the action. Start typing an email address and choose from the autocomplete suggestions (which are drawn from the organization's current members). The filter supports both exact matches (select from the dropdown) and prefix matches (type a partial address).

### Event Types

A multi-select dropdown with checkboxes. Choose one or more event types to narrow the log:

- Invite sent
- Invite accepted
- Permissions changed
- User removed

When no types are selected, all events are shown. The placeholder reads *"All event types."*

### Date Range

A calendar picker that lets you select a start and end date. Quick-select shortcuts are available for common ranges. Click the date range button to open the picker, and use **Clear** to remove the filter.

## Access Permissions

The audit trail is read-only for every user, including the organization owner. All users with Audit Trail set to View can see the log. No one has write access — the log is append-only and cannot be edited, deleted, or modified through any access path.

For details on how audit trail permissions work within the broader access model, see [Roles and Page Access](../account/roles-and-page-access.md).
