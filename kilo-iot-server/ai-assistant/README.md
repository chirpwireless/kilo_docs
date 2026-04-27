# IoT AI Assistant

Available on **Pro** and **Enterprise** plans.

The AI Assistant is an intelligent analyst that understands your entire deployment — devices, sensor history, operational patterns, and platform capabilities. It is not a general-purpose chatbot. Every answer it gives is grounded in YOUR data, YOUR devices, and YOUR organization's telemetry. If you ask a question unrelated to IoT, it will politely decline.

## Accessing the assistant

A floating button appears in the bottom-right corner of the interface. The button is draggable — reposition it anywhere on screen to keep it out of your workflow. Click it to open a chat window (360 px wide on desktop, full width on mobile, up to 650 px tall). Close the window at any time; your conversation is preserved.

A list icon at the top of the chat window opens your previous conversations, so you can revisit earlier queries without re-typing them.

## What it can do

The assistant serves four distinct roles across your deployment:

1. **Live device queries** — Ask about the current state of any device: online or offline status, battery levels, GPS coordinates, latest sensor readings, signal strength, and last-seen timestamps. "Which devices in Building C are offline right now?" returns an immediate answer.

2. **Historical analysis** — Query any time period using natural language. The assistant supports aggregations (min, max, average, sum, count), threshold violation detection, trend comparisons, and event counting. "What was the average humidity in Lab 2 last Tuesday?" works exactly as you would expect.

3. **Chart generation** — Request visual charts on demand. Line charts for time-series trends, bar charts for cross-device comparisons, pie charts for proportional breakdowns, and scatter charts for correlations. Charts render directly inside the chat window.

4. **Documentation search** — The assistant searches the full Kilo IoT Server knowledge base semantically. It understands the meaning behind your question, not just keywords, and returns explanations with direct links to the relevant documentation pages.

## What it cannot do

The assistant operates within strict boundaries:

- It will not answer general trivia, perform non-IoT tasks, or act as a personal assistant.
- It has read-only access to your deployment. It cannot modify device configurations, change rules, or alter any settings.
- It cannot see data belonging to other organizations, even if you are a member of multiple organizations.
- It will never surface billing details, passwords, or API secrets.
