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
    colorMode: {
        defaultMode: 'dark',
    },
    navbar: {
      title: 'Stone Soup Kitchen',
      logo: {
          alt: 'Stone Soup Kitchen Logo',
          src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://ko-fi.com/H2H43P9OI',
          position: 'right',
          className: 'header-kofi-link',
          'aria-label': 'Support me on ko-fi.com',
        },
        {
          href: 'https://github.com/StoneSoupKitchen',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
