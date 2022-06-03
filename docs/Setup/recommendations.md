---
sidebar_position: 3
description: Our recommendations to how you should host BrayanBot
---

# Recomendations

---

## Preface

BrayanBot is an advanced discord bot utilizing the latest DiscordJS features (such as slash commands & buttons) and protesting the nature of low-quality, closed source Discord Bots while providing you with easy installation and simple customization, as well as extensibility via first or third party addons.

Not satisfied? It is also a bot template which you may use freely to shape your own bot.

## Available Installation Methods

Given the open-source, extensible and customizable nature as well as it's design principle to be easy to use; we offer various ways to get into hosting and using BrayanBot at the speed of sound.

* Self-Hosted (Recommended)
* Hosting Provider
* Docker / Docker-Compose (Advanced)
* Using the official Pterodactyl Egg

If you know your way around NodeJS and a node package manager (such as npm, Yarn or pnpm), you should consider self-hosting BrayanBot. We offer manual installation instructions, built-in installer and a [Docker Installation Script](https://github.com/BrayanBot/BrayanBot/blob/main/install/docker-linux.sh) for those wishing to self-host.

For easy scalability, you might consider [Docker](https://docs.docker.com/engine/reference/commandline/cli/) or [Docker Compose](https://docs.docker.com/compose). There is also a [Public Docker Image](https://hub.docker.com/repository/docker/brayanbot/brayanbot) available for testing purposes.

If you are using a hosting provider, [Using a Hosting Provider](/docs/Setup/hosting/pterodactyl#using-a-provider-hosting-company) is where you should look. We also provide instructions for those using [Selfhosted Pterodactyl Panel](/docs/Setup/hosting/pterodactyl#installing-brayanbot-on-pterodactyl)

## Recommended Installation 

### Operating System

We recommend running BrayanBot on a Linux VPS or Dedicated server. A VPS running Debian or Ubuntu is ideal. You may try and successfully run BrayanBot on a Windows machine, but you will be more likely to face errors due to your Operating System on Windows than you would on Linux. Self-hosting on your personal computer running Windows is possible, but not recommended. We also recommend staying away from Discord Bot hosts, but they are preferred option over buying an entire VPS if you do not have one in your possession.

### Specs

BrayanBot is quite lightweight and does not require an entire VPS or a Dedicated server to run on. If you are not running Docker, consider placing BrayanBOt in the corner of an already existing VPS or purchase Discord Bot Hosting for a reasonable price. The recommended specs for BrayanBot are

- 200mb ram
- 1 Core
- 500MB Storage

> Do keep in mind that those may be subjected to change based on the amount of users in your server and the number of addons you are running as well as the performance impact of those addons.

The recommended dedicated hosts are

- (VPS) [Hetzner](https://www.hetzner.com/)
- (VPS/Bot Hosting) [Revivenode](https://revivenode.com/)
- (VPS) [Contabo](https://contabo.com/en/)
- (VPS/Bot Hosting) [EnviroMC](https://enviromc.host/)

### Machine

A VPS or a small-scale Raspberry Pi [(See blog)](/blog/raspberry-pi-installation) are both great options if you're self-hosting BrayanBot, due to their low cost and low maintenance nature. You may also choose to run the bot on your own personal computer (using PM2), but you will need to keep in mind that the bot will use your system resources and may deduct from overall performance.
