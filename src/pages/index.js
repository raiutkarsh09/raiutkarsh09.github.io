import React from "react"
//scss
import "../styles/styles.scss"
//import Components
import { Link, graphql } from "gatsby"

import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Contact from "../components/contact"
import SEO from "../components/seo"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}



const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <Banner />
    <About />
    <Contact />
  </div>
)

export default IndexPage
