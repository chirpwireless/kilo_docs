# Notification Rules

A notification rule defines what the Kilo IoT Server watches for and who it tells when something happens. Each rule connects to a device, evaluates conditions against live sensor data, and sends notifications through the channels you configure. Rules run continuously — once enabled, they monitor around the clock without manual intervention.

Rules are managed from the **Rules** tab in the Notification Center at `/notifications/rules`.

## The Rules List

The Rules tab shows all your notification rules in a table with these columns:

| Column | What it shows |
|---|---|
| **Name** | The rule name you assigned during creation. |
| **Description** | The description you provided. |
| **Connected devices** | The device this rule monitors. |
| **Type** | The notification type: Critical, Important, or Information. |
| **Status** | An enable/disable toggle. Enabled rules are actively monitoring. |
| **Actions** | Edit and Delete options. |

Use the **search input** at the top to filter rules by name.

If you have not created any rules yet, the page shows: *"There is no rule yet"* with a prompt *"Let's add your first rule."*

## Creating a Notification Rule

Click the **Add Rule** button at the top of the Rules tab. A guided modal opens and walks you through five steps.

### Step 1 — Choose a Device

The modal opens with the title **"1 / Choose a device"** and the subtitle *"Select the device you want to apply the rule to."* You see a list of devices registered on your account. Select the device you want this rule to monitor, then click **Choose**.

### Step 2 — Add Conditions

The modal title updates to **"2 / Add conditions to the device"** with the subtitle *"Select the conditions under which the trigger should occur."*

This is where you define what must happen on the device for the rule to fire. The condition builder lets you select device metrics and define thresholds — for example, temperature above 30°C, or humidity below 20%.

When you are satisfied with the conditions, click **Continue**. To go back, click **Back**.

### Step 3 — Set Up the Alerting Message

The modal title shows **"3 / Set up alerting message"**. This step defines what the notification says and how urgent it is.

**Fields:**

| Field | Required | Description |
|---|---|---|
| **Subject** | Yes | The notification subject line. Use something descriptive that identifies the situation at a glance — e.g., *"Cold storage temperature exceeded threshold."* |
| **Message** | Yes | The notification body. Provide enough context for the recipient to understand what happened and what to do — e.g., *"Warehouse B freezer unit 3 has been above -18°C for more than 10 minutes. Check the compressor status."* |
| **Notification type** | Yes | A dropdown with three options: **Critical**, **Important**, or **Information**. This controls the default repeat interval for this rule's notifications. |

**Notification type defaults:**

| Type | Default repeat interval |
|---|---|
| Critical | Every 1 hour |
| Important | Every 4 hours |
| Information | Every 1 day |

These defaults can be changed globally in the [Notification Delivery Settings](notification-delivery-settings.md) modal.

**Custom interval (optional):**

Below the notification type, you can toggle **Custom Notification interval** to override the default for this specific rule. When enabled, two additional fields appear:

- **Interval value** — a number field.
- **Interval unit** — a dropdown with **Hours** or **Days**.

You can also toggle **One-time notification** if the rule should only notify once when the condition is first met, rather than repeating.

Click **Continue** to proceed.

### Step 4 — Select Notification Recipients

The modal title shows **"Select notification recipients"**.

This step shows your configured notification channels (email and, when available, SMS) with the contacts you have added in [Notification Channels](notification-channels.md).

- **Email** and **SMS** sections each have an On/Off toggle.
- If you have one email contact, it is shown as your default recipient without a checkbox. To select from multiple contacts, click **"Add email"** — this switches to multi-select mode where all your email contacts appear with checkboxes. (The first contact is auto-selected.)
- Once in multi-select mode, click **"Add recipients"** to add a new email address directly from this step. For SMS, the pattern is reversed: **"Add recipients"** enters multi-select mode, and **"Add phone number"** adds a new contact.
- Verified contacts have active checkboxes. Unverified contacts appear with a disabled checkbox and cannot be selected until verified.

Click **Continue** to proceed.

### Step 5 — Set Up Rule Name and Description

The final modal title shows **"4 / Set up rule name and description"**.

Give the rule a clear, descriptive name — something your team will recognize immediately in the rules list. For example: *"Warehouse B cold chain – temperature breach"* or *"Server room humidity – critical threshold."*

The description field is optional but valuable for documenting the rule's purpose, especially in deployments with many rules.

Click **Create rule** to save the rule. You are returned to the Rules list, where the new rule appears with its status toggle set to enabled.

## Editing a Rule

You do not need to walk through all five steps again to change one thing. Click the actions menu on a rule in the list (or open the rule detail page at `/notifications/rules/:ruleId`) and select **Edit**. A dialog titled **"Edit rule details"** appears with the subtitle *"Select the section you want to edit."*

Pick the section you want to change:

- **Conditions** — opens step 2
- **Notification details** — opens step 3
- **Notification recipients** — opens step 4
- **Name and description** — opens step 5

The modal opens directly at the step you selected. Make your changes and click **Save changes**.

## Enabling and Disabling Rules

Each rule in the list has a **status toggle**. Flip it to disable a rule temporarily without deleting it — useful during maintenance windows or when testing. Flip it back to resume monitoring.

Disabled rules remain in the list and retain all their configuration. They simply stop evaluating conditions and sending notifications until re-enabled.

## Deleting a Rule

Click the actions menu on a rule and select **Delete**. A confirmation dialog appears:

> *"Are you sure you want to delete the rule?"*
> *"Once deleted, all connected devices will no longer follow this rule."*

Click **Yes, delete** to confirm, or **Cancel** to keep the rule. Deletion is permanent — the rule and its configuration are removed.

## Rule Detail Page

On mobile, tapping a rule card opens its detail page at `/notifications/rules/:ruleId`. On desktop, the rule detail is not accessible by clicking the table row — use the actions menu on each rule for editing and deletion.

The detail page shows the full rule configuration in a card layout — the same information visible during creation, organized for quick reference.

From the detail page you can:

- **Edit** the rule (same section-picker dialog as the list view)
- **Delete** the rule
- **Edit the name and description** directly

## Best Practices for Rule Management

- **Name rules for the situation, not the metric.** *"Cold chain breach – Warehouse B"* is more useful than *"Temperature > -18."* When your team is triaging alarms at scale, the name is the first thing they see.
- **Use the description field.** Document why the rule exists, which process it protects, and who to escalate to. This context is invaluable when someone unfamiliar with the rule encounters it months later.
- **Start with Information type for new rules.** This gives you a daily repeat cadence while you validate that the conditions and thresholds are correct. Promote to Important or Critical once the rule is proven.
- **Disable rather than delete during testing.** If you suspect a rule is firing too often, disable it, adjust the conditions, and re-enable — rather than deleting and recreating.
