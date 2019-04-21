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

const HeroComponent = () => (

      <section id="section-one" className="section inverse">
        <div className="svg-wrapper">
          <NetlifyBannerSVG />
        </div>
        <div className="container">
          <div class="content content-box">
            <h1 className="inverse">Netlify Analytics</h1>
            <p>A new type of application delivery network custom designed for blazing fast sites and modern workflows.</p>
            <Link To="https://app.netlify.com/signup"><button className="global-button">Get started for free</button></Link>
          </div>
        </div>
      </section>
)

export default HeroComponent
