---
sidebar_place: 1
---
# Creating Addons
---
If you are proficient in Javascript and willing to extend BrayanBot's functionality; you are in luck! BrayanBot comes with an extensive Addon handler, allowing you to easily interact with BrayanBot *without* having to edit the source code and breaking upstream. This guide will go over the basics of creating your own addon, but it is not a DiscordJS guide and will not subsitute one. You are advised to be proficient in Javascript, NodeJS and DiscordJS before creating an addon. But even if you are not, this may be a good starting point. 
## Developing Your Own Addons

You will likely want to know your way around the basic files of BrayanBot. [Utils.js](/), [AddonHandler.js](/), and [AddonExample.js](/) are good places to start looking.
### Creating a file

Start by creating your addon file. It (preferably) should contain your addon's name and the `.js` extension. (E.g. `ping-pong.js` or `funny-addon-name.js`)

...