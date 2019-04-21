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

const SectionFive = () => (


        <section id="section-five" className="section inverse">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="content content-box">
                  <h2 className="inverse">Test it all together.<br />Deploy it all together</h2>
                  <p>Frontend builds. Serverless code. Edge routing logic.
                  <br /><br />
                  No other service allows you to write and manage everything from a single repository. Version control it together. Test, version control, and deploy it all together.</p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="image-box text-md-center">
                  <img src="https://i.pinimg.com/originals/58/f5/7b/58f57b4232cd9369d446ed35f3024fb9.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
)

export default SectionFive
