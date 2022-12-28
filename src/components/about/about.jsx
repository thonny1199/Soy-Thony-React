import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Grid, Cell } from "react-mdl";

import "./about.scss";
// Components
import Title from "../ui-components/title/title";
import About from "../../assets/about.jpg";
import Liceo from "../../assets/Liceo.png";
import UNA from "../../assets/UNA.png";
import Decimo from "../../assets/decimo.png";
import Tayassu from "../../assets/tayassu.png";
import CentroCultural from "../../assets/centrocultural.png";

import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img loading="lazy" src={About} alt="hero" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font40">ANTHONY MARÍN BOLÍVAR</h1>
            <p className="font16">
              I am a great technology enthusiast, I love reading about new technologies, new frameworks, new methodologies,..
              <br></br>
              <strong>Address: </strong>
              Cañas, Guanacaste, Costa Rica
              <br></br>
              <strong>Phone: </strong>
              (+506) 8371-4550
              <br></br>
              <strong>Email: </strong>
              anthonymmarinbolivar@gmail.com
            </p>
            <div className="text-center mt-5">
              <a
                className="a" target="_blank"
                href="https://github.com/AnthonyDaniel"
              >
                <i className="fab fa-github fa-3x m-2" aria-hidden="true"></i>
              </a>
              <a className="a" target="_blank" href="https://www.linkedin.com/in/thony1199/">
                <i className="fab fa-linkedin fa-3x m-2" aria-hidden="true"></i>
              </a>
              <a
                className="a" target="_blank"
                href="https://www.facebook.com/anthony.marin.5836711"
              >
                <i
                  className="fab fa-facebook-f fa-3x m-2"
                  aria-hidden="true"
                ></i>
              </a>
              <a className="a"target="_blank" href="https://www.instagram.com/thonny1199/">
                <i
                  className="fab fa-instagram fa-3x m-2"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <div className="row mt-5">
        <div className="col-12 text-center mt-5 mb-4">
          <h1 className="weight800 font28">EDUCATION</h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Education
              img={Liceo}
              title="Liceo Miguel Araya Venegas"
              text="300-hour certificate in advanced microsoft office"
              fecha="2016-2016"
            />
          </h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Education
              img={UNA}
              title="National University of Costa Rica (Graduated)"
              text="Engineering in information systems"
              fecha="2017-2020"
            />
          </h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Education
              img={CentroCultural}
              title="Centro Cultural Costarricense Norteamericano"
              text="Conversational English"
              fecha="2021-2022"
            />
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center mt-4 mb-4">
          <h1 className="weight800 font28">EXPERIENCE</h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Experience
              img={Tayassu}
              text="Thanks to the CEO of Tayassu, Oscar Loría, it has allowed me to do a 6-month internship in a Unity project, which consists of the recreation of a board game."
              fecha="2019 - 6 month"
            />
          </h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Experience
              img={Decimo}
              text="I have had the opportunity to work on different projects, with a good level of design, security and functionalities... I have also guided some developments."
              fecha="2019-Now"
            />
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center mt-4 mb-4">
          <h1 className="weight800 font28">CORE SKILLS</h1>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fab fa-angular fa-3x" text="Angular" domain="90%" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fab fa-react fa-3x" text="React" domain="90%" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fab fa-node-js fa-3x" text="Node Js" domain="90%" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fas fa-power-off fa-3x"
            text="Spring boot"
            domain="90%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-wordpress fa-3x"
            text="Wordpress"
            domain="90%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fab fa-laravel fa-3x" text="Laravel" domain="85%" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-microsoft fa-3x"
            text="Asp.net Core"
            domain="85%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fab fa-react fa-3x" text="React Native" domain="70%" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fas fa-language fa-3x" text="English" domain="60%" />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills icon="fab fa-drupal fa-3x" text="Drupal" domain="60%" />
        </div>
      </div>
    </div>
  </div>
);

export default about;
