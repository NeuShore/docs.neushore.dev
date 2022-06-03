---
sidebar_position: 1
desciption: Instructions on how to Update BrayanBot
sidebar_label: Update Guide
slug: updating
---

# Updating BrayanBot

Unfortunately, there is not yet an automated updater (nor is there one in our plans) and therefore you will need to update manually. We will do our best to provide you clear and concise instructions BrayanBots to keep your bot up to date, always. As always, feel free to contact us if you need further assistance in updating.

## Updating from v1.3.0 to v1.4.0

If you are using v1.1.0 or below, you will need to update one by one. We recommend starting fresh with v1.1.0 and then upgrading.
> Do note that some addons are bound to break on this update. Please contact the **addon developers** if that is the case.

As always, start with the following:

- Backup your **`config.yml`**, **`lang.yml`** and **`commands.yml`**
- Backup your **`database.db`**
- Backup your **`Addons/`** and **`Addon_Configs/`** directories

Delete everything except the following files and directories:

- `config.yml`, `lang.yml` and `commands.yml`
- `database.db`
- `Addons/` and `Addon_Configs/` directories

Then, download the latest BrayanBot update from a platform of your choice ([MC-Market](https://www.mc-market.org/resources/23003/download), [GitHub](https://github.com/BrayanBot/BrayanBot/releases/latest/download/BrayanBot.zip) or [our website](https://brayanbot.dev/#download))

Extract the downloaded `.zip` file and drag and drop all files except **`example.config.yml`**, **`lang.yml`** and **`commands.yml`**

1. Open `config.yml` and remove the WebServer section starting at line 15. Like so:

```diff title="config.yml"
-WebServer: 
-  Enabled: true
-  Port: 80
-  Favicon: "favicon.ico"
-  EndPoints:
-    - Type: "URL"
-      EndPoint: "/"
-      URL: "https://brayanbot.dev/"
-
-    - Type: "URL"
-      EndPoint: "/discord"
-      URL: "https://brayanbot.dev/discord"
-
-    - Type: "Page"
-      EndPoint: "/view/page"
-      File: "assets/viewThisPage.html"
-
-    - Type: "File"
-      EndPoint: "/download"
-      File: "assets/download.txt"
-  Ratelimit: 
-    # It's recommended to keep this enabled.
-    Enabled: true
-    # Max Requests can be made per 1 minute
-    MaxRequests: 1
-    # IPs included will bypass Rate Limiting
-    BypassIPs:
-      - "127.0.0.1" # http://localhost/ | http://127.0.0.1/
```

If you have made any changes to your Webserver configuration: you can instead copy paste this section to `/WebServer/webserver.yml`. Like so:
Remember to be careful with yml syntax while copying and pasting.

```diff title="webserver.yml"
Enabled: true
Port: 8080
Favicon: "favicon.ico"
EndPoints:
  - Type: "URL"
    EndPoint: "/"
    URL: "https://brayanbot.dev/"

  - Type: "URL"
    EndPoint: "/changedValue"
    URL: "https://brayanbot.dev/thisValueWasChanged"

  - Type: "Page"
    EndPoint: "/view/page"
    File: "assets/viewThisPage.html"

  - Type: "File"
    EndPoint: "/download"
    File: "assets/download.txt"
Ratelimit: 
  # It's recommended to keep this enabled.
  Enabled: true
  # Max Requests can be made per 1 minute
  MaxRequests: 1
  # IPs included will bypass Rate Limiting
  BypassIPs:
    - "127.0.0.1" # http://localhost/ | http://127.0.0.1/ 
```

2. Add the new comments and the new config value to `config.yml`. Starting from line 5.

```diff title="config.yml"
+ # Enabling DevMode will reset all addon configurations.
+ DevMode: false 
+ # Verbose mode enables additional debug messages to be shown on the startup log.
+ Verbose: true 
```

3. Add the new StatusHandler section to `config.yml`. Starting from line 18.

```diff title="config.yml"
+Status:
+  Status: "online"
+  Afk: false
+  Activities:
+    - Text: "discord.js"
+      Type: "PLAYING"
+    - Text: "BrayanBot.dev"
+      Type: "STREAMING"
+      URL: "https://brayanbot.dev"
+    - Text: "for help"
+      Type: "LISTENING"
+    - Text: "{guild-members} members"
+      Type: "WATCHING"
+  ActivitiesSettings:
+    Order: "normal"
+    Interval: 3
```

4. Edit your `lang.yml` to add the new language changes and fixes. This should start around line 40, depending on changes you might have made to your `lang.yml` file.

Around line 40:

```diff title="lang.yml"
Description: |-
          • **Name**: {guild-name}
          • **Guild ID**: {guild-id}
-         • **Created-At**: {guild-createdate} 
+         • **Created-At**: {guild-createdate}
```

And around line 46:

```diff title="lang.yml"
        Fields:
          - Name: "\U0001F451 Server Owner"
            Value: |-
              • **Account**: {guild-owner-mention} | {guild-owner-tag}
              • **ID**: {guild-owner-id}
-             • **Created At**: {guild-owner-createdate}
+             • **Created At**: {guild-owner-createdate}
```

Then around line 76, add the following for the `UserInfo` command.

```diff title="lang.yml"
+  UserInfo:
+    Embeds:
+      - Title: "\U0001f464 User Info - {user-tag}"
+        Description: |-
+          • **Account**: {user-mention} | {user-tag}
+          • **ID**: {user-id}
+          • **Created at**: {user-createdate} | {user-for}
+          • **Avatar**: [Link]({user-pfp})
+        Fields:
+          - Name: "\U0001F6E1 User Badges"
+            Value: |-
+              • **Badges**: {user-badges}
+          - Name: "\U0001F4AD Member Info"
+            Value: |-
+              • **Joined at**: {member-joindate} | {member-for}
+              • **Displayname**: {member-displayname}
+              • **Server avatar**: [Link]({member-pfp})
+          - Name: "\U0001F6A9 Member Roles"
+            Value: |-
+              • **Roles**: {member-roles}
+        Thumbnail: '{user-pfp}'
+        Timestamp: true
+        Footer: '{user-tag}'
+        FooterIcon: '{user-pfp}'
```

Around line 109 make the following change:
```diff title="lang.yml"
Presets:
  NoPermission:
    Embeds:
-      - Title: Unable to run command
+      - Title: Unable to execute command
```

Finally, around line 159, add the following section for command cooldowns:
```diff title="lang.yml"
+  OnCooldown:
+    Embeds:
+      - Title: Unable to execute command
+        Description: "> You are currently on cooldown for this command. You can use this command again in **{cooldown}**."
+        Footer: '{user-tag}'
+        FooterIcon: '{user-pfp}'
+        Timestamp: true
+        Color: '#ff0800'
```

5. Edit your `commands.yml` to add the following:

Around line 2, add the IgnoredCooldown section:

```diff title="commands.yml"
DisabledCommands: []

+IgnoredCooldown:
+  Users:
+    - "Zorino#1110"
+  Roles:
+    - "Special"

General:
  Help:
    Description: "Displays all Bot Commands"
```

Around line 70, add the following for the `UserInfo` command:
```diff title="commands.yml"
+UserInfo:
+    Description: "View User's Information"
+    Usage: "userinfo"
+    Aliases:
+      - "memberinfo"
+    Permission:
+      - "@everyone"
+    AllowedChannels: false
+    DeleteCommand: false
+    Cooldown: false
+    SlashCommand:
+      Enabled: true
+      Data:
+        Name: userinfo
+        Description: "View User's Information"
+        Options:
+          - Type: "User"
+            Name: "target"
+            Description: "User Mention"
```

Finally, add the cooldown setting under each command in `commands.yml`, like so:

```diff title="commands.yml"
Ping:
    Description: "Displays Bot Pings"
    Usage: "ping"
    Aliases: []
    Permission:
      - "@everyone"
    AllowedChannels: false
    DeleteCommand: false
+    Cooldown: false
    SlashCommand:
      Enabled: true
      Data:
        Name: ping
        Description: "Displays Bot Pings"
```

6. Install required node modules and start your bot. You have successfully updated to v1.4.0!

## Updating from v1.2.0 to v1.3.0

If you are using v1.1.0 or below, you will need to update one by one. We recommend starting fresh with v1.1.0 and then upgrading.
> Do note that some addons are bound to break on this update. Please contact the **addon developers** if that is the case.

As always, start with the following:

- Backup your **`config.yml`**, **`lang.yml`** and **`commands.yml`**
- Backup your **`database.db`**
- Backup your **`Addons/`** and **`Addon_Configs/`** directories

Then, download the latest BrayanBot update from a platform of your choice ([MC-Market](https://www.mc-market.org/resources/23003/download), [GitHub](https://github.com/BrayanBot/BrayanBot/releases/latest/download/BrayanBot.zip) or [our website](https://brayanbot.dev/#download))

Extract the downloaded `.zip` file and drag and drop all files except **`example.config.yml`**, **`lang.yml`** and **`commands.yml`**

1. Extract the downloaded `.zip` file and drag and drop all files except **`example.config.yml`**, **`lang.yml`** and **`commands.yml`**
2. (Optional) Create a new file called `webserver.yml` in the folder called WebServer, located in bot's root directory. Populate it with the following:
```yml title="/WebServer/webserver.yml"
Enabled: true
Port: 80
Favicon: "favicon.ico"
EndPoints:
  - Type: "URL"
    EndPoint: "/"
    URL: "https://brayanbot.dev/"

  - Type: "URL"
    EndPoint: "/discord"
    URL: "https://brayanbot.dev/discord"

  - Type: "Page"
    EndPoint: "/view/page"
    File: "assets/viewThisPage.html"
      
  - Type: "File"
    EndPoint: "/download"
    File: "assets/download.txt"
Ratelimit: 
  # It's recommended to keep this enabled.
  Enabled: true
  # Max Requests can be made per 1 minute
  MaxRequests: 1
  # IPs included will bypass Rate Limiting
  BypassIPs:
    - "127.0.0.1" # http://localhost/ | http://127.0.0.1/
```
If you have followed this step, do NOT remove the webserver section from your `config.yml`. This is for a later update.

3. Start your bot, you are done.


## Updating from v1.1.0 to v1.2.0

If you are using v1.1.0, we assume that you have started fresh as instructed in the version 1.1.0 announcement. As such, you should be able to update to v1.2.0 fairly quickly and easily.

As always, start with the following:

- Backup your **`config.yml`**, **`lang.yml`** and **`commands.yml`**
- Backup your **`database.db`**
- Backup your **`Addons/`** and **`Addon_Configs/`** directories

Then, download the latest BrayanBot update from a platform of your choice ([MC-Market](https://www.mc-market.org/resources/23003/download), [GitHub](https://github.com/BrayanBot/BrayanBot/releases/latest/download/BrayanBot.zip) or [our website](https://brayanbot.dev/#download))

Extract the downloaded `.zip` file and drag and drop all files except **`example.config.yml`**, **`lang.yml`** and **`commands.yml`**

Version 1.2.0 introduces a new `eval` command, so you will need to manually edit your **`commands.yml`** and **`lang.yml`**
Instructions provided below:

1. Add the new **admin** section as well as the necessary lines for the **eval command** into your **`commands.yml`**, starting with **line 78**

```
Admin:
  Eval:
    Description: "Runs JavaScript code"
    Usage: "eval <code>"
    Aliases: []
    Permission:
      - "Zorino#1110"
    AllowedChannels: false
    SlashCommand:
      Enabled: true
      Data:
        Name: eval
        Description: "Runs JavaScript code"
        Options:
          - Type: "String"
            Name: "code"
            Description: "JavaScript code"
            Required: true
```

This is how your **`commands.yml`** should look like after you update it.

```diff title="commands.yml"
          - Type: "User"
            Name: "target"
            Name: "target"
            Description: "User Mention"
            Description: "User Mention"
// highlight-start
+ Admin:
+  Eval:
+    Description: "Runs JavaScript code"
+    Usage: "eval <code>"
+    Aliases: []
+    Permission:
+      - "Zorino#1110"
+    AllowedChannels: false
+    SlashCommand:
+      Enabled: true
+      Data:
+        Name: eval
+        Description: "Runs JavaScript code"
+        Options:
+          - Type: "String"
+            Name: "code"
+            Description: "JavaScript code"
+            Required: true
// highlight-end
```

1. Add the new **admin** section as well as the necessary lines for the **eval command** into your **`commands.yml`**, starting with **line 89**

````
Admin:
  Eval:
    Embeds:
      - Title: '{bot-username} Eval'
        Fields:
          - Name: ⬇️ | Input
            Value: |-
              ```js
              {input}```
          - Name: ⬆️ | Output
            Value: |-
              ```js
              {output}```
        Footer: '{user-tag}'
        FooterIcon: '{user-pfp}'
        Timestamp: true
````

This is how your **`lang.yml`** should look like after you update it.

````diff title="lang.yml"
         Style: Link
          Label: Avatar
          Link: '{link}'
// highlight-start
+ Admin:
+  Eval:
+    Embeds:
+      - Title: '{bot-username} Eval'
+        Fields:
+          - Name: ⬇️ | Input
+            Value: |-
+              ```js
+              {input}```
+          - Name: ⬆️ | Output
+            Value: |-
+              ```js
+              {output}```
+        Footer: '{user-tag}'
+        FooterIcon: '{user-pfp}'
+        Timestamp: true
// highlight-end
Presets:
  NoPermission:
````

And that is all for the files that need to be updated manually!
