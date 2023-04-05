---
sidebar_place: 1
description: Learn how to create your own addons
title: Creating Addons
---

# Proxima Addon Development

If you are proficient in Javascript and willing to extend Proxima's functionality; you are in luck! Proxima comes with an extensive Addon handler, allowing you to easily interact with Proxima without having to edit the source code and breaking upstream. This guide will go over the basics of creating your own addon, but it is not a [Discord.JS guide](https://discord.js.org/#/docs/) and will not substitute one. You are advised to be proficient in JavaScript, Node.JS and Discord.JS before creating an addon. But even if you are not, this may be a good starting point.

You will likely want to know your way around the basic files of Proxima. [Utils.js](https://github.com/NeuShore/Proxima/blob/dev/Modules/Utils.js), [AddonHandler.js](https://github.com/NeuShore/Proxima/blob/dev/Modules/Handlers/AddonHandler.js), and [AddonTemplate.js](https://github.com/NeuShore/Proxima/blob/dev/AddonTemplate.js) are good places to start looking.

> ## Helpful Resources for starters

- Learning JavaScript & Node.js
  - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction) | [MDN Refrence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  - [CodeCademy](https://www.codecademy.com/catalog/language/javascript) (Free/Paid Online Course)
  - [Eloquent](https://eloquentjavascript.net/) (Free Book)
- Discord.JS
  - [Documentation](https://discord.js.org/#/docs/)
  - [Guide](https://discordjs.guide/)

## Getting started

Before you start, you should check if you meet all developer requirements.

0. A working Brain. 🧠
1. Basic knowledge about JavaScript
2. A good Integrated Development Environment (IDE)
3. Knowledge about using internet

After you confirm that you meet all the requirements you can start developing your first addon.

## Creating a new addon file

1. Open `Proxima/data/addons` Folder. (If doesn't exist, Generate by Starting the bot or manually creating it)
   - Here all addons will be placed, any addons outside this folder won't be loaded.
2. Create your file with extension `.js`. Example: `AddonName.js`
   - This file will be your addon in which you will write your code.
   - Addon is required to have `.js` as extension to work.

## Addon Template

Now, in your addon file copy and paste the code provided below to mark your file as an addon

```js
import { Addon } from "../../src/Modules/Structures/Handlers/Addons.js";

const addon = new Addon('hello-world', "0.0.0");
const addonConfig = {
    config: {
      Variable: "Hello"
    },
};

/** @type {addonConfig} */
const { config } = addon.customConfig(addonConfig);

addon.setLog(`This addon has loaded!`);

addon.setExecute(async (manager) => {
  console.log(`${config.Variable} world!`)
  // Addon Code Goes here.
})

export default addon;
```

### Elaborating Addon Template

**Modules Required**
- `Addon`: This is imported from AddonHandler to create recognize this file as a addon.

**Others**
- Variable `addon` intilizes the addon with addon's name & version.
- Variable `addonConfig` is used to define addon's config if required.
- Variable `config`, `lang` and `commands` are return values of `addon.customConfig` function which you can use in your addon.
- Function `addon.setLog` is used to set what will addon log when it's fully loaded first time bot starts.
- Function `addon.setExecute` is used to set what addon will actually run.

## Creating custom configs

As you can see, there is variable `addonConfig` in template addon.
You can use it to define custom configs for your addon.

> These configs are generated under `Proxima/data/addon_configs/hello-world` Folder. Where `hello-world` is addon's name.

### CustomConfig construction:

`customConfigs` takes Object Input as shown in addonTemplate
- `[key: string]: Object | Array`

Example Configs:

```js
const addonConfig = {
    config: {
      String: "Hello",
      Boolean: true,
      Integer: 1,
      Object: {
        Hello: "World"
      },
      Array: ["Hello", "World"]
    },
};

/** @type {addonConfig} */
const { config } = addon.customConfig(addonConfig);
```

## Coding your Addon

You will write your addon code under `setExecute` function.

- `manager`: This parameter is defined as [Discord.Client](https://discord.js.org/#/docs/discord.js/stable/class/Client) (This client object can be not logged into discord via token.)
  - This is also an instance of our custom class `Proxima`

```js
addon.setExecute(async (manager) => {
  // Addon Code Goes here.
})
```

## Creating Custom Commands

Proxima Command Handler is very advanced and allows you to define multiple things, such as command aliases, permissions, allowed channels and more.
Using the config handler, you can create configurable values.

**Use below code to create you custom command:**

[Discord Permissions](https://discord.js.org/#/docs/discord.js/stable/class/Permissions)

```js
import { Command } from "../../src/Modules/Structures/Handlers/Commands.js";

new Command({
  commandData: commands["Music"],
  requiredPermissions: {
      bot: [],  // Any Discord Permission required for bot
      user: []  // Any Discord Permission required for bot
  },
  commandData: {
      Enabled: true,
      Name: 'test',
      Usage: 'test,
      Type: 'general',
      Cooldown: false,
      Aliases: ['t'],
      Permission: ['@everyone'],
      Description: 'This is a test command.',
      DeleteCommand: 'false',
      Arguments: [] // SlashCommand Options
  },
  LegacyRun: (manager, message, args, prefixUsed, commandData) => {
    message.reply("Test")
  },
  InteractionRun: (manager, interaction, commandData) => {
    interaction.reply("Test")
  }
})
```
### SlashCommand Options

You can define options for your slash command.
There are multiple options for it, which you can all use in /slash command.

Option Usage:

```json
{
    Type: "option-type",
    Name: "option-name",
    Description: "option-description",
    Required: true,
    Choices: [],
    ChannelTypes: [],
},
```

Where

- `Type`: This is a option type. Avaliable types:
  - `Sub Command` - Subcommand
  - `Sub Command Group` - Subcommand group
  - `Integer` - Integer(number) option
  - `Boolean` - Boolean(`true`/`false`) option
  - `User` - User option
  - `Channel` - Channel option.
  - `Role` - Role option
  - `Mentionable` - Mentionable option
- `Name`: Name of your option.
- `Description`: Description of your option.
- `ChannelTypes`(Only for `channel` type): Array of allowed channel types. Avaliable types:
  - `Text` - Text Channel
  - `Voice` - Voice Channel
  - `Category` - Channel category
  - `News` - News channel
  - `News Thread` - News thread channel
  - `Public Thread` - Public thread channel
  - `Private Thread` - Private thread channel
  - `Stage channel` - Stage channel
- `Required`: Defines if option is required or not.
- `Choices`(Only for `string`/`integer`/`boolean` type): Array of available choices.

#### Slash Command Option Choices

In case of `string`/`integer`/`boolean` type, you can define choices for your option.
**Example option:**

```json
Choices: [
    {
        Name: "choice-name",
        Value: "choice-value",
    },
]
```

Where

- `Name`: Name of your choice.
- `Value`: Value of your choice.

That's everything you should know about CommandHandler.
You your Discord.js knowledge and code your command ;-)

## Creating Event Listener

Since you know, how to create custom commands, it's time to create your first event listener.

To do it, follow the example code below:

```js
import { EventListener } from "../../src/Modules/Structures/Handlers/Events.js";

new EventListener("EVENT-NAME", async (manager, ...parameters) => {
  // Code for event here.
})
```

Where:

- `EVENT-NAME`: Name of your event. You can find avaliable events list [here](https://discord.js.org/#/docs/discord.js/stable/class/Client).
- `parameters`: Object which defines your event parameters.

Example Event Listener:

```js
new EventListener("messageCreate", async (manager, message) => {
  console.log('New Message Recieved!')
})
```

**Congratulations!**

You have successfully completed addon writing guide.
Now, grab your keyboard, a good IDE and start making your own addons!