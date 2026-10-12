---
description: The cleanup and the more than fifty bug fixes in KiloCenter 2.0, grouped by uplinks, downlinks, attach, sessions, certificates and the web interface.
---

# What bugs were fixed in KiloCenter 2.0?

KiloCenter 2.0 is a big release for two reasons: the features it adds, and the amount of work under them. The codebase was cleaned up, and **more than fifty bugs** were fixed across uplinks, downlinks, attach and detach, sessions, certificates and the web interface. This page groups the fixes by what you notice and says where to look in the web interface to see the effect.

We tested the result end to end with our MIOTY developer kit: real uplinks and downlinks, including acknowledged and revoked downlinks, and every screen of the web interface.

## What did the cleanup change?

- **Less code to trust.** Code that nothing used any more is gone, together with settings and exported declarations no part of the service center read. The old System screen and the WebSocket transport went with it.
- **Smaller, focused parts.** Large components in the service center and the web interface are split, so each part does one job and a change in one place no longer reaches into unrelated ones.
- **One place for values.** Values that used to be written into the code now live in shared catalogs and configuration, which is why the [configuration changes](operations/configuration-changes-in-2-0.md) page lists new and removed settings.

## Which uplink bugs are fixed?

Look at **Base Stations**, open a station, and use the **Activity** tab, or open **Traffic** and the **Uplink Events** tab.

- An uplink that several base stations receive at the same time is delivered once, and it lists every receiving station. A report from a second station that arrived a moment late used to be stored but never delivered. A new setting, `protocol.delivery.reception_window` (default 500 ms), sets how long KiloCenter waits for those reports.
- An uplink received by a base station as a secondary receiver opens from that station's list with its own RSSI and SNR, instead of failing with "not found".
- Uplinks are stored over the packet counter's full 32-bit range. A counter from 2^31 on used to fail to save.
- A fractional `eqSnr`, such as 19.8 dB, and subpacket frequencies with fractions of a hertz are stored and passed on instead of being dropped.
- Uplinks with empty `userData` are delivered to your Application Center.
- A retried delivery no longer reaches an Application Center twice. Only the sessions that lack the uplink get it again.
- An uplink reissued after a session resume carries its full reception details and its `duplicate` flag.
- The live uplink and event streams no longer drop a row that was stored after a newer one had streamed, for example because of a skewed station clock or a replayed uplink. Streams read in the order the database stored the rows and look back by a new `grpc.stream_overlap` setting (default 10 seconds).
- Event listings include the events at both ends of their time window.
- An uplink that carries `dlAck` and was relayed from a federated Community Edition acknowledges the end point's previous downlink, as a base station's own uplink does.
- When several stations receive the same uplink, the end point's acknowledgement of its downlink is recorded once. Before, the event could appear twice.

## Which downlink bugs are fixed?

Look at the end point's **Downlink** tab, and at **Traffic**, in the **Downlink Queue** and **Downlink Results** tabs.

- A downlink that a base station answers a revoke for with an error, because it no longer holds it, now ends as `revoked` instead of staying queued forever.
- A base station that resumes its session keeps the downlinks it had queued. A KC-Core restart or deploy no longer strands them until they expire.
- A downlink that a station held for an end point is no longer stranded as `queued` when that station receives a new attach propagation for the end point. It returns to pending and goes out at the end point's next downlink window.
- A downlink queued while the station serving its end point was offline is sent as soon as the station finishes its connect, instead of waiting for the end point's next uplink.
- Downlinks without a payload, which are pure acknowledgements, can be queued.
- An Application Center can queue a downlink under queue id 0, which SCACI allows. It was refused before.
- A counter-dependent downlink keeps its user data when it is listed, sent to a base station or reported. The stored entries used to be dropped on every read.
- `userData` in the SCACI Numeric[m][n] shape is accepted.
- Revoking a downlink that the base station holds no longer fails with a database constraint error.
- **Downlink Queue** shows the base station that holds a queued downlink. It used to show `0000000000000000`. When no station holds the downlink, the field is empty.
- An MQTT downlink command that the service center refuses, because it is invalid, too large or for an unknown end point, is reported on `event/downlink_rejected` instead of being dropped silently.
- The MQTT `event/downlink_result` with `"result": "acknowledged"` reaches your broker for an uplink relayed from a federated Community Edition, and after a broker outage. It is queued with its record and retried until the broker accepts it.

