import React from "react"
import { graphql } from "gatsby"
import { Disqus } from 'gatsby-plugin-disqus'
import Layout from "../components/layout"
import PostBreadcrumb from "../components/postBreadcrumbs"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const postCategory = post.frontmatter.category
  const postTitle = post.frontmatter.title
  let disqusConfig = {
    url: `https://yonseiuicscribe.netlify.app/${post.fields.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  return (
    <Layout>
      <PostBreadcrumb crumbs={ [ 'Home', postCategory, postTitle ] } />
      <div className="blogPostContainer">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}{" "}by{" "}<span>{post.frontmatter.author}</span>{" "}</h2>
        <Img fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="disqusContainer">
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }   
    ) {
      fields {
        slug
      }
      html
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
    }
  }
`