/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: `Cities in Nature`,
  tagline: `Learn how to use InVEST model to quantify ecosystem services`,
  url: 'https://xiaoganghe.github.io',
  baseUrl: '/InVEST-Cities-in-Nature/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'XiaogangHE', // Usually your GitHub org/user name.
  projectName: 'InVEST tutorials/showcases for NUS Cities in Nature module', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
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
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/XiaogangHe/InVEST-Cities-in-Nature',
          label: 'GitHub',
          position: 'right',
        },
        { to: '/roadmap', label: 'Roadmap', position: 'right' },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Projects',
        },
        { to: '/blog', label: 'Blogs', position: 'left' },
        {
          to: '/community/support',
          label: 'Tutorial',
          position: 'left',
          activeBaseRegex: '/community/',
        },
        {
          type: 'dropdown',
          label: 'Know More',
          position: 'left',
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
          title: 'Docs',
          items: [
            {
              label: 'FLINT',
              href: 'https://moja.global/flint/',
            },
            {
              label: 'FLINT UI',
              href: 'https://docs.moja.global/projects/flint-ui/en/latest/',
            },
            {
              label: 'FLINT Reporting Tool',
              href: 'https://docs.moja.global/projects/flint-reporting/en/latest/',
            },
            {
              label: 'Taswira',
              href: 'https://github.com/moja-global/GCBM.Visualisation_Tool',
            },
            {
              label: 'FLINT JSON Editor',
              href: 'https://github.com/moja-global/FLINT.JSON_Interface',
            },
            {
              label: 'FLINT Cloud',
              href: 'https://docs.moja.global/projects/flintcloud/en/latest',
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
              label: 'Mentorship',
              href: '/community/mentorship',
            },
            {
              label: 'Initiatives',
              href: '/initiatives',
            },
            {
              label: 'Roadmap',
              href: '/roadmap',
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
              label: 'About moja global',
              href: '/docs/about-moja-global',
            },
            {
              label: 'Governance model',
              href: '/community/governance',
            },
            {
              label: 'Contributing guidelines',
              href: '/community/contributing',
            },
            {
              label: 'Workiing Groups',
              href: '/community/working-groups/doc-wg',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              html: `
              <a href= 'https://twitter.com/mojaglobal' target="_blank">
              <img class="socials" src="/img/twitter.png" alt="twitter icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://www.youtube.com/channel/UCfQUrrNP1Xf-Fv4c8uHYXhQ' target="_blank">
              <img class="socials" src="/img/youtube.png" alt="youtube icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://github.com/moja-global' target="_blank">
              <img class="socials" src="/img/github.png" alt="github icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://www.linkedin.com/company/moja-global/' target="_blank">
              <img class="socials" src="/img/linkedin.png" alt="linkedin icon" />
              </a>
              `,
            },
            {
              html: `
              <a href= 'https://mojaglobal.slack.com/' target="_blank">
              <img class="socials" src="/img/slack.png" alt="slack icon" />
              </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} moja global.`,
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
