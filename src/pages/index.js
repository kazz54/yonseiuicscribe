import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <article>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <figure className="post" key={node.id}>
            <Link to={node.fields.slug}>
            <figcaption>
              <h3>
                {node.frontmatter.title}{" "}by{" "}{node.frontmatter.author}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </figcaption>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            </Link>
          </figure>
        ))}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
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
`