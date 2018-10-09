const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const createPaginatedPages = require("gatsby-paginate")


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
      posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.posts.edges,
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 5, // This is optional and defaults to 10 if not used
        pathPrefix: "", // This is optional and defaults to an empty string if not used
        context: {} // This is optional and defaults to an empty object if not used
      });

      result.data.posts.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}