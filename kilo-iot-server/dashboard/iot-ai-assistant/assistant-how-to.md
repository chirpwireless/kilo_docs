# Assistant How To

This guide shows you how to get the most out of the AI Assistant with practical examples for common IoT scenarios.

***

## Getting Started

### Opening the Assistant

{% stepper %}
{% step %}
### Open the conversation window

Look for the **chat icon** in the bottom-right corner of your dashboard
{% endstep %}

{% step %}
### Start a chat

Click to open the conversation window
{% endstep %}

{% step %}
### Ask your question

Type your question in plain language and press **Enter**

The Assistant responds in the same window, and the conversation continues naturally.
{% endstep %}
{% endstepper %}

### Starting Fresh vs. Continuing

* **New conversation:** Just start typing a new question
* **Previous conversations:** Click the **history icon** in the chat header to see past sessions

{% hint style="info" %}
The Assistant remembers context within a conversation. You can ask follow-up questions without repeating details.
{% endhint %}

***

## Asking Effective Questions

### Be Specific When Possible

The more context you provide, the better the answer:

| Instead of...                | Try...                                                                 |
| ---------------------------- | ---------------------------------------------------------------------- |
| _"Show me temperature"_      | _"Show me the current temperature from Freezer 3"_                     |
| _"What happened yesterday?"_ | _"What events did the warehouse motion sensor record yesterday?"_      |
| _"Is something wrong?"_      | _"Are any of my cold storage sensors showing temperatures above 5°C?"_ |

### Use Device Names or IDs

The Assistant can find devices by name or ID:

* _"What is the status of **Warehouse Sensor A**?"_
* _"Show events for device ID **a1b2c3d4**"_

{% hint style="info" %}
If you're unsure of a device name, ask _"List all my devices"_ or _"Show me devices in Building A"_ first.
{% endhint %}

### Natural Time Expressions

You don't need timestamps. Use natural language:

* _"in the last hour"_
* _"yesterday afternoon"_
* _"since Monday"_
* _"between 9 AM and 5 PM last Friday"_
* _"this week"_
* _"the past 30 days"_

***

## Real-World Examples by Industry

### Cold Chain & Temperature Monitoring

**Check current status:**

> _"What is the current temperature in all my refrigerators?"_

**Investigate threshold breaches:**

> _"Did the freezer temperature go above -18°C at any point last week?"_

**Get statistics:**

> _"What were the average, minimum, and maximum temperatures in Cold Room 2 this month?"_

**Compare periods:**

> _"Compare the temperature stability of Freezer A this week vs last week"_

**Generate compliance reports:**

> _"Show me all temperature readings outside the 2-8°C range for the vaccine storage unit in December"_

***

### Fleet & Vehicle Tracking

**Locate vehicles:**

> _"Where is Delivery Truck 7 right now?"_

**Check driving behavior:**

> _"When did Vehicle 12 exceed 100 km/h last week? List all instances with timestamps."_

**Analyze routes:**

> _"What was the total distance traveled by the delivery fleet yesterday?"_

**Find stops:**

> _"Show me all stops longer than 15 minutes for Vehicle 3 today"_

**Identify issues:**

> _"Which vehicles haven't reported their location in the last 2 hours?"_

***

### Facility & Building Monitoring

**Environmental checks:**

> _"What is the current air quality in Conference Room B?"_

**After-hours activity:**

> _"Were there any motion sensor triggers in the warehouse after 10 PM last night?"_

**Energy analysis:**

> _"What was the daily average power consumption for Building A this week?"_

**Access monitoring:**

> _"Show me all door open/close events for the server room yesterday"_

**Trend analysis:**

> _"How has the humidity level in the archive room changed over the past month?"_

***

### Agriculture & Environment

**Current conditions:**

> _"What are the current soil moisture levels across all my field sensors?"_

**Weather correlation:**

> _"Show me temperature readings for the greenhouse over the past week"_

