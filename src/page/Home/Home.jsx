import React from 'react'
import {  Brand } from '../../components/index'
import { Header,Parnter } from '../../containers/index'
import CTA from '../../components/CTA/CTA'

const Home = () => {
     return (
          <div className='App'>
               <Header />
               <Brand />
               <Parnter />
               <CTA />
          </div>
     )
}

export default Home
