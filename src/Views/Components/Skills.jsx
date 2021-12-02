import style from '../assets/styles/Skills.module.css';
import { useState } from 'react';
export default function Skills({name,desc,image,link}) {
  let [skills] = useState([
    {name:'Git',image:'https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png',level:''},
    {name:'HTML',image:'https://cdn-icons-png.flaticon.com/512/919/919827.png',level:''},
    {name:'CSS',image:'https://cdn-icons-png.flaticon.com/512/919/919826.png',level:''},
    {name:'JavaScript',image:'https://static.platzi.com/media/achievements/badge-fundamentos-js-95028136-c071-4495-98ee-559b334e415b.png',level:''},
    {name:'NodeJS',image:'https://www.shareicon.net/data/512x512/2016/07/10/119473_development_512x512.png',level:''},
    {name:'React',image:'https://jorgecolonconsulting.com/wp-content/uploads/React-Icon-Black.png',level:''},
    {name:'Redux',image:'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/redux.png',level:''},
    {name:'Express',image:'https://miro.medium.com/max/701/1*j8DELPVuI_w8045sxmHQsA.png',level:''},
    {name:'Sequalize',image:'https://sequelize.org/master/image/brand_logo.png',level:''},
    {name:'PostgreSQL',image:'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',level:''},
    {name:'MySQL',image:'http://talenthometraining.in/wp-content/uploads/2019/02/Icons-SQL-01-1024x1024.png',level:''},
    {name:'PHP',image:'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/php-512.png',level:''},
    {name:'Less',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LESS_Logo.svg/1200px-LESS_Logo.svg.png',level:''},
    {name:'Java',image:'https://assets-global.website-files.com/5aa7081220a301f2a3644f3b/5c363b39c7ef6e287f09c9fd_Website_Reporting%20Language%20Icons_Java.png',level:''},
    {name:'Android/Java',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxh_w7LspaTPFGKnYF9WrZSClB_6MYyIjHw&usqp=CAU',level:''}, 
    /*{name:'',image:'',level:''}, */
  ])

  let [softs] = useState([
     {name:'Visual Studio Code',image:'https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_visual_studio_code_alt_macos_bigsur_icon_189953.png',level:''},
     {name:'Adobe XD',image:'https://greenknow.co/wp-content/uploads/2020/12/ADOBE-XD.png',level:''},
     {name:'Photoshop',image:'https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg',level:''},
     {name:'Netbeans',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1776px-Apache_NetBeans_Logo.svg.png',level:''},
     {name:'Android studio',image:'https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png',level:''},
     {name:'Linux',image:'https://cdn-icons-png.flaticon.com/512/518/518713.png',level:''},
     /*{name:'',image:'',level:''}, */
  ])

    return (
      <section name="skills" className={style.container} >
          <h2>Skills</h2>
          <div className={style.containerSkills}>
            <h3 className={style.titleSkill}>Tecnologías</h3>
            {skills.map((skill,i)=>(
              <div className={style.cardTec} key={i}>
                <img src={skill.image} alt={`Imagen de ${skill.name}`}/>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <div className={style.containerSkills}>
            <h3 className={style.titleSkill}>Softwares</h3>
            {softs.map((soft,i)=>(
              <div className={style.cardTec} key={i}>
                <img src={soft.image} alt={`Imagen de ${soft.name}`}/>
                <p>{soft.name}</p>
              </div>
            ))}
          </div>
        
      </section>
    );
}