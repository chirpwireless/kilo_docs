# Accepting Invitations

When someone invites you to join their organization — or transfers ownership to you — you receive an email with a one-click link. There are two types of invitations, each with its own acceptance flow and expiration window.

## Membership Invitations

A membership invitation adds you to an organization as a new member with the permissions the inviter assigned.

1. You receive an email containing a link with a `?acceptInvitation=` parameter.
2. Click the link. You must be logged in to your Kilo IoT account for the acceptance to succeed.
3. On success, the token parameter is removed from the URL and you are now a member of the organization. The permissions assigned by the inviter take effect immediately.

Membership invitations are valid for **7 days**. After that, the link expires and the inviter would need to send a new invitation.

{% hint style="info" %}
If the acceptance fails — for example because the token has expired, was already used, or was revoked — an error is shown and the token parameter remains in the URL. Ask the person who invited you to send a new invitation.
{% endhint %}

## Ownership Transfer Invitations

An ownership transfer invitation makes you the new owner of an organization. Only the current owner can initiate this, and you must already be a member of the organization before the transfer can happen.

1. You receive an email containing a link with a `?acceptOwnerInvitation=` parameter.
2. Click the link. You must be logged in to your Kilo IoT account.
3. On success, the token parameter is removed from the URL. You are now the organization owner.

After a successful ownership transfer:

- **You** (the new owner) get automatic access across the entire organization. The audit trail remains read-only.
- **The previous owner** retains write access on all product surfaces except the audit trail, which becomes read-only for them. They remain a member of the organization — they are not removed.

Ownership transfer invitations are valid for **24 hours**. This shorter window reflects the sensitivity of an ownership change.

## What Happens on Acceptance

For both invitation types, the system creates access policies based on the permissions granted. One rule always applies: even if the invitation assigned write access to the audit trail, it is automatically downgraded to read. The audit trail is read-only for everyone, including the owner.

An **"Invite accepted"** event is recorded in the [Audit Trail](../reports/audit-trail.md), capturing who accepted and when.
