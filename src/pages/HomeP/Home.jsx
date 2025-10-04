import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"

function Home() {
  return (
    <div className='HOme'>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      </div>
  )
}

export default Home