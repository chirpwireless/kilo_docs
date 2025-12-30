# Setting Notification Intervals

**Notification Type Settings** allows you to control **how often** notifications are sent for each severity type (for example: _Critical_, _Important_, or _Information_). This helps prevent notification overload while ensuring high-priority alerts can repeat until addressed.

You can configure each notification type to be:

* **One-time notification** (sent only once when triggered)
* **Custom interval notification** (repeats at a defined interval until the condition stops or is resolved)

***

### Opening Notification Type Settings

1. Go to **Notifications** in the left navigation menu.
2. In the Notification Center, click **Notification type settings** in the top-right corner.
3. A modal window will open where you can configure notification intervals.

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

***

### Notification Type Intervals

Inside the modal, each notification type has its own interval settings:

* **Critical Notification interval**
* **Important Notification interval**
* **Information Notification interval**

These settings control the frequency of notifications triggered by rules of that type.

***

### One-Time Notifications

To send only one notification when a rule is triggered:

1. Find the notification type (Critical / Important / Information)
2. Enable **One-time notification**
3. Save your changes

When enabled, Kilo will send a single alert when the condition is triggered and will not repeat it automatically.

This is recommended for:

* informational alerts
* non-urgent updates
* events where repeated notifications are unnecessary

***

### Custom Notification Intervals (Repeat Alerts)

To repeat notifications at a defined interval:

1. Find the notification type you want to configure (for example **Critical**)
2. Disable **One-time notification**
3. Set the interval value (for example `1`)
4. Select the time unit (for example **hours or** days)

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

1. Save your changes

When custom intervals are enabled, Kilo will re-send notifications repeatedly at the chosen interval while the alert condition remains active.

This is recommended for:

* critical incidents (water leaks, fire alarms, intrusion events)
* safety alerts
* conditions that require immediate action and should not be missed

***

### Example (Critical Alerts)

If you set **Critical Notification interval** to:

**1 hour**

then Kilo will send a Critical notification every hour until the rule condition is resolved or no longer triggered.

***

### Saving or Canceling Changes

At the bottom of the modal:

* Click **Save** to apply your interval settings
* Click **Back** to exit without saving

***

### Best Practices

To keep alerts useful and actionable:

* Use **custom intervals** for **Critical** alerts so they repeat until handled
* Use **one-time notifications** for **Information** alerts to avoid noise
* Keep repeat intervals short for safety-related incidents, but longer for non-urgent conditions
