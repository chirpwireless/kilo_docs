# Automation Patterns

This page presents proven automation patterns for enterprise IoT deployments. Each pattern describes a real operational scenario, the BPMN diagram structure, the CEL expressions involved, and when to use the pattern.

Most of these patterns are built visually by arranging nodes on the BPMN canvas. CEL appears in the focused places where the rule needs exact logic, classification, or dynamic messaging. Because CEL supports nested conditions, computed values, cross-sensor comparisons, and dynamic text generation, the range of automations you can model is broad — from a single threshold check to multi-step, multi-sensor workflows with fallback paths and graduated escalation.

These patterns build on the node types and canvas tools covered in [Node Reference](node-reference.md) and [Visual Editor](visual-editor.md). If you are new to the Rules Engine, start with [Creating Rules](creating-rules.md) to understand the basics.

---

## Pattern 1: Simple threshold alarm

The most common automation pattern. A sensor reports a value, the rule checks whether it exceeds a limit, and raises an alarm if it does.

### Diagram structure

```
Start Event → Script Task → Exclusive Gateway → Set Alarm → End Event
                                    ↓ (default)
                                End Event
```

### Configuration

**Start Event:** Bound to the target device and sensor — for example, a cold storage temperature probe reporting in degrees Celsius.

**Script Task** — "Check threshold":
```
{"above_threshold": vars.value > 30.0}
```
This expression creates a boolean flag. The gateway uses this flag to decide whether to raise an alarm.

**Exclusive Gateway** — Two branches:
- **Alarm branch:** Condition `vars.above_threshold == true` — routes to the Set Alarm node
- **Default branch:** Routes to an End Event (no action needed when the reading is within range)

**Set Alarm:** Configured with an existing [Alarm Definition](../alarm/) and a motivation message such as `"Temperature reading exceeded 30 C"`. The Set Alarm node triggers the definition — severity, channels, and escalation are configured on the Alarms page, not in the rule itself.

### When to use this pattern

- Cold storage temperature monitoring — alert when temperature rises above the safe threshold
- Server room environmental monitoring — alert when ambient temperature or humidity exceeds operating limits
- Equipment vibration monitoring — alert when vibration magnitude exceeds the baseline
- Any single-sensor, single-threshold scenario where a reading outside range requires immediate attention

---

## Pattern 2: Multi-level escalation

When a single threshold is not enough, this pattern classifies the reading into severity levels and routes each level to a different alarm definition — enabling different notification channels, escalation chains, and response procedures for each severity.

### Diagram structure

```
Start Event → Script Task → Exclusive Gateway → Set Alarm (Critical) → End Event
                                    ↓ (warning)
                            Set Alarm (Warning) → End Event
                                    ↓ (default)
                                End Event
```

### Configuration

**Script Task** — "Classify severity":
```
{"level": vars.value > 80 ? "critical" : vars.value > 50 ? "warning" : "normal"}
```
This expression evaluates the reading and assigns a severity level as a string.

**Exclusive Gateway** — Three branches:
- **Critical branch:** Condition `vars.level == "critical"` — routes to the Critical alarm definition (SMS to on-call engineer, email to facility manager)
- **Warning branch:** Condition `vars.level == "warning"` — routes to the Warning alarm definition (email to operations team)
- **Default branch:** Routes to an End Event (normal readings require no action)

### When to use this pattern

- HVAC monitoring with graduated response — warning when a zone drifts out of comfort range, critical when it reaches unsafe levels
- Environmental compliance — warning when a reading approaches a regulatory limit, critical when it exceeds it
- Battery monitoring — warning at 20%, critical at 10%, with different notification urgency for each
- Any scenario where different severity levels require different response speeds, channels, or teams

---

## Pattern 3: Multi-sensor comparison

Some decisions require data from more than one sensor. This pattern fetches a second reading using an Enrichment node, computes the relationship between the two values, and decides based on the result.

### Diagram structure

