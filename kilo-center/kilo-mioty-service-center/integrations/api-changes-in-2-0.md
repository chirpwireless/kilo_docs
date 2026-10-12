---
description: "KiloCenter 2.0 gRPC, MQTT and SCACI changes: breaking changes, new fields and filters, stricter validation, and what your client must update."
---

# Which KiloCenter 2.0 API changes affect my integration?

Check this list before you point an existing client at KiloCenter 2.0. It is grouped by what you have to do. The MQTT topics and payloads are described in [MQTT First Steps](mqtt-first-steps.md), and the roles each call needs are in [User Roles and Permissions](../security/users-and-roles.md).

## What breaks and needs a code change?

| Change | What your client must do |
|---|---|
| Organization quota fields `can_have_base_stations`, `max_base_station_count` and `max_endpoint_count` are removed | Stop reading them. Clients that still send them have them ignored. If you need entitlements, enforce them in the platform above the service center. |
| Endpoint keys are masked on every read | `GetEndPoint`, `ListEndPoints`, `CreateEndPoint` and `UpdateEndPoint` return `nwk_sn_key` and `app_key` empty, with `nwk_sn_key_set` and `app_key_set` telling you whether each is stored. Ask for a key with `GetEndPoint` and `reveal_keys` (`ENDPOINT_KEY_NWK_SN_KEY`, `ENDPOINT_KEY_APP_KEY`). Only Endpoint Managers and Admins may, and every reveal is audited. |
| Every call checks the caller's role | A call without a signed-in user whose roles cover it returns `PERMISSION_DENIED`. Only sign-in, registration and the public release and onboarding calls are open. Service-account API keys act as Base Station Manager and Endpoint Manager in their own organization. |
| 64-bit identifiers are strings in JavaScript | Downlink `que_id`, the BSSCI and SCACI `op_id` fields, `rx_time` and `tx_time`, the SCACI session `last_op_id_*` counters and `ReleaseInfo.sc_eui` are delivered as strings, so they no longer lose precision. Go, Python and other clients are unaffected. |
| `IdentityInternalService.GetUserMembership` is replaced by `GetUserRoles` | Only matters if you call the internal service. Upgrade KC-Core and KC-Identity together. |
| Base station uplink export changes shape | `ExportBaseStationMessages` writes the SCACI ulData fields in JSON and CSV under the same camelCase names (`id`, `opId`, `epEui`, `bsEui`, `rxTime`, `rxDuration`, `packetCnt`, `snr`, `rssi`, `eqSnr`, `profile`, `mode`, `format`, `dlOpen`, `responseExp`, `dlAck`, `duplicate`, `userData`, `subpackets`). EUIs and `userData` are hex, `opId` is a decimal string and `rxTime` is RFC 3339 in UTC. Before, EUIs, `opId` and `rxTime` were numbers and `userData` was base64. In the web interface, use **Export Uplinks (CSV)** or **Export Uplinks (JSON)** on a base station's Activity tab. |
| SCACI byte fields are arrays of numbers | They travel as arrays of numbers in both directions, as the specification defines them. Binary values are still accepted. |
| `scaci.error.missing_packet_cnt` is gone | A request without a mandatory field now gets `scaci.error.missing_mandatory_field` (code 22), a `dlDataRev` without `packetCnt` included. |

## Which calls behave differently?

