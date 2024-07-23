import React, { useEffect } from 'react'
import { IoTriangleOutline } from "react-icons/io5";
import gsap from 'gsap';

const AboutTriangles = () => {

    useEffect(()=>{
        gsap.fromTo('.triangle', {y: 20}, {y: 0, duration:2, yoyo:true, repeat:-1, ease: 'power2', delay:.2})
    })

  return (
    <div className=''>
        <div className="absolute top-0 left-0 "><IoTriangleOutline className='triangle text-2xl rotate-45'/></div>
        <div className="absolute top-0 right-0 "><IoTriangleOutline className='triangle text-2xl rotate-[315deg]'/></div>
        <div className="absolute bottom-0 left-0"><IoTriangleOutline className='triangle text-2xl rotate-[225deg]'/></div>
        <div className="absolute bottom-0 right-0"><IoTriangleOutline className='triangle text-2xl rotate-[135deg]'/></div>
    </div>
  )
}

export default AboutTriangles