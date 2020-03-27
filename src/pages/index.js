import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <div className="container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <figure className="post" key={node.id}>
            <Link to={node.fields.slug}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <figcaption>
              <h2>{node.frontmatter.category}</h2>
              <h3>
                {node.frontmatter.title}
              </h3>
              <h4>{node.frontmatter.date}{" "}by{" "}<span>{node.frontmatter.author}</span>{" "}</h4>
              <p>{node.excerpt}</p>
            </figcaption>
            </Link>
          </figure>
        ))}
      </div>
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
            date(formatString: "MMMM DD, YYYY")
            category
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