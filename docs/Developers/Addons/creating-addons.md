---
sidebar_place: 1
description: Learn how to create your own addons
title: Creating Addons
---
# BrayanBot Addon Development

If you are proficient in Javascript and willing to extend BrayanBot's functionality; you are in luck! BrayanBot comes with an extensive Addon handler, allowing you to easily interact with BrayanBot without having to edit the source code and breaking upstream. This guide will go over the basics of creating your own addon, but it is not a [Discord.JS guide](https://discord.js.org/#/docs/) and will not subsitute one. You are advised to be proficient in JavaScript, Node.JS and Discord.JS before creating an addon. But even if you are not, this may be a good starting point.


You will likely want to know your way around the basic files of BrayanBot. [Utils.js](https://github.com/BrayanbotDev/BrayanBot/blob/dev/Modules/Utils.js), [AddonHandler.js](https://github.com/BrayanbotDev/BrayanBot/blob/dev/Modules/Handlers/AddonHandler.js), and [AddonTemplate.js](https://github.com/BrayanbotDev/BrayanBot/blob/dev/AddonTemplate.js) are good places to start looking.


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
3. Knowlege about using internet

After you confirm that you meet all the requirements you can start developing your first addon.


## Creating a new addon file


1. Open `Addons` Folder. (If doesn't exist, Generate by Starting the bot or manually creating it)
    - Here all addons will be placed, any addons outside this folder won't be loaded.
2. Create your file with extension `.js`. Example: `AddonName.js`
    - This file will be your addon in which you will write your code.
    - Addon is required to have `.js` as extension to work.

## Addon Template

Now, in your addon file copy and paste the code provided below to mark your file as an addon
```js
const Utils = require("../Modules/Utils");
const { Command } = require("../Modules/Handlers/CommandHandler");
const { EventListner, EventEmitter } = require("../Modules/Handlers/EventHandler");

module.exports = {
    dependencies: [],
    priority: 1,
    name: "addon-name",
    version: "1.0.0",
    log: true,
    author: {
        name: "developer-name",
        color: "hex-color-code",
    },
    customConfigs: {},
};

module.exports.run = async (bot, addonConfig) => {
    // Your code goes here
}
```

### Elobrating Addon Template

**Modules Required**
- `Utils`: Few useful functions for developers.
- `Command`: Used for Creating Custom Commands.
- `EventListner`: Used to listen for events emited.
- `EventEmitter`: Used to emit events.

**Object Exported**
- `name`: This is the name of your addon.
- `version`: Version of the addon.
- `dependencies`: Array of node_module names to be installed.
- `customConfigs`: Object defines custom configs for addon. 
- `log`: This is a value which defines what information will be logged in console on addon start.
    - `String` - String used to log with Info prefix
        - `_nonInfo` - If String starts with `_nonInfo` Info prefix will be removed when logging.
    - `Boolean`
        - `true` - Bot will send Default addon loaded message.
        - `false` - Addon loaded message won't be sent
    - `Object` - This will be used if `author.name` is specified. (`author.color` is optional.) 
    - `Function` - Bot will execute this function.
- `author`: This defines author prefix for addon when logging `addon loaded`. (This is Required for log.)
    - `String`: Addon Developer's Name (Default Hex Color `#007bff` will be used)
    - `Object`
        - `name`: Addon Developer's Name.
        - `color`: Your selected hex color(will be used in default addon start log).


## Creating custom configs

As you can see, there is `customConfigs` option in your addon `module.exports`.
You can use it to define custom configs for your addon.
> These configs are generated under `Addon_Configs/{addon-name}` Folder.

### CustomConfig construction:

`customConfigs` takes Object Input as displayed below
```js
configName: {
    type: "yml",
    data: {},
},
```

In more details:

- `type`: This is a extension of your config. (JSON & YAML are officially Supported)
- `data`: This object defines your config content.

Example Configs:

```json
{
    config: {
        type: "yml",
        path: `./Addon_Configs/{addon-name}/config.yml`,
        data: {
            Enabled: true,
            Permission: "@everyone",
        },
    },
    lang: {
        type: "yml",
        path: `./Addon_Configs/{addon-name}/Lang.json`,
        data: {
            Message: {
                Content: "👋 Hello from Lang",
                Embeds: [
                    {
                        Title: "Hello!"
                    }
                ]
            },
        },
    },
}
```

## Coding your Addon

You will write your addon code under `run` function. 
- `bot`: This parameter is defined as [Discord.Client](https://discord.js.org/#/docs/discord.js/stable/class/Client) (This client object can be not logged into discord via token.)
- `customConfig`: This parameter is defined as your customConfig.
    - `customConfig[configName]` to access file's content
```js
module.exports.run = async (bot, customConfig) => {
    // Your code goes here
}
```

## Creating Custom Commands

BrayanBot Command Handler is very advanced and allows you to define multiple things, such as command aliases, permissions, allowed channels and more.
Using the config handler, you can create configurable values.

**Use below code to create you custom command:**

```js
const command = new Command().setType("command-type").setCommandData({
    Name: "command-name",
    Description: "command-description",
    Usage: "command-usage", // Without Prefix
    Aliases: ["command-alias", "command-alias2"],
    Permission: ["Role", "User-id/tag/username"],
    SlashCommand: {
        Enabled: true,
        Data: {
            Name: "command-name",
            Description: "command-description",
            Options: []
        }
    }
}).setRun(async (bot, message, args) => {
    // Code for Legacy Commands
}).setRunSlash(async (bot, interaction, options) => {
    // Code for Slash Commands
});
```

- `Name`: Name of your command.
- `Description`: Description of your command.
- `Usage`: Usage of your command.
- `Aliases`: Array of aliases of your command.
- `Permission`: Array of permissions of your command. You can use Roles and Users or `@everyone` to set it available for everyone.
- `SlashCommand`: Object which defines your Slash Command data.
    - `Enabled`: Value which defines Slash Command is enabled or not.
    - `Data`: Object which defines your Slash Command data.
        - `Name`: Name of your Slash Command.
        - `Description`: Description of your Slash Command.
        - `Options`: Array of options of your Slash Command. This part will be described later.

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
- `Choices`(Only for `string`/`integer`/`boolean` type): Array of avaliable choices.

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
new EventListner("event-name", async (bot, eventParameters) => {
    // Your code for event listener goes here
})
```

Where:
- `event-name`: Name of your event. You can find avaliable events list [here](https://discord.js.org/#/docs/discord.js/stable/class/Client).
- `parameters`: Object which defines your event parameters.

Example Event Listener:

```js
new EventListner("messageCreate", async (bot, message) => {
    console.log(message.id, "| New Message:", message?.content);
})
```

**Congratulations!**

You have successfully completed addon writing guide.
Now, grab your keyboard, a good IDE and start making your own addons!

## Credits

- Zorino & SimonB50 for writing the Addon Guide
- Zorino for creating all of the handlers
