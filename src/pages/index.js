import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

export const getStrapiArticles = graphql`
  query {
    allStrapiArticle {
      nodes {
        id
        content
        title
        updated_at
        heroImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({
  // dfsd
  data: {
    allStrapiArticle: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Built by Aquasar using Gatsby</p>
    {nodes.map(article => (
      <Link key={article.title} to={`/articles/${article.id}`}>
        <h2>{article.title}</h2>
        <Img fluid={article.heroImage.childImageSharp.fluid} />
      </Link>
    ))}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
