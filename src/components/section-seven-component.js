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

const SectionSeven = () => (
        <section id="section-seven" className="section section-cta inverse">
          <div className="container">
            <div className="content content-box">
              <h2 className="inverse">Get started with Netlify</h2>
              <p>Netlify's Enterprise ADN is trusted by Citrix, Verizon, Peloton, Atlassian, Samsung, and more.</p>
              <Link To="https://app.netlify.com/signup"><button className="global-button">Get started for free</button></Link>
            </div>
          </div>
        </section>
)

export default SectionSeven
