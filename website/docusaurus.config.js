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
      indexName: 'moja',
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
        alt: 'moja global Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-light.png',
      },
      items: [
        {
          href: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Studios',
        },
        {
          to: '/community/support',
          label: 'Tutorials',
          position: 'left',
          activeBaseRegex: '/community/',
        },
        { to: '/blog', label: 'Blogs', position: 'left' },
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
      ],
    },
    footer: {
      logo: {
        alt: 'moja global light logo',
        src: '/img/logo-light.png',
        href: 'https://moja.global',
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
          title: 'Community',
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
              label: 'Initiatives',
              href: '/initiatives',
            },
            {
              label: 'Case Studies',
              href: '/case-studies/introduction',
            },
            {
              label: 'FAQs',
              href: 'https://docs.moja.global/en/latest/faq.html',
            },
          ],
        },
        {
          title: 'Getting Started',
          items: [
            {
              label: 'About InVEST',
              href: '/docs/about-moja-global',
            },
            {
              label: 'Model Overview',
              href: '/community/governance',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              html: `
              <a href= 'https://www.youtube.com/watch?v=kGau-gNEzFM&t=1s' target="_blank">
              <img class="socials" src="img/youtube.png" alt="youtube icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature' target="_blank">
              <img class="socials" src="img/github.png" alt="github icon" />
              </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cities in Nature.`,
    },
    image: 'https://community.moja.global/img/logo.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://community.moja.global/img/logo.png',
      },
      { name: 'twitter:title', content: 'Moja Global Community' },
      {
        name: 'twitter:description',
        content:
          'moja global is a not for profit, collaborative project that brings together a community of experts to develop open-source software that allows users to accurately and affordably estimate greenhouse gas emissions and removals from the AFOLU sector. The project’s members aim to support the widest possible use of credible emissions estimation software.',
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
          editUrl: 'https://github.com/moja-global/community-website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/moja-global/community-website/edit/main/website/blog/',
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
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-introduction',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebarsTutorial.js'),
      },
    ],
  ],
};
