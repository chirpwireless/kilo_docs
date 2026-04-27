# Overview

The Overview page is the first screen you see after logging into the Kilo IoT Server. It provides a high-level summary of your deployment — device counts, gateway health, and recent notifications — so you can assess operational status at a glance without navigating into any specific section.

## Where to find it

Click **Overview** in the sidebar. The `/overview` route loads automatically when you log in or navigate to the server root.

## Page layout

The Overview page is organized into sections, each designed to surface a different layer of deployment health.

### Header: "My board" and Live Data

At the top of the page, the header displays the title **My board** alongside a **Live Data** button.

The Live Data button is an interactive icon with the tooltip **"New data is automatically displayed"**. Clicking it triggers a manual refresh of the overview data. This is useful when you want to confirm that the latest readings are reflected on the page without waiting for the next automatic update cycle.

### General info cards

Below the header, a **General info** section displays summary cards that provide a quick pulse of your deployment. The card row scrolls horizontally if more cards are present than the screen width accommodates.

Cards you will see include:

- **Devices** — Shows the total count of registered devices. Warning indicators appear if devices are not connected or not verified. The card links to the **Devices** page for the full list. An add button in the card corner opens the device registration flow directly.

- **Gateways** — Shows the total count of registered gateways. Warning indicators flag gateways that are offline or inactive. The card links to the **Gateways** page. An add button opens the gateway registration flow.

Each card serves as both a status indicator and a quick navigation shortcut. The warning counts (not connected, not verified for devices; offline, inactive for gateways) help you spot issues without opening a dedicated management page.

### Notifications

Below the summary cards, a **Notifications** panel shows recent notification cards — a summary of the latest alerts and system events without needing to open the full alarm inbox.

### Add device

At the bottom of the page, an **Add Device** widget provides a quick entry point to register new devices or gateways. This mirrors the add buttons on the summary cards above but offers a larger, more visible starting point — especially useful when you're first setting up a deployment and the overview is still mostly empty.

## What to expect when data is missing

When your deployment is new and no devices or gateways have been registered yet:

- The **Devices** and **Gateways** cards show a count of **0** with no warnings.
- The **Notifications** panel shows no recent events.
- The **Add Device** widget at the bottom is the natural next step.

As you register devices and gateways, the cards populate automatically. Warning indicators appear when devices stop reporting or gateways go offline, giving you immediate visibility into connectivity issues.

## Tips for operations teams

- **Use the Overview as a health check.** Before diving into dashboards or specific devices, the Overview tells you whether anything needs attention right now — device disconnections, gateway outages, or new alarms. Total counts with warning indicators give you an immediate read on deployment state.
- **Click the Live Data button after deploying changes.** When you've just registered a new device or reconfigured a gateway, clicking the Live Data button forces a data refresh so you can confirm the change is reflected immediately.

## Related pages

- [Navigating the Interface](getting-started/navigating-the-interface.md) — Full tour of the sidebar and menus.
- [Registering Devices](devices/registering-devices.md) — How to register your first device.
- [Creating Dashboards](dashboards/creating-dashboards.md) — Build custom views beyond the overview.
