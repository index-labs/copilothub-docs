// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: '🤖️ Copilot Hub',
   tagline: 'Create and explore AI assistants in Copilot Hub',
   favicon: 'img/robot.ico',

   // Set the production url of your site here
   url: 'https://app.copilothub.ai',
   // Set the /<baseUrl>/ pathname under which your site is served
   // For GitHub pages deployment, it is often '/<projectName>/'
   baseUrl: '/',

   // GitHub pages deployment config.
   // If you aren't using GitHub pages, you don't need these.
   organizationName: 'index-labs',
   projectName: 'copilothub-docs',

   onBrokenLinks: 'throw',
   onBrokenMarkdownLinks: 'warn',

   // Even if you don't use internalization, you can use this field to set useful
   // metadata like html lang. For example, if your site is Chinese, you may want
   // to replace "en" with "zh-Hans".
   i18n: {
      defaultLocale: 'en',
      locales: ['en'],
   },

   presets: [
      [
         'classic',
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            docs: {
               sidebarPath: require.resolve('./sidebars.js'),
               editUrl: 'https://github.com/index-labs/copilothub-docs',
            },
            blog: {
               showReadingTime: true,
               editUrl: 'https://github.com/index-labs/copilothub-docs',
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
         // Replace with your project's social card
         image: 'img/docusaurus-social-card.jpg',
         navbar: {
            title: '🤖️ Copilot Hub',
            // logo: {
            //    alt: 'My Site Logo',
            //    src: 'img/logo.svg',
            // },
            items: [
               {
                  type: 'docSidebar',
                  sidebarId: 'tutorialSidebar',
                  position: 'left',
                  label: 'Docs',
               },
               //  { to: '/blog', label: 'Blog', position: 'left' },
               {
                  href: 'https://github.com/index-labs/copilothub-docs',
                  label: 'GitHub',
                  position: 'right',
               },
            ],
         },
         footer: {
            style: 'dark',
            links: [
               {
                  title: 'Docs',
                  items: [
                     {
                        label: 'Tutorial',
                        to: '/docs/intro',
                     },
                  ],
               },
               {
                  title: 'Community',
                  items: [
                     {
                        label: 'Twitter',
                        href: 'https://twitter.com/CopilotHubAI',
                     },
                     {
                        label: 'Telegram CN',
                        href: 'https://t.me/copilothub_cn',
                     },
                  ],
               },
               {
                  title: 'More',
                  items: [
                     //  {
                     //     label: 'Blog',
                     //     to: '/blog',
                     //  },
                     {
                        label: 'Feedback',
                        href: 'https://copilot-hub.canny.io/feedback',
                     },
                     // {
                     //    label: 'GitHub',
                     //    href: 'https://github.com/facebook/docusaurus',
                     // },
                  ],
               },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Copilot Hub, Inc. Built with Docusaurus.`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
         },
      }),
};

module.exports = config;
