import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
const searchClient = algoliasearch('ZTQU3APG88', 'b40b0d67a2b34f5688bec969def790ab');
<<<<<<< HEAD
=======
//make this pretty
>>>>>>> 92733aaac50eaf4a60628344d81cfb75563063af
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
<<<<<<< HEAD
				</InstantSearch>
=======
					</InstantSearch>
>>>>>>> 92733aaac50eaf4a60628344d81cfb75563063af
			</Layout>
		)
	}
}