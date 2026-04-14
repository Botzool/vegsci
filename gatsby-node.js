const path = require(`path`);
const https = require("https");
const { galleryNames, projectsNames } = require("./src/content/pagesNames");

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  if (stage === 'build-javascript') {
    const baseConfig = getConfig();
    const config = {
      ...baseConfig,
      ...{
        output: {
          ...baseConfig.output,
          publicPath: '/vegsci/',
        },
      },
    };
    actions.replaceWebpackConfig(config);
  }
  };

exports.createPages = ({ actions: { createPage } }) => {
  projectsNames.forEach(projectItem => {
    createPage({
      path: projectItem,
      component: path.resolve(`./src/templates/projectDetail.js`),
      context: {
        slug: projectItem,
        title: projectItem,
        imgsRegex: `/${projectItem}_/`
      }
    });
  });
  galleryNames.forEach(galleryItem => {
    createPage({
      path: `gallery-${galleryItem}`,
      component: path.resolve(`./src/templates/gallery.js`),
      context: {
        slug: `gallery-${galleryItem}`,
        title: galleryItem,
        imgsRegex: `/${galleryItem}_/`
      }
    });
  });
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const create = async () => {
    try {
      const dbData = await new Promise((resolve, reject) => {
        https.get(`https://www.sci.muni.cz/botany/vegsci/dbase/actualization-dates.php`, (res) => {
          let data = "";
          res.on("data", chunk => data += chunk);
          res.on("end", () => resolve(data));
        }).on("error", reject);
      });

      const nodeDbData = {
        key: 111,
        dbData: dbData,
      };

      const nodeContent = JSON.stringify(nodeDbData);

      const nodeMeta = {
        id: await createNodeId(`my-data-${nodeDbData.key}`),
        parent: null,
        children: [],
        internal: {
          type: `dbData`,
          mediaType: `text/html`,
          content: nodeContent,
          contentDigest: await createContentDigest(nodeDbData)
        }
      };

      return { nodeDbData, nodeMeta };
    } catch (err) {
      console.warn("Nepodařilo se načíst data z databáze:", err);
      return null;
    }
  };

  const newNode = await create();
  if (newNode) {
    await createNode(Object.assign({}, newNode.nodeDbData, newNode.nodeMeta));
  }
};
