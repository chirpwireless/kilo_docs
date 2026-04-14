# Delivery Channels

Alarm definitions fire notifications, but those notifications need verified delivery endpoints. The **Settings** tab on the Alarm page is where you manage the contacts and channels that receive your operational alerts.

## Email

Email is the baseline delivery channel — it is available for every account.

### Adding contacts

Click the add button to enter a new email address. A verification email is sent immediately. The contact appears in your list with an unverified indicator until the recipient completes verification.

### Verification

Every email address must be verified before it receives alarm notifications. Unverified contacts display a warning indicator. Verification can be resent if the original email was not received.

### Removing contacts

Click the remove button next to a contact. A confirmation dialog appears before removal. The primary email contact (the first entry in the list) cannot be removed.

Contacts cannot be edited after creation. To update an email address, remove the existing contact and add the new one.

## SMS

SMS delivery is available when enabled for the account. When available, the SMS section appears in the Settings tab with the same add, verify, and remove workflow as email.

For operations teams, SMS provides a high-reliability delivery path that reaches recipients even when email is inaccessible — for example, field technicians or on-call engineers without continuous email access.

## Push notifications

Push notifications are available when enabled for the account. When available, a push notification section appears at the top of the Settings tab with device-specific setup instructions.

Push provides immediate device-level alerts, making it suitable for time-sensitive escalation tiers where the recipient needs to be notified within seconds.

## Connecting channels to escalation

The contacts configured here populate the **Choose recipients** dropdown in [escalation chain steps](escalation-and-response.md). Each step in the escalation chain can select different recipients and different channels:

- **Tier 1 (Immediate):** On-call engineer via email and push.
- **Tier 2 (After delay):** Shift supervisor via email and SMS.
- **Tier 3 (After further delay):** Site operations manager via SMS.

This allows you to build targeted response chains where each tier uses the channel most likely to reach the intended recipient in their operational context.
