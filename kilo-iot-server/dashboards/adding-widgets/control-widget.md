---
description: Operate a device from a Kilo IoT dashboard with a Control widget — Switch, Button, Slider, or Input bound to a device command.
---

# Control widget

Most widgets report. The **Control widget** acts. It puts an interactive control on your dashboard — a **Switch**, **Button**, **Slider**, or **Input** — bound to one of a device's commands, so an operator can change the device's state right next to the readings that tell them whether they need to. It is the dashboard face of [Device Commands](../../devices/commands/): the command does the work, the widget is the control surface.

<figure><img src="../../../.gitbook/assets/control-dashboard.jpg" alt="A dashboard of Control widgets — a switch, a dial, a slider, and an input controlling a lamp"><figcaption></figcaption></figure>

## Prerequisite — define a command first

A Control widget operates an existing **device command**, so the device must already have one defined on its **Commands & States** tab. If a device has no commands it won't appear in the picker (you'll see *"No controllable devices in this organization"*). Set the command up first — see [Creating Commands](../../devices/commands/creating-commands.md) — then bind the widget to it.

## Shared setup flow

Every Control widget is created the same way; only the **Appearance** fields differ by type.

1. Open the dashboard in **edit mode** and click **Add widget** → **Control**.
2. On the **Datasource** tab (*"Control configuration"*), choose the **Source** (Device) and the **Device**, then pick the **Device metric** — the reading that reflects the device's current state. Click **Next**.
3. On the **Appearance** tab, enter a **Widget name** (required) and optional **Description**, then choose a **Widget type** (below). Fill in that type's fields and click **Save**.

## Choose a control type

| Type | Best for | Sends |
| --- | --- | --- |
| [Switch](control-widget/switch.md) | A persistent two-state condition (on/off, open/closed) | An on or off command as you toggle |
| [Button](control-widget/button.md) | A one-shot action (reset, open, start) | A single command per press |
| [Simple Slider](control-widget/slider-simple.md) | A numeric value on a horizontal track | A command parameter as you slide |
| [Circular Slider](control-widget/slider-circular.md) | A numeric value on a radial dial | A command parameter as you turn the dial |
| [Vertical Slider](control-widget/slider-vertical.md) | A numeric value on an upright track | A command parameter as you slide |
| [Input](control-widget/input.md) | An exact typed value | A command parameter when you press **Apply** |

The three sliders are the **Slider type** options — **Simple**, **Circular**, and **Vertical** — that you pick after choosing **Slider** as the widget type.

## How it behaves

* **Operate from the dashboard.** Using the control dispatches the bound command through the same pipeline as the device's States tab — same validation, delivery, and execution history.
* **Reflects real state.** The widget reads the **Device metric** and shows the current state, so it stays in sync with the device rather than just remembering the last action.
* **Disabled when it can't act.** If the device is offline or the binding is incomplete, the control is shown disabled rather than sending into the void.

## See also

* [Device Commands](../../devices/commands/) — define and manage the commands a Control widget operates
* [Creating Commands](../../devices/commands/creating-commands.md) — set up the command to bind
* Control types: [Switch](control-widget/switch.md) · [Button](control-widget/button.md) · [Simple Slider](control-widget/slider-simple.md) · [Circular Slider](control-widget/slider-circular.md) · [Vertical Slider](control-widget/slider-vertical.md) · [Input](control-widget/input.md)
