module.exports = {
  title: 'Redux Toolkit 中文网',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Redux Toolkit 中文网',
      logo: {
        alt: 'Redux Toolkit Logo',
        src: 'img/redux.svg',
      },
      links: [
        {
          label: 'Getting Started',
          to: 'docs/introduction/getting-started',
          position: 'left',
        },
        {
          label: 'Tutorials',
          to: 'docs/tutorials/tutorials-overview',
          position: 'left',
        },
        {
          label: 'Usage Guide',
          to: 'docs/usage/usage-guide',
          position: 'left',
        },
        {
          label: 'API Reference',
          to: 'docs/api/configureStore',
          position: 'left',
        },
        {
          href: 'https://github.com/Chinvaejay/redux-toolkit-cn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux_white.svg',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/introduction/getting-started',
            },
            {
              label: 'Tutorials',
              to: 'docs/tutorials/tutorials-overview',
            },
            {
              label: 'Usage Guide',
              to: 'docs/usage/usage-guide',
            },
            {
              label: 'API Reference',
              to: 'docs/api/configureStore',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/redux',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/0ZcbPKXt5bZ6au5t',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/reduxjs/redux-toolkit',
            },
            {
              html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                    alt="Deploys by Netlify"
                  />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © 2015–${new Date().getFullYear()} Dan Abramov and the Redux documentation authors.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
