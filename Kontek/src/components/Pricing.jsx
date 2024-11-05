import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-scroll';
import pricingOffer from "../data.json"
import waves from '../../public/waves.png'

const Pricing = ({chooseOption, setOption, setPrice}) => {

        // {
        //     "offer": "Pozycjonowanie strony (SEO)",
        //     "price": 150,
        //     "subheading": "SEO",
        //     "month": "miesiąc",
        //     "slash": "/",
        //     "pros": [
        //         {
        //              
        //             "prosElement": "Zwiększenie widoczności w wyszukiwarkach",
        //         },
        //         {
        //              
        //             "prosElement": "Zwiększenie ruchu na stronie",
        //         },
        //         {
        //              
        //             "prosElement": "Przewaga nad konkurencją",
        //         },
        //         {
        //              
        //             "prosElement": "Budowanie zaufania i wiarygodności",
        //         },
        //     ]
        // },

        // {
        //     "offer": "Sesja zdjęciowa produktowa / event",
        //     "price": 100,
        //     "subheading": "Fotografia",
        //     "month": "zdjęcie",
        //     "slash": "/",
        //     "pros": [
        //         {
        //              
        //             "prosElement": "Zdjęcia twojego produktu",
        //         },
        //         {
        //              
        //             "prosElement": "Zdjęcia z wydarzeń w twojej firmie",
        //         },
        //     ]
        // },
        

  return (
    <div id='pricing' className='  px-10 w-full py-[40px] rounded-[40px] '>
       {/* <div>
                <h2 className=' font-montserrat text-lg ml-10 md:text-xl font-[600] tracking-tight bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(208,89,91)] inline-block text-transparent bg-clip-text'>PROJEKTY</h2>
       </div> */}

    
        <div className=' mx-auto'>
            <div className="w-fit mx-auto">
                <div className="w-1/3 bg-gradient-to-r from-[#e4e4e4] to-[#0f0f0f] h-[2px] mx-auto mb-2"></div>
                <h2 className=' font-montserrat text-center text-2xl sm:text-4xl ml-10 md:text-6xl font-[500] text-[#2b2b2b]'>MOJA OFERTA</h2>
                <p className=' text-center font-montserrat font-[500] text-lg'>Wybierz jedną z interesujących cię ofert i ciesz się z owocnej współpracy!</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-3xl p-4 flex flex-wrap mx-auto justify-center gap-5 mt-10">
            {pricingOffer.map((offerElement, i)=>{
                return(
                    <div key={i+1} className=' max-w-[390px] my-2 w-full rounded-2xl relative' style={{background : `#${offerElement.color}`}}>
                        <img src={waves} alt=""  className=' absolute top-0 left-0 w-full h-full opacity-10'/>
                        <div className='  group offerElement w-full  p-4 h-full cursor-pointer font-montserrat py-5 rounded-3xl space-y-4 relative transition-all duration-200' style={{background: `linear-gradient(80deg, ${offerElement.startBackground}, ${offerElement.endBackground})`, backgroundPosition:'50%', backgroundRepeat:'no-repeat', backgroundSize:'cover',  color: `${offerElement.text}`, aspectRatio: `${offerElement.aspectRatio}`}}>
                            
                            <div className=' relative min-h-[400px] pb-[60px]'>
                                <div className="w-fit">
                                    <p className='  py-1 px-4 font-montserrat font-[600] rounded-full border-[1px] border-black'>{offerElement.subheading}</p>
                                </div>
                                    {/* <h2 className=' absolute right-0 -top-3 text-[rgb(255,151,77)] font-megrim text-3xl opacity-90 text-start ml-4 text-md font-extrabold '>{i+1}</h2> */}
                                <h2 className=' text-2xl tracking-tight px-5 font-[600] min-h-[120px] mt-5 uppercase'>{offerElement.offer}</h2>

                                    <h1 className=' text-center text-4xl font-[600] font-montserrat'>{offerElement.price} <span className=' text-sm relative -left-1 '>PLN</span> <span className=' relative -left-3 top-4 text-5xl font-[100] '>{offerElement.slash}</span> <span className=' text-xl relative top-4 -left-5'>{offerElement.month}</span></h1>

                                <div className="w-3/5 h-[1px] bg-[#0f0f0f] mx-auto my-6"></div>

                                <ul className=' space-y-2 text-start ml-6'>
                                    {offerElement['pros'].map((prosEl, i)=>{
                                        return(
                                            <li key={i} className=' font-montserrat text-sm font-[600] flex gap-1'><span className=' mt-[3px] text-[#0f0f0f]'><AiOutlineCheck/></span>{prosEl.prosElement}</li>
                                        )
                                    })}
                                </ul>

                                </div>

                                        <Link to="contact" smooth={true} spy={true}>
                                            <button onClick={()=>{setOption(`${offerElement.offer}`);
                                                                    setPrice(`${offerElement.price}PLN ${offerElement.slash} ${offerElement.month}`)}} className=" absolute bottom-4 left-[50%] translate-x-[-50%] font-montserrat font-[600] w-3/5 py-3  bg-[#0f0f0f] text-white mt-5 rounded-md hover:tracking-wider transition-all duration-150">WYBIERZ</button>
                                        </Link>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>

    </div>
  )
}

export default Pricing