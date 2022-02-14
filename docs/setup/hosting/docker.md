---
sidebar_position: 4
---

# Docker Hosting (Advanced)
---

Installing on Docker allows you to easily deploy BrayanBot on any machine with ease. If you are planning to scale your server to your needs or to run multiple instances of BrayanBot; Docker is the recommended way. Basic knowledge of Docker is mandatory to use this method.

!!! warning 
    This page assumes that you have already completed the [Pre-Installation Steps](https://github.com/DakshNamdev/BrayanBot/wiki/Preinstall)
    If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them.


## Installation


### Building Locally

If you have made any changes to the bot's source code, you will need to build the Docker image locally.

1. `docker build -t brayanbot ./`
2. `docker run --name brayanbot -t brayanbot`

Simple as that!

### Using Docker-Compose (Recommended)

If you are using Docker-Compose, you actually have 2 choices to how you want to use Docker-Compose. If you'd like to pick the easy path, just run the installation script with

```sh
chmod +x install/docker-linux.sh && ./install/docker-linux.sh
```

and the bot will help you customize your config.yml *on* the terminal.

If you're interested in customizing *everything* while using Docker-Compose, take a look at `Docker-compose.yml` and then run

```sh
docker-compose up -d
```

and that will start your bot instance.

### Using the Public Image

The Public Image should be used only for testing. It will not allow you to run a bot unless you know your way around Docker *really* well and manage to insert required values to your config while pulling from an image.

1. `docker pull brayanbot/brayanbot:latest`
2. `docker run --name brayanbot -t brayanbot`

And this will run your instance of BrayanBot!

> 💡 Ran into a problem? Join our [support server](https://brayanbot.dev/discord)

## ⚙️ Customizing

To see the instructions on customizing BrayanBot, please see the [Customizing](Customizing) Page of the Wiki.