---
description: Read a device's reception status, pipeline, and event feed to find out why telemetry isn't arriving.
---

# Device Diagnostics

Commissioning a sensor is the moment when a deployment is most likely to go quiet. The device is registered, the profile looks right, the mapping table is filled in — and nothing appears on the dashboard. The question that follows is always the same: is the hardware asleep, is the radio out of range, is the payload arriving but landing nowhere, or is everything working and the device simply hasn't reached its next scheduled report?

Device diagnostics answers that question directly. Instead of leaving you to infer the state of the integration from an empty chart, the platform reports what it has actually seen from the device — whether a message reached the server, whether the keys inside it matched your sensors, and whether the resulting values were written to history. Each unhealthy state comes with the specific thing to check and a shortcut to the screen where you fix it.

## Why it matters

Without diagnostics, a silent device is indistinguishable from a misconfigured one. An engineer commissioning fifty cold chain probes across a distribution center has no way to tell the difference between a probe that is out of gateway range and a probe that is transmitting perfectly into a mapping that was never completed. Both look like an empty dashboard, and both cost a site visit.

Diagnostics separates those cases at the source. A probe that has joined the network but sent no uplinks is a radio or scheduling question. A probe whose payload is decoding into keys that were never mapped is a two-minute fix from your desk. Knowing which one you are looking at is the whole point.

## Where to find it

Open the device and switch to the **Connection** tab. Diagnostics appears alongside the connection settings, in three blocks:

| Block | What it answers |
|---|---|
| **Reception status** | Is data arriving right now, and is it being kept? |
| **Pipeline** | Over the recent window, how far did messages get — routed, mapped, stored? |
| **Event feed** | Message by message, what happened and when? |

Read them in that order. Reception status gives you the verdict, Pipeline gives you the pattern, and the Event feed gives you the individual evidence.

## Reception status

The reception status block resolves the device's whole ingestion path into one state, with a short line of supporting detail beneath it. A **RECEPTION** heading marks the block, and a **LIVE** or **NO DATA** indicator (shown as **Live** or **Idle** in compact form) reflects whether traffic is currently flowing.

While the block is loading you see **Loading reception status…**. If the diagnostic data cannot be retrieved, the block reads **Diagnostics unavailable** — the device itself is unaffected; retry the tab.

### The states, and what to do about each

| Status | What it means | Your next step |
|---|---|---|
| **Receiving & storing** | The healthy state. The supporting line reads `{{count}} sensors mapped · last value {{last}}`. Messages arrive, keys match your sensors, and values are being written to history. | Nothing. If the line also says `{{count}} more keys available, unmapped`, the device is sending fields you have not mapped yet — worth reviewing if you want them on dashboards. |
| **Sending data — set up mapping to keep it** | The device is transmitting and its payload decodes cleanly — `{{count}} keys decoded · none mapped yet` — but no key is connected to a sensor, so nothing is retained. | Use **Set up mapping** or **Map a key** to open the mapping and connect at least one incoming key to a sensor. Values start accumulating from the next message onward. |
| **Data arrives but nothing is stored** | *"Data is arriving but nothing is stored yet."* Messages reach the platform, but no value survives to history — typically a mapping gap or a decoder producing different keys than the ones your sensors expect. | Click **Fix mapping**. Compare the keys in the Event feed against your mapped sensors. If the keys look wrong rather than merely unmapped, check the payload decoder on this tab. |
| **Hasn't reported — device looks offline** | *"Device was reporting but has gone quiet."* The device worked before and has stopped. The supporting line — `Expected every {{interval}} {{unit}} · last seen {{last}}` — tells you the schedule the platform is measuring against. | This is field work: check the device power or battery, confirm it is still within range of a gateway, and make sure the sending schedule has not changed. If the device's real schedule changed, correct **Data sending interval** on this tab so it is not flagged unnecessarily. |
| **Waiting for first data** / **Waiting for the first uplink** / **No uplinks received yet** | The device record exists but the platform has never received anything from it. | Give it one reporting interval to transmit. If the window passes, work through **WHAT TO CHECK** below. |
| **Reached network — waiting for data** | `Joined the network · no uplinks yet`. For a LoRaWAN device this is good news: credentials are correct and the radio link works. The device has simply not sent a payload yet. | Wait one reporting interval. If it stays here, the device is joining but not transmitting — check its sending schedule and power state. |

