import style from '../assets/styles/Home.module.css';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import miFoto from '../assets/img/PhotoFranc.jpg';
import miFoto2 from '../assets/img/Photo2.png';
import mycv from '../assets/files/pruebaCV.pdf';
export default function Home() {

    return (
      <main className={style.main}>
          <div className={style.container}>
            <div className={`${style.data}`}>
                <p>¡Hola! mi nombre es</p>
                <h1>Francisco Santiago de la Cruz</h1>
                <h3>FullStack Developer</h3>
                <Link to="../assets/files/pruebaCV.pdf" className={style.btnDownloadCV} target="_blank" download><FontAwesomeIcon icon={faDownload}/>Descargar CV</Link>
            </div>
            <div className={`${style.data}`}>
                <img src={miFoto2} alt="Foto Francisco" />
            </div>
          </div>
        
      </main>
    );
  }