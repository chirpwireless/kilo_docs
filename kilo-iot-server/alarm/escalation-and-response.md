---
description: Build escalation chains in Kilo IoT alarms — ordered steps fire over time until resolution with multi-channel notice.
---

# Escalation and Response

Production incidents left unacknowledged become production outages. Escalation chains ensure that when the primary responder does not act within the expected window, the alarm reaches the next tier — supervisor, site manager, or on-call backup — automatically and through the appropriate channel.

## How escalation works

Every alarm definition includes an **Escalation chain** — an ordered sequence of notification steps that execute in response to an unresolved alarm event.

The first step fires **immediately** when the alarm is triggered. If the alarm remains unresolved after a configurable delay, the next step fires, notifying additional recipients through additional channels. The chain continues through each configured step until the alarm is either resolved or every step has been executed.

**Resolution halts escalation.** When a team member marks the alarm as resolved in the [Inbox](inbox-and-resolution.md), no further escalation steps execute for that event. This is the intended mechanism for acknowledging and closing the loop on an operational alert.

## Configuring an escalation chain

The **Escalation chain** section appears inside every [alarm definition](notification-rules.md). It is structured as an ordered list of steps.

### First step (Immediate)

The first step is always present and cannot be removed. Its delay is fixed to **Immediate** — recipients in this step receive notification the moment the alarm event is created.

Each step is configured with:

- **Notify** — One or more organization members selected from the **Choose recipients** dropdown. Recipients are drawn from the current organization's user list. **Required** — at least one recipient must be selected before the definition can be saved.
- **Via** — Delivery channels. Email and SMS are selectable in every step. Push notifications appear when enabled for the account and reach responders through the [IoT Alerts App](iot-alerts-app/README.md) (see [Delivery Channels](notification-channels.md)).

### Additional steps

Click **Add step** to append an escalation tier. Each additional step adds:

- **After** — A configurable delay before this step fires. The alarm must remain unresolved for the step to execute. If the alarm is resolved before the delay elapses, the step is skipped.
- **Notify** — Recipients for this tier (typically a different set from earlier steps — a supervisor or on-call backup).
- **Via** — Channels for this tier.

Additional steps can be removed with the delete button. Only the first step is permanent.

## Example: operations escalation

A cold-storage temperature exceedance alarm fires at 3 AM:

1. **Step 1 (Immediate):** On-call refrigeration technician receives email and push notification.
2. **Step 2 (after configurable delay):** If unresolved, shift supervisor receives SMS and email.
3. **Step 3 (after configurable delay):** If still unresolved, site operations manager receives SMS — indicating a potential compliance event that requires management awareness.

At any point, the technician, supervisor, or manager can resolve the alarm in the Inbox. Resolution immediately halts further escalation for that event.

## Designing escalation for production environments

**Align steps with your response hierarchy.** The first step should reach whoever is responsible for immediate triage. Subsequent steps should follow your organization's escalation policy — on-call to supervisor to management.

**Use distinct channels per tier.** If Tier 1 uses email, Tier 2 should include SMS. This reduces the risk that a single channel failure blocks the entire chain.

**Consider shift schedules.** Combine escalation with the alarm definition's [schedule configuration](notification-rules.md) to route alarms to the correct on-call rotation. Outside of scheduled hours, alarms still fire but can be directed to a different escalation chain by using a separate alarm definition for off-hours conditions.

**Keep chains actionable.** Every step should reach someone who has both the authority and the ability to respond. Notifying ten people in the first step creates noise; a targeted chain with two or three tiers produces faster, more accountable response.

**Test under realistic conditions.** Run a controlled test alarm through the full escalation chain to verify that each step reaches the correct recipients through the correct channels within the expected timeframe.
