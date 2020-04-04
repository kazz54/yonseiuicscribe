import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostBreadcrumb from "../components/postBreadcrumbs"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let postCategory = post.frontmatter.category
  let postTitle = post.frontmatter.title
  return (
    <Layout>
      <PostBreadcrumb crumbs={ [ 'Home', postCategory, postTitle ] } />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}{" "}by{" "}<span>{post.frontmatter.author}</span>{" "}</h2>
        <Img fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`