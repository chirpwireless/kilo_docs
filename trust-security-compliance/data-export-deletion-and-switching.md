---
description: "Export your data from Kilo, move to another provider or close the service: steps, API formats, fees and deletion."
---

# How Do I Export My Data or Leave Kilo?

You can get your data out of Kilo yourself through the API, ask Kilo for a copy or a full move to another provider, and close the service. Start by deciding what you need to keep and what you want removed: a company moving its deployment needs readings, device settings, dashboards and rules, while a person exercising a privacy right is making a different request.

## What can I export myself?

Kilo's public API returns your data as JSON, a structured text format other software can read. Create a key with only the read scopes you need in [API Keys](../kilo-iot-server/settings/api-keys.md), then follow [Public REST API](../kilo-iot-server/api/public-rest-api.md). Every request needs both the `X-API-Key` and `X-Organization-Id` headers, and the organization must match the key. Some operations also need an `organizationId` query parameter.

The API retrieves particular records; it is not a single complete export of everything. The [data and format register](#data-and-format-register) below lists what each part covers. Keep the key out of exported files and support messages.

## How do I ask Kilo for a copy, a move or a closure?

| What you want | What to ask for |
|---|---|
| Keep a copy for your own use | An export, naming the records and date ranges you need |
| Move to another provider or your own systems | A switch, with the data, formats, destination and the access you need during the move |
| End a company service | Closure of the account or service, and return or deletion of the company's data |
| Use a personal privacy right | The right you are using, such as access, correction or erasure; see [How Does Kilo Handle Personal Data?](privacy-and-data-protection.md) |
| Remove an AI conversation | Deletion of that conversation, plus copies at the AI provider if those matter to you |

Then:

1. Email **info [at] kiloiot.de** (replace `[at]` with `@`) with the service and the outcome you want. Keep passwords and data exports out of the first email.
2. Say which accounts and data are involved.
3. Confirm you are allowed to act for the person or organization. For company data, name the person authorized to instruct its return or deletion.
4. For a move, agree the data, format, secure transfer route and transition period before you remove access you still need. Check that what you received is usable.
5. Keep the final answer. It should say what was returned or deleted, anything that remains, why it remains and what happens next.

## What gets deleted, and what stays?

Cancelling a paid subscription stops billing and access; on its own it does not confirm that personal data was erased. Closing an account does not yet delete every conversation and record across all systems automatically, so ask for the deletion you need.

A complete deletion covers the live systems, copies already sent to providers, and backups. Backups expire on their own schedule rather than being rewritten for each deleted record, and deleted data must not reappear if a backup is restored. Some records may be kept for a specific legal duty or claim; the answer should name the record type and the reason. A tax record, for example, doesn't justify keeping every conversation or reading. Readings that have fallen outside your plan's visible history are not proof that every stored copy is gone.

## Does switching cost anything?

The standard [Terms of Service](https://kiloiot.io/terms-of-service/) do not specify a switching charge or an early-termination penalty, and this page adds none. Your plan's monthly price is on the [pricing page](https://kiloiot.io/pricing/); annual, usage-based or individually agreed charges are in your accepted order. Ask for an itemized explanation before agreeing to a move.

Under the EU Data Act, switching charges before January 12, 2027 are limited to costs directly caused by the move, and from that date switching charges are prohibited. The law also protects a transition period and time to retrieve your data, which an ordinary account closure must not cut short. See [Data Act Articles 25 and 29](https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng).

Where Kilo processes personal data for your organization, your [data processing agreement](processing-agreements.md) also covers its return or deletion when the service ends.

## What data and formats can I export from Kilo? {#data-and-format-register}

What a move usually needs, how to get it and what to check. The [API reference](https://api.kiloiot.io/) has the current paths, parameters and response fields, and a downloadable OpenAPI schema that describes the API in a machine-readable form.

| Data | How to get it, and what to check |
|---|---|
| Your profile and organization | API reads for profile, organization, members, invitations and permissions, depending on your role. Other people's personal data needs separate consideration. |
| Devices, sensors and connections | JSON records of devices and their configuration. Keep identifiers, relationships and units together so the destination can interpret them. Arrange new device credentials securely. |
| Readings | History operations return readings for chosen sensors and time ranges. Check whether you are getting raw readings or summaries, and collect every page of results. |
| Dashboards and widgets | JSON with the configuration and identifiers. A dashboard depends on its widgets, devices and sensors, so export those too. |
| Rules | API reads for rule definitions. If you also need versions, related assets or execution records, ask for them; a list of definitions is not the full history. |
| Device commands | API reads for command executions. Agree the scope and history you need before relying on them for a move. |
| Subscription and billing | Subscription information through the API. This is not a full invoice or payment history; ask for the records you need. |
| Alarms, AI conversations, files, support and audit records | The public API does not provide a combined export. Name these and their date ranges in your request. |

Before you end access, check the categories, date ranges, record counts and relationships you received. Some operations return one page at a time. Protected intellectual property, trade secrets, other people's personal data and sensitive security records may need special handling, but that must not quietly drop unrelated customer data from the transfer. Ask for an explanation of anything missing, and don't treat a partial download as a finished move or deletion.
