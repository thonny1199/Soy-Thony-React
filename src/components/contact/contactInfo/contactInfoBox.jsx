import React from "react";

import "./contactInfoBox.scss";






const contactInfoBox = (props) => (
  <div className="contact__info-box">
    <div>
      <i className={props.icon}></i>
    </div>
    <div>
      <p>{props.textLine1}</p>
      <p>{props.textLine2}</p>
    </div>
  </div>
);

export default contactInfoBox;
