import React from "react"

const SectionTwo = props => (

      <section id="section-two" className="section content-section section--after-curve">
        <div className="container">
              <div className="content content-box">
                <h2>{props.heading}</h2>
                <p className="sub-title">{props.subtitle}</p>
                <p>{props.paragraph}</p>
              </div>
        </div>
      </section>
)

export default SectionTwo
