---
description: Receive Kilo operational alarms on iPhone and Android with the IoT Alerts app in Business mode.
---

# IoT Alerts App

A push notification is only useful if it reaches the right responder in the state they're actually in — phone locked, in a meeting, on a night shift, or away from any workstation. The **IoT Alerts** app puts Kilo's operational alarms on the phones of your on-call team and escalates them with the urgency each severity demands.

The app is a delivery surface for the alarms you already define on the web platform. You author alarm definitions, severity policies, and escalation chains in Kilo IoT Server; the app receives the resulting events, signals them according to severity, and lets responders acknowledge or resolve from the field.

## One app, two platforms

IoT Alerts is a single app that serves both Kilo (business) and Chirp (home). On first launch it asks **how you'll use it** and you choose **Business Use** — the Kilo IoT experience. From that point the app signs in against your Kilo account, connects to your Kilo deployment, and themes itself for Kilo. Field teams running personal devices alongside a home setup can switch later in **Settings → Platform**, though switching signs you out (the two platforms use separate accounts).

## Download

- **iPhone:** [App Store](https://apps.apple.com/us/app/chirp-alerts/id6756504956)
- **Android:** [Google Play](https://play.google.com/store/apps/details?id=io.chirpwireless.alarm)

## Approved for Critical Alerts on iOS

Apple restricts which apps may break through silent mode and a Focus or Do Not Disturb schedule. IoT Alerts holds Apple's **Critical Alerts** approval, so a Critical Kilo alarm can reach an on-call engineer even when the phone is silenced — provided the responder grants the Critical Alert permission when prompted. Lower-severity alarms follow the phone's normal notification rules. See [When Alerts Wake Your Phone](alert-behavior.md) for the exact behavior at each level.

## How it fits the alarm system

| You configure on the web | The app does |
|---|---|
| [Alarm definitions](../notification-rules.md) and [severity](../notification-delivery-settings.md) | Signals each event at an intensity that matches its severity |
| [Escalation chains](../escalation-and-response.md) with a **Push** step | Delivers the push leg of the chain to registered devices |
| The **Push** channel under Alarm → Settings ([Delivery Channels](../notification-channels.md)) | Registers the device and receives delivery once Push is On |

## What to read next

| Page | When to read it |
|---|---|
| [Set Up IoT Alerts](getting-started.md) | Install, choose Business Use, sign in, and enable push delivery. |
| [When Alerts Wake Your Phone](alert-behavior.md) | Understand exactly which severities ring the alarm and which arrive quietly. |
| [Acknowledge and Resolve](managing-alerts.md) | Work the Inbox, manage Alert Definitions, and switch platforms from the app. |
