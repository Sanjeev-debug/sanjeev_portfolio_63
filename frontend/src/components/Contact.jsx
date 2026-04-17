import React from 'react'
import './Contact.css'

import ContactIcon from './ContactIcons'
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <>
     
      <div className='contactMain' >
        <h1><i>Get in Touch</i></h1>
        <div className='contactInfo' >
          <div className='contact' >
            <h3><i>Email :- <a href="https://mail.google.com/mail/u/0/?fs=1&to=ms.saisanjeev@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer">ms.saisanjeev@gmail.com</a></i></h3>
            <h3><i>Mobile :- 6397718685</i></h3>
            <h3><i>Location :- Agra (UP)</i></h3>
          </div>
          <div className='contactIcon' >
            <ContactIcon />
          </div>
          <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.032472500758!2d78.04284207522629!3d26.96587097661548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU3JzU3LjEiTiA3OMKwMDInNDMuNSJF!5e0!3m2!1sen!2sin!4v1757154769709!5m2!1sen!2sin"  style={{ border: 0,width:'100%',height:'100%' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact