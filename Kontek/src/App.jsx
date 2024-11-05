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
import pricingOffer from './data.json'
import waves from '../public/waves.png'

function App() {

  const [option, setOption] = useState('')
  const [price, setPrice] = useState('')

  return (
    <div className=''>
      <div className=" wavesBg w-full h-screen opacity-5 fixed z-[-1] top-0 left-0"><img src={waves} alt="" className=' w-full h-screen'/></div>
        <Navbar/>
      {/* <Blocks/> */}
      <Header/>
      <div className="max-w-[1800px] px-3 sm:px-10 mx-auto">
      <About/>
      <Pricing setOption={setOption} setPrice={setPrice}/>

      <div>
      <div className=" aboutContent max-w-[1400px] h-fit mx-auto text-center relative px-2 sm:px-6 my-10">
                        <div className="mw-full sm:px-10 mx-auto">
                        <div className="w-fit mx-auto">
                            <div className="w-1/3 bg-gradient-to-r from-[#e4e4e4] to-[#0f0f0f] h-[2px] mx-auto mb-2"></div>
                            {/* <h2 className=' font-montserrat text-center text-2xl sm:text-4xl ml-10 md:text-6xl font-[500] text-[#2b2b2b]'>MOJA OFERTA</h2> */}
                            <p className=' text-center font-montserrat font-[500] text-3xl sm:text-4xl md:text-5xl'>Co zyskujesz we współpracy ze mną ?</p>
                        </div>
                           
                          <div className="grid lg:grid-cols-[2fr_1fr] mt-5 lg:gap-10 lg:mt-10">
                            <div className="bg-[#f0f0f0] p-10 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/20 space-y-9">
                              <p className=" font-montserrat text-lg md:text-2xl text-justify font-[500] lg:mt-5">
                                  Każdy projekt dostosowuję do Twoich unikalnych potrzeb i celów, co sprawia, że otrzymujesz rozwiązania
                                  idealnie odzwierciedlające Twoją wizję. Gwarantuję wysoką jakość usługi, terminowość
                                  i pełne zaangażowanie w realizację Twoich projektów.</p>

                                  {/* <p className=' font-montserrat font-[600] text-start text-sm'>Wsparcie</p> */}
                              </div>
                           </div>


                               <div className="grid lg:grid-cols-[1fr_2fr] mt-5 lg:gap-10 lg:mt-10">
                                <div></div>
                                    <div className="bg-[#f0f0f0] p-10 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/20 space-y-9">
                                      <p className=" font-inter text-lg md:text-2xl text-justify font-[500] lg:mt-5 tracking-[-0.5px] leading-[30px]">
                                      Tworzę angażujące treści na Instagram, które przyciągną uwagę oraz
                                    zwiększą zaangażowanie Twoich klientów. Współpracując ze mną, oszczędzasz czas, ponieważ
                                    przejmuję kompleksową obsługę Twojej obecności online, pozwalając Ci skoncentrować się na rozwoju biznesu.</p>

                                      {/* <p className=' font-montserrat font-[600] text-start text-sm'>Wsparcie</p> */}
                                    </div>
                                </div>


                            <div className="grid lg:grid-cols-[2fr_1fr] mt-5 lg:gap-10 lg:mt-10">
                              <div className="bg-[#f0f0f0] p-10 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/20 space-y-9">
                                <p className=" font-montserrat text-lg md:text-2xl text-justify font-[500] lg:mt-5">
                                Oferuję stałe wsparcie i doradztwo na każdym etapie współpracy, dostosowując działania do zmieniających się potrzeb. Śledzę najnowsze trendy
                                , aby Twoja firma była zawsze na bieżąco i konkurencyjna w dynamicznym świecie cyfrowym.</p>

                                {/* <p className=' font-montserrat font-[600] text-start text-sm'>Wsparcie</p> */}
                              </div>
                           </div>
                        </div>
                    </div>

      </div>

      <Projects/>
      <Contact option={option} price={price}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
