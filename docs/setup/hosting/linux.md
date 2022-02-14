---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linux Hosting
---
:::warning
This page assumes that you have already completed the [Pre-Installation Steps](https://github.com/DakshNamdev/BrayanBot/wiki/Preinstall) If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them.
:::

## Installation

Clone the source code and move into the bot's directory.

:::danger Dev Branch
If you are interested in receiving updates *as soon as they are out* for the cost of high chance of breaking changes and less stability; you may clone into the **dev** branch instead of **main**. Changes from the dev branch will be *eventually* merged into main, but it is an option for those who like to live on edge.
:::

<Tabs>
<TabItem value="stable" label="Stable">

1. Clone the Github Repo
```bash
git clone https://github.com/DakshNamdev/BrayanBot.git
```
2. Move into the BrayanBot Directory
```bash
cd BrayanBot
```
3. Copy the example config to the main `config.yml` 
```bash
cp example.config.yml config.yml
```
</TabItem>
<TabItem value="Dev" label="Dev">

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

</TabItem>
</Tabs>

<Tabs>
<TabItem value="yarn" label="Yarn">

1. Install Required dependencies
```bash
yarn
```
2. Start the Bot
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

:::info 💡 Ran into a problem?
Join our [support server](https://brayanbot.dev/discord) and open a ticket.
:::