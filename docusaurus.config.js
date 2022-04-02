module.exports = {
  title: "BrayanBot",
  tagline: "A modular Discord bot for your server management needs.",
  url: "https://brayanbot.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "brayanbotdev",
  projectName: "brayanbot.dev",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/brayanbot.png",
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
          to: "docs/getting-started",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        { to: "faq", label: "F.A.Q", position: "left" },
        { to: "support", label: "Support", position: "left" },
        {to: '/discord', label: 'Discord Server', position: 'right'},
        {
          href: "https://github.com/brayanbotdev/brayanbot",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        },
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
            }
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
              href: "https://github.com/brayanbotdev/brayanbot/releases",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/brayanbotdev/brayanbot",
            },
            {
              label: "Discord",
              href: "https://brayanbot.dev/discord",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BrayanBot. All rights reserved.`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/brayanbotdev/brayanbot.dev/edit/dev/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/brayanbotdev/brayanbot/edit/dev/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