```
Start Event → Enrichment → Script Task → Exclusive Gateway → Set Alarm → End Event
                                                 ↓ (default)
                                             End Event
```

### Configuration

**Start Event:** Bound to an indoor temperature sensor.

**Enrichment** — "Fetch outdoor temperature": Configured to retrieve the latest reading from an outdoor temperature sensor on the same site. The enriched value becomes available as a variable in subsequent nodes.

**Script Task** — "Compute differential":
```
{"delta": vars.value - vars.outdoor_temp.value, "needs_alarm": vars.value - vars.outdoor_temp.value > 10}
```
This expression computes the temperature difference between indoor and outdoor sensors and flags whether the gap exceeds the threshold.

**Exclusive Gateway** — Two branches:
- **Alarm branch:** Condition `vars.needs_alarm == true` — routes to Set Alarm
- **Default branch:** Routes to End Event

**Set Alarm:** Configured with a motivation message such as `"Indoor/outdoor temperature differential exceeds 10 degrees"`.

### Important: add error handling

Enrichment nodes depend on external data — the target sensor may be offline, unreachable, or returning stale data. Always attach a **Boundary Error Event** to the Enrichment node. See [Pattern 4](#pattern-4-error-safe-enrichment) for the full error-handling approach.

### When to use this pattern

- HVAC efficiency monitoring — alert when the indoor/outdoor temperature gap indicates insulation failure or HVAC malfunction
- Differential pressure monitoring — compare pressure sensors across clean room zones
- Redundant sensor validation — compare readings from two sensors measuring the same metric and alert if they diverge significantly
- Any scenario where a decision depends on the relationship between two data points rather than an absolute threshold

---

## Pattern 4: Error-safe enrichment

Any rule that uses an Enrichment node should handle the possibility that the enrichment fails. This pattern wraps the Enrichment node with a Boundary Error Event that routes to a fallback alarm, ensuring the rule never fails silently when a reference sensor is unavailable.

### Diagram structure

```
Start Event → Enrichment → Script Task → Exclusive Gateway → Set Alarm → End Event
                  |                                ↓ (default)
           [Boundary Error]                    End Event
                  ↓
         Set Alarm (Fallback) → End Event
```

### Configuration

**Enrichment:** Same configuration as in Pattern 3 — fetches a reading from a secondary sensor.

**Boundary Error Event:** Attached to the Enrichment node. If the enrichment fails for any reason (sensor offline, timeout, missing data), the error event catches the failure and routes to the fallback path.

**Set Alarm (Fallback):** Configured with a different alarm definition and a motivation message such as `"Reference sensor offline — unable to compute differential. Manual check required."` This ensures your operations team knows the automated check could not complete.

### When to use this pattern

- Any rule that uses Enrichment and cannot afford to fail silently
- Critical monitoring scenarios where a missing comparison reading is itself an alert-worthy condition
- Compliance workflows where every monitoring gap must be documented
- As a standard best practice: attach a Boundary Error Event to every Enrichment node in every rule

---

## Pattern 5: Data transformation pipeline

Some sensor data requires preprocessing before it can be meaningfully evaluated. This pattern chains multiple Script Tasks to transform raw readings through unit conversion, calibration, or normalization steps before the decision gateway.

### Diagram structure

```
Start Event → Script Task (Convert) → Script Task (Calibrate) → Exclusive Gateway → Set Alarm → End Event
                                                                          ↓ (default)
                                                                      End Event
```

### Configuration

**Script Task** — "Convert units":
```
{"celsius": (vars.value - 32) * 5.0 / 9.0}
```
Converts a Fahrenheit reading to Celsius. Adjust the formula for your specific conversion needs.

**Script Task** — "Apply calibration offset":
```
{"calibrated": vars.celsius - 1.5, "above_threshold": vars.celsius - 1.5 > 25.0}
```
Applies a known calibration offset (in this example, the sensor reads 1.5 degrees high) and checks the corrected value against the threshold.

**Exclusive Gateway** — Two branches:
- **Alarm branch:** Condition `vars.above_threshold == true`
- **Default branch:** Routes to End Event

### When to use this pattern

- Sensors reporting in non-standard units that need conversion before threshold comparison
- Sensors with known calibration offsets that must be corrected before evaluation
- Data normalization for sensors from different manufacturers reporting the same metric in different scales
- Any scenario where raw sensor data requires one or more transformation steps before it is meaningful for decision-making

---

## Pattern 6: Conditional enrichment with fallback logic

A more advanced pattern that combines enrichment, transformation, error handling, and multi-branch decisions into a single robust rule. This pattern represents a production-grade automation workflow.

### Diagram structure

```
Start Event → Enrichment → Script Task (Analyze) → Exclusive Gateway → Set Alarm (Critical) → End Event
                  |                                          ↓ (warning)
           [Boundary Error]                          Set Alarm (Warning) → End Event
                  ↓                                          ↓ (default)
         Script Task (Fallback) → Set Alarm (Offline) → End Event
```

### Configuration

**Enrichment:** Fetches a reference reading (for example, outdoor humidity for a warehouse).

**Boundary Error Event:** Catches enrichment failures and routes to a dedicated fallback Script Task.

**Script Task (Fallback):**
```
{"level": "offline"}
```
Sets the level to "offline" so the fallback alarm fires.

**Script Task (Analyze):**
```
{"delta": vars.value - vars.reference.value, "level": vars.value - vars.reference.value > 20 ? "critical" : vars.value - vars.reference.value > 10 ? "warning" : "normal"}
```

**Exclusive Gateway** — Three branches:
- **Critical:** `vars.level == "critical"`
- **Warning:** `vars.level == "warning"`
- **Default:** End Event

This pattern handles the happy path (enrichment succeeds, data is analyzed, appropriate alarm fires), the warning path, and the failure path (enrichment fails, operations team is alerted to the sensor issue) — all in a single rule.

---

## Best practices for building automation rules

### Start simple, add complexity when needed

Begin with Pattern 1 (simple threshold) and only add enrichment, multi-level classification, or transformation steps when the operational scenario genuinely requires them. A simple rule that works reliably is better than a complex one that is difficult to troubleshoot.

### Name your nodes descriptively

Default node names like "Script Task 1" are meaningless during troubleshooting. Name nodes after what they do: "Check temperature threshold", "Classify severity", "Fetch outdoor reading." Your future self — and your colleagues — will appreciate this when reviewing the rule at 3 AM.

### Always add a default branch on Gateways

Every Exclusive Gateway should have a default branch that routes to an End Event. This ensures the rule completes gracefully even if none of the explicit conditions match. Without a default branch, the rule has no path forward for unexpected values.

### Always attach Boundary Error Events to Enrichment nodes

Enrichment depends on external data. If the target sensor is offline, deleted, or temporarily unreachable, the enrichment will fail. A Boundary Error Event provides a graceful fallback — either routing to a "sensor offline" alarm or skipping the enrichment-dependent logic entirely.

### Use alarm suppression windows to prevent notification floods

When a threshold is continuously exceeded, the alarm definition's suppression and repeat settings prevent operators from being flooded with duplicate notifications. Configure these settings in your [Alarm Definitions](../alarm/) rather than trying to build suppression logic into the rule itself.

### Keep expressions simple

CEL expressions should be easy to read and understand. If an expression grows beyond a single line, split the logic into multiple Script Tasks. Each task handles one computation, and the results flow through to the next step as variables.

### One rule per concern

Resist the temptation to build a single rule that monitors temperature, humidity, CO2, and vibration simultaneously. Separate rules are easier to version, test, deploy, and troubleshoot independently. If one rule needs to be updated or rolled back, the others continue running unaffected.

### Build and deploy deliberately

After making changes, build the rule to validate it. Review the build artifact name and comment. Deploy only when you are confident the rule is correct. The explicit build-then-deploy workflow exists to prevent untested changes from reaching production.
