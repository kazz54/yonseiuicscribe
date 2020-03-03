import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Link to={`/`}>
        {data.site.siteMetadata.title}
      </Link>
      <Link to={`/about/`}>
        About
      </Link>
      {children}
    </div>
  )
}
