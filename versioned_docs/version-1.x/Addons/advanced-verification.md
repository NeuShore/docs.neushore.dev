---
sidebar_position: 1
description: Documentation for Advanced Verification By Zorino#1110
---

# Advanced Verification (By Zorino#1110)

---

## Introduction

Advanced Verify is a [First-Party](https://brayanbot.dev/docs/Developers/Addons/First-Party) addon with keeping bots or similar malicious applications away from your server.

It provides 5 separate methods to verification:

- Chat
- Embed
- Manual
- TextCaptcha
- Website

## Verification Methods

The available verification methods and their descriptions are as follows.

### Chat

1. Create a verification channel if doesn't exist already.
2. Send a `How to verify yourself?` message if needed.
3. Set `Verification.Chat.Channel` to verification channel's name or id.
4. Configure `RolesToGive`, `RolesToTake` & `Phrases` accordingly.

### Embed

1. Create a verification channel if doesn't exist already.
2. Run command `send-verification-embed` to send verification embed in verification channel.
3. Configure `RolesToGive` & `RolesToTake` accordingly.

### Manual

> **Required User's DM to be open**

1. Create a verification channel if doesn't exist already.
2. Create a verification-request channel if doesn't exist already.
3. Run command `send-verification-embed` to send verification embed in verification channel.
4. Set `Verification.Manual.RequestsChannel` to verification-request channel's name or id.
5. Configure `RolesToGive` & `RolesToTake` accordingly.

### TextCaptcha

> **Requires User's DM to be open** > **Requires a Port**

1. Create a verification channel if doesn't exist already.
2. Run command `send-verification-embed` to send verification embed in verification channel.
3. Configure `RolesToGive` & `RolesToTake` accordingly.

### Website (Discord OAuth2)

1. Go to [Discord Developer Application](https://discord.com/developers/applications).

2. Select your BrayanBot's Application.

3. Go to `OAuth2` -> `General` tab

> ![IMG](https://i.zorino.in/AYUmsedge_txIB1PhHNE.png)

4. Copy your `Client ID`

   - Set `Verification.Website.ClientID` to `Client ID` you copied.

5. Reset & Copy your `Client Secret`

   - Set `Verification.Website.ClientSecret` to `Client Secret` you copied.

6. Click `Add Redirect` & add your ip or domain(with port if available) with `/oauth2` as endpoint then Save your changes.
   - Set `Verification.Website.RedirectURL` to same URL entred above.

> ![IMG](https://i.zorino.in/BGFmsedge_Y5a65r4x0r.png)

7. Go to `OAuth2` -> `URL Generator` tab

> ![IMG](https://i.zorino.in/HUUmsedge_pPiHEZbqAX.png)

8. Select `identify` as scopes & Set `Redirect URL` you URL you added before

> ![IMG](https://i.zorino.in/PCDmsedge_e0hmKxikXg.png)

7. Copy `Generated URL`

   - Set `Verification.Website.GeneratedURL` to URL you copied.

8. Create a verification channel if doesn't exist already.
9. Run command `send-verification-embed` to send verification embed in verification channel.
10. Configure `RolesToGive` & `RolesToTake` accordingly.

## Configuration | config.yml

```yaml
# Chat | Embed | Manual | TextCaptcha | Website
Type: Chat
Verification:
  Chat:
    # Channel to listen message in
    Channel: verification
    # Message Phrases to listen in channel
    Phrases:
      - I agree to the terms and conditions
      - I agree to the TOS
      - I agree
    # Roles to give to user when verified
    RolesToGive:
      - Member
    # Roles to take to user when verified
    RolesToTake:
      - DJ
  Embed:
    # Roles to give to user when verified
    RolesToGive:
      - Member
    # Roles to take to user when verified
    RolesToTake:
      - DJ
  Manual:
    # Roles to give to user when verified
    RolesToGive:
      - Member
    # Roles to take to user when verified
    RolesToTake:
      - DJ
    RequestsChannel: verification
  TextCaptcha:
    # Roles to give to user when verified
    RolesToGive:
      - Member
    # Roles to take to user when verified
    RolesToTake:
      - DJ
  Website:
    # https://brayanbot.dev/docs/First-Party-Addons/Advanced-Verification#website-discord-oauth2
    ClientID: APPLICATION-CLIENT-ID
    ClientSecret: APPLICATION-CLIENT-SECRET
    RedirectURL: APPLICATION-CLIENT-OAUTH2-REDIRECT-URL
    GeneratedURL: APPLICATION-CLIENT-OAUTH2-GENERATEDURL
    # Roles to give to user when verified
    RolesToGive:
      - Member
    # Roles to take to user when verified
    RolesToTake:
      - DJ
    # Contact Support Team for Guide
```

## Configuration | lang.yml

```yaml
VerificationEmbed:
  Embeds:
    - Title: Server Verification
      Description: "> Please verify your server by clicking the button below."
      FooterIcon: "{bot-pfp}"
      Footer: "{bot-tag}"
  Components:
    "1":
      - Type: Button
        CustomID: advanced_verification_verify
        Style: Blurple
        Label: Verify
TypeChat:
  InvalidPhrase:
    Embeds:
      - Title: Verifier • Invalid Phrase
        Description: "> The phrase you entered is invalid. Please try again."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
TypeEmbed:
  Verified:
    Embeds:
      - Title: Server Verification • Verified
        Description: "> Your have been verified."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
TypeManual:
  Questions:
    - What is your name?
    - What is your age?
    - What is your favorite color?
  Request:
    Embeds:
      - Title: Server Verification • Request
        Description: "{answers}"
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
    Components:
      "1":
        - Type: Button
          Style: Green
          Label: Accept
          CustomID: advanced_verification_accept
        - Type: Button
          Style: Red
          Label: Deny
          CustomID: advanced_verification_deny
  RequestSent:
    Embeds:
      - Title: Server Verification • Request Sent
        Description:
          "> Your request has been sent. You'll get a response in DM from the
          bot once accepted."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
  Verified:
    Embeds:
      - Title: Server Verification • Verified
        Description: "> Your verification request has been accepted."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
  Verified2:
    Embeds:
      - Title: Server Verification • Verified
        Description: "> {target-mention} have been verified."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
  Denied:
    Embeds:
      - Title: Server Verification • Verified
        Description: "> Your request was denied."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
  Denied2:
    Embeds:
      - Title: Server Verification • Denied
        Description: "> {target-mention}'s Request has been denied."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
TypeTextCaptcha:
  VerificationCaptcha:
    # Content: {code}
    Embeds:
      - Title: Server Verification • Verification Captcha
        Description: "> Please enter the captcha below."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
  Verified:
    Embeds:
      - Title: Server Verification • Verified
        Description: "> Your have been verified."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
  InvalidCode:
    Embeds:
      - Title: Server Verification • Invalid Code
        Description: "> The code you entered is invalid. Please try again."
        FooterIcon: "{user-pfp}"
        Footer: "{user-tag}"
        Timestamp: true
TypeWebsite:
  VerificationWebsite:
    Private: true
    Embeds:
      - Title: Server Verification • Verification
        Description: "> Please verify your server by clicking the button below."
        FooterIcon: "{bot-pfp}"
        Footer: "{bot-tag}"
        Timestamp: true
    Components:
      "1":
        - Type: Button
          Label: Verify
          Style: Link
          Link: "{redirect}"
Questions:
  Embeds:
    - AuthorIcon: "{user-pfp}"
      Author: "[{current-question}/{total-questions}] Answer the following"
      Description: "> {question}"
      Timestamp: true
Errors:
  ErrorOccured: An error occured. Please contact an administrator.
  ErrorOccuredRole: An error occured while trying to give or take roles. Please
    contact an administrator.
  UnableToDM: Unable to DM you. Please open your Direct Messages and try again.
  Timesup: Times up, you didn't respond in 30 seconds time. Please try again.
  InvalidRequest: Invalid Request Message.
  InvalidUser: User wasn't found in the guild.
  Website:
    ErrorOccured: <h1><center>Error Occured, Please contact an adminstrator.</center></h1>
    GuildNotFound: <h1><center>Guild Not Found. Please contact an adminstrator.</center></h1>
    UserNotFound:
      <h1><center>We weren't able to find you in server. Please contact
      an adminstrator if this is a mistake.</center></h1>
Error:
  Embeds:
    - Title: Verifier • Unable to execute action
      Description: "> {msg}"
      FooterIcon: "{user-pfp}"
      Footer: "{user-tag}"
      Color: "#ff0800"
      Timestamp: true
```

## Configuration | commands.yml

```yaml
Send-Verification-Embed:
  Name: send-verification-embed
  Description: Create polls on your server!
  Usage: send-verification-embed
  Aliases: []
  Permission:
    - Developer
  SlashCommand:
    # Slash Command wont work even if enabled.
    Enabled: false
```
