---
description: Records & Reports in Kilo IoT — the Audit Trail of membership activity and the encrypted Key Vault for device keys.
---

# Records & Reports

The Records & Reports section holds the two places your organization keeps things on the record: a log of who did what, and an encrypted store for the credentials your devices depend on.

- [Audit Trail](audit-trail.md) — A searchable log of all membership and access events: invitations sent, users joining, permission changes, and user removals. Filter by actor, event type, and date range.
- [Key Vault](key-vault.md) — An encrypted store for your devices' EUI-key pairs, so credentials outlive the installer who commissioned the hardware.

<figure><img src="../../.gitbook/assets/audit-trail.jpg" alt="The Audit Trail page with its actor filter, event type dropdown and date range control above the event list"><figcaption></figcaption></figure>

## Audit Trail

Access is controlled by the Audit Trail permission — only users with explicit access can view these records.

## Key Vault

Radio credentials are hard to recover once they leave the box. A LoRaWAN device needs its DevEUI and AppKey; a MIOTY endpoint needs its EP EUI and Network Key — and whether the secret half can be read back off a unit depends on the manufacturer, often needs a wired connection, and is never practical once the hardware is installed. Key Vault keeps those pairs encrypted at the organization level, searchable by partial EUI or key, and reachable when a replacement unit needs provisioning years after commissioning. Access is governed by its own Key Vault permission, granted separately from every other page.

Both pages are reached from the sidebar under **Records & Reports**.
