// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Développement et Intégration',
  tagline: 'MMI S3 - séances animées par Estelle',
  favicon: 'img/logo-website.png',

  // Set the production url of your site here
  url: 'https://estellethvn.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc-dvpt-et-integration/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EstelleThvn', // Usually your GitHub org/user name.
  projectName: 'doc-dvpt-et-integration', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Accueil',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo-website.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Cours',
          },
          {
            to: '/seances',
            label: 'Séances',
            position: 'left',
          },
          {
            to: '/resources',
            label: 'Ressources',
            position: 'left',
          },
          // {
          //   href: 'https://github.com/EstelleThvn',
          //   label: 'Repo GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Notes de cours',
                to: '/docs/intro',
              },
              {
                label: 'Séances',
                to: '/seances',
              },
              {
                label: 'Ressources',
                to: '/resources',
              },
            ],
          },
          {
            title: 'Contacte-moi',
            items: [
              {
                html: 'Discord : estellethvn',
              },
              {
                label: 'Email',
                href: 'mailto:estellethouvenin.contact@gmail.com',
              },
            ],
          },
          {
            title: 'Code source',
            items: [
              {
                label: 'Repo GitHub',
                href: 'https://github.com/EstelleThvn/doc-dvpt-et-integration',
              }
            ],
          }
        ],
        copyright: `Documentation rédigée par Estelle Thouvenin.</br>Copyright © ${new Date().getFullYear()}. Construit avec <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. Illustrations par Getillustrations <a href="https://www.getillustrations.com/illustration-pack/halftone-illustrations" target="_blank">Halftone illustrations</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
