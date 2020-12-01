import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import { Row, Col } from "react-flexbox-grid";

class Skills extends Component {
  render() {
    return(
      <div className="card bg-light mb-3 text-center">
        <div className="card-body text-center">
          <i className={this.props.icon}></i>
          <h5 className="card-title text-center">{this.props.text}</h5>
          <div class="progress">
            <div className="progress-bar" role="progressbar" style={{width: this.props.domain}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.props.domain}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
