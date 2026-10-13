---
description: "Learn what a solution, an application, and a use case are in Kilo and how they differ: a solution is the template, your application is the result."
---

# What are solutions and applications in Kilo?

Three words come up all the time in Kilo: solution, application, and use case. They sound alike, but each one means something different. Here they are in plain words.

## What is a solution?

A **solution** is a ready-made setup that Kilo prepared for one specific problem, like monitoring leaks in a building or counting people in a store. It already has the devices, dashboard, rules, and alerts a person would otherwise have to configure by hand. You find solutions on the **Solutions** tab, look at them, and install the ones you like.

## What is an application?

An **application** is what you have in your workspace after you install a solution: its devices, dashboards, rules, and alerts, all together in one place, working. You can also create an application yourself and fill it with your own devices and dashboards. Either way, it is yours to change.

## What is the difference between a solution and an application?

Think of a recipe and the dish you cook from it. The solution is the recipe, and the application is your dish. You choose a recipe, press **Install solution**, and get a dish of your own.

* **After you install, they are the same kind of thing.** An application you built by hand and one you installed from a solution work the same way. The installed one was just set up for you, and it keeps its emulator devices until you swap them for real ones.

## Where do I find solutions and applications in Kilo?

Everything lives on one page. In the left sidebar, select **Applications**. The page is titled **Applications and solutions**, and a row of tabs sits directly under the title.

<figure><img src="../../.gitbook/assets/kilo-solutions-catalog.jpg" alt="The Applications page in Kilo on the Solutions tab, with six solution cards: Fire &amp; Gas Safety, Smart Building, Cold Chain, Water &amp; Leak, Energy monitoring, and Asset tracking below an intro paragraph"><figcaption><p>The Applications and solutions page, opened on the Solutions tab of a demo organization. The left sidebar shows the Applications item selected.</p></figcaption></figure>

| Tab | What it is for | Who sees it |
|---|---|---|
| **Solutions** | The catalog of ready-made solutions provided by Kilo. You preview them and install them here. | Every organization member whose plan includes Applications. |
| **My applications** | Every application in your organization, both the ones you built and the ones you installed. | Every organization member whose plan includes Applications. |
| **Use cases** | The list of problems a solution can address, with industries. | Only Kilo, which prepares the catalog. You will not see this tab. |

Each tab has its own guide:

* [How do I browse and preview solutions?](browsing-and-previewing-solutions.md)
* [How do I install a solution?](installing-a-solution.md)
* [How do I use the My applications tab?](my-applications-tab.md)

## Who can do what?

| Role | What they can do |
|---|---|
| Any organization member with the right permissions | Create their own applications. Browse the solutions in the catalog, preview them, and install them. |
| Kilo (the organization that publishes the catalog) | Everything above, plus publish an application as a solution, update the publication, and unpublish it. |

Kilo prepares and publishes the solutions in the catalog, so you install solutions and do not publish them. Each solution is a complete, ready-made application for one use case, for example leak protection or tank level monitoring. New solutions are added with every release.

## What is a use case?

A **use case** is the label of the problem a solution solves, such as leak protection, tank level monitoring, or energy saving. One solution can have several use cases, and the same use case can appear in many solutions. For example, the Building Monitoring solution and the IP500 demo Smart Office solution can both cover building problems. Solution cards show a name, a description, and four counters, not the use case labels. Kilo uses use cases to organize the catalog. See [What are use cases in Kilo?](use-cases.md).

## What is inside a solution?

| Part | What you get when you install it |
|---|---|
| Virtual devices | Sample devices that send realistic readings, so the dashboard has something to show right away. In this guide they are called emulator devices. |
| Rules | Instructions that react to the readings, for example "if it gets too warm, raise an alarm". They are already running. |
| Alarms | Notifications that tell you when something needs attention, set up so that you are the person who is notified. |
| Dashboards | A ready-made dashboard whose charts and controls are already connected to the devices. |

## What happens if a solution is removed or I delete my application?

* **Unpublishing is safe.** If a solution is withdrawn from the catalog, it disappears from the list, but the applications people already installed keep working.
* **Deleting your application is safe for the catalog.** It removes only your copy and never the solution in the catalog. It does remove what is inside your copy; see [What happens when I delete an application?](deleting-an-application.md)

If you do not see **Applications** in the sidebar, your plan may not include it; see [Subscription](../settings/subscription.md).


Next: [browse and preview solutions](browsing-and-previewing-solutions.md).
