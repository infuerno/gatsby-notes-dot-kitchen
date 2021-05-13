import dotenv from "dotenv";

dotenv.config(); // OR dotenv.config({path: '.env'}) to be explicit

export default {
  siteMetadata: {
    title: "notes.dot.kitchen",
    siteUrl: "https://notes.dot.kitchen",
    description: "There are 18 different shades of British Standard Toast",
  },
  plugins: [
    // use plugin with default options: just specify name
    // "gatsby-plugin-styled-components",
    // use plugin with custom options, use resolve to specify the name
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "2uoyoa38",
        dataset: "production",
        watch: true, // in dev automatically detects changes from sanity
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};
