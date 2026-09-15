---
description: Set up and review customer access, device security, alerts and data handling, and understand which responsibilities remain with Kilo.
---

# Customer security guide

Before connecting equipment to Kilo IoT Server, decide who will manage the account, which
information you need and what should happen if a device or alert stops working. This guide helps
the administrator of a business deployment put those decisions into practice.

You operate your equipment, network and account membership. Kilo is responsible for operating
and protecting the hosted platform and the information it processes. Your work and Kilo's work
fit together; this guide does not change your contract or create a service guarantee.

## Before you connect equipment or invite people

1. **Choose the right organisation and people.** Give each person their own login and only the
   permissions needed for their job. For example, someone who only reads a building's measurements
   should not receive permission to change the account's users. Follow [Users and Permissions](../kilo-iot-server/account/users-and-permissions.md)
   and [Inviting Users](../kilo-iot-server/account/inviting-users.md). Keep account-recovery details
   under your organisation's control and use the sign-in provider's additional protection where available.
2. **Protect the equipment you operate.** Change factory passwords, install supported updates and
   restrict access to sensors, gateways, local computers and their network. Protect device keys
   and certificates as carefully as account passwords. Follow the instructions for your equipment
   and the connection type you use.
3. **Check what the information reveals.** A temperature reading may seem harmless, but a device
   name, location or pattern of activity can identify a person. Collect only what your task needs.
   Establish the necessary permission, legal basis and information for affected people before
   monitoring workers, residents, visitors or public areas.
4. **Check connected services.** For each integration, identify its owner and what it may read or
   change. In **Settings → API Keys**, give each integration a descriptive key name and only the
   scopes it needs; use an expiry for temporary access. Store the key securely, outside source code
   and ordinary messages. The [API Keys guide](../kilo-iot-server/settings/api-keys.md) explains the controls.
5. **Check AI use before sharing information.** Identify the selected provider and which information
   your organisation permits it to receive. Keep passwords and unnecessary personal information out
   of prompts. Review an answer before acting on it, especially when it could change equipment or
   affect a person. See [AI Privacy and Security](../kilo-iot-server/ai-assistant/privacy.md).
6. **Check an alert all the way to its recipient.** Confirm the device, units, condition, recipients
   and intended response. Use a safe input, check that the intended person receives the alert and
   make sure they know what to do. Follow [Your First Alert](../kilo-iot-server/alarm/first-operational-alert.md).
   For work where a missed alert could injure someone or stop an essential operation, establish
   the necessary independent protection before relying on the service.
7. **Agree on keeping and recovering information.** Identify the records you need, their retention
   and how you will recover or export them. Confirm the supported method with Kilo before depending
   on it. Old readings appearing in a dashboard do not demonstrate that every record can be restored.

The result should be a deployment with named administrators, appropriate access, protected
credentials, necessary data collection and a checked alert/response path. If a required protection
is unavailable or fails, stop the affected use and contact your administrator or Kilo.

## When people, equipment or business use change

When a colleague leaves, removing their membership may be only one part of removing access.
Review their invitations, permissions, integration keys, device credentials and connected-service
access. Follow [Managing Access](../kilo-iot-server/account/managing-access.md) and the relevant
credential controls. Verify that the removed access actually fails. Contact Kilo if it still works.

Keep equipment updated and recheck alert recipients after staff or shift changes. Review data
collection and retention when the purpose changes. Protect any exported information under your
organisation's own access and retention rules.

Before leaving the service, identify the authorised requester and the records you need returned,
transferred or deleted. Contact Kilo to arrange the applicable process and verify its result.
Closing a login is not confirmation that all records and backup copies have been deleted.

## What remains Kilo's responsibility

Kilo must manage the hosted service's authentication and access enforcement, software changes,
supplier relationships, security monitoring, incident response and applicable data-protection duties.
Kilo must also operate its required backup, recovery, return and deletion processes and address
verified defects. Asking you to protect your device or choose appropriate permissions does not
transfer those platform duties to you.

For customer-run software, your organisation also operates the installation, host and network.
Follow the exact product's release, update and recovery instructions. A hosted-service arrangement
and a customer-run installation have different operating responsibilities.

For a proposed video deployment, obtain Kilo's confirmation that the deployment is ready and
complete your organisation's site-specific privacy and security checks before recording real
people. Camera placement, purpose, access, notices and retention need decisions for the actual
site; this general guide does not approve a deployment.

## If you notice a security problem

Report unexpected access, exposed credentials, another organisation's information or a failed
security control promptly. Use **info [at] kiloiot.de** (replace `[at]` with `@`) and follow
[Report a security vulnerability](incident-response-and-vulnerability-reporting.md).

Describe the affected product and what happened. Keep passwords, private keys, footage and
customer-data exports out of the initial ordinary message. If further sensitive evidence is
needed, arrange an appropriate protected route with Kilo. Preserve relevant records and avoid
accessing or changing another person's information while investigating.
