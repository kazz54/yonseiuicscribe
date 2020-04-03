import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumbs"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <Breadcrumb crumbs={ [ '/', 'Interviews' ] } />
      <div className="categoryPostContainer">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <figure className="categoryPost" key={node.id}>
            <Link to={node.fields.slug}>
            <Img className="categoryPostImg" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
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
    allSitePage {
  	  edges {
  	    node {
          path
  	    }
  	  }
  	}
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {category: {eq: "Interviews"}}}
    ) {
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