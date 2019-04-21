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

const SectionThree = () => (

      <section id="section-three" className="section content-section">
        <div className="container">
          <h2 className="text-md-center">The benefits of Netlify Edge</h2>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="content-box text-center">
                  <div class="icon-svg-wrapper">
                    <IconOneSVG />
                  </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="content-box">
                <h3>Faster sites & applications</h3>
                <p>Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 order-md-1">
              <div className="content-box text-center">
                  <div class="icon-svg-wrapper">
                    <IconTwoSVG />
                  </div>
              </div>
            </div>
            <div className="col-md-8 order-md-0">
              <div className="content-box">
                <h3>Faster sites & applications</h3>
                <p>Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="content-box text-center">
                  <div class="icon-svg-wrapper">
                    <IconThreeSVG />
                  </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="content-box">
                <h3>Faster sites & applications</h3>
                <p>Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 order-md-2">
              <div className="content-box text-center">
                  <div class="icon-svg-wrapper">
                    <IconFourSVG />
                  </div>
              </div>
            </div>
            <div className="col-md-8 order-md-1">
              <div className="content-box">
                <h3>Faster sites & applications</h3>
                <p>Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.</p>
              </div>
            </div>
          </div>
        </div>             

      </section>
)

export default SectionThree
