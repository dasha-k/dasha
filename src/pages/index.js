import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Introduction from "../components/introduction"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Dasha K" />
    <Introduction />
    <Projects />
  </Layout>
)

export default IndexPage
