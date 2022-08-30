import style from '../assets/styles/Pag404.module.css';
import page404 from '../assets/img/pagenotFound.png'
import { Link } from 'react-router-dom'
export default function Pag404() {

    return (
      <div className={style.container}>
        <img src={page404} alt="Imagen de página no encontrada"/>
        <h2>Lo sentimos, la ruta que usted busca no existe</h2>
        <Link to="/" className={style.btn}>Volver</Link>
        
      </div>
    );
  }