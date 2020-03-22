import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import layoutStyles from "./layout.module.scss"


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
      <nav>
        <Link to={`/science/`}>
          Science
        </Link>
        <Link to={`#`}>
          Culture
        </Link>
        <Link to={`#`}>
          Politics
        </Link>
        <Link to={`#`}>
          Opinion
        </Link>
        <Link to={`#`}>
          Interviews
        </Link>
        <Link to={`#`}>
          Business
        </Link>
        <Link to={`#`}>
          School Affairs
        </Link>
        <Link to={`#`}>
          Sports
        </Link>
        <Link to={`#`}>
          Magazines
        </Link>
      </nav>
      {children}
    </div>
  )
}
