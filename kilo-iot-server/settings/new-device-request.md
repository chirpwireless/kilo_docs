# New Device Request

If the device model you need is not yet available in the platform's device profile library, you can submit a request to have it added. Navigate to **Settings > New device request** in the sidebar to open the request form.

The Kilo IoT team reviews each submission and adds supported device profiles to the library.

## Form Fields

| Field | Required | Description |
|---|---|---|
| **Brand** | Yes | The device manufacturer name. |
| **Model** | Yes | The specific model identifier. |
| **Band** | Yes | LoRaWAN frequency bands the device supports. Presented as checkboxes -- select every band that applies. Available options: AS923, AU915, CN779, EU433, EU868, IN865, ISM2400, KR920, RU864, US915. |
| **Documentation link** | Yes | A URL pointing to the device's official technical documentation or datasheet. |
| **Codec link or code** | No | A link to the device's payload codec, or paste the codec source code directly into this field. |

## Submitting the Request

Click **Send request** to submit. On success, a confirmation notification appears -- *"Request has been successfully sent"* -- and the form resets so you can submit another request if needed. If submission fails, an error notification is displayed.

Click **Cancel** to clear all fields without submitting. The form resets but you remain on the same page.
