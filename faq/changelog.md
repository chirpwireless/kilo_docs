# Changelog

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
