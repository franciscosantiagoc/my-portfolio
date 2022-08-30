import style from '../assets/styles/Projects.module.css';
import { useState } from 'react';
import Card from '../../Components/Card/Card.jsx';
import project1 from '../assets/img/Projects/img_project01.jpg'
import project2 from '../assets/img/Projects/img_project02.jpg'
import project3 from '../assets/img/Projects/img_project03.jpg'
export default function Projects() {
    let [projects] = useState([
        {
            name:'Techcommerce',
            image: project3,
            date:'Enero - Febrero 2022',
            desc:'Proyecto final realizado en equipo durante la cursada de HENRY mediante la metodologia SCRUM, usando tecnologías HTML, CSS3, React, Redux, Express, NodeJS, PostgreSQL, Firebase, Stripe, etc.',
            check:'https://www.techcommerce.franciscosantiagoc.com/',
            repo:'https://github.com/franciscosantiagoc/techcommerce_pf.git',        
        },
        {
            name:'PokeAPI',
            image:project1,
            date:'Noviembre 2021',
            desc:'App creada utilizando React, Redux, Node y Sequelize, durante la cursada del bootcamp SoyHenry',
            check:'https://www.linkedin.com/feed/update/urn:li:activity:6869733959408902144/',
            repo:'https://github.com/franciscosantiagoc/PI-Pokemon',        
        },
         {
            name:'Sistema de TUTORIAS',
            image:project2,
            date:'Enero 2021 - Agosto 2021',
            desc:'Proyecto creado con PHP, JavaScript,jQuery y Boostrap, utilizando el Patrón de diseño MVC, creado durante el periodo de practica profesional de Residencia durante mis estudios universitarios',
            check:'',
            repo:'https://github.com/franciscosantiagoc/sittutorias.git',        
        },
        /*{
            name:'',
            date:'',
            desc:'',
            check:'',
            repo:'',        
        },*/
    ])
    return (
      <section name="projects" className={style.container}>
          <h2>Proyectos</h2>
          <div className={style.cards}>
            {projects.map((project,i)=><Card key={i} image={project.image} name={project.name} date={project.date} desc={project.desc} check={project.check} repo={project.repo} />)}
          </div>  
      </section>
    );
  }