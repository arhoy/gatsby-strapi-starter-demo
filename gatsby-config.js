require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby starter and Strapi and Cloudinary and Heroku for backend and netlify for front end`,
    description: `Gatsby starter and Strapi and Cloudinary and Heroku ref for creating an app with all of these`,
    author: `aquasar.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://gatsby-with-strapi-demo-100.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`article`, `user`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: process.env.STRAPI_USERNAME,
        //   password: process.env.STRAPI_PASSWORD,
        // },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
