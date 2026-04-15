# LoRaWAN Frequencies

> **Reference only.** This page is provided as a general guide. The frequency data may not be 100% accurate or up to date. Always verify the correct frequency band for your country with your local radio regulations authority before deploying devices. Use at your own risk.

LoRaWAN operates in unlicensed sub-gigahertz frequency bands that vary by country and region. These bands are classified as ISM (Industrial, Scientific, and Medical) or SRD (Short Range Device) frequencies — free to use provided that devices comply with regional restrictions on transmission power, duty cycle, and channel access.

When registering a LoRaWAN device on the Kilo IoT Server, you select the frequency band in the **Band** field of the connection configuration. The band must match your gateway's configuration and your region's radio regulations.

## How to Choose the Right Band

In most cases, LoRaWAN devices purchased from suppliers in your country are pre-configured for the correct regional frequency. If you are in Australia and purchase a LoRaWAN temperature sensor from a local supplier, that sensor will almost certainly operate on AU915 — the correct band for your region. Cross-border procurement or international deployments require explicit frequency verification.

## Common Regional Frequency Plans

| Region | Frequency Band | Range |
|---|---|---|
| Europe | EU868 | 863–870 MHz |
| Europe (alternate) | EU433 | 433–434 MHz |
| United States & Canada | US915 | 902–928 MHz |
| Australia | AU915 | 915–928 MHz |
| Asia (Japan, Korea, Vietnam, others) | AS923 | 920–928 MHz (regional variants AS923-1, AS923-2, AS923-3) |
| South Korea | KR920 | 920–923 MHz |
| India | IN865 | 865–867 MHz |
| Russia | RU864 / EU868 | 864–870 MHz |
| China | CN470 | 470–510 MHz |
| China (alternate) | CN779 | 779–787 MHz |
| Global (license-free) | ISM2400 | 2.4 GHz (see [LoRa 2.4 GHz](lora-2g4.md)) |

Each region has specific rules for permitted output power, channel spacing, and duty cycle limits. Devices must be configured for the correct band before deployment.

## License-Free Operation

LoRaWAN is designed for license-exempt radio frequencies — you do not need to obtain or pay for spectrum licenses. However, compliance with national radio regulations is required, particularly regarding transmission power limits, airtime usage, and channel access protocols.

## Frequency Plan Disclaimer

The frequency information below is provided for reference purposes. While we have made efforts to ensure accuracy, Kilo IoT does not assume responsibility for its precision. Operators deploying gateways and devices are strongly advised to verify local regulations and legal requirements for radio frequency usage before deploying any IoT solution. Compliance with applicable laws is the responsibility of the deploying organization.

## Frequencies by Country

### A

| Country | Frequency Plan |
|---|---|
| Afghanistan (AF) | |
| Aland Islands (AX) | EU433 EU863-870 |
| Albania (AL) | EU433 EU863-870 AS923-3 |
| Algeria (DZ) | EU433 AS923-3 |
| American Samoa (AS) | US902-928 |
| Andorra (AD) | EU433 EU863-870 |
| Angola (AO) | |
| Antigua and Barbuda (AG) | |
| Argentina (AR) | AU915-928 |
| Armenia (AM) | EU433 EU863-870 |
| Aruba (AW) | |
| Australia (AU) | AS923-1 AU915-928 |
| Austria (AT) | EU433 EU863-870 |
| Azerbaijan (AZ) | EU433 |

### B

| Country | Frequency Plan |
|---|---|
| Bahamas (BS) | US902-928 |
| Bahrain (BH) | EU433 EU863-870 |
| Bangladesh (BD) | EU433 AS923-1 |
| Barbados (BB) | AU915-928 AU902-928 |
| Belarus (BY) | EU433 EU863-870 |
| Belgium (BE) | EU433 EU863-870 |
| Belize (BZ) | AU915-928 AU902-928 |
| Benin (BJ) | US902-928 |
| Bhutan (BT) | EU433 EU863-870 |
| Bolivia (BO) | AU915-928 AU902-928 |
| Bonaire, Saint Eustatius and Saba (BQ) | EU433 EU863-870 |
| Bosnia and Herzegovina (BA) | EU433 EU863-870 |
| Botswana (BW) | EU433 EU863-870 |
| Bouvet Island (BV) | EU433 EU863-870 AS923-3 |
| Brazil (BR) | EU433 AU915-928 |
| British Indian Ocean Territory (IO) | |
| Brunei Darussalam (BN) | EU433 EU863-870 AS923-1 |
| Bulgaria (BG) | EU433 EU863-870 |
| Burundi (BI) | EU433 EU863-870 |
| Burkina Faso (BF) | |