One more supporting line appears when a device is configured but idle: `{{count}} sensors configured · 0 receiving values`. Your sensors exist, but none of them is being fed. Treat it the same way as *Data arrives but nothing is stored* — the mapping is where to look.

### WHAT TO CHECK and WHILE YOU WAIT

Alongside an unhealthy or pending status, the platform lists the relevant checks under a **WHAT TO CHECK** heading, and — when the state is simply early — the shorter **WHILE YOU WAIT** list. The items you will see include:

* Confirm the device is powered on and transmitting
* Check the device power or battery
* Make sure it is within range of a gateway / Confirm it is still within range of a gateway
* Check that AppKey and DevEUI match the device
* Check the payload decoder matches this device
* Check that the connection settings are correct
* Confirm the device is sending on its schedule
* Make sure the sending schedule has not changed
* Give it one reporting interval to transmit
* Map at least one incoming key to a sensor

The list is state-aware, so it is worth reading rather than skimming: a device that has joined the network will not be asked about AppKey and DevEUI, because that question is already answered.

Every item points at a setting you control. AppKey, DevEUI, the payload decoder, and the connection settings all live on this same **Connection** tab. The sending schedule is set on the device itself and mirrored into **Data sending interval** — see [Device Management](device-management.md). Mapping lives on the **Metrics** tab, and the **Fix**, **Fix mapping**, **Set up mapping**, and **Map a key** actions take you there directly.

### MQTT devices

MQTT integrations have their own reception states, because there are two links to verify — the platform's connection to your broker, and the device's publishing behavior on it. Two fields frame the diagnosis: **Expected topic** shows the topic the device record is configured for, and **Published to** shows the topic a message actually arrived on.

| What you see | What it means | Your next step |
|---|---|---|
| **Broker connected** — *"Your broker is reachable and Kilo is subscribed"* | The connector side is healthy. | Move on to the device side. |
| **Connecting to your broker…** | The subscription is being established. | Give it a moment. If it persists, verify the connector settings. |
| **Kilo can't reach your broker** — *"Check the broker URL and credentials in the connector settings."* | The platform cannot establish the subscription, so no device on this connector can deliver data. | Open the connector and correct the broker URL and credentials. See [MQTT Troubleshooting](../connectors/mqtt/troubleshooting.md). |
| **Waiting for the device to publish to the Kilo broker…** | The subscription is live; this device has not published yet. | Wait one reporting interval, then confirm the device is running and pointed at the right broker. |
| **A message arrived on a topic this device isn't set up for** — *"Update the topic above, or change where the device publishes."* | A publish reached the platform but its topic does not match this device record. Compare **Published to** against **Expected topic**. | Correct the topic on this tab to match what the device actually publishes, or reconfigure the device to publish to the expected topic. |
| **No publish topic is configured yet — set one above.** | The device record has no topic to match against. | Set the publish topic on this tab. |

When the device is publishing correctly, the block confirms the conditions that had to be true for the message to land: *"The device publishes to the expected topic"*, *"The payload is valid JSON"*, *"The device ID resolves as configured"*, and — for devices using platform-issued credentials — *"It is connected with its generated MQTT credentials"*.

## Pipeline

The Pipeline block counts how far messages got over the recent period, broken down into **Routed**, **Mapped**, and **Stored**.

These counts are a rolling recent window, not a lifetime total. The window is stated in the block's own label — **Stats over the last {{days}} days** — so read that label before drawing conclusions. A device that was misconfigured last quarter and fixed last week will show clean counts here; the window has moved past the incident.

Read the three numbers as a funnel:

* **Routed high, Mapped zero** — messages are arriving and being matched to this device, but no key is connected to a sensor. Mapping is the fix.
* **Mapped high, Stored zero** — keys matched but values did not persist. Check the mapping rows and the sensor types they point at.
* **All three zero** — nothing has reached this device record at all. This is a reception problem, not a mapping problem; go back to the reception status block.
* **All three tracking together** — the integration is healthy.

If the block reads **No pipeline data**, the platform has nothing to count for this device in the current window — the same conclusion as all three at zero.

## Event feed

The Event feed is the message-by-message record behind the summary. Where the pipeline counts tell you *how often*, the feed tells you *which message, when, and why*.

| Column | What it shows |
|---|---|
| **Time** | When the platform processed the event |
| **Stage** | Which step of the pipeline the row describes — Routed, Mapped, or Stored |
| **Outcome** | Whether that step succeeded — OK, Skipped, or Error |
| **Detail** | The specifics for that step |

