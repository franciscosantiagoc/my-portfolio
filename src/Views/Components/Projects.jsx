import style from '../assets/styles/Projects.module.css';
import {useState} from 'react';
import Card from './Card.jsx';
import p1 from '../assets/img/Projects/img_project01.jpg'
import p2 from '../assets/img/Projects/img_project02.jpg'
export default function Projects() {
    let [projects] = useState([
        {
            id:'1',
            name:'PokeAPI',
            image:p1,
            date:'Noviembre 2021',
            desc:'App creada utilizando React, Redux, Node y Sequelize, durante la cursada del bootcamp SoyHenry',
            check:'h|ttps://www.linkedin.com/feed/update/urn:li:activity:6869733959408902144/',
            repo:'https://github.com/franciscosantiagoc/PI-Pokemon',        
        },
         {
            id:'2',
            name:'Sistema de TUTORIAS',
            image:p2,
            date:'Enero 2021 - Agosto 2021',
            desc:'Proyecto creado con PHP, JavaScript,jQuery y Boostrap, utilizando el Patrón de diseño MVC',
            check:'',
            repo:'',        
        },
        /*{
            id:'',
            name:'',
            date:'',
            desc:'',
            check:'',
            repo:'',        
        },
        {
            id:'',
            name:'',
            date:'',
            desc:'',
            check:'',
            repo:'',        
        }, */
    ])
    return (
      <section title="projects" className={style.container}>
          <h2>Proyectos</h2>
          <div className={style.cards}>
            {projects.map((project,i)=><Card key={i} image={project.image} name={project.name} date={project.date} desc={project.desc} check={project.check} repo={project.repo} />)}
          </div>  
      </section>
    );
  }