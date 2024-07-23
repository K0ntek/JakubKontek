import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

const Pricing = () => {

    const pricingOffer =[
        {
            offer: 'Strona internetowa z formularzem kontaktowym',
            price: '1500',
            subheading: 'Web design',
            month: '',
            slash: '',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Autorskie logo",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Estetyczny wygląd",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Indywidualne podejście",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Personalizacja",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Interakcje społecznościowe",
                },
                
            ]
        },

        {
            offer: 'Prowadzenie Twoich social media',
            price: '600',
            subheading: 'Marketing',
            month: 'miesiąc',
            slash: '/',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Facebook",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Elastyczność ",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "10 postów miesięcznie",
                },
            ]
        },

        {
            offer: ' Strona internetowa + prowadzenie Twoich social media',
            price: ' 1850',
            subheading: 'Super oferta',
            month: '',
            slash: '',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Strona internetowa - 1400PLN",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Social media - 450PLN miesięcznie",
                },
            ]
            },

        {
            offer: 'Stworzenie rolki na Instagrama/Tiktoka',
            price: '150',
            subheading: 'Marketing',
            month: 'sztuka',
            slash: '/',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Prowadzenie twojego kanału",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Promowanie produktu",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Promowanie usługi",
                },
            ]
          },

          {
            offer: 'Film promocyjny',
            price: '1500',
            subheading: 'Marketing',
            month: '',
            slash: '',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Unikatowa reklama",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Indywidualne podejście",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Promowanie produktu",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Promowanie usługi",
                },
            ]
          },

        {
            offer: 'Pozycjonowanie strony (SEO)',
            price: '150',
            subheading: 'SEO',
            month: 'miesiąc',
            slash: '/',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Zwiększenie widoczności w wyszukiwarkach",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Zwiększenie ruchu na stronie",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Przewaga nad konkurencją",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Budowanie zaufania i wiarygodności",
                },
            ]
        },

        {
            offer: 'Sesja zdjęciowa produktowa / event',
            price: '2000',
            subheading: 'Fotografia',
            month: '',
            slash: '',
            pros: [
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Zdjęcia twojego produktu",
                },
                {
                    icon: <AiOutlineCheck/>,
                    prosElement: "Zdjęcia z wydarzeń w twojej firmie",
                },
            ]
        },
    ]

  return (
    <div id='pricing' className=' bg-zinc-950 px-5 w-full py-[40px] rounded-[40px] '>
       <div>
                <h2 className=' font-montserrat text-lg md:text-xl font-[600] tracking-tight bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(208,89,91)] inline-block text-transparent bg-clip-text'>PROJEKTY</h2>
       </div>
            <h2 className=' font-montserrat text-4xl md:text-6xl font-[500] tracking-wide bg-gradient-to-r from-[#e6e6e6] to-[#303030] inline-block text-transparent bg-clip-text'>MOJA OFERTA</h2>
    
        <div className='text-center flex flex-wrap mx-auto justify-center gap-5 mt-10'>
            {pricingOffer.map((offerElement, i)=>{
                return(
                    <div>
                        <div className=' text-white group offerElement min-w-[320px] min-[420px]:w-[400px] border-[1px] border-white/50 p-4 h-full cursor-pointer font-montserrat py-5 rounded-xl space-y-4 relative shadow-[0px_0px_10px_0px] hover:shadow-[0px_0px_20px_0px] shadow-white/10 hover:shadow-white/80 transition-all duration-200' style={{background: `linear-gradient(80deg, ${offerElement.startBackground}, ${offerElement.endBackground})`, backgroundPosition:'50%', backgroundRepeat:'no-repeat', backgroundSize:'cover',  color: `${offerElement.text}`, aspectRatio: `${offerElement.aspectRatio}`}}>
                            
                            <div className=' relative min-h-[400px] pb-[60px]'>
                                <div className="w-fit mx-auto">
                                    <p className=' border-[1px] border-[rgb(255,131,42)] py-1 px-4 font-montserrat font-[600] rounded-full bg-gradient-to-r from-[rgb(156,96,203)] via-[rgb(208,89,91)] to-[rgb(212,130,71)] inline-block text-transparent bg-clip-text'>{offerElement.subheading}</p>
                                </div>
                                    <h2 className=' absolute right-0 -top-3 text-[rgb(255,151,77)] font-megrim text-3xl opacity-90 text-start ml-4 text-md font-extrabold '>{i+1}</h2>
                                <h2 className=' text-3xl font-[600] min-h-[120px] mt-5'>{offerElement.offer}</h2>

                                    <h1 className=' text-4xl font-[600] font-montserrat'>{offerElement.price} <span className=' text-sm relative -left-1 text-[rgb(255,223,224)]'>PLN</span> <span className=' relative -left-3 top-4 text-5xl font-[100] text-[rgb(170,170,170)]'>{offerElement.slash}</span> <span className=' text-xl relative top-4 -left-5'>{offerElement.month}</span></h1>

                                <div className="w-3/5 h-[1px] bg-gradient-to-r from-[rgb(255,131,42)] to-[rgb(255,88,91)] mx-auto my-6"></div>

                                <ul className=' space-y-2 text-start ml-6'>
                                    {offerElement['pros'].map((prosEl, i)=>{
                                        return(
                                            <li className=' font-montserrat text-sm font-[600] flex gap-1'><span className=' mt-[3px] text-[rgb(255,131,42)]'>{prosEl.icon}</span>{prosEl.prosElement}</li>
                                        )
                                    })}
                                </ul>

                                </div>

                                        <button className=" absolute bottom-4 left-[50%] translate-x-[-50%] font-montserrat font-[600] w-3/5 py-3  bg-gradient-to-r from-[rgb(255,131,42)] to-[rgb(255,88,91)] text-white mt-5 rounded-md hover:tracking-wider transition-all duration-150">WYBIERZ</button>
                    </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Pricing