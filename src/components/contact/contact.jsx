import React from "react";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import ContactInfo from './contactInfo/contactInfo';
import ContactSocial from './contactInfo/contactSocial';

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="wrapper">
          <ContactInfo />
          <ContactSocial />
        </div>
      </div>
    );
  }
};

export default Contact;
