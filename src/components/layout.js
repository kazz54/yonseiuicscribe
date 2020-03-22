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
        <Link to={`/interviews/`}>
          Interviews
        </Link>
        <Link to={`/school-affairs/`}>
          School Affairs
        </Link>
        <Link to={`/opinion/`}>
          Opinion
        </Link>
        <Link to={`/culture/`}>
          Culture
        </Link>
        <Link to={`/politics/`}>
          Politics
        </Link>
        <Link to={`/science/`}>
          Science
        </Link>
        <Link to={`/business/`}>
          Business
        </Link>
        <Link to={`/technology/`}>
          Technology
        </Link>
        <Link to={`/sports/`}>
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
