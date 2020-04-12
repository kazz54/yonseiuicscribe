import React from "react"
import {Link} from "gatsby"
import Logo from "../images/scribe-logo.svg"

export default () => {
  return (
    <div>
      <header>
        <Link to={`/`}>
          <img src={Logo} alt="UIC Scribe logo" />
        </Link>
        <nav>
          <Link to={`/interviews/`}>
            Interviews
          </Link>
          <Link to={`/school/`}>
            School
          </Link>
          <Link to={`/opinion/`}>
            Opinion
          </Link>
          <Link to={`/culture/`}>
            Culture
          </Link>
          <Link to={`/politics/`}>
            Politics
          </Link>
          <Link to={`/science/`}>
            Science
          </Link>
          <Link to={`/business/`}>
            Business
          </Link>
          <Link to={`/technology/`}>
            Technology
          </Link>
          <Link to={`/sports/`}>
            Sports
          </Link>
          <Link to={`#`}>
            Magazines
          </Link>
        </nav>
      </header>
    </div>
  )
}
