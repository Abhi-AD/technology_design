import React from 'react'

import { Navbar } from './components/index'
import './App.css'
import Home from './page/Home/Home'

const App = () => {
     return (
          <div className='App'>
               <Navbar />
               <Home />
          </div>
     )
}

export default App