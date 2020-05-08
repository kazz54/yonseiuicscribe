import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
const searchClient = algoliasearch('ZTQU3APG88', 'b40b0d67a2b34f5688bec969def790ab');
const Hit = ({ hit }) => 
<Link to={`/${hit.fields.slug}`}>
	<p>{hit.title}</p>
	<p>{hit.author}</p>
	<p>{hit.date}</p>
	<p>{hit.excerpt}</p>
</Link>;

export default class extends React.Component {
	
	render() {
		return (
			<Layout>
				<PageBreadcrumb crumbs={ [ 'Home', 'Search' ] } />
				<InstantSearch searchClient={searchClient} indexName="Posts">
						<SearchBox />
						<Hits hitComponent={Hit} />
				</InstantSearch>
			</Layout>
		)
	}
}