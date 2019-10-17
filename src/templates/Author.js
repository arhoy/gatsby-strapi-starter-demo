import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query getUser($username: String!) {
    author: strapiUser(username: { eq: $username }) {
      username
      email
    }
  }
`

const Author = ({ data: { author } }) => {
  return (
    <div>
      <h2> User: {author.username}</h2>
      <p>For cool stuff pleas contact me at {author.email}</p>
    </div>
  )
}

export default Author
