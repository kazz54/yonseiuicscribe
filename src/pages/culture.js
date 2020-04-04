import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <PageBreadcrumb crumbs={ [ 'Home', 'Culture' ] } />
      <div>
        <h1>
          Culture Page
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}by{" "}{node.frontmatter.author}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {category: {eq: "Culture"}}}
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
`