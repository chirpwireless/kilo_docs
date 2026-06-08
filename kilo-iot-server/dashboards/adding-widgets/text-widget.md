---
description: Add headings and notes to a Kilo IoT dashboard with the Text widget — label sections and group related tiles so a busy board reads clearly.
---

# Text widget

A dashboard packed with tiles is only useful if a viewer can find their way around it. The **Text widget** adds a label or note to the board — a heading that names a section, a caption that explains a group of readings — so a dense operations dashboard reads as organized zones rather than a wall of numbers.

It carries no data and no device binding. Its only job is to give the board structure and context.

## When to use it

* **Section headers** — separate "Cold Storage", "HVAC", and "Power" into labeled zones on a single board.
* **Per-area captions** — name each building, floor, or line so a multi-site dashboard is self-explaining.
* **Short notes** — a line of guidance for whoever is reading the board ("Escalate any red tile to the on-call engineer").

## Adding a Text widget

1. Open the dashboard in edit mode and choose **Text** from the widget picker.
2. Fill in the fields:
   * **Widget name** *(required)* — the heading text shown on the dashboard. Placeholder *"Enter widget name."*
   * **Description** — optional supporting text shown beneath the heading. It accepts multiple lines, so you can add a short note as well as a title.
3. Click **Save** to place it.

Resize and position it like any other tile — stretch it across the top of a section as a banner, or keep it compact as an inline label. Combined with dashboard folders and tile placement, Text widgets turn a long board into a structured layout that a viewer can scan in seconds.

## See also

* [Adding Widgets](../adding-widgets.md) — Edit mode and the widget picker
* [Dashboards](../README.md) — Organizing boards and folders
