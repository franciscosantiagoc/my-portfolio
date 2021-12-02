import style from '../assets/styles/Nav.module.css';
//import {NavLink} from 'react-router-dom'
import { animateScroll as scroll, Link } from 'react-scroll';
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

  const scrollTop = ()=>{
    scroll.scrollToTop();
  }
    return (
      <header className={style.header}>
        <nav className={style.menu}>
          <div className={style.menuContainer}>
            <div className={style.namePage} onClick={scrollTop}>
              <img className={style.imgLogo} src={logo} alt="Logo" />
              <h2>Mi Portafolio</h2>
            </div>
            <ul className={style.options}>
              <Link activeClass={style.active} to="home" smooth={true} duration={500} spy={true}  offset={-100}><li>Inicio</li></Link>
              <Link activeClass={style.active} to="about" smooth={true} duration={500} spy={true}  offset={-100}><li>Información</li></Link>
              <Link activeClass={style.active} to="skills" smooth={true} duration={500} spy={true}  offset={-100}><li>Skills</li></Link>
              <Link activeClass={style.active} to="projects" smooth={true} duration={500} spy={true} offset={-100}><li>Proyectos</li></Link>
              <Link activeClass={style.active} to="contact" smooth={true} duration={500} spy={true}  offset={-80}><li>Contacto</li></Link>
            </ul>
          </div>
          <button onClick={displayMenu}><FontAwesomeIcon icon={faBars}/></button>
        </nav> 
  
      </header>
    );
  }