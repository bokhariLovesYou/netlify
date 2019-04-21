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

const Footer= () => (
    <div className="footer gradient inverse section">
      <div className="container">
        <div className="fancy-hr">
        </div>
        <div className="logo-box">
          <Logo />
        </div>
      </div>
      <div className="container text-center">
        <div className="row nav-row">
          <div className="col-4">
          <ul>
            <li><Link To="/products" id="cta-footer-products">Products</Link></li>
            <li><Link To="/pricing" id="cta-footer-pricing">Pricing</Link></li>
            <li><Link To="/docs" id="cta-footer-docs">Docs</Link></li>
            <li><Link To="/blog" id="cta-footer-blog">Blog</Link></li>
          </ul>
          </div>
          <div className="col-4">
          <ul>
            <li><Link To="/products" id="cta-footer-products">About</Link></li>
            <li><Link To="/pricing" id="cta-footer-pricing">Careers</Link></li>
            <li><Link To="/docs" id="cta-footer-docs">Press</Link></li>
            <li><Link To="/blog" id="cta-footer-blog">Open Source</Link></li>
          </ul>
          </div>
          <div className="col-4">
          <ul>
            <li><Link To="/products" id="cta-footer-products">Sales</Link></li>
            <li><Link To="/pricing" id="cta-footer-pricing">Status</Link></li>
            <li><Link To="/docs" id="cta-footer-docs">Support</Link></li>
            <li><Link To="/blog" id="cta-footer-blog">Community</Link></li>
          </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="row social">
          <li><IconTwitter /></li>
          <li><IconGitHub /></li>
          <li><IconGitter /></li>
          <li><IconYouTube/></li>
        </ul>
      </div>

      <div className="container">
        <ul className="row terms">
          <li><Link To="#">Terms</Link></li>
          <li><Link className="sep" To="#">Privacy</Link></li>
          <li><Link className="sep" To="#">GDPR</Link></li>
        </ul>
      </div>

    </div>
)

export default Footer