Before any data exists you see **No events yet** and *"Events will appear here once the device sends data."* — expected for a device that has not transmitted.

The feed loads in pages. Click **Load more** to fetch the next page; it shows **Loading…** while fetching and **All records loaded** once you have reached the end of the available history. Individual rows offer **Details** to expand the full context of an event and **Hide** to collapse it again. **See reception status** takes you back to the summary block at the top.

### What these statuses mean

The feed includes its own legend under the heading **What these statuses mean**:

| Term | Meaning |
|---|---|
| **Routed** | The message reached the platform and was matched to this device. |
| **Mapped** | Incoming keys were matched to your configured sensors. |
| **Stored** | Sensor values were saved to history. |
| **OK** | This step completed successfully. |
| **Skipped** | Intentionally not processed (for example, no matching mapping or an unexpected topic). Not necessarily an error. |
| **Error** | This step failed and needs attention. |

**Skipped is the row that misleads people.** It is not a failure — it is the platform telling you it made a deliberate decision. A `Mapped / Skipped` row means a key arrived that no sensor claims; if that key matters to you, map it. If it does not, the row is correct behavior and you can ignore it. An `Error` row is the opposite: something broke and the message did not complete its step. Expand it with **Details** and act on what it reports.

## Reading the feed to fix a device

A practical sequence when a device is not delivering data:

1. Open the device and go to the **Connection** tab.
2. Read the reception status. If it names a specific problem — unmapped keys, an unexpected topic, an unreachable broker — use the action button next to it (**Fix**, **Fix mapping**, **Set up mapping**, **Map a key**) and resolve it there.
3. If the status says the device is waiting or quiet, check the supporting line for the interval and last-seen time, then work through **WHAT TO CHECK**.
4. Look at the Pipeline counts to see where in the funnel messages stop, keeping the window in the **Stats over the last {{days}} days** label in mind.
5. Open the Event feed and find the most recent rows at that stage. Expand a row with **Details** to see exactly which key or topic was involved.
6. Apply the fix, then wait for one reporting interval and re-read the block. Values are stored from the next qualifying message onward — earlier messages are not reprocessed, so a fresh transmission is what confirms the repair.

Connector keys appear in the mapping automatically once the device transmits — you do not need to type them in. That is why the order matters: get the device transmitting first, then map what actually arrived.

## Connector diagnostics

Diagnostics also exists one level up. Open a connector and you will find a **Connector diagnostics** area covering every device on it, with a **Source health** summary and two tabs:

* **Incoming** — what is arriving on the connector, with a `{{count}} seen` figure.
* **Activity** — the connector's recent event history. Before any traffic, it reads **No activity yet**. If the diagnostic data cannot be loaded, it reads **Diagnostics unavailable**.

A **Connect device** action lets you register a device against the connector from here.

Use connector diagnostics when *several* devices are silent at once — that pattern usually points at the connector or the broker, not the hardware. Use device diagnostics when one device is silent while its neighbors are fine. Connector diagnostics is scoped to MQTT connectors; other connector types show their settings only.

For broker-side, TLS, authentication, and topic-routing problems, see [MQTT Troubleshooting](../connectors/mqtt/troubleshooting.md).

## Tips

* **Set Data sending interval honestly.** Diagnostics measures "gone quiet" against the interval you entered. A probe that reports once a day but is configured as hourly will be flagged offline twenty-three times a day, and a genuinely dead sensor configured as monthly will stay green for weeks.
* **Check the reception status before opening a ticket.** *Sending data — set up mapping to keep it* is a desk fix. *Hasn't reported — device looks offline* is a site visit. The distinction is worth thirty seconds.
* **Watch the pipeline window during commissioning.** The counts cover the days named in the **Stats over the last {{days}} days** label, so a device fixed an hour ago still carries its failed messages in the count. Judge a fresh fix by the newest Event feed rows, not by the totals.
* **Unmapped keys are an opportunity, not an error.** When a healthy device reports `{{count}} more keys available, unmapped`, the hardware is sending measurements you are not yet using — a vibration sensor may be reporting temperature alongside it, at no extra cost in battery or airtime.
* **Diagnostics complements the Logs tab, it does not replace it.** Diagnostics explains *why* processing went the way it did. The Logs tab shows the raw readings themselves. See [Device Management](device-management.md).
