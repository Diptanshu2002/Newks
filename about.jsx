import React from 'react'
import Navbar from './navbar'
import Abt from './abt'
import './abt.css'
import Footer from './footer'

export default function About() {
  return (
    <div>
        <Navbar pagename="home"/>
        <Abt/>
        <Footer/>
    </div>
  )
}
