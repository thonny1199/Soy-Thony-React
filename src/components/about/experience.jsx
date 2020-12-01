import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <div className="card bg-light mb-3 text-center">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12 ">
              <div className="row justify-content-center">
                <div className="col-5 text-center">
                 <img src={this.props.img} className="img-fluid"  alt="hero" />
                </div>
              </div>
              <p className="text-left mt-1">{this.props.text}</p>
              <p className="text-right">{this.props.fecha}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;
