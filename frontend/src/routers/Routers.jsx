import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'

import Layout from '../layout/Layout'


import Home from '../pages/Home'
import Projects from '../pages/Projects'
import NotFound from '../pages/NotFound'


const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers