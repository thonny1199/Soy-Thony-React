import React from "react";
// Scss
import "./projectBox.scss";

const projectBox = (props) => (
  <a href={props.url} target="_blank">
    <div className="portfolio__box">
      <img loading="lazy" style={{ height: "200px" }} src={props.preview} alt="project" />
      <div className="portfolio__hover-info flex-center">
        <div className="text-center">
          <p className="font25 weight800">{props.title}</p>
          <p className="font12 weight500">{props.tag}</p>
        </div>
      </div>
    </div>
  </a>
);

export default projectBox;
