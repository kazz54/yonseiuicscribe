import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import layoutStyles from "./layout.module.css"


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
    <div className={layoutStyles.layout}>
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
