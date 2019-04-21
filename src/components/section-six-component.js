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

const SectionSix = () => (

        <section id="section-six" className="section">
          <div className="container">
            <div className="content small-width-content text-md-center mb-md-4 mb-lg-0">
              <h2>Dev is just the beginning</h2>
              <p>Next, explore Netlify Build: Power collaboration through Netlify’s Git-based workflow with Deploy Previews, branch testing, and more.</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              
              <div className="col-lg-4 mb-3">
                <div className="content content-box">
                  <div className="custom-card card--dev">
                    <h3 className="inverse">Netlify Dev</h3>
                    <p>Run our entire platform right on your laptop. Preview it all — site generation, functions, and edge logic.</p>
                    <Link className="cta-link" to="https://www.netlify.com/products/dev/">Learn More</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 ">
                <div className="content content-box">
                  <div className="custom-card card--build">
                    <h3>Netlify Build</h3>
                    <p>The Git workflow for web development. Build, deploy, and manage modern web projects.</p>
                    <Link className="cta-link" to="https://www.netlify.com/products/dev/">Learn More</Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3">
                <div className="content content-box">
                  <div className="custom-card card--edge">
                    <h3>Netlify Edge</h3>
                    <p>A new type of application delivery network custom designed for fast, responsive sites and modern workflows.</p>
                    <Link className="cta-link" to="https://www.netlify.com/products/dev/">Learn More</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
)

export default SectionSix
