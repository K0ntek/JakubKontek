 import React from "react";
import { Link } from "react-scroll";

import uiConcept from '../../public/uiConcept.png'
import examplneLanding from '../../public/examplneLanding.png'
import furnify from '../../public/furnify.png'
import { MdArrowOutward } from "react-icons/md";

const About = () => {

    return (
        <>
            {/* <div className="w-full h-[150px] mt-[5px] bg-gradient-to-t from-black to-transparent"></div> */}
            <div className="px-5 rounded-[50px] h-fit z-[99] mb-[50px]">

            {/* <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#dbdbdb] to-[#030303] text-dm uppercase py-5 font-montserrat tracking-wide text-center font-[600]'>Moja misja, twoja satysfakcja</h1> */}
                <div id='about' className="">

                    <div className=" grid lg:grid-cols-2 aboutContent max-w-[1500px] h-fit mx-auto text-center relative px-2 sm:px-6 mt-10">

                            <div>
                                <div className="mw-full sm:px-10 mx-auto relative top-[50%] translate-y-[-50%] py-10">

                                <div className=" w-fit mx-auto">
                                    <div className="w-1/2 h-[2px] mx-auto bg-gradient-to-r from-transparent to-[#0f0f0f]"></div>
                                    <h1 className=" font-montserrat text-5xl font-[500] tracking-tight bg-gradient-to-r from-[#000000] to-[#353535] inline-block text-transparent bg-clip-text"> O MNIE</h1>
                                </div>

                                <p className=" text-justify lg:text-start  font-montserrat text-xl tracking-[-0.25px] leading-7 font-[500] mt-8">Jestem freelancerem specjalizującym się w tworzeniu stron internetowych, zarządzaniu social media, produkcji filmików 
                                na Instagrama oraz optymalizacji SEO. Projektuję nowoczesne, responsywne strony, które łączą estetykę z funkcjonalnością.</p>

                                <p className=" text-justify lg:text-start font-montserrat text-xl tracking-[-0.25px] leading-7 font-[500] mt-5 ">Pomagam budować silną obecność online, tworząc angażujące treści i zarządzając kampaniami w mediach społecznościowych. Produkuję kreatywne filmiki
                                na Instagrama, które przyciągają uwagę i zwiększają zaangażowanie. </p>

                                <p className=" text-justify lg:text-start  font-montserrat text-xl tracking-[-0.25px] leading-7 font-[500] mt-5 ">Dzięki optymalizacji SEO podnoszę pozycje stron w wynikach wyszukiwania, co przekłada się na większy ruch i konwersje. Szukasz wsparcia w rozwijaniu swojej obecności online?</p>

                                <Link to="contact" smooth={true} spy={true}>
                                <button className=" font-montserrat font-[600] px-2 py-3  bg-[#e0e0e0] text-black mt-5 rounded-xl hover:opacity-75 transition-all duration-150">NAPISZ DO MNIE !</button>
                                </Link>

                                </div>
                            </div>

                            <div className=" grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                                <div className=" grid gap-3">
                                    <div className=" overflow-hidden rounded-3xl relative group">
                                        <a href="https://designconpect2.onrender.com">
                                            <img src={examplneLanding} alt="image2"  className=" w-full h-full object-cover rounded-3xl "/>
                                            <div className="absolute w-full h-full bg-black/30 top-0 right-0 group-hover:bg-black/80 transition-all duration-150"></div>
                                            <h1 className=" absolute top-[50%] translate-y-[-50%] left-[120%] group-hover:left-[50%] transition-all duration-300 translate-x-[-50%] text-2xl text-white tracking-wider font-montserrat font-[300]">UI <br /> Concept</h1>

                                            <div className="absolute bottom-5 group right-6 transition-all duration-200 flex gap-1">
                                                    <div className="w-fit overflow-hidden">
                                                        <p className="text-white font-montserrat font-[400] tracking-widest text-[10px] relative left-[100%] group-hover:left-0 transition-all duration-300">ZOBACZ</p>
                                                    </div>
                                                    <MdArrowOutward className=" text-white group-hover:text-[#B17457] text-xl" />
                                                </div>  
                                        </a>
                                    </div>
                                    <div className=" overflow-hidden rounded-3xl relative group">
                                        <a href="https://designconcept.onrender.com">
                                            <img src={uiConcept} alt=" image1" className=" w-full h-full object-cover rounded-3xl "/>
                                            <div className="absolute w-full h-full bg-black/30 top-0 right-0 group-hover:bg-black/80 transition-all duration-150"></div>
                                            <h1 className=" absolute top-[50%] translate-y-[-50%] left-[120%] group-hover:left-[50%] transition-all duration-300 translate-x-[-50%] text-2xl text-white tracking-wider font-montserrat font-[300]">UI <br /> Concept</h1>

                                            <div className="absolute bottom-5 group right-6 transition-all duration-200 flex gap-1">
                                                    <div className="w-fit overflow-hidden">
                                                        <p className="text-white font-montserrat font-[400] tracking-widest text-[10px] relative left-[100%] group-hover:left-0 transition-all duration-300">ZOBACZ</p>
                                                    </div>
                                                    <MdArrowOutward className=" text-white group-hover:text-[#B17457] text-xl" />
                                                </div>
                                        </a>
                                    </div>
                                </div>

                                <div className=" overflow-hidden rounded-3xl relative group">
                                    <a href="https://furnify.onrender.com">
                                        <img src={furnify} alt="image2"  className=" w-full h-full object-cover rounded-3xl "/>
                                        <div className="absolute w-full h-full bg-black/30 top-0 right-0 group-hover:bg-black/80 transition-all duration-150"></div>
                                        <h1 className=" absolute top-[50%] translate-y-[-50%] left-[120%] group-hover:left-[50%] transition-all duration-300 translate-x-[-50%] text-2xl text-white tracking-wider font-montserrat font-[300]">Furnify</h1>

                                        <div className="absolute bottom-5 group right-6 transition-all duration-200 flex gap-1">
                                                    <div className="w-fit overflow-hidden">
                                                        <p className="text-white font-montserrat font-[400] tracking-widest text-[10px] relative left-[100%] group-hover:left-0 transition-all duration-300">ZOBACZ</p>
                                                    </div>
                                                    <MdArrowOutward className=" text-white group-hover:text-[#B17457] text-xl" />
                                                </div>

                                    </a>
                                </div>
                            </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default About;
