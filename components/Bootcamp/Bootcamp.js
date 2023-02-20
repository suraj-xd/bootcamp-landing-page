import Run from "../Task1/Run";
import { useEffect } from "react"

export default function Bootcamp() {
    useEffect(()=>{
            Run(["Job Ready Mega Bootcamp"])
    },[])
    return (
        <>
            {/* <div className="">
                <div class='wrap z-20'>
                    <div class='top-plane'></div>
                    <div class='bottom-plane'></div>
                </div>
            </div>
            <div className="header flex flex-col justify-center items-center">
                <p className="text-white relative top-[10rem] text-2xl bg-gray-800 p-5 rounded-2xl ">crackDSA presents</p>
                <h1 data-shadow='anveshna ' className="relative top-[10rem] text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] ">anveshna</h1>
                <h1 data-shadow='anveshna ' className="relative top-[10rem] text-3xl font-sans">Mega Bootcamp</h1> */}
            {/* </div> */}
            {/*  */}


            <div class='wrap z-20'>
                <div class='top-plane'></div>
                <div className="header flex flex-col justify-center items-center">
                    <p className="text-white relative top-[20rem] text-2xl bg-gray-800 p-5 rounded-2xl ">crackDSA presents</p>
                    <h1 data-shadow='anveshna ' className="relative top-[23rem] text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] comfort ">anveshna</h1>
                {/* <div class="relative top-[16rem] bg-gray-100 comfort text-black py-3 px-8 rounded-lg font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl"></div> */}
                   <div className="relative top-[23.5rem] bg-gray-100 comfort text-black py-3 px-8 rounded-lg w-[22rem] md:w-[30rem] flex justify-center items-center ">

                    <h2 d   ata-shadow='anveshna ' className="text  font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl z-[99]">Job Ready Mega Bootcamp</h2>
                   </div>
                </div>
                <div class='bottom-plane'></div>
            </div>
            {/* <div className="flex justify-center  items-center">
                <div className="inline-flex">

                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                </div>
            </div> */}

            <div class="mx-auto relative -top-48 w-24 h-1 mb-20 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
            <div className="bg-white relative -top-48">
            </div>
           {/* <div className="bg-white w-40 h-40"></div>  */}
        </>

    )
}