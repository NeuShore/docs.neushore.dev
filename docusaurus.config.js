/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BrayanBot",
  tagline: "A modular Discord bot for your server management needs.",
  url: "https://brayanbot.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "brayanbot",
  projectName: "brayanbot.dev",
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    algolia: {
      appId: "ZWKC6PVAM8",
      apiKey: "358f26e3c623aae3ab1f22b39ead3d63",
      indexName: "brayanbot",
      debug: false,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/logo_circle.png",
    navbar: {
      hideOnScroll: true,
      title: "BrayanBot",
      logo: {
        alt: "BrayanBot Logo",
        src: "img/brayanbot.png",
        srcDark: "img/brayanbot.png",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
          // dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
          dropdownActiveClassDisabled: true,
        },
        {
          to: "/docs",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "docs/faq", label: "F.A.Q", position: "left" },
        { to: "support", label: "Support", position: "left" },
        {
          href: "https://github.com/brayanbot/brayanbot",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
        { to: "/discord", className: "header-discord-link", position: "right" },
      ],
    },
    footer: {
      links: [
        {
          title: "BrayanBot",
          items: [
            {
              label: "FAQ",
              to: "docs/faq",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Docs",
              to: "docs/getting-started",
            },
            {
              label: "Releases",
              href: "https://github.com/NeuShore/Proxima/releases",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/NeuShore/Proxima",
            },
            {
              label: "Discord",
              href: "https://neushore.dev/discord",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NeuShore. All rights reserved.`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/NeuShore/docs.neushore.dev/edit/dev/",
          versions: {
            current: {
              label: "2.x",
              path: "2.x",
              banner: "none",
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/NeuShore/docs.neushore.dev/edit/dev/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "UA-132764481-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
}

module.exports = config
