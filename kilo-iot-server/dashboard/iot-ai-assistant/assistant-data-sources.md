# Assistant data sources

The AI Assistant connects directly to your IoT platform, giving it real-time access to your devices, historical telemetry, and the complete Kilo IoT knowledge base. This page explains each data source and what you can do with it.

{% hint style="success" %}
**Security First:** The Assistant only accesses data you are authorized to see. It inherits your account permissions—if you can't see a device in the dashboard, the Assistant can't see it either.
{% endhint %}

***

## Live Device Data

The Assistant has real-time access to every device in your organization.

### What It Can Retrieve

| Data Type            | Description                                                | Example Query                                     |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| **Device List**      | All devices you have access to, with names and IDs         | _"List all my devices"_                           |
| **Device Status**    | Online/offline state, last seen timestamp, signal strength | _"Is the warehouse sensor online?"_               |
| **Current Readings** | Latest telemetry values (temperature, humidity, GPS, etc.) | _"What is the current temperature in Freezer 3?"_ |
| **Device Metadata**  | Device type, labels, location, configuration               | _"Show me all GPS trackers in the North region"_  |

### Example Questions

* _"Which devices are currently offline?"_
* _"Show me the battery level for all sensors in Building A"_
* _"What is the last known location of Vehicle 12?"_
* _"List all devices that haven't reported in the last 2 hours"_

***

## Historical Telemetry and Events

The Assistant can query your entire event history, not just current readings.

### Time-Based Queries

Ask about any time period using natural language:

* _"yesterday"_, _"last week"_, _"the past 3 days"_
* _"between January 1st and January 15th"_
* _"since Monday"_, _"before noon today"_
* _"in the last 4 hours"_

The Assistant automatically converts these to precise timestamps.

### What It Can Analyze

| Capability                  | Description                                    | Example Query                                             |
| --------------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| **Event History**           | All recorded events for a device or time range | _"Show me all events from Sensor 5 yesterday"_            |
| **Threshold Violations**    | When values exceeded limits                    | _"When did the freezer go above -18°C last month?"_       |
| **Averages & Aggregations** | Mean, min, max, sum over time periods          | _"What was the average humidity last week?"_              |
| **Trends**                  | Changes over time                              | _"How has the temperature trended over the past 7 days?"_ |
| **Comparisons**             | Period-over-period analysis                    | _"Compare this week's power consumption to last week"_    |
| **Counts**                  | Number of events matching criteria             | _"How many door open events occurred after hours?"_       |

### Example Questions

**Cold Chain:**

* _"What was the minimum and maximum temperature in the refrigerator this week?"_
* _"How many times did Cold Room 2 exceed 5°C in January?"_
* _"Show me all temperature readings below -20°C for the past month"_

**Fleet Tracking:**

* _"When did Driver Smith exceed 100 km/h last week?"_
* _"What was the total distance traveled by Vehicle 7 in December?"_
* _"Show me all stops longer than 30 minutes for the delivery fleet yesterday"_

**Facility Monitoring:**

* _"What was the average energy consumption per day this month?"_
* _"Which room had the highest CO2 levels last week?"_
* _"List all motion sensor triggers in the warehouse after 10 PM"_

***

## Platform Documentation

The Assistant has the complete Kilo IoT documentation indexed and searchable by natural language.

### What It Covers

* **Getting Started** — Onboarding, account setup, first device registration
* **Device Management** — Adding, configuring, and troubleshooting devices
* **Dashboards & Widgets** — Creating custom views and visualizations
* **Alerts & Automation** — Setting up notifications and automated actions
* **API Reference** — Integration guides for developers
* **Troubleshooting** — Common issues and solutions

### How Documentation Search Works

{% stepper %}
{% step %}
### Search step

The Assistant searches the documentation using semantic understanding (not just keyword matching).
{% endstep %}

{% step %}
### Find step

It finds the most relevant sections.
{% endstep %}

{% step %}
### Summarize step

It summarizes the answer in plain language.
{% endstep %}

{% step %}
### Link step

