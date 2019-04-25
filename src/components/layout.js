/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer.js"
import "./stylesheets/layout.css"
import "./stylesheets/normalize.css"
import "bootstrap/dist/css/bootstrap.css"
import "./stylesheets/style.css"
// GA Tracking
import ReactGA from "react-ga"

class Layout extends React.Component {
  state = {
    header: [
      {
        modalClass: "not-active",
        searchClass: "not-active",
      },
    ],
  }

  toggleMenu = () => {
    if (this.state.header[0].modalClass === "not-active") {
      this.setState(prevState => ({
        modalClass: (prevState.header[0].modalClass = "active"),
      }))
      ReactGA.event({
        category: "menuButton",
        action: "click",
      })
    } else if (this.state.header[0].modalClass === "active") {
      this.setState(prevState => ({
        modalClass: (prevState.header[0].modalClass = "not-active"),
      }))
    }
  }

  toggleSearch = () => {
    if (this.state.header[0].searchClass === "not-active") {
      this.setState(prevState => ({
        searchClass: (prevState.header[0].searchClass = "active"),
      }))
      ReactGA.event({
        category: "searchButton",
        action: "click",
      })
    } else if (this.state.header[0].searchClass === "active") {
      this.setState(prevState => ({
        searchClass: (prevState.header[0].searchClass = "not-active"),
      }))
    }
  }

  render() {
    if (typeof window !== "undefined") {
      if (
        this.state.header[0].searchClass === "active" ||
        this.state.header[0].modalClass === "active"
      ) {
        document.querySelector("html").style.overflow = "hidden"
      } else {
        document.querySelector("html").removeAttribute("style")
      }
    }

    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              toggleMenu={this.toggleMenu}
              toggleSearch={this.toggleSearch}
            />
            {children}
            <Footer
              modalClass={this.state.header[0].modalClass}
              searchClass={this.state.header[0].searchClass}
              toggleMenu={this.toggleMenu}
              toggleSearch={this.toggleSearch}
              customClass='gradient'
            />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
