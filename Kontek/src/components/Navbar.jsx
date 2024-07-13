import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { IoPersonSharp, IoHome } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { VscGraph } from "react-icons/vsc";
import { RiContactsLine } from "react-icons/ri";

const Navbar = () => {

    // useEffect(()=>{
    //     gsap.registerPlugin(ScrollTrigger)

    //     gsap.fromTo('.navbar', {y:'-200px', opacity:0}, {y:0, opacity:1, duration:.5})
    // }, [])

    const navElements = [
        {
            name: "O mnie",
            link: 'about'
        },
        {
             name: "Wycena",
            link: 'pricing'
        },
        {
            name: "Moje Projekty",
            link: 'projects'
        },

        {
            name: "Kontakt",
            link: 'contact'
        },
    ]

    return (
       <div className="bg-white z-[99] py-2 px-8 h-[65px] fixed top-0 w-full">
            <div className=" max-w-[1500px] px-6 mx-auto flex justify-between">
                
                    <Link to="home" spy={true} smooth={true} >
                        <div className="cursor-pointer">
                        <h1 className=" font-montserrat font-[600] text-lg">JAKUB KONTEK</h1>
                        <h2 className=" font-montserrat font-[600] text-[9px]">WEB DEVELOPER & DESIGNER</h2>
                        </div>
                    </Link>

                <ul className="flex relative top-3 gap-4 justify-end">
                    {navElements.map((element, i) => {
                        return (
                            <li className="navElement text-black cursor-pointer rounded-full text-md group  transition-all duration-200">
                                <Link key={i} to={element.link} spy={true} smooth={true} className=" font-gruppo font-bold">
                                    <p className="">{element.name}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
       </div>
    )
}

export default Navbar;