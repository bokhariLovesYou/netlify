import React from "react"
import NetlifyBannerSVG from "../images/netlify.svg"

const HeroComponent = props => (

      <section id="section-one" className="section inverse">
        <div className="svg-wrapper">
          <NetlifyBannerSVG />
        </div>
        <div className="container">
          <div class="content content-box">
            <h1 className="inverse">{props.heading}</h1>
            <p>{props.paragraph}</p>
            <a onClick={props.buttonClick} href={props.buttonURL}><button className="global-button">{props.buttonText}</button></a>
          </div>
        </div>
      </section>
)

export default HeroComponent
