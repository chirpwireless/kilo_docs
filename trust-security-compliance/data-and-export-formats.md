---
description: "Understand the data to include when leaving Kilo, the documented retrieval formats and the limits of an API download."
---

# Data and export formats

Moving a device deployment to another system usually needs more than its readings.
The destination may also need device identifiers, measurement units, settings,
dashboards and rules. Use this guide to identify the information you need before
requesting [data export or service switching](data-export-deletion-and-switching.md).

Kilo's public application programming interface (API) lets software request information
from the platform. Its documented read operations return JSON: structured text that
software can process. These operations can help retrieve particular records. They
do not, by themselves, provide a single complete export of every record in a service.

## Information to include

| Information | Documented access and things to check |
|---|---|
| Your profile and organisation | The API describes profile, organisation, member, invitation and permission reads. Access depends on your authority; other people's personal information needs separate consideration. |
| Devices, sensors and connections | JSON records describe devices and related configuration. Keep identifiers, relationships and units together so the destination can interpret them. Arrange replacement credentials securely. |
| Readings | History operations return readings for selected sensors and time ranges. Check whether you are retrieving raw readings or summaries, and collect every required result page. |
| Dashboards and widgets | JSON responses contain the relevant configuration and identifiers. A dashboard may depend on widgets, devices and sensors that must also be included. |
| Rules | The API describes rule-definition reads. Agree whether versions, associated assets and execution records are also needed; a list of definitions is not a full history. |
| Device commands | The reference describes command-execution reads. Agree the authorised scope and required history before relying on these for a move. |
| Subscription and billing | Subscription information is available through the API. It is not a complete invoice or payment history. Ask for the records you actually need. |
| Alarms, assistant conversations, files, support and audit records | A complete combined export is not established by the public API reference. Identify the categories and date ranges in your request so their availability and any restrictions can be addressed. |

The [API reference](https://api.kiloiot.io/) describes the current paths, parameters
and response fields and provides a downloadable OpenAPI schema, a description that
software can use to understand the interface. See [Public REST API](../kilo-iot-server/api/public-rest-api.md)
for authentication and [API keys](../kilo-iot-server/settings/api-keys.md) for creating a scoped key.

Each request needs both `X-API-Key` and `X-Organization-Id`. The organisation must
match the key. If an operation also requires an `organizationId` query parameter,
provide it as well. Use a key with only the permissions needed, and keep the key out
of exported records and messages to support.

## Check that the returned information is usable

Before ending access, check the requested categories, date ranges, record counts and
relationships. Some operations return a limited page of results; more pages may be
needed. A plan's visible history does not establish that all stored copies have been
returned or erased.

Ask for an explanation of missing categories and restrictions. Protected intellectual
property, trade secrets, other people's personal information and sensitive security
records may need specific handling. Those limits must not silently remove unrelated
customer information from a transfer.

Keep the agreed transfer scope and final response. They should identify what was
returned, what was omitted and why, and what remains to be done. Do not treat an
incomplete download as confirmation that a full move or deletion has finished.
