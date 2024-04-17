import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Footer } from './components/index'
import {Home,Services,Join,Blog,About,Contact } from './page/imports'
import './App.css'

const App = () => {
     return (
          <Router>
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/join' element={<Join />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
               </Routes>
               {/* <Footer /> */}
          </Router>
     )
}

export default App