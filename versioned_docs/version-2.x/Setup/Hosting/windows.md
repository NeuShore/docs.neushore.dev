---
sidebar_position: 3
---

# Hosting on Windows

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Note
This page assumes that you have already completed the [Pre-Installation Steps](/docs/Setup/pre-installation) If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them.
:::

## Installation

Clone the source code and move into the bot's directory.

### 1. Install Dependencies

As Windows does not come with a great package manager like most Linux distros or brew on MacOS, you will need to manually install some dependencies.

- [git](https://git-scm.com/downloads)
- [NodeJS >= v16.15.0](https://nodejs.org/en/download/)
- [winrar](https://www.winrar.com/download.html) or [7-Zip](https://www.7-zip.org/download.html)
- A text editor ([VsCode](https://code.visualstudio.com/download) or [Notepad++](https://notepad-plus-plus.org/download/v6.9.4.html) are recommended)

### 2. Download Proxima from one of our official sources

Download Proxima from [Github Releases](https://github.com/NeuShore/Proxima/releases/latest) or [Coremart](https://coremart.net/resources/Proxima-the-future.33)

### 3. Extract the zip you have downloaded

If you are using WinRar or 7zip, you should have an option to extract the zip when you right click on the file.

### 4. Move into the Proxima Directory

<Tabs>
<TabItem value="powershell" label="Using Powershell">

Powershell is Windows' own command line interface. It is a very powerful tool that allows you to run commands in a terminal.

```powershell
# Move to Proxima directory
cd '/path/to/Proxima'
```

</TabItem>
<TabItem value="vsc" label="Using VSCode">
VSCode is a powerful IDE that you can use for many purposes. With extensions, it is a great environment to configure your Proxima instance.

If you have chosen VSCode over powershell, you can right click the Proxima folder and open it with VSCode; this will allow you to edit your configuration files
as well as use the built-in terminal to run necessary commands

</TabItem>
</Tabs>

### 4. Copy the example config to the main `config.yml`

Proxima needs config.yml to be in the Proxima directory. We will copy example.config.yml to the main config.yml file and insert our Bot's token.

```bash
# Copy example.config.yml to config.yml
copy example.config.yml config.yml

# or if you would like to simply rename the file
move example.config.yml config.yml
```

You can also do this on VSCode by right clicking the file and copying it. Or you can rename the file before you insert the token.

### 5. Install node modules & Start Proxima

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
