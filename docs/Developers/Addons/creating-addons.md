---
sidebar_place: 1
description: Learn how to create your own addons
---
# BrayanBot Addon Development

If you are proficient in Javascript and willing to extend BrayanBot's functionality; you are in luck! BrayanBot comes with an extensive Addon handler, allowing you to easily interact with BrayanBot without having to edit the source code and breaking upstream. This guide will go over the basics of creating your own addon, but it is not a DiscordJS guide and will not subsitute one. You are advised to be proficient in Javascript, NodeJS and DiscordJS before creating an addon. But even if you are not, this may be a good starting point.

You will likely want to know your way around the basic files of BrayanBot. [Utils.js](https://github.com/BrayanbotDev/BrayanBot/blob/dev/Modules/Utils.js), [AddonHandler.js](https://github.com/BrayanbotDev/BrayanBot/blob/dev/Modules/Handlers/AddonHandler.js), and [AddonTemplate.js](https://github.com/BrayanbotDev/BrayanBot/blob/dev/AddonTemplate.js) are good places to start looking.


## Getting started

Before you start, you should check if you meet all developer requirements.

1. Basic knowledge about JavaScript
2. A good Integrated Development Environment (IDE)
3. Knowlege about using internet

After you confirm that you meet all the requirements you can start developing your first addon.

---

## Creating addon file

First locate the `Addons` folder.
If it's not created, you can generate it by starting bot (or manually creating it yourself).

Then, open it and create `addon-name.js` file in it.
It will be your addon in which you will write your code.

Now, copy and paste this code at the top of your addon file:

```js
const { getConfig } = require("../Modules/Handlers/AddonHandler"),

    //Command Handler
    //Not needed if you don't plan to create custom commands
    CommandHandler = require("../Modules/Handlers/CommandHandler"),

    //Event Handler
    //Not needed if you don't plan to listen to events
    EventHandler = require("../Modules/Handlers/EventHandler"),

    //BrayanBot Utils
    //Usefull tool for addon developers
    //Will be described in seperate guide
    Utils = require("../Modules/Utils"),
```

Those are modules that you will need to import in order to get your addon working.

Next part of your code will be base addon code.

```js
module.exports = {
    _name: "Your-Addon-Name",
    _log: true,
    _author: {
        name: "Your-Nickname",
        color: "Selected-Hex-Color",
    },
    _customConfigs: {},
};
```

**This part defines you addon information.**
Let's describe it in more detail.

- `_name`: This is the name of your addon.
- `_log`: This is a value which defines what information will be logged in console on addon start.
  - `_nonInfo` - No information will be logged.
  - String - Bot will send a log with this string.
  - Object - Bot will send a log with this object.
  - Function - Bot will execute this function.
  - `True`/`False` - Bot will send default log message.
- `_author`: This is an object which defines author of your addon. (Your information)
  - `name`: Place for you nickname.
  - `color`: Your selected hex color(will be used in default addon start log).
- `_customConfigs`: This is an object which defines custom configs for your addon. More info below.

---

## Creating custom configs

As you can see, there is `_customConfigs` option in your addon information section.
You can use it to define custom configs for your addon.

Below is CustomConfig construction:

```js
config_name: {
    type: "yml/json",
    path: `path/to/config.file`,
    data: {},
},
```

In more details:

- `type`: This is a type of your config.
  - `yml` - YAML file.
  - `json` - JSON file.
- `path`: This is a path to your config file. The best config path is: `./Addon_Configs/{addon-name}/{config-name}.{type}`
  - `{addon-name}` - Your addon name. Can be left as it - It will be automaticly replaced with your addon name.
  - `{config-name}` - Your config name.
  - `{type}` - Your config type(`.yml` or `.json`).
- `data`: This object defines your config content.

Example Configs:

```js
_customConfigs: {
    main: {
        type: "yml",
        path: `./Addon_Configs/{addon-name}/Main.yml`,
        data: {
            Enabled: true,
            Permission: "@everyone",
        },
    },
    lang: {
        type: "json",
        path: `./Addon_Configs/{addon-name}/Lang.json`,
        data: {
            Message: {
                Content: "👋 Hello from Lang",
            },
        },
    },
},
```

You are nowdone with basic addon information, it is time to start handling command/events using your config.

---

## Coding your Addon

First add the code below to your addon - this will handle your addon code.

```js
module.exports.run = async (bot, customConfig) => {
    //Your code goes here
}
```

### Getting config values

To get config values, use the code below:

```js
const { config_name: config_var_name } = customConfig;
```

where

- `config_name`: is the name of your config. Example: `main`.
- `config_var_name`: is the nameame of your config variable. Example: `addonConfig`.

**Example:**

```js
const { main: addonConfig, lang: addonLang } = customConfig;
```

That's everything for base addon code.
Now it's time to create some commands and event listeners.

---

## Creating Custom Commands

BrayanBot Command Handler is very advanced and allows you to define multiple things, such as command aliases, permissions, allowed channels and more.
Using the config handler, you can create configurable values.

**Use below code to create you custom command:**

```js
CommandHandler.set({
    name: "command-name",
    type: "command-type",
    commandData: {
        Description: "command-description",
        Usage: "command-usage",
        Aliases: [],
        Permission: [],
        SlashCommand: {
            Enabled: true,
            Data: {
                Name: "command-name",
                Description: "command-description",
                Options: [],
            },
        },
    },
    run: (bot, message, args, config) => {
        //Your code for slash command goes here
    },
    runSlash: (bot, interaction, options) => {
        //Your code for slash command goes here
    },
});
```

Now, let's break it into pieces:

- `name`: Name of your command.
- `type`: Type of your command. Example: `general`
- `commandData`: Object which defines your command data.
  - `Description`: Description of your command.
  - `Usage`: Usage of your command.
  - `Aliases`: Array of aliases of your command.
  - `Permission`: Array of permissions of your command. You can use Roles and Users or `@everyone` to set it available for everyone.
  - `SlashCommand`: Object which defines your slashcommand data.
    - `Enabled`: Value which defines slashcommand is enabled or not.
    - `Data`: Object which defines your slashcommand data.
      - `Name`: Name of your slashcommand.
      - `Description`: Description of your slashcommand.
      - `Options`: Array of options of your slashcommand. This part will be described later.
- `run`: Function which defines your command code.
- `runSlash`: Function which defines your slashcommand code.

It's recommended to use config to define your command data.

Example command config and it's usage:

```js
"~1": "Command Settings",
Command: {
    "~2": "Set Command Name",
    Name: 'command-name',
    "~3": "Command Aliases",
    Aliases: [
        "command-alias",
    ],
    "~4": "Set Command Description",
    Description: 'command-description',
    "~5": "Define Command usage",
    "~6": "THIS WON'T CHANGE ANYTHING. Only for translation purposes!",
    Usage: 'command-usage',
    "~7": "Set Command Type",
    Type: 'command-type',
    "~8": "Roles with which users can use this command",
    Permission: [
        "@everyone",
    ],
}
```

```js
CommandHandler.set({
    name: addonConfig.Command.Name,
    type: addonConfig.Command.Type,
    commandData: {
        Description: addonConfig.Command.Description
        Usage: addonConfig.Command.Usage,
        Aliases: addonConfig.Command.Aliases,
        Permission: addonConfig.Command.Permission,
        SlashCommand: {
            Enabled: true,
            Data: {
                Name: addonConfig.Command.Name,
                Description: addonConfig.Command.Description
                Options: [],
            },
        },
    },
    run: (bot, message, args, config) => {
        //Your code for slash command goes here
    },
    runSlash: (bot, interaction, options) => {
        //Your code for slash command goes here
    },
});
```

## SlashCommand Options

You can define options for your /slash command.
There are multiple options for it, which you can all use in /slash command.

Option Usage:

```js
{
Type: "option-type",
Name: "option-name",
Description: "option-description",
//Only for `channel` type
ChannelTypes: [],
Required: true,
Choices: []
},
```

Where

- `Type`: This is a option type. Avaliable types:
  - `sub command` - Subcommand
  - `sub command group` - Subcommand group
  - `string` - String(text) option
  - `integer` - Integer(number) option
  - `boolean` - Boolean(`true`/`false`) option
  - `user` - User option
  - `channel` - Channel option.
  - `role` - Role option
  - `mentionable` - Mentionable option
- `Name`: Name of your option.
- `Description`: Description of your option.
- `ChannelTypes`(Only for `channel` type): Array of allowed channel types. Avaliable types:
  - `text` - Text Channel
  - `voice` - Voice Channel
  - `category` - Channel category
  - `news` - News channel
  - `store` - Store channel
  - `news thread` - News thread channel
  - `public thread` - Public thread channel
  - `private thread` - Private thread channel
  - `stage channel` - Stage channel
- `Required`: Defines if option is required or not.
- `Choices`(Only for `string`/`integer`/`boolean` type): Array of avaliable choices.

### Slash Command Option Choices

In case of `string`/`integer`/`boolean` type, you can define choices for your option.
**Example option:**

```js
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

---

## Creating Event Listener

Since you know, how to create custom commands, it's time to create your first event listener.

To do it, follow the example code below:

```js
EventHandler.set("event-name", async (parameters) => {
    //Your code for event listener goes here
});
```

Where:
- `event-name`: Name of your event. You can find avaliable events list [here](https://discord.js.org/#/docs/discord.js/stable/class/Client).
- `parameters`: Object which defines your event parameters.

Example event listener:

```js
EventHandler.set("messageDelete", async (bot, message) => {
    message.channel.send(`Message \`${message.content}\` has been deleted!`);
});
```

---

**Congratulations!**

You have successfully completed addon writing guide.
Now, grab your keyboard, a good IDE and start making your own addons!

## Credits

- SimonB50 for writing the Addon Guide
- Zorino for creating all of the handlers
