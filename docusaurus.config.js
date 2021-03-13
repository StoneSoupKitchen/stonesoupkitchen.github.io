/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Stone Soup Kitchen',
  tagline: 'Open source software for like-minded people.',
  url: 'https://stonesoup.kitchen',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'StoneSoupKitchen',
  projectName: 'www',
  themeConfig: {
    navbar: {
      title: 'Stone Soup Kitchen',
      items: [
        {
          href: 'https://github.com/StoneSoupKitchen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Joshua Ford.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/StoneSoupKitchen/www/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/StoneSoupKitchen/www/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
