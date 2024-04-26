import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Footer, ScrollToTopButton } from './components/index'
import { Home, Services, Join, Blog, About, Contact, VisitCard } from './page/imports'
import './App.css'
import { ApplyForm, Casestudy, CasestudyDetails } from './containers/index'

const App = () => {
     return (
          <Router>
               <ScrollToTopButton />
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/join' element={<Join />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/case-study' element={<Casestudy />} />
                    <Route path='/case-study-details' element={<CasestudyDetails />} />
                    <Route path='/visiting-card' element={<VisitCard />} />
                    <Route path='/apply-form' element={<ApplyForm />} />
               </Routes>
               <Footer />
          </Router>
     )
}

export default App