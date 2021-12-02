import style from '../assets/styles/AboutMe.module.css';
import style2 from '../assets/styles/Home.module.css';
import aboutimg2 from '../assets/img/aboutme.gif';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

export default function AboutMe() {

    return (
      <section title="About" className={style.container}>
          <div className={style.info}>
            <h3>¿Quien soy?</h3> 
            <p>Hola, yo soy Francisco Santiago de la Cruz. Desarrollador FullStack autodidacta, apasionado por la tecnología y con ganas de seguir aprendiendo.
                Me inicié en el mundo de la programación desde 2014, creando mi primera aplicación de escritorio utilizando Java, posteriormente ir adentrandome en nuevas tecnologías por curiosidad, con la intención de ir aprendiendo nuevas cosas.
                <br/><br/>
                Me considero una persona autodidácta, organizada y constante, a la que le gusta resolver problemas sin temor a enfrentarme a nuevos desafios.
            </p>

            <Link to="../assets/files/Francisco_Santiago_CV.pdf" className={style.btnDownloadCV} target="_blank" download><FontAwesomeIcon icon={faDownload}/>Descargar CV</Link>
          </div>
          <div className={style.imgContainer}>
              <img src={aboutimg2} alt="Foto de personalidad" />
          </div>
        
      </section>
    );
  }