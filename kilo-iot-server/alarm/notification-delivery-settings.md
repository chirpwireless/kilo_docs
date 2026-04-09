# Notification Delivery Settings

Not every operational event has the same urgency. A critical cold chain breach and a routine informational reading should not repeat at the same cadence. The Notification Delivery Settings let you control how often each notification type sends repeat alerts — so critical events get persistent attention while informational events do not overwhelm your team.

## The Three Notification Types

Every notification rule is assigned one of three types. Each type has a default repeat interval that determines how often the system re-sends notifications while an alarm remains unresolved:

| Type | Default Repeat Interval | Intended Use |
|---|---|---|
| **Critical** | Every 1 hour | Conditions requiring immediate action — equipment failures, safety threshold breaches, compliance violations. |
| **Important** | Every 4 hours | Conditions requiring timely attention — performance degradation, capacity warnings, maintenance triggers. |
| **Information** | Every 1 day | Awareness-level conditions — trend notifications, periodic status changes, non-urgent observations. |

These defaults apply globally: every rule set to "Critical" will repeat hourly unless you change the global setting or override it at the rule level.

## Accessing Notification Types Settings

The delivery timing settings are in a **separate modal**, not in the Settings tab. The Settings tab manages contacts and channels — this modal manages repeat intervals.

To open it:

1. Go to the Notification Center at `/notifications`.
2. Click the **"Notification types settings"** button. On desktop, this button is in the page header and visible from all three tabs (Inbox, Rules, Settings). On smaller screens, it is available at the bottom of the Inbox and Rules tabs.

The modal opens with the title area and subtitle: *"Choose how often notifications should be sent. You can enable a one-time notification or set a repeat interval."*

## Configuring Repeat Intervals

The modal shows three sections — one for each notification type:

- **Critical Notification interval**
- **Important Notification interval**
- **Information Notification interval**

Each section has the same controls:

### Repeat Interval

Two fields define how often notifications repeat:

- **Interval value** — a number (e.g., 1, 2, 6, 12).
- **Interval unit** — a dropdown with two options: **Hours** or **Days**.

For example, setting Critical to "2 Hours" means the system re-sends the notification every 2 hours while the alarm remains unresolved.

### One-Time Notification

Each type has a **"One-time notification"** toggle. When enabled, the system sends a single notification when the alarm fires and does not repeat, regardless of the interval setting.

Use this when you want awareness without persistence — for example, an informational alert that something changed, where a single email is sufficient.

## Per-Rule Overrides

The settings in this modal apply globally to all rules of each type. However, individual rules can override the global setting.

When creating or editing a notification rule (in step 3, **"Set up alerting message"**), you can toggle **Custom Notification interval** to define a repeat cadence specific to that rule. See [Notification Rules](notification-rules.md) for details on per-rule custom intervals.

Per-rule overrides take precedence over the global settings configured here.

## Practical Guidelines

- **Start conservative, then tighten.** Set Critical to 1-hour repeat initially. If your team finds that too frequent (or not frequent enough), adjust. It is easier to change a global setting than to edit dozens of individual rules.
- **Use one-time for Information type in most cases.** Information alerts are inherently low-urgency. A single notification is usually enough — repeated daily emails for an informational condition can train people to ignore notifications entirely.
- **Reserve hourly repeats for genuine emergencies.** If every notification type repeats hourly, nothing stands out as truly critical. The differentiation between types only works if their cadences are meaningfully different.
- **Document your type policy.** If your organization has standards for what qualifies as Critical vs. Important vs. Information, document them outside the platform and align rule creation to those definitions. Consistent type assignment makes the repeat intervals work as intended.
