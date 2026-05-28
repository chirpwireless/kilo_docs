---
description: Debug a Kilo IoT Server automation rule before deployment — step through nodes, watch variables, and check expressions against test context.
---

# Debugging Rules

A rule that looks correct on the canvas can still behave in ways you didn't expect — a gateway sends the flow down the wrong branch, an expression evaluates against a data shape you didn't anticipate, a variable holds something other than what you assumed. Debug mode lets you find that out *before* the rule is deployed to production, by running the rule step by step and inspecting exactly what happens at every node.

Debug mode is an interactive debugger built into the visual editor. You feed the rule a test payload, then walk through its execution one node at a time — pausing where you want, watching variables change, checking expressions, and deciding how each side effect is handled. It is the difference between deploying a rule and *hoping*, and deploying a rule you have actually watched run.

## Starting a debug session

1. Open the rule in the [visual editor](visual-editor.md).
2. In the rule editor's top bar, click **Set context** to open the **Start Debug Session** panel. (The top bar also carries a **Start Debug** button, shortcut **F12**.)
3. The panel asks you to **provide initial context variables** — the input the rule will run against. Each row is a **Name** and a **Value**:
   * **Name** is the variable name your rule expects (for example `value`, `temperature`, `status`).
   * **Value** is the test reading. It can be a number, `true` / `false`, `null`, text, or JSON — the panel interprets it for you.
4. Click **Add metric** to add more context variables.
5. Click **Load and Start**. The rule loads and pauses, ready for the first step.

The initial context stands in for what a device would send in production. Set it to the values you want to test — the edge case, the threshold, the reading you suspect is causing trouble.

## The debug controls

Once a session is running, a debug toolbar sits at the bottom of the editor with five controls:

* **Run (F10)** — run the rule until it hits a breakpoint or finishes.
* **Step over (F9)** — execute the next node and stop, showing its result.
* **Step into (F8)** — enter the next node and inspect its internals — its inputs, scripts, and outputs — rather than just its result.
* **Run ignore breakpoints (F11)** — run the whole rule to the end without pausing at any breakpoint.
* **Stop (F12)** — end the debug session.

As the rule runs, the active node is highlighted on the canvas, so you can always see where execution currently is.

## Breakpoints

A breakpoint pauses execution at a specific node, so you can inspect the state at exactly the point you care about.

* **Set a breakpoint** — click a node on the canvas to toggle a breakpoint on it. Open the **Breakpoints** tab in the debug panel to see them all; the tab header shows a count.
* **Enable or disable** — each breakpoint has a red indicator dot. Click it to switch the breakpoint off without removing it, and on again later.
* **Conditional breakpoints** — click **Set condition** on a breakpoint and enter a CEL expression. The breakpoint then pauses execution *only* when that expression is true — for example, only when `value > 30`. A conditional breakpoint is marked with a **Conditional** badge. See [CEL Reference](cel-reference.md) for expression syntax.

Conditional breakpoints are how you debug an intermittent problem: let the rule run normally and stop it only on the reading that triggers the misbehavior.

## Inspecting variables

The **Variable** tab of the debug panel shows the rule's state at the current step, in two sections:

* **Changes** — the variables that were added or changed since the last step, highlighted so you can see at a glance what the node you just executed actually did. Deleted variables are shown struck through.
* **All variables** — the complete current variable set with their values.

While paused, you can also **edit** the state directly: change a variable's value, add a new variable, or delete one. This lets you push the rule down a branch you want to test without having to restart the session with different input.

When you use **Step into** on a node, the Variable tab also shows an element-detail card with that node's **Inputs**, **Scripts**, and **Outputs** — the internal workings of the step, not just its end result.

## Watch expressions and Evaluate

The **Watch** tab keeps an eye on expressions as the rule runs:

* **Add watch** — enter a CEL expression and it is re-evaluated automatically at every step, so you can track a derived value (say, `value - threshold`) without hunting through the variable list.
* **Evaluate** — enter a one-off CEL expression and evaluate it against the current state immediately. Useful for checking a piece of logic — "what would this gateway condition return right now?" — without adding it to the rule.

## Side effects

Some nodes do more than transform data — they send notifications, raise alarms, or call out to other systems. When debug execution reaches a node with a side effect, a **Side Effect** dialog appears and asks how to handle it. Three options:

* **Execute — run the real handler.** The side effect happens for real, exactly as it would in a deployed rule.
* **Skip — variables unchanged.** The side effect is skipped and the rule's variables are left as they are.
* **Mock — provide a mock response.** You supply a stand-in response (as JSON) and the rule continues as if the handler had returned it.

This is what lets you debug a rule that sends alerts without actually paging an on-call engineer: choose **Skip** or **Mock** while you're testing the logic, and **Execute** only when you specifically want to verify the real delivery.

## When a node fails

If a node errors during execution, an error dialog surfaces the node's name and the underlying error, with a **Go to…** action that focuses the canvas on the failing node. This takes you straight to the problem instead of leaving you to hunt for which node in a large rule went wrong.

## Tips

* Debug the edge cases, not the happy path — set the initial context to the threshold value, the missing field, the out-of-range reading.
* Use a conditional breakpoint to catch an intermittent problem: run the rule normally and stop only on the reading that triggers it.
* Edit a variable mid-session to force the rule down a specific branch instead of restarting with new input.
* Keep side effects on **Skip** or **Mock** while you iterate on logic; switch to **Execute** only for a deliberate end-to-end check.
* Once a rule debugs cleanly, build and deploy it — see [Builds and Deployment](builds-artifacts-and-deployment.md).

## See also

* [Visual Editor](visual-editor.md) — The canvas debug mode runs on
* [CEL Reference](cel-reference.md) — Expression syntax for conditional breakpoints and watches
* [Builds and Deployment](builds-artifacts-and-deployment.md) — Ship a rule once it debugs cleanly
* [Troubleshooting](troubleshooting.md) — Build errors and runtime issues
