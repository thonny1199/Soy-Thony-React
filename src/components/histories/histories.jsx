import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../hero/hero.scss?t=30";
import HeroImage from "../../assets/angel-demon.jpeg";
import Castillo from "../../assets/castillo-babilonea.jpeg";
import Enigma from "../../assets/enigmademoniaco.png";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const checkAge = (navigate) => {
  const isOver18 = localStorage.getItem("isOver18");

  if (isOver18 === null) {
    Swal.fire({
      title: "Advertencia",
      text: "El contenido de esta página puede ser sexual, violento, etc. ¿Eres mayor de 18 años?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, soy mayor de 18 años",
      cancelButtonText: "No, no soy mayor de 18 años",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("isOver18", "true");
      } else {
        localStorage.setItem("isOver18", "false");
        navigate("/home");
      }
    });
  } else if (isOver18 === "false") {
    Swal.fire({
      title: "Lo sentimos",
      text: "No puedes ver este contenido.",
      icon: "error",
      confirmButtonText: "Entendido",
    });
    localStorage.setItem("isOver18", null);
    setTimeout(() => {
      navigate("/home");
    }, 500);
  }
};

const Histories = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAge(navigate);
  }, []);

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
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 2
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 3
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 4
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 5
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter6"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 6
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter7"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 7
            </Link>
          </li>
          <li>
            <Link
              className="colorBlack"
              activeClass="active-link"
              to="chapter8"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              Capítulo 8
            </Link>
          </li>
        </ul>
        <button className="menu-button" onClick={toggleMenu}>
          Cerrar menú
        </button>
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
            <h1 className="weight800 font40 mt-1 text-center big__title">
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
      <div id="chapter1">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capitulo 1: La Caída del Gran Rey de Babilonia
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
                src={Castillo}
                alt="hero"
              />
              Estoy cansado de mi vida en Ruthemburg. Todos los días me levanto
              en mi humilde casa de piedra y paja, rodeado del absoluto
              desamparo que me consume. Las ratas corretean por el suelo y el
              agua está contaminada, pero extrañamente no me enfermo. Parece que
              cuento con el favor de los dioses, aunque ellos son seres
              detestables que no hacen nada por ayudarnos, los mortales. Somos
              frágiles y efímeros, mientras que ellos gozan de la inmortalidad y
              el poder supremo. Pero lo peor de todo es el maldito rey, que nos
              exige de todo y no hace nada por nosotros. Si no le pagamos sus
              impuestos, nos asesina, incendia nuestras casas, ultraja y mata a
              las mujeres... Estoy solo en esta vida, nunca conocí a mi madre y
              no sé nada de mi padre, aunque probablemente esté muerto. No me
              interesa saber quién era, pero a veces me pregunto si las cosas
              habrían sido diferentes si mi madre hubiera estado conmigo. En
              cambio, me siento solo, un maldito bastardo en esta vida sin nada
              que perder.
              <br></br>
              Sin embargo, hay algo que me aferra a la vida. Un collar que
              perteneció a mi madre, una estrella brillante de oro y plata que
              cuelgó de mi cuello. Nunca conocí a mi madre, solo sé que alguien
              la mató y le robó el collar. Pero tengo la sensación de que hay
              algo más en él, algo que podría cambiar mi vida y la de mi pueblo
              para siempre. ¿Podría ser este el momento de hacer algo al
              respecto?
              <br></br>
              Un día, el Rey Bael bajó al pueblo con su ejército para llevar a
              cabo ejecuciones públicas de aquellos que no habían pagado sus
              impuestos. Bael estaba rodeado de sus soldados y estaba dando un
              discurso para amedrentar a todos los presentes. Nos advirtió que
              eso les pasaría a todos aquellos que no fueran sumisos y aquellos
              que no le rindieran devoción. Yo estaba entre la multitud de
              personas que estaban siendo obligadas a asistir, y mientras
              observaba la escena, noté que el collar que llevaba Bael era
              extrañamente familiar. Entonces me di cuenta de que era el mismo
              collar que pertenecía a mi madre, la estrella brillante de oro y
              plata que había estado buscando durante años.
              <br></br>
              Sentí una ira ardiente en mi interior y un deseo de venganza al
              ver el collar que había sido robado de mi madre por el mismo rey
              que ahora estaba masacrando a mi pueblo. Fue en ese momento que
              decidí que debía hacer algo al respecto y planear la caída del Rey
              Bael.
              <br></br>A partir de ese instante, comencé a recopilar información
              sobre el Rey Bael y su ejército, encontrándome con otros
              disidentes del pueblo que también estaban cansados del cruel y
              opresivo gobierno del Rey. Juntos, empezamos a planear cómo
              podríamos derrotar al Rey y liberar al pueblo de su tiranía.
              <br></br>
              Sabía que no sería fácil, pero estaba decidido a luchar por la
              justicia y la libertad de mi pueblo. A medida que los días
              pasaban, nuestra resistencia clandestina crecía en fuerza y
              número.
              <br></br>
              Pronto, un grupo de líderes surgió dentro de la resistencia. Entre
              ellos se encontraba Alaric, un hombre fuerte y astuto que solía
              ser un soldado en el ejército del Rey Bael antes de desertar.
              También estaba Livia, una mujer inteligente y valiente que había
              perdido a su familia a manos del cruel rey. Y, por supuesto,
              estaba yo, Andras, guiado por la venganza y el deseo de justicia.
              <br></br>
              Juntos, trazamos un plan para infiltrarnos en el castillo y
              enfrentarnos al Rey Bael. Decidimos aprovechar la noche de la gran
              fiesta en honor al cumpleaños del rey, cuando sus soldados
              estarían distraídos y él se sentiría más seguro. Nos disfrazamos
              de sirvientes, usando ropas oscuras y llevando bandejas de comida
              y bebida.
              <br></br>
              Al llegar al castillo, nos separamos para ejecutar nuestro plan.
              Livia y yo nos dirigimos a la sala de armas, donde preparamos una
              trampa para incendiar el castillo en cuanto se diera la señal.
              Mientras tanto, Alaric y un grupo de nuestros compañeros rebeldes
              se encargaron de sabotear las puertas del castillo para evitar que
              los soldados pudieran movilizarse rápidamente.
              <br></br>
              Cuando todo estuvo listo, Alaric dio la señal y el fuego comenzó a
              devorar el castillo. El pánico se apoderó de la fiesta, y los
              soldados del rey se encontraron luchando contra las llamas y el
              caos. Nuestros compañeros rebeldes aprovecharon la oportunidad
              para atacar a los soldados desprevenidos, luchando con valentía a
              pesar de estar en desventaja numérica.
              <br></br>
              Uno a uno, nuestros amigos cayeron ante el ejército del rey,
              siendo abatidos y decapitados en una brutal masacre. Livia y
              Alaric lucharon hasta el final, demostrando su valentía y
              sacrificio por nuestra causa. Con el corazón lleno de dolor, pero
              también de determinación, me abrí paso entre el caos y las llamas,
              buscando al Rey Bael.
              <br></br>
              Finalmente, lo encontré en el trono, rodeado de sus guardias más
              leales pero vulnerable ante la destrucción que lo rodeaba. El rey
              Bael era un hombre alto y corpulento, con una larga barba negra y
              ojos fríos y despiadados. Llevaba una armadura dorada que
              reflejaba el resplandor del fuego, y en su mano, sostenía la
              espada que había segado tantas vidas inocentes.
              <br></br>
              Me enfrenté a él, mirándolo fijamente mientras mi ira y
              desesperación crecían. Aunque sabía que las posibilidades de salir
              con vida eran escasas, estaba decidido a enfrentarlo y hacerle
              pagar por todos los horrores que había infligido a mi pueblo.
              <br></br>
              Andras se lanzó al ataque, desatando su furia contenida contra los
              guardias que protegían al Rey Bael. Con una velocidad y agilidad
              sorprendentes, esquivó y bloqueó cada golpe dirigido hacia él,
              mostrando habilidades de combate que parecían sobrehumanas. A
              medida que avanzaba hacia el rey, cada guardia que enfrentaba
              encontraba un destino brutal y sangriento.
              <br></br>
              Uno de los guardias, un hombre alto y musculoso con una armadura
              pesada, intentó golpear a Andras con un hacha. Pero Andras evadió
              el ataque y, en un giro rápido, le arrancó el corazón con su
              espada, recordando cómo los soldados del rey habían hecho lo mismo
              con los aldeanos indefensos.
              <br></br>
              Otro guardia, un arquero ágil, intentó dispararle a Andras desde
              lejos. Sin embargo, Andras fue más rápido y, usando su espada,
              reflejó la flecha hacia el arquero, atravesándolo en la garganta.
              Andras recordó a las mujeres y niños que habían sido asesinados
              por arqueros como él y siguió adelante.
              <br></br>
              El último guardia en su camino era un espadachín experimentado con
              una armadura ornamentada y una espada afilada. Intentó desarmar a
              Andras, pero Andras, con sus reflejos increíbles, logró esquivar
              los ataques. Con un grito lleno de ira y determinación, Andras
              mutiló las manos del espadachín y, con un último golpe, le cortó
              la cabeza. Andras recordó a los aldeanos que habían sido
              torturados y ejecutados por soldados como este y sintió que su
              venganza estaba cerca.
              <br></br>
              Exhausto pero lleno de adrenalina, Andras finalmente se encontró
              cara a cara con el Rey Bael, con todos los militares muertos y
              toda la resistencia caída. Solo quedaban ellos dos, y el fuego del
              castillo ardía a su alrededor, iluminando la escena con un
              resplandor infernal.
              <br></br>
              "¿Quién eres tú?" preguntó el Rey Bael con desprecio, sin poder
              ocultar el miedo en sus ojos.
              <br></br>
              "Soy Andras, hijo de aquellos a los que has oprimido y destruido,"
              respondió Andras con firmeza. "Y estoy aquí para hacer justicia
              por mi pueblo."
              <br></br>
              Con las palabras finales de desafío, Andras levantó su espada y se
              preparó para el último enfrentamiento con el tirano que había
              gobernado su vida y la de su pueblo con crueldad y opresión. El
              destino de ambos y del reino entero se decidiría en los próximos
              momentos, mientras el fuego y la venganza ardían en sus corazones.
              <br></br>
              Justo cuando Andras estaba a punto de atacar al Rey Bael, una
              figura etérea apareció de repente frente a ellos. Era Kira, una
              diosa de alto rango que irradiaba una belleza inmaculada. Con piel
              blanca como la nieve, cabello blanco como la seda y ojos color
              miel que parecían ver directamente en el alma, su presencia era
              casi insoportablemente hermosa.
              <br></br>
              Kira levantó una mano, y una barrera mágica se formó entre Andras
              y el Rey Bael, impidiendo que la espada de Andras alcanzara a su
              enemigo. Fue entonces cuando Andras notó un cambio en sí mismo,
              como si un poder oculto y antiguo hubiera sido liberado en su
              interior. Sus ojos se volvieron como los de un lobo, su piel se
              tornó aún más pálida y sus uñas crecieron largas y afiladas. Su
              voz se volvió más profunda y resonante, y habló con la autoridad
              de un demonio de élite.
              <br></br>
              Kira habló en tono calmado pero firme, "Detén esta violencia,
              Andras. No puedes matar al Rey Bael, ya que él es el guardián del
              collar sagrado, un objeto que mantiene el equilibrio entre dioses
              y demonios. Si lo matas, desatarás el caos en ambos mundos y
              provocarás la destrucción de todo lo que conoces."
              <br></br>
              Andras frunció el ceño, desconcertado pero incapaz de negar la
              verdad en sus palabras. Miró a Bael, quien lucía una sonrisa de
              triunfo al saber que estaba protegido por Kira y el destino del
              collar.
              <br></br>
              Kira continuó: "Andras, aunque has sido criado como humano, en
              realidad eres un demonio de élite, hijo de una unión prohibida
              entre un demonio y un ser celestial. Esa es la razón de tu poder y
              habilidades sobrenaturales. No permitas que tu sed de venganza
              desate una catástrofe en este mundo."
              <br></br>
              El corazón de Andras estaba lleno de conflicto. Aunque deseaba
              vengarse por su pueblo, no quería ser responsable de la
              destrucción de todo lo que conocía. Miró a Kira, cuya presencia
              parecía calmar el fuego ardiente en su interior.
              <br></br>
              Con un profundo suspiro, Andras bajó su espada, permitiendo que la
              barrera mágica de Kira desapareciera. El Rey Bael, todavía
              temblando de miedo, miró a Andras y Kira, incapaz de comprender
              completamente lo que había sucedido.
              <br></br>
              Así comenzó una conversación entre Andras, Kira y el Rey Bael, en
              la que trataron de encontrar una solución pacífica al conflicto.
              Pero el corazón de Andras estaba lleno de odio y rencor, y la
              venganza seguía siendo su principal motivación. A pesar de las
              palabras de Kira y las súplicas del Rey Bael, Andras no podía
              perdonar al tirano por todo el sufrimiento que había causado a su
              pueblo.
              <br></br>
              En un momento de furia cegadora, Andras levantó nuevamente su
              espada y la hundió en el pecho del Rey Bael, atravesando su
              corazón. La sangre brotó del cuerpo del Rey, salpicando el suelo y
              manchando las manos de Andras con un rojo oscuro. La vida se
              desvaneció rápidamente de los ojos de Bael mientras su cuerpo caía
              al suelo, ya sin vida.
              <br></br>
              Kira, horrorizada por lo que acababa de presenciar, intentó
              detener a Andras, pero ya era demasiado tarde. Los dos se
              enfrentaron en una pelea feroz pero breve, dejándolos a ambos
              debilitados y exhaustos. Al darse cuenta de que no podían seguir
              luchando, Kira utilizó sus últimos recursos de energía para
              teletransportarse a una isla cercana, lejos del castillo en
              llamas. Andras, sin embargo, quedó atrás, consumido por su ira y
              deseo de venganza.
              <br></br>
              Con la muerte del Rey Bael y la desaparición del collar sagrado,
              que Kira había tomado consigo, el equilibrio entre las razas se
              vio gravemente afectado. La furia de Andras no conocía límites, y
              en un estallido de poder liberó su verdadera naturaleza demoníaca,
              desatando una ola de destrucción que arrasó con todo el reino.
              Kira, desde la lejana isla, solo pudo mirar con horror mientras el
              mundo que conocían comenzaba a desmoronarse.
              <br></br>
              El poder liberado por Andras había desencadenado el inicio de la
              Gran Guerra, una batalla que enfrentaría a dioses y demonios, y
              sumiría a la humanidad en un abismo de caos y desesperación. La
              isla se convirtió en el refugio de Kira, mientras Andras, lleno de
              remordimiento por sus acciones, se propuso buscar el collar
              sagrado y encontrar una manera de restaurar el equilibrio en el
              mundo.
            </p>
          </div>
        </div>
      </div>

      <div id="chapter2">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 2: La elección de Andras
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
                src={Enigma}
                alt="enigma"
              />
              Andras se encontraba solo en el castillo en ruinas, la desolación
              y la destrucción rodeándolo como un sombrío recordatorio de sus
              acciones. La culpa lo invadía, y se daba cuenta de que debía
              encontrar una manera de reparar lo que había hecho. Sin embargo,
              el collar sagrado había desaparecido, y con él la esperanza de
              restaurar el equilibrio en el mundo.
              <br></br>
              Mientras vagaba por el castillo destruido, Andras se encontró con
              una enigmática figura demoníaca, que había estado oculta en las
              sombras del castillo del Rey Bael. La figura le contó que había
              visto a Kira teletransportarse a la isla cercana, llevándose el
              collar sagrado consigo. Además, le reveló que existía un antiguo
              ritual que podría detener la Gran Guerra y restablecer la armonía
              en el mundo.
              <br></br>
              Para llevar a cabo el ritual, Andras debía tomar una decisión
              crucial. La figura demoníaca le sugirió que debía abandonar su
              naturaleza demoníaca. Andras siempre había sido alguien bueno y
              estaba convencido de que su verdadera naturaleza no era
              completamente maligna. En el fondo de su corazón, había una chispa
              de bondad y un deseo de redención.
              <br></br>
              Engañado por la figura demoníaca, Andras accedió a realizar el
              ritual, creyendo que podría ayudar a estar en armonía consigo
              mismo y con el universo. Sin embargo, el ritual no suprimió su
              parte demoníaca, sino que liberó al demonio interior,
              fortaleciendo su poder y su vínculo con el lado oscuro. Al
              completar el ritual, la figura demoníaca desapareció con una risa
              siniestra, dejando a Andras a merced de sus oscuros impulsos.
              <br></br>
              Mientras tanto, Kira, en su isla refugio, también experimentaba un
              cambio. Había sentido el sufrimiento de Andras y su deseo de
              redención, y aunque al principio estaba resentida por sus
              acciones, comenzó a comprender que él también era una víctima de
              las circunstancias. Con la esperanza de que juntos podrían
              encontrar una solución, Kira se preparó para el inevitable
              encuentro con Andras, mientras la sombra de la Gran Guerra se
              cernía sobre el horizonte.
              <br></br>
              Atraído por el poder del collar sagrado y consumido por su oscuro
              deseo, Andras siguió a Kira hasta la isla. Cuando la encontró, su
              ira y confusión lo impulsaron a atacarla. Sin embargo, Kira pudo
              ver en su corazón que no todo en Andras era maldad. A pesar de su
              intento de asesinarla, ella pudo sentir la bondad que aún residía
              en su alma.
              <br></br>
              Con determinación y compasión, Kira decidió enfrentarse a Andras y
              mostrarle que aún había esperanza. La batalla entre ellos comenzó
              en una cueva iluminada por la luz de las estrellas que se filtraba
              a través de las grietas en el techo. Kira, con su velocidad y
              agilidad sobrenaturales, esquivaba cada uno de los poderosos
              golpes de Andras, que se movía como un torbellino de furia y
              destrucción.
              <br></br>
              Las chispas volaban mientras sus armas chocaban una y otra vez,
              cada impacto resonando a través de la cueva. A medida que la pelea
              se intensificaba, ambos oponentes desataban habilidades cada vez
              más espectaculares y devastadoras. La cueva se llenaba de energía
              y los elementos se desataban, con llamas y rayos que se
              arremolinaban en un frenesí descontrolado.
              <br></br>
              Finalmente, Kira reunió toda su fuerza y, con un grito lleno de
              determinación, desencadenó un ataque de energía divina que
              atravesó las defensas de Andras y lo lanzó contra la pared de la
              cueva. El impacto lo dejó inconsciente, y su aspecto demoníaco
              comenzó a retroceder lentamente.
              <br></br>
              Pasaron tres días antes de que Andras despertara. Cuando lo hizo,
              se encontró semidesnudo, amarrado de manos y pies. Confundido y
              desorientado, notó a Kira a su lado, quien le explicó que había
              lavado su ropa y lo había atado con enredaderas y hojas de la
              isla, para evitar que intentara escapar o atentar contra ella en
              la noche.
              <br></br>
              Kira le sonrió con picardía y admitió que sí, lo había visto
              desnudo. No solo eso, sino que también había tenido que desnudarlo
              ella misma para lavar su ropa. La tensión entre ellos se volvió
              palpable, y Kira comenzó a recordar el momento en que lo había
              desvestido. Al principio, había sido tímida e inocente, pero a
              medida que avanzaba, su curiosidad la había llevado a explorar más
              de lo necesario.
              <br></br>
              Cuando Kira retiró la ropa de Andras, no pudo evitar que sus ojos
              recorrieran cada detalle de su cuerpo. Al principio, se sintió
              apenada por su falta de autocontrol, pero su interés se convirtió
              en algo más juguetón y travieso. En un momento dado, su mano había
              rozado "accidentalmente" una parte más íntima de Andras, lo que
              provocó una reacción sorprendente. Kira se ruborizó al recordarlo,
              pero al mismo tiempo, una sonrisa maliciosa se dibujó en su
              rostro.
              <br></br>
              Andras, al ver la expresión de Kira, no pudo evitar sentirse
              incómodo, pero también un poco intrigado. La tensión entre ellos
              se volvió palpable, pero Kira rápidamente cambió de tema, dejando
              a Andras con la mente llena de preguntas y pensamientos
              inquietantes.
              <br></br>
              Le explicó a Andras que necesitaba acceder a su pecho para sellar
              temporalmente su poder demoníaco, y que había utilizado sus
              habilidades para leer sus pensamientos mientras estaba
              inconsciente. Había descubierto que Andras había sido malo debido
              a las circunstancias y que, en el fondo, había bondad en él.
              <br></br>
              Kira completó el ritual para sellar el poder demoníaco de Andras,
              y una vez que terminó, le devolvió su ropa y lo ayudó a ponerse de
              pie. Ambos se quedaron en silencio, sabiendo que el futuro era
              incierto y que el destino del mundo aún estaba en juego. Mientras
              se miraban, una electricidad casi palpable llenaba el aire, y sus
              cuerpos estaban lo suficientemente cerca como para sentir el calor
              del otro.
              <br></br>
              Después de un tiempo, Andras comenzó a hablar sobre lo que había
              pasado. Le contó a Kira cómo el Rey Bael había oprimido a su
              pueblo y cómo había planeado matarlo para liberar a su pueblo.
              Kira escuchó atentamente, sintiendo una mezcla de compasión y
              enojo por lo que había sucedido.
              <br></br>A medida que compartían sus experiencias, un lazo de
              amistad comenzó a formarse entre ellos. Juntos, comenzaron a
              planear cómo enfrentarse al desequilibrio de poder que existía
              ahora en el mundo. Fue entonces cuando Kira le reveló a Andras el
              verdadero propósito del collar sagrado.
              <br></br>
              El collar tenía la capacidad de, con un ritual específico y en un
              lugar sagrado, abrir las puertas tanto del infierno como del mundo
              celestial. Kira explicó que, aunque los demonios, humanos y dioses
              vivían en el mismo mundo, estaban separados entre sí. Los dioses
              de élite eran los únicos que podían acceder al mundo terrenal,
              mientras que solo un demonio de ultra élite podía hacerlo, y aún
              así no podían permanecer mucho tiempo en el mundo terrenal debido
              a que sus energías incompatibles causaban un desgaste en sus
              cuerpos y almas.
              <br></br>
              Kira confesó que ya se encontraba débil por no haber vuelto al
              mundo divino, ya que actualmente estaba cerrado debido al gran
              temor de la guerra. A pesar de ser seres poderosos, la mayoría de
              los seres celestiales eran neutrales y nunca habían peleado, lo
              que los hacía carecer rápidamente de habilidades en combate.
              <br></br>
              Andras, intrigado, le preguntó a Kira por qué él no se sentía
              débil, ya que también tenía una parte demoníaca en su ser. Kira
              especuló que Andras probablemente era un ultra elite del mundo
              demoniaco y que también tenía un lado celestial humano. Supuso que
              la madre de Andras debió haber sido el producto del amor prohibido
              entre una deidad y un ser humano, lo que le otorgaba una energía
              única y un poder inusual. Aunque Kira no podía estar segura de
              estos detalles, su inteligencia y experiencia le permitían hacer
              suposiciones razonables al percibir el poder y la energía de
              Andras.
              <br></br>A medida que compartían sus experiencias y conocimientos,
              Andras y Kira comenzaron a entenderse mejor y a valorar la
              importancia de su unión en la lucha por proteger el equilibrio del
              mundo y evitar que el collar cayera en las manos equivocadas.
              <br></br>
              Con el collar raptado, sería posible abrir las puertas entre los
              reinos, lo que permitiría a los demonios atacar a los dioses o
              incluso destruir el mundo. Comprendiendo la magnitud de lo que
              estaba en juego, Andras y Kira se comprometieron a trabajar juntos
              para proteger el equilibrio del mundo y evitar que el collar
              cayera en las manos equivocadas.
              <br></br>
              Mientras Andras y Kira continuaban compartiendo sus experiencias,
              Kira comenzó a sentirse cada vez más débil debido a la falta de
              energía celestial. Sabía que necesitaba encontrar una manera de
              sobrevivir en el mundo terrenal, y juntos decidieron embarcarse en
              una búsqueda de la verdad, una búsqueda para evitar el conflicto
              entre razas y encontrar un sustituto a la luz divina, un néctar
              sagrado que los dioses consumen en el mundo celestial para reponer
              su energía.
              <br></br>
              En un momento, Kira intentó levantarse, pero su debilidad la hizo
              tambalearse y caer encima de Andras. Sus rostros quedaron
              peligrosamente cerca, a punto de besarse. Sin embargo, Kira
              rápidamente se movió y, con una sonrisa nerviosa, le explicó a
              Andras que necesitaba encontrar algo similar a la luz divina para
              recuperarse.
              <br></br>
              Justo antes de partir en su búsqueda, mientras exploraban la isla
              en busca de pistas, encontraron un antiguo pergamino parcialmente
              enterrado en la arena. Kira, sorprendida, reconoció la escritura
              como un lenguaje divino que solo ella podía interpretar. Al leer
              el pergamino, descubrió que contenía la historia de un amor
              prohibido entre un dios y una humana, quienes resultaron ser los
              antepasados de la madre de Andras.
              <br></br>
              Este descubrimiento inesperado los dejó atónitos y les hizo
              comprender que su búsqueda de la verdad estaba más entrelazada con
              sus propias vidas de lo que habían imaginado. Con esta nueva
              información en mano, Andras y Kira se embarcaron en busca de la
              verdad, decididos a descubrir los secretos de su pasado y
              encontrar una solución para la debilidad de Kira en el mundo
              terrenal. El destino de ambos y del mundo entero estaba en juego,
              y solo juntos podrían encontrar una solución.
            </p>
          </div>
        </div>
      </div>

      <div id="chapter3">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 3: El secreto del collar sagrado
            </h1>
            <p className="font16">
              .....Proximamente (Fecha aproximada 22 de abril 2023)
            </p>
          </div>
        </div>
      </div>

      <div id="chapter4">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 4: El plan de los demonios
            </h1>
          </div>
        </div>
      </div>

      <div id="chapter5">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 5: La traición de un amigo
            </h1>
          </div>
        </div>
      </div>

      <div id="chapter6">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 6: La venganza de los dioses
            </h1>
          </div>
        </div>
      </div>

      <div id="chapter7">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 7: Un nuevo comienzo
            </h1>
          </div>
        </div>
      </div>

      <div id="chapter8">
        <br></br> <br></br>
      </div>
      <div className="">
        <div className="wrapper">
          <div className="hero-info mt-1">
            <h1 className="weight800 font40 mt-1 text-center big__title">
              Capítulo 8: La unión de los mundos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histories;
