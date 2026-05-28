---
description: Per-rule edit locks in Kilo IoT Server — auto locking, heartbeat, timeout prevent overwrites during handoff.
---

# Edit Locks and Team Handoffs

When multiple people manage automation rules, the platform prevents accidental overwrites through per-rule edit locks, automatic save behavior, and clear handoff flows.

## How locking works

Each rule has its own edit lock. When you switch to **Editing** mode — either by clicking Edit from the Rules list or by switching the mode selector — the platform acquires a lock on that rule.

While a rule is locked:
- No one else can edit it
- Others see a lock icon next to the rule name in the Rules list, with a tooltip showing who holds the lock and when it expires
- The Edit, Clone, and Delete buttons are disabled for other users

One user can hold locks on multiple rules simultaneously. Each lock is independent.

## Lock expiry and the UI indicator

The lock has an expiry time, which is shown in the tooltip on the lock icon in the Rules list. The platform extends the lock automatically while you're actively editing (through a periodic heartbeat). If you stop interacting with the editor for an extended period, the inactivity flow begins (see below).

## Inactivity timeout

If you have been inactive in the editor for several minutes, a dialog appears:

> **"The rule will be closed in 5 minutes"**
> "Continue editing to reset the timer."

You have two options:
- **Continue** — Resets the inactivity timer and keeps your editing session active
- **Save and exit** — Saves your current work, releases the lock, and navigates back to the Rules list

If you do not respond and the timer runs out, the platform saves your current work as a new version (with save type "session_timeout"), releases the lock, and closes the editor.

## Autosave

While you're editing, the platform automatically saves your work at regular intervals. The save state is shown in the header:

- **Saving...** — A save is in progress
- **Saved** — Your latest changes have been persisted
- **Autosave Failed** — Something went wrong. A dialog appears offering to **Retry** or go **Back to rule**

Each autosave creates or updates a version entry in the history. The save type recorded depends on how the save was triggered (manual, auto, disconnect, etc.).

## Exiting the editor

When you navigate away from the editor — by clicking the back arrow, switching to Viewing mode, or closing the browser tab — the platform prompts you if there are unsaved changes:

> **"Are you sure you want to unlock the rule?"**
> "Unsaved changes will be lost."

Options:
- **Cancel** — Stay in the editor
- **Unlock** — Release the lock and leave.

In normal exit flows, the editor attempts to persist the latest BPMN state before releasing the lock. That means switching to Viewing mode, using the back button, or leaving the edit route does not simply throw away the current diagram state. The warning dialog is still conservative, so you should not treat it as a substitute for deliberate saves before major changes.

If you close the browser or lose your connection unexpectedly, the platform attempts a last-chance save and unlock flow. When successful, the latest state is preserved as a version with save type **disconnect**.

## Force-unlock (organization owners)

If a rule is locked and the user who locked it is unavailable, **organization owners** can force-unlock it.

From the Rules list:
1. Find the locked rule (identified by the lock icon)
2. Click the lock icon (clickable only for org owners)
3. A confirmation dialog appears:

> **"Unlock rule"**
> 'The rule "[rule name]" is currently being edited by another employee. Are you sure you want to unlock it? Any unsaved changes made by the other user will be lost.'

4. Click **Unlock** to release the lock

The user who was editing will see a notification:

> **"The organisation owner has unblocked the rule"**
> "Try accessing the rule again or contact the organisation owner."

Force-unlocking does not guarantee preservation of the other user's in-memory edits. It releases the lock immediately, so use it only when the handoff cannot wait.

## When another user is editing

If you try to edit a rule that is locked by someone else, a dialog appears:

> **"The rule is in edit mode"**
> "[User name] started editing the rule at [time]. The rule is closed during another user's editing."

Click **Go to rules** to return to the Rules list and wait for the lock to be released.

## Background lock cleanup

If a lock expires without being explicitly released (for example, the user's browser crashed and the disconnect signal was not received), a background process detects the expired lock, saves the last known state as a new version (with save type "lock_cleanup"), and releases the lock.

## Best practices for team handoffs

- **Keep editing sessions short.** The lock prevents others from working on the rule while you hold it.
- **Use the actions menu to duplicate** if you want to experiment without blocking the original rule.
- **Name your versions** after major changes so team members can identify what changed. See [Version History and Restore](version-history-and-restore.md).
- **Communicate with your team** before force-unlocking — the other user may still be working from another device.
