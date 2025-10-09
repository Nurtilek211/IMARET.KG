import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
import Banner1 from '../../components/Banner1_Compony/Banner1'
import Banner2 from '../../components/Banner2_HOME/Banner2'
import Banner_C_Rec from '../../components/Banner1_Compony/Banner_C_Rec'

function Home() {
  return (
    <div className='HOme'>
      <Banner_C_Rec/>
      <Banner1/>
      <Banner2/>
      </div>
  )
}

export default Home