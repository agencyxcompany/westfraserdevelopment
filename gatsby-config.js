module.exports = {
  siteMetadata: {
    title: 'West Fraser Developments',
  },
plugins: [
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
    },
  },
],
}
