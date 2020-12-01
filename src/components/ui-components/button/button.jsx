import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./button.scss";

const hero = (props) => (
  <div className="button">
    <a
      className="button-link"
      href="https://wa.me/+50683714550"
      target="_blank"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
      {props.label}
    </a>
  </div>
);

export default hero;
