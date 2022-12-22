---
sidebar_position: 1
description: Make BrayanBot truly yours
---

# Customizing

---

As mentioned plenty of times before, BrayanBot aims to be incredibly flexible when it comes to customizability.

## Customizing the Core

You are able to customize the basic, core features of BrayanBot like your Bot Token, Guild ID or the default Database Name[^1] through your [`config.yml`](/docs/Management/config) which you will find within the main directory of your bot.

## Customizing Embeds

`config.yml` also includes an **Embeds** section in which you may customize the color and the branding that will show up on those embeds.

```yaml
Embeds:
  Branding: "Brayan Bot"
  Color: "2f3136"
```

However, embed customization is done primarily in [`lang.yml`](/docs/Management/lang) where you can customize all embeds that are built into BrayanBot

For embeds added by Addons, you will need to customize said Addon's own config or language file.

See [First Party Addons](/docs/Developers/Addons/first-party), [Third Party Addons](/docs/Developers/Addons/third-party) and [Creating your Own Addons](/docs/Developers/Addons/creating-addons)
