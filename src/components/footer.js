import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <footer>
			<p>The UIC Scribe was founded in 2006 as the official student-run newsmagazine of Underwood International College. It celebrates diversity of thinking, excellence in writing, and the freedom of self-expression.</p>
			<Link to={`/recruitment/`}>
        Recruitment
      </Link>
    </footer>
  )
}
