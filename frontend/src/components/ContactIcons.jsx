import React from 'react'
import './ContactIcons.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const ContactIcons = () => {
  return (
    <>  
     <div className="logos">
        <div className="email logo "> <a href="https://mail.google.com/mail/u/0/?fs=1&to=ms.saisanjeev@gmail.com&tf=cm" target="_blank"  rel="noopener noreferrer"><EmailIcon className='icon' /></a>  </div>
        <div className="LinkedIn logo"><a href="https://www.linkedin.com/in/sanjeev-kumar-865413281/" target='_blank'  rel="noopener noreferrer" ><LinkedInIcon className='icon' /></a></div>
        <div className="GitHub logo"><a href="https://github.com/Sanjeev-debug" target='_Black'  rel="noopener noreferrer"><GitHubIcon className='icon' /></a></div>
      </div>
    </>
  )
}

export default ContactIcons