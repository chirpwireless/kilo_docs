---
description: "Organize devices, dashboards, rules, and alarm definitions around an operational use case in Kilo."
---

# Applications

An **application** brings the devices, dashboards, rules, and alarm definitions for an operational use case together. Instead of finding each part in a separate platform section, your team can open the application and see the resources that make the solution work.

Applications are the foundation for a planned workflow in which a dealer prepares a complete solution and a customer selects and deploys it. This first release lets you assemble and organize those resources yourself; dealer-provided templates and their deployment flow are still planned.

Think of an application as the working parts of a complete solution. A property-management team might organize leak detectors, a floor dashboard, a rule that recognizes a leak, and an alarm that reaches the maintenance team. A coworking operator might organize room and desk occupancy readings into a space-utilization application. A tracking specialist can use a different application for the devices and workflows behind asset visibility. The equipment changes; the aim is the same: give users a coherent setup for the job they need to do.

<figure><img src="../../.gitbook/assets/kilo-applications-dashboard.jpg" alt="Kilo Applications: An application brings the example dashboard into its own workspace."><figcaption><p>An application brings the example dashboard into its own workspace.</p></figcaption></figure>

## From equipment to a working solution

The resources have different jobs:

| Content | Purpose |
|---|---|
| Devices | Supply the readings and device state the solution uses. |
| Dashboards | Present the measurements, trends, and controls people need. |
| Rules | Evaluate conditions and perform configured actions. |
| Alarms | Define the messages, recipients, and notification behavior used when a rule raises an alarm. |

Assigning a device does not automatically create its dashboard, rules, or alarm definitions. Applications organize the resources you configure; their existing behavior remains in place.

## Open an application

1. Choose **Applications** in the main navigation.
2. On **My applications**, select the application you need.
3. Use **Dashboard** to view its dashboards or **Content** to inspect the associated resources.

Content counts help you see what has been configured. A zero count means that category is empty. A dash means the count is unavailable, for example because access is missing or the category could not be loaded. It does not mean the application contains no resources of that type.

Applications belong to the current organization. They do not replace organization permissions: a user's ability to view or manage each resource still depends on their access.

## Start with a focused use case

[Create an application](creating-an-application.md), then [organize its content](organizing-content.md). Start with one useful outcome, such as checking a site's conditions and notifying the facilities team when a threshold is exceeded. Add further dashboards and automations as the installation develops.

## Toward reusable solutions

The next step is for dealers and other specialists to prepare reusable solutions for the use cases they sell. A property-management dealer could package leak monitoring or space utilization; a tracking dealer could prepare an asset-tracking setup. Customers would select a prepared template and deploy its devices, dashboards, rules, and alarms together, reducing the work needed to put the solution into use.

Template publishing, installation, and the complete dealer workflow are planned capabilities. The current release provides the foundation: create an application, configure its resources, and bring them together into a solution your team can use.
