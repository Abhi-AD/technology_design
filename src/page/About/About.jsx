import React from 'react'
import './About.css'
import { BOx, Panel, People, World } from '../../containers/index'
import { Connect } from '../../components/index'

const About = () => {
     return (
          <div>
               <div className='panel'>
                    <Panel />
                    <People />
                    <World />
               </div>
               <BOx />
               <Connect />
          </div>

     )
}

export default About
