# Changelog

<details>

<summary>Scale Log. Release 2.2.0</summary>

<figure><img src="../.gitbook/assets/Kilo_Scale_Log_Release_2.2.0.png" alt=""><figcaption></figcaption></figure>

### **Weight Log 2.2.0 is one of the biggest releases of the year — and this Weightlog is a great way to close it out strong.**



This update introduces several major platform capabilities that move Kilo into a new phase of scalability — giving teams more reliable alerting, better dashboard organization, and stronger tools for managing multi-user deployments.

Most importantly, **KILO 2.2.0 improves the day-to-day operations of real deployments**: users can now receive critical alerts via **SMS**, organize dashboards into a **folder hierarchy**, and manage organizations with more control through ownership transfers and editable settings. These changes make Kilo more reliable in the field, easier to operate across teams, and easier to scale as deployments grow.\
\
Major Changes

***

### Add SMS as a Notification Channel

#### New Feature: SMS Notification Support

The Notification Center now supports **SMS alerts**, enabling users to receive important notifications directly on their phone. This improves reliability for time-sensitive events and gives teams another channel when email is delayed or missed.

#### SMS Notification Capabilities

* SMS notification channel with phone verification flow
* Phone number input and verification code interface
* Toggle control for enabling/disabling SMS notifications
* Error messages for invalid or expired verification codes
* Duplicate phone number detection

#### How to Use

1. Navigate to **Notifications → Settings**
2. In the **SMS Notifications** section, click **“+ Add phone number”**
3. Enter your phone number and click **Save**
4. Enter the verification code sent to your phone
5. Toggle SMS notifications **on/off** as needed

This update enables users to receive critical alerts directly via SMS, increasing reliability and flexibility across deployments.

***

### SMS Add-On

#### New Feature: SMS Credit Purchase (Stripe)

<figure><img src="../.gitbook/assets/image (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

Kilo now supports purchasing SMS credits directly inside the platform. This allows teams to scale SMS alerting without additional operational overhead and makes usage predictable through a simple balance system.

<figure><img src="../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>

#### SMS Purchase Feature Highlights

* **Flexible quantity selection** — choose the exact number of SMS messages to purchase
* **Transparent costing** — per-SMS price and total cost displayed before purchase
* **Secure transactions** — payments are processed via Stripe
* **Immediate confirmation** — confirmation modal appears after successful payment
* **Live balance updates** — SMS balance updates in real time

#### How to Use

1. Navigate to **Notifications → SMS Settings**
2. Select the number of SMS credits you want to purchase
3. Review the unit price and total cost
4. Complete payment via Stripe
5. View the confirmation and updated SMS balance

***

### Subscription & Billing Updates

<figure><img src="../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

#### Free Subscription Default Plan

KILO 2.2.0 improves subscription handling so onboarding and plan upgrades are clearer and more predictable.

#### Subscription Improvements

* New users are automatically assigned the **default Free Plan** upon registration
* Free plan details are now visible in the **Billing / Subscription** area
* Users can upgrade from the free plan to a paid subscription at any time
* Upon expiration of a paid subscription, users are automatically downgraded to the free plan
* Feature limitations are applied based on the free plan after downgrade

***

### Change Organization Settings

#### Organization Management Enhancements

<figure><img src="../.gitbook/assets/image (5) (1).png" alt=""><figcaption></figcaption></figure>

Organization owners now have improved control over organization settings and ownership, making it easier to manage long-running deployments and team transitions.

#### New Capabilities

* **Organization name editing** directly in Organization Settings
* **Ownership transfer** to another user via the organization member list
* **Email invitation workflow** for ownership transfer acceptance
* Ownership transfer invitation expires after **1 week**
* **Re-authentication required** for the new owner during acceptance
* Upon acceptance, the new owner is granted the **Editor role** with full administrative rights
* Organization name and ownership changes must be explicitly **saved** to take effect

***

### Dashboard Hierarchy

#### Enhanced Dashboard Management and Display

<figure><img src="../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

Change Log 2.2.0 introduces a new dashboard structure designed for users managing multiple deployments or operational views.

#### Dashboard Improvements

