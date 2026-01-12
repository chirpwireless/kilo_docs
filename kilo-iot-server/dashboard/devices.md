# Devices

### Devices Page

The Devices page shows all devices connected to your Kilo IoT account.

#### Accessing the Devices Page

1. Click **Devices** in the left-hand navigation menu.
2. The page displays all your devices in a table format.

#### Understanding the Device Table

The device table includes the following columns:

| Column          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| **Device name** | The name you assigned to the device, plus an alias if configured |
| **Status**      | Battery level indicator and last seen timestamp                  |
| **Location**    | The location and sub-location assigned to the device             |
| **Device ID**   | The unique device identifier (EUI)                               |
| **Data**        | Real-time data from the device (e.g., temperature, humidity)     |
| **Favorite**    | Star icon to mark/unmark the device as a favorite                |

#### Filtering Devices

You can filter your devices in two ways:

**By Location**

Use the location filter at the top of the page to show only devices in a specific location:

1. Click on a location chip (e.g., "Office", "Warehouse")
2. The table updates to show only devices in that location
3. Click "All" to show all devices again

**By Search**

Use the search field to find specific devices:

1. Click the search input field
2. Enter a device name or device ID (EUI)
3. The table filters automatically as you type

Tip: You can combine location filter and search to narrow down results further.

#### Marking Devices as Favorites

Favorite devices appear in your Overview page for quick access.

To mark a device as a favorite:

1. Find the device in the table
2. Click the star icon in the Favorite column
3. The star fills in to indicate the device is now a favorite

To remove a device from favorites, click the filled star icon again.

#### Adding a New Device

To add a new device:

1. Click the **Add device** button in the top-right corner
2. Follow the device setup wizard

For detailed instructions, see: [Adding a LoRaWAN Device](https://docs.kiloiot.io/lorawan-lr-fhss/adding-device)

#### Device Limit Warning

If you reach your subscription's device limit, a warning banner appears at the top of the page. You'll need to upgrade your subscription or remove unused devices to add more.

#### Viewing Device Details

Click on any row in the device table to open the device detail page, where you can:

* View detailed device information
* Configure device settings
* Review device metrics and history
* Manage device connection settings
