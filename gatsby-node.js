const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allArticles: allStrapiArticle {
        nodes {
          id
        }
      }
      allAuthors: allStrapiUser {
        nodes {
          username
        }
      }
    }
  `)
  // grab all the articles
  data.allArticles.nodes.forEach(article => {
    createPage({
      path: `articles/${article.id}`,
      component: path.resolve("./src/templates/Article.js"),
      context: {
        id: article.id,
      },
    })
  })
  // grab all the users
  data.allAuthors.nodes.forEach(author => {
    createPage({
      path: `authors/${author.username}`,
      component: path.resolve("./src/templates/Author.js"),
      context: {
        username: author.username,
      },
    })
  })
}