**Irrigation decisions:**

> _"Which soil moisture sensors are showing readings below 30%?"_

**Historical analysis:**

> _"What was the average daily temperature in Field Sector 3 last month?"_

***

### Asset & Equipment Monitoring

**Check equipment status:**

> _"Is the HVAC unit in Building C running?"_

**Predictive maintenance:**

> _"Show me all vibration readings above normal for the factory equipment this week"_

**Usage patterns:**

> _"How many hours did Compressor 2 run each day this month?"_

**Anomaly detection:**

> _"Were there any unusual temperature spikes in the data center yesterday?"_

***

## Working with Charts

### Requesting Visualizations

Add chart requests to any data query:

> _"Create a line chart of Freezer 1 temperature over the past 7 days"_

> _"Show me a bar chart comparing daily energy usage across all buildings this week"_

> _"Visualize the humidity trend for Greenhouse A"_

> _"Make a pie chart showing the online vs offline status of all my devices"_

### Chart Types and When to Use Them

| Chart Type  | Best For             | Example                         |
| ----------- | -------------------- | ------------------------------- |
| **Line**    | Trends over time     | Temperature changes across days |
| **Bar**     | Comparing quantities | Energy usage by building        |
| **Pie**     | Proportions          | Device status distribution      |
| **Scatter** | Correlations         | Temperature vs humidity         |

***

## Getting Platform Help

### Documentation Questions

> _"How do I add a new device to my account?"_

> _"What's the process for setting up email alerts?"_

> _"Explain how geofencing works in Kilo IoT"_

> _"How do I create a custom dashboard widget?"_

> _"What LoRaWAN frequency bands are supported?"_

### Troubleshooting

> _"My sensor stopped reporting 2 hours ago. What should I check?"_

> _"How do I reset a gateway that's showing offline?"_

> _"What does error code E102 mean?"_

The Assistant searches the documentation and provides step-by-step guidance with links to full articles.

***

## Multi-Step Conversations

The Assistant maintains context, so you can have natural follow-up conversations:

**You:** _"Show me all temperature sensors in the warehouse"_

**Assistant:** _Lists 5 sensors with names and IDs_

**You:** _"Which of those are currently above 10°C?"_

**Assistant:** _Filters the list to show only sensors above threshold_

**You:** _"Show me the history for the first one over the past 24 hours"_

**Assistant:** _Retrieves and displays historical data_

**You:** _"Create a chart of that"_

**Assistant:** _Generates a line chart of the temperature trend_

***

## Tips for Best Results

### Do

* **Be specific** about devices, time ranges, and what you want to know
* **Use follow-up questions** to drill down into details
* **Ask for charts** when visualizing trends or comparisons
* **Mention device names** or IDs when asking about specific equipment

### Don't

* **Share passwords** or API keys in the chat
* **Expect real-time streaming** — the Assistant queries data at the moment you ask
* **Assume it knows implicit context** — state the device or time range explicitly

***

## Quick Reference: Example Queries

### Status Checks

* _"List all offline devices"_
* _"What is the battery level for my sensors?"_
* _"Is Gateway 1 online?"_

### Current Readings

* _"What is the current temperature in \[location]?"_
* _"Show me the latest GPS coordinates for \[vehicle]"_
* _"What are the current readings from \[sensor]?"_

### Historical Analysis

* _"What was the average \[metric] last \[time period]?"_
* _"When did \[device] exceed \[threshold] in \[time range]?"_
* _"How many \[events] occurred \[time description]?"_

### Comparisons

* _"Compare \[metric] this week vs last week"_
* _"Which \[device type] had the highest \[metric]?"_

### Visualizations

* _"Chart \[metric] for \[device] over \[time period]"_
* _"Create a bar chart of \[metric] by \[category]"_

### Platform Help

* _"How do I \[task]?"_
* _"What is \[feature]?"_
* _"Troubleshoot \[issue]"_
