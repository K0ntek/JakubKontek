import React from 'react'

const Pricing = () => {

    const pricingOffer =[
        {
            offer: 'Strona internetowa z formularzem kontaktowym',
            price: '1500 pln',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
            endBackground:'#090909',
            startBackground: '#191919',
            text: '#fff',
            // gridColumn: '',
            // aspectRatio: '1/1',
            bgImage: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            offer: 'Prowadzenie Twoich social media',
            price: '600 pln',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            endBackground:'#090909',
            startBackground: '#111',
            text: '#fff',
            // gridColumn: '',
            // aspectRatio: '1/1',
            bgImage: 'https://images.unsplash.com/photo-1571239982287-9a7a17c1b9c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            offer: ' Strona internetowa + prowadzenie Twoich social media',
            price: ' 1400 pln + 450 pln',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            endBackground:'#cfcfcf',
            startBackground: '#fff',
            text: '#111',
            // gridColumn: '',
            // aspectRatio: '1/1',
            bgImage: 'https://images.unsplash.com/photo-1571239982287-9a7a17c1b9c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            offer: 'Stworzenie rolki na Instagrama/Tiktoka lub film promocyjny',
            price: '150 pln',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            endBackground:'#090909',
            startBackground: '#111',
            text: '#fff',
            // gridColumn: '',
            // aspectRatio: '1/1',
            bgImage: 'https://images.unsplash.com/photo-1571239982287-9a7a17c1b9c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

  return (
    <div id='pricing' className=' bg-zinc-950 px-5 w-full py-[40px] rounded-[40px] my-10 space-y-6'>
        <h2 className=' font-montserrat text-6xl font-[500] tracking-wide
                                bg-gradient-to-r from-[#e6e6e6] to-[silver]
                                inline-block text-transparent bg-clip-text'>MOJA OFERTA</h2>
                {/* <h1 className=' font-montserrat text-5xl font-[600] mt-1 mb-6 text-[#efefef]'>OUR PRICING OFFER</h1> */}
    
        <div className='text-center flex flex-wrap mx-auto justify-center gap-5'>
            {pricingOffer.map((offerElement, i)=>{
                return(
                    <div>
                        <div className=' group offerElement w-[320px] min-h-[300px] p-4 h-full cursor-pointer font-montserrat py-5 rounded-3xl space-y-4 relative hover:shadow-[0px_0px_20px_0px] hover:shadow-white/10 transition-all duration-200' style={{background: `linear-gradient(80deg, ${offerElement.startBackground}, ${offerElement.endBackground})`, backgroundPosition:'50%', backgroundRepeat:'no-repeat', backgroundSize:'cover',  color: `${offerElement.text}`, aspectRatio: `${offerElement.aspectRatio}`}}>
                            
                            <h2 className=' text-start ml-4 text-md font-[600] '>OPCJA <span className='text-[#996c50] font-[900]'>{i+1}</span></h2>
                         <h2 className=' text-xl font-[600] text-justify'>{offerElement.offer}</h2>

                        <div className=' absolute bottom-10 left-[50%] translate-x-[-50%] w-full'>
                            <h1 className=' text-3xl font-[600]'>{offerElement.price}</h1>
                        </div>
                        <p className=' absolute top-1 right-4 font-montserrat font-[600] text-sm group-hover:tracking-widest transition-all duration-150'>ZOBACZ WIĘCEJ</p>
                    </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Pricing