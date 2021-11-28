import style from '../assets/styles/Nav.module.css';
import {NavLink} from 'react-router-dom'
import logo from '../assets/img/code.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
    return (
      <header className={style.header}>
        <nav className={style.menu}>
          <div className={style.menuContainer}>
            <img className={style.imgLogo} src={logo} alt="Logo" />
            <ul className={style.options}>
              <NavLink to=""><li>Inicio</li></NavLink>
              <NavLink to=""><li>¿Quien soy?</li></NavLink>
              <NavLink to=""><li>Portafolio</li></NavLink>
              <NavLink to=""><li>Contacto</li></NavLink>
            </ul>
          </div>
          <button><FontAwesomeIcon icon={faBars}/></button>
        </nav> 
  
      </header>
    );
  }