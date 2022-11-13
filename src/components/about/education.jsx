import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Row, Col } from "react-flexbox-grid";

class Education extends Component {
  render() {
    return(
      <div className="card bg-light mb-3 text-center">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-2">
              <img loading="lazy" src={this.props.img} className="img-fluid" alt="hero" />
            </div>
            <div className="col-10">
              <h3 className="card-title text-center">{this.props.title}</h3>
              <p className="text-left">{this.props.text}</p>
              <p className="text-right">{this.props.fecha}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Education;
