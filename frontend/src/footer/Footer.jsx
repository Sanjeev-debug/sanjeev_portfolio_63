import React from 'react'

import './Footer.css'
import LinesMove from '../components/LinesMove'
import ContactIcons from '../components/ContactIcons'

const Footer = () => {
  return (
    <>
    <div className='footer' >
        <LinesMove/>
       <div className='footerContant' >
         <div><i>" Let's Build something amazing together "</i></div>
         <ContactIcons/>
       </div>
    </div>
    </>
  )
}

export default Footer