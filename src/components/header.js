import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo-scribe.svg"
import magnifyingGlass from "../images/magnifyingGlass.svg"

export default () => {
  // Open/closes navigation
  const toggleNav = () => {
    document.getElementById("jsNav").classList.toggle("jsNav-active");
    document.getElementById("animatedButton").classList.toggle("open");
  };
  // Closes navigation when search link is clicked
  const closeNav = () => {
    document.getElementById("jsNav").classList.remove("jsNav-active");
  };
  return (
    <div>
      <header>
        <nav className="nav">
          <div className="navBar">
            <Link to={`/`}>
              <img src={Logo} alt="UIC Scribe logo" />
            </Link>
            <div className="navPortion">
              <Link className="searchLink" to={`/search`} onClick={closeNav}>
                <p>Search</p>
                <img src={magnifyingGlass} alt="magnifying glass" />
              </Link>
              <button 
                id="animatedButton" 
                type="button"
                aria-label="Toggle navigation"
                className="animatedButton"
                onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div id="jsNav" className="navCabinet">
            <Link to={`/shorts/`}>
              Shorts
            </Link>
            <Link to={`/interviews/`}>
              Interviews
            </Link>
            <Link to={`/school/`}>
              School
            </Link>
            <Link to={`/opinion/`}>
              Opinion
            </Link>
            <Link to={`/society/`}>
              Society
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
            <Link to={`/magazines/`}>
              Magazines
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
