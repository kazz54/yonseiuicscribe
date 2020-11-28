import React from "react"
import Layout from "../components/layout"
import PageBreadcrumb from "../components/pageBreadcrumbs"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <PageBreadcrumb crumbs={["Home", "Recruitment"]} />
    <div className="recruitmentContainer">
      <SEO title="Recruitment - Yonsei UIC Scribe | Underwood International College"></SEO>
      <h1>Joining Scribe</h1>
      <p>
        The UIC Scribe is always looking for new creative and passionate writers
        and designers. Join us as a reporter or co-designer and surround
        yourself with a community of dedicated creatives committed to sharing
        compelling stories.
      </p>
      <h2>Who can apply?</h2>
      <p>
        Any Yonsei University student with a passion for sharing stories and
        making creative and original content!
      </p>
      <h2>Why should you apply?</h2>
      <p>To find a creative outlet for all your inner musings</p>
      <p>To further develop your writing/designing skills</p>
      <p>
        To network and mingle with upperclassmen and other like-minded
        colleagues
      </p>
      <p>For a chance to receive the prestigious Scribe scholarship</p>
      <h2>What do we do in Scribe?</h2>
      <p>
        Three meetings are held per semester, usually on Thursdays at Sinchon.
      </p>
      <p>
        During these Workshop sessions, reporters discuss with fellow club
        members and editors about their articles and receive feedback on
        improving the quality of their drafts.
      </p>
      <p>
        Outside of meetings, reporters work on their individual articles.
        Assigned editors work closely to assist reporters along the way.
      </p>
      <p>
        Designers work with the editorial board to produce the final magazine
        publications. Designers are exempt from meetings.
      </p>
      <h2>How can I apply?</h2>
      <p>
        Visit our{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/theuicscribe/"
        >
          Facebook
        </a>{" "}
        page for announcements.
      </p>
      <p>
        Please email{" "}
        <a href="mailto:scribe.uic@gmail.com">scribe.uic@gmail.com</a> for any
        questions.
      </p>
    </div>
  </Layout>
)
