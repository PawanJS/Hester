module.exports = {
  siteMetadata: {
    title: `Hester`,
    description: `Hester is a pickle selling website which i developed by Pawan JS`,
    author: `PawanJS`,
    link: "/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hester`,
        short_name: `Hester-Blogs`,
        start_url: `/`,
        background_color: `#E1B66B`,
        theme_color: `#E1B66B`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-2.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}
