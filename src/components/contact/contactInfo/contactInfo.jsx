import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox  
            icon="fas fa-map-marker fa-3x"
            textLine1="Costa Rica, Guanacaste, Liberia"
            textLine2="25 metros sur de la OIJ"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon="fab fa-whatsapp fa-3x" 
            textLine1="+506 8371-4550"
            textLine2=""
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon="far fa-envelope fa-3x"
            textLine1="anthonymmarinbolivar@gmail.com"
            textLine2=""
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
