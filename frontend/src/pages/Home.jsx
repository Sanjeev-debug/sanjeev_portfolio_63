import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { ReactTyped } from 'react-typed';

import LinesMove from '../components/LinesMove';
import resumePDF from '../assets/Sanjeev_kumar_AI_resume.pdf'
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Skills from '../components/Skills';
import Education from '../components/Education';




const Home = () => {
  return (
    <> 
      <div className='home'  >
        <LinesMove />
        <div className='mainHome' >
          <div className='homeContent' >

            <h1> Hi, I'm Sanjeev Kumar </h1>
            <h3>
              <ReactTyped
                strings={["AI / ML Engineer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />

            </h3>

            <p><i>“Focused on Machine Learning and Deep Learning, I create intelligent solutions and scalable AI applications, with hands-on experience as a MERN stack developer”</i></p>
            <h4>Click here : <a href="https://smart-class-attend-landing-page.vercel.app/"  target="_blank" >Class AI Attendance </a></h4>
            <h4>Click here : <a href="https://ai-assistance-app-111.onrender.com/"  target="_blank" >AI Assistant App </a></h4>
            <h4>Click here : <a href="https://youtubevideoanalyzersp.streamlit.app/"  target="_blank" >YouTube Video Analyzer Agent</a></h4>
            <h4>Click here : <a href="https://the-haat-ecommerce-website-1.onrender.com/"  target="_blank" >The-Haat ecommerce Website</a></h4>
            <div className='homeButton' >
              <div className='contactButton'   > <Link to={"/contactMe"} className='contactLink' > <i>Contact Me</i> </Link></div>
              <div className='resumeButton' > <a href={resumePDF} download="Sanjeev-kumar-AI/ML-resume.pdf" className='resumeLink' > <i>Get Resume  </i> </a></div>

            </div>

          </div>
          <div className='homeSanjeevPhoto' >
            <div className='img' >

            </div>

          </div>

        </div>
         <Divider/>
         <Skills/>
         <Divider/>
         
         <Education/>
         <Divider/>
      <Contact/>
      </div>
      

    </>
  )
}

export default Home