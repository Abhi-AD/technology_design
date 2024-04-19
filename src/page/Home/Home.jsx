import React from 'react'
import {  Brand, Connect } from '../../components/index'
import { Header,Parnter } from '../../containers/index'
import CTA from '../../components/CTA/CTA'

const Home = () => {
     return (
          <div className='App'>
               <Header />
               <Brand />
               <Parnter />
               <CTA />
               <Connect />
          </div>
     )
}

export default Home
