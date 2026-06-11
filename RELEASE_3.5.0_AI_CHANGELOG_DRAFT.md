# Staged: Kilo 3.5.0 AI Assistant changelog copy

Staged AI Assistant changelog copy — re-insert into the 3.5.0 Scale Log entry in
`faq/changelog.md` when the IoT AI Assistant ships (~next week). Lead dev: AI not released as
of 2026-06-11. This file is NOT listed in `SUMMARY.md`, so GitBook does not publish it.

When AI ships: restore the AI-framed intro wording, add the AI bullet back as the first
"What's in This Release" bullet, and re-insert the AI subsection (with its leading `***`
divider) ahead of the Device Commands subsection. Then revert the two-way-control intro/bullet
re-cast back to its current AI-led framing if desired.

---

## 1. Original AI-framed intro paragraph (verbatim, before the re-cast)

Every release until now made the Kilo IoT Server a sharper pair of eyes. **3.5.0 gives it hands.** Two changes turn the platform from something that watches your deployment into something that works it. First, the IoT AI Assistant stops being a question-answering box and becomes an integrator that *does the job with you* — provisioning devices, writing and deploying automations, standing up alarms, all from a plain-language conversation and all under your confirmation. Second, the platform goes genuinely **two-way**: Device Commands and a full family of Control widgets let you send actions back to your hardware — switch a relay, dim and color-tune a luminaire, push a setpoint, reboot a controller — over MQTT or LoRaWAN, from the device page or straight from a dashboard. Add a Text widget, a new Radial Gauge, and step-through rule debugging, and this is the most capable Kilo IoT Server yet. [kiloiot.io](https://kiloiot.io)

## 2. AI "What's in This Release" bullet (verbatim)

* **IoT AI Assistant — now an integrator copilot** — Grounded in your live deployment, it provisions devices, builds/tests/deploys rules (writing the CEL itself), creates alarms with escalation, manages team access, and recommends hardware — confirming before any consequential change and verifying its own work.

## 3. AI subsection (verbatim — re-insert with its leading `***` divider, before Device Commands)

**IoT AI Assistant — an integrator built into the platform**

<figure><img src="../.gitbook/assets/ai-assistant.jpg" alt="The AI Chat assistant ready to set up automations, devices, and alerts"><figcaption></figcaption></figure>

This is the headline of 3.5.0, and it changes what the platform *is*. Most "AI" in software is a chat box bolted onto a help page. The Kilo assistant is an experienced IoT integrator that lives inside your deployment, knows it end to end, and picks up real work alongside you. Open it from **AI Chat** in the sidebar and talk to it the way you'd brief a colleague.

**It acts — it doesn't just advise.** Describe an automation in plain language and it designs the rule, **writes the CEL**, simulates it against matching and non-matching values to prove it fires correctly, and deploys it. Ask it to onboard a device and it runs the flow — or completes it automatically when you hand over the LoRaWAN keys — then checks the device is actually reporting. It builds alarms with full escalation chains, manages team roles, and recommends hardware that fits what you're trying to do. These are the same operations you would run by hand, executed on your behalf.

**It's grounded, and it asks before it commits.** Every answer about your devices, rules, and alarms is read from your live deployment at the moment you ask, scoped to your permissions — not invented. It remembers the context of the conversation, so you can refine a task over several messages without starting over. And before anything destructive or consequential — deleting a device or rule, resolving an alarm — it stops and asks for an explicit **Confirm Action**. When it's done, it reads the result back to verify its own work. Its allowance scales with your plan, and you can connect your own model API key if you'd rather not be capped.

One boundary worth knowing: the assistant builds **monitoring and alerting** — automations that watch your data and notify the right people — and it'll show you where the controls are. Sending an actual on/off or setpoint to a device is the job of Device Commands, below.

[→ IoT AI Assistant](../kilo-iot-server/ai-assistant/README.md)
