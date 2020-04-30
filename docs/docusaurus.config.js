module.exports = {
  title: "K8s Workshop",
  tagline: "Introduction to the basics of Kubernetes for Developers",
  url: "https://stackworx.github.io/",
  baseUrl: "/k8s-workshop/",
  favicon: "img/favicon.ico",
  organizationName: "stackworx",
  projectName: "k8s-workshop",
  themeConfig: {
    navbar: {
      title: "K8s Workshop",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/requirements",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/stackworx/k8s-workshop",
          label: "GitHub",
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
              label: "Kubernetes Tutorials",
              to: "https://kubernetes.io/docs/tutorials/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              to: "https://stackworx.io/",
            },
            {
              label: "GitHub",
              href: "https://github.com/stackworx",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} K8s Workshop, Inc. Built with Docusaurus.`,
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
            "https://github.com/stackworx/k8s-workshop/edit/master/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/stackworx/k8s-workshop/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
