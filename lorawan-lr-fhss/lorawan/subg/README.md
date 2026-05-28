---
sidebar_position: 1
description: LoRaWAN regional use — sub-GHz ISM frequency plans by country, regulatory differences, and per-region transmit power and duty-cycle rules.
---

# LoRaWAN Regional Use

LoRaWAN operates in **unlicensed sub-gigahertz frequency bands**, which vary by country and region due to local regulatory frameworks. These bands are typically classified as **ISM (Industrial, Scientific, and Medical)** or **SRD (Short Range Device)** frequencies and are free to use—provided the devices comply with regional restrictions on transmission power, duty cycle, and other technical constraints.

#### Common Regional Frequency Plans

* **Europe:** 863–870 MHz (EU868), and in some cases, 433–434 MHz (EU433)
* **United States & Canada:** 902–928 MHz (US915)
* **Australia:** 915–928 MHz (AU915)
* **Asia (e.g., Japan, Korea, Vietnam):** 920–928 MHz (some regions use variations within 902–928 MHz)
* **China:** 470–510 MHz and 779–787 MHz; 902–928 MHz is also used in some scenarios
* **India:** 865–867 MHz (IN865)
* **Russia:** 864–870 MHz

Each of these regions has its own specifications for permitted output power, channel spacing, and duty cycle limits, so devices must be **configured appropriately** based on their deployment location.

> ⚠️ Always ensure that your devices are operating within the legal frequency band and power limits for your region. Failure to comply with local regulations can result in interference issues or legal penalties.

***

### License-Free Operation

LoRaWAN is designed to operate on **license-exempt radio frequencies**, meaning you don’t need to obtain or pay for spectrum licenses to use these bands. However, **compliance with national radio regulations is required**—especially regarding transmission power, airtime usage, and channel access protocols.
