module.exports = {
  siteMetadata: {
    title: `F`,
    description: `A theme for Visual Studio Code`,
    author: `@__kayak__`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `F | A theme for Visual Studio Code`,
        short_name: `F`,
        start_url: `/`,
        background_color: `#22d07f`,
        theme_color: `#2a2021`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              colorTheme: 'F', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '', // Additional class put on 'pre' tag
              injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
              extensions: [{ identifier: 'k4y4k.f', version: '0.3.1' }],
              logLevel: 'error',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`arvo`, `fira sans`],
        display: 'swap',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
