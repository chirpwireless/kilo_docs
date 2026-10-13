---
description: "Not sure what you can automate? Preview a ready-made Kilo solution, install it, see how it works, then buy the devices and swap them in."
---

# What are applications and solutions in Kilo?

Not sure what you can automate with Kilo, or where to even start? That is what solutions are for.

Open **Applications** in the left sidebar, then the **Solutions** tab. You see what we have prepared for you: monitoring leaks in a building, security monitoring with video cameras, asset tracking, people counting in a store or a mall, and more. We add new ones with every release.

Every one of these normally comes with a lot of setup. Dashboards to configure, rules to set, alerts to define, devices to add. If you don't even know what can be automated, that can feel intimidating.

So we did it for you. Select **Preview** on a solution, then **Use this solution**, then **Install solution** on the next screen. The solution lands in your workspace (your organization in Kilo) with emulator devices, which are sample devices that send realistic readings. You see what the dashboards will look like, how the rules are configured, and how the alerts work. Everything is already set up, and you can still change all of it to your liking. Alarms notify you by default; add colleagues or other ways to be notified (email, SMS, push) before you rely on them. Because you start from something that works, you quickly learn how it all fits together and where everything is.

Then you think, "This is exactly what I need." The solution even tells you which devices to buy. Order them, and when they arrive, swap the emulator devices for the real ones. You can do the swap yourself, or ask [Kilo's AI chat](../ai-assistant/README.md) to connect them for you. You only need each device's identifiers, which are usually printed on its label or in its manual (a device ID such as an EUI, or a topic). Once they are in, your use case runs on real data. [How do I swap the emulator for real devices?](swapping-the-emulator-for-real-devices.md)

<figure><img src="../../.gitbook/assets/kilo-solutions-catalog.jpg" alt="The Kilo Solutions tab with six solution cards: Fire &amp; Gas Safety, Smart Building, Cold Chain, Water &amp; Leak, Energy monitoring, and Asset tracking, each showing counts of virtual devices, rules, widgets, and alarms"><figcaption><p>Each solution card shows what an install will create.</p></figcaption></figure>

## What is the difference between a solution and an application?

A **solution** is the ready-made template Kilo prepared. An **application** is what you get in your workspace after you install it, with its devices, dashboards, rules, and alarms together in one place. You can also create your own applications from scratch. Once a solution is installed it is an ordinary application, and you can change anything in it. [What are solutions and applications in more detail?](what-are-solutions-and-applications.md)

## What do the words in Kilo mean?

* **Dashboard:** a screen of live charts and numbers.
* **Device:** a sensor or other piece of hardware that sends readings to Kilo.
* **Emulator device:** a sample device that sends realistic readings. Some screens call it a virtual device.
* **Rule:** an instruction that reacts to readings, for example "if it gets too warm, raise an alarm".
* **Alarm:** the notification that tells you something needs attention. A rule decides when it fires.
* **Connector:** the link that brings a real device's readings into Kilo, for example LoRaWAN or MQTT.
* **Organization:** your Kilo workspace.

## How do I get started?

1. Open **Applications** in the left sidebar and stay on the **Solutions** tab.
2. [Browse and preview](browsing-and-previewing-solutions.md) the solutions until one looks like your problem.
3. [Install it](installing-a-solution.md): select **Preview**, then **Use this solution**, then **Install solution**. The install screen shows what will be created and which devices you need.
4. Buy those devices. When they arrive, [swap the emulator devices for the real ones](swapping-the-emulator-for-real-devices.md).

## Where do I find each part?

| You want to | Go to |
|---|---|
| Get the vocabulary straight: application, solution, use case | [What are solutions and applications in Kilo?](what-are-solutions-and-applications.md) |
| Look through ready-made solutions | [How do I browse and preview solutions?](browsing-and-previewing-solutions.md) |
| Put a solution to work | [How do I install a solution?](installing-a-solution.md) |
| Learn every part of the My applications tab | [How do I use the My applications tab?](my-applications-tab.md) |
| Replace virtual devices with your own | [How do I swap the Emulator for real devices?](swapping-the-emulator-for-real-devices.md) |
| Learn why Kilo can be both flexible and easy | [Is Kilo powerful and easy to use?](why-kilo-is-powerful-and-easy.md) |
| Create your own application | [How do I create an application in Kilo?](creating-an-application.md) |
| Remove an application | [What happens when I delete an application?](deleting-an-application.md) |

**For the team that publishes the catalog**

| You want to | Go to |
|---|---|
| See how a solution is published to the catalog | [How do I publish a solution?](publishing-a-solution.md) |
| Understand how problems and industries are organized | [What are use cases in Kilo?](use-cases.md) |

## Can I build my own application?

Yes. Maybe none of the solutions fits, or you already have devices and want everything for one job in one place. This takes more work than installing a solution. If you are new, install one first and look at how it is set up.

1. [Create an application](creating-an-application.md) and give it a name, such as Building Monitoring.
2. Set up its devices, dashboards, rules, and alarms the way you normally do.
3. [Add them to the application](organizing-content.md) with each item's **Application** field.
4. Open **Applications → My applications**, select your application, and use **Dashboard** for its views or **Content** for the devices, rules, and alarms behind them. A new application is empty until you add things to it.

An application can have several dashboards; see [Using Application Dashboards](using-application-dashboards.md). Applications belong to your current organization. You still need the right permissions to see or change what is inside, and adding something to an application gives nobody extra access.

Before you delete an application, read [Deleting an Application](deleting-an-application.md): deleting it also deletes what is inside.

If you do not see **Applications** in the sidebar, your plan may not include it; see [Subscription](../settings/subscription.md).
