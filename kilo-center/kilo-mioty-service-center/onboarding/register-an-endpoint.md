---
description: Register a MIOTY endpoint in KiloCenter — required fields (EUI, network key, profile) and how a base station attaches.
---

# Register an Endpoint

Registering an **endpoint** gives a physical MIOTY sensor or meter its identity in Kilo Center's network. The service center can then associate arriving messages with that device and send downlinks when its radio class supports them. With communication established, your application can use the messages through the [integration interfaces](../integrations/README.md).

Have the identifiers, network key, and device profile information that match the physical endpoint ready. Complete [Connect a Base Station](connect-a-base-station.md) before testing traffic. Registration creates the record; [receiving an uplink](verify-the-first-uplink.md) verifies that the device can actually communicate through the installation.

### Goal

Create an endpoint in KiloCenter so it can be attached by a base station and exchange traffic.

### Prerequisites

* KC-Core, KC-Gateway, and KC-Web running
* At least one base station connected (see Connect a Base Station)

### Required Fields

| Field in KC-Web | API field | Format | Description |
| --- | --- | --- | --- |
| **End Point EUI** | `epEui` | 16 hex characters (8 bytes) | Unique endpoint identifier. Must match the hardware EUI. |
| **Name** | `name` | Free text | Friendly name for the endpoint. |
| **Short Address (ShAddr)** | `shAddr` | 4 hex characters, nonzero (`0001` to `FFFF`) | Short address assigned to the endpoint during device provisioning. |
| **Last Packet Counter** | `lastPacketCnt` | Whole number, 0 to 4294967295 | The last uplink counter the endpoint used. Enter `0` for a new device. |
| **Attach Counter** | `attachCnt` | Whole number, 0 to 4294967295 | The endpoint's attachment counter. Enter `0` for a new device. |
| **Network Key** | `nwkSnKey` | 32 hex characters (16 bytes) | Network session key for frame authentication. |

These values come from the endpoint provisioning process. The EUI and network key must match what is programmed into the endpoint hardware. The **Application Key** (32 hex characters, optional) is stored only for your own applications; leave it empty if you do not use one.

### How do I add an end point in KiloCenter?

1. Open KC-Web at `http://localhost/` (container) or `http://localhost:5173` (source dev). You need the **Endpoint Manager** role or **Admin**.
2. Select **End Points** in the sidebar and click **Add End Point** at the top right. The **Add New End Point** dialog opens with the subtitle "Configure a new MIOTY end point with network keys and propagation settings".
3. **Basic Information**
   * **End Point EUI**: 16 hex characters, for example `0123456789ABCDEF`.
   * **Name**: a descriptive label.
4. **Network Configuration**
   * **Short Address (ShAddr)**: four hex characters from `0001` to `FFFF`. `0000` is refused with "Short address cannot be zero".
   * **Type EUI**: optional, 16 hex characters. When you pick a device model under **Blueprint Configuration**, this field is disabled and reads "Type EUI will be resolved from the device model's default blueprint".
5. **Communication Settings**
   * **Bidirectional (BiDi)**: enable it if the endpoint can receive downlinks. The endpoint's class shows as **A (bidirectional)**; without it, **Z (unidirectional)**.
   * **Pre-Attachment (PreAtt)**: attaches the endpoint right away. When it is on, an alert explains that the endpoint "will be immediately propagated to all connected base stations upon creation". A unidirectional endpoint cannot attach over the air, so it always needs this switch.
6. **Advanced MIOTY Settings** (all editions): **Dual Channel Mode**, **DL Repetition**, **Wide Carrier Offset** and **Long DL Interblock Distance**. Hover a switch for its tooltip. Leave them off unless the device's datasheet requires them.
7. **Last Packet Counter** and **Attach Counter**: enter `0` for a new device.
8. **Security Keys**
   * **Network Key**: type or paste 32 hex characters, or click **Generate** to create a random key (copy it to your device before you save). A wrong length shows "Network key must be 32 hexadecimal characters".
   * **Application Key (Optional)**: 32 hex characters when you use one.
   * The eye button (**Show key** / **Hide key**) shows or hides what you typed; **Copy key** copies it.
9. **Blueprint Configuration** (optional): pick the **Manufacturer** and the **Model** so uplinks are decoded automatically ("Select a device model to enable automatic payload decoding via blueprints."). Choose **None (clear manufacturer)** or **None (clear model)** to clear a choice. The pickers read "No manufacturers available" or "No device models for this manufacturer" until you add them under [Blueprints](../operations/blueprints-and-decoders.md).
10. **Device Metadata**: **Carrier Offset (informational, Hz)**, described below.
11. Click **Create End Point** (**Creating...** while it saves). The success message is "End point created". Errors start with "Error creating endpoint:".

### Validate Endpoint State

<figure><img src="../../../.gitbook/assets/kc-endpoints.jpg" alt="The End Points list with the Name, EUI, Attach State, Status and Last Seen columns and two attached end points"><figcaption></figcaption></figure>


