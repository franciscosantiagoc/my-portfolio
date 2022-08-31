import "./Home.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import miFoto from "./../../assets/img/miFoto.png";
export default function Home() {
  return (
    <main name="home" className="main">
      <div className="container">
        <div className="data">
          <p>Mi nombre es</p>
          <h1>Francisco Santiago de la Cruz</h1>
          <h3>FullStack Developer</h3>
          <a
            href="https://drive.google.com/file/d/14VTc2uL8remwMcGYUTZaE9Pg9qU4gPA3/view?usp=sharing"
            className="btnDownloadCV"
            target="_blank"
            download
          >
            <FontAwesomeIcon icon={faDownload} />
             Descargar CV
          </a>
        </div>
        <div className="data">
          <img src={miFoto} alt="Foto Francisco" />
        </div>
      </div>
    </main>
  );
}
