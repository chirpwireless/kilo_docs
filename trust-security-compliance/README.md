---
description: "Who runs Kilo, where it is hosted, its certification status, and quick answers for your security or vendor review."
---

# Is Kilo IoT Secure?

Kilo is operated by CHIRP USA LLC and hosted on Hetzner cloud infrastructure in Germany. This section answers the questions a security or vendor review usually asks, and tells you what your own team needs to set up. The hardware store, Kilo Electronics, is a separate company and is not covered here.

## What does a vendor security review need to know about Kilo?

* **Where is the data hosted?** The September 2026 infrastructure checks found Kilo's cloud computing on Hetzner in Falkenstein and Nuremberg, Germany. Database, backup and provider-copy locations are confirmed on request for your service, and some features, such as the AI assistant and alert delivery, send data to other providers. Details: [Where Is Kilo Hosted?](infrastructure-and-subprocessors.md)
* **Who is responsible for what?** Kilo runs and protects the platform; your organization controls who has access, its devices and its local network. The full split and a setup checklist: [How Do I Secure My Kilo Deployment?](customer-security-guide.md)
* **Is there a data processing agreement (DPA)?** If you use Kilo to handle personal data, ask for one before that data goes in. It is completed for your actual service. What to send: [Does Kilo Sign a Data Processing Agreement?](processing-agreements.md)
* **Can we get our data out?** Yes, through the API or on request, and you can move to another provider. [How Do I Export My Data or Leave Kilo?](data-export-deletion-and-switching.md)
* **How does someone access or delete their personal data?** By emailing a privacy request. [How Does Kilo Handle Personal Data?](privacy-and-data-protection.md)
* **How do we report a vulnerability?** [How Do I Report a Kilo Security Vulnerability?](incident-response-and-vulnerability-reporting.md)

## Is Kilo ISO 27001 or SOC 2 certified?

No. Kilo is building and checking its information security management system, the policies and working controls that protect the service, against ISO/IEC 27001. Kilo does not currently hold an ISO/IEC 27001 certificate, a SOC 2 report, a BSI C5 attestation or a CSA STAR listing.

Hetzner holds its own certifications for its data centers. They cover Hetzner's services, not Kilo's application. When Kilo publishes an assessment, it will name the service assessed, the scope, the assessor, the date and any limits.

## Who do I contact?

Email **info [at] kiloiot.de** (replace `[at]` with `@`) for security, privacy and contract questions. Leave passwords, private keys, camera footage and other people's personal details out of the first message; if they are needed, ask for a protected way to send them.
