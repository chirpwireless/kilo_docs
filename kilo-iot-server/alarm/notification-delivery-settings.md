---
description: "Notification severity policy in Kilo IoT — repeat cadence per tier: Critical, High, Medium, Low, Info."
---

# Notification Severity

Not every operational event carries the same urgency. A critical cold-chain breach and a routine informational reading should not repeat at the same cadence. The Notification Severity settings control how frequently each severity level re-sends notifications while an alarm remains active, ensuring that critical events receive persistent attention while lower-priority events do not overwhelm your operations team.

## Accessing severity settings

Click the **Notification Severity** button in the Alarm page header. This button is visible on all tabs (Inbox, Alarm definitions, and Settings). It opens a modal titled **Notification severity** with the instructions: *"Choose how often notifications should be sent. You can enable a one-time notification or set a repeat interval."*

## Severity levels

Kilo IoT Server classifies alarms across five priority tiers:

| Level | Operational context |
|---|---|
| **Critical** | Production-stopping events requiring immediate intervention — equipment failure, safety threshold breaches, compliance violations. |
| **High** | Urgent deviations needing prompt response — cold-chain drift, pressure anomalies, environmental exceedances outside acceptable tolerance. |
| **Medium** | Operationally significant but not time-critical — scheduled maintenance thresholds, capacity approaching limits, non-urgent environmental drift. |
| **Low** | Routine operational awareness — minor parameter fluctuations within tolerance, informational device state changes. |
| **Info** | Background reporting — periodic system health checks, operational status confirmations, scheduled diagnostic outputs. |

## Configuring repeat behavior

For each severity level, the modal provides:

- **One-time notification** — Toggle On to send a single notification when the alarm fires. No subsequent repeats. Toggle Off to use a recurring interval.
- **Repeat interval** — When one-time is Off, configure the re-send frequency: a numeric value and a unit (Hours or Days). The alarm notification repeats at this interval until the event is resolved.

## Per-alarm overrides

The severity policy applies globally to every alarm definition at that severity level. Individual alarm definitions can override the global policy using the **Custom Notification interval** toggle in the [alarm definition form](notification-rules.md). When an override is active, the per-alarm setting takes precedence over the global policy for that specific alarm.

## Operational recommendations

- **Critical and High: use recurring intervals.** Production incidents that go unacknowledged require persistent notification until someone responds or the event is resolved.
- **Medium: evaluate based on operations cadence.** If your team triages alarms in regular intervals (hourly, shift-based), recurring reminders at the triage interval work well.
- **Low and Info: consider one-time delivery.** Background and awareness-level notifications that repeat can saturate your team's notification channels and reduce attention to higher-priority alarms.
- **Align intervals with SLA expectations.** If your SLA requires Critical event acknowledgment within 15 minutes, set the repeat interval below that window to ensure the alarm remains visible to the response team.
