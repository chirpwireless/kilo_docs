---
description: "Build complete IoT solutions with Kilo Applications: devices, dashboards, rules, and alarms, with reusable customer templates planned next."
---

# Applications

An **application** is an IoT solution assembled for a particular job. It brings together the devices that collect information, the dashboards that show it, the rules that respond, and the alarms that notify people. For example, a **Leak Monitoring** application could contain a building's leak detectors, a floor dashboard, and the rules and notifications that help the maintenance team respond.

A dealer is a business that sells and sets up solutions for its customers—for example, leak management, home security, vehicle tracking, or refrigeration monitoring. Each type of solution needs its own devices, dashboards, widgets, rules, and alerts. Applications brings those parts together so the dealer can configure a complete solution around the service they provide.

**The planned template workflow lets the dealer configure the solution once and customers apply it to their own setup.** The customer would choose a prepared solution and have its digital devices, dashboards, widgets, rules, and alarms created together, with their relationships already configured. They would then connect their real equipment, or replace the prepared devices' simulated inputs with real device connections, so the dashboards and automation can use their readings. They would not have to build every view and rule from scratch. That makes it easier for customers to get started, while the dealer can reuse the setup across customers with the same need.

You can create an application and assemble its resources yourself today. Publishing and applying reusable templates are planned capabilities.

<figure><img src="../../.gitbook/assets/kilo-applications-dashboard.jpg" alt="Kilo application displaying its assigned dashboard"><figcaption><p>An application's Dashboard tab provides a place to use the views configured for that solution.</p></figcaption></figure>

## What makes up a solution?

Consider a dealer setting up leak monitoring for a property manager. Each part has a job:

| Part | Example in Leak Monitoring |
|---|---|
| Devices | Digital devices connected to leak sensors in the building. |
| Dashboards | A view showing sensor readings and the locations being monitored. |
| Rules | Conditions that recognize a leak reading and run the configured response. |
| Alarms | Notification definitions specifying the message, recipients, and delivery behavior. |

The application brings these configured resources together under a recognizable name. A second application could serve space utilization or vehicle tracking, with its own equipment and workflows. Your team can open the solution it needs without searching through every device, dashboard, rule, and alarm in the organization.

Creating the application does not configure those relationships automatically. A dashboard still needs widgets bound to the appropriate devices, and a rule must refer to the alarm definition it should use. Configure those connections and assign the resources to the application.

## An application and a template have different roles

An **application** is the setup in your organization: the particular devices, dashboards, rules, and alarms you work with. A **template** is the planned reusable configuration from which a customer could create an application of their own.

The intended workflow is:

1. **The dealer configures the solution once.** They prepare digital devices, dashboards and their widgets, rules, and alarm definitions, including the connections between them.
2. **The dealer publishes a template.** Customers with the same need can choose that prepared configuration.
3. **The customer applies the template.** Their own application is created with its digital devices, dashboards, widgets, rules, and alarms already configured together.
4. **The customer connects real equipment.** They connect their sensors or trackers to the prepared digital devices and adapt installation-specific settings. The configured dashboards and rules then use that equipment's readings without being rebuilt.

Template publishing and installation are planned. This workflow explains where Applications is heading; the current setup steps are below.

## What you can do now

You can create and name an application, assign devices, dashboards, rules, and alarm definitions, view its dashboards, and inspect its content. This is useful when building a solution yourself or maintaining a setup for an operations team.

1. [Create an application](creating-an-application.md) for a specific outcome, such as Building Monitoring.
2. Configure its devices, dashboards, rules, and alarm definitions through their normal platform workflows.
3. [Assign those resources](organizing-content.md) using each resource's **Application** field.
4. Open **Applications → My applications**, select the application, and use **Dashboard** for its views or **Content** for the resources behind them.

An application can contain several dashboards. For example, Building Monitoring could have a daily overview and a detailed environmental view. See [Using Application Dashboards](using-application-dashboards.md) for viewing and editing them.

Applications belong to the current organization. Users still need the relevant permissions to view or manage their contents; assigning a resource to an application does not grant additional access.

Content counts show the size of each resource category. **0** means it is empty. A dash means the count is unavailable, for example because access is missing or the category could not be loaded.

When retiring a solution, review [Deleting an Application](deleting-an-application.md) first: deletion also removes its associated resources. Move anything you need to keep to another application or **Default** before deleting.
