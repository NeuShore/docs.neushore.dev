---
sidebar_position: 3
---

# Recomendations
---
## Preface

BrayanBot is an advanced discord bot utilizing the latest DiscordJS features (such as slash commands) and protesting the nature of low-quality, closed source Discord Bots while providing you with easy installation and simple customization, as well as extensibility via first or third party addons. Not satisfied? It is also a Bot Base which you can use to shape your own bot.

## Available Installation Methods

Given the open-source, extensible and customizable nature as well as it's design principle to be easy to use; we offer various ways to get into hosting and using BrayanBot at the speed of sound.

* Self-Hosted (Recommended)
* Hosting Provider
* Docker / Docker-Compose (Advanced)
* Using the official Pterodactyl Egg

If you know your way around NodeJS and npm, you should consider self-hosting BrayanBot. We offer manual installation instructions, built-in installer and a [Docker Installation Script](https://github.com/BrayanbotDev/BrayanBot/blob/main/install/docker-linux.sh) for those wishing to self-host.

For easy scalability, you might consider [Docker](https://docs.docker.com/engine/reference/commandline/cli/) or [Docker Compose](https://docs.docker.com/compose/). There is also a [Public Docker Image](https://hub.docker.com/repository/docker/brayanbot/brayanbot) available for testing purposes.

If you are using a hosting provider, [Using a Hosting Provider](/) is where you should look. We also provide instructions for those using [Selfhosted Pterodactyl Panel](/)

## Recommended Installation 

### Operating System

We recommend running BrayanBot on a VPS or a local server running Linux. You may try and successfully run it on your Windows computer, but you will be more likely to face errors due to the operating system. Debian or Ubuntu (and their derivatives) are ideal, but if you choose to run it on a server running Arch Linux; installations (and support) will be provided where available.

### Specs

BrayanBot is quite lightweight and does not require and entire VPS to run on. If you are not running docker, consider placing it in the corner of an already existing VPS or purchase Discord Bot Hosting for a reasonable price. The recommended specs for BrayanBot are

- 200mb ram
- 1 Core
- 500MB Storage

Do keep in mind that those may be subjected to change based on the amount of users in your server and the number of addons you are running as well as the performance impact of those addons.

### Machine

A [VPS](https://revivenode.com/dedicated.html?) or a small-scale Raspberry Pi is a great option if you're self-hosting due to their low cost and low maintenance nature. You may also choose to run the bot on your own personal computer (using PM2), but you will need to keep in mind that the bot will use your system resources and may deduct from overall performance.