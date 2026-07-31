---
description: How Kilo alarm severity decides when a push wakes the phone or arrives as a quiet notification.
---

# When Alerts Wake Your Phone

Not every alarm should interrupt a responder the same way. A compliance breach in cold storage needs to wake someone at 3 AM; a routine status confirmation does not. IoT Alerts maps the [severity](../notification-delivery-settings.md) you assign each alarm definition onto a matching level of phone intrusion — from a full-screen alarm that overrides silent mode down to a quiet entry in the notification list.

The severity travels with the alarm event from the web platform to the device. You don't configure intrusion on the phone; you control it by choosing the right severity when you author the [alarm definition](../notification-rules.md).

## Severity to phone behavior

| Severity | On the responder's phone |
|---|---|
| **Critical** | A full-screen alarm opens, with a looping alarm tone and vibration that continue until the responder acts. It is designed to break through silent mode and a Focus or Do Not Disturb schedule (see below). **This is the only level that wakes the phone.** |
| **High / Medium** | A prominent, attention-getting notification with sound and vibration. It surfaces above ordinary notifications but does **not** open the alarm screen or loop a tone. |
| **Low / Info** | A quiet notification that lands in the normal notification list with no sound or vibration. It is a normal, visible notification you'll see when you next check the phone — not a hidden background message. |

> If an alarm ever arrives without a severity, the app treats it as **Critical** rather than risk silencing something urgent.

The practical rule for designing alarms: reserve **Critical** for events that genuinely justify overriding a responder's silent phone. Use **High** or **Medium** for events that warrant a prompt, noticeable nudge, and **Low** or **Info** for awareness you don't want to escalate into an interruption.

## Breaking through silent mode and Do Not Disturb

A Critical alarm can reach a responder whose phone is silenced or on a Focus / Do Not Disturb schedule because the app holds Apple's **Critical Alerts** approval on iOS and uses the equivalent high-priority alarm path on Android. Two conditions apply:

- **The responder must grant the Critical Alert permission** when the app first asks (or later in the phone's notification settings). If it was declined, Critical alarms fall back to the phone's normal silent and Focus behavior.
- **Only Critical** uses this path. High, Medium, Low, and Info all respect the phone's own notification, sound, and Focus settings — so a muted phone may show them quietly or hold their sound.

This is the distinction worth communicating to your on-call team: ordinary alarms can be quieted by a responder's phone settings, but a Critical alarm — with permission granted — is the approved path that breaks through.

## Acting on a Critical alarm

When the full-screen alarm is showing, the responder has two actions:

- **Close** — silences the alarm tone on that phone only. The alarm event stays **active** in Kilo, other recipients still see it, and [escalation](../escalation-and-response.md) continues if configured.
- **Dismiss & Acknowledge** — silences the alarm **and** resolves the event in Kilo for everyone, which also halts further escalation steps.

For the full picture of resolving versus closing, and working the Inbox, see [Acknowledge and Resolve](managing-alerts.md).

## Delivery conditions

Push delivery depends on the phone's state. If the app has been force-stopped or swiped away, delivery can be limited until it's reopened, and aggressive battery optimization on some Android devices can delay it — allowing the app to run in the background improves reliability. Because no single phone is guaranteed, build [escalation chains](../escalation-and-response.md) that move to another responder if the first does not acknowledge, rather than relying on one device.
