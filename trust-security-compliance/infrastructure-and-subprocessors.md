---
description: "Where Kilo runs: Hetzner in Germany, the features that use other providers, and how authority requests are handled."
---

# Where Is Kilo Hosted?

Kilo runs on Hetzner cloud infrastructure in Germany. The infrastructure checks of September 2026 found Kilo's cloud servers at Hetzner's sites in **Falkenstein** and **Nuremberg**. Use this page to answer the hosting and provider questions in a vendor or security review.

## Who is responsible for the hosting?

Hetzner supplies the data centers, servers and network. Kilo remains responsible for its application, sign-in and access control, configuration and service recovery. Your organization remains responsible for its devices, its local network, who is a member and what it uses Kilo for. See [How Do I Secure My Kilo Deployment?](customer-security-guide.md)

Hetzner's own certifications cover Hetzner's services and sites for their stated period. They do not certify Kilo; see [Is Kilo ISO 27001 or SOC 2 certified?](README.md#is-kilo-iso-27001-or-soc-2-certified)

## Does any data leave those servers?

Yes, when you use features that rely on another provider:

* **AI assistant:** your messages and the information looked up to answer them go to the selected AI model provider. See [AI Privacy and Security](../kilo-iot-server/ai-assistant/privacy.md).
* **Alert delivery:** email, SMS and push notifications pass through delivery providers.
* **Payments:** card payments are handled by the payment provider.
* **Your own integrations:** data you send to your own systems through the API or a connector goes wherever you point it.

This is not a complete list of subprocessors. Ask for the providers that apply to your service to be named in your data processing agreement.

The two server locations above are where Kilo's cloud computing runs. They do not by themselves locate every database, backup, support session or provider copy. If your review needs a location guarantee for specific data, ask for it to be confirmed for your service and written into your [data processing agreement](processing-agreements.md).

## What happens if a government authority asks for our data?

Kilo's handling procedure requires each request to be assessed before anything is disclosed: which authority is asking, its legal basis, what data it wants and which safeguards apply. Where disclosure is lawful, the response is limited to what the request legitimately requires, and the decision is recorded. The procedure also covers notifying the affected customer where that is required and permitted, and requests that conflict with European law.

Personal data and other customer data fall under different rules. For non-personal data held in the EU, the EU Data Act protects it against conflicting access requests from governments outside the EU. A request on its own is not a legal basis to hand data over. This is not a promise that Kilo can refuse every lawful request, or that every supplier's safeguards have been independently assessed.

## Who do I ask for more detail?

Email **info [at] kiloiot.de** (replace `[at]` with `@`) with the service you are assessing and what your review needs, for example processing locations, provider details or assurance reports.
