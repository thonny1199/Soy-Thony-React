import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";


const contactSocial = () => (
  <div  className="text-center mt-5">
    <a  className="a mx-2" href="https://www.linkedin.com/in/anthony-marin-69366218a/">
      <i  className="fab fa-github fa-2x m-2" aria-hidden="true">
      </i>
    </a>
    <a  className="a mx-2" href="https://github.com/AnthonyDaniel">
      <i  className="fab fa-linkedin fa-2x m-2" aria-hidden="true">
      </i>
    </a>
    <a  className="a mx-2 " href="https://www.facebook.com/anthony.marin.5836711">
      <i  className="fab fa-facebook-f fa-2x m-2" aria-hidden="true">
      </i>
    </a>
    <a  className="a mx-2" href="https://www.instagram.com/thonny1199/">
      <i  className="fab fa-instagram fa-2x m-2" aria-hidden="true">
      </i>
    </a>
  </div>
);

export default contactSocial;
