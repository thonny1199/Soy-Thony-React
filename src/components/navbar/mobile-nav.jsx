import React from "react";
import { Link as Link2 } from "react-scroll";
import "./navbar.scss";
import Logo from "../../assets/SoyThony.png";
import { Link, useLocation, Navigate } from "react-router-dom";

const MobileNav = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
      <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
        <i class="far fa-times-circle fa-4x"></i>
      </div>
      <div className="mobile__navbar-logo flex-center">
        {isHomePage ? (
          <Link2
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            <img loading="lazy" src={Logo} alt="logo" />
          </Link2>
        ) : (
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            <img loading="lazy" src={Logo} alt="logo" />
          </Link>
        )}
      </div>
      <div className="mobile__navbar-menu">
        {isHomePage ? (
          <ul>
            <li className="flex-center">
              <Link2
                className="colorBlack"
                activeClass="active-link"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={props.closeMobileMenu}
              >
                PORTFOLIO
              </Link2>
            </li>
            <li className="flex-center">
              <Link2
                className="colorBlack"
                activeClass="active-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={props.closeMobileMenu}
              >
                ABOUT
              </Link2>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="flex-center">
              <Link2
                style={{ cursor: "pointer" }}
                className="colorBlack"
                activeClass="active-link"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={props.closeMobileMenu}
              >
                History
              </Link2>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
