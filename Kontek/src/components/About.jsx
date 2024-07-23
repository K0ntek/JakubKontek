 import React from "react";
import VerticalBlocks from "./Vertical";
import Experience from "./Experience";
import Pricing from "./Pricing";
import { PiPuzzlePieceThin } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GoGraph } from "react-icons/go";
import AboutTriangles from "./AboutTriangles";

const About = () => {

    return (
        <>
            {/* <div className="w-full h-[150px] mt-[5px] bg-gradient-to-t from-black to-transparent"></div> */}
            <div className="px-5 rounded-[50px] h-fit py-[50px] z-[99] my-[50px]">
            {/* <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#dbdbdb] to-[#030303] text-dm uppercase py-5 font-montserrat tracking-wide text-center font-[600]'>Moja misja, twoja satysfakcja</h1> */}
                <div id='about' className="">

                    <div className=" aboutContent max-w-[1100px] h-fit mx-auto text-center relative px-2 sm:px-6">
                        <AboutTriangles/>
                        <div className="mw-full sm:px-10 mx-auto">
                        <div>
                            <h2 className=' font-montserrat text-xl font-[600] tracking-tight bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(208,89,91)] inline-block text-transparent bg-clip-text'>O MNIE</h2>
                        </div>

                                <h1 className=" font-montserrat text-4xl font-[600] tracking-tight bg-gradient-to-r from-[#000000] to-[#353535] inline-block text-transparent bg-clip-text"> O MNIE</h1>

                            <p className=" text-justify sm:text-center font-montserrat text-xl font-[600] mt-5">Jestem freelancerem specjalizującym się w tworzeniu stron internetowych, zarządzaniu social media, produkcji filmików 
                                na Instagrama oraz optymalizacji SEO. Projektuję nowoczesne, responsywne strony, które łączą estetykę z funkcjonalnością.</p>

                            <p className=" text-justify sm:text-center font-montserrat text-xl font-[600] mt-5 px-3">Pomagam budować silną obecność online, tworząc angażujące treści i zarządzając kampaniami w mediach społecznościowych. Produkuję kreatywne filmiki
                                 na Instagrama, które przyciągają uwagę i zwiększają zaangażowanie. </p>

                            <p className=" text-justify sm:text-center font-montserrat text-xl font-[600] mt-5 px-5">Dzięki optymalizacji SEO podnoszę pozycje stron w wynikach wyszukiwania, co przekłada się na większy ruch i konwersje. Szukasz wsparcia w rozwijaniu swojej obecności online?</p>
                            <button className=" font-montserrat font-[600] px-2 py-3  bg-gradient-to-r from-[rgb(255,131,42)] to-[rgb(255,88,91)] text-white mt-5 rounded-xl hover:tracking-wider transition-all duration-150">NAPISZ DO MNIE !</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;
