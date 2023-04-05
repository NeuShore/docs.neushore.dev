---
sidebar_position: 2
description: Example config file
---

# Configuration File

---

```yaml title="config.yml"
Settings:
  Token: "YOUR-TOKEN-HERE"
  UseMentionPrefix: true
  Prefix:
    - .
  # Weather bots can use commands or not.
  IgnoreBots: false
  TagForInfo: true
  # Development options
  DevMode: false
  Verbose: false
  BackupFiles:
    - data/addon_configs/
    - data/database/
    - data/addons/
    - data/commands.yml
    - data/config.yml
    - data/lang.yml

Branding:
  Name: NeuShore
  Color: "#2f3136"
  Link: https://neushore.dev
  Logo: https://avatars.githubusercontent.com/u/99198112

ActivityStatus:
  # Available modes: online | idle | dnd | offline
  Mode: online
  Activities:
    - Type: PLAYING
      Text: discord.js
    - Type: STREAMING
      Text: NeuShore.dev
      URL: https://neushore.dev
    - Type: LISTENING
      Text: for help
    - Type: WATCHING
      Text: "{guild-members} members."

```
