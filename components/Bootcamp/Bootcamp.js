import Run from "../Task1/Run";
import { useEffect } from "react"

export default function Bootcamp() {
    useEffect(() => {
        Run(["Job Ready Mega Bootcamp"])
    }, [])
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
                    <h1 data-shadow='anveshna ' className="headerTitle relative top-[23rem] text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] comfort ">anveshna</h1>
                    {/* <div class="relative top-[16rem] bg-gray-100 comfort text-black py-3 px-8 rounded-lg font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl"></div> */}
                    <div className="relative top-[23.5rem] bg-gray-100 comfort text-black py-3 px-8 rounded-lg w-[22rem] md:w-[30rem] flex justify-center items-center ">

                        <h2 d ata-shadow='anveshna ' className="text  font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl z-[99]">Job Ready Mega Bootcamp</h2>
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
            <div className=" relative -top-48">
                <h2 className="text-[2.5rem] text-center sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white orbi"> what's in for you?</h2>
                <div class="mx-auto relative w-10 h-1 my-20 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
                <div>
                    <header>
                        <div class="orbits">
                            <div class="left">
                                <div class="outer" data-orbit-rotate="right">
                                    <img src="https://picsum.photos/32/32?random=1" alt="" />
                                    <img src="https://picsum.photos/32/32?random=2" alt="" />
                                    <img src="https://picsum.photos/32/32?random=3" alt="" />
                                    <img src="https://picsum.photos/32/32?random=4" alt="" />
                                </div>
                                <div class="inner" data-orbit-rotate="left">
                                    <img src="https://picsum.photos/32/32?random=5" alt="" />
                                    <img src="https://picsum.photos/32/32?random=6" alt="" />
                                    <img src="https://picsum.photos/32/32?random=7" alt="" />
                                    <img src="https://picsum.photos/32/32?random=8" alt="" />
                                </div>
                            </div>
                            <div class="right">
                                <div class="outer" data-orbit-rotate="left">
                                    <img src="https://picsum.photos/32/32?random=9" alt="" />
                                    <img src="https://picsum.photos/32/32?random=10" alt="" />
                                    <img src="https://picsum.photos/32/32?random=11" alt="" />
                                    <img src="https://picsum.photos/32/32?random=12" alt="" />
                                </div>
                                <div class="inner" data-orbit-rotate="right">
                                    <img src="https://picsum.photos/32/32?random=13" alt="" />
                                    <img src="https://picsum.photos/32/32?random=14" alt="" />
                                    <img src="https://picsum.photos/32/32?random=15" alt="" />
                                    <img src="https://picsum.photos/32/32?random=16" alt="" />
                                </div>
                            </div>

                        </div>
                        <div class="content">
                            <p className="comfort text-extrabold text-blue-300 lowercase text-base  sm:text-lg md:text-xl lg:text-2xl">with Anveshna 2023</p>
                            <h1 class="logo text-gray-300 text-xl  sm:text-3xl md:text-4xl lg:text-6xl">Everything's Covered<span className="text-white"></span></h1>
                            <p className="comfort text-gray-400 kanit orbi text-sm  sm:text-base md:text-lg lg:text-xl">To Go From Zero to Mastery🚀</p>
                        </div>
                    </header>
                    <div class="mx-auto relative w-10 h-1 my-20 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
                    <div id="topPerfomers" className="flex flex-wrap justify-center items-center">

                    </div>
                    <div id="prizes" className="relative">
                        <div class="box-with-text flex justify-center items-center mt-5">
                            PRIZES
                        </div>
                        <h1 className="my-10 text-white text-center text-2xl md:text-3xl lg:text-4xl orbi">For top Performers / Learners</h1>
                        <div className="flex justify-center  items-center">
                            <div className="inline-flex">

                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap items-center text-white orbi my-10">
                            <div className="flex justify-center items-center flex-col">
                                <img className="h-24 w-24 sm:h-40 sm:w-40 md:h-56 md:w-56 mx-10 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/5330/5330963.png" />
                                <p className="text-base  sm:text-lg md:text-xl lg:text-2xl" >Smart Watch</p>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <img className="h-24 w-24 sm:h-40 sm:w-40 md:h-56 md:w-56 mx-10 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/5906/5906180.png" />
                                <p className="text-base  sm:text-lg md:text-xl lg:text-2xl">TWS Earbuds</p>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <img className="h-24 w-24 sm:h-40 sm:w-40 md:h-56 md:w-56 mx-10 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/918/918979.png" />
                                <p className="text-base  sm:text-lg md:text-xl lg:text-2xl">Mechanical Keboard</p>
                            </div>


                        </div>
                        <div class="mx-auto relative w-[80%] h-[1px] my-5 bg-gray-400"></div>

                        <h1 className="my-10 text-white text-center text-2xl md:text-3xl lg:text-4xl orbi">But there's more...</h1>

                        <div className="flex justify-center flex-wrap items-center text-white orbi my-10">
                            <div className="flex justify-center items-center flex-col">
                                <img className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 mx-10 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/6232/6232684.png" />
                                <p className="text-sm  sm:text-md md:text-lg lg:text-xl" >crackDSA Merch</p>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <img className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 mx-10  my-5 mb-5" src="https://cdn-icons-png.flaticon.com/512/8074/8074470.png" />
                                <p className="text-sm  sm:text-md md:text-lg lg:text-xl">Amazon Vouchers</p>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <img className="h-20 w-20 sm:h-32 sm:w-32 md:h-40 md:w-40 mx-10  my-5 mb-5" src="https://cdn-icons-png.flaticon.com/512/2161/2161906.png" />
                                <p className="text-sm  sm:text-md md:text-lg lg:text-xl">Cool Stickers</p>
                            </div>


                        </div>

                        {/* <div className="flex justify-center  items-center">
                            <div className="inline-flex">

                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                            </div>
                        </div> */}
                        <div id="certificates" className="flex flex-wrap justify-center items-center">
                            <div class="typewriter">
                                <div class="slide"><i></i></div>
                                <div class="paper"></div>
                                <div class="keyboard"></div>
                            </div>
                            <h1 className="text-xl text-white text-center  sm:text-2xl md:text-3xl lg:text-4xl m-10 kanit">Certificates to all the participants</h1>
                        </div>
                    </div>
                    <div class="mx-auto relative w-32 h-1 my-10 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full"></div>
                    <h2 className="text-[2.5rem] text-center sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white orbi mb-16">so what're you waiting for?</h2>

                    <div className="flex justify-center items-center flex-col text-white">
                        {/* <div className="h-[3px] rounded-full w-5 bg-gray-600 m-2 "></div> */}
                        {/* <h1 className="">{festName}</h1> */}
                        <button className="festButton mt-5 text-2xl md:text-3xl lg:text-4xl ">
                            {"Register Now!"}
                        </button>
                        <div className="flex justify-center items-center m-5">
                            <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/5408/5408495.png" />
                            <p className="kanit my-5 mx-5">*limited seats, mark your slot!</p>
                        </div>
                    </div>
                    
                    <div class="mx-auto relative w-[80%] h-[1px] my-5 bg-gray-400"></div>

                </div>
            </div>

        </>

    )
}