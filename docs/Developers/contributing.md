---
sidebar_position: 1
description: Learn how to contribute to BrayanBot, the right way
---

# Contibuting

---
First and foremost; thank you for using BrayanBot. Regardless of whether or not you are a developer, you using BrayanBot means something to us. We thank you for your trust and continuous support.

## Contibuting to BrayanBot
If you are a developer who is using BrayanBot, consider contributing! Be it in the form of an addon or simply improvements to the codebase; we will appreciate any kinds of contributions coming our way.

If you are interested in creating your own addons, please take a look at [Creating your Own Addons](/docs/Developers/Addons/creating-addons) and if you would prefer using the template to create an entirely different bot; see [Using the Template](/docs/Developers/template).

For direct contributions to the codebase, please take a look at [Contribution Guidelines](/)

If neither of those interest you, we also highly appreciate all Bug Reports and Feature requests over [Github Issues](https://github.com/BrayanBot/BrayanBot/issues).

### How to make code Changes

1. Clone the **dev** branch

*As we do not take pull requests to the main branch, this step is mandatory*

```bash
git clone -b dev https://github.com/BrayanBot/BrayanBot.git
```

2. Make your changes

3. Track your changes using **git**

```bash
git add <fileName>
```

4. Commit your changes with a **meaningful message**

```bash
git commit -m "<Your commit message here>"
```

5. Push your changes to the **dev** branch

```bash
git push origin dev
```

And that is all! This will make push your changes to **git** and open a **Pull Request** on **Github**. After that, we will review your Pull Request and either merge into the **dev branch** or if your Pull Request is denied, reasons to why it is denied and how to improve the Pull Request next time you would like to make a PR again.