### C

| Country | Frequency Plan |
|---|---|
| Cabo Verde (CV) | EU433 EU863-870 |
| Cambodia (KH) | AS923-1 EU863-870 |
| Cameroon (CM) | EU433 |
| Canada (CA) | US902-928 US915-928 |
| Central African Republic (CF) | |
| Chad (TD) | |
| Chile (CL) | EU433 AU915-928 |
| China (CN) | AS923-1 CN779-787 CN470-510 |
| Christmas Island (CX) | AS923-1 AU915-928 |
| Cocos Islands (CC) | AS923-1 AU915-928 |
| Colombia (CO) | EU433 AU915-928 |
| Comoros (KM) | EU433 EU863-870 AS923-3 |
| Congo, Democratic Republic of (CD) | |
| Congo (CG) | |
| Cook Islands (CK) | EU433 IN865-867 AS923-1 AU915-928 |
| Costa Rica (CR) | EU433 AS923-1 |
| Cote d'Ivoire (CI) | EU863-870 |
| Croatia (HR) | EU433 EU863-870 |
| Cuba (CU) | EU433 AS923-3 |
| Curacao (CW) | EU433 AS923-1 |
| Cyprus (CY) | EU433 EU863-870 |
| Czechia (CZ) | EU433 |

### D

| Country | Frequency Plan |
|---|---|
| Denmark (DK) | EU433 EU863-870 AS923-3 |
| Djibouti (DJ) | |
| Dominica (DM) | AU915-928 US902-928 |

### E

| Country | Frequency Plan |
|---|---|
| Ecuador (EC) | AU915-928 |
| Egypt (EG) | EU433 EU863-870 IN865-867 |
| El Salvador (SV) | AU915-928 |
| Equatorial Guinea (GQ) | EU433 EU863-870 |
| Eritrea (ER) | |
| Estonia (EE) | EU433 EU863-870 AS923-3 |
| Eswatini (SZ) | |
| Ethiopia (ET) | |

### F

| Country | Frequency Plan |
|---|---|
| Falkland Islands (FK) | EU433 EU863-870 |
| Faroe Islands (FO) | EU433 EU863-870 |
| Fiji (FJ) | |
| Finland (FI) | EU433 EU863-870 |
| France (FR) | EU433 EU863-870 |
| French Guiana (GF) | EU433 EU863-870 |
| French Polynesia (PF) | EU433 EU863-870 |
| French Southern Territories (TF) | EU433 EU863-870 |

### G

| Country | Frequency Plan |
|---|---|
| Gabon (GA) | |
| Gambia (GM) | EU433 |
| Georgia (GE) | EU433 EU863-870 |
| Germany (DE) | EU433 EU863-870 |
| Ghana (GH) | EU433 |
| Gibraltar (GI) | EU433 EU863-870 |
| Greece (GR) | EU433 EU863-870 |
| Greenland (GL) | EU433 EU863-870 AS923-3 |
| Grenada (GD) | AU915-928 |
| Guadeloupe (GP) | EU433 EU863-870 |
| Guam (GU) | US902-928 |
| Guatemala (GT) | AU915-928 |
| Guernsey (GG) | EU433 EU863-870 AS923-3 |
| Guinea (GN) | EU433 |
| Guinea-Bissau (GW) | |
| Guyana (GY) | |

### H

| Country | Frequency Plan |
|---|---|
| Haiti (HT) | |
| Heard Island and McDonald Islands (HM) | AU915-928 AS923-1 |
| Holy See (VA) | EU433 EU863-870 |
| Honduras (HN) | AU915-928 |
| Hong Kong (HK) | EU433 IN865-867 AS923-1 |
| Hungary (HU) | EU433 EU863-870 AS923-3 |

### I

| Country | Frequency Plan |
|---|---|
| Iceland (IS) | EU433 EU863-870 |
| India (IN) | IN865-867 |
| Indonesia (ID) | AS923-2 |
| Iran (IR) | EU433 EU863-870 AS923-3 |
| Iraq (IQ) | |
| Ireland (IE) | EU433 EU863-870 AS923-3 |
| Isle of Man (IM) | EU433 EU863-870 AS923-3 |
| Israel (IL) | |
| Italy (IT) | EU433 EU863-870 |

