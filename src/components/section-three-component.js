import React from "react"
import RepeatedInverseColumns from './repeated-columns-component.js'

const SectionThree = props => (

      <section id="section-three" className="section content-section">
        <div className="container expand">
          <h2 className="text-md-center">{props.heading}</h2>
        </div>
        {props.columnObj.map( (elem, index) => 
          <RepeatedInverseColumns 
            key={index}
            headingOne={elem.headingOne}
            paragraphOne={elem.paragraphOne}
            svgOne={elem.svgOne}
            headingTwo={elem.headingTwo}
            paragraphTwo={elem.paragraphTwo}
            svgTwo={elem.svgTwo}
          />     
        )}      
      </section>
)

export default SectionThree
