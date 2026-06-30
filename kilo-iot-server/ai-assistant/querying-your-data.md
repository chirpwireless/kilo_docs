---
description: Query Kilo IoT Server in natural language — device status, history, threshold violations, follow-ups.
---

# Querying Your Data

The AI Assistant accepts natural language. There is no special syntax to learn, no query language to memorize. Type the way you would talk to a colleague who happens to know everything about your deployment — whether you're *asking* about your data or *asking it to do something*. This page focuses on the asking-and-analyzing side; to hand it real setup work, see [Building With the Assistant](building-with-ai.md).

## Writing effective queries

A specific question produces a specific answer. Follow these guidelines to get the most useful results:

- **Name the device, sensor, or location.** "What is the temperature in Warehouse B?" is far more useful than "What is the temperature?" When dozens of sensors report temperature, the assistant needs to know which one you mean.
- **Use natural time expressions.** The assistant understands "yesterday", "last 3 hours", "between January 1 and January 15", "this morning", and similar phrases. There is no need to provide Unix timestamps or formatted dates.
- **Ask follow-ups.** The assistant maintains full context within a conversation. Refine, narrow, or expand a previous query without restating everything.
- **Reuse your last message.** Press the **Up arrow** key in the chat input to bring back the last message you sent — useful for tweaking a question and asking it again.

## Query categories

### Live status

Ask about the current state of your devices:

- "Which devices are offline?"
- "What is the current humidity in Server Room 3?"
- "Show me all devices with battery below 20%"
- "Is the rooftop gateway online?"

### Historical data

Query telemetry records over any time period your retention settings cover:

- "What was the average temperature in Cold Storage A last week?"
- "When did Freezer 3 last exceed -18 degrees Celsius?"
- "How many door-open events occurred after 10 PM this month?"
- "Show me all CO2 readings above 1000 ppm in the past 48 hours"

### Aggregations and comparisons

Perform calculations across devices, time ranges, or both:

- "Compare this week's temperature readings in Warehouse B with last week"
- "What was the maximum CO2 level in the lab today?"
- "Which zone had the highest average humidity in March?"

### Charts

Request visual charts and they render inline in the chat window:

- "Create a line chart of temperature for Sensor 5 over the past 7 days"
- "Show a bar chart comparing humidity across all warehouse sensors"
- "Pie chart of device status across the fleet"
- "Scatter plot of temperature versus humidity for Lab 1 this week"

Line charts work best for time-series trends, bar charts for cross-device or cross-period comparisons, pie charts for proportional breakdowns, and scatter charts for identifying correlations between two measurements.

### Documentation

Ask about any platform feature and the assistant searches the full knowledge base semantically:

- "How do I set up a LoRaWAN gateway?"
- "Explain the rules engine version history"
- "What notification channels are available?"

Answers include explanations and direct links to the relevant documentation pages.

## Multi-step conversations

The assistant remembers context within a session. Build on previous answers without repeating yourself:

1. "Show me temperature readings for Sensor 5 over the past week"
2. "Now expand that to the last month"
3. "Compare it with Sensor 6 over the same period"
4. "Which one had more threshold violations above 30 degrees?"

Each follow-up builds on the previous context, making complex analysis conversational rather than tedious.

## From asking to acting

The same conversation can move from analysis straight into action. After "which freezers breached −18 °C last night?", you can follow with "build a rule that alerts me if it happens again" — and the assistant authors and deploys it. Whenever a request would change something consequential, the assistant shows a confirmation with **Confirm Action** and **Cancel** first, so you stay in control of every change. The full build-and-operate workflow is covered in [Building With the Assistant](building-with-ai.md).
