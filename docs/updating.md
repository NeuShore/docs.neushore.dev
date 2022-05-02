---
sidebar_position: 1
desciption: Instructions on how to Update BrayanBot
sidebar_label: Update Guide
slug: updating
---

# Updating BrayanBot

Unfortunately, there is not yet an automated updater (nor is there one in our plans) and therefore you will need to update manually. We will do our best to provide you clear and concise instructions BrayanBots to keep your bot up to date, always. As always, feel free to contact us if you need further assistance in updating.

## Updating from v1.2.0 to v1.3.0
If you are using v1.1.0 or below, you will need to update one by one. We recommend starting fresh with v1.1.0 and then upgrading.
> Do note that some addons are bound to break on this update. Please contact the __addon developers__ if that is the case.

As always, start with the following:

- Backup your **`config.yml`**, **`lang.yml`** and **`commands.yml`**
- Backup your **`database.db`**
- Backup your **`Addons/`** and **`Addon_Configs/`** directories

Then, download the latest BrayanBot update from a platform of your choice ([MC-Market](https://www.mc-market.org/resources/23003/download), [GitHub](https://github.com/BrayanBotDev/BrayanBot/releases/latest/download/BrayanBot.zip) or [our website](https://brayanbot.dev/#download))

Extract the downloaded `.zip` file and drag and drop all files except **`example.config.yml`**, **`lang.yml`** and **`commands.yml`**

1. Extract the downloaded `.zip` file and drag and drop all files except **`example.config.yml`**, **`lang.yml`** and **`commands.yml`**
2. (Optional) Create a new file called `webserver.yml` in the folder called WebServer, located in bot's root directory. Populate it with the following:
```yml title="webserver.yml
// highlight-start
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
// highlight-end
```
If you have followed this step, do NOT remove the webserver section from your `config.yml`. This is for a later update.

3. Start your bot, you are done.


## Updating from v1.1.0 to v1.2.0

If you are using v1.1.0, we assume that you have started fresh as instructed in the version 1.1.0 announcement. As such, you should be able to update to v1.2.0 fairly quickly and easily.

As always, start with the following:

- Backup your **`config.yml`**, **`lang.yml`** and **`commands.yml`**
- Backup your **`database.db`**
- Backup your **`Addons/`** and **`Addon_Configs/`** directories

Then, download the latest BrayanBot update from a platform of your choice ([MC-Market](https://www.mc-market.org/resources/23003/download), [GitHub](https://github.com/BrayanBotDev/BrayanBot/releases/latest/download/BrayanBot.zip) or [our website](https://brayanbot.dev/#download))

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
