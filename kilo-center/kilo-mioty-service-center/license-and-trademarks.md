---
description: KiloCenter Community Edition license — AGPL-3.0-or-later with network-use clause — and trademark notices.
---

# License And Trademarks

### License

KiloCenter Community Edition is licensed under the **GNU Affero General Public License v3.0 or later** (AGPL-3.0-or-later).

The full license text is available in the LICENSE file in the repository root, and at [gnu.org/licenses/agpl-3.0.html](https://www.gnu.org/licenses/agpl-3.0.html).

### What AGPL Means for Hosted Modifications

The AGPL extends GPL with a network-use clause:

* If you **distribute** KiloCenter binaries, you must provide the source under AGPL.
* If you **run a modified version as a network service**, you must make the complete corresponding source available to users of that service.
* You may link to the source or provide a direct download — the requirement is that users can obtain it.

Source code is always available at [github.com/Kiloiot/KiloServiceCenter](https://github.com/Kiloiot/KiloServiceCenter).

### Runtime Source Disclosure

The `GetReleaseInfo` gRPC RPC returns disclosure metadata at runtime, including:

* `edition` — build edition (e.g., "Community Edition")
* `license_id` — SPDX identifier (e.g., "AGPL-3.0-or-later")
* `license_url` — link to full license text
* `source_url` — link to source repository
* `documentation_url` — link to documentation
* `homepage_url` — project homepage
* `trademark_notice` — trademark statement

This information is also embedded in the web UI (login page, navigation drawer, and user menu) so users can always locate the source and license.

### Trademark Policy

KiloCenter and the KiloCenter logo are trademarks of Tim Kravchunovsky. See TRADEMARKS.md for the full trademark policy.

Community forks must not use the KiloCenter name or logo in a way that implies official affiliation or endorsement.

### Enterprise / Managed Cloud

The Enterprise edition of KiloCenter is built into Kilo Cloud and is also available as part of supported enterprise deployments under separate licensing terms. Kilo Cloud combines the MIOTY service center with the full Kilo IoT platform, including rules, dashboards, alarms, access control, and managed operations. See [KiloCenter or Kilo Cloud?](README.md#kilocenter-or-kilo-cloud), or contact [Kilo IoT](https://kiloiot.io/contact/) for details.

### Legal Attribution

© 2024–2026 Tim Kravchunovsky and contributors. All rights reserved where applicable.

KiloCenter implements the MIOTY LPWAN protocol as specified by the MIOTY Alliance. MIOTY is a registered trademark of the MIOTY Alliance.
