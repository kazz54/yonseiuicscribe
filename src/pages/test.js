import React from "react"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"

import Search from "../components/search"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

export default class extends React.Component {
	
	render() {
		return (
			<Layout>
				<PageBreadcrumb crumbs={ [ 'Home', 'Test' ] } />
				<Search collapse indices={searchIndices} />
			</Layout>
		)
	}
}