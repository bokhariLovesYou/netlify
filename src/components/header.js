import PropTypes from "prop-types"
import React from "react"
import IconSearch from "../images/icon-search.svg"

const Header = props => (
  <header>
    <div className="header-outer">
      <div className="container">
        <div className="header-inner">
          <div className="nav-parent-left">
            <div className="logo-box">
              <a className="logo-url" href="https://www.netlify.com/">

              </a>
            </div>
            <div className="first-navigation-column">
              <ul>
                <li>
                  <a href="https://www.netlify.com/products" id="cta-mainNav-products">
                    Products
                  </a>
                </li>
                <li>
                  <a href="https://www.netlify.com/pricing" id="cta-mainNav-pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="https://www.netlify.com/docs" id="cta-mainNav-docs">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="https://www.netlify.com/blog" id="cta-mainNav-blog">
                    Blog
                  </a>
                </li>
                <li onClick={props.toggleSearch}>
                  <IconSearch />
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-parent-right">
            <div className="second-navigation-column">
              <ul>
                <li className="vr">
                  <a href="https://www.netlify.com/enterprise" id="cta-mainNav-sales">
                    Contact sales
                  </a>
                </li>
                <li>
                  <a href="https://app.netlify.com" id="cta-mainNav-login">
                    Log in
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.netlify.com/signup"
                    className="cta-link highlight"
                    id="cta-mainNav-signup"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={props.toggleMenu} className="button menu-button">
            <h5>Menu</h5>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
