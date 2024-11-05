import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";


import lgthnk from '/lgthnk.png'
import carpentry from '/carpentryImage.png'
import homesell from '/homesellBrzysky.png'
import uiConcept from '/uiConcept.png'
import examplneLanding from '/examplneLanding.png'
import srogow from '/srogow.png'
import furnify from '/furnify.png'

const Projects = () => {
    const projectNav = [
        {
            img: lgthnk,
            link: 'https://project-z4xl.onrender.com/',
            title: 'LGTHNK',
            desc: 'w trakcie budowy',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: furnify,
            link: 'https://furnify.onrender.com',
            title: 'Furnify',
            desc: 'w trakcie budowy',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: srogow,
            link: 'https://srogowgorny.onrender.com',
            title: 'Srogów Górny- nieruchomość',
            desc: '',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
         {
            img: examplneLanding,
            link: 'https://designconpect2.onrender.com',
            title: 'Design concept',
            desc: '',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: uiConcept,
            link: 'https://designconcept.onrender.com',
            title: 'Design concept',
            desc: '',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
         {
            img: carpentry,
            link: 'https://carpentry.onrender.com',
            title: 'CARPENTRY',
            desc: '',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: homesell,
            link: 'https://brzysky.onrender.com',
            title: 'PIOTR BRZYSKI',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        //{
            //img: dni,
            //link: 'https://project2-fp6r.onrender.com',
            //title: 'DNI OTWARTE',
            //desc: '',
            //secondary: 'silver',
            //shadow: '0px 0px 20px silver',
            //id: "1"
        //},
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1200, min: 900 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.projectTitle', { x: '-200px', opacity: 0 }, { x: 0, opacity: 1, duration: .5, scrollTrigger: { trigger: '.projectsContainer', start: 'top 80%' } })

    }, [])

    return (
        <div className=" rounded-[40px] mb-10 projects bg-[#ffffff] shadow-[0px_0px_30px_0px] shadow-black/10" id='projects'>
            <div className=" py-10">
                <div className="projectsContainer sm:p-[20px] mx-auto rounded-[30px]">

                            <div className="w-fit ml-10 projectTitle pb-8 sm:pb-0">
                                <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                    text-[#B17457]'>PROJEKTY</h2>
                                
                                <h1 className=" text-2xl sm:text-4xl lg:text-6xl font-montserrat mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#111] to-[#000000] font-[500] tracking-[-2px]">MOJE PROJEKTY</h1>
                            </div>

                    <div className="gd-carousel-wrapper">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlaySpeed={5000}
                      autoPlay={true}
                      renderDotsOutside={true}
                      arrows={true}
                      showDots={true}
                      className="relative gd-carousel">
                        {projectNav.map((element, i) => {
                                return (
                                    <a href={element.link}>
                                        <div className=" px-2 group space-y-2">
                                            <div className="relative">
                                                 <img src={element.img} alt={element.title + 'image'} className=" rounded-3xl aspect-video object-cover" />
                                                 <div className="w-full h-full bg-black/10 absolute top-0 left-0 rounded-3xl  group-hover:bg-black/70 transition-all duration-150"></div>
                                                 <div className="absolute bottom-5 group right-6 transition-all duration-200 flex gap-1">
                                                    <div className="w-fit overflow-hidden">
                                                        <p className="text-white font-montserrat font-[400] tracking-widest text-[10px] relative left-[100%] group-hover:left-0 transition-all duration-300">ZOBACZ</p>
                                                    </div>
                                                    <MdArrowOutward className=" text-white group-hover:text-[#B17457] text-xl" />
                                                </div>
                                            </div>

                                            <h1 className=" font-montserrat font-[500] text-xl">{element.title}</h1>
                                            <h2 className=" font-inter bg-gradient-to-r from-gray-500 to-[#0f0f0f]
                                                     inline-block text-transparent bg-clip-text font-[600] relative -top-2">UI DESIGN</h2>
                                        </div>
                                    </a>
                                )
                            })}
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