A new endpoint appears in the **End Points** list as detached. It becomes attached when you create it with **Pre-Attachment**, when you attach it (the endpoint's **Attach** action or the `AttachEndPoint` API), when an application center registers it with `preAttach`, or when the endpoint attaches over the air.

KiloCenter sends an attached endpoint to every connected base station and to every base station that connects later. An endpoint you detach, one an application center deregisters, and one that detaches over the air is detached at every connected base station. A base station that was away and resumes its session is sent the detachment when it reconnects; one that starts a new session is not sent the endpoint at all.

### How Do I Decode an Endpoint's Uplinks with a Blueprint?

1. Under **Blueprints**, add the device's **Manufacturer**, add a **Model** with its blueprint specification, or pick one from the **System** catalog. See [How do blueprints and decoders work?](../operations/blueprints-and-decoders.md)
2. Open the endpoint (the **End Point Details** page) and click **Assign Blueprint** under **Blueprint Configuration** (or the **Edit** icon).
3. In **Blueprint Configuration**, pick the manufacturer and the model, then click **Save Changes**.

The model's default blueprint decodes every uplink received from then on; earlier uplinks keep the decode status they were stored with. Each uplink in the endpoint's **Activity** tab shows its decoded values, or why it was not decoded, below its payload.

After you save, the endpoint's **Configuration** tab shows the short address, class and counters, and reports each key only as **Set** or **Not set**.
<figure><img src="../../../.gitbook/assets/kc-endpoint-configuration.jpg" alt="The Configuration tab of an end point with MIOTY Configuration fields and the Reception panel"><figcaption></figcaption></figure>

### What do the MIOTY profile fields do?

The MIOTY specification defines endpoint profile fields that control radio behavior. They are available in every edition, in the **Advanced MIOTY Settings** section of the **Add New End Point** and **Edit End Point** dialogs:

| Field in KC-Web | API field | Description |
| --- | --- | --- |
| **Dual Channel Mode** | `dualChan` | Uses two frequency channels for better reliability and capacity, at the cost of power. |
| **DL Repetition** | `repetition` | Repeats downlink messages for better delivery in poor signal conditions, at the cost of latency. |
| **Wide Carrier Offset** | `wideCarrOff` | Uses the wide carrier offset range. |
| **Long DL Interblock Distance** | `longBlkDist` | Uses a longer downlink interblock distance. |

When you change one of these on an attached endpoint, KC-Web asks whether to re-attach (see below).

### How do I edit, re-attach, detach or delete an end point?

Open the endpoint from **End Points**. The **End Point Details** page has these controls:

* **Edit** (pencil, top right) opens **Edit End Point** with the same sections as the add dialog. **Save Changes** is disabled with "No changes to save" until you change something. The stored keys are never sent to the page: they show "Stored and hidden. Reveal it, or enter a new key to replace it", and **Reveal key (recorded in the Audit Log)** shows one for a user with the **Endpoint Manager** role or **Admin**. A key can be copied only once it is revealed. Typing or generating a key replaces the stored one; an **Application Key** can be removed with **Remove key** (the dialog **Remove Application Key** warns that the removal is recorded in the Audit Log and cannot be undone). Revealing a key is also recorded in the Audit Log.
* **Re-attach prompt**: after you change a setting the base stations already hold, KC-Web asks "Re-attach Endpoint?" and lists the changed settings. **Re-Attach Now** pushes them; **Later** keeps the endpoint marked **Configuration pending re-attach** (hover the badge for the explanation) until it is attached again.
* **Attach End Point** and **Detach End Point** switch the attach state. The toasts read "End point attached" and "End point detached". Detaching stops service at every connected base station.
* **Roaming Status** shows **Home Network** or **Roaming**, with **Owner: Tenant**.
* **Delete** (trash icon) opens **Delete End Point**: "The endpoint will be detached from all base stations before deletion. This action cannot be undone." The toast reads "End point deleted".

### Carrier Offset (Device Metadata)

The **Carrier Offset (informational, Hz)** field under **Device Metadata** records a measured or datasheet carrier offset for your own reference. It is a whole number of Hz between -2147483648 and 2147483647, it is never sent to a base station, and it has no effect on reception. Clearing the field in **Edit** removes the recorded value.

The carrier offset range a base station tolerates is set by the `wideCarrOff` profile flag above (radio protocol specification §3.5.4), not by this field.

### Common Failures

| Symptom | Likely Cause |
|---------|-------------|
| "EUI must be 16 hexadecimal characters" | The EUI is not exactly 16 hex characters |
| "Short address must be 4 hex characters (0001-FFFF)" or "Short address cannot be zero" | The short address is not four hex characters, or it is `0000` |
| "Last packet counter is required" or "Attach counter is required" | One of the counters is empty. Enter `0` for a new device |
| "Duplicate endpoint" error | An endpoint with this EUI already exists |
| Endpoint stays detached | It was created without Pre-Attachment and has not been attached or attached over the air |
| Uplinks not appearing | Network session key mismatch between endpoint hardware and KiloCenter |
