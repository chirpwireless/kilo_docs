---
sidebar_position: 5
---

# Browan TBMH110

{% hint style="info" %}
Ensure that your model ends with 110, as the model 100 is not compatible with the Chirp Network.
{% endhint %}

## Step 1

Log in to your dashboard at [https://app.chirpwireless.io](https://app.chirpwireless.io).

![](<../../Dashboard/Adding Gateways to Chirp Network/login.png>)

## Step 2

Once logged in, click on "Gateways" in your dashboard. Select "Add gateway" in the upper right, click on "3rd Party Gateway".

![](<../../Dashboard/Adding Gateways to Chirp Network/add_gateway.png>)

## Step 3

Enter the Gateway Name, select your country's LoRaWAN frequency band and input the Gateway EUI (located on the back of the gateway). Click Next.

![](<../../Dashboard/Adding Gateways to Chirp Network/browan3.png>)

## Step 4

After adding the gateway, you'll receive a confirmation message. Copy and save the LNS Address, download and extract the certificates from the provided Zip file. Click Next.

![](<../../Dashboard/Adding Gateways to Chirp Network/browan4.png>)

## Step 5

Now your gateway is successfully added to Chirp platform. Click Continue.

![](<../../Dashboard/Adding Gateways to Chirp Network/browan5.png>)

If you didn't save the certificates or LNS address, please, navigate to gateway's Settings tab.

![](<../../Dashboard/Adding Gateways to Chirp Network/browan6.png>)

## Step 6

To connect the gateway to the Chirp network, plug in your Browan to an electrical outlet. Ensure the yellow light blinks slowly (indicating readiness for Wi-Fi connection). Connect to your Browan Pro via Wi-Fi; the password is on the gateway's back label.

![](<../../Dashboard/Adding Gateways to Chirp Network/image7.jpg>)

## Step 7

Once connected, navigate to `192.168.4.1` in your browser.&#x20;

{% hint style="info" %}
Important: Connect to Wi-Fi last, as it will disconnect you from the gateway.
{% endhint %}

![](<../../Dashboard/Adding Gateways to Chirp Network/image8.jpg>)

## Step 8

Enable OTA by clicking on Step 1 in the gateway's menu.

![](<../../Dashboard/Adding Gateways to Chirp Network/image9.jpg>)

## Step 9

Click on step 2 "configure LoRa settings". Select LoRa Basics station and scroll to the bottom of the screen.

Enter the LNS Address that you have copied during gateway registration on Chirp's dashboard

For example: `wss://lora-eu868.cloud.chirpwireless.io:443`

Upload 3 certificates you have extracted from a Zip file in Step 4

![](<../../Dashboard/Adding Gateways to Chirp Network/image10.jpg>)

![](<../../Dashboard/Adding Gateways to Chirp Network/image11.jpg>)

**Click Save**

## Step 10

To connect the gateway to your Wi-Fi network, select "Set Network" or choose a visible network and enter the Wi-Fi password.&#x20;

{% hint style="info" %}
Note: You will lose connection to the gateway after connecting to Wi-Fi.
{% endhint %}

![](<../../Dashboard/Adding Gateways to Chirp Network/image12.jpg>)

If set up correctly, a solid green light will appear on the gateway, and its status on the Chirp's dashboard will show as online.

![](<../../Dashboard/Adding Gateways to Chirp Network/browan10.png>)

**Congratulations, your IoT devices are now ready to be added and you are ready to automate!**
