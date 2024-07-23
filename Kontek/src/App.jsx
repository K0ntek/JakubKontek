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
import AboutTriangles from './components/AboutTriangles'

function App() {

  return (
    <div>
        <Navbar/>
      <Blocks/>
      <Header/>
      <div className="max-w-[1800px] px-3 sm:px-10 mx-auto">
      <About/>
      <Pricing/>

      <div>
      <div className=" aboutContent max-w-[1100px] h-fit mx-auto text-center relative px-2 sm:px-6 my-10">
                        <AboutTriangles/>
                        <div className="mw-full px-10 mx-auto">
                        <div>
                            <h2 className=' font-montserrat text-xl font-[600] tracking-tight bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(208,89,91)] inline-block text-transparent bg-clip-text'>CO ZYSKUJESZ</h2>
                        </div>

                                <h1 className=" font-montserrat text-4xl font-[600] tracking-tight bg-gradient-to-r from-[#000000] to-[#353535] inline-block text-transparent bg-clip-text"> WE WSPÓŁPRACY ZE MNĄ ?</h1>

                            <p className=" text-justify sm:text-center font-montserrat text-xl font-[600] mt-5">
                              Każdy projekt dostosowuję do Twoich unikalnych potrzeb i celów, co sprawia, że otrzymujesz rozwiązania
                               idealnie odzwierciedlające Twoją wizję. Moje Gwarantuję wysoką jakość usługi, terminowość
                              i pełne zaangażowanie w realizację Twoich projektów.</p>

                            <p className=" text-justify sm:text-center font-montserrat text-xl font-[600] mt-5 px-3">
                            Dzięki skutecznej optymalizacji SEO Twoja strona zyska lepsze pozycje w wynikach wyszukiwania, co przełoży
                             się na większy ruch i zainteresowanie. Tworzę angażujące treści na Instagram, które przyciągną uwagę oraz
                              zwiększą zaangażowanie Twoich klientów. Współpracując ze mną, oszczędzasz czas, ponieważ
                               przejmuję kompleksową obsługę Twojej obecności online, pozwalając Ci skoncentrować się na rozwoju biznesu.</p>

                            <p className=" text-justify sm:text-center font-montserrat text-xl font-[600] mt-5 px-5">
                              Oferuję stałe wsparcie i doradztwo na każdym etapie współpracy, dostosowując działania do zmieniających się potrzeb. Śledzę najnowsze trendy
                              , aby Twoja firma była zawsze na bieżąco i konkurencyjna w dynamicznym świecie cyfrowym. Zaufaj mi, a Twoja obecność w sieci stanie się
                               profesjonalna i efektywna. Razem osiągniemy sukces!</p>
                        </div>
                    </div>

      </div>

      <Projects/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
