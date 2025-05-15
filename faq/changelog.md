# Changelog

<details>

<summary>Release 1.0.0</summary>

## New Features <a href="#new-features" id="new-features"></a>

## Staking <a href="#staking" id="staking"></a>

Staking itself helps $CHIRP token holders grow their balance by locking their tokens for a particular timeframe for extra rewards.

This encourages long-term holding, increases token stability, and keeps users engaged as well. Features includes flexible reward rates, auto-reinvestment, and bonus perks.

More details: [https://docs.chirptoken.io/chirp-token/staking](https://docs.chirptoken.io/chirp-token/staking)

## Rules Engine <a href="#rules-engine-dostupno-tolko-pod-ficha-flagom" id="rules-engine-dostupno-tolko-pod-ficha-flagom"></a>

**Rules Engine** allows users to set up and run automated rules for device data. The rule engine will help automate tasks, make the platform more efficient, and improve how devices are managed. This is the first version, laying the foundation for future updates and improvements.

## Notification Center <a href="#notification-center" id="notification-center"></a>

The **Notification Center** is designed to help users stay informed about important events in the system. It ensures that critical alerts, important updates, and general information reach the right people at the right time.

With this feature, users will:

* **Receive notifications in real-time** when system events occur
* **See notifications categorized by priority** (Critical, Important, Information)
* **View all notifications** with timestamps.
* **Filter notifications** by priority and date.
* **Mark notifications as read** to track which messages they’ve already seen.
* **Delete notifs** to remove unnecessary messages while keeping relevant ones.

## Bug fixes <a href="#bug-fixes" id="bug-fixes"></a>

Cannot paste DEVEUI correctly

AI assistant locks function buttons

</details>

<details>

<summary>Beta release 0.36.0</summary>

![](<../.gitbook/assets/image (48).png>)

## Features

User board redesigned\
Map: Centering when no device or coordinates are present\
Map: Updated colors\
Light theme added for widgets\
Improved graphs for calculated widgets, including colors and decimal points\
Added ability to set normal value boundaries in widget settings\
Displayed min/max/avg on widget progress bar\
Redesigned tooltips\
Updated Claim Reward window

## Bugfixes

Fixed miner status icon not updating\
Fixed rewards wallet verification issue on rewards page via sidebar button\
Corrected total and last rewards counters showing zero\
Explorer: Fixed Token Supply Widget displaying incorrect graph\
Explorer: Restored missing Top Earners\
Explorer: Corrected sorting order in Transaction Block\
User Board: Fixed UI bug for Favorite devices in adaptive mode\
User Board: Corrected number of needed attention device notifications\
User Board: Added missing "Mark all as read" button\
Fixed disappearing data credit balance after page reload\
Mining board: Fixed page height bug\
Corrected sidebar menu scaling\
Improved widget settings reset functionality\
Fixed Chirp Epochs not displaying on rewards graph\
Resolved login failure after logout\
Removed share device function for device owner

</details>

<details>

<summary>Beta release 0.35.0</summary>

![](<../.gitbook/assets/image (47).png>)

### Features

_App_

• Added availability and RX/TX charts for third-party gateways\
• Displayed min/max/avg on the widget graph\
• Added empty states for Mining Board and User Board maps\
• Enabled search by DevID on Device list page

_Firmware_

• New firmware release v1.1.3 now available\
• Added MQTT client\
• Optimized upgrade script\
• Disabled Ziti tunnel on firmware start\
• Removed Wi-Fi settings reset when not connected to gateway's AP\
• Added more NTP servers\
• Optimized ECC chip setup scripts\
• Wisgate UI: Improved interface responsiveness\
• Enhanced network connection stability\
• Significantly reduced traffic consumption from 3 GB/month (v1.0.234) to 600 MB/month

### Bugfixes

• Map: Fixed ruler in adaptive mode\
• Map: Removed scrolling after map opening\
• Fixed issue where new Miners received no payments or rewards\
• Fixed update firmware request bug\
• Fixed confirmation link on sign-in page\
• Leader Board: Corrected total distance calculation\
• Muted sign-in buttons after returning to login page\
• Fixed session error during password change\
• Mobile: Fixed page reload during tracker map usage\
• Devices: Corrected search field placeholder\
• Fixed login and sign-up using Apple account\
• Fixed display of new firmware version on gateway's dashboard\
• Login: Corrected Apple warning text\
• Resolved issue preventing registration using Google / Apple accounts\
• Fixed login failure when using Apple / Google accounts\
• Fixed bug where registration button wasn't blurred after click\
• Resolved login forward back to login page issue\
• Corrected sorting order for transactions in Mining Board

_Tracker App_

• Implemented logout on internet connection loss\
• Added leaderboard position information\
• Fixed issue of new device creation after app update\
• Reduced multiple location messages\
• Fixed iOS device absence on Leader Board\
• Resolved user registration error\
• Android App: Fixed large map movements during rest

</details>

<details>

<summary>Beta release 0.34.0</summary>

![](<../.gitbook/assets/image (46).png>)

### Features

* Device info block added for Device page & Gateway page
* All layers (device icons, track, ruler) on the map are erased when switching the light/dark theme
* Connected wallet: UI improvements
* Redesigned dark theme for map
* Added light theme for map
* Login page optimization
* Added scrolling/filtering feature to Rewards chart
* Explorer: changed default sorting to total for top earners

_Leaderboard:_

* Add device aliases to Leaderboard
* Removed highlighting of first positions in Leaderboard

### Bugfixes

* Verification using Ledger device does not work
* Fixed statistics widgets in Explorer
* Mining Board: Calculation of Potential Reward
* Mining Board: map ruler error when switching themes
* Light theme: black buttons for PayPal card payment
* Light theme: black view of feedback form
* Notification email about personal info change during widget configuration
* Unexpected logout fixed

</details>

<details>

<summary>Beta release 0.33.0</summary>

![](<../.gitbook/assets/image (45).png>)

### Features

* Frontend improvements: White theme released, switch dark/white themes in sidebar by clicking user avatar
* Frontend improvements: Map color redesigned for better readability
* Frontend improvements: Sign-in buttons for Google / Apple redesigned for better interaction
* Mining board: Reward coefficients are shown to demonstrate the potentially lost reward due to low availability
* Mining board: Reward scrolling feature now allows to scroll epochs to where it all began
* SIM cards: New SIM parameters are available on SIM card page
* Devices: Widget switch main/other allows to switch main and other data to highlight only the most important information
* Wallet security: Signature for wallet removal is now required to increase the safety of mining on Chirp platform

### Bugfixes

* Redeem NFT: Exception during order creation
* Redeem NFT: Wallet address input
* Login and logout issues

</details>

<details>

<summary>Beta release 0.32.0</summary>

![](<../.gitbook/assets/image (44).png>)

### Features

**Chirp Token**\
Extractor: Extract claim records for payouts\
Make each instance of the validator service use its own consumer name\
SDK & Crypto: Claim transaction tools\
Ledger Node: Each record should have a date\
Ledger Node: Transaction multi-signing algorithm\
Depositary Contract: Claim function\
Ledger Node: Prepare Transaction\
Extractor: Transactions controller\
Refactoring top holders without SUI ScanBalances

**Chirp App**\
Mining Board:

* Added "Claim" button
* Popup "How much do you wish to claim?" with amount to claim (max amount button)
* Popup: Sign transaction
* Popup: "Success" or "Transaction declined"
* Table fixed: rename Reward to Deposit and tooltip "These are claimable deposits. They can be claimed from the blockchain."
* Fetch rewards only for displayed epochs
* Fixed mining board blocks style

App optimizations for devices and gateways pages\
Support initial miner firmware registration link in app\
Leaderboard widget at device page\
Leak Sensor widget improvement\
Added sorting for non-LoRa devices in add device dialog menu\
Added main metrics for tracker pages\
Explorer: Added gateway aliases for top earners table\
Explorer: Added “Type” column to payments table\
Reward Wallet: Signed the wallet removal operation\
Connect Wallet: New sidebar menu added; now, the chain is displayed for the connected wallet

### Bugfixes

Mainnet stability: fixed duplicating keys error\
Mainnet stability: deleted unnecessary checkpoints\
Login page: fixed white screen error\
Redeem NFT: wallet address does not fit input\
Contact Support pop-up at device page fixed\
Gateway: location not displayed in gateways table\
Tracker Map: tracks not displayed in adaptive mode\
Fixed tooltip shift for rewards chart\
Fixed app crash on Smart Plug device page

</details>

<details>

<summary>Firmware release 1.0.234</summary>

![](<../.gitbook/assets/image (43).png>)

### Features

* Gateway availability issues have been resolved;
* Fixed problems with Wi-Fi connection loss;
* Improved Wisgate UI performance and fixed bugs;
* Added feature to disable LTE modem by default if not in use.

</details>

<details>

<summary>Beta release 0.31.0</summary>

![](<../.gitbook/assets/image (42).png>)

### Features

* Leaderboard Page: New widget designed for the Chirp Tracker mobile app and the upcoming BIG Airdrop Campaign
* Added top-up for sim-card balance via PayPal, credit card or Data Credits
* Improved connect/verify wallet banner
* Redeem NFT: disabled “Burn NFT” button if network is not mainnet
* Prompt user to switch to mainnet for verification
* Non GPS Device page (mobile) improvements
* Fixed charts in widgets
* Disabled e-mail change form in Settings
* Gateways: Update to latest firmware support request on gateway’s page
* Added device type to browser URL
* Mining Board: show “Pending…” only in the latest payment
* Replaced gateway icon with Chirp icon on the gateway page and user board
* Moved calendar button to the far right side on all tabs
* Added new map features from Network Explorer to main application
* Gateway registration: set data credit amount to default 4000
* Added sub-location field to gateway
* Leak Sensor Widget improved

### Bugfixes

* Wallet verification failed for Google Auth wallets
* New order create app crashed
* Change password wasn’t logout from account
* Map did not displayed for non-lora sim card trackers
* Gateways: “Add gateway” button shifted left
* IMEI of mobile tracker was editable
* Empty balance for connected and verified wallet
* Device sharing did not working for non-lora devices
* User avatar was deleted after relogin
* Devices number delta did not updated on Network Explorer
* Devices table: fixed wrong battery percentage view

</details>

<details>

<summary>New feature 0.30.1</summary>

![](<../.gitbook/assets/image (41).png>)

New sign-up and sign-in features are available! You can now join Chirp with Google or Apple account.

</details>

<details>

<summary>Beta release 0.30.0</summary>

![](<../.gitbook/assets/image (40).png>)

### Features

* Updated Crypto Explorer page - enhanced mobile view for the page, new top holders and top earners tables available
* Improved visibility, Explorer now only displays the miners within the visible area
* Re-designed SIM cards page
* Reworked 4G GPS trackers page
* Added DevEUI to device list page
* Improved visibility of the "Add device" button
* Sped up the Gateways page loading
* Removed default map centering on all pages
* Improved Leak Sensor widget
* Updated Privacy Policy
* Added EULA banner
* Introduced guide to Buy & Redeem NFT

### Bugfixes

* Hotfixes for Redeem NFT: resolved issues with burning NFT, re-fetching NFTs, and dropdown with country code for phone field
* Fixed UI not recognizing a wallet network change
* Mobile: Fixed wrong alignment on the Connected wallet page
* Mobile: Fixed wrong pagination in Crypto Explorer transactions
* Mobile: Fixed Mainnet warning message displayed on the mobile version
* Tracker path now created based on the last update timeline
* Fixed wallet verification failure for Google Auth Sui wallet
* Added Button or Link to Chirp platform after email confirmation
* Fixed issue where users with shared tracker could see list of users with this tracker shared
* Changed text on widget from "Door is closed/open" to "Open/Closed"
* Fixed tooltip clipping in the first column of the Rewards chart
* Device log details no longer overwritten during preview
* The old view is no longer displayed before the sim card device page is loaded

</details>

<details>

<summary>Hotfix 0.29.1</summary>

![](<../.gitbook/assets/image (39).png>)

## Hotfixes

Redeem NFT page changes:

* add banner “Once you have burned your NFTs, order will become available after transaction is confirmed on blockchain and Chirp platform validates the transaction”
* update Miner NFT logo
* improve performance of NFT scanner for minimize time to discovery bought and burned NFTs

</details>

<details>

<summary>Beta release 0.29.0</summary>

![](<../.gitbook/assets/image (37).png>)

![](<../.gitbook/assets/image (38).png>)

## Features

* Explorer redesign
  * World map for viewing Chirp coverage globally
  * Network stats widgets are added under the map
  * Map scrolling is now easier with a hotkey
  * We've improved the overall look and feel of the platform
* Added new Skyward NFT icon to the Redeem NFT page
* Included Redeem NFT texts and warnings
* Inserted rewards chart on the crypto-explorer
* Rolled out bug fixes for pings/tx/rx on the crypto-explorer
* Introduced device track sorting on the SIM card tracker device page
* Added change password form to settings
* Incorporated a link back to the login page after password changes
* Added password complexity hints to registration and password change forms
* Rolled out backend stability improvements

## Bugfixes

* Fixed a bug linking to the Chirp platform after email confirmation
* Fixed a bug with shared tracker
* Repaired the map expander block
* Corrected a bug on BFF: batch NFT burn and ordering fewer miners than NFTs burnt
* Fixed tooltip clipping in the first column of the Rewards chart

</details>

<details>

<summary>Beta release 0.28.0</summary>

![](<../.gitbook/assets/image (36).png>)

## Features

**NFT Sale 2.0**

* Redesigned NFT Redeem page
* New page with a list of orders

New Sui wallet widget: Connect your reward wallet to Chirp’s dashboard with our new widget\
Sui wallet verification: Verify your wallet using our new widget\
New non-LoRa devices page: Track devices more easily with new checkpoints on the map\
Revised 'Billing' section:

* 'Redeem NFT' moved to top level, placed after settings
* 'Rewards Wallet' moved to Settings
* 'Data Credits' moved to Settings
* 'Orders Table' moved to 'Redeem NFT' page

Added spacing before 'Docs' and 'Explorer' page (same vertical spacing as between 'Sim Cards' and 'Billing')\
Improved Leak Sensor Widget\
Improved Door Open Sensor Widget\
Share device button is now visible\
Split and refactor sidebar menu: split menu into sections with a separators\
Add Terms of Use and Privacy Policy pages to [docs.chirptoken.io](http://docs.chirptoken.io/)\
Support request widget is now available in the sidebar and new device request form you can find at the settings tab

_Firmware release 1.0.215_

* Gateway UI: Added a switch for turning on/off gateway LEDs to settings page
* Gateway UI: Added firmware update feature to settings page
* Firmware: Restore LoRaWAN frequency plan after firmware upgrade
* Firmware: Improved network connection to Chirp servers for better gateway online uptime

## Bugfixes

* Mining Board: Payments displayed for unfinished epochs
* Fixed device table sorting by status bug
* Password requirements are now checked on the frontend
* Mobile: Added wallet connection warning popup on Gateways page
* Login UI: Fixed issue where sign-up/sign-in pages weren't found under signed-in user
* Fixed bug on custom date range for devices
* Fixed display issue with full-screen map
* Battery widget: Fixed graph displaying data of battery with 0%
* Crypto Explorer: Fixed alignment issue with epoch change timer during epoch change
* Crypto explorer: Adaptive widget for epochs
* Fixed typo in email confirmation message
* Fixed issue with Device Log entry opening on each log page
* Gateway page: app crash in some cases
* Fixed map expander block in adaptive mode

</details>

<details>

<summary>Beta release 0.27.0</summary>

![](<../.gitbook/assets/image (35).png>)

## Features

New sign-up, sign-in, social sign-in, forgot password and verify e-mail pages have been added.

Mining Board:

* A Network Keepers address for rewards has been added for users who haven't connected their Sui wallet to their Chirp account yet.

Crypto Explorer:

* Links in the transaction block digest have been updated to [suiscan.xyz](https://suiscan.xyz/testnet/home).
* Classic pagination has been added to Crypto Explorer.
* Speed up transactions and payments processing.

Added links to Terms of Use and Privacy Policy:

* Links to Terms of Use and Privacy Policy have been added to the Sign In screen.
* A mandatory radio button stating 'I accept the Terms of Use' has been added to the Sign Up screen.
* A mandatory radio button stating 'I accept the Privacy Policy' has been added to the Sign Up screen.

A new Chirp sim card page has been added at [chirpwireless.io](http://chirpwireless.io/).

## Bugfixes

The following issues have been resolved:\
Mining Board: Incorrect order of epochs on the Graph\
Reward Wallet: The current balance of the wallet always showed 0\
Rewards: Last Payment and Total always displayed as 0\
Rewards: Rewards payments were being made for non-approved gateways\
Mobile: Scroll function was not working on the Rewards details page\
Mobile: The wallet connection warning popup was missing on the Gateways page\
Mobile: Fixed the placement of the 'Device is supported in beta' widget\
Mobile: Fixed the Graphs axes artifacts issue\
Sim Card: Fixed a bug that caused page crashes for some sim cards\
No data was being displayed for shared devices on the device list page.\
Verify e-mail link was incorrect\
Typo in e-mail confirmation message

</details>

<details>

<summary>Beta release 0.26.0</summary>

![](<../.gitbook/assets/image (32).png>)

![](<../.gitbook/assets/image (33).png>)

## Features

Testnet Smart Contracts Created:

* A 'Chirp' smart contract has been created. This contract encompasses the complete Chirp Token contract. It allows the minting of tokens and their distribution through liquidity pools according to tokenomics.
* A 'Ledger' smart contract has been developed. This contract functions as a decentralized mechanism that frequently stores the rewards information into the IPFS, utilizing IPFS CID. This CID consists of all the essential information related to the reward calculations conducted during the Chirp Epoch, which is then subsequently logged into the SUI Blockchain.

Decentralized Reward Distribution Mechanism for testnet:

* Rewards are determined based on miner availability.
* A 'reward\_bundle' is assembled, including gateway identifiers, availabilities, and token reward stakes, which is then stored in IPFS.
* This data is recorded into the SUI Blockchain using the IPFS CID.
* Data is retrieved from the SUI Blockchain to facilitate payout transactions.
* Rewards are distributed to miners.

New public page: Explorer ([chirptoken.io/explorer/](http://chirptoken.io/explorer/))

* An epoch loading bar displays the current state of the ongoing epoch.
* "Token supply" and "token supply %" charts show the quantity and percentage of the current minted and total supplies.
* A list of transactions displays all the Chirp transactions on the network, including links to the transaction block digest on the Sui explorer.
* A list of payments shows all Chirp payments with links to transaction blocks on the Sui explorer.

Mining Board:

* A map indicating user miner locations.
* A list of user miners.
* A "Testnet" alert indicating the current Testnet stage.
* An epoch loading bar shows the current state of the ongoing epoch.
* A histogram displays reward history for each epoch.
* A historical list of rewards.
* An alert is shown for miner purchase if no miners are registered to the user.

Gateway page: A new histogram "Rewards" shows rewards for a specific gateway.

New "copy wallet address" button added to the reward wallet and "add Chirp miner" pages.

Inner objects in device event logs are now unpacked.

## Bugfixes

Style bug with the search-on-map field

</details>

<details>

<summary>Beta release 0.25.0</summary>

![](<../.gitbook/assets/image (31).png>)

### Features

Devices and gateways tables performance optimization\
New “add reward wallet” widget to Gateways and Gateway pages. Show this message only if user has miners and didn’t connect the wallet\
“Adding a wallet for rewards” step in “add Chirp Miner” process\
Remove links to Terms of Use and Privacy Policy from sidebar, its still available at login/sign-up page.

### Bugfixes

Mobile: Small zoom after any entry field change

</details>

<details>

<summary>Beta release 0.24.0</summary>

![](<../.gitbook/assets/image (30).png>)

### Features

Changelog posts are now available for your feedback. Feel free to share your impressions with us.\
We've added a search by location field to the map for User Board and Explorer.\
Loaders have been added to the add and delete device pages to prevent warnings.\
The Explorer now shows the ping distance.\
The Terms of Use and Privacy Policy are now hosted at [docs.chirpwireless.io](http://docs.chirpwireless.io/).

### Bugfixes

Fixed a bug in device sharing table not updating after un-sharing the device\
Mobile version: Small zoom after any entry field change\
Fixed coverage layers in explorer for gateways without any displayed coverage\
Fixed a bug with wrong date setting in calendar caused app crash

</details>

<details>

<summary>Beta release 0.23.0</summary>

![](<../.gitbook/assets/image (29).png>)

### Features

New feedback widget: feel free to let Chirp team know what you like and what we can improve\
“Add LoRa device” dialog supports adding locations and sub-locations for device placement\
Added search by model for “Add LoRa device” dialog\
Performance improvement: coverage map layer now displays much faster\
New mobile view for settings and device pages\
Update cloud infrastructure services

### Bugfixes

Explorer map was hidden on mobile devices\
Locations and sub-locations expanding in drop-down lists crashed if the height of the content exceeds the screen limits\
Email didn’t received if email address changed in profile settings page\
Availability chart in gateway page now displays absolute values for current time, not only for full day\
User Board: Coverage layer loaded and displayed by default\
User Board: Dashboard not available in Safari browser\
Widgets: “Show alert” button didn’t switch alerting mode,\
Widgets: Status widget state changed by selecting Today filter in calendar\
Widgets: Open times widget calculation fix if device was reset

</details>

<details>

<summary>Beta release 0.22.0</summary>

### Features

Mobile dashboard reworked, now provided more user-friendly pages:

* Device page
* Gateway page
* Devices table

Device widgets reworked, now it supports displaying values for events:

* first event for period
* last event
* average of events
* delta of events

Removed fields Gateway, AllGateways for non-lora devices.

_Chirp Miner_\
Firmware release v.1.0.177\
Implement firmware update features (will be implemented in gateway page soon)\
Update Wisgate UI frontend (fix spaces validation in the SSID bug)

### Bugfixes

The latest information of graphs in gateway section are not showing current date, they show the day before, its shifted with -1 days\
The appearance of TX/RX numbers doesn’t display the amount of y-axis correctly, after reaching 100k one day, is has shown 10k\
Device status didn’t update in some cases\
Non-lora GPS trackers now support displaying tracks on map at device page

</details>

<details>

<summary>Beta release 0.21.0</summary>

![](<../.gitbook/assets/image (28).png>)

### Features

Rewards wallet connection flow is reworked, so you can simply connect your Sui wallet to Chirp for rewards\
New information on device page map: new icons, distance measurement (ruler), RSSI metric. Now map supports terrain and satellite view layers\
Explorer now has slider for upper information blocks\
Notifications: if Chirp Gateway is unavailable more than 1 hour or it became online - you’ll receive e-mail and notification to your profile

_3rd Party Gateways. Now Chirp supports LoRaWAN network servers in regions:_

* AS923
* AS923-2
* AU915-0
* EU433
* EU868
* IN865
* KR920
* RU864
* US915-0
* US915-1

Add Gateway EUI in gateway’s settings tab

_New supported vendors and devices:_

* Adeunis (18 devices)
* Bosch (2 devices)
* Сomtac (4 devices)
* Decentlab GmbH (45 devices)
* Digital Matter Pty Ltd (5 devices)
* GWF Messsysteme AG (2 devices)
* IMST GmbH 3 (devices)
* ioThings (1 device)
* KELLER Druckmesstechnik AG (4 devices)
* Laird Connectivity, Inc. (4 devices)
* MCCI Corporation (17 devices)
* Mcf88 SRL (16 devices)
* Enginko SRL (18 devices)
* Multi-Tech Systems, Inc. (1 device)
* Netvox Technology Co. (128 devices)
* nke WATTECO (22 devices)
* Onethinx B.V. B.V. (1 device)
* OrbiWise (1 device)
* Parametric Engineering GmbH (2 devices)
* Radio Bridge Inc. (21 devices)
* STMicroelectronics International NV (7 devices)
* STREGA (5 devices)
* TalkPool AB (6 devices)
* Tektelic Communications Inc. (25 devices)

### Bugfixes

Fix search form for 4G devices models

</details>

<details>

<summary>Beta release 0.20.0</summary>

![](<../.gitbook/assets/image (27).png>)

### Features

“Add to favorites” button for shared devices\
Move the gateway registration flow to the new design

_New icons on the device page map for 3 scenarios:_

* device has its own coordinates
* device has location / sub-location
* device has location history

Move devices latitude and longitude from widgets to other metrics\
Add battery percentage to device list\
QR code scan for DevEUI in “add device”\
“Add gateway” flow now support both types of gateways: Chirps and 3rd Party\
Font sizes got bigger for better accessibility\
Synchronize table designs on device and gateway lists, device log, orders and sim cards pages

_Cellular GPS devices are now supported by Chirp platform!_\
Cellular device are displayed on maps\
All cellular device parameters are displayed on device page as text widgets\
Cellular devices can now be shared\
Cellular device settings tab in device view

* Name
* Model
* Unique ID

_3rd Party Gateways:_\
3rd Party gateway registration is now available\
3rd Party gateway overview and settings pages

_Chirp Miner:_\
Firmware release v.1.0.156\
Fixed resolve dns if chirp dns was lost\
Set AP mode only if user doesn’t configured wifi connection. Add wifi AP trace to gateway logs\
Add new frontend (support regions configuration)\
Firmware release version is shown in Gateway Web UI\
Fixed dhcp options (fix connect to webgui using wifi AP)\
Firmware update process is scheduled every 10 minutes 3 times if it fails

### Bugfixes

Device log tags rescaling\
Devices measurements diffs in events and widgets are now fixed\
Remove (0,0) device coordinates from tracks in empty events\
Scrolling issue on main device details page\
New gateway configs received if gateway reset or reflashed\
When scrolling in device log, the rounding at the top disappears\
As the screen size increases, the grid with devices changes greatly and large horizontal margins appear\
There are no rounded corners on the map\
The date of the last connection of the device is different in the list of devices and the detailed page of the device\
On all graphs, time has moved far to the right towards the edge\
When changing the name of the device, it changes only after reloading the page

_Dragino Door Sensor:_\
There is no battery data on the overview page, although there is some in the logs\
Added horizontal scrolling in logs\
There are no DOOR\_OPEN\_STATUS values and the text is also cut off\
Dragino door sensor placement on map\
Dragino door sensor events and widgets improved

_User board:_\
“Show all” button in Favorite devices didn’t work

</details>

<details>

<summary>Alpha release 0.14.0</summary>

![](<../.gitbook/assets/image (26).png>)

### Features

On device board, we split widgets into main and other and added lots of new widgets, now for every parameter that device provides.\
Verified and unverified devices: we are adding more and more devices and once the devices has been checked physically, devices for which widgets haven’t been tested, are market unverified / beta.\
Some new Sensecap T1000 widgets are available on device page.\
“Add device” redesign with new validations.\
GPS tracks improvements.

### Bugfixes

Sensecap T1000 chaotic map display fixed.\
Gateway registration flow minor bugs.\
GPS devices with coordinates and no locations set now displayed on map correctly.\
Wisgate UI registration flow minor bugs.\
Some device log events with state is not displayed.\
Some device log events with multiple gateways sources were smashed in one string.\
Device Overview tab now fetch recent events and widgets are updating correspondingly.\
Explorer - gateways with online status now highlighted.\
Google authentication for site redirected to outdated page, now its fine\
Download logs were limited for a hundred events.

</details>

<details>

<summary>Alpha release 0.13.0</summary>

![](<../.gitbook/assets/image (25).png>)

### Features

Explorer page has been redesigned without header for a more spacious map experience\
Mobile view improvements\
Sim card table improvements (different header, column titles, measurements)\
Adding a LoRaWAN device to the platform has been simplified and half-automated\
Device log is now clickable and can show entire message contents\
Platform backend can now service 4g GPS devices\
Lots of Dragino devices added to the platform (D20-LB, DDS45-LB, DSO3A-LB, GroPoint Air, LA66, LDS02, LDS12-LB, LHT52, LHT65N, LT-22222-L, LTC2, LWL02, PS-LB, S31-LB, SE01-LB, SPH01-LB, SW3L-LB, TrackerD, WLO3A-LB,)

### Bugfixes

A number of design fixes (icons, fonts, shadows, element sizes)\
Removing device from favorites throws an error\
Cant select sub-location in add device modal\
Dragino LDS02 status update delays on graphs\
Shared device update returns 404

</details>

<details>

<summary>Alpha release 0.12.0</summary>

![](<../.gitbook/assets/image (24).png>)

### Features

Devices

* T1000 device added
* Abeeway trackers added
* Compact Tracker
* Industrial Tracker
* Micro Tracker
* Smart Badge
* RAK7201 device added

Dashboard

* Gateways list and gateway page are now available
* Device and gateway settings tabs are added to device/gateway page
* Device log pagination improved for faster page switching
* “Dashboard” page in old design was replaced with user board, device and gateway pages

### Bugfixes

Mobile view blocked by menu\
Map point is not displayed if sublocation is not set\
Tablet layout: mobile version improvements\
AS923 LoRaWAN frequency fixed

</details>

<details>

<summary>Alpha release 0.11.0</summary>

![](<../.gitbook/assets/image (22).png>)

### Features

User board redesign

* Header in dashboard is replaced with a fixed left sidebar
* New sorting of Items on the left panel in your dashboard, expandable categories
* Complete layout change on all pages
* Frontend cache system implemented for fast and stable dashboard response

Explorer: Detailed gateway sidepanel. By clicking on the hex then gateway you will see new graphs with gateway pings, gateway availability\
Device page: Device measurement units can be switched, e.g. Celsius / Fahrenheit\
Device page: Device graph can be hidden\
Device page: Device widget ‘show alert’ toggle\
Backend feature - Device parameters map is implemented to display more device data on frontend\
For added security Cloudflare is enabled on chirpwireless.io

### Bugfixes

Device list: no location is displayed if sublocation is not set\
Device list: no scroll on small screens\
Device log: pagination buttons not hidden when less than 1 page worth of logs

</details>

<details>

<summary>Alpha release 0.10.0</summary>

### Features

Frontend

* New group widget
* 'All devices' filter tab
* Filter gateways from device list
* New calendar with quick filtering buttons for Today, Week, Month
* New device parameters tooltip in a device log
* More parameters are now visualized

Platform

* New device supported: Elsys EMS
* New device supported: Dragino LHT65N-E31F

Hardware

* New firmware v. 1.121 update for all online gateways in production
* 'Watchdog' feature

### Bugfixes

Device page

* Fix device log pagination pages count
* Dragino sensor widget shows wrong state
* Dragino sensor widget error

Gateway

* Transmission breaks in current firmwa

</details>

<details>

<summary>Alpha release 0.9.1</summary>

### Bugfixes

* Explorer sidebar not switching when choosing a different hex fix
* Device log filter button is hidden fix
* Filter GPS Tracker path with (0,0) coordinates
* Pings require clicking a gateway in hex fix
* Changelog entry for sprint 1 fix
* Miner sidebar displays wrong data on user-board/devices pages fix

</details>

<details>

<summary>Alpha release 0.9</summary>

![](<../.gitbook/assets/image (21).png>)

### Features

Ambassador program has been launched, ambassador page is up on chirptoken.io\
New gateway firmware 1.116 in production

* “Watchdog” feature is implemented for better gateway resilience
* A number of gateway security features has been implemented
* Gateway starts out-of-the-box with Ethernet connection
* Gateway services refactored for better performance
* Traffic consumption reduced to approx. 6 Gb monthly for more affordable gateway mobile connectivity

Devices

* Seedstudio T1000 tracker added
* New device adding made easier with standardised device config format

User board

* Text widget
* Device log sorting
* Device log filtering
* Device settings
* Group widget
* Empty state overview

### Bugfixes

* Expiring token issue fixed
* Coverage calculation issues fixed
* A number of gateway start-up issues fixed

Infrastructure

* All resources migrated to Google Cloud
* AWS resources eliminated
* GKE alerting is live

</details>

<details>

<summary>Alpha release 0.8</summary>

![](<../.gitbook/assets/image (20).png>)

### Features

* Coverage radius calculation is now considered based on GPS tracker data
* Coverage is now calculated regularly: radius once a week, gateway coverage per gateway setup
* UI Kit has been created to speed up frontend development
* Band choice is now available in ‘Add Device’ dialog
* Adding a new device into supported devices can be requested via ‘Add Device’ dialog
* Adding device on backend is made simpler
* Internal architecture optimization
* Pings between gateways are released to production
* Network usage reduced from ca. 15 Gb per month to ca. 6 Gb per month
* First Chirp SIMs are active with first Keeper tariff
* Chirp fleet management solution is live
* IoT wiki is live
* Chirpwireless.io landing page is live
* SEO optimization

</details>

<details>

<summary>Alpha release 0.75</summary>

![](<../.gitbook/assets/image (19).png>)

### Features

* Dashboard release
* Billing & PayPal are now supported
* Data credits are now available on the platform
* List with orders has been extended with Tracking Info
* Dragino LDS02 stability tests to ensure stable device
* Gateway 915 MHz stability tests
* Production cluster filesystem backup has been automated

</details>

<details>

<summary>Alpha release 0.7</summary>

![](<../.gitbook/assets/image (18).png>)

### Features

* Add 'gateway' category in left sidebar
* Remove financial graph
* 'How to' articles
* Move logout button in adaptive to hamburger menu
* Remove 'all' layer on map
* Wi-fi stabilization
* Main wallet protection
* Automate rewarding service calls
* Confirmation for gateway registration
* Final production registration
* Reward gateway owners on testnet
* Display wallet balance in header

</details>

<details>

<summary>Alpha release 0.6</summary>

![](<../.gitbook/assets/image (17).png>)

### Features

* Rewarding service
* Backend support for different frequencies
* Gateway reset procedure
* Syscheck deploy
* Production docusaurus
* Adaptive design for gateway registration

</details>

<details>

<summary>Alpha release 0.52</summary>

![](<../.gitbook/assets/image (16).png>)

### Features

* New firmware distribution system
* Factory gateway initialization process
* Wallet connect on Chirp frontend
* IoT web platform adaptive design
* Android app MVP
* Feature request form

</details>

<details>

<summary>Alpha release 0.5</summary>

![](<../.gitbook/assets/image (15).png>)

### Features

* New gateway hardware platform by RAK
* NFT sale
* NFT sale security audit
* Integration with Opensea
* Device sharing over frontend
* Production platform in Chirp cloud
* Rewarding concept

</details>

<details>

<summary>Alpha release 0.45</summary>

![](<../.gitbook/assets/image (14).png>)

### Features

* Coverage map calculation now considers topographic map
* Coverage map now includes verification of map by GPS devices (coverage will be displayed in locations where GPS tags have sent LoRa frames)
* Icon grouping on map
* Google authentication
* Android app prototype
* Flexible device configs
* Version monitoring on gateway

</details>

<details>

<summary>Alpha release 0.4</summary>

![](<../.gitbook/assets/image (13).png>)

### Features

* Display GPS tracker data in frontend
* Mesh prototype
* Delete devices over frontend
* Camera feed prototype
* New LoRa shield with timestamping / geolocation support

</details>

<details>

<summary>Alpha release 0.3</summary>

![](<../.gitbook/assets/image (12).png>)

### Features

* New firmware features for gateway registration
* Power meter support
* User avatar deletion
* Search in my iot table
* Added network graphs
* Back button in right sidebar
* Merged profile, change password, language tabs
* Profile tab redesign
* 'add location' tab redesign
* Display read notifications in notifications list

</details>

<details>

<summary>Alpha release 0.2</summary>

![](<../.gitbook/assets/image (10).png>)

### Features

* New landing page
* New 2.4 temperature sensor support
* Seamless transition between ‘My IoT’ and Dashboard
* Added favorite devices
* App header redesign
* Sign in / sign up pages redesign
* Map icons redesign
* Added right sidebar folding

</details>

<details>

<summary>Alpha release 0.1</summary>

![](<../.gitbook/assets/image (9) (1).png>)

### Features

* Landing page
* Public coverage map
* Personal area of the website
* Private coverage map
* IoT dashboard
* Device registration
* Gateway registration
* Settings
* Package statistics
* Dark mode!

</details>