* Dashboards can now be organized into a **two-level hierarchy** (folder → dashboards)
* Folders are created via the **Settings** icon next to the “Add dashboard” button in the left menu
* Dashboards can be added, deleted, and modified inside the folder structure
* Reordering and restructuring dashboards is possible using the **Edit** button
* Widgets can be placed on any dashboard regardless of its folder location

This update makes it significantly easier to scale dashboard usage and keep operational views organized as deployments grow.

***

### Minor Changes

#### Admin Contacts Information

* Permissions tooltips now display **admin contact details**, helping users quickly request access or assistance when permissions are required.



</details>

<details>

<summary>Scale Log. Release 2.0.0</summary>

<figure><img src="../.gitbook/assets/Kilo_Scale_Log_Release_2.0.0.png" alt=""><figcaption></figcaption></figure>

### Major Changes

#### Custom Dashboards

* Added the ability for users to create custom dashboards for personalized data monitoring, overview of multiple devices and parameters on one dashboard.

**Users can now:**

* Add a new dashboard.
* Delete dashboard when no longer needed.
* Add widgets to dashboards.
* Added widgets can be from different devices.
* Widgets are now draggable and customizeable.

<figure><img src="../.gitbook/assets/wid2.gif" alt=""><figcaption></figcaption></figure>

#### Collapsible Menu

* Added a collapsible menu that can be reduced to a narrow strip with icons.
* Users can expand or collapse the menu using the hover arrow, freeing up more screen space for main content or custom dashboards.

<figure><img src="../.gitbook/assets/wid.gif" alt=""><figcaption></figcaption></figure>

#### Device and Gateway Photo Placeholder & Direct Upload

* Added a placeholder image for devices with no photos to indicate that a photo can be uploaded.
* Users can now upload photos directly from the device or gateway page without navigating to settings.
* Upload options available via avatar, dropdown menu, or settings.

<figure><img src="../.gitbook/assets/placeholder.png" alt=""><figcaption></figcaption></figure>

### Minor Changes

#### Rule Inactive Status Email Fix

* Fixed an issue where notifications continued to be sent after a rule was set to inactive.
* Inactive rules now correctly stop email notifications and mark notifications as resolved.

#### Rule Deletion Email Fix

* Fixed an issue where notifications continued to be sent after a rule was deleted.

#### GPS Tracker URL Fix

* The device URL now correctly links to the production environment.

#### Widget Pinning Fix

* Fixed an issue where widgets could not be pinned on device pages

#### Page Access Restriction for Empty Subscriptions

* Frontend now disables access to pages if the user has no active subscription or the subscription/data API returns empty.
* Prevents users from interacting with features that require a valid subscription.

#### Non-LoRa Device Creation Fix

* Fixed an issue where users could not add non-LoRa devices if isEnabledDevicePhoto was disabled.
* Users can now add non-LoRa devices regardless of the device photo setting.



</details>

<details>

<summary>Scale Log. Release 1.0.0</summary>

<figure><img src="../.gitbook/assets/Scale_Log_Release_1.0.0.png" alt=""><figcaption></figcaption></figure>

## Released features

#### Device & Gateway Photo Uploads

<figure><img src="../.gitbook/assets/Screenshot 2025-10-06 at 18.15.24.png" alt=""><figcaption></figcaption></figure>

* Users can now upload up to 3 photos for devices and gateways (during creation or from the device/gateway page).
* Uploaded photos are visible on the device page and when creating rules.
* Added upload button with “+” icon and ability to view all photos in expanded info.
* Photos can be deleted in settings (delete icon on hover, always visible on mobile).
* Improved UX: entire device/gateway card can now be expanded or collapsed with a click.



## Minor Changes

#### Notification Icon Display Fix

* Fixed an issue where the Notification icon was not fully displayed when a user had more than 10 notifications.
* The icon now displays correctly regardless of the number of notifications.

#### Gateway Submission Fix

<figure><img src="../.gitbook/assets/img.png" alt=""><figcaption></figcaption></figure>

* Gateway submission now works correctly without server-side access errors.

#### Error Message Fix

* Fixed an incorrect error message when adding gateways.

</details>
