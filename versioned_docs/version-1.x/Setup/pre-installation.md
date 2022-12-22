---
sidebar_position: 2
description: About to host BrayanBot? Stop, read this first
---

# Pre Installation

---

## Setting up a Bot application

### Creating your bot Account

1. Open the [Discord Developer Portal](https://discord.com/developers/applications/me).
2. Click on the **New Application** button.
3. Enter a name for your application.
4. Click the **Create** button.
   _You can edit your application's **name**, **description** and **avatar** on the same page._
5. Save the changes if you have made any.
6. Move to the **Bot** tab on the left panel.
7. Click on **Add Bot** button on the right side then confirm by clicking **Yes, do it!**

> _In this page, you can change your bot's avatar & username._

### Adding the Bot to your Server

To create an invite link, head back to the [My Apps](https://discord.com/developers/applications/me) page under the **Applications** section, click on your bot application, and open the **OAuth2** page from the left panel.

1. At the bottom of the page, you'll find Discord's OAuth2 URL generator. Select the **bot** and **applications.commands** selections. Once you select the bot option, a list of permissions will appear, then select **Administrator** (Recommended).
2. Grab the link via the **Copy** button and enter it in your browser's URL.
3. Choose the server you want to add it to and click **"Authorize"**. Do note that you'll need the **"Manage Server"** permission on a server to add your bot there. This should then present you with a nice confirmation message. Confirm, and enjoy your new bot.

:::danger
Do not forget about **applications.commands** scope. You will receive errors about missing permissions if you ignore this step. Some functionality may be affected.
:::
