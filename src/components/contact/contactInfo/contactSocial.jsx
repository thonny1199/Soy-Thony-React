import React from "react";
import "./contactSocial.scss";

const contactSocial = () => (
  <div  className="text-center mt-5">
    <a  className="a mx-2" href="https://github.com/AnthonyDaniel" target={'_blank'}>
      <i  className="fab fa-github fa-2x m-2" aria-hidden="true">
      </i>
    </a>
    <a  className="a mx-2" href="https://www.linkedin.com/in/thony1199" target={'_blank'}>
      <i  className="fab fa-linkedin fa-2x m-2" aria-hidden="true">
      </i>
    </a>
    <a  className="a mx-2 " href="https://www.facebook.com/anthony.marin.5836711" target={'_blank'}>
      <i  className="fab fa-facebook-f fa-2x m-2" aria-hidden="true">
      </i>
    </a>
    <a  className="a mx-2" href="https://www.instagram.com/thonny1199/" target={'_blank'}>
      <i  className="fab fa-instagram fa-2x m-2" aria-hidden="true">
      </i>
    </a>
  </div>
);

export default contactSocial;
