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

### Install Dependencies

<Tabs>
<TabItem value="debian" label="Debian/Ubuntu">

```bash
sudo apt install zip unzip wget 
```
</TabItem>
<TabItem value="arch" label="Arch">

```bash
sudo pacman -S zip unzip wget
```
</TabItem>
<TabItem value="fedora" label="RedHat/CentOS/Fedora">

```bash
sudo dnf install zip unzip wget
```
</TabItem>
</Tabs>

### Install BrayanBot
Installing BrayanBot is pretty straightforward and can be done in less than 5 steps.
<Tabs>
<TabItem value="stable" label="Stable">

1. Download the zip file and unzip
```bash
wget https://github.com/brayanbotdev/brayanbot/releases/download/latest/brayanbot.zip &
unzip brayanbot.zip
```
1. Move into the BrayanBot Directory
```bash
cd BrayanBot
```
3. Copy the example config to the main `config.yml` 
```bash
cp example.config.yml config.yml # cp is a built-in Linux command for copying files
```
**or if you would like to simply rename the file**
```bash
mv example.config.yml config.yml # mv is a built-in Linux command for moving files
```
4. Edit your `config.yml`
```bash
nano config.yml
```
**or**
```bash
vim config.yml # Imagine using vim
```
</TabItem>
<TabItem value="Dev" label="Dev">

:::danger Dev Branch
If you are interested in receiving updates *as soon as they are out* for the cost of high chance of breaking changes and less stability; you may clone into the **dev** branch instead of **main**. Changes from the dev branch will be *eventually* merged into main, but it is an option for those who like to live on edge.
You also must keep in mind that using `git` will set up version control for your bot files and will make it harder to update if you have edited default -and tracked- bot files. **Do not** use this branch if you do not know how to use **git**.
:::

1. Clone the Github Repo
```bash
git clone -b dev https://github.com/BrayanBotDev/BrayanBot.git
```
2. Move into the BrayanBot Directory
```bash
cd BrayanBot
```
3. Copy the example config to the main `config.yml` 
```bash
cp example.config.yml config.yml 
```
**or if you would like to rename the file instead of copying**
```bash
mv example.config.yml config.yml
```
4. Edit your `config.yml`
```bash
nano config.yml
```
**or**
```bash
vim config.yml
```
</TabItem>
</Tabs>

### Installing NodeJS Dependencies & Starting BrayanBot
<Tabs>
<TabItem value="yarn" label="Yarn">

1. Install Yarn
```bash
sudo npm i -g yarn
```
2. Install Required dependencies
```bash
yarn
```
3. Start the Bot
```bash
yarn start
```

</TabItem>
<TabItem value="npm" label="NPM">

1. Install Required dependencies
```bash
npm install
```
2. Start the Bot
```bash
npm run start
```

</TabItem>
</Tabs>

And that's it, you have successfully started your bot!

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