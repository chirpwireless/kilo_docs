# Assistant privacy

This page explains how the AI Assistant protects your data and what happens when you interact with it.

***

## Security Model

### Authentication

Every interaction with the AI Assistant is authenticated using your Kilo IoT session:

* The Assistant verifies your identity through your login session
* Your access token determines what data the Assistant can retrieve
* No anonymous or unauthenticated queries are possible

### Permission Inheritance

The Assistant operates within your existing permissions:

| Your Permission Level  | What the Assistant Can Access                         |
| ---------------------- | ----------------------------------------------------- |
| **Organization Admin** | All devices, all data within your organization        |
| **Standard User**      | Only devices and data you have been granted access to |
| **Read-Only User**     | Can view data but Assistant cannot modify anything    |

{% hint style="success" %}
**The Assistant cannot see more than you can.** If a device isn't visible in your dashboard, the Assistant cannot access it either.
{% endhint %}

***

## Data Isolation

### Organization Boundaries

Your data is strictly isolated from other organizations:

* The Assistant only queries devices belonging to your organization
* Cross-organization data access is not possible
* Each conversation is scoped to your authenticated session

### User-Level Isolation

Even within your organization:

* Your chat history is private to your account
* Other users cannot see your conversations
* Conversations are not shared across team members

***

## What Data Is Stored

### Conversation History

Your conversations with the Assistant are stored to:

* Maintain context within a session
* Allow you to return to previous conversations
* Improve response quality with conversation history

**Stored data includes:**

* Your questions and the Assistant's responses
* Timestamps of each message
* Session metadata (creation date, last activity)

**Stored data does NOT include:**

* Raw device telemetry (queried on-demand, not cached)
* Your passwords or API credentials
* Billing or payment information

### Retention

* Conversations are retained while your account is active
* You can access past conversations through the chat history feature
* Contact your administrator for data retention policies specific to your organization

***

## How Your Questions Are Processed

{% stepper %}
{% step %}
### Step

Your question is sent to the AI Assistant backend
{% endstep %}

{% step %}
### Step

The AI understands your intent using a language model
{% endstep %}

{% step %}
### Step

The Assistant queries your authorized data sources\
(devices, events, documentation)
{% endstep %}

{% step %}
### Step

Results are analyzed and a response is generated
{% endstep %}

{% step %}
### Step

The response is sent back to your browser
{% endstep %}
{% endstepper %}

### Language Model Processing

The AI Assistant uses advanced language models to understand and respond to your questions:

* Your questions are processed by AI models to determine intent
* Device data is retrieved from Kilo IoT's secure infrastructure
* Responses are generated based on your actual data

{% hint style="info" %}
The language models help the Assistant understand natural language—they do not have persistent access to your data outside of the conversation context.
{% endhint %}

***

## What You Should NOT Share

While the Assistant is designed to be helpful, avoid sharing sensitive information that doesn't belong in a chat interface:

| Don't Share                 | Why                                             |
| --------------------------- | ----------------------------------------------- |
| **Passwords**               | The Assistant never needs your password         |
| **API Keys or Secrets**     | These should be managed through secure settings |
| **Personal Financial Data** | Not relevant to IoT operations                  |
| **Private Credentials**     | Keep authentication details secure              |

{% hint style="warning" %}
The Assistant is an operational tool, not a secure vault. Treat it like any other business application.
{% endhint %}

***

## What the Assistant Cannot Do

For security, the Assistant has explicit limitations:

* **Cannot modify device configurations** — Read-only access to device data
* **Cannot access other organizations** — Strict tenant isolation
* **Cannot bypass your permissions** — Limited by your access level
* **Cannot access billing data** — Financial information is separate
* **Cannot store credentials** — No password or secret storage capability
* **Cannot execute commands on devices** — Observation only, no control actions

***

## Audit and Compliance

### Activity Logging

All Assistant interactions are logged for security:

* Query timestamps
* Data sources accessed
* User identification

These logs support compliance requirements and security audits.

### Data Residency

Your conversation data is stored in the same region as your Kilo IoT deployment. Contact your administrator for specific data residency information.

***

## Frequently Asked Questions

<details>

<summary>Q: Can other users in my organization see my conversations?</summary>

No. Your chat history is private to your account.

</details>

<details>

<summary>Q: Does the Assistant remember information between sessions?</summary>

Within a conversation, yes. Between different conversations, only through stored chat history—not by retaining data separately.

</details>

<details>

<summary>Q: Is my device data sent to external services?</summary>

The AI language model processes your questions, but device data stays within Kilo IoT's infrastructure. Only the question text is sent to the language model, not raw telemetry.

</details>

<details>

<summary>Q: Can I delete my conversation history?</summary>

Contact your administrator for data deletion requests.

</details>

<details>

<summary>Q: Who can see the audit logs of my Assistant usage?</summary>

Organization administrators with appropriate permissions can review activity logs.

</details>

***

## Contact

For questions about data handling, privacy concerns, or compliance inquiries, contact your Kilo IoT administrator or reach out to support.

***
