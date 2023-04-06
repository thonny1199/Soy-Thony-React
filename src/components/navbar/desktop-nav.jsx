import React from "react";
import { Link as Link2 } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import LogoImg from "../../assets/SoyThony.png";
import MobileMenuIcon from "../../assets/navbar/mobile-menu.svg";
import { Link, useLocation, Navigate } from "react-router-dom";

const DesktopNav = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}
    >
      <div className="wrapper flex-s-between">
        <div>
          {isHomePage ? (
            <Link2 to="hero" spy={true} smooth={true} offset={0} duration={500}>
              <img
                loading="lazy"
                src={LogoImg}
                alt="logo"
                className="pointer logo"
              />
            </Link2>
          ) : (
            <Link to="/" spy={true} smooth={true} offset={0} duration={500}>
              <img
                loading="lazy"
                src={LogoImg}
                alt="logo"
                className="pointer logo"
              />
            </Link>
          )}
        </div>
        <div className="mobile__menu" onClick={props.mobileMenuOpen}>
          <img loading="lazy" src={MobileMenuIcon} alt="menu" className="" />
        </div>
        {isHomePage ? (
          <div className="desktop__menu">
            <ul className="flex-s-between">
              <li>
                <Link2
                  activeClass="active-link"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  PORTFOLIO
                </Link2>
              </li>
              <li>
                <Link2
                  activeClass="active-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ABOUT
                </Link2>
              </li>
              <li>
                <Link
                  to="/history"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  CARTOON
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="desktop__menu">
            <ul className="flex-s-between">
              <li>
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
                  CARTOON
                </Link2>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
