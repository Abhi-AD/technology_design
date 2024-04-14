import React from 'react'

import { Navbar,Footer } from './components/index'
import './App.css'
import Home from './page/Home/Home'

const App = () => {
     return (
          <div className='App'>
               <Navbar />
               <Home />
               <Footer />
          </div>
     )
}

export default App