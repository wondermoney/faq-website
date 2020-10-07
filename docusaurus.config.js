module.exports = {
  title: "Wonder.money - FAQ",
  tagline: "Frequently Asked Questions & Outras Dúvidas",
  url: "https://faq.wonder.money",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "Wonder.money", // Usually your GitHub org/user name.
  projectName: "FAQ", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Wonder.money - FAQ",
      logo: {
        alt: "Wonder.money",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "release-notes",
          label: "Release Notes (Novidades)",
          position: "left",
        },
        {
          href: "https://wonder.money",
          label: "Home",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "Outras Informações",
          items: [
            {
              label: "release-notes",
              to: "release-notes",
            },
            {
              label: "Blog",
              href: "https://blog.wonder.money",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wonder.money - Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          path: "blog",
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
          routeBasePath: "release-notes",
          include: ["*.md", "*.mdx"],
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
