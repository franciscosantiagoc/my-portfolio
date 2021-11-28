import style from '../assets/styles/Nav.module.css';
import {NavLink} from 'react-router-dom'
import logo from '../assets/img/code.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
  function displayMenu() {
    let headermenu=document.querySelector('.Nav_header__2iF_j');
    let menu=document.querySelector('.Nav_options__1CWfh');
    let dismen=menu.style.display;
    if(dismen==="" || dismen==="none"){
      menu.style.display="flex";
      headermenu.style.height="250px"
    }else{ 
      menu.style.display="none";
      headermenu.style.height="15%"
    }
  }
    return (
      <header className={style.header}>
        <nav className={style.menu}>
          <div className={style.menuContainer}>
            <div className={style.namePage}>
              <img className={style.imgLogo} src={logo} alt="Logo" />
              <h2>Mi Portafolio</h2>
            </div>
            <ul className={style.options}>
              <NavLink to=""><li>Inicio</li></NavLink>
              <NavLink to=""><li>Información</li></NavLink>
              <NavLink to=""><li>Portafolio</li></NavLink>
              <NavLink to=""><li>Contacto</li></NavLink>
            </ul>
          </div>
          <button onClick={displayMenu}><FontAwesomeIcon icon={faBars}/></button>
        </nav> 
  
      </header>
    );
  }