### J

| Country | Frequency Plan |
|---|---|
| Jamaica (JM) | AU915-928 |
| Japan (JP) | AS923-1 |
| Jersey (JE) | EU433 EU863-870 |
| Jordan (JO) | AS923-3 EU433 EU863-870 |

### K

| Country | Frequency Plan |
|---|---|
| Kazakhstan (KZ) | EU433 |
| Kenya (KE) | EU433 EU863-870 |
| Kiribati (KI) | |
| Korea, Democratic People's Republic of (KP) | |
| Korea, Republic of (KR) | KR920-923 |
| Kuwait (KW) | EU433 EU863-870 AS923-3 |
| Kyrgyzstan (KG) | |

### L

| Country | Frequency Plan |
|---|---|
| Lao People's Democratic Republic (LA) | EU433 EU863-870 AS923-1 |
| Latvia (LV) | EU433 EU863-870 |
| Lebanon (LB) | EU433 EU863-870 |
| Lesotho (LS) | EU433 |
| Liberia (LR) | |
| Libya (LY) | |
| Liechtenstein (LI) | EU433 EU863-870 AS923-3 |
| Lithuania (LT) | EU433 EU863-870 |
| Luxembourg (LU) | EU433 EU863-870 AS923-3 |

### M

| Country | Frequency Plan |
|---|---|
| Macao (MO) | EU433 AS923-1 |
| Macedonia (MK) | EU433 EU863-870 |
| Madagascar (MG) | EU433 EU863-870 |
| Malawi (MW) | |
| Malaysia (MY) | EU433 AS923-1 |
| Maldives (MV) | |
| Mali (ML) | EU433 |
| Malta (MT) | EU433 EU863-870 |
| Marshall Islands (MH) | |
| Martinique (MQ) | EU433 EU863-870 |
| Mauritania (MR) | EU433 EU863-870 |
| Mauritius (MU) | EU433 |
| Mayotte (YT) | EU433 EU863-870 |
| Mexico (MX) | US902-928 |
| Micronesia (FM) | |
| Moldova (MD) | EU433 EU863-870 AS923-3 |
| Monaco (MC) | EU433 EU863-870 |
| Mongolia (MN) | |
| Montenegro (ME) | EU433 EU863-870 |
| Montserrat (MS) | AU915-928 |
| Morocco (MA) | EU433 |
| Mozambique (MZ) | |
| Myanmar (MM) | EU433 AS923-1 |

### N

| Country | Frequency Plan |
|---|---|
| Namibia (NA) | EU433 EU863-870 |
| Nauru (NR) | |
| Nepal (NP) | |
| Netherlands (NL) | EU433 EU863-870 |
| New Caledonia (NC) | EU433 EU863-870 |
| New Zealand (NZ) | EU433 EU865-867 AU915-928 AS923-1 |
| Nicaragua (NI) | EU433 EU863-870 |
| Niger (NE) | IN865-867 |
| Nigeria (NG) | EU433 EU863-870 |
| Niue (NU) | EU433 IN865-867 AS923-1 AU915-928 |
| Norfolk Island (NF) | AS923-1 AU915-928 |
| Northern Mariana Islands (MP) | US902-928 |
| Norway (NO) | EU433 EU863-870 AS923-3 |

### O

| Country | Frequency Plan |
|---|---|
| Oman (OM) | EU433 EU863-870 |

### P

| Country | Frequency Plan |
|---|---|
| Pakistan (PK) | EU433 IN865-867 AS923-1 |
| Palau (PW) | |
| Palestine (PS) | |
| Panama (PA) | AU915-928 |
| Papua New Guinea (PG) | EU433 AU915-928 AS923-1 |
| Paraguay (PY) | EU433 AU915-928 |
| Peru (PE) | AU915-928 |
| Philippines (PH) | EU433 EU863-870 AS923-3 |
| Pitcairn (PN) | |
| Poland (PL) | EU433 EU863-870 AS923-3 |
| Portugal (PT) | EU433 EU863-870 |
| Puerto Rico (PR) | US902-928 |

### Q

| Country | Frequency Plan |
|---|---|
| Qatar (QA) | EU433 EU863-870 AS923-3 |

