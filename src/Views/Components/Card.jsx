import style from '../assets/styles/Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faLaptopCode} from '@fortawesome/free-solid-svg-icons';
export default function Card({name,image,date,desc,check,repo}) {

    return (
      <div className={style.card}>
          <div className={style.imageCont}>
            <img src={image} alt={`Imagen de proyecto ${name}`}/>
          </div>
          <h3 className={style.name}>{name}</h3>
          <div className={style.desc}>
              <h3 className={style.name}>{name}</h3>
              <p>{desc}</p>
              <p>{`Realizado: ${date}`}</p>
              {check?<a href={check} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPlayCircle}/> Ver video o demo</a>:null}
              {repo?<a href={repo} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLaptopCode}/> Ver repositorio</a>:null}
          </div>
      </div>
    );
  }