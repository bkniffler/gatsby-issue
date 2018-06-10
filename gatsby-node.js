const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `contents` });
    console.log(slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug === '/home/' ? '/' : slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node);
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/pages/page-2.jsx`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
