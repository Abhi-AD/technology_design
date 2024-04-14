import React from 'react'

import { Navbar, Brand } from './components/index'
import { Header } from './containers/index'
import './App.css'

const App = () => {
     return (
          <div className='App'>
               <Navbar />
               <Header />
               <Brand />
          </div>
     )
}

export default App