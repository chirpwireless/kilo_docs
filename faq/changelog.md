# Changelog

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



#### Video Feed Integration for TTN Conference

<figure><img src="../.gitbook/assets/Kilo_Cam_Screenshot (1).png" alt=""><figcaption></figcaption></figure>

* Added Camera section on the platform with live video previews.

- Integrated with Lens Hub API to fetch and display connected cameras.
- Subscribed frontend to MQTT feed for real-time video frames.
- Implemented image decoding via hubPrivateKey for secure display.
- Enabled handling of multiple camera streams in parallel.
- Infrastructure: deployed MQTT broker, verified Lens in production, and provided required tokens/keys.\


## Minor Changes

#### Notification Icon Display Fix

* Fixed an issue where the Notification icon was not fully displayed when a user had more than 10 notifications.
* The icon now displays correctly regardless of the number of notifications.



#### Gateway Submission Fix

<figure><img src="../.gitbook/assets/img.png" alt=""><figcaption></figcaption></figure>

* Gateway submission now works correctly without server-side access errors.

#### Error Message Fix

Fixed an incorrect error message when adding gateways.

</details>
