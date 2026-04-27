# Your First Deployment

This guide walks you through the simplest LoRaWAN path to getting live data flowing: register a gateway, set up an LNS connector, add a sensor, view its data, build a dashboard, and set up an alarm. Not every Kilo deployment starts with a gateway, but this one does because it covers the LoRaWAN route. Each feature has its own dedicated section later in the documentation — here we're just covering the basics.

**What you'll need:**
- A Kilo IoT account
- A LoRaWAN gateway with its Gateway EUI
- A LoRaWAN sensor (e.g., a door sensor or temperature sensor) with its Device EUI and AppKey

**What you'll have at the end:**
- A gateway online and receiving traffic
- A connector linking your gateway to the server
- A device sending telemetry data
- A dashboard showing live sensor readings
- An alarm rule monitoring a condition and notifying you by email

---

## Step 1: Register a LoRaWAN gateway

The gateway is the radio receiver that picks up signals from your LoRaWAN sensors and forwards them to the server. You need at least one gateway online before any LoRaWAN device can communicate.

The server supports LoRaWAN gateways that use the **Basics Station** protocol. Basics Station connects over an encrypted TLS channel — unlike the legacy UDP Packet Forwarder — which is why the setup involves downloading security certificates. Most modern LoRaWAN gateways support Basics Station; check your gateway's specifications before purchasing.

1. Click **Gateways** in the left sidebar.
2. Click the **Add gateway** button in the top-right corner.
3. Enter a **name** for the gateway (e.g., "Warehouse A Gateway").
4. Select the **region** (frequency band) that matches your gateway hardware and deployment:
   - Usually this matches the band your gateway was sold or configured for
   - **EU868** for most deployments in Europe
   - **US915-0 / US915-1** for deployments in the United States, depending on the network plan
   - **EU433** only if your gateway hardware is specifically built or configured for 433 MHz
   - Other regions are available in the dropdown (AS923, AU915-0, IN865, KR920, RU864, etc.)
5. Enter the **Gateway EUI** — a 16-character identifier typically printed on a label on the gateway hardware.
6. Click **Next**.

### Download certificates and configure your gateway

After submitting the gateway details, the next screen shows:

7. The **LNS address** — this is the server URL your gateway needs to connect to. Click the **copy icon** to copy it to your clipboard.
8. A **Download certs.zip** button — click it to download the certificate bundle that authenticates your gateway's connection.
9. Click **Continue**.

Now open your gateway's management interface and configure it with:
- The **LNS address** you copied
- The **certificates** from the downloaded zip file

Depending on the gateway model, this may be a local web interface, a device IP on your network, or a vendor-managed portal. The exact configuration steps depend on your gateway model — refer to the manufacturer's documentation. Once the gateway connects, its status in the Gateways list will change to **online**. This may take a couple of minutes.

> **Tip:** For initial testing, place the gateway and sensor within the same building. LoRaWAN signal covers 2–5 km in urban environments and up to 15 km in open areas.

---

## Step 2: Set up an LNS connector

Before adding devices, you need a connector. A connector establishes the protocol-level connection that enables the server to accept data from a specific device type.

1. Click **Connectors** in the left sidebar.
2. Click **Add connector** (or the **Add connector** button on the empty state).
3. In the dialog, select **LNS** from the **Connector type** dropdown.
4. Click **Add**.

The LNS connector is created and appears in your connectors table. No additional configuration is needed — the server handles the LoRaWAN network integration automatically.

---

## Step 3: Add your first device

With the gateway online and the connector in place, you can register your first device — creating a Digital Twin that tracks the physical sensor's state, readings, and history.

1. In the **Connectors** page, click on your **LNS connector** row to open it.
2. Click the **Connected Devices** tab.
3. Click the **Add device** button.

### Create the device profile

The dialog opens in Add mode, showing only the Device info section:

4. Enter a **device name** (e.g., "Server Room Door Sensor").
5. Optionally, upload a **device photo** by dragging an image or clicking the upload area.
6. Click **Save**.

The device profile is created and the dialog transitions to edit mode with all four tabs visible.

### Configure the connection

7. Click the **Connection** tab.
8. Select your **connector** from the dropdown.
9. Under **"Use device profile templates"**, check the box if your device brand and model are in the catalog:
   - Select the **Brand** (e.g., Dragino, Milesight, Browan).
   - Select the **Model** — the list filters based on brand.
   - The **Profile** (band and device class) populates automatically from the template.
10. If your device is not in the catalog, leave the checkbox unchecked and enter credentials manually:
    - **Device EUI** — 16 hexadecimal characters, typically printed on the device.
    - **AppKey** — 32 hexadecimal characters, provided with the device.
11. Optionally, click the **Metrics** tab to select sensor templates that define what parameters the device reports.
12. Click **Save**.

The device appears in the Connected Devices list. Once it performs a LoRaWAN join through your gateway (which may take a few seconds to a few minutes depending on the device's transmission interval), its data will begin flowing into the server.

---

## Step 4: View your data

Once the device has sent its first reading:

1. Click a **device row** in the Connected Devices list (or find it on the **Devices** page in the sidebar).
2. The device dialog opens to the **Device Info** tab. Click the **Metrics** tab to see sensor data.
3. The Metrics tab shows the sensor templates attached to the device and their current readings.

You can also view device data through the **Dashboards** section by adding widgets — which is what we'll do next.

---

## Step 5: Build a dashboard

Dashboards let you combine data from multiple devices onto a single screen.

1. Click **Dashboards** in the left sidebar.
2. Click **Add dashboard**.
3. In the modal:
   - Choose an **icon** for the dashboard (default is a home icon).
   - Enter a **name** (e.g., "Server Room Monitoring").
   - Optionally select a **folder** to organize it, or leave it at the top level.
   - Optionally add a **description**.
4. Click **Save**.

### Adding a widget

5. On the new dashboard, click **Add widget**.
6. **Step 1 — Choose a device:** Select the device you want to display data from.
7. **Step 2 — Choose a metric:** Select which parameter to show (e.g., door status, temperature, battery). A live preview of the widget appears so you can see how it will look.
8. Click **Choose** to add it to the dashboard.

Repeat to add more widgets for different devices or parameters. You can **drag** widgets to reposition them and **resize** them by pulling their edges.

---

## Step 6: Set up an alarm

Now let's have the server notify you when something needs attention — for example, when a door opens.

1. Click **Alarm** in the left sidebar.
2. Click the **Add alarm rule** button in the top-right corner.
3. In the alarm rule modal, fill in:
   - **Name** — A descriptive label (e.g., "Server Room Door Opened").
   - **Title** — The subject line for the notification (e.g., "Door Open Alert").
   - **Body** — The message content (e.g., "The server room door has been opened.").
   - **Severity** — Choose from **Critical**, **High**, **Medium**, **Low**, or **Info** depending on urgency.

### Configure escalation

4. Under **Escalation steps**, the first step is pre-configured with your user account and email.
   - Select the **notification channel** (Email is the default; SMS and Push are also available if configured).
   - To add escalation: click **Add step** to define what happens if the alarm isn't acknowledged — for example, notify a second person after 15 minutes.
   - Set the **delay** between escalation steps.
5. Click **Save**.

The alarm rule is now active. When the condition is met, an alarm appears in **Alarm → Inbox** and a notification is sent through the configured channels.

---

## What's next

You now have the basics in place for a LoRaWAN deployment: a gateway providing coverage, a connector linking the network, a device reporting data, a dashboard for visualization, and an alarm rule for monitoring.

From here, you can:

- **Add more devices** — Register additional sensors through your LNS connector, set up a Tracker connector for vehicle trackers, or use the MQTT connector for PLCs, energy meters, and any MQTT-capable hardware
- **Build complex automations** — Explore the Rules Engine with CEL expressions, decision tables, and multi-device rules
- **Invite team members** — Set up Organizations and Access Control for multi-user collaboration
- **Integrate with external systems** — Generate API keys for programmatic access
