---
description: Manage alarm delivery channels in Kilo IoT — verified Email contacts, SMS with credit balance, Push notifications.
---

# Delivery Channels

Alarm definitions fire notifications, but those notifications need verified delivery endpoints and active channels. The **Settings** tab on the Alarm page is where you manage the contacts, enable or disable channels, and control which delivery paths receive your operational alerts.

## Email

Email is the baseline delivery channel.

### Enabling and disabling

An **On/Off** toggle at the top of the Email section controls whether email notifications are delivered across all alarm definitions. Turning it **Off** disables ALL email-based alarm delivery — a confirmation dialog appears before this takes effect. Turning it back **On** resumes delivery for every alarm that uses email in its escalation chain. The toggle may be unavailable if no contacts are configured or if the channel is not available in the current account context.

### Adding contacts

Click the add button to enter a new email address. A verification email is sent immediately. The contact appears in your list with an unverified indicator until the recipient completes verification.

### Verification

Every email address must be verified before it receives alarm notifications. Unverified contacts display a warning indicator. Verification can be resent if the original email was not received.

### Removing contacts

Click the remove button next to a contact. A confirmation dialog appears before removal. The primary email contact (the first entry in the list) cannot be removed.

Contacts cannot be edited after creation. To update an email address, remove the existing contact and add the new one.

## SMS

SMS is present in the Alarm settings and selectable as a delivery channel in [escalation chain steps](escalation-and-response.md). The SMS section follows the same pattern as Email: add contacts, verify them, enable or disable the channel with the On/Off toggle, and remove contacts you no longer need.

Turning SMS **Off** stops all alarm notifications via SMS across every alarm definition. The same confirmation dialog applies.

For operations teams, SMS provides a high-reliability delivery path that reaches recipients even when email is inaccessible — field technicians, on-call engineers, or facility managers responding from mobile devices.

## Push notifications

Push notifications are available when enabled for the account. When available, a push notification section appears at the top of the Settings tab with device-specific setup instructions.

Push provides device-level mobile alerts, making it suitable for time-sensitive escalation tiers. Delivery runs through the [IoT Alerts App](iot-alerts-app/README.md), where Critical alarms can break through silent mode on a responder's phone — install it and turn this toggle On to start receiving alarms on a device.

## Connecting channels to escalation

The contacts configured here populate the **Choose recipients** dropdown in [escalation chain steps](escalation-and-response.md). Each step in the escalation chain can select different recipients and different channels:

- **Tier 1 (Immediate):** On-call engineer via email and push.
- **Tier 2 (After delay):** Shift supervisor via email and SMS.
- **Tier 3 (After further delay):** Site operations manager via SMS.

If you turn a channel **Off** in Settings, that channel is disabled for delivery across every alarm definition and every escalation step that references it. This is useful for planned maintenance windows or when a channel is temporarily unreliable — disable it globally, then re-enable once the maintenance is complete.
