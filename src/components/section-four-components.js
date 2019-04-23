import React from "react"
import SolidCurvySVG from "../images/solid-curvy-bg.svg"
import RepeatedArticle from "./repeated-article.js"

const SectionFour = props => (
  <section id="section-four" className="section">
    <div className="svg-wrapper">
      <SolidCurvySVG />
    </div>
    <div className="container">
      <div className="child-one content content-box inverse">
        <h2 className="inverse">
          {props.childOneHeadingBefore}
          <br />
          {props.childOneHeadingAfter}
        </h2>
        <p className="inverse">{props.childOneParagraph}</p>
        <a href={props.childOneCtaURL} className="cta-link">
          {props.childOneCtaTEXT}{" "}
        </a>
      </div>

      <div className="child-two testimonial-parent content-box content inverse">
        <div className="testimonial-block">
          <div className="">
            <p>“{props.childTwoTestimonialText}”</p>
            <div className="testimonial-row">
              <div className="testimonial-image">
                <div className="content">
                  <img
                    alt="netlify-analytics-dashboard"
                    src={props.childTwoTestimonialImage}
                  />
                </div>
              </div>
              <div className="testimonial-description">
                <div class="content">
                  <h6>{props.childTwoTestimonialName},</h6>
                  <p>{props.childTwoTestimonialTwitterHandle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="child-three content-box content inverse">
        <div className="heading-box text-center">
          <h2 className="inverse text-left text-md-center">
            {props.childThreeHeading}
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="image-box">
              <img
                alt="netlify-analytics-dashboard"
                src={props.childThreeImage}
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="content-box">
              {props.articleObj.map((elem, index) => (
                <RepeatedArticle
                  key={index}
                  heading={elem.heading}
                  desc={elem.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SectionFour
