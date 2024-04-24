import React from 'react'
import { JoinApplication, JoinHeader, JoinService, Start } from '../../containers/index'
import { Connect, Gallery } from '../../components/index'

const Join = () => {
  return (
    <div>
      <JoinHeader/>
      <Start />
      <JoinService />
      <Gallery />
      <JoinApplication />
      <Connect/>
    </div>
  )
}

export default Join
