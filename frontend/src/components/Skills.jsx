import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard';



const Skills = () => {

    const skills=[
      {title:'AI / ML Concepts',name:["Machine Learning","Deep Learning","Natural Language Processing (NLP)"]},
      {title:'AI / ML Libraries & Tools',name:["NumPy","Pandas","Scikit-learn","Matplotlib","Seaborn","PyTorch","Jupyter Notebook"]},
      {title:'Backend',name:["Flask","FastAPI","Express.js"]},
      {title:'Databases',name:["MySQL","MongoDB"]},
      {title:'Languages & Frontend',name:["Python","JavaScript","SQL"]},
      {title:'Tools & Technologies',name:["Git","GitHub","Docker","Kubernetes","VS Code","Anaconda"]},
      
      
    ]

    

  return (
    <>
       <div className='skillsMain' >
        <h1>Skills Section</h1>
         
        <div className="cardMain">
           { skills.map((item, index)=>{
            return <SkillCard item={item} key={index}  />

           }) }
        </div>
       </div>         
    </>
  )
}

export default Skills