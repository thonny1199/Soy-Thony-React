import React, { useState } from "react";
import { Link } from "react-scroll";
import "../hero/hero.scss";
import HeroImage from "../../assets/angel-demon.jpeg";
import { FaBars } from "react-icons/fa";

const Histories = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <div className={`float-menu ${isMenuVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Introducción
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 1
            </Link>
          </li>
        </ul>
        <button className="menu-button" onClick={toggleMenu}>Cerrar menú</button>
      </div>
      <div
        className="floating-button"
        onClick={toggleMenu}
        style={{ display: isMenuVisible ? "none" : "block" }}
      >
        <FaBars />
      </div>
      <div className="hero2" id="hero">
        <div className="wrapper">
          <div className="hero-info2 mt-1">
            <h1 className="weight800 font40 mt-1">
              El amor que trasciende el tiempo
            </h1>
            <p className="font16">
              <img
                style={{
                  width: "50%",
                  float: "left",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
                loading="lazy"
                src={HeroImage}
                alt="hero"
              />
              Hace mucho, mucho tiempo, antes de que el universo tomara forma,
              existían dos razas poderosas que habitaban los reinos celestiales
              y los oscuros abismos: los dioses y los demonios. Cada uno tenía
              su propia forma de vida, habilidades y propósitos, pero nunca se
              llevaban bien entre sí. Estaban inmersos en una guerra eterna,
              cada uno luchando por la supremacía en el universo.
              <br></br>
              En medio de esta guerra sin fin, en la que los humanos estaban
              atrapados en el medio, surgieron historias de un amor prohibido
              entre un demonio y un ser celestial. Nadie sabe con certeza si
              estas historias son verdaderas, pero su amor fue lo
              suficientemente poderoso como para trascender las barreras
              impuestas por sus propias razas.
              <br></br>
              Esta es la historia de su amor, una historia que se desarrolla en
              medio de la Gran Guerra entre dioses y demonios, con los humanos
              tratando de sobrevivir en un mundo en constante caos y
              destrucción. Los humanos, aunque eran los más débiles y carecían
              de habilidades y poderes sobrenaturales, eran una parte importante
              de la ecuación. Su destino estaba estrechamente ligado al de los
              dioses y los demonios en una guerra que amenazaba con destruir
              todo lo que conocían.
              <br></br>
              Acompaña a estos dos seres en su viaje a través de los siglos y
              descubre cómo su amor sobrevivió a pesar de las barreras impuestas
              por sus propias razas y cómo su amor trascendió todas las barreras
              para convertirse en una leyenda que se contaría durante
              generaciones.
            </p>
          </div>
        </div>
      </div>
      <div className="" id="chapter1">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1">
              Capitulo 1: La Caída del Gran Rey de Babilonia
            </h1>
            <p className="font16">
              Proximamente,......
              <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
              <br></br> <br></br> <br></br> <br></br> <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histories;
