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

const SectionFour = () => (

        <section id="section-four" className="section">
          <div className="svg-wrapper">
            <SolidCurvySVG />
          </div>
          <div className="container">

            <div className="child-one content content-box inverse">
              <h2 className="inverse">The one dev server<br />that powers it all</h2>
              <p className="inverse">Imagine the productivity boost of being able to locally test your site generator, API integrations, serverless functions, and edge rules, all in a single development server.</p>
              <Link className="cta-link">Get started in the docs </Link>
            </div>

            <div className="child-two testimonial-parent content-box content inverse">
              <div className="testimonial-block">
                <div className="">
                  <p>“Decoupled web projects involve so many components. The hard part is testing all the pieces locally, together. Netlify Dev delivers this beautifully with one command.”</p>
                  <div className="testimonial-row">
                    <div className="testimonial-image">
                      <div className="content">
                        <img src="https://cdn.netlify.com/d8adea775b72d67ebb65fc1470da562cd51ba481/a718f/img/v2/avatars/kent-c-dodds.jpg" />
                      </div>
                    </div>
                    <div className="testimonial-description">
                      <div class="content">
                        <h6>Kent C. Dodds,</h6>
                        <p>@kentcdodds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="child-three content-box content inverse">
              <div className="heading-box text-center">
              <h2 className="inverse text-left text-md-center">Be instantly productive</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 order-lg-2">
                  <div className="image-box">
                    <img src="https://i.pinimg.com/originals/c3/9b/57/c39b5749ff0e9bb01c07a1af3a10b2af.png" />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="content-box">
                    <article>
                      <h3 className="inverse">Your favorite generator & tools</h3>
                      <p>Netlify Dev automatically detects common tools like Gatsby, Hugo, Jekyll, React Static, Eleventy, and more, providing a zero-config setup for your local dev server.</p>
                    </article>
                    <article>
                      <h3 className="inverse">WASM edge logic engine</h3>
                      <p>We’ve faithfully replicated our powerful edge logic engine in WebAssembly so you can locally test all the same rules before deploying them to our global infrastructure.</p>
                    </article>
                    <article>
                      <h3 className="inverse">Zip & ship functions</h3>
                      <p>Write cloud functions in modern javascript, adding needed dependencies. Netlify will compile your functions as AWS Lambdas and deploy them as full API endpoints. Local testing works too!</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
)

export default SectionFour
