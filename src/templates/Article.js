import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

export const query = graphql`
  query getFullArticle($id: String!) {
    article: strapiArticle(id: { eq: $id }) {
      title
      content
      heroImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const Article = ({ data: { article } }) => {
  return (
    <div>
      <h2> Title: {article.title}</h2>
    </div>
  )
}

export default Article
