import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('ZTQU3APG88', 'b40b0d67a2b34f5688bec969def790ab');
const Hit = ({ hit }) =>
<article>
	<Link to={`/${hit.fields.slug}`}>
		<h1>{hit.title}</h1>
		<h2>{hit.date}{" "}by{" "}<span>{hit.author}</span>{" "}</h2>
		<p>{hit.excerpt}</p>
	</Link>
</article> 

export default class extends React.Component {
	
	render() {
		return (
			<Layout>
				<PageBreadcrumb crumbs={ [ 'Home', 'Search' ] } />
				<div className="searchbarContainer">
					<InstantSearch className="searchbar" searchClient={searchClient} indexName="Posts">
						<SearchBox />
						<Hits hitComponent={Hit} />
					</InstantSearch>
				</div>
			</Layout>
		)
	}
}