### R

| Country | Frequency Plan |
|---|---|
| Reunion (RE) | EU433 EU863-870 |
| Romania (RO) | EU433 EU863-870 |
| Russian Federation (RU) | EU433 EU864-870 AS923-3 |
| Rwanda (RW) | EU433 EU863-870 |

### S

| Country | Frequency Plan |
|---|---|
| Saint Barthelemy (BL) | EU433 EU863-870 |
| Saint Helena, Ascension and Tristan da Cunha (SH) | |
| Saint Kitts and Nevis (KN) | AU915-928 |
| Saint Lucia (LC) | AU915-928 |
| Saint Martin (MF) | EU433 EU863-870 |
| Saint Pierre and Miquelon (PM) | EU433 EU863-870 |
| Saint Vincent and the Grenadines (VC) | AU915-928 |
| Samoa (WS) | EU433 EU863-870 |
| San Marino (SM) | EU433 EU863-870 |
| Sao Tome and Principe (ST) | |
| Saudi Arabia (SA) | EU433 EU863-870 AS923-3 |
| Senegal (SN) | EU863-870 |
| Serbia (RS) | EU433 EU863-870 |
| Seychelles (SC) | EU433 |
| Sierra Leone (SL) | |
| Singapore (SG) | AS923-1 EU433 |
| Sint Maarten (SX) | |
| Slovakia (SK) | EU433 EU863-870 AS923-3 |
| Slovenia (SI) | EU433 EU863-870 AS923-3 |
| Solomon Islands (SB) | AS923-1 |
| Somalia (SO) | EU433 EU863-870 AS923-3 |
| South Africa (ZA) | EU433 EU863-870 |
| South Georgia and the South Sandwich Islands (GS) | EU433 EU863-870 AS923-3 |
| South Sudan (SS) | |
| Spain (ES) | EU433 EU863-870 |
| Sri Lanka (LK) | EU433 AS923-1 |
| Sudan (SD) | |
| Suriname (SR) | AU915-928 |
| Svalbard and Jan Mayen (SJ) | EU433 EU863-870 AS923-3 |
| Sweden (SE) | EU433 EU863-870 |
| Switzerland (CH) | EU433 EU863-870 |
| Syrian Arab Republic (SY) | EU433 EU863-870 AS923-3 |

### T

| Country | Frequency Plan |
|---|---|
| Taiwan (TW) | AS923-1 |
| Tajikistan (TJ) | |
| Tanzania (TZ) | EU433 AS923-1 |
| Thailand (TH) | EU433 AS923-1 |
| Timor-Leste (TL) | |
| Togo (TG) | EU433 |
| Tokelau (TK) | EU433 IN865-867 AS923-1 AU915-928 |
| Tonga (TO) | EU433 AU915-928 |
| Trinidad and Tobago (TT) | AU915-928 |
| Tunisia (TN) | EU433 EU863-870 |
| Turkey (TR) | EU433 EU863-870 |
| Turkmenistan (TM) | |
| Turks and Caicos Islands (TC) | AU915-928 |
| Tuvalu (TV) | |

### U

| Country | Frequency Plan |
|---|---|
| Uganda (UG) | EU433 IN865-867 AS923-1 |
| Ukraine (UA) | EU433 EU863-870 |
| United Arab Emirates (AE) | EU433 EU863-870 |
| United Kingdom (GB) | EU433 EU863-870 AS923-3 |
| United States Minor Outlying Islands (UM) | US902-928 |
| United States of America (US) | US902-928 |
| Uruguay (UY) | AU915-928 |
| Uzbekistan (UZ) | EU433 |

### V

| Country | Frequency Plan |
|---|---|
| Vanuatu (VU) | EU433 IN865-867 AS923-3 |
| Venezuela (VE) | AS923-1 |
| Viet Nam (VN) | EU433 AS923-2 |
| Virgin Islands, UK (VG) | AU915-928 |
| Virgin Islands, US (VI) | US902-928 |

### W

| Country | Frequency Plan |
|---|---|
| Wallis and Futuna (WF) | EU433 EU863-870 |
| Western Sahara (EH) | |

### Y

| Country | Frequency Plan |
|---|---|
| Yemen (YE) | |

### Z

| Country | Frequency Plan |
|---|---|
| Zambia (ZM) | EU433 EU863-870 |
| Zimbabwe (ZW) | EU433 |
