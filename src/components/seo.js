import React from "react"
import { Helmet } from "react-helmet"

export default props => {
  return (
    <Helmet>
      <html lang="en" />
      <meta
        name="description"
        content="The UIC Scribe is the official student-run newsmagazine of Underwood International College."
      />
      <title>{props.title}</title>
    </Helmet>
  )
}
