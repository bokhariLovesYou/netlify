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
import IconSearch from "../images/icon-search.svg"
import IconClose from "../images/icon-close.svg"

const Footer = props => (
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

    <nav class={"modal " + props.modalClass}>  
      <section className="mobile-menu-modal">
        <IconClose 
        onClick={props.toggleMenu}
        />
        <div className="mobile-header">
          <button onClick={props.toggleSearch} className="button button-search"><IconSearch />Search</button>
          <hr className="fancy-hr" />
        </div>
        <ul class="">
          <li><a href="/" id="cta-mainNav-home-mobile">Home</a></li>
          <li><a href="/products" id="cta-mainNav-features-mobile">Products</a></li>
          <li><a href="/pricing" id="cta-mainNav-pricing-mobile">Pricing</a></li>
          <li><a href="/docs" id="cta-mainNav-docs-mobile">Docs</a></li>
          <li><a href="/blog" id="cta-mainNav-blog-mobile">Blog</a></li>
          <li><a href="/enterprise" id="cta-mainNav-login-mobile">Contact sales</a></li>
          <li><a href="https://app.netlify.com" id="cta-mainNav-login-mobile">Log in</a></li>
          <li><a href="https://app.netlify.com/signup" class="cta-link highlight" id="cta-mainNav-signup-mobile">Sign up</a></li>
      </ul>
      </section>
    </nav>

    <section className={"search-box search " + props.searchClass}>
    <IconClose onClick={props.toggleSearch} />
      <div className="container" role="search">
        <div className="content-box">
          <label for="search-input" class="visuallyhidden">Search for:</label>
          <input autocomplete="off" id="search-input" class="search-input" type="text" placeholder="Type to search" />
          <a href="https://algolia.com" target="_blank" rel="noopener noreferrer" tabindex="-1">
            <img src="https://cdn.netlify.com/4c75b91b88ae0450ea5513b1f4dfc7e54f1ce0f0/a44b1/img/global/search-by-algolia.svg" alt="Search by Algolia" class="search-algolia-logo" />
          </a>
        </div>
      </div>
    </section>

    </div>
)

export default Footer
