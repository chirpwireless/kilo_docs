---
description: "How to put a Raspberry Pi IoT hub together: the case, radios and cameras, plus the LoRaWAN card if you want a gateway."
---

# How Do I Assemble a Raspberry Pi IoT Hub?

Putting the hub together takes about fifteen minutes and a small screwdriver. Keep the Pi unplugged the whole time.

The first two sections are only for a Pi you are turning into a LoRaWAN gateway. If you did not buy the LoRaWAN parts, skip to [How do I put the hub in its case?](#how-do-i-put-the-hub-in-its-case)

## How do I fit the LoRaWAN card to the Pi HAT?

Only for a LoRaWAN gateway. The LoRaWAN card (the concentrator card) goes into a slot on the Pi HAT. Connect the antenna before you ever switch on the Pi with the card in place.

1. Hold the RAK5146 card at a slight angle and push its gold edge all the way into the mPCIe slot on the Pi HAT.
2. Press the card down flat and fix it with the screw on the HAT.
3. Connect the antenna cable to the card's **LoRa** antenna connector. That is the small round connector that is *not* marked GPS. Press it straight down until it clicks.
4. If you have a GPS antenna, connect it to the connector marked **GPS**. GPS gives the gateway its exact time and location. The gateway also works without it.

<figure><img src="../../../.gitbook/assets/kilo-hub-rak5146-pi-hat-kit.png" alt="RAK5146 concentrator card next to the Pi HAT, showing the mPCIe slot the card goes into"><figcaption><p>The card goes into the mPCIe slot on the HAT and is held by one screw.</p></figcaption></figure>

{% hint style="warning" %}
Never switch on the Pi with the card fitted and no antenna connected. A LoRa radio that transmits without an antenna can damage itself.
{% endhint %}

## How do I mount the HAT on the Raspberry Pi?

Only for a LoRaWAN gateway.

1. Screw the spacers that come with the HAT into the Pi's four mounting holes.
2. Line up the HAT's 40-pin socket with the row of 40 pins on the Pi. Press it down evenly until it sits all the way on. Every pin must be inside the socket. A HAT that is one row off does not work.
3. Fix the HAT to the spacers with the remaining screws.

## How do I put the hub in its case?

1. Place the Pi in the case, with the HAT on top if you fitted one.
2. If you fitted the LoRaWAN card: push the antenna cable's SMA end through the antenna opening in the case and tighten its nut. Screw the LoRa antenna onto it from the outside.
3. Close the case. Keep the air vents clear.

Mount the LoRaWAN antenna upright, as high as you can, and away from metal. Where the antenna sits matters far more for range than the gateway itself.

## How do I connect the Zigbee and Thread radios?

1. Plug the Zigbee dongle into a USB port **through a short USB extension cable**.
2. If you use Thread, plug the Thread radio into another USB port, also on an extension cable, a little apart from the Zigbee dongle.
3. Use the black USB 2 ports if you can. USB 3 ports and their cables interfere with these radios.

## How do I connect the cameras?

1. Connect each IP camera to the same network as the Pi. If a camera gets its power through the network cable, connect it through a PoE switch or a PoE injector.
2. Write down each camera's username and password. You need them later, when you connect the camera's recorder to its video stream.

## How do I connect the Pi itself?

1. Connect the network cable.
2. Connect a screen, a keyboard and a mouse.
3. Stop here. Don't connect the power yet. You prepare the microSD card and switch the Pi on in the next guide.

Next: [How Do I Set Up the Raspberry Pi for Kilo Hub?](setup.md)
