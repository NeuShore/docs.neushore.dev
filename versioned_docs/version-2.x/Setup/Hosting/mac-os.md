---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Hosting on MacOS

---

:::caution Note
This page assumes that you have already completed the [Pre-Installation Steps](/docs/Setup/pre-installation) If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them.
:::

## Installation

## 1. Install Depdenencies

To install certain dependencies (like **wget** or the latest version of **curl**) you will need `brew` installed on your machine.

1. Install brew

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install necessary packages

```bash
brew install wget nano curl jq awk
```

### 2. Download Proxima

The universal bash script below can be used the download the latest version of Proxima from Github Releases. It requires **wget**, **curl**, **jq** , and **gawk** to be installed.

```bash
#!/bin/bash
LATEST=$(curl https://api.github.com/repos/NeuShore/Proxima/releases/latest -s | jq .name -r | awk '{ print $2 }')
URL="https://github.com/NeuShore/Proxima/releases/download/$LATEST/Proxima-$LATEST.zip"

wget "$URL"
```

### 3. Unzip Proxima

After downloading the zip file, we need to unzip it and move into the Proxima directory.

```bash
unzip Proxima-*.zip -d ./Proxima && cd Proxima
```

### 4. Copy the example config to the main `config.yml`

Proxima needs config.yml to be in the Proxima directory. We will copy example.config.yml to the main config.yml file and insert our Bot's token.

```bash
cp example.config.yml config.yml && nano config.yml
```

Enter your bot token in the config.yml file, save, and exit nano with `Ctrl+X`

### 5. Install node modules & Start Proxima

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

And that's it, you have successfully installed and started Proxima!

## Power Controls

If you would like to keep the bot running after you log out of your terminal/machine; you may use **PM2**. It will also allow you to have Proxima persist between reboots, if you configure it that way.

### Using PM2 Process Manager

```bash
# Install PM2 through NPM
npm install -g pm2
# Start Proxima with PM2
pm2 start index.js --name Proxima
```

- `pm2 stop Proxima` # Stops the pm2 process
- `pm2 restart Proxima` # Restart the process
- `pm2 logs Proxima` # View recent logs as well as a live console
- `pm2 logs Proxima --lines 1000 | nc termbin.com 9999` # Export the bot's past logs and paste them to termbin.

## Getting Help

:::info 💡 Ran into a problem?
Join our [support server](https://neushore.dev/discord) and open a ticket.
:::
