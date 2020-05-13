require('dotenv').config()

module.exports = {
  // proxy: {
  //   prefix: "/fermap",
  //   url: "http://localhost:8080",
  // },
  siteMetadata: {
    title: `Fermap`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // apiToken: process.env.DATO_API_TOKEN,
        apiToken: 'b233995cb59dd15b6af96fd26711f2',
      },
    },
  ],
}
