# Release emails

A file here is the email version of a release, sent to the Kilo mailing list through listmonk
(https://lists.kiloiot.io). **Merging a new file into `synchronize` sends it.**

Name the file after the release: `mailing/X.Y.Z.md`. Start it with:

```
---
subject: "Kilo X.Y: the headline of this release"
preheader: "One short line shown next to the subject in the inbox"
list: Kilo customers
send: now            # now | draft | 2026-10-20T10:00:00+02:00
---
```

Then write the email in Markdown. Upload each image in listmonk under **Campaigns → Media** and use its
`https://lists.kiloiot.io/uploads/<file>` address, so every image comes from our own domain. Never link images from `raw.githubusercontent.com/chirpwireless/...`: the address would publicly tie Kilo to Chirp.
A plain-text version of the email is generated automatically.

What the workflow (`.github/workflows/send-release-email.yml`) does:

1. Checks the header, every image and every link. Anything broken means nothing is sent.
2. Creates the campaign "Kilo <version>" in listmonk and sends a test copy to the test address.
3. Sends it (`now`), schedules it (a date), or leaves it as a draft in listmonk (`draft`).
4. Never sends the same version twice. Editing a file after it went out changes nothing.

Use `send: draft` when you want to look at it in listmonk before it goes out. This file (README.md) is never sent.
