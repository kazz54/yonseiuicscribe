import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default class extends React.Component {
  constructor(props) {
    super(props)
    let postsToShow = 12
    this.state = {
      postsToShow,
    }
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const index = this.state.postsToShow
    return (
      <Layout>
        <PageBreadcrumb crumbs={["Home", "Sports"]} />
        <div className="categoryPostContainer">
          <SEO title="Sports - Yonsei UIC Scribe | Underwood International College"></SEO>
          {posts.slice(0, index).map(({ node }) => (
            <figure className="categoryPost" key={node.id}>
              <Link to={node.fields.slug}>
                <Img
                  className="categoryPostImg"
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <figcaption>
                  <h2>{node.frontmatter.category}</h2>
                  <h3>{node.frontmatter.title}</h3>
                  <h4>
                    {node.frontmatter.date} by{" "}
                    <span>{node.frontmatter.author}</span>{" "}
                  </h4>
                  <p>{node.excerpt}</p>
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
        {this.state.postsToShow <
          this.props.data.allMarkdownRemark.edges.length && (
          <div className="loadMoreButtonContainer">
            <button
              onClick={() => {
                this.setState({
                  postsToShow: this.state.postsToShow + 12,
                })
              }}
            >
              Load More
            </button>
          </div>
        )}
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Sports" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
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