## Which attach, detach and registration bugs are fixed?

Look at the end point's **Configuration** tab, and at **Logs** in the **Events Log** tab.

- The first over-the-air attach of an end point is accepted with any attach counter, including 0. Only later attaches must advance the counter.
- An attach or detach that does not report `eqSnr` leaves the end point's recorded `eqSnr` unchanged, instead of recording the reported `snr` in its place.
- The same detach reported by two base stations is announced and propagated once.
- An attach or detach that completes after a session resume forwards the end point's nonce and signature.
- Creating or updating an end point with an all-zero network session key is refused with a clear error. Such a key can never be sent to a base station, and the end point used to be stored and then fail to attach.
- A SCACI `reg` for an end point the service center does not know creates it, as class A when `bidi` is set and class Z otherwise.
- A SCACI `regCmp` completes only a `reg` that the service center answered with `regRsp`. Any other one is answered with `scaci.error.unexpected_register_complete` and attaches nothing.
- A SCACI `regCmp` with `preAttach` attaches and propagates the registered end point. Real EUIs above 2^53 used to be read back rounded, so the end point was not found.
- Deleting an end point no longer logs an error when it is removed before its detach is recorded for the base stations.

## Which session bugs are fixed?

- An Application Center that reconnects after losing its connection can open a new SCACI session again. The earlier session no longer blocks it.
- A response that matches no outstanding operation is answered with a SCACI error instead of a completion.
- A slow resume write of an old connection can no longer land after a newer connection replaced it and leave the stored session active without a connection.
- A resumed session whose connection drops right after `conCmp` is recorded as disconnected instead of active, a resume never revives a session that can no longer resume, and a second `conCmp` is answered with an error.
- A dropped gRPC-web stream behind the development proxy now ends in the browser too, so it reconnects instead of holding a connection.

## Which certificate and key bugs are fixed?

Look at **Certificates**, and at a base station's **Settings** and detail page.

- Renewing the server certificate keeps the names that base stations connect by. Before, a renewal without an external URL named the certificate `localhost`, and the generator added every address of the host's interfaces, which exposed the host's internal network layout.
- The BSSCI and SCACI listeners serve a renewed server certificate from the next connection on. A renewal no longer needs a KC-Core restart.
- A new base station is no longer given a Service Center URL it cannot reach. When `protocol.bsci_external_url` names a wildcard or loopback address, the certificate bundle carries no URL and **Add Base Station** warns you to set it.
- A regenerated base station certificate is offered for download in the edit dialog, as the **Add Base Station** wizard offers a new one, and its event shows on the station's activity.
- A base station whose certificate was issued outside the service center is warned before regeneration that it is refused until it has the new files.
- Downloading a base station's private key no longer hangs until the request times out.
- A stored private key that cannot be decrypted, for example under a wrong master key, is answered with an internal error instead of "certificate not found", which read as a key already downloaded. The key stays stored.
- Certificate bundle downloads are limited to the caller's tenant, no longer contain the CA private key, and expired bundles are removed.
- Certificates from the generator no longer claim a location in San Francisco. They name the product and the holder only.
- The **Certificates** page reports the CA's subject, issuer and days until expiry.

## Which web interface and API bugs are fixed?

- A base station location outside the globe (latitude beyond ±90, longitude beyond ±180) is refused with a message that names the valid range, instead of an internal error.
- Activity date filters keep the date you typed, accept digits without separators and cover whole local days.
- `CreateOrganization` stores the organization's tags and description. Both used to be dropped. Tags are fixed at creation, so an update that sets them is refused with a clear error instead of being ignored silently.
- Organization look-ups answer "not found" instead of an internal error, and a failed repository transaction always releases its connection.
- Requests the service center refuses, and remote peers that fail the TLS handshake, are logged as warnings with the peer's address, not as errors, so an error in the log points at a fault of the service center itself. A normal shutdown no longer logs a failure.
- The down migrations 000145, 000154 and 000155 restore the exact previous schema.
- For developers, `start-dev.sh` now stops what a previous run started before it starts new services, and the new `dev-services.sh` starts and stops each service by its own process id.

## Where is the full per-fix list?

This page groups the fixes by what you notice. If you upgrade from 1.x, read the [upgrade guide](operations/key-material-migration.md) first, and see [what changed for integrators](integrations/api-changes-in-2-0.md) before you update an integration.
