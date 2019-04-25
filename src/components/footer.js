import React from "react"
import Logo from "../images/logo.svg"
import IconGitHub from "../images/icon-github.svg"
import IconYouTube from "../images/icon-youtube.svg"
import IconGitter from "../images/icon-gitter.svg"
import IconTwitter from "../images/icon-twitter.svg"
import IconSearch from "../images/icon-search.svg"
import IconClose from "../images/icon-close.svg"

const Footer = props => (
  <div className={"footer inverse section " + props.customClass }>
    <div className="container">
      <div className="fancy-hr" />
      <div className="logo-box">
        <Logo />
      </div>
    </div>
    <div className="container text-center">
      <div className="row nav-row">
        <div className="col-4">
          <ul>
            <li>
              <a href="https://www.netlify.com/products" id="cta-footer-products">
                Products
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/pricing" id="cta-footer-pricing">
                Pricing
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/docs" id="cta-footer-docs">
                Docs
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/blog" id="cta-footer-blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <a href="https://www.netlify.com/about" id="cta-footer-products">
                About
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/careers" id="cta-footer-pricing">
                Careers
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/press" id="cta-footer-docs">
                Press
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/open-source" id="cta-footer-blog">
                Open Source
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <a href="https://www.netlify.com/enterprise" id="cta-footer-products">
                Sales
              </a>
            </li>
            <li>
              <a href="https://www.netlifystatus.com/" id="cta-footer-pricing">
                Status
              </a>
            </li>
            <li>
              <a href="https://www.netlify.com/support" id="cta-footer-docs">
                Support
              </a>
            </li>
            <li>
              <a href="https://community.netlify.com/" id="cta-footer-blog">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container">
      <ul className="row social">
        <a href="https://twitter.com/netlify">
          <li>
            <IconTwitter />
          </li>
        </a>
        <a href="https://github.com/netlify">
          <li>
            <IconGitHub />
          </li>
        </a>
        <a href="https://gitter.im/netlify/community">
          <li>
            <IconGitter />
          </li>
        </a>  
        <a href="https://www.youtube.com/channel/UCMzabFudT_ntxlueP9R-3Vg/featured">
          <li>
            <IconYouTube />
          </li>
        </a>
      </ul>
    </div>

    <div className="container">
      <ul className="row terms">
        <li>
          <a href="https://www.netlify.com/legal/terms-of-use/">Terms</a>
        </li>
        <li>
          <a className="sep" href="https://www.netlify.com/privacy/">
            Privacy
          </a>
        </li>
        <li>
          <a className="sep" href="https://www.netlify.com/gdpr/">
            GDPR
          </a>
        </li>
      </ul>
    </div>

    <nav className={"modal " + props.modalClass}>
      <section className="mobile-menu-modal">
        <IconClose onClick={props.toggleMenu} />
        <div className="mobile-header">
          <button onClick={props.toggleSearch} className="button button-search">
            <IconSearch />
            Search
          </button>
          <hr className="fancy-hr" />
        </div>
        <ul className="">
          <li>
            <a href="https://www.netlify.com/" id="cta-mainNav-home-mobile">
              Home
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/products" id="cta-mainNav-features-mobile">
              Products
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/pricing" id="cta-mainNav-pricing-mobile">
              Pricing
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/docs" id="cta-mainNav-docs-mobile">
              Docs
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/blog" id="cta-mainNav-blog-mobile">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/enterprise" id="cta-mainNav-login-mobile">
              Contact sales
            </a>
          </li>
          <li>
            <a href="https://app.netlify.com" id="cta-mainNav-login-mobile">
              Log in
            </a>
          </li>
          <li>
            <a
              href="https://app.netlify.com/signup"
              className="cta-link highlight"
              id="cta-mainNav-signup-mobile"
            >
              Sign up
            </a>
          </li>
        </ul>
      </section>
    </nav>

    <section className={"search-box search " + props.searchClass}>
      <IconClose onClick={props.toggleSearch} />
      <div className="container" role="search">
        <div className="content-box">
          <label htmlFor="search-input" className="visuallyhidden">
            Search for:
          </label>
          <input
            autoComplete="off"
            id="search-input"
            className="search-input"
            type="text"
            placeholder="Type to search"
          />
          <a
            href="https://algolia.com"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="-1"
          >
            <img
              src="https://cdn.netlify.com/4c75b91b88ae0450ea5513b1f4dfc7e54f1ce0f0/a44b1/img/global/search-by-algolia.svg"
              alt="Search by Algolia"
              className="search-algolia-logo"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default Footer
