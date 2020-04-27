import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"

export default class extends React.Component {
	constructor(props) {
    super(props)
		let postsToShow = 12
    this.state = {
      showingMore: postsToShow > 12,
			postsToShow,
    }
	}
	
	render() {
		const posts = this.props.data.allFile.edges
		const index = this.state.postsToShow;
		return (
			<Layout>
				<PageBreadcrumb crumbs={ [ 'Home', 'Magazines' ] } />
				<div className="categoryPostContainer">
					{posts.slice(0, index).map(({ node }) => (
						<figure className="categoryPost" key={node.id}>
							<a href={node.publicURL}>
							<figcaption>
								<p>{node.name}</p>
							</figcaption>
							</a>
						</figure>
					))}
				</div>
				{this.state.postsToShow < this.props.data.allFile.edges.length &&
          <div className="loadMoreButtonContainer">
            <button onClick={() => {
              this.setState({
                postsToShow: this.state.postsToShow + 12,
              })
            }}>Load More</button>
          </div>
        }
			</Layout>
		)
	}
}

export const query = graphql`
query {
  allFile(filter: {extension: {eq: "pdf"}}) {
    totalCount
    edges {
      node {
				name
				id
        publicURL
      }
    }
  }
}
`