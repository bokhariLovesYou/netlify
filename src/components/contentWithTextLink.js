import React from "react"

const ContentWithTextLink = props => (

    <div className="child-one content content-box inverse">
      <h2 className="inverse">{props.childOneHeadingBefore}<br />{props.childOneHeadingAfter}</h2>
      <p className="inverse">{props.childOneParagraph}</p>
      <a onClick={() => props.docsClick('docsButton')} href={props.childOneCtaURL} className="cta-link">{props.childOneCtaTEXT} </a>
    </div>

)

export default ContentWithTextLink
