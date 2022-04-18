---
sidebar_position: 1
desciption: Instructions on how to Update BrayanBot
sidebar_label: Update Guide
slug: updating
---

# Updating BrayanBot

Unfortunately, there is not yet an automated updater (nor is there one in our plans) and therefore you will need to update manually. We will do our best to provide you clear and concise instructions BrayanBots to keep your bot up to date, always. As always, feel free to contact us if you need further assistance in updating.

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
