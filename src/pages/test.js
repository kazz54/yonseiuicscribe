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
		const posts = this.props.data.pdfFile.edges
		const index = this.state.postsToShow;
		//test
		const imgs = this.props.data.pdfImg.edges
		let prevImg = 0
		let nextImg = 1
		var rows = [];
		const [first, second] = rows;
		for (let i = 0; i < imgs.length; i++) {
			prevImg = prevImg + i;
			nextImg = nextImg + i;
			rows.push(prevImg, nextImg)
			console.log(rows)
		}
		return (
			<Layout>
				<PageBreadcrumb crumbs={['Home', 'Test']} />
				<div className="categoryPostContainer">
					{posts.slice(0, index).map(({ node }) => (
						<figure key={node.id}>
							<a href={node.publicURL}>
								{imgs.slice(first, second).map(({ node }) => (
									<img alt="magazine cover" className="categoryPostImg" src={node.publicURL} />
								))}
								<figcaption>
									<p>{node.name}</p>
								</figcaption>
							</a>
						</figure>
					))}
				</div>
				{this.state.postsToShow < this.props.data.pdfFile.edges.length &&
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
  pdfFile: allFile(filter: {extension: {eq: "pdf"}}) {
    totalCount
    edges {
      node {
				name
				id
        publicURL
      }
    }
  }
  pdfImg: allFile(
    filter: {extension: {in: "jpg"}, name: {regex: "/Cover/"}}
  ) {
    totalCount
    edges {
      node {
        name
        id
        publicURL
        relativeDirectory
      }
    }
  }
}
`