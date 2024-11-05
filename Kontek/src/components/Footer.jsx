import React from 'react'
import {  BsFacebook, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-scroll';
import { socials } from './Contact';

const Footer = () => {

    const navElements = [
        {
            name: 'strona główna',
            link: 'home'
        },
        {
            name: 'o mnie',
            link: 'about'
        },
        {
            name: 'wycena',
            link: 'pricing'
        },
        {
            name: 'projekty',
            link: 'projects'
        },
        {
            name: 'kontakt',
            link: 'contact'
        },
    ]

  return (
   <div className='w-full bg-white'>
        {/* <h1 className=' font-montserrat font-[700] text-2xl tracking-wider ml-10 bg-gradient-to-r from-[#585858] to-[#242424]
                                inline-block text-transparent bg-clip-text'>Lorem ipsum dolor sit amet.</h1> */}
     <div className=' py-5 pb-7 md:flex justify-between space-y-4 md:space-y-0 max-w-[1400px] px-10 mx-auto'>

            <div className=' text-black'>
                <p className=' relative top-1 font-[600] font-montserrat text-black text-[12px] text-center'> © 2024 UI <span className=' font-[700]'>JAKUB KONTEK</span> - All rights reserved</p>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' gap-4 flex flex-wrap mx-auto justify-center relative top-1'>
                    {navElements.map((element, i)=>{
                        return(
                            <Link key={i} to={element.link} spy={true} smooth={true}><p className='cursor-pointer text-sm text-black font-[600] hover:text-[#c2703e] font-montserrat text-center transition-all duration-150'>{element.name}</p></Link>
                        )
                    })}
                </div>
                </div>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' flex space-x-3 mx-auto justify-center'>
                    {socials.map((socialElement, i)=>{
                        return(
                            <a href={socialElement.link} key={i} className=' text-2xl text-black hover:text-[#c2703e] transition-all duration-150'>{socialElement.icon}</a>
                        )
                    })}
                </div>
                </div>
            </div>

    </div>
   </div>
  )
}

export default Footer