# Your First Operational Alert

This walkthrough takes you from zero to a working notification rule. By the end, you will have created a rule that monitors a device, fires an alarm when a condition is met, and delivers a notification to your email. You will also resolve the alarm to complete the full lifecycle.

This is the happy path — one rule, one device, one condition. For editing rules, managing multiple rules, and advanced configuration, see [Notification Rules](notification-rules.md).

## Prerequisites

Before you start, make sure you have:

- At least one device registered and sending data. If you have not set one up yet, follow [Your First Deployment](../getting-started/your-first-deployment.md).
- A verified email address in your notification channels. Check the **Settings** tab in the Notification Center at `/notifications/settings` — if no email is listed, see [Notification Channels](notification-channels.md) to add one.

## Step 1 — Open the Notification Center

Click **Notifications** in the sidebar. The Notification Center opens at `/notifications`, showing the **Inbox** tab.

Switch to the **Rules** tab.

## Step 2 — Start Creating a Rule

Click **Add Rule** at the top of the page. A guided modal opens.

## Step 3 — Choose a Device

The first modal step is titled **"1 / Choose a device"**. Select the device you want to monitor from the list — for this walkthrough, pick a device that is actively reporting data so you can see the alert fire.

Click **Choose**.

## Step 4 — Set a Condition

The modal advances to **"2 / Add conditions to the device"**. Define the condition that should trigger the alert. For example, if you are monitoring a temperature sensor, set the condition so it triggers at a threshold the device is likely to hit — this way you can verify the rule works.

Click **Continue**.

## Step 5 — Compose the Alert Message

The modal shows **"3 / Set up alerting message"**.

Fill in:

- **Subject** — a short description, e.g., *"Temperature threshold exceeded"*
- **Message** — enough context to act on, e.g., *"Sensor reading has crossed the configured threshold. Verify the device and surrounding environment."*
- **Notification type** — select **Information** for this test. Information alerts repeat once per day by default, which avoids notification overload while you are testing.

Leave the Custom Notification interval toggle off for now.

Click **Continue**.

## Step 6 — Select Recipients

The modal shows **"Select notification recipients"**. Your email channel should appear with your verified email address shown as the default recipient. Make sure the email toggle is **On**. If this is your only email contact, it is automatically used — no checkbox selection is needed.

Click **Continue**.

## Step 7 — Name the Rule

The final step shows **"4 / Set up rule name and description"**. Give it a recognizable name — e.g., *"Test alert – temperature threshold"*.

Click **Create rule**.

You are returned to the Rules list. Your new rule appears with its toggle enabled — it is now actively monitoring the device.

## Step 8 — Wait for the Alarm

When the device data meets the condition you defined, the system fires an alarm and sends a notification to the email address you selected. You will receive an email with the subject and message you wrote.

The alarm also appears in the **Inbox** tab of the Notification Center.

## Step 9 — Review and Resolve the Alarm

Switch to the **Inbox** tab at `/notifications`. You should see your alarm in the list with status **Alarm**.

On desktop, you can see the alarm's subject, status, type, message, and timestamp directly in the table row. On mobile, tap the chevron on the alarm row to open its detail page.

Click **Mark as resolved** on the alarm's row to change the status to **Resolved**. Once resolved, the button label changes to **Resolved** and the system stops sending repeat notifications. The alarm stays in the Inbox for reference.

You have completed the full cycle: rule creation → alarm → notification → resolution.

## What to Do Next

| Next step | Where to go |
|---|---|
| Create rules with custom intervals or edit existing rules | [Notification Rules](notification-rules.md) |
| Learn how to triage alarms at scale — bulk resolve, search, delete | [Inbox and Resolution](inbox-and-resolution.md) |
| Control how often each notification type repeats | [Notification Delivery Settings](notification-delivery-settings.md) |
| Add more email addresses or manage delivery channels | [Notification Channels](notification-channels.md) |
