import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
import Banner1 from '../../components/Banner1_Compony/Banner1'
import Banner2 from '../../components/Banner2_HOME/Banner2'

function Home() {
  return (
    <div className='HOme'>
      <Banner1/>
      <Banner2/>
      </div>
  )
}

export default Home