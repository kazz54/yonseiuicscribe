import React from "react"
import { Link } from "gatsby"
import Arrow from "../images/arrow.svg"

export default props => {
	return (
		<div>
			<ul className="breadcrumbs">
				{props.crumbs.map((crumb, index) => (
						((props.crumbs.length - index) > 1) ?
						<> 
						<li key={index}><Link to={`/`}>{crumb}</Link></li>
						<img src={Arrow} alt="UIC Scribe logo" />
						</> : 
						<li key={index}><span>{crumb}</span></li> 
				))}
			</ul>
		</div>
	)
}
