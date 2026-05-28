---
description: Kilo IoT Server FAQ — answers about accounts, gateways, devices, dashboards, alarms, billing, and how to reach support from inside the platform.
---

# Help and FAQ

Common questions about running the Kilo IoT Server. If something here doesn't cover your situation, open the in-product support dialog from any page of the Server — see [Get Help](../kilo-iot-server/help/get-help.md).

## Accounts and login

<details>

<summary>I'm not receiving the account verification email. What should I do?</summary>

The verification email is sent when you sign up or change your address. If it doesn't arrive within a few minutes:

1. Check your spam or quarantine folder.
2. Confirm the address you entered is correct — even a single-character typo prevents delivery.
3. Request the email again from the sign-in screen.

If the email still doesn't arrive after a second attempt, open the support dialog from the Server and include the address you used to sign up.

</details>

<details>

<summary>I forgot my password. How do I reset it?</summary>

Use the **Forgot password** link on the sign-in screen. You'll receive a one-time reset link by email. The link expires after a short window for security, so request a new one if it's no longer active.

</details>

<details>

<summary>How do I delete my account?</summary>

Go to **Settings → Profile settings** and click **Delete my account** at the bottom of the page. A confirmation dialog asks you to confirm; selecting **Yes, delete profile** submits the deletion request. The request is handled by the support team and is not immediate — you'll receive a confirmation that it has been submitted.

If you're the sole member of an organization, transfer ownership of its resources before submitting the request. See [Profile Settings](../kilo-iot-server/settings/profile-settings.md) and [Account](../kilo-iot-server/account/README.md).

</details>

## Gateways

<details>

<summary>Which LoRaWAN gateway protocol does the Server support?</summary>

The Server connects to gateways using the **Basics Station** protocol. Basics Station communicates over an encrypted TLS/WSS channel, which is more secure than the legacy UDP Packet Forwarder. When you register a gateway, the Server provides the TLS certificates you load into the gateway to complete the connection.

For supported hardware and configuration notes, see [Supported LoRaWAN Gateways](../kilo-iot-server/gateways/lorawan-gateways/supported-lorawan-gateways.md).

</details>

<details>

<summary>How do I register a new gateway?</summary>

1. Open **Gateways** in the Server sidebar.
2. Select **Add gateway**, choose the LoRaWAN frequency region that matches your hardware, and enter the gateway EUI.
3. Download the certificate bundle and load it into the gateway's Basics Station configuration.
4. Power-cycle the gateway and watch the **Status** column in the Gateways list change to **Connected** once the gateway opens the TLS session.

For the full walkthrough, see [Deploying a LoRaWAN Gateway](../kilo-iot-server/gateways/lorawan-gateways/deploying-a-lorawan-gateway.md).

</details>

<details>

<summary>My gateway is offline. Where do I start?</summary>

Check, in order:

1. **Power and network** at the physical site — does the gateway have power, and can it reach the internet?
2. **Basics Station configuration** — the LNS URL and certificate bundle must match what the Server issued. Re-download the bundle if the gateway was re-imaged.
3. **Time sync** — gateways with the wrong system clock fail the TLS handshake. Ensure NTP is reachable.
4. **Gateway status in the Server** — see [LoRaWAN Gateway Monitoring](../kilo-iot-server/gateways/lorawan-gateways/lorawan-gateway-monitoring.md) for the diagnostic indicators and last-seen timestamps.

</details>

## Devices

<details>

<summary>What is a Digital Twin?</summary>

Every device you register on the Server gets a Digital Twin — a persistent digital representation of the physical device. The Digital Twin holds the device's current state, configuration, telemetry history, and attributes. It exists even when the device is offline, so dashboards, rules, and queries continue to work against the last known state.

</details>

<details>

<summary>How do I register my first device?</summary>

Pick the connector that matches how the device talks to the Server, then register the device through that connector:

- **LoRaWAN devices** are added via the LNS Connector. You'll enter the DevEUI, AppKey, and frequency region from the manufacturer's documentation. See [LNS Connector](../kilo-iot-server/connectors/lns-connector/README.md).
- **MQTT devices** are added via the MQTT Connector, either Cloud MQTT or an external broker. See [MQTT Connector](../kilo-iot-server/connectors/mqtt-connector.md).
- **GPS trackers** use the Tracker Connector. See [Tracker Connector](../kilo-iot-server/connectors/tracker-connector.md).

After the connector is configured, see [Registering Devices](../kilo-iot-server/devices/registering-devices.md) for the per-device steps.

</details>

<details>

<summary>A device shows as offline but I think it's transmitting. What now?</summary>

Walk through these checks:

1. Open the device's detail page and look at the **last seen** timestamp. If the timestamp is recent, the device is reaching the Server even if the status indicator is amber.
2. Check the connector logs for the device's identifier. Connector-side errors (wrong key, frequency mismatch, unknown topic) usually appear here first.
3. For LoRaWAN, confirm at least one gateway near the device is **Connected** and receiving uplinks.
4. For MQTT, confirm the broker connection is healthy and the device's topic matches the routing rules you configured.

For the device-side troubleshooting workflow, see [Device Management](../kilo-iot-server/devices/device-management.md).

</details>

## Dashboards and widgets

<details>

<summary>Where do I find the available widgets?</summary>

Open any dashboard in edit mode and select **Add widget**. The catalog includes last-data displays (number, gauge, doughnut, pie, tube), charts, image overlays, maps, and the Digital Building Twin. Each widget binds to one or more device metrics — see [Adding Widgets](../kilo-iot-server/dashboards/adding-widgets.md).

</details>

<details>

<summary>How do I share a dashboard with my team?</summary>

Dashboards live inside an organization. Anyone who's a member of the organization with the right page-level permission sees the dashboard automatically — no per-dashboard sharing step is required. To control who can view or edit, set page-level permissions in **Account → Users and Permissions**. See [Users and Permissions](../kilo-iot-server/account/users-and-permissions.md).

For folder structure and how to keep many dashboards tidy across sites, see [Organizing Dashboards](../kilo-iot-server/dashboards/organizing-dashboards.md).

</details>

## Alarms and notifications

<details>

<summary>How do notification channels work?</summary>

A delivery channel is the destination an alarm uses to reach you — email, SMS, or push to a registered mobile device. You configure channels per recipient, and a single alarm can fire across several channels at once. Severity levels (Critical, High, Medium, Low, Info) control default repeat behavior and routing.

For setup and per-severity policies, see [Delivery Channels](../kilo-iot-server/alarm/notification-channels.md).

</details>

<details>

<summary>I created an alarm rule but it didn't fire. What's wrong?</summary>

The most common causes:

1. **Condition was never met** — open the alarm definition and check the live evaluation. Condition values that hover near the threshold but never cross it produce no events.
2. **Remain-true-for window** — the rule may require the condition to hold for several minutes before firing. Transient spikes won't trigger it.
3. **Quiet hours or weekly schedule** — the rule may be inside a suppressed window. Check the schedule on the alarm definition.
4. **Channel not configured** — the rule fired but had nowhere to deliver. Confirm the recipient has at least one active channel.

See [Alarm Definitions](../kilo-iot-server/alarm/notification-rules.md) and [Escalation and Response](../kilo-iot-server/alarm/escalation-and-response.md).

</details>

## Billing and subscription

<details>

<summary>How do I change my subscription plan?</summary>

Open **Settings → Subscription**. The page shows your current plan, included limits, and an option to change plan. Billing is handled through Stripe; you can update your payment method and download invoices from the same page.

See [Subscription](../kilo-iot-server/settings/subscription.md).

</details>

<details>

<summary>Where do I see how much of my plan I've used?</summary>

The Subscription page surfaces current usage against each plan limit (devices, gateways, dashboards, message volume). If you're close to a limit, the page also flags it so you can upgrade before any limit enforcement kicks in.

</details>

## Getting more help

<details>

<summary>Something's wrong and the FAQ didn't cover it. How do I reach support?</summary>

Use the **support request dialog** built into the Server. It's reachable from the help control on every page and sends your message — along with the account and organization context — directly to the support team. See [Get Help](../kilo-iot-server/help/get-help.md) for the dialog fields and what to include in a useful report.

</details>
