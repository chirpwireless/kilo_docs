---
description: "Install a ready-made IoT solution in one click and get devices, rules, alarms, and dashboards already working. Or assemble your own application."
---

# How do applications and solutions work in Kilo?

Imagine opening Kilo, choosing a solution such as **Building Monitoring**, and pressing **Install solution**. Seconds later you have working virtual devices streaming realistic readings, a rule that reacts to them, an alarm that is ready to notify you, and a live dashboard. Nothing to build first. When your real sensors arrive, you swap the virtual devices for them, and the dashboard, rules, and alarms keep working.

That is what **Applications and Solutions** give you. An **application** is a working bundle of devices, dashboards, rules, and alarms for one job. A **solution** is a ready-made application from the Kilo catalog. Kilo prepares it for one use case and configures it completely, so you can install a copy with one click. If you like it, you buy the devices listed on the install screen and swap the virtual devices for them; everything else is already set up. New applications are added to the catalog with every release, starting with the next one. If you want the full picture, read [What are solutions and applications in Kilo?](what-are-solutions-and-applications.md).

<figure><img src="../../.gitbook/assets/kilo-solutions-catalog.jpg" alt="Two solution cards in the Kilo Solutions tab: Building Monitoring and IP500 demo Smart Office, each showing counts of virtual devices, rules, widgets, and alarms"><figcaption><p>Solution cards show what an install will create. This example comes from a test organization.</p></figcaption></figure>

## Why does installing a prepared solution change how you roll out IoT?

Setting up a monitoring use case normally means many small decisions: which devices, how their readings are named, which dashboard, which rule, who gets the alarm. Kilo has already made those decisions for each use case in the catalog. A solution packages them: it shows the use case it solves and arrives fully pre-configured with devices, dashboards, rules, and alarms.

* **See it working before you own the hardware.** Every device in a solution starts as a virtual device on the Emulator connector, so the dashboard is alive the moment you install.
* **Go live without rebuilding anything.** You swap each virtual device for a real LoRaWAN, MIOTY, MQTT, or tracker connection. Mappings, rules, and widgets stay intact. See [How do I swap the Emulator for real devices?](swapping-the-emulator-for-real-devices.md).
* **Skip the learning curve.** A newcomer can open a finished setup and learn by looking at it. A professional starts from a proven baseline and adjusts it.
* **Buy only what you need.** The install screen lists the real devices the solution works with, so you know what to buy if you decide to go live.

## Where do you start?

| You want to | Go to |
|---|---|
| Understand the vocabulary: application, solution, use case | [What are solutions and applications in Kilo?](what-are-solutions-and-applications.md) |
| Look through ready-made solutions | [How do I browse and preview solutions?](browsing-and-previewing-solutions.md) |
| Put a solution to work | [How do I install a solution?](installing-a-solution.md) |
| Learn every part of the My applications tab | [How do I use the My applications tab?](my-applications-tab.md) |
| Replace virtual devices with your own | [How do I swap the Emulator for real devices?](swapping-the-emulator-for-real-devices.md) |
| See how a solution is published to the catalog | [How do I publish a solution?](publishing-a-solution.md) |
| Understand how problems and industries are organized | [What are use cases in Kilo?](use-cases.md) |
| Learn why Kilo can be both unlimited and easy | [Is Kilo powerful and easy to use?](why-kilo-is-powerful-and-easy.md) |

## What if you want to build your own application?

You always can. An application you create yourself is exactly the same kind of object as an installed solution; you assemble it from the devices, dashboards, rules, and alarms you already have.

1. [Create an application](creating-an-application.md) for a specific outcome, such as Building Monitoring.
2. Configure its devices, dashboards, rules, and alarm definitions through their normal workflows.
3. [Assign those resources](organizing-content.md) using each resource's **Application** field.
4. Open **Applications → My applications**, select the application, and use **Dashboard** for its views or **Content** for the resources behind them.

An application can contain several dashboards. See [Using Application Dashboards](using-application-dashboards.md). Applications belong to the current organization; users still need the relevant permissions to view or manage their contents, and assigning a resource to an application grants no additional access.

Content counts show the size of each resource category. **0** means it is empty. A dash means the count is unavailable, for example because access is missing or the category could not be loaded.

When retiring an application, review [Deleting an Application](deleting-an-application.md) first: deletion also removes its associated resources.
