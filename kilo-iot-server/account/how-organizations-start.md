---
description: How a Kilo IoT organization gets created — automatic default for new users or via invitation.
---

# How Organizations Start

There is no "Create Organization" button in Kilo IoT Server. Organizations appear through two paths: the system creates a default organization automatically when a new user has none, or an existing organization member invites a user to join.

## Default Organization

When a user first accesses the platform and does not yet belong to any organization, the system automatically creates one and assigns the user as its owner. The organization is named based on the user's profile:

| Profile state | Organization name |
|---|---|
| First name available | **{FirstName}'s IoT** (e.g., "Maria's IoT") |
| First name empty | **User's IoT** |
| Profile unavailable | **Default IoT** |

This happens transparently — the user lands in their new organization without any extra steps. From there, they can rename the organization in [Organization Settings](organization-settings.md) and invite colleagues through [Inviting Users](inviting-users.md).

## Joining an Existing Organization

The second path into an organization is by invitation. A member of an existing organization who has permission to manage users sends an invitation to someone who already has a Kilo IoT platform account. The recipient receives an email with a link. When they click the link and the acceptance succeeds, they join the organization with the permissions the inviter assigned.

For the full invitation workflow, see [Inviting Users](inviting-users.md) and [Accepting Invitations](accepting-invitations.md).

## After Joining

What a user can do inside the organization depends on the permissions assigned at invitation time — or, for the owner of a default organization, on the automatic access that comes with ownership. Permissions can be adjusted later by anyone with user management access. See [Roles and Page Access](roles-and-page-access.md) for how the permission model works.
