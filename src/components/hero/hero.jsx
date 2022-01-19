import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero.jpg";
//Components
import Button from "../ui-components/button/button";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info mt-5 mt-xl-0">
            <h1 className="weight800 font40 mt-5">
              (MID) FULL STACK DEVELOPER WEB
            </h1>
            <p className="font12">
              Angular | Spring Boot | Unity | Laravel | Bootstrap | React |
              ASP.NET | Nextjs | Gastbyjs
              <br></br>
              C# | Typescript | JavaScript | C++ | Java | PHP | Phyton |
              HTML/CSS/SCSS | SQL | Firebase Services
            </p>
            <Button label="SEND MESSAGE" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
