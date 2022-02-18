---
sidebar_position: 1
description: Find out dependencies needed to host BrayanBot
---

# Dependencies

---

## Global Dependencies (Windows/Linux/MacOS)

First and foremost, you will require the following to even install BrayanBot

- A machine[^1] (VPS, Dedicated Machine)
- A text editor - Visual Studio Code is recommended

Regardless of your operating system, you will need those dependencies on your host machine.

- A connection to the internet
- [Git](https://git-scm.com/downloads)
- [NodeJS  >=v16.6.0](https://nodejs.org/en/)
- NPM or [Yarn](https://yarnpkg.com/)
- All NPM packages listed in package.json. Those will be downloaded during installation


## Docker Dependencies (Linux)

If you are using Docker to host BrayanBot, you will also need

- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

:::danger Docker on Windows
Thanks to [**Windows Subsystem for Linux (WSL)**](https://docs.microsoft.com/en-us/windows/wsl/install) and [**Docker Desktop**](https://www.docker.com/products/docker-desktop), it is possible to run Docker on a Windows machine, but we do not offer installation instructions nor support for users running Docker on windows, you will be on your own. You have been warned.
:::
If you have successfully installed the prerequisites, proceed to [Creating your Bot Application](/docs/setup/pre-installation).

[^1]: For recommended hardware and specs, see [General Recommendations](/docs/setup/recomendations)