import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NetlifyBannerSVG from "../images/netlify.svg"
import IconOneSVG from "../images/icon-one.svg"
import IconTwoSVG from "../images/icon-two.svg"
import IconThreeSVG from "../images/icon-three.svg"
import IconFourSVG from "../images/icon-four.svg"
import SolidCurvySVG from "../images/solid-curvy-bg.svg"
import Logo from "../images/logo.svg"
import IconGitHub from "../images/icon-github.svg"
import IconYouTube from "../images/icon-youtube.svg"
import IconGitter from "../images/icon-gitter.svg"
import IconTwitter from "../images/icon-twitter.svg"
import IconSectionTwo from "../images/section-two-svg.svg"
// Components
import HeroComponent from "../components/hero-component.js"
import SectionTwo from "../components/section-two-component.js"
import SectionThree from "../components/section-three-component.js"
import SectionFour from "../components/section-four-components.js"
import SectionFive from "../components/section-five-component.js"
import SectionSix from "../components/section-six-component.js"
import SectionSeven from "../components/section-seven-component.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main id="analytics-page">
      <HeroComponent/>
      <SectionTwo />
      <SectionThree />
      <section className="curvy-parent"> 
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </section>
    </main>
  </Layout>
)

export default IndexPage
