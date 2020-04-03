import React from "react"
import { Link } from "gatsby"

export default props => {
	return (
		<div>
			<ul>
				{props.crumbs.map((crumb, index) => (
						((props.crumbs.length - index) > 1) ? <li key={index}><Link to={`/`}>{crumb}</Link></li> : <li key={index}>{crumb}</li> 
				))}
			</ul>
		</div>
	)
}