/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: `Cities in Nature`,
  tagline: `Learn how to use InVEST model to quantify ecosystem services`,
  url: 'https://xiaoganghe.github.io',
  baseUrl: '/InVEST-Cities-in-Nature/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'XiaogangHe', // Usually your GitHub org/user name.
  projectName: 'InVEST tutorials/showcases for NUS Cities in Nature module', // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: '2227dd7224b78071d191aff9cbf1a6c5',
      indexName: 'invest',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    announcementBar: {
      id: 'announcementBar',
      backgroundColor: '#74e8a3',
      isCloseable: true,
      content:
        'Check the module website <a target="_blank" rel="noopener noreferrer" href="https://xiaoganghe.github.io/NUS-CDE2503/">NUS CDE2503: 🌇 Cities in Nature 🌴</a> for latest announcements!',
    },
    colorMode: {
      defaultMode: 'dark',
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '💡',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'InVEST',
      hideOnScroll: true,
      logo: {
        alt: 'InVEST Cities in Nature Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-light.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/studio/overview',
          label: 'Studios',
          position: 'left',
          activeBaseRegex: '/studio/',
        },
        {
          to: '/tutorial/support',
          label: 'Tutorials',
          position: 'left',
          activeBaseRegex: '/tutorial/',
        },
        { to: '/blog/', label: 'Blogs', position: 'right', activeBaseRegex: '/blog/' },
        {
          type: 'dropdown',
          label: 'Know More',
          position: 'right',
          items: [
            {
              label: 'Initiatives',
              href: '/initiatives',
            },
            {
              label: 'Case Studies',
              href: '/case-studies/introduction',
            },
          ],
        },
        {
          href: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'InVEST Cities in Nature light logo',
        src: '/img/logo-light.png',
        href: 'https://xiaoganghe.github.io/InVEST-Cities-in-Nature/',
      },
      style: 'light',
      links: [
        {
          title: 'InVEST Models',
          items: [
            {
              label: 'Urban Flooding',
              href: 'https://moja.global/flint/',
            },
            {
              label: 'Carbon Sequestration',
              href: 'https://docs.moja.global/projects/flint-ui/en/latest/',
            },
            {
              label: 'Urban Cooling',
              href: 'https://docs.moja.global/projects/flint-reporting/en/latest/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Projects',
              href: '/docs',
            },
            {
              label: 'Blogs',
              href: '/blog',
            },
            {
              label: 'FAQs',
              href: 'https://docs.moja.global/en/latest/faq.html',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              html: `
              <a href= 'https://www.youtube.com/watch?v=kGau-gNEzFM&t=1s' target="_blank">
              <img class="socials" src="https://xiaoganghe.github.io/InVEST-Cities-in-Nature/img/youtube.png" alt="youtube icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://twitter.com/Xiaogang_He' target="_blank">
              <img class="socials" src="https://xiaoganghe.github.io/InVEST-Cities-in-Nature/img/twitter.png" alt="twitter icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature' target="_blank">
              <img class="socials" src="https://xiaoganghe.github.io/InVEST-Cities-in-Nature/img/github.png" alt="github icon" />
              </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xiaogang HE`,
    },
    image: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature/img/logo.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature/img/logo.png',
      },
      { name: 'twitter:title', content: 'Cities in Nature' },
      {
        name: 'twitter:description',
        content:
          'Tutorial website for NUS Cities in Nature module.',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-195907568-1',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebarsTutorial.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'studio',
        path: 'studio',
        routeBasePath: 'studio',
        sidebarPath: require.resolve('./sidebarsStudio.js'),
        showLastUpdateTime: true,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'case-studies',
        path: 'case-studies',
        routeBasePath: 'case-studies',
        sidebarPath: require.resolve('./sidebarsCaseStudies.js'),
      },
    ],
  ],
};
