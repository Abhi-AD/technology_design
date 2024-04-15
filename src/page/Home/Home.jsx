import React from 'react'
import {  Brand } from '../../components/index'
import { Header } from '../../containers/index'
import CTA from '../../components/CTA/CTA'

const Home = () => {
     return (
          <div className='App'>
               <Header />
               <Brand />
               <CTA />
          </div>
     )
}

export default Home
