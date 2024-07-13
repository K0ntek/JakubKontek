 import React from "react";
import VerticalBlocks from "./Vertical";
import Experience from "./Experience";
import Pricing from "./Pricing";
import { PiPuzzlePieceThin } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GoGraph } from "react-icons/go";


const About = () => {

    const offerElements = [
        {
          name: 'PUNKTUALNOŚĆ',
          icon: <PiPuzzlePieceThin />
        },
        {
          name: 'PROFESJONALIZM',
          icon: <GoGraph />
        },
        {
          name: 'ZAUFANIE',
          icon: <VscWorkspaceTrusted />
        },
      ]

    return (
        <>
            {/* <div className="w-full h-[150px] mt-[5px] bg-gradient-to-t from-black to-transparent"></div> */}
            <div className="px-5 bg-white rounded-[50px] h-fit py-[50px] z-[99] my-[50px]">
            {/* <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#dbdbdb] to-[#030303] text-dm uppercase py-5 font-montserrat tracking-wide text-center font-[600]'>Moja misja, twoja satysfakcja</h1> */}
                <div id='about' className="grid grid-cols-2 gap-6">

                    <div>
                    <h2 className=" font-montserrat text-4xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#000000] to-[#353535]
                                inline-block text-transparent bg-clip-text">O MNIE</h2>

                        <p className=" font-montserrat text-xl font-[600] text-justify mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta ut, iusto obcaecati, debitis laborum facere commodi labore aspernatur similique aliquam sunt aut libero odio perferendis molestias? Maxime, numquam dolores.</p>
                    </div>

                       <div className=" text-center">
                            <h2 className=" font-montserrat text-4xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#000000] to-[#353535]
                                inline-block text-transparent bg-clip-text">CO MNIE CECHUJE ?</h2>

                            <div className=" flex flex-wrap gap-3 mt-6 mx-auto justify-center">
                            {offerElements.map((element, i)=>{
                                return(
                                <div className=' w-[180px] aspect-square text-white text-center bg-black/50 rounded-3xl'>
                                    {/* bg-[rgba(183,134,97,.05)] */}
                                    <div className=' relative top-[50%] translate-y-[-50%] space-y-5'>
                                        <div className="w-full mx-auto">
                                            <h1 className=' text-7xl justify-center mx-auto text-center w-fit text-[#996c50]'>{element.icon}</h1>
                                        </div>
                                        <h1 className=' text-lg font-montserrat font-[600]'>{element.name}</h1>
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                       </div>


                </div>

            </div>
        </>
    )
}

export default About;
