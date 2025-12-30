# Rules

The **Rules** tab is where you create and manage notification rules that trigger alerts based on device data and system events. Rules allow you to define **when** a notification should be generated, **what severity type** it should have, and **which devices** it applies to.

***

### Opening Notification Rules

1. In the left navigation menu, click **Notifications**.
2. In the Notification Center, select the **Rules** tab.

The Rules tab shows all existing notification rules in a table view.

***

### What You Can Do in Rules

In the **Rules** tab, you can:

* Create new notification rules
* View all existing rules and their configuration at a glance
* Enable or disable rules without deleting them
* Search rules by name or keyword
* Manage rule actions using the options menu on each rule

***

### Rules List (Table View)

All notification rules are displayed in a list. Each row represents one rule.

#### Rule Columns

Each rule includes the following fields:

* **Name** – the rule name (used to identify the rule in your system)
* **Description** – optional text describing what the rule is used for
* **Connected devices** – the device(s) this rule is applied to
* **Type** – severity level of the notification (e.g., _Critical_, _Information_)
* **Status** – whether the rule is active or disabled
  * **Active** rules generate notifications
  * Disabled rules do not trigger notifications

Rules can be sorted using the column headers (where available).

***

### Searching Rules

If you have many rules, use the **Search field** above the rule list.

To search:

1. Click into the search field
2. Enter a keyword (for example: `leak`, `tank`, `temperature`)
3. The list filters automatically to show matching rules

***

### Creating a New Rule

To create a new rule:

1. Click **Add Rule** in the top-right corner of the Notification Center
2. Configure the rule details (name, conditions, devices, severity type)
3. Save the rule

Once saved, the rule will appear in the Rules list.

***

### Enabling / Disabling Rules

Each rule has a toggle in the **Status** column.

* Toggle **ON** to enable the rule (**Active**)
* Toggle **OFF** to disable it

This allows you to pause notifications from a rule without deleting the rule configuration.

***

### Editing or Managing a Rule

On the far-right of each rule row, you will see an **options menu (⋮)**.

Use this menu to perform rule management actions such as editing or removing a rule (depending on your available permissions and configuration).

***

### Notification Types Settings

At the top-right of the Rules page, you may also see **Notification types settings**.

This section controls the available notification types (such as _Critical_ or _Information_) and how they are handled in the Notification Center.

***

### Recommended Best Practices

To keep notification rules manageable and actionable:

* Use clear rule names (e.g., _“Water Leak – Basement Sensor”_)
* Use descriptions to clarify purpose and trigger logic
* Only use **Critical** for alerts requiring immediate attention
* Disable rules temporarily if they generate unnecessary alerts during maintenance
