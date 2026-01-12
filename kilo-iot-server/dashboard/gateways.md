# Gateways

The Gateways page displays all LoRaWAN gateways connected to your account.

### Accessing the Gateways Page

1. Click **Gateways** in the left-hand navigation menu.
2. The page displays all your gateways in a table format.

### Understanding the Gateway Table

The gateway table includes the following columns:

| Column           | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| **Gateway name** | The name you assigned to the gateway                        |
| **Status**       | Current connection status (Active/Inactive)                 |
| **Public name**  | Optional alias or public identifier                         |
| **Location**     | The location assigned to the gateway                        |
| **Firmware**     | Current firmware version with update availability indicator |
| **Favorite**     | Star icon to mark/unmark the gateway as a favorite          |

### Gateway Status

Gateways can have two main statuses:

* **Active** — Gateway is connected and communicating with the platform
* **Inactive** — Gateway is not yet registered or has lost connection

If a gateway shows as inactive, click the status button to open the registration modal.

### Filtering Gateways

**By Location**

1. Click on a location chip at the top of the page
2. The table shows only gateways in that location
3. Click "All" to show all gateways

**By Search**

1. Enter a gateway name in the search field
2. The table filters automatically

### Gateway Registration

If you have an inactive gateway that needs registration:

1. Click the status indicator on the inactive gateway row
2. The Gateway Registration modal opens
3. Follow the on-screen instructions to complete registration
4. The gateway status updates to Active once registered

Tip: You can also register a gateway by navigating to the Gateways page with a specific URL parameter: `/gateways?key=YOUR_GATEWAY_ID`

### Marking Gateways as Favorites

To mark a gateway as a favorite:

1. Click the star icon in the Favorite column
2. The gateway appears in your quick-access list

### Adding a New Gateway

To add a new gateway:

1. Click the **Add gateway** button in the top-right corner
2. Follow the gateway setup wizard

For detailed instructions, see: [Adding LoRaWAN Gateway](https://docs.kiloiot.io/lorawan-lr-fhss/adding-gateways-to-kilo-network)
