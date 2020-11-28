import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1
          filter: { frontmatter: { featured: { eq: "true" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                author
                date(formatString: "DD MMMM, YYYY")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div className="featuredContainer">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <figure className="featured" key={node.id}>
            <Link to={node.fields.slug}>
              <Img
                className="featuredImg"
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
              <figcaption>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
                <p>
                  <span>Continue reading...</span>
                </p>
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>
    )}
  />
)
