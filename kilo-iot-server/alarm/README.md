# Operational Alerting

When a temperature sensor in a cold storage facility drifts above the safe threshold at 3 AM, someone needs to know — immediately, reliably, and through the right channel. The Notification Center in Kilo IoT Server turns raw sensor data into actionable operational alerts so your team can respond before a deviation becomes an incident.

The Notification Center is where you define what conditions matter, who should be told, how often, and through which channels. It is also where your team triages incoming alarms, resolves them, and tracks the history of what happened.

## Where to Find It

Open **Notifications** from the sidebar. The Notification Center opens at `/notifications` and shows the **Inbox** tab by default.

You can also check for unread notifications without leaving your current page:

- **On desktop**, click the notification icon next to your avatar in the sidebar user menu area. A right-side drawer opens with your latest unread notifications. Click any notification to mark it as read, or click **Mark all as read** to clear the badge.
- **On mobile**, tap the bell icon in the top header bar. The same drawer opens. Closing it automatically marks all notifications as read.

The unread badge shows a count whenever there are notifications you have not yet seen.

## How It Is Organized

The Notification Center has three tabs:

| Tab | What it does |
|---|---|
| **Inbox** | Lists every alarm that has fired. Search, review details, mark alarms as resolved, delete alarms you no longer need. |
| **Rules** | Create, edit, enable, disable, and delete notification rules. Each rule watches a device for specific conditions and sends alerts when those conditions are met. |
| **Settings** | Manage your notification delivery channels — add and verify email addresses, enable or disable channels. |

There is also a **Notification types settings** button in the page header. This opens a separate modal where you configure how often each notification type (Critical, Important, Information) repeats. This is not the same as the Settings tab — the tab manages contacts, the modal manages timing.

## The End-to-End Flow

A typical operational alerting workflow follows this path:

1. **Create a notification rule** — pick a device, define conditions, compose the alert message, choose a notification type, select recipients, and name the rule.
2. **The rule monitors continuously** — when the device data matches the conditions you set, the system fires an alarm and sends notifications to the recipients you chose.
3. **Notifications arrive** — by email (and by SMS when available on your account). The notification includes the subject and message you defined in the rule.
4. **Review in the Inbox** — the alarm appears in the Inbox with status **Alarm**. Resolve it directly from the list, use the actions menu to jump to the originating rule, or open the alarm detail page on mobile.
5. **Resolve the alarm** — once the underlying issue is addressed, mark the alarm as **Resolved**. Resolved alarms remain in the Inbox for historical reference.

## What to Read Next

| Page | When to read it |
|---|---|
| [Your First Operational Alert](first-operational-alert.md) | You want a quick walkthrough to create one rule, see it fire, and resolve the alarm. |
| [Notification Rules](notification-rules.md) | You need the full reference for rule creation, editing, and management. |
| [Inbox and Resolution](inbox-and-resolution.md) | You need to triage alarms — search, resolve, delete, or trace back to the originating rule. |
| [Notification Delivery Settings](notification-delivery-settings.md) | You want to control how often each notification type repeats. |
| [Notification Channels](notification-channels.md) | You need to set up or manage email and SMS delivery. |
