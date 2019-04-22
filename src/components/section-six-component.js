import React from "react"
const SectionSix = props => (

        <section id="section-six" className="section">
          <div className="container">
            <div className="content small-width-content text-md-center mb-md-4 mb-lg-0">
              <h2>{props.heading}</h2>
              <p>{props.paragraph}</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              
              <div className="col-lg-4 mb-3">
                <div className="content content-box">
                  <div className="custom-card card--dev">
                    <h3 className="inverse">Netlify Dev</h3>
                    <p>Run our entire platform right on your laptop. Preview it all — site generation, functions, and edge logic.</p>
                    <a className="cta-link" href="https://www.netlify.com/products/dev/">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 ">
                <div className="content content-box">
                  <div className="custom-card card--build">
                    <h3>Netlify Build</h3>
                    <p>The Git workflow for web development. Build, deploy, and manage modern web projects.</p>
                    <a className="cta-link" href="https://www.netlify.com/products/build/">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3">
                <div className="content content-box">
                  <div className="custom-card card--edge">
                    <h3>Netlify Edge</h3>
                    <p>A new type of application delivery network custom designed for fast, responsive sites and modern workflows.</p>
                    <a className="cta-link" href="https://www.netlify.com/products/edge/">Learn More</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
)

export default SectionSix
