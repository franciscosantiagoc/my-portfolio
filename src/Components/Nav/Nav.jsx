import "./Nav.scss";
import logo from "./../../assets/img/logo.png";

import { animateScroll as scroll, Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faAddressCard,
  faUsersGear,
  faFolderPlus,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
export default function Nav() {

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="header">
      <nav className="menu">
        <div className="namePage" onClick={scrollTop}>
          <img className="imgLogo" src={logo} alt="Logo Portafolio Francisco" />
        </div>
        <ul className="options">
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
          >
            <li>
              <FontAwesomeIcon icon={faHouseChimney} /> Inicio
            </li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
          >
            <li>
              <FontAwesomeIcon icon={faAddressCard} /> Información
            </li>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
          >
            <li>
              <FontAwesomeIcon icon={faUsersGear} /> Skills
            </li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
          >
            <li>
              <FontAwesomeIcon icon={faFolderPlus} /> Proyectos
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <li>
              <FontAwesomeIcon icon={faAddressBook} /> Contacto
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
