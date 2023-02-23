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

                    <p className="text-white relative top-[17rem] w-[95%] text-2xl p-5 rounded-2xl backdrop-blur-sm flex justify-between items-center px-8 flex-wrap">
                        <a href="/" className="text-extrabold text-sm sm:text-xl md:text-2xl">bootcamp.<span className="text-white font-extrabold kanit">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span></a>
                        <a href="https://crackdsa.com/" className="text-sm sm:text-base md:text-lg kanit"> About</a>
                    </p>

                    {/* <p className="text-white relative top-[18.2rem] bg-gray-900 text-xl p-5 rounded-2xl">crackDSA presents</p> */}
                    <h1 data-shadow='anveshna ' className="headerTitle relative top-[26rem] sm:top-[23rem] text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[8.5rem] comfort ">anveshna</h1>
                    {/* <div class="relative top-[16rem] bg-gray-100 comfort text-black py-3 px-8 rounded-lg font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl"></div> */}
                    <div className="relative text-center top-[27rem] sm:top-[23.5rem] bg-gray-100 comfort text-black py-2 px-2 rounded-lg w-[17rem] md:w-[30rem] flex justify-center items-center ">

                        <h2 d ata-shadow='anveshna ' className="text  font-extrabold text-sm  sm:text-lg md:text-xl lg:text-2xl z-[99]">Job Ready Mega Bootcamp</h2>
                    </div>


                    <button class="relative top-[30rem] sm:top-[28rem] z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px] border-[1px] border-gray-900 shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-white
        bg-gradient-to-r from-blue-200 via-blue-500 to-green-200 orbi font-extrabold text-base md:text-xl">
                        Register
                    </button>
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
            <div class="mx-auto relative -top-48 w-10 h-1 my-5 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
            <div id="overview" className="text-white relative -top-48 my-10">
                <h1 className="orbi font-bold mx-10 my-5 sm:mx-20 text-2xl sm:text-3xl" >Overview - </h1>
                <div className="flex flex-col items-center justify-start mx-10 my-5 sm:mx-20">
                    <p className="my-5 text-sm md:text-lg hover:border-blue-300 border-blue-300 hover:border-l-[2px] transition-all ease-in-out hover:pl-2 md:hover:pl-4">crackDSA is the premier online destination for college students seeking to excel in coding, competitive programming, data structures and algorithms, and other technical skills. Unlocking the full potential of college students through tailored</p>
                    <p className="my-5 text-sm md:text-lg hover:border-purple-300 border-purple-300 hover:border-l-[2px] transition-all ease-in-out hover:pl-2 md:hover:pl-4">Our expert-led tech bootcamps and masterclasses provide hands-on experience and guidance from industry professionals. Our online resources are up-to-date and relevant, ensuring that students have access to the most current information.
                    </p>


                </div>


                <div className="flex justify-start mx-10 my-5 sm:mx-20 kanit">
                    <button>Know More
                    </button>
                    <img className="h-8 w-8 mx-2 cursor-pointer hover:brightness-90 hover:scale-105 rounded-[90px]  " src="https://img.icons8.com/glyph-neue/64/FFFFFF/youtube-play.png" />

                </div>
                {/* <div id="overviewbtns" className="mx-10 my-5 sm:mx-20">
                    <button className="festButton mt-2 text-sm md:text-lg lg:text-xl ">
                        {"Register Now!"}
                    </button>
                </div> */}
            </div>

            <div class="mx-auto relative -top-48 w-24 h-1 mb-20 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
            <div className=" relative -top-48">
                <h2 className="text-[2.5rem] text-center sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white orbi"> what's in for you?</h2>
                <div class="mx-auto relative w-10 h-1 my-20 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
                <div>
                    <header>
                        <div class="orbits">
                            <div class="left">
                                <div class="outer" data-orbit-rotate="right">
                                    <img src="a.jpeg" alt="" />
                                    <img src="i.jpeg" alt="" />
                                    <img src="f.jpeg" alt="" />
                                    <img src="d.jpeg" alt="" />
                                    {/* <img src="d.jpeg" alt="" /> */}
                                    {/* <img src="g.jpeg" alt="" /> */}
                                    {/* <img src="d.jpeg" alt="" /> */}
                                </div>
                                <div class="inner" data-orbit-rotate="left">
                                    <img className="bg-white p-1" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                                    <img className="bg-white p-1" src="https://cdn-icons-png.flaticon.com/512/4943/4943029.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" />
                                </div>
                            </div>
                            <div class="right">
                                <div class="outer" data-orbit-rotate="left">
                                    <img src="e.jpeg" alt="" />
                                    <img src="g.jpeg" alt="" />
                                    <img src="h.jpeg" alt="" />
                                    <img src="c.jpeg" alt="" />
                                </div>
                                <div class="inner" data-orbit-rotate="right">
                                    {/* <img src="i.jpeg" alt="" /> */}
                                    <img className="bg-white p-1" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3630/3630471.png" alt="" />
                                    <img className="" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3459/3459528.png" alt="" />
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


                </div>
                <div className="flex justify-center  items-center">
                    <div className="inline-flex">

                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                    </div>
                </div>
                <h2 className="text-[2.5rem] text-left sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white kanit ml-10  ">The <span className="border-b-purple-400 border-b-[2px]"> Limelight</span></h2>
                <div className="profilecards flex flex-wrap m-10 justify-center items-center">
                    <div class="cardd">
                        <div class="cardd-border-top">
                        </div>
                        <div class="img">
                        </div>
                        <span> Person</span>
                        <p class="job"> Job Title</p>
                        <button> LinkedIn
                        </button>
                    </div>
                    <div class="cardd">
                        <div class="cardd-border-top">
                        </div>
                        <div class="img">
                        </div>
                        <span> Person</span>
                        <p class="job"> Job Title</p>
                        <button> LinkedIn
                        </button>
                    </div>
                    <div class="cardd">
                        <div class="cardd-border-top">
                        </div>
                        <div class="img">
                        </div>
                        <span> Person</span>
                        <p class="job"> Job Title</p>
                        <button> LinkedIn
                        </button>
                    </div>
                </div>
                <div className="flex justify-center  items-center">
                    <div className="inline-flex">

                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-500 to-gray-400 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-400 to-gray-300 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-300 to-gray-200 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-200 to-gray-100 rounded-full"></div>

                    </div>
                </div>
                <h2 className="text-[2.5rem] text-left sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white kanit ml-10  "><span className="border-b-green-400 border-b-[2px]"> Educators</span> Crease </h2>
                <div className="profilecards flex flex-wrap m-10 justify-center items-center">
                    <div class="carddd">
                        <div class="carddd-border-top">
                        </div>
                        <div class="img">
                        </div>
                        <span> Person</span>
                        <p class="job"> Job Title</p>
                        <button> LinkedIn
                        </button>
                    </div>
                    <div class="carddd">
                        <div class="carddd-border-top">
                        </div>
                        <div class="img">
                        </div>
                        <span> Person</span>
                        <p class="job"> Job Title</p>
                        <button> LinkedIn
                        </button>
                    </div>
                    <div class="carddd">
                        <div class="carddd-border-top">
                        </div>
                        <div class="img">
                        </div>
                        <span> Person</span>
                        <p class="job"> Job Title</p>
                        <button> LinkedIn
                        </button>
                    </div>
                </div>
                <div class="mx-auto relative w-32 h-1 my-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-full"></div>




                {/* <div class="mx-auto relative w-[80%] h-[1px] my-5 bg-gray-400"></div> */}
                {/* <div className="flex justify-center items-center flex-col text-white">
                    <blockquote className="caveat text-2xl text-center md:text-3xl lg:text-4xl">" It’s not that I’m so smart, it’s just that I stay with problems longer "</blockquote>
                    <cite className="text-white text-center"> - Albert Einstein</cite>
                </div> */}
                <div className="flex justify-center items-center flex-col flex-wrap mx-5">
                    <h2 className="text-[2.5rem] text-center sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] kanit mb-8 text-gray-400">let's <span className="text-white font-extrabold kanit">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span> and more...</h2>
                    <div className="flex justify-center items-center flex-wrap text-white">
                        <p className="mx-10 kanit text-xl text-gray-200 text-center  sm:text-2xl md:text-3xl lg:text-4xl">See you at the <span className="text-blue-200 font-extrabold"> Bootcamp </span>🫶🏼 Sayonara</p>
                    </div>

                </div>
                {/* Footer */}

                <div>

                </div>

            </div>
            <div class="mx-auto relative w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-700 rounded-full"></div>

            <footer class="p-4 shadow md:px-6 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://crackdsa.com/" class="flex items-center mb-4 sm:mb-0">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span className="text-white font-extrabold kanit text-4xl">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.linkedin.com/company/crackdsa/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                        </li>
                        {/* <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li> */}
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Discord</a>
                        </li>
                        <li>
                            <a href="mailto:abhinavawasthi@crackdsa.com" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-white sm:text-center dark:text-gray-400">©  <a href="https://crackdsa.com/" class="hover:underline">crackDSA</a>. All Rights Reserved.
                </span>

            </footer>
        </>

    )
}
// without efforts , you always loose
// invest in yourself, it pays the best interest