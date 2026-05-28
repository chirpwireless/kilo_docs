---
description: Tour every section of the Kilo IoT Server — sidebar, overview, themes, and language — to know exactly where each feature lives.
---

# Navigating the Interface

This page walks through every section of the Kilo IoT dashboard so you know exactly where to find each feature.

## The sidebar

The left sidebar is your primary navigation. It contains all major sections of the server, organized from top to bottom.

<figure><img src="../../.gitbook/assets/leftmenu.png" alt="The Kilo IoT Server sidebar and overview page"><figcaption></figcaption></figure>

The sidebar can be collapsed to show only icons — hover over the logo area at the top and click the double-chevron that appears. Click it again to expand. In collapsed mode, the navigation takes minimal screen space while remaining accessible. This is particularly useful when viewing dashboards on operations center displays, wall-mounted monitors, or any screen where the data should take priority over navigation.

### Main sections

- **Overview** — Your landing page after login. Summary cards showing device and gateway counts with status indicators, and recent alarms.
- **Dashboards** — Custom dashboards organized in a folder hierarchy. Create operational views combining widgets from any device and parameter. Dashboards can be grouped by site, building, floor, or any structure that fits your deployment.
- **Connectors** — Establish protocol-level connections between your infrastructure and the server. Connector types: **LNS** (LoRaWAN), **Tracker** (vehicle trackers — OBD2, CAN bus, standalone GPS), and **MQTT** (direct MQTT device connections using your own broker or the built-in cloud broker). Opening an LNS connector shows **LoRaWAN Gateways** and **Connected Devices** tabs. Each connector shows its name, last data received, and connected device count. Devices are registered through the device management dialog.
- **Devices** — View all registered devices across all connectors. Browse and search. Click any device to view or edit its details.
- **Gateways** — All LoRaWAN gateways connected to your account (Basics Station protocol required for secure TLS connectivity). Check online/offline status, view availability and traffic statistics, register new gateways, and manage firmware updates.
- **Alarm** — The alarm management center, with three tabs:
  - **Inbox** — View and manage triggered alarms. Each alarm shows severity (Critical, High, Medium, Low, or Info), status (active or resolved), the triggering device and rule, and timestamps. Filter by severity and status, search through history, and resolve incidents.
  - **Alarm definitions** — Create and manage alarm rule definitions. Each rule includes a name, notification message, severity level, and escalation steps — configurable chains of recipients and channels with time-based delays between steps. Rules also support suppression windows to prevent duplicate notifications.
  - **Settings** — Configure notification severity behavior and delivery preferences.
  - The header also provides a **Notification Severity** button for configuring severity-level policies and an **Add alarm rule** button for quick rule creation.
- **Rules engine** — Build automation rules using a visual drag-and-drop canvas. Define conditions with CEL expressions, configure actions, and manage rule versions.
- **Reports** — Operational reporting and compliance tools.
  - **Audit Trail** — A searchable log of membership and access events in your organization: user invitations, acceptances, permission changes, and removals. Filter by actor, event type, and date range.

### Settings

Click **Settings** in the sidebar to expand the settings submenu:

- **Profile settings** — Edit your display name, email, and profile photo. Change your password or delete your account.
- **Locations** — Create a hierarchy of locations and sublocations (e.g., sites, buildings, floors, zones) to organize devices spatially.
- **Device sharing** — View which devices you've shared with other users and manage sharing permissions.
- **API Keys** — Create, manage, and rotate API keys for integrating external systems with the server. Each key has scoped permissions (e.g., devices read, devices write), an optional expiration date, and a visible status (active, rotated, revoked).
- **New device request** — Submit a request if you need help onboarding a specific device type.
- **Changelog** — Opens an external page with recent platform updates and release notes.

### Bottom of the sidebar

- **Get Help** — Opens a support request form where you can describe your issue, enter your email, and submit a ticket directly to the support team.
- **Docs** — Links to this documentation site.

### Collapsing the sidebar

The sidebar can be collapsed to a narrow icon strip to free up screen space. Hover over the collapsed sidebar to temporarily expand it, or click the collapse control to toggle between expanded and collapsed states.

## The user menu

Click your **avatar or name** at the bottom-left of the sidebar to open the user menu. This dropdown provides access to several areas that are not in the sidebar:

- **Language selector** — Switch between English, German, French, and Spanish. The change is immediate and persists across sessions.
- **Theme toggle** — Switch between light and dark mode. Dark mode is well-suited for control rooms and low-light environments.
- **Subscription** — View your current plan, device and rule usage against plan limits, and billing details. Upgrade or manage your subscription through Stripe.
- **Users** — Manage organization members, invitations, permissions, and access control.
- **Organization settings** — Configure the current organization's name, transfer ownership, and manage admin contacts.
- **Logout** — End your session.

### Organization switching

If you belong to multiple organizations, the user menu shows all organizations you're a member of. Select a different organization to switch your entire working context — devices, rules, dashboards, users, and billing all change to reflect the selected organization. Each organization is fully isolated.

## The notification bell

On desktop, a **notification bell icon** appears near your user avatar. It displays a badge with the count of unread alarms. Clicking it toggles an alarm sidebar that shows recent alarms without leaving your current page.

## The Overview page

The Overview page — labeled **"My board"** in the interface — is your landing page after login.

### Summary cards

A horizontal row of cards across the top shows:

- **Devices** — Total device count, with a warning if any device has not reported within its expected Data sending interval (or has never reported at all). Clicking the card navigates to the Devices page.
- **Gateways** — Total gateway count with online/offline indicators. Clicking the card navigates to the Gateways page.

### Recent alarms

The right panel shows recent unread alarms. Each entry shows the alarm message, associated device, and timestamp. You can mark all as read, or click an alarm for full details. New alarms appear in real time.

### Live data indicator

A **Live Data** indicator in the header confirms the Overview is receiving real-time updates. A manual refresh button is also available.

## Managing devices

Devices are added and configured through the **Connectors** section. Adding a new device opens a registration dialog where you enter a name and click Save.

Clicking on an existing device — from **Devices** or a connector's Connected Devices tab — opens the device detail page, where you can view and edit all device properties across four tabs:

- **Device Info** — Device name, photos, and basic identification.
- **Connection** — Connector selection, Device EUI or Unique ID, device profile template (brand, model, band, device class), or manual credentials (Device EUI, AppKey).
- **Metrics** — Sensor templates attached to the device, defining what parameters it reports and how they're measured.
- **Logs** — Device activity and event history.

## Gateway detail pages

Clicking a gateway in the Gateways list opens its detail page with two tabs:

- **Overview** — Gateway status, availability percentage, ping statistics, traffic metrics, associated devices, location on map, and firmware update notifications.
- **Settings** — Edit gateway name, location, and configuration. Manage antenna settings and registration details.
