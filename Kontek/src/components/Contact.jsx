import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import { FaClock } from "react-icons/fa6";

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) =>{
      e.preventDefault();

      //emailjs templates
      const serviceID = 'service_ctjauxn'
      const templateID = 'template_lls2shr'
      const publicKey = 'OrU4sSzJwY303AR90'

      const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: {
          user_name: name,
          user_mail: email,
          message: message,
          to_name: 'Kuba'
        }
      }


      try{
        const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
        console.log(res.data);
        setName('')
        setEmail('')
        setMessage('')

      } catch (error){
        console.error(error)
      }
    }

  return (
    <div className=' my-7 grid md:grid-cols-2 py-10 gap-5' id='contact'>

    <div className=' max-w-[700px] lg:w-full mx-auto bg-[#ebebeb] rounded-[40px] p-10'>
            <div className='relative top-[50%] translate-y-[-50%] mx-auto max-w-[500px]'>
                <div className=' space-y-3 font-montserrat font-[500]'>
                <h1 className=' font-montserrat text-4xl font-[500] mt-1 mb-6'>Stwórzmy razem coś fajnego!</h1>

                        <div>
                            <div className="flex space-x-2 ">
                                <MdEmail className=' mt-2 text-xl rounded-full'/>
                                <p className='text-xl mt-1'>Napisz</p>
                            </div>
                            <p className=' ml-3 font-montserrat font-[500]'>jakub.kontek05@gmail.com</p>
                        </div>
                        
                      <div>
                            <div className="flex space-x-2">
                                <FaPhoneAlt className=' mt-2 text-xl rounded-full'/>
                                <p className='text-xl mt-1'>Zadzwoń</p>
                            </div>
                            <p className=' ml-3 font-montserrat font-[500]'> +48 790 839 086</p>
                      </div>

                    {/* <img className=' aspect-[25/9] rounded-[40px] object-cover' src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

                </div>
            </div>
            </div>

      <div className=' bg-white rounded-[40px] p-10'>
          <div className=" mb-6">
            <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>KONTAKT</h2>
            <h1 className=' text-5xl font-montserrat font-[700] text-black'>NAPISZ DO MNIE!</h1>
          </div>

            <div className=' text-black'>
                <form onSubmit={handleSubmit} className='space-y-5'>
                <div className=''>
                    <h1 className=' font-inter font-[500] text-[12px] ml-10'>IMIĘ</h1>
                    <input type="text" onChange={(e)=> setName(e.target.value)} id="name" required  className='bg-[#e7e7e7] w-full p-2 rounded-2xl focus:outline-none' value={name}/><br />
                </div>
                <div className=''>
                    <h1 className=' font-inter font-[500] text-[12px] ml-10'>E-MAIL</h1>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} id="email" required  className='bg-[#e7e7e7] w-full p-2 rounded-2xl focus:outline-none' value={email}/><br />
                </div>
                <div className=''>
                    <h1 className=' font-inter font-[500] text-[12px] ml-10'>WIADOMOŚĆ</h1>
                    <textarea onChange={(e)=> setMessage(e.target.value)} id="message" required cols="30" rows="10" className='bg-[#e7e7e7] p-2 w-full rounded-2xl focus:outline-none' value={message}></textarea><br />
                </div>
                <div className=' ml-10'><button type='submit' className='bg-black px-5 py-2 text-white rounded-xl hover:tracking-wider transition-all duration-200 hover:bg-[#161616]'> WYŚLIJ</button></div>
                </form>
            </div>
      </div>

        {/* <div className='md:grid lg:grid-cols-2 gap-5 mx-auto hidden max-h-[600px]'>
            <div className=" lg:col-span-2 overflow-hidden rounded-[30px] "><img src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='w-full object-cover h-full' /></div>
            <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D" alt="image" className='rounded-[30px] hidden lg:block'/>
            <img src="https://images.unsplash.com/photo-1653289755854-a41949e96282?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="image" className='rounded-[30px]'/>
        </div> */}

    </div>
  )
}

export default Contact