import style from '../assets/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
export default function Footer() {

    return (
      <section className={style.container}> 
          <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2021 @franciscosantiagoc</p>
          <p>All Rights Reserved</p>
        
      </section>
    );
  }