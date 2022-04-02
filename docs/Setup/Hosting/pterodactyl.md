---
sidebar_position: 4
---

# Pterodactyl Hosting

---



:::warn 
Pterodactyl is currently **unsupported** and the instructions below are left only for archiving purposes. Please join our [Discord Server](/discord) if you would like to request support with installing BrayanBot on Pterodactyl. The official Pterodactyl Egg is __OUTDATED__.
:::

[Pterodactyl Panel](https://pterodactyl.io/) is a server management panel that is used by many hosting providers.
If you are using a Hosting Provider, you should take a look at our Using a Hosting Provider below. This only covers instructions for **self-hosted** Pterodactyl instances.

## Installing BrayanBot on Pterodactyl

### Self-Hosted Pterodactyl
Start by downloading our [Official Pterodactyl Egg](/) and create a server on your Pterodactyl Panel using the Pterodactyl Egg. (Video Instructions Below)

<figure  class="mdx-video" markdown>
  <div align="center" class="mdx-video__inner">
    <iframe src="https://i.zorino.in/ZLXmsedge_Q4FbuWKa1a.mp4" allowfullscreen></iframe>
  </div>
</figure>

You may also install additional node modules directly from **Settings > Variables > Node Modules** section. Simply add the names of the modules you'd like to install and reboot.
<figure  class="mdx-video" markdown>
  <div align="center" class="mdx-video__inner">
    <iframe src="https://i.zorino.in/ESJmsedge_uhfR8DiFF6.mp4" allowfullscreen></iframe>
  </div>
</figure>


The Pterodactyl Egg allows you to customize your bot's settings directly from the **Variables** section under **Settings**.
<figure>
  <div align="center">
    <img src="https://i.zorino.in/KGTmsedge_g5opAI43OX.png"></img>
  </div>
</figure>

### Using a Provider (Hosting Company)

Using a Provider is _not recommended_ due to the nature of most hosting providers and the scope of control you will have on your machine. However if you really would like to use a hosting provider (probably because it's cheaper) make sure that their **NodeJS** version is **16.6.0** or higher.

We recommend [Revivenode](https://revivenode.com/discord.html) to host BrayanBot.

#### Installation

**Using a NodeJS Egg**
If you are not allowed to upload your own egg but to choose from a batch of NodeJS eggs; you may initialize a server using a NodeJS v16 egg and then upload the files. Simply choose the correct NodeJS version, upload the .zip file to the panel and then extract the zip.

**Using Official Pterodactyl Egg**
If you are allowed to uplaod custom Pterodactyl Eggs, then you can use our [Official Pterodactyl Egg](/) which will download the bot as well as its dependencies.

If you have customized the source code of the bot or would like to use the [unstable Dev Branch](/) then you are still advised to go with a NodeJS egg.

## Getting Help
:::info 💡 Ran into a problem?
Join our [support server](https://brayanbot.dev/discord) and open a ticket.
:::