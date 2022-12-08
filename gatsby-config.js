module.exports = {
  siteMetadata: {
    title: 'IBM AIOps Training',
    description: 'IBM AIOps Training',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
        isSwitcherEnabled: 'false',
      },
    },
  ],
};
