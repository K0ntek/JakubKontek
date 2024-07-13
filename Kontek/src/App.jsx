import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blocks from './components/Blocks'
import Navbar from './components/Navbar'
import About from './components/About' 
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Pricing from './components/Pricing'

function App() {

  return (
    <div>
      <Navbar/>
      <Blocks/>
      <div className="max-w-[1500px] px-6 mx-auto">
      <Header/>
      <About/>
      <Pricing/>
      <Projects/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