It provides direct links to the full documentation pages.
{% endstep %}
{% endstepper %}

### Example Questions

* _"How do I add a new gateway?"_
* _"What are the supported LoRaWAN frequency bands?"_
* _"Explain how to set up email alerts for temperature thresholds"_
* _"What's the difference between public and private dashboards?"_
* _"How do I export my device data to CSV?"_

{% hint style="info" %}
When the Assistant answers from documentation, it includes links so you can read the full guide if needed.
{% endhint %}

***

## Data Visualization

The Assistant can generate charts and graphs on demand, turning raw data into visual insights.

### Supported Chart Types

| Chart Type       | Best For             | Example Request                                    |
| ---------------- | -------------------- | -------------------------------------------------- |
| **Line Chart**   | Trends over time     | _"Chart the temperature trend for the past week"_  |
| **Bar Chart**    | Comparing categories | _"Bar chart of daily energy usage by building"_    |
| **Pie Chart**    | Proportions          | _"Show device status distribution as a pie chart"_ |
| **Scatter Plot** | Correlations         | _"Plot temperature vs humidity readings"_          |

### How to Request Charts

Simply ask for a visualization in natural language:

* _"Create a line chart of Sensor 3 temperature over the last 7 days"_
* _"Show me a bar chart comparing power consumption across all meters"_
* _"Visualize the humidity data as a graph"_
* _"Make a chart showing how many events each device had this week"_

The Assistant retrieves the data, processes it, and generates the chart directly in the conversation.

***

## Web Search (IoT Topics Only)

For IoT-related questions not covered by the platform documentation, the Assistant can search the web—but **only for topics relevant to your IoT deployment**.

### When It's Used

* Technical questions about IoT protocols and standards (LoRaWAN, MQTT, etc.)
* Information about sensor specifications or device compatibility
* Best practices for IoT use cases (cold chain, fleet tracking, etc.)
* Industry-specific IoT regulations or compliance information

### Example Questions

* _"What is the typical battery life for a LoRaWAN sensor?"_
* _"What are best practices for cold chain temperature monitoring?"_
* _"How does MQTT compare to HTTP for IoT applications?"_
* _"What temperature range is required for pharmaceutical cold storage?"_

{% hint style="warning" %}
**IoT Focus Only:** The Assistant is designed specifically for IoT operations. It will not answer general questions unrelated to IoT, your devices, or the platform. This ensures the Assistant remains a focused operational tool rather than a general-purpose chatbot.
{% endhint %}

***

## What the Assistant Will Not Do

The Assistant is purpose-built for IoT operations. For security and focus, it has explicit limitations:

### Data Restrictions

* **Other organizations' data** — Strict tenant isolation
* **Devices outside your permission scope** — Only your authorized devices
* **Billing information or payment details** — Financial data is separate
* **User passwords or API secrets** — Never accessible
* **Admin-only settings** — Unless you have admin permissions
* **Raw database tables or system logs** — No backend access

### Scope Restrictions

* **General questions unrelated to IoT** — The Assistant will not answer off-topic questions (e.g., recipes, sports scores, homework help, general trivia)
* **Non-platform topics** — Questions must relate to your IoT deployment, devices, data, or the Kilo IoT platform itself
* **Personal assistant tasks** — This is an operational tool, not a general-purpose AI chatbot

{% hint style="info" %}
**Why the focus?** The Assistant is optimized for IoT operations. By limiting scope, it provides faster, more accurate answers for the tasks that matter to your deployment—rather than being a jack-of-all-trades chatbot.
{% endhint %}

***

## Summary: Data Flow

```
Your IoT Question
     ↓
AI Understanding (Natural Language Processing)
     ↓
┌─────────────────────────────────────────────────┐
│  Data Sources (IoT-Focused)                     │
│  ├── Live Device Status                         │
│  ├── Historical Telemetry                       │
│  ├── Platform Documentation                     │
│  └── Web Search (IoT topics only)               │
└─────────────────────────────────────────────────┘
     ↓
Analysis & Calculation
     ↓
Answer (Text, Charts, Links)
```
