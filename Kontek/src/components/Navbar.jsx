import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

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

        const [active, setActive] = useState("nav__menu");
        const [icon, setIcon] = useState("nav__toggler");
        const navToggle = () => {
            if (active === "navbarMenu") {
            setActive("navbarMenu navbarActive");
            } else setActive("navbarMenu");

            // Icon Toggler
            if (icon === "navbarToggler") {
            setIcon("navbarToggler toggledIcon");
            } else setIcon("navbarToggler");
        };

    return (
       <div className=" relative mx-auto">

            <div className=" bg-white py-2 h-[65px] z-[99] fixed top-0 w-full">
                <div className=" relative mt-1 sm:left-8 text-center sm:text-start w-fit mx-auto sm:mx-0">
                        <Link to="home" spy={true} smooth={true} >
                            <div className="cursor-pointer -space-y-1 w-fit">
                            <h1 className=" font-montserrat font-[600] text-lg">JAKUB KONTEK</h1>
                            <h2 className=" font-montserrat font-[600] text-[9px] text-[rgb(252,96,99)]">WEB DEVELOPER & DESIGNER</h2>
                            </div>
                        </Link>
                </div>
        </div>

        <div className={` fixed top-5 right-8 z-[99] text-2xl space-y-[4px] cursor-pointer group sm:hidden ${icon}`} onClick={navToggle}>
            <div className="line1 w-7 h-[3px] bg-black transition-all duration-200"></div>
            <div className="line2 w-7 h-[3px] bg-black transition-all duration-200"></div>
            <div className="line3 w-7 h-[3px] bg-black transition-all duration-200 group-hover:w-4 group-hover:ml-3"></div>
        </div>

       <ul className={`${active} sm:flex fixed top-[-300px] pt-[65px] sm:top-5 py-6 sm:py-0 sm:right-8 gap-4 space-y-2 z-[98] sm:z-[99] sm:space-y-0 transition-all duration-500 justify-end bg-[#fdfdfd] w-full sm:bg-transparent`}>
                        {navElements.map((element, i) => {
                            return (
                                <li key={i} className="navElement text-black cursor-pointer rounded-full text-md group text-center transition-all duration-150 hover:text-[rgb(255,149,73)]">
                                    <Link key={i} to={element.link} spy={true} smooth={true} ma className=" font-gruppo font-bold">
                                        <p className="">{element.name}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
       </div>
    )
}

export default Navbar;