# Inbox and Resolution

Every time a notification rule fires, an alarm appears in the Inbox. This is your operational queue — the place where your team reviews what has happened, decides what needs attention, and marks issues as resolved once they are handled.

The Inbox is the default tab when you open the Notification Center from the sidebar at `/notifications`.

## The Alarm List

The Inbox displays alarms in a table with the following columns:

| Column | What it shows |
|---|---|
| **Checkbox** | Select individual alarms for bulk actions. Only alarms with status **Alarm** can be selected — resolved alarms are not selectable. |
| **Subject** | The subject line you defined in the notification rule. |
| **Status** | Either **Alarm** (active) or **Resolved** (cleared). |
| **Type** | The notification type: Critical, Important, or Information. |
| **Message** | The message body from the notification rule. |
| **Date & Time** | When the alarm was triggered. |
| **Actions** | Per-alarm actions: **Mark as resolved** button and an actions menu with **Go to rule page** and **Delete**. |

Use the **search input** at the top to filter alarms by subject or message content.

### Empty States

- **No alarms at all:** *"No notifications yet"* — *"To see notifications, create a rule and let it generate activity."*
- **Search returns nothing:** *"We can't find your notification"* — *"You don't have in your list "[search term]" notification, try another request."*

## Alarm Statuses

Every alarm has one of two statuses:

### Alarm

The notification rule has fired and the condition was met. While an alarm has this status, the system continues to send repeat notifications according to the rule's notification type and interval settings.

The tooltip in the UI explains: *"Alarm status means that notifications about rule triggering will continue until you change the status to 'Resolved.'"*

### Resolved

The alarm has been manually marked as resolved by a user, or the rule conditions are no longer met. Resolved alarms remain in the Inbox for historical reference but no longer trigger repeat notifications.

The tooltip explains: *"The Resolved status means that a previously active notification has been manually marked as resolved or the rule conditions are no longer met."*

## Resolving Alarms

### Resolving a Single Alarm

From the alarm list, click the **Mark as resolved** button on the alarm's row. The status changes from **Alarm** to **Resolved** immediately, and the button label changes to **Resolved** — it remains visible but is no longer clickable.

### Resolving in Bulk

To resolve multiple alarms at once:

1. Use the **select-all checkbox** in the table header to select all active alarms, or check individual alarms manually. Only alarms with status **Alarm** are selectable.
2. A header action appears showing **"(N) Mark as resolved"** where N is the count of selected alarms.
3. Click it. All selected alarms move to **Resolved** status.

This is useful during shift handovers or after resolving a widespread issue that triggered multiple rules simultaneously.

## Viewing Alarm Details

On mobile, each alarm row includes a chevron that navigates to the alarm detail page at `/notifications/:alarmId`. On desktop, alarm detail pages are not directly accessible — the table does not support row-click navigation. Instead, use the per-row actions: **Mark as resolved** button, and the actions menu which offers **Go to rule page** and **Delete**.

The detail page shows:

- **Subject** — displayed as the page heading
- **Message** — the full notification message
- **Type** — Critical, Important, or Information
- **Status** — Alarm or Resolved, with the explanatory tooltip

### Actions on the Detail Page

- **Go to rule page** — navigates to the notification rule that generated this alarm at `/notifications/rules/:ruleId`. Use this to inspect or adjust the rule's conditions, recipients, or thresholds.
- **Mark as resolved** — changes the alarm status. Once resolved, the button label changes to **Resolved** and becomes inactive.
- **Delete** — permanently removes the alarm. A confirmation dialog asks: *"Are you sure you want to delete the alarm?"* Click **Yes, delete** to confirm, or **Cancel** to keep it.

## Deleting Alarms

Deletion is available both from the alarm list (via the actions menu on each row) and from the detail page. Deleting an alarm removes it permanently — it will no longer appear in the Inbox or in any search results.

Delete alarms when they are no longer useful for historical reference. For alarms you want to keep but mark as handled, use **Mark as resolved** instead.

## The Unread Notifications Drawer

You do not always need to open the full Notification Center to check for new alarms. A quick-access notifications drawer is available from any page:

- **On desktop**, click the notification icon next to your avatar in the sidebar user menu area. A right-side drawer opens showing your latest unread notifications in a scrollable list. Click any notification to mark it as read. Click **Mark all as read** to clear the badge.
- **On mobile**, tap the bell icon in the top header bar. The same drawer opens. Closing it automatically marks all notifications as read.

The unread badge with a count appears whenever there are notifications you have not yet seen.

The drawer is a quick-access surface — it shows recent unread notifications but does not provide search, filtering, bulk actions, or alarm resolution. For full alarm management, open the Notification Center from the sidebar.

## Operational Workflow Tips

- **Triage by type.** Critical alarms represent conditions that need immediate response. Start there. Important and Information alarms can follow as part of regular operational reviews.
- **Use "Go to rule page" to investigate root causes.** If you see the same alarm repeatedly, open the originating rule to review whether the threshold needs adjustment or whether the device itself needs attention.
- **Resolve alarms deliberately.** Marking an alarm as resolved signals to your team that someone has acknowledged and addressed the issue. Avoid bulk-resolving without review unless you are confident the underlying conditions have been handled.
- **Search to audit specific incidents.** If you need to review all alarms related to a particular event or device, use the search input to narrow the list.
