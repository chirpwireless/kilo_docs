# Notification Channels

Notification rules fire alarms and send notifications — but those notifications need somewhere to go. The **Settings** tab in the Notification Center is where you manage the delivery channels and contact addresses that receive your operational alerts.

Open the Settings tab at `/notifications/settings`.

## Email Notifications

Email is the primary notification channel.

### Enabling or Disabling Email

The **EMAIL NOTIFICATIONS** section has an On/Off toggle at the top. When email is enabled, notifications from all active rules are delivered to the email addresses you have configured and selected as recipients.

To disable email notifications entirely, flip the toggle to Off. A confirmation dialog asks:

> *"Are you sure you want to turn off e-mail?"*
> *"You will not receive any e-mail."*

Click **Yes, turn off** to confirm, or **No, cancel** to keep email active.

Disabling the channel stops all email delivery — no rules will send email notifications until you re-enable it, regardless of per-rule recipient settings.

### How Contacts Are Organized

Your first email address is treated as the **primary contact**. It appears as the default *"Send e-mail to [address]"* destination and does not have the same edit and remove controls as additional contacts.

Additional contacts (up to **4 total**) appear below the primary and each has edit and remove actions.

### Adding Email Addresses

Click **Add e-mail address** (or **Add one more e-mail address** if you already have contacts) to add a new address.

After adding an address, the Settings tab shows an **"E-mail verification required"** warning with a note that a verification link was sent. The recipient must click the link in the verification email to confirm ownership. Until verified, the address shows a warning indicator.

If the verification email does not arrive, click the **Resend link** action in the verification warning to send it again.

### Removing an Email Address

Click the remove action next to a secondary contact. A confirmation dialog appears:

> *"Remove e-mail address"*
> *"Are you sure you want to remove [address]? This e-mail address will no longer receive notifications."*

Click **Yes, remove** to confirm, or **No, cancel** to keep it.

The primary contact does not have a remove button — only additional contacts can be removed this way.

## SMS Notifications

{% hint style="info" %}
**SMS notifications are not generally available.** When this feature is not enabled for your account, the SMS section displays a **"Coming soon..."** badge and the toggle is inactive. Contact support if you are interested in SMS notification capabilities.
{% endhint %}

When available, the **SMS NOTIFICATIONS** section works similarly to email:

- An On/Off toggle controls whether SMS delivery is active.
- You can add up to **2 phone numbers**.
- Each number must be verified before it can receive notifications.
- Phone numbers can be removed with the same confirmation flow as email.

## Selecting Recipients in Notification Rules

The contacts you manage here become available when creating or editing notification rules. For the full recipient selection flow, see step 4 in [Notification Rules](notification-rules.md).

## Practical Guidelines

- **Complete verification promptly.** An unverified address shows a warning state in the Settings tab. Notifications may not reach unverified addresses as expected. If the verification email does not arrive, use the **Resend link** action.
- **Use distinct contacts for distinct roles.** Rather than sending every notification to a single shared inbox, assign email addresses by operational responsibility. The on-call engineer, the facility manager, and the compliance team may each need different rules routed to their specific addresses.
- **Review contacts when team members change.** When someone leaves a role or the organization, remove their email address from the Settings tab.
- **Keep email enabled unless you have a specific reason to disable it.** Disabling the email channel silently stops all email notification delivery across all rules — there is no per-rule fallback. If you need to stop notifications temporarily, disabling individual rules is more targeted than disabling the entire channel.
