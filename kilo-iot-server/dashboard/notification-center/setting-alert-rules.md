# Setting Alert Rules

Notification rules define **when** an alert should be triggered based on device data. Rules are created per device and evaluate incoming metrics such as temperature, humidity, CO₂ levels, battery status, and more.

***

### Creating a New Notification Rule

1. Go to **Notifications** in the left navigation menu.
2. Open the **Rules** tab.
3. Click **Add Rule** in the top-right corner.

A multi-step configuration modal will open.

<figure><img src="../../../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>

***

### Step 1: Choose a Device

In the first step, select the device that the rule will apply to.

#### Selecting a Device

You can:

* Select a device from the list
* Use the **device type dropdown** to filter (e.g. sensor, gateway, camera)
* Use the **search field** if you have many devices

#### Example Device

For this example, we will use a **QingPing Temperature & CO₂ Sensor** installed inside a **lab refrigerator**.

Click the device and then click **Choose** to continue.

***

### Step 2: Add Conditions to the Device

This step defines **when** the notification should trigger.

#### Selecting a Metric

In the **Metric** field, choose a value reported by the selected device.

Available metrics depend on the device and may include:

* temperature
* humidity
* CO₂
* battery level
* signal strength
* and others

For this example, select:

**Metric:** `temperature`

<figure><img src="../../../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>

***

### Defining the Condition (Thresholds)

Once a metric is selected, define the condition using comparison operators:

* Equal to
* Not equal to
* Less than
* Less than or equal
* Greater than
* Greater than or equal

<figure><img src="../../../.gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure>

#### Example Temperature Rule

To monitor a lab refrigerator:

* Temperature **greater than 7**
* **AND**
* Temperature **less than 10**

This creates a safe operating window and avoids triggering alerts for extreme or invalid readings.

***

### Using AND Conditions

Click **+ And** to add additional conditions to the same metric.

AND conditions are useful when:

* Defining ranges (minimum and maximum values)
* Avoiding false positives
* Creating precise alert logic

<figure><img src="../../../.gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

***

### Using “Remain True For” (Time-Based Conditions)

To avoid alerts caused by short spikes (for example, when someone briefly opens the refrigerator door), you can require the condition to remain true for a specific duration.

#### Example

Instead of alerting immediately:

* Set **Remain true for**
* `30 minutes`

<figure><img src="../../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>

This means:

> The temperature must stay above 7°C continuously for 30 minutes before the notification is triggered.

This is strongly recommended for:

* Refrigerators
* Freezers
* HVAC systems
* Environments with temporary fluctuations

***

### Adding Multiple Metrics (Optional)

Click **Add Metric** to monitor additional values from the same device (for example temperature **and** humidity).

***

### Using OR Conditions (Optional)

Click **+ Or** to define alternative trigger paths.

Example:

* Temperature is above threshold **OR**
* CO₂ exceeds safe level

This allows one rule to trigger from multiple independent conditions.

<figure><img src="../../../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>

***

## Step 3: Set Up Alerting Message (Notification Rule)

After defining your device conditions, click **Continue** to configure **how the alert will be delivered and displayed**. In this step, you can customize:

* The notification subject and message
* The notification severity type (Critical / Important / Information)
* How often the notification repeats (custom frequency)
* When the rule is active (rule timer / work hours)

***

### Alert Subject and Message

At the top of the screen you can define what the alert will look like when it is delivered.

#### Subject

The **Subject** is the title of the notification. This is what users will see first in the Inbox, email, or SMS notification list.

Example:

* **Lab Fridge 1**

#### Message

The **Message** is the full alert text that is sent when the rule is triggered.

Example:

* **WARNING! Lab Fridge 1 temperature is above 7 degrees!**

It’s recommended to include:

* the device name or location
* what condition was triggered
* what action should be taken (optional)

<figure><img src="../../../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

***

### Notification Type (Severity)

Select a **Notification type** for this rule:

* **Critical**
* **Important**
* **Information**