- **Attach and detach.** The service center decides an end point's attachment status. `AttachEndPoint`, `DetachEndPoint`, `UpdateEndPoint` with `status`, `CreateEndPoint` with `pre_attach`, a SCACI `reg` with `preAttach`, a SCACI `dereg`, and an over-the-air attach or detach set it, and only the call that changes it sends `epStat` to the owner's Application Centers, once. `CreateEndPoint` ignores the submitted `status`; the end point is detached unless `pre_attach` attaches it, and a pre-attached end point whose network key cannot be sent to the base stations is refused (`KC-GRPC-ERR-10B`) and stores nothing.
- **Status updates.** `UpdateEndPoint` with `status` accepts `attached` or `detached`; `attaching` is refused with `KC-GRPC-ERR-315`. `AttachEndPoint` and `DetachEndPoint` of an end point your tenant does not have return not found (`KC-GRPC-ERR-101`).
- **End point class.** `CreateEndPoint` accepts class `A` or `Z`; any other `ep_class` is refused with `KC-GRPC-ERR-314`, and the stored class always follows the `bidi` flag.
- **Downlinks.** A downlink for an end point registered without `bidi` is refused: SCACI answers the `dlDataQue` with code 95, and `SendDownlink` returns FailedPrecondition (`KC-GRPC-ERR-280`). `RevokeDownlink` revokes a pending downlink at once (status `revoked`) and returns NotFound unless the queue id belongs to the end point and organization you name. `ListDownlinkQueue` and `ListScaciQueues` list your organization only, and `GetScaciStatus` needs an organization. `GetDownlinkResults` and `ListDownlinkQueue` report `revoked` instead of an empty result.
- **Queue ids.** The service center assigns every downlink queue id, and new ids are at most 2^53-1. An Application Center's own `queId` may be any non-zero 64-bit value; it is kept per organization while its downlink is in flight and returned in `dlDataRes`. Two organizations can use the same id.
- **Passwords.** `CreateUser`, `UpdateUserPassword` and `ChangePassword` answer InvalidArgument with the password policy for a weak password, and `ChangePassword` answers "current password is incorrect" for a wrong current password. `AuthSettings.password_policy` carries the minimum and maximum length and the letter and digit rules, so a client can show them before the password is refused. An administrator's password reset signs the user out everywhere.
- **API keys.** `CreateApiKey` works in the Community Edition.
- **Integrations.** Only administrators manage integrations, and their settings are write-only: reads return `configured` instead of credentials.
- **Sessions.** `ListScaciSessionsRequest` has `can_resume_filter`, which can ask for non-resumable sessions. The old `can_resume` field is deprecated and still means resumable only.
- **Input limits.** A ulData with a malformed `subpackets` object or more than 200 bytes of `userData` gets a BSSCI protocol error (EPROTO) and is not stored. SCACI numbers out of range, including negative values in unsigned fields, are refused with code 34. MQTT `command/down` payloads are limited to 200 decoded bytes, the radio downlink limit.
- **Duplicates.** An uplink the base station resends after a session resume merges into the original, because duplicates are recognized by the base station's reception time. SCACI ulData reports `duplicate: true` when an end point reuses a packet counter outside the duplicate window; the uplink is still stored and delivered.

## Which calls are new?

- `UpdatePendingDownlink` replaces the payloads, priority, counters and flags of a downlink that is still `pending`. Once the scheduler has picked it up, revoke it and send a new one. The web interface offers it as **Edit pending downlink**.
- `ListErrorGroups` returns failures grouped by event type, code and source for a `bucket` (`control_plane`, `base_station`, `endpoint` or `downlink`). It backs the **Errors Center**.
- `ListCapabilities` returns the named, non-secret feature toggles of the service center; any role may call it.
- `GetDiagnosticsBundle` downloads a diagnostics archive; administrators only.
- `GetCEStatus` and `CompleteCEOnboarding` (public) and `ListCEInstances` and `RevokeCEInstance` (administrators) belong to Community Edition onboarding and federation.

The service now offers 126 calls in total; see the [API reference](api-reference/README.md).

## What new fields and filters can I use?

- **End point:** `last_rssi`, `last_snr` and `last_eq_snr` (the latest reception), `serving_bs_eui` (the base station a downlink queued now would go to, on `GetEndPoint`), and `reattach_pending` (an edit changed attach parameters after the last attach, so the stations hold the earlier profile until you attach again). The end point's **Configuration** tab shows them, and marks an end point "Configuration pending re-attach".
- **Downlink:** `accepted_at` (when the holding base station accepted it with dlDataQueRsp) and `endpoint_acked_at` (when an uplink with `dlAck` acknowledged it). The downlink results show the second as **Acknowledged by device**.
- **Uplinks:** `Message.op_id` joins an uplink to its event-log rows. `BaseStationMessage` carries `dl_open`, `dl_ack`, `res_exp`, `op_id` and `format`, and `ListBaseStationMessages` takes the same filters as `ListMessages` (`duplicate`, `dl_open`, `profile`, `mode`).
- **Base station:** `certificate_expires_at` on the list and the detail, plus `tls_cert_fingerprint` (the SHA-256 fingerprint of the issued client certificate) and `session_started_at` (the last completed BSSCI connect handshake). `GetServerCertificateStatusResponse.renewal_names` lists the names a renewed server certificate would carry.
- **Downlink queue:** `ListDownlinkQueue` takes `status` (one queue state; the default is every in-flight state), `priority`, `que_id` and `bs_eui`, and `GetDownlinkResults` takes `bs_eui` and `que_id`.
- **Events:** `ListEvents` takes `op_id`, `ep_eui`, `bs_eui`, `outcome` and `search`. Events carry `user_id` and `user_email` of the acting user for operator actions. `AlertSummary.info` is deprecated and always 0, because info events are not alerts.
- **Profile:** `GetProfile` returns the caller's effective roles in `UserProfile.roles`.

## What does the MQTT interface add?

`event/up` carries the whole uplink and its decode outcome. `command/down` accepts more options and a correlation `ref`, and a command with a `ref` already used for the end point queues nothing, so you can republish a command you are not sure arrived. `event/downlink_queued`, `event/downlink_rejected` and `event/downlink_result` are published at QoS 1, so an outcome can arrive more than once: treat a repeat for the same `queId` or `ref` as the same outcome. `event/downlink_result` also reports `acknowledged` once the end point confirms. The full field list is in [MQTT First Steps](mqtt-first-steps.md).
