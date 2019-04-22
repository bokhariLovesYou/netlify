import React, { Component } from "react"

class RepeatedArticle extends Component {
  render() {
    let index = this.props.index;

    return (
            <article>
              <h3 className="inverse">{this.props.heading}</h3>
              <p>{this.props.desc}</p>
            </article>
          )
        }
      }

export default RepeatedArticle
