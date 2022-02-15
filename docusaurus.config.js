/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Brayan Bot',
  tagline: 'A Discord Bot that just works',
  url: 'https://brayanbot.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BrayanBotDev', // Usually your GitHub org/user name.
  projectName: 'BrayanBot', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Brayan Bot',
        logo: {
          alt: 'Logo',
          src: 'img/logo_circle.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'features',
            position: 'left',
            label: 'Documentation',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {to: '/discord', label: 'Discord', position: 'right'},
          {
            href: 'https://github.com/BrayanBotDev/brayanbot',
            label: 'GitHub',
            position: 'right',
          }, // or position: 'right'
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Support',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/setup/dependencies',
          //     },
          //     {
          //       label: 'Discord',
          //       to: '/docs/setup/dependencies',
          //     },
          //     {
          //       label: 'Github',
          //       to: '/github',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BrayanBot Developers.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
        defaultLanguage: 'bash',
      },
    }),
};

module.exports = config;
