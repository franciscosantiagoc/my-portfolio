import style from '../assets/styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
export default function Contact() {

    return (
      <section name="contact" className={style.container}>
        <h2>Contactame</h2>
        <div className={style.contentoptions}>
          <div className={style.opcontac}>
            <a className={style.linkop} rel="noreferrer" href="mailto:fcosantiagoc@gmail.com" target="_blank">
              <p>Email</p>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>         
          <div className={style.opcontac}>
            <a className={style.linkop} rel="npm" href="https://www.linkedin.com/in/franciscosantiagoc" target="_blank" >
              <p>LinkedIn</p>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>         
          <div className={style.opcontac}>
            <a href="tel:+529711379445" rel="noreferrer" className={style.linkop}>
              <p>Teléfono</p>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>
      </section>
    );
  }