const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `markdowns` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  graphql(`
    {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" } } }) {
        edges {
          node {
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const imgName = node.fields.slug.slice(10).slice(0, -1);
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/projectDetail.js`),
        context: {
          slug: node.fields.slug,
          title: imgName,
          imgsRegex: `/${imgName}_/`
        }
      });
    });
  });
}
