import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
import { Link } from "react-scroll";
import selfImage from "../../public/selfImage.png"
import { socials } from "./Contact";

import { BsFillTelephoneFill, BsFacebook, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { TimelineMax } from "gsap/gsap-core";
import Blocks from "./Blocks";
import waves from '../../public/waves.png'
const Header = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.selfImage', { x: '200px', opacity: 0 }, { x: 0, opacity: 1, duration: .5 })
        gsap.fromTo('.name', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger:.2, delay:.3 })
        gsap.fromTo('.headerBorder', {width:0}, {width:'40%', duration:.5, delay:.9})
        gsap.fromTo('.headerTag', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, delay:1.3 })
        gsap.fromTo('.buttonWrapper', { y: '50px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger:.2 })
        gsap.fromTo('.socials', { x: '-100px', opacity: 0 }, { x: 0, opacity: 1, duration: .5 })
        gsap.fromTo('.wavesBg', {x:40, scale:1}, {x:-40, scale:1.08, duration:5, repeat:-1, yoyo:true, yoyoEase:'in-out'})

        const tl = new TimelineMax({repeat:-1})

        let border = document.querySelectorAll('.border')


    })

    return (
        <div className=" w-full min-h-screen relative rounded-3xl p-3">

        {/* <div className="w-full opacity-35 h-full absolute" style={{background: 'linear-gradient(180deg, transparent, transparent, white),url("https://img.freepik.com/free-vector/abstract-3d-perspective-indoor-wireframe-vector-design_1017-39916.jpg?w=1480&t=st=1721340069~exp=1721340669~hmac=92b75fdf85fd2ddcebeff1d58d6dd249ff16a456a98f1f0522571d755edaf98e")', backgroundPositionX:'50%',  backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div> */}
            <div className=" wavesBg w-full h-screen opacity-[4%] fixed z-[-1] top-0 left-0"><img src={waves} alt="" /></div>
            <div id='home' className="header h-screen mx-auto max-w-[1500px] bg-no-repeat bg-cover">
                
            <div className=" max-w-[800px] mx-auto relative top-[50%] translate-y-[-50%]">
            <div className=" lg:px-0 align-center my-10  mx-auto text-center  ">
                
                <div className=" space-y-5">
                        <div>
                        <h2 className='name font-montserrat text-xl font-[600] tracking-tight text-[#B17457]'>FREELANCER</h2>
                        <h1 className="name text-5xl lg:text-6xl xl:text-8xl font-inter tracking-tighter text-[#2b2b2b] font-[500] uppercase m-0 w-full">Jakub Kontek</h1>
                        </div>

                            <div className="flex mb-5 gap-2 mx-auto justify-center ">
                                <div className="headerBorder w-2/5">
                                    <div className="w-full h-[2px] bg-gradient-to-r from-[#fff] to-[#0f0f0f] relative top-[50%] translate-y-[-50%]"></div>
                                </div>
                                <p className="headerTag font-montserrat font-[700] text-[#0f0f0f]">WEB DESIGNER</p>
                            </div>

                                    <p className="name font-inter text-lg leading-5 font-[400] capitalize w-full sm:w-2/3 mx-auto lg:w-full text-justify">Specjalizuję się w tworzeniu stron internetwocyh,
                                        przyciągających uwagę rolek na Instagramie i prowadzeniu kampanii w mediach społecznościowych dla marek. Ożywmy Twoją markę!
                                    </p>


                            <div className="flex gap-4 flex-col sm:flex-row mt-5 justify-center ">
                                <div className="buttonWrapper">
                                    <Link to="about" spy={true} smooth={true}><button className="w-full sm:w-fit bg-[#0f0f0f]  text-white font-[500] px-2 py-3 rounded-xl text-md font-inter transition-all duration-200 hover:opacity-85">SPRAWDŹ WIĘCEJ</button></Link>
                                </div>
                                <div className="buttonWrapper">
                                    <Link to="contact" spy={true} smooth={true}><button className="w-full sm:w-fit  px-2 py-3 rounded-xl text-md font-inter font-[500] bg-[#e4e4e4] transition-all duration-200 hover:opacity-70 ">SKONTAKTUJ SIĘ</button></Link>
                                </div>
                            </div>

                            <div className="flex gap-3 my-6 justify-center lg:ml-10">
                                {socials.map((socialElement, i)=>{
                                return(
                                    <div key={i}>
                                    <a href={socialElement.link}  className=' text-3xl text-black hover:text-[rgb(216,216,216)] transition-all duration-150'> {socialElement.icon}</a>
                                    </div>
                                )
                                })}
                            </div>

                            <div className="grid md:grid-cols-3 w-full sm:w-2/3 lg:w-full mx-auto justify-center gap-2 px-6">
                                    <div className=" rounded-3xl bg-[#0f0f0f] p-5 ">
                                        <p className=" font-montserrat font-[500] text-lg text-white">Lorem ipsum dolor </p>
                                    </div>

                                    <div className=" rounded-3xl bg-[#e4e4e4] p-5 ">
                                        <p className=" font-montserrat font-[500] text-lg">Lorem ipsum dolor sit.</p>
                                    </div>

                                    <div className=" rounded-3xl bg-[#c9896b] p-5 ">
                                        <p className=" font-montserrat font-[500] text-lg">Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                </div>


                            </div>

            </div>
        </div>

        
        </div>
    )
}

export default Header;
