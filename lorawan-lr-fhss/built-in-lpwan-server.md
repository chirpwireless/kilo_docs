# Built in LPWAN Server

In any LoRaWAN or LPWAN deployment, the **network server** plays a central role. It acts as the middleware between your gateways and applications—managing communication, session handling, device authentication, and message routing. Without an LPWAN server, raw data from devices and gateways can’t be meaningfully processed or delivered to your visualization or automation systems.

Traditionally, this required deploying and maintaining separate infrastructure using open-source or commercial network servers, integrating them with your gateways, and building or connecting to a separate platform for visualization. That setup can become complex and time-consuming—especially when scaling to production.

To remove this friction, **Kilo includes a fully managed LPWAN network server directly within the platform**. You don’t need to install or configure anything. Gateways and devices can connect natively to the Kilo cloud, and all network-layer functions—including join requests, uplinks, downlinks, and message deduplication—are handled automatically.

This tight integration means:

* No third-party LPWAN server required
* No additional hosting, scaling, or maintenance burden
* Seamless transition from raw messages to actionable insights

By embedding the network server into the core platform, Kilo drastically reduces the time and technical effort required to deploy a LoRaWAN network—letting you go from setup to live data in just minutes.
