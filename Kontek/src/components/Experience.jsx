import React from "react";
import { GiPlainSquare } from 'react-icons/gi'
import HorizontalBlocks from "./Horizontal";
import VerticalBlocks from "./Vertical";
import Animation from "./Animation";

const Experience = () => {
    const skills = [
        {
            element: 'Bardzo dobra znajomość HTML, CSS3 oraz JavaScript'
        },
        {
            element: 'Bardzo dobra znajomość Tailwind.css'
        },
        {
            element: 'Dobra znajomość ReactJS'
        },
        {
            element: 'Dobra znajomość biblioteki GSAP'
        },
        {
            element: 'Doświadczenie w pracy z Bootstrap, JQuery oraz API'
        },
        {
            element: 'Znajomość systemów kontroli wersji, takich jak Git'
        },
        {
            element: 'Motywacja do ciągłego rozwoju w dziedzinie Front-endu'
        },
        {
            element: 'Doświadczenie w pracy z Python oraz C++'
        },
    ]
    return (
        <div className=" overflow-hidden">
            {/* <div className="w-full h-[6px] bg-gradient-to-r from-black to-[#25160d]"></div> */}
            <div id='skills' className="exp grid lg:grid-cols-[60%_40%]">
                <div className="py-6">
                    <div className="  relative top-[50%] translate-y-[-50%]">
                        <div className="flex text-center align-middle justify-center mx-auto">
                            <h1 className=" text-2xl md:text-5xl font-inter font-[400] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#acacac]"> UMIEJĘTNOŚCI</h1></div>

                        <div className="w-full">
                            {skills.map((skill, i) => {
                                return (
                                    <p key={i} className=" md:justify-start flex my-[10px]"><GiPlainSquare className=" text-white mt-[8px] mx-[10px] text-[5px] sm:text-[10px]" /><span className=" text-md sm:text-lg font-questrial font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#acacac]">{skill.element}</span></p>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* <Animation /> */}
                {/* <HorizontalBlocks className=" absolute right-0"/> */}

            </div>

            {/* <div className="w-full h-[10px] bg-[#000000]"></div> */}
        </div>
    )
}

export default Experience;