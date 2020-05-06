  const postQuery = `{
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/" } }
    ) {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`
  
  const flatten = arr =>
    arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      ...rest,
    }))
  const settings = { attributesToSnippet: [`excerpt:20`] }
  
  const queries = [
    {
      query: postQuery,
      transformer: ({ data }) => flatten(data.posts.edges),
      indexName: `Posts`,
      settings,
    },
  ]
  
  module.exports = queries