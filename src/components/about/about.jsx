import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Grid, Cell } from 'react-mdl';

import "./about.scss";
// Components
import Title from "../ui-components/title/title";
import About from '../../assets/about.jpg';
import Liceo from '../../assets/Liceo.png';
import UNA from '../../assets/UNA.png';
import Decimo from '../../assets/decimo.png';
import Tayassu from '../../assets/tayassu.png';

import Education from './education';
import Experience from './experience';
import Skills from './skills';

const about = () => (
  <div id="about">
    <div className="wrapper">
    <Title title="ABOUT US." />
      <Row>
        <Col md={12} lg={6}>
            <div className="hero-image">
              <img src={About} alt="hero" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="hero-info">
              <h1 className="weight800 font40">
                ANTHONY DANIEL MARÍN BOLÍVAR
              </h1>
              <p className="font16">
                Hello! I am Anthony Marín, I am 20 years old, I am from Liberia, Guanacaste, Costa Rica.
                I'm a tech enthusiast, I love programming, I do well on both back-end and front-end.
              <br></br>
              <strong>Address: </strong>
              Liberia, Guanacaste, Costa Rica: Diagonal to the OIJ of Liberia
              <br></br>
              <strong>Phone: </strong>
              (+506) 8371-4550 
              <br></br>
              <strong>Email </strong>
              anthonymmarinbolivar@gmail.com
              </p>
              <div  className="text-center mt-5">
                <a  className="a" href="https://www.linkedin.com/in/anthony-marin-69366218a/">
                  <i  className="fab fa-github fa-3x m-2" aria-hidden="true">
                  </i>
                </a>
                <a  className="a" href="https://github.com/AnthonyDaniel">
                  <i  className="fab fa-linkedin fa-3x m-2" aria-hidden="true">
                  </i>
                </a>
                <a  className="a" href="https://www.facebook.com/anthony.marin.5836711">
                  <i  className="fab fa-facebook-f fa-3x m-2" aria-hidden="true">
                  </i>
                </a>
                <a  className="a" href="https://www.instagram.com/thonny1199/">
                  <i  className="fab fa-instagram fa-3x m-2" aria-hidden="true">
                  </i>
                </a>
              </div>
            </div>
          </Col>
      </Row>
      <div className="row mt-5">
        <div className="col-12 text-center mt-5 mb-4">
          <h1 className="weight800 font28">
            EDUCATION
          </h1>
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
              title="National University of Costa Rica (Studying)"
              text="Engineering in information systems"
              fecha="2017-2020"
            />
          </h1>
        </div>
      </div>
    <div className="row mt-4">
        <div className="col-12 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            EXPERIENCE 
          </h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Experience
              img={Tayassu}
              text="Thanks to the CEO of Tayassu, Oscar Loría, it has allowed me to do a 6-month internship in a Unity project, which consists of the recreation of a board game."
              fecha="2019-19"
            />
          </h1>
        </div>
        <div className="col-12 col-sm-6 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
            <Experience
              img={Decimo}
              text="I have been able to work in WordPress, in ASP.Net core, both back-end and frond-end also, the opportunity to develop in Angular 8, with an e-commerce page."
              fecha="2019-2020"
            />
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center mt-4 mb-4">
          <h1 className="weight800 font28">
              CORE SKILLS
            </h1>
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-angular fa-3x"
            text="Angular"
            domain="90%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-react fa-3x"
            text="React"
            domain="90%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
        <Skills
            icon="fab fa-react fa-3x"
            text="React Native"
            domain="70%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-node-js fa-3x"
            text="Node Js"
            domain="80%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-laravel fa-3x"
            text="Laravel"
            domain="85%"
          />
        </div>
        <div className="col-6 col-sm-4 col-md-3">
          <Skills
            icon="fab fa-microsoft fa-3x"
            text="Asp.net Core"
            domain="85%"
          />
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
            icon="fab fa-language fa-3x"
            text="English"
            domain="40%"
          />
        </div>
      </div>
    </div>
  </div>
);

export default about