The selected type affects how the alert is categorized in the Inbox and may follow a default interval configured under **Notification Type Settings**.

***

### Custom Notification Frequency

By default, notifications follow the interval configured globally for their notification type (for example, Critical notifications may repeat every hour).

If you want a different behavior for this specific rule, enable **Custom Notification frequency**.

<figure><img src="../../../.gitbook/assets/image (38).png" alt=""><figcaption></figcaption></figure>

#### Enable Custom Frequency

1. Toggle **Custom Notification frequency** to **On**
2. Choose one of the following options:

**Option 1: Once (send a single alert)**

Use this when you only want one notification when the condition is triggered.

Example use cases:

* a one-time warning
* low-priority informational events
* alerts where repeat messages create noise

**Option 2: Repeat every (custom interval)**

Use this when you want the alert to repeat on a schedule.

1. Select **Repeat every**
2. Enter the interval value (example: `1`)
3. Choose the time unit (minutes / hours)

Example:

* Repeat every **1 hour**
* Repeat every **15 minutes**

This is recommended for:

* equipment failures
* safety events
* incidents that require immediate attention until resolved

***

### Rule Timer (Run the Rule Only During Specific Hours)

The **Rule timer** allows you to control _when_ the notification rule is active. This is useful for after-hours monitoring, when nobody is on-site to check equipment manually.

#### Example: Alert Only During Non-Work Hours

If the refrigerator is monitored during the day by staff, but needs alerting during nights/weekends:

1. Toggle **Rule timer** to **On**
2. Set the active time range:
   * **Start** (example: `18:00`)
   * **Finish** (example: `09:00`)
3. Select the correct **Time Zone**
4. Choose the **Start Rule execution from date** (optional)

<figure><img src="../../../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>

This ensures that notifications are only triggered during the hours when the rule is allowed to run.

***

### Restrict Rule to Specific Days (Optional)

If you only want the rule to execute on certain days (for example weekdays only, or weekends only):

1. Enable **Execute Rule on specific days only**
2. Select the days when the rule should be active

***

## Step 4: Select Notification Recipients

After configuring the alert message and rule behavior, click **Continue** to choose **how you want to receive notifications** when this rule is triggered.

In this step, you select the notification method(s) and the recipient(s) who should receive the alert.

***

<figure><img src="../../../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>

### Notification Methods

Kilo supports the following notification delivery methods:

* **SMS Notifications**
* **Email Notifications**

Each method can be enabled or disabled independently for this rule.

***

### SMS Notifications

To receive notifications by SMS:

1. Toggle **SMS Notifications** to **On**
2. Select the phone number(s) that should receive this alert

If a phone number is available, you will see it listed under **Send SMS to**, and you can select it using the checkbox.

#### Adding Phone Numbers

If no phone numbers are available, Kilo will prompt you to add them in **Notification Settings**.

To add a phone number:

1. Open **Notifications**
2. Go to **Settings**
3. Add a mobile number under **SMS**
4. Return to the rule creation flow and select it here

***

### Email Notifications

To receive notifications by email:

1. Toggle **Email Notifications** to **On**
2. Select the email address(es) that should receive the alert

If no email address is available, you will be prompted to add one in **Notification Settings**.

To add an email address:

1. Open **Notifications**
2. Go to **Settings**
3. Add an email address under **Email**
4. Return to this step and select it here

***

### Continue to Final Step

Once you have selected your notification method(s) and recipients:

1. Click **Continue**
2. Review the final settings and save the rule

***

### Best Practice: Use Multiple Methods for Critical Alerts

For **Critical** notifications, it is recommended to enable both:

* **SMS** (fast, immediate delivery)
* **Email** (recordkeeping and team visibility)

This increases the chance that important alerts are seen quickly.



***

### Best Practices for Notification Rules

* Use **Remain True** to reduce noise and false alerts
* Keep thresholds realistic and aligned with operational limits
* Use **Critical** severity only for events requiring immediate action
* Name rules clearly (e.g. _“Lab Fridge – Temperature High”_)
