---
sidebar_position: 1
---

# Hosting on Linux

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Note
This page assumes that you have already completed the [Pre-Installation Steps](/docs/Setup/pre-installation) If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them.
:::

:::caution Warning
The following guide only covers instructions for CLI installation. For GUI installation, please read the [relevant Blog Post](/)
:::

## Installation

We provide for three Linux distributions: Debian, ArchLinux and Fedora. If you are using a different distribution that is not a spin of those main three; feel free to request instructions or/and support for those on our [Discord Server](/discord)

The instructions found below make use of several packages to make the CLI installation as convenient as possible. You may substitute packages that offer similar functionality, or alternatively use a GUI installation method like SFTP.


<Tabs>
<TabItem value="debian" label="Debian/Ubuntu">

## 1. Install Depdenencies

```bash
sudo apt install zip unzip wget jq curl gawk 
```

Ubuntu 20.04 does not include the latest version of nodejs. You can install it using one of the following commands:

```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```bash
# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
```

### 2. Download BrayanBot

The universal bash script below can be used the download the latest version of BrayanBot from Github Releases. It requires **wget**, **curl**, **jq** , and **gawk** to be installed. Those packages are usually installed by default on most Linux distributions. 

```bash
#!/bin/bash
LATEST=$(curl https://api.github.com/repos/BrayanBot/BrayanBot/releases/latest -s | jq .name -r | awk '{ print $2 }')
URL="https://github.com/BrayanBot/BrayanBot/releases/download/$LATEST/BrayanBot-$LATEST.zip"

wget "$URL"
```

### 3. Unzip BrayanBot
After downloading the zip file, we need to unzip it and move into the BrayanBot directory.

```bash
unzip BrayanBot-*.zip -d ./BrayanBot && cd BrayanBot
```

### 4. Copy the example config to the main `config.yml`

BrayanBot needs config.yml to be in the BrayanBot directory. We will copy example.config.yml to the main config.yml file and insert our Bot's token.

```bash
cp example.config.yml config.yml && nano config.yml
```

Enter your bot token in the config.yml file, save, and exit nano with `Ctrl+X`

### 5. Install node modules & Start BrayanBot


<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install && npm run start --skip-dependencies
 ```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
# Install Yarn
sudo npm i -g Yarn

# Install dependencies and start the bot
yarn && yarn start --skip-dependencies
```

</TabItem>
<TabItem value="pnpm" label="pnpm (recommended)">

```bash
# Install pnpm
sudo npm i -g pnpm

# Install dependencies and start the bot
pnpm install && pnpm run start --skip-dependencies
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="arch" label="Arch Linux">

## 1. Install Depdenencies

```bash
sudo pacman -S zip unzip wget nano jq curl nodejs npm 
# nano does not come installed on most Arch installations, you may avoid installing nano and use vi/vim if that is your preference
```

### 2. Download BrayanBot
The universal bash script below can be used the download the latest version of BrayanBot from Github Releases. It requires **wget**, **curl**, **jq** , and **gawk** to be installed. Those packages are usually installed by default on most Linux distributions. 

```bash
#!/bin/bash
LATEST=$(curl https://api.github.com/repos/BrayanBot/BrayanBot/releases/latest -s | jq .name -r | awk '{ print $2 }')
URL="https://github.com/BrayanBot/BrayanBot/releases/download/$LATEST/BrayanBot-$LATEST.zip"

wget "$URL"
```

### 3. Unzip BrayanBot
After downloading the zip file, we need to unzip it and move into the BrayanBot directory.

```bash
unzip BrayanBot-*.zip -d ./BrayanBot && cd BrayanBot
```

### 4. Copy the example config to the main `config.yml`

BrayanBot needs config.yml to be in the BrayanBot directory. We will copy example.config.yml to the main config.yml file and insert our Bot's token.

```bash
cp example.config.yml config.yml && nano config.yml
```

Enter your bot token in the config.yml file, save, and exit nano with `Ctrl+X`

### 5. Install node modules & Start BrayanBot


<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install && npm run start --skip-dependencies
 ```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
yarn && yarn start --skip-dependencies
```

</TabItem>
<TabItem value="pnpm" label="pnpm (recommended)">

```bash
pnpm install && pnpm run start --skip-dependencies
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="fedora" label="RedHat/CentOS/Fedora">

# 1. Install Depdenencies

```bash
sudo dnf install zip unzip wget jq curl gawk 
```

### 2. Download BrayanBot

The universal bash script below can be used the download the latest version of BrayanBot from Github Releases. It requires **wget**, **curl**, **jq** , and **gawk** to be installed. Those packages are usually installed by default on most Linux distributions. 

```bash
#!/bin/bash
LATEST=$(curl https://api.github.com/repos/BrayanBot/BrayanBot/releases/latest -s | jq .name -r | awk '{ print $2 }')
URL="https://github.com/BrayanBot/BrayanBot/releases/download/$LATEST/BrayanBot-$LATEST.zip"

wget "$URL"
```

### 3. Unzip BrayanBot
After downloading the zip file, we need to unzip it and move into the BrayanBot directory.

```bash
unzip BrayanBot-*.zip -d ./BrayanBot && cd BrayanBot
```

### 4. Copy the example config to the main `config.yml`

BrayanBot needs config.yml to be in the BrayanBot directory. We will copy example.config.yml to the main config.yml file and insert our Bot's token.

```bash
cp example.config.yml config.yml && nano config.yml
```

Enter your bot token in the config.yml file, save, and exit nano with `Ctrl+X`

### 5. Install node modules & Start BrayanBot


<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install && npm run start --skip-dependencies
 ```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
# Install Yarn
sudo npm i -g Yarn

# Install dependencies and start the bot
yarn && yarn start --skip-dependencies
```

</TabItem>
<TabItem value="pnpm" label="pnpm (recommended)">

```bash
# Install pnpm
sudo npm i -g pnpm

# Install dependencies and start the bot
pnpm install && pnpm run start --skip-dependencies
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

And that's it, you have successfully installed and started BrayanBot!

## Power Controls

If you would like to keep the bot running after you log out of your terminal/machine; you may use **PM2**. It will also allow you to have BrayanBot persist between reboots, if you configure it that way.

### Using PM2 Process Manager

```bash
# Install PM2 through NPM
sudo npm install -g pm2
# Start BrayanBot with PM2
pm2 start index.js --name brayanbot
```

- `pm2 stop brayanbot` # Stops the pm2 process
- `pm2 restart brayanbot` # Restart the process
- `pm2 logs brayanbot` # View recent logs as well as a live console
- `pm2 logs brayanbot --lines 1000 | nc termbin.com 9999` # Export the bot's past logs and paste them to termbin.

## Getting Help

:::info 💡 Ran into a problem?
Join our [support server](https://brayanbot.dev/discord) and open a ticket.
:::