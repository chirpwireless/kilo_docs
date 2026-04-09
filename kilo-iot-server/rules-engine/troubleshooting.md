# Troubleshooting

This page covers the most common issues you will encounter when building, deploying, and managing automation rules — build validation errors, runtime problems, and platform limits.

## Build errors

When you click **Save and Build** in the Build Results Sidebar, the platform validates the entire diagram before producing an artifact. If validation fails, error messages appear in the sidebar. Here are the errors you may see, what causes them, and how to fix them.

| Error | Cause | Fix |
|---|---|---|
| Missing start event | The diagram has no Start Event node | Drag a Start Event from the palette onto the canvas. Every rule must begin with exactly one Start Event. |
| Missing end event | The diagram has no End Event node | Add at least one End Event. Every execution path must terminate at an End Event. |
| Multiple start events | More than one Start Event exists on the canvas | Remove the extra Start Events. A rule can have only one entry point. |
| No outgoing flow | A node has no arrow leaving it (and it is not an End Event) | Connect the node to the next step in the workflow. Every non-terminal node needs an outgoing flow. |
| Start event with no outgoing flow | The Start Event is not connected to any node | Draw a sequence flow from the Start Event to the first processing node in your rule. |
| Missing condition | An Exclusive Gateway branch has no CEL condition expression assigned | Open the gateway properties and add a CEL expression to each non-default branch. One branch should be marked as the default (no condition required for the default). |
| Invalid expression | A CEL expression contains a syntax error | Check the expression for unmatched parentheses, missing quotes around strings, or incorrect operators. See [CEL Reference](cel-reference.md) for valid syntax. |
| Condition must return bool | A gateway condition expression returns a non-boolean value | Gateway conditions must evaluate to `true` or `false`. Use comparison operators (`>`, `<`, `==`, `!=`, `>=`, `<=`) or logical operators (`&&`, `\|\|`, `!`). |
| Boundary event not attached | A Boundary Error Event exists on the canvas but is not attached to a task node | Drag the Boundary Error Event onto a Script Task, Set Alarm, or Enrichment node. It must be visually attached to the edge of a task. |
| Unknown element type | An unrecognized node exists on the canvas | Remove the unknown element and replace it with a supported node type from the palette. This can occur if a diagram was imported or modified externally. |

### Resolving build errors

1. Read the error message in the Build Results Sidebar — it identifies the problem and often the specific node.
2. Close the sidebar and fix the issue on the canvas.
3. Click **Build** again to re-validate.

Multiple errors can appear simultaneously. Fix them all before re-attempting the build.

## Common issues

### "The rule is locked and I cannot edit it"

Another team member is currently editing the rule. The lock icon on the rule row shows who holds the lock and when it expires.

**What to do:**
- Wait for the lock to expire. The lock expiry is shown in the UI on the lock tooltip.
- Contact the person who holds the lock and ask them to save and exit.
- If the lock holder is unavailable and you are the organization owner, you can force-unlock the rule from the Rules list. See [Edit Locks and Team Handoffs](edit-locks-and-team-handoffs.md) for details.

### "Build succeeded but the rule is not running"

Building and deploying are separate steps. A successful build creates an artifact, but the artifact is not automatically deployed.

**What to do:**
1. Go to the **Artifacts** tab on the Rules Engine page.
2. Find the build you just created.
3. Click **Deploy** to start the rule processing live sensor data.

### "The rule was force-stopped"

The platform monitors execution health. If a rule encounters sustained errors during execution, it is automatically stopped to prevent cascading failures. The artifact shows status **Force Stopped** (red) in the Artifacts tab.

**What to do:**
1. Open the rule in the editor and review the logic.
2. Check whether referenced sensors are still active and reporting data.
3. Verify that all CEL expressions are valid for the actual data shapes your sensors produce.
4. Check Enrichment nodes — the target sensor may have been deleted or taken offline.
5. Fix the issue, build a new artifact, and deploy it.

See [Emergency safety](builds-artifacts-and-deployment.md#emergency-safety) for more detail.

### "Enrichment keeps failing"

The Enrichment node fetches the latest reading from another sensor. If that sensor is offline, deleted, or has never reported data, the enrichment fails.

**What to do:**
- Verify that the target sensor exists and is actively reporting data.
- Attach a **Boundary Error Event** to the Enrichment node so the rule handles the failure gracefully instead of stopping entirely. See [Pattern 4: Error-safe enrichment](automation-patterns.md#pattern-4-error-safe-enrichment).

### "Autosave failed"

A network interruption or temporary server issue prevented the automatic save.

**What to do:**
- A dialog appears with two options: **Retry** (attempts the save again) or **Back to rule** (returns to the Rules list without saving the latest changes).
- Try **Retry** first. If it fails repeatedly, save manually using the **Save** button.
- If manual save also fails, check your network connection.

### "I cannot restore a rule from trash"

The rule may have exceeded the trash retention window and been permanently deleted.

**What to do:**
- Check the **Trash** tab. If the rule is no longer listed, it has been permanently removed and cannot be recovered.
- If the rule is still in the Trash tab but restore fails, check whether your organization has reached its subscription rule limit. Restoring a rule counts against the active rule quota.

### "I accidentally restored the wrong version"

Restoring a version does not destroy anything. The restore creates a new current version, and the previously active version is preserved in the history.

**What to do:**
1. Open the **History** tab.
2. Find the version that was active before the accidental restore.
3. View it (eye icon) and click **Restore this version** to make it current again.

## Subscription limits

Each subscription plan includes a maximum number of active automation rules. These limits affect several operations:

- **Creating rules:** The **Add Rule** button on the Rules tab is disabled when your organization reaches its rule limit. A message explains that the limit has been reached.
- **Restoring from trash:** Restoring a deleted rule counts as adding an active rule. If you are at the limit, the restore will not proceed.
- **Cloning rules:** Cloning creates a new rule, which counts against the limit.

To check your current usage and plan limits, visit your organization's subscription settings. To increase the limit, upgrade your plan or remove rules you no longer need.
