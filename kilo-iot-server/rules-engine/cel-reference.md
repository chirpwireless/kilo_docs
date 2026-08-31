---
description: CEL syntax reference for Kilo IoT rules — Common Expression Language used in gateways, scripts, alarms.
---

# CEL Reference

The Rules Engine uses [CEL (Common Expression Language)](https://cel.dev) for expressions inside the visual workflow editor — gateway conditions, Script Task computations, alarm messages, enrichment lookups, and input/output definitions. CEL is a fast, safe expression language originally designed by Google for evaluating conditions in security policies and infrastructure systems. The full language specification is available on [GitHub](https://github.com/google/cel-spec).

CEL is not a general-purpose programming language. It evaluates expressions and returns results. It cannot access the filesystem, make network calls, create loops, or modify external state. This makes it safe to run user-defined expressions without risk to the platform or to other rules.

Most Kilo rules use only a few short expressions. The workflow structure remains visual and BPMN-based; CEL is the precision layer that makes those workflows useful in real production scenarios.

---

## Available data

Every expression in the Rules Engine has access to process variables through the `vars` object. The data available depends on where in the rule the expression runs.

Fields in `vars` can be accessed with **dot notation** or **bracket notation**:

```cel
vars.temperature        // dot notation — works for simple identifiers
vars["sensor_id"]       // bracket notation — works for any name
vars["my-sensor"]       // bracket notation required — hyphen in name
```

Dot notation is convenient for most field names. Bracket notation is required when a field name contains hyphens, spaces, or other special characters, or when the field name is computed dynamically from another expression.

### Available after the Start Event

**What the Start Event provides depends on its Start source**, so check which kind of rule you are writing before reaching for a variable.

**Start source: Sensor reading**

| Variable | Type | Description |
|---|---|---|
| `vars.value` | Varies by sensor | The sensor reading that triggered the rule. Could be a number (temperature, humidity), string (door status), or boolean (motion detected). |
| `vars.sensor_id` | string | The unique identifier of the sensor that triggered the rule. |
| `vars.timestamp` | timestamp | The time the sensor reading was recorded. |

**Start source: Trigger condition**

| Variable | Type | Description |
|---|---|---|
| `vars.device_name` | string | The name of the device that satisfied the condition. On a [trigger](triggers.md) watching several devices, this identifies the one that fired. |
| `vars.subject_kind` | string | The type of watched resource. This is currently `device`. |
| `vars.subject_id` | string | The identifier of the watched device that satisfied the condition. |
| `vars.sensor_id` | string | The sensor identifier used to associate the run and any alarm with the watched device. |
| `vars.detector_id` | string | The identifier of the trigger that started the rule. |
| `vars.timestamp` | int | The trigger signal time as Unix seconds. |

> **`vars.value` does not exist on a trigger-started rule.** A trigger reports a condition transition rather than handing the rule one normalized sensor event. This is true for both immediate and duration triggers. An expression referring to `vars.value` will fail on every trigger signal — check this first when converting an existing rule from **Sensor reading**.

### Available after Script Tasks

If a Script Task returns a map, each key is merged into `vars`. For example, after a Script Task with the expression `{"level": "critical", "delta": 15.2}`, downstream nodes can access `vars.level` and `vars.delta`.

Script Task, Gateway, Set Alarm, Enrichment, and Start Event outputs can also publish named values into `vars` after that node runs.

### Available after Enrichment

After an Enrichment node stores data under a variable name (e.g., `outdoor_temp`), the enriched data is accessible as a nested object:

| Variable | Type | Description |
|---|---|---|
| `vars.outdoor_temp.value` | Varies | The most recent reading from the enriched sensor. |
| `vars.outdoor_temp.sensor_id` | string | The enriched sensor's identifier. |
| `vars.outdoor_temp.type` | string | The data type of the enriched sensor. |
| `vars.outdoor_temp.timestamp_ms` | int | Timestamp of the reading in milliseconds. |

### Custom variables

Input and output expressions on Start Events, Exclusive Gateways, Script Tasks, Set Alarm nodes, and Enrichment nodes let you name a computed value. Choose between them by how far the value needs to travel:

* **Outputs** add the name to the workflow context. It is accessible as `vars.<name>` in every node that runs afterwards.
* **Inputs** stay on the node you defined them on. They are computed before that node runs and its own expressions can use them — a gateway's inputs are available to that gateway's flow conditions — but later nodes cannot read them.

If a value computed on one node is needed further along the rule, make it an output. See [Node Reference](node-reference.md#do-i-need-the-input-and-output-parameters) for an example.

---

## Type system

CEL supports the following types. Every value in an expression resolves to one of these.

| Type | Description | Example |
|---|---|---|
| `bool` | Boolean true or false | `true`, `vars.value > 30` |
| `int` | Signed integer | `42`, `-7` |
| `uint` | Unsigned integer | `42u` |
| `double` | Floating-point number | `30.5`, `-0.7` |
| `string` | Text | `"critical"`, `"Temperature alert"` |
| `bytes` | Byte sequence | `b"\x00\xff"` |
| `list` | Ordered collection | `[1, 2, 3]`, `["a", "b"]` |
| `map` | Key-value pairs | `{"level": "high", "count": 5}` |
| `null_type` | Null value | `null` |
| `timestamp` | A point in time | `vars.timestamp` |
| `duration` | A span of time | `duration("5m")` |

### Type conversions

Use built-in conversion functions to convert between types:

| Function | Description | Example |
|---|---|---|
| `int()` | Convert to integer | `int(vars.value)` |
| `uint()` | Convert to unsigned integer | `uint(42)` |
| `double()` | Convert to double | `double(vars.value)` |
| `string()` | Convert to string | `string(vars.value)` |
| `type()` | Returns the type of a value | `type(vars.value)` |

String conversion is particularly important when building alarm motivation messages, since CEL requires explicit conversion from numbers to strings for concatenation.

---

## Operators

### Comparison operators

| Operator | Meaning | Example |
|---|---|---|
| `==` | Equal to | `vars.value == 0` |
| `!=` | Not equal to | `vars.status != "offline"` |
| `>` | Greater than | `vars.value > 30.0` |
| `>=` | Greater than or equal to | `vars.value >= 100` |
| `<` | Less than | `vars.value < 5` |
| `<=` | Less than or equal to | `vars.value <= 25.0` |

### Logical operators

| Operator | Meaning | Example |
|---|---|---|
| `&&` | Logical AND | `vars.value > 30 && vars.value < 50` |
| `\|\|` | Logical OR | `vars.value < 0 \|\| vars.value > 100` |
| `!` | Logical NOT | `!has(vars.humidity)` |

### Arithmetic operators

| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `vars.value + 10` |
| `-` | Subtraction | `vars.value - vars.outdoor_temp.value` |
| `*` | Multiplication | `vars.value * 1.8 + 32` |
| `/` | Division | `vars.value / 100.0` |
| `%` | Modulo | `vars.value % 10` |

### Ternary operator

The ternary operator `? :` returns one of two values based on a condition:

```cel
vars.value > 80 ? "critical" : "normal"
```

Ternary expressions can be nested for multi-level classification:

```cel
vars.value > 80 ? "critical" : vars.value > 50 ? "warning" : "normal"
```

### String operators and functions

| Operation | Syntax | Example |
|---|---|---|
| Concatenation | `+` | `"Temp: " + string(vars.value)` |
| Length | `size()` | `vars.name.size() > 0` |
| Contains | `contains()` | `vars.status.contains("error")` |
| Starts with | `startsWith()` | `vars.zone.startsWith("warehouse")` |
| Ends with | `endsWith()` | `vars.device_id.endsWith("-prod")` |
| Regex match | `matches()` | `vars.device_id.matches("^WH-[0-9]+$")` |

### Collection functions

| Function | Description | Example |
|---|---|---|
| `x in list` | Membership check | `vars.zone in ["A", "B", "C"]` |
| `key in map` | Key exists in map | `"humidity" in vars` |
| `list.exists(x, expr)` | True if any element satisfies the expression | `[10, 25, 40].exists(t, t > 30)` |
| `list.all(x, expr)` | True if all elements satisfy the expression | `[10, 25, 40].all(t, t > 0)` |
| `list.filter(x, expr)` | Returns elements that satisfy the expression | `[10, 25, 40].filter(t, t > 20)` → `[25, 40]` |
| `list.map(x, expr)` | Transforms each element | `[1, 2, 3].map(x, x * 10)` → `[10, 20, 30]` |
| `list.exists_one(x, expr)` | True if exactly one element satisfies | `[10, 25, 40].exists_one(t, t > 30)` → `true` |

### Intermediate variables with cel.bind

Use `cel.bind()` to define a temporary variable inside an expression, avoiding redundant computation:

```cel
cel.bind(delta, vars.value - vars.baseline.value,
  {"delta": delta, "severity": delta > 20 ? "critical" : delta > 10 ? "warning" : "normal"}
)
```

The first argument names the variable, the second computes its value, and the third is the expression that uses it.

### Existence check

| Function | Description | Example |
|---|---|---|
| `has()` | Returns `true` if the field exists | `has(vars.humidity)` |

Use `has()` before accessing a variable that might not exist. After an Enrichment node with a Boundary Error Event, for example, the enriched data is only available if the enrichment succeeded.

---

## Common expression patterns

### Threshold check

The simplest and most common pattern. Used in gateway conditions to branch on a single value.

```cel
vars.value > 30.0
```

Returns `true` if the sensor reading exceeds 30. Works in Exclusive Gateway conditions to route the flow.

### Range check

Test whether a reading falls within an acceptable band.

```cel
vars.value >= 20.0 && vars.value <= 25.0
```

Useful for HVAC compliance, cold chain monitoring, or any scenario where both upper and lower bounds matter.

### Multi-condition check

Combine checks across multiple variables. This pattern often appears after enrichment, when data from more than one sensor is available.

```cel
vars.value > 30.0 && has(vars.humidity) && vars.humidity < 20
```

Always use `has()` before referencing variables that come from optional sources (enrichment, prior script tasks with conditional outputs).

### Severity classification (Script Task)

Return a map from a Script Task to classify a reading into categories. Each key becomes a separate process variable.

```cel
{"level": vars.value > 80 ? "critical" : vars.value > 50 ? "warning" : "normal"}
```

After this Script Task, `vars.level` is available for gateway conditions or alarm messages.

### Dynamic alarm message (Set Alarm)

Build a human-readable string that includes live sensor data. The motivation message field in a Set Alarm node uses this pattern.

```cel
"Temperature " + string(vars.value) + " degrees exceeded threshold of " + string(vars.threshold)
```

Remember to use `string()` to convert numeric values — CEL does not implicitly convert numbers to strings during concatenation.

### Enriched data check (after Enrichment)

Reference a value fetched by an Enrichment node. The variable name used in the Enrichment configuration becomes the key under `vars`.

```cel
vars.outdoor_temp.value > 35.0
```

### Computed derived values (Script Task)

Compute new values from multiple inputs and store them for downstream use.

```cel
{"delta": vars.value - vars.outdoor_temp.value, "needs_alarm": vars.value - vars.outdoor_temp.value > 10}
```

After this Script Task, the gateway can check `vars.needs_alarm` directly, and the alarm message can reference `vars.delta` for context.

### Combining classification with computed values

A single Script Task can perform multiple computations at once.

```cel
{
  "severity": vars.value > 90 ? "critical" : vars.value > 70 ? "warning" : "normal",
  "deviation": vars.value - vars.baseline.value,
  "message": "Reading " + string(vars.value) + ", deviation " + string(vars.value - vars.baseline.value) + " from baseline"
}
```

---

## Where CEL is used

CEL expressions appear in multiple places across the Rules Engine. The context determines what the expression should return.

| Location | Expected return type | Purpose |
|---|---|---|
| **Start Event — Inputs** | Any | Create local helper values when the sensor event enters the rule. |
| **Start Event — Outputs** | Any | Publish named values into the shared workflow context. |
| **Script Task — Script** | Any (map preferred) | Transform or classify data. Map keys merge into process variables. |
| **Script Task — Inputs** | Any | Create local helper values before the script runs. |
| **Script Task — Outputs** | Any | Publish additional named values after the task runs. |
| **Exclusive Gateway — Condition** | `bool` | Route execution. Must return `true` or `false`. |
| **Exclusive Gateway — Inputs** | Any | Prepare local values used by the branch conditions. |
| **Exclusive Gateway — Outputs** | Any | Publish values after the routing decision. |
| **Set Alarm — Motivation Message** | `string` | Describe why the alarm was triggered. Displayed to responders. |
| **Set Alarm — Inputs** | Any | Prepare values before the alarm action runs. |
| **Set Alarm — Outputs** | Any | Publish values after the alarm node runs. |
| **Enrichment — Sensor ID** | `string` | Identify which sensor to fetch data from. |
| **Enrichment — Inputs** | Any | Prepare values before the lookup runs. |
| **Enrichment — Outputs** | Any | Publish values after the enrichment result is available. |

### Inputs and Outputs scope

Inputs and Outputs on a node serve different purposes and have different visibility:

- **Inputs** create **local** variables scoped to the current node only. They do not modify the shared workflow context. Input expressions evaluate against the current `vars` state. Use them to prepare helper values or precompute intermediate results before the node's main logic runs.

- **Outputs** write values into the **shared** workflow context (`vars`). Output expressions evaluate against the node's local scope — which includes both the original `vars` and any input-defined locals. Values published by Outputs persist and are accessible to all downstream nodes.

**Practical implication:** If you define an input named `threshold` on an Exclusive Gateway, downstream nodes cannot see `vars.threshold` — it exists only during that gateway's condition evaluation. To make a computed value available downstream, define it as an Output instead.

---

## Safety and sandboxing

CEL is sandboxed by design. Expressions execute in a restricted environment with no access to:

- The filesystem
- Network resources
- System clocks (except through provided timestamp variables)
- External services
- Mutable state outside the expression's own evaluation

An expression cannot create infinite loops, allocate unbounded memory, or affect other rules. If an expression fails (type error, division by zero, reference to a missing variable without `has()` guard), the node that contains it throws an error. Attach a Boundary Error Event to handle these failures gracefully.

---

## Platform functions

In addition to the standard CEL library, the Rules Engine provides two platform-specific functions.

### error(message)

Takes a string argument and always produces an error value. When a Script Task expression evaluates to an error, the engine checks for an attached Boundary Error Event. If one exists, execution routes through the error path. If not, the error stops the rule.

Use `error()` for deliberate conditional failure — situations where a specific data condition should trigger the error-handling path rather than continue normal execution.

```cel
vars.temperature > 200 ? error("critical overheat detected") : {"status": "ok"}
```

In this example, temperatures above 200 deliberately fail the Script Task. If a Boundary Error Event is attached, the error path runs (perhaps triggering an emergency alarm). Below 200, the Script Task outputs `{"status": "ok"}` as normal.

```cel
has(vars.calibration_date) ? {"calibrated": true} : error("sensor not calibrated")
```

### random()

Returns a pseudorandom floating-point number in the range [0.0, 1.0). Useful for probabilistic sampling, percentage-based routing, or generating random identifiers.

```cel
random() < 0.1 ? "sampled" : "skipped"
```

```cel
{"random_id": random() * 1000000.0}
```

---

## Practical tips

**Keep expressions focused.** A single expression should do one thing. If you need to classify a reading, compute a delta, and build a message, use multiple Script Tasks rather than one complex expression. This makes the rule easier to read, debug, and maintain.

**Prefer visual structure first.** Use the canvas to show the workflow, then use CEL inside the relevant fields. A readable BPMN diagram with a few clear expressions is easier to audit than a rule that hides too much logic inside one giant expression.

**Use `has()` before optional fields.** Any variable that comes from enrichment, conditional script tasks, or optional inputs may not exist. Access it without `has()` and the expression throws an error.

```cel
has(vars.outdoor_temp) && vars.outdoor_temp.value > 35.0
```

**Convert types explicitly.** CEL does not perform implicit type conversion. When building alarm messages, convert numbers with `string()`. When performing arithmetic, ensure both operands are the same numeric type — mixing `int` and `double` can produce unexpected results.

**Use maps for multi-value outputs.** Returning a map from a Script Task is the standard way to make multiple computed values available downstream. Each key becomes an independent process variable.

**Test expressions against edge cases.** Consider what happens when a sensor reports zero, a negative value, or an unexpectedly large number. Gateway conditions should handle the full range of possible inputs without routing to an unintended branch.

**Name variables descriptively.** When defining Enrichment variable names or Script Task output keys, use names that describe the data — `outdoor_temp`, `humidity_reading`, `severity_level` — not `x`, `val2`, or `tmp`. Your colleagues will read these when reviewing or modifying the rule.
