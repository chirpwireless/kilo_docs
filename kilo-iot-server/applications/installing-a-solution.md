---
description: "Step through the Kilo install screen, choose the 24-hour history option, and open your new application with devices, rules, and alarms running."
---

# How do I install a solution?

Installing a solution turns a ready-made application from the Kilo catalog into your own working application. It arrives already set up, so you do not set anything up first. If you like it, you buy the devices listed on the install screen and swap the emulator devices for them. Everything else is already in place. This guide walks through every element of the install screen and what happens after you press the button.

## How do I open the install screen?

1. In the left sidebar, select **Applications**, then the **Solutions** tab.
2. Select **Preview** on the solution you want.
3. Select **Use this solution** in the top-right corner of the preview.

The page title becomes **Install** followed by the solution name, with the solution's description under it. A back arrow returns you to the preview.

<figure><img src="../../.gitbook/assets/kilo-solutions-install.jpg" alt="The Install Building Monitoring screen with a What will be created card, a Devices card, a Data source card with a Backfill 24h of history toggle, and Cancel and Install solution buttons"><figcaption><p>The install screen for a demo solution. Backfill is switched on by default.</p></figcaption></figure>

## What does each card on the install screen mean?

* **What will be created.** Four tiles count what you will get: **Virtual devices** (the emulator devices that send sample readings), **rules** (instructions that react to readings), **alarm rules** (the alarms; with escalation, so if nobody reacts the alarm can repeat or go to someone else), and **widgets** (the charts and controls on the dashboard). Nothing is a surprise.
* **Devices.** The heading says: to run this application on real data later, you will need these devices. It lists each virtual device by name, so you can see which real devices you need to buy.
* **Data source: Emulator connector.** Explains that the emulator devices send realistic readings, so the dashboard goes live instantly with no hardware, and that you can swap any device to a real connector later.
* **The Backfill toggle.** A switch labeled **Backfill 24h of history, so charts aren't empty on first open**. It fills the charts with a day of made-up past readings so they are not empty. It is on by default. Switch it off if you want to start with empty charts.
* **The footnote.** Under the buttons, a line confirms that installing creates an application based on this solution.

### Should I leave the Backfill switch on?

Usually yes. The emulator devices send readings the moment they exist. With the switch on, Kilo also creates a day of made-up past readings, so trend charts have something to show on your first visit. Switch it off if you prefer charts that start from now. If the history cannot be generated, the install still succeeds; only the past readings are missing.

## What happens when I select Install solution?

Select **Install solution**. The button changes to **Installing…** and is disabled while Kilo works. Kilo creates the following, in your organization and in this order:

1. **An application** named and described after the solution.
2. **The emulator devices**, with their readings already mapped.
3. **The alarms**, with their escalation (if nobody reacts, an alarm can repeat or go to someone else).
4. **The rules**, switched on and running.
5. **The dashboards**, in a folder named after the application, with every widget connected to your new devices.

You get a complete application, not a to-do list. Select **Cancel** instead if you change your mind; nothing has been created at that point.

Installing runs in the background. You watch its progress on the install screen, where the button shows **Installing…**. If you leave the page, Kilo keeps track of the install in this browser. Come back to the install screen of the same solution and it picks the install up again. If it takes more than a minute and a half, you will see **Still installing, this can take a while — you can leave this page and check later.**

## What do I see when the install finishes?

A confirmation dialog appears with the solution name in quotes followed by "installed". It reads: the emulator devices, rules, alarms, and the dashboard are ready; the emulator devices are already sending readings, so open the dashboard to see it live.

<figure><img src="../../.gitbook/assets/kilo-solutions-install-success.jpg" alt="The install screen dimmed behind a dialog with a green check, the message that Building Monitoring is installed, and a Go to application button"><figcaption><p>The confirmation dialog after a successful install in a demo organization.</p></figcaption></figure>

Select **Go to application**. You land on the new application's page, which opens on the **Dashboard** tab.

<figure><img src="../../.gitbook/assets/kilo-solutions-installed-dashboard.jpg" alt="The new Building Monitoring application page with Dashboard and Content tabs, an Indoor CO2 gauge, an Air Quality Trend chart, Site Devices with Emulator badges, and a Publish application button"><figcaption><p>The freshly installed application. Values appear as the emulated devices report; the chart fills in as readings arrive.</p></figcaption></figure>

From now on it is a normal application under **Applications → My applications**, and the new dashboard also appears in the **Dashboards** section of the left sidebar, in a folder named after the application. To learn every part of this page, see [How do I use the My applications tab?](my-applications-tab.md)

## Who receives the alarms?

You do. Whatever recipients the solution was prepared with, the alarms in your copy are addressed to the person who installed it. Review them in [Alarm](../alarm/README.md) and add colleagues or channels before you rely on them.

## Why was my installation refused?

Kilo checks the installation against your plan before it creates anything, and it tells you what went wrong.

* **A plan limit.** A solution counts toward your devices, dashboards, and rules limits, just like things you create by hand. If the solution would exceed one, the install is refused with a message that names the limit, shown as **Installation failed** followed by the reason. Nothing is created. To check your limits, open **Settings → Subscription** in the sidebar ([Subscription](../settings/subscription.md)). Remove something you no longer need or upgrade your plan, then try again. Emulator devices count as devices, so a solution with many of them needs room for all of them.
* **Missing permissions.** You need permission to create each kind of item the solution contains (devices, dashboards, rules, alarms). The message names the missing one.
* **Another install is already running.** If the same solution is being installed in your organization, or an earlier attempt needs cleanup, you will see this message (the "operator" in it means Kilo support): *Another installation of this solution is already running in your organization, or a failed one needs an operator to clean it up before you can retry.* Use **Go to my applications** to check. If the message keeps showing up, contact Kilo support.
* **The catalog is being updated.** *The catalog is being updated — please retry in a minute.*
* **The install was canceled.** *Installation cancelled* followed by the reason, with a retry button.

If something fails halfway, Kilo removes what it had created, so you are not left with half an application. In the rare case that it cannot clean up, you will see *Installation failed and needs manual cleanup — contact Kilo support. This solution cannot be reinstalled from here.*

## What should I do after installing?

1. Open the dashboard and watch the emulator devices report.
2. Read the rule and alarm so you understand what the setup does. The **Content** tab of the application explains each one.
3. When your real sensors are ready, [swap the emulator devices for real ones](swapping-the-emulator-for-real-devices.md).

If you do not like the result, delete the application. Because an installed application is an ordinary application, [deleting it](deleting-an-application.md) never affects the solution in the catalog or anyone else's copy.
