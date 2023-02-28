import Run from "./Run";
import { useEffect } from "react"

export default function Bootcamp() {
    useEffect(() => {
        Run(["Interview Ready Mega Bootcamp"])
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

                        <a href="./Brochure.pdf" download="./Brochure.pdf" className="text-sm sm:text-base md:text-lg kanit flex justify-center items-center group"> Brochure<img className="h-4 mx-1 w-4 group-hover:animate-pulse" src="https://img.icons8.com/material-outlined/24/FFFFFF/downloading-updates.png" /> </a>
                    </p>

                    {/* <p className="text-white relative top-[18.2rem] bg-gray-900 text-xl p-5 rounded-2xl">crackDSA presents</p> */}

                    <h1 data-shadow='anveshna ' className="flex justify-center items-center headerTitle relative top-[26rem] sm:top-[23rem] text-[3.2rem] sm:text-[5.2rem] md:text-[6.5rem] lg:text-[8rem]   nunito">{"LaunchPadx"} <img className=" h-10 w-10 sm:h-20 sm:w-20 md:h-22 md:w-22 delay-100 duration-1000 animate-bounce ml-7 mt-5 " src='https://cdn-icons-png.flaticon.com/512/9357/9357543.png' /></h1>

                    {/* <div class="relative top-[16rem] bg-gray-100   text-black py-3 px-8 rounded-lg font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl"></div> */}
                    <div className="relative text-center top-[27rem] sm:top-[23.5rem] bg-gray-100   text-black py-2 px-2 rounded-lg w-[17rem] md:w-[30rem] flex justify-center items-center ">

                        <h2 d ata-shadow='anveshna ' className="text  font-extrabold text-sm  sm:text-md md:text-lg lg:text-xl z-[99] text-gray-800">Interview Ready Mega Bootcamp</h2>
                    </div>

                    <a target={"_blank"} href="https://lu.ma/event/evt-JI6MLUama5KQDzX"
                        data-luma-action="checkout"
                        data-luma-event-id="evt-JI6MLUama5KQDzX">
                        <button
                            className="relative top-[30rem] sm:top-[27rem] z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px] border-[1px] border-gray-900 shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-white
                    bg-gradient-to-r from-blue-200 via-blue-500 to-green-200 orbi font-extrabold text-base md:text-xl">
                            Register
                        </button>
                    </a>
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
                <div className="flex flex-col items-center justify-start mx-10 my-5 sm:mx-20 comfort">
                    <p className="my-5 text-sm md:text-lg hover:border-blue-300 border-blue-300 hover:border-l-[2px] transition-all ease-in-out hover:pl-2 md:hover:pl-4">Welcome to LaunchPadx , the ultimate one-month-long interview preparation bootcamp designed to help college students boost their interview preparation!</p>
                    <p className="my-5 text-sm md:text-lg hover:border-purple-300 border-purple-300 hover:border-l-[2px] transition-all ease-in-out hover:pl-2 md:hover:pl-4">At LaunchPadx, we understand how stressful job interviews can be, especially when you're a college student trying to secure a job in a highly competitive industry. That's why we've designed this bootcamp to provide you with comprehensive training in Data Structures and Algorithms (DSA), Web Development, System Design, and Computer Science (CS) subjects (DBMS, OS, CN, OOPs).
                    </p>


                </div>
                <div className="flex justify-start mx-10 my-5 sm:mx-20 kanit">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl " ><span className="border-b-2 border-b-green-300"> #LaunchPadx</span> is Starting from April 4th!
                    </h1>


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
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" />
                                    {/* <img src="d.jpeg" alt="" /> */}
                                    {/* <img src="g.jpeg" alt="" /> */}
                                    {/* <img src="d.jpeg" alt="" /> */}
                                </div>
                                <div class="inner" data-orbit-rotate="left">

                                    <img src="https://imgs.search.brave.com/9WMcKd4aN-sXU1-9JDgxk7cQvlGWcqjEzcJHJvuVbFk/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzI2/OTkvUE5HLzUxMi90/YWlsd2luZGNzc19s/b2dvX2ljb25fMTY3/OTIzLnBuZw" alt="" />
                                    <img src="https://img.icons8.com/bubbles/50/null/design.png" />
                                    <img src="https://imgs.search.brave.com/bvsQ8MdYJeVgPf-CFsZjijXHvVcHZ6b0dQHGxGGfmJw/rs:fit:512:508:1/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9maWxlLXR5/cGUtdnNjb2RlLWlj/b24tNTEyeDUwOC0z/NzZ5NjJ1eC5wbmc" alt="" />
                                    <img src="https://img.icons8.com/color/48/null/command-line.png" />
                                </div>
                            </div>
                            <div class="right">
                                <div class="outer" data-orbit-rotate="left">
                                    <img src="https://imgs.search.brave.com/5eG7gnafo82_uikhxCXaIIkqIu9YBnTGaWDKOj4fvW0/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9wbmdp/bWFnZS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDUv/ZXhwcmVzcy1qcy1w/bmctNS5wbmc" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3630/3630471.png" alt="" />
                                    <img className="" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3459/3459528.png" alt="" />
                                </div>
                                <div class="inner" data-orbit-rotate="right">
                                    {/* <img src="i.jpeg" alt="" /> */}
                                    <img src="https://cdn-icons-png.flaticon.com/512/3178/3178285.png" alt="" />
                                    <img src="https://img.icons8.com/arcade/64/null/data-configuration.png" />
                                    <img src="https://img.icons8.com/color/48/null/people-working-together.png" />
                                    <img className="bg-white rounded-full" src="https://img.icons8.com/ios-filled/50/null/operating-system.png" />
                                </div>
                            </div>

                        </div>
                        <div class="content">
                            <p className="  text-extrabold text-blue-300 text-base  sm:text-lg md:text-xl lg:text-2xl">with #LaunchPadx 2023</p>
                            <h1 class="logo text-gray-300 text-xl  sm:text-3xl md:text-4xl lg:text-6xl">Everything's Covered<span className="text-white"></span></h1>
                            <p className="  text-gray-400 kanit orbi text-sm  sm:text-base md:text-lg lg:text-xl">To Go From Zero to Mastery🚀</p>
                        </div>
                    </header>
                    <div id="Timeline">
                        <ul class="timeline">

                            <li>
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">Data Structures & Algorithms</span>
                                        {/* <span class="time-wrapper"><span class="time">8 Days</span></span> */}
                                    </div>
                                    <div class="desc">8 Days </div>
                                </div>
                            </li>

                            <li>
                                <div class="direction-l">
                                    <div class="flag-wrapper">
                                        <span class="flag">Web Development</span>
                                    </div>
                                    <div class="desc">3 Days </div>
                                </div>
                            </li>

                            <li>
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">System Design</span>
                                    </div>
                                    <div class="desc">2 Days </div>
                                </div>
                            </li>

                            <li>
                                <div class="direction-l">
                                    <div class="flag-wrapper">
                                        <span class="flag">CS Fundamentals</span>
                                    </div>
                                    <div class="desc">4 Days </div>
                                </div>
                            </li>

                            <li>
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">Speakers Session</span>
                                    </div>
                                    <div class="desc">3 Days </div>
                                </div>
                            </li>

                        </ul>

                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <a
                            target={"_blank"}
                            href="https://lu.ma/event/evt-JI6MLUama5KQDzX"
                            data-luma-action="checkout"
                            data-luma-event-id="evt-JI6MLUama5KQDzX"
                        >

                            <button
                                className="z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px] border-[1px] border-gray-900 shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-white
                           bg-gradient-to-r from-blue-200 via-blue-500 to-purple-200 orbi font-extrabold text-base md:text-xl">
                                Register
                            </button>
                        </a>

                    </div>
                    <div class="mx-auto relative w-10 h-1 mb-20 mt-10 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>
                    <div id="prizes" className="relative">
                        <div class="box-with-text flex justify-center items-center mt-5">
                            PRIZES
                        </div>
                        <h1 className="my-10 text-white text-center text-2xl md:text-3xl lg:text-4xl orbi">For top Performers / Learners</h1>
                        {/* <div className="flex justify-center  items-center">
                            <div className="inline-flex">

                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                                <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                            </div>
                        </div> */}
                        <div class="mx-auto relative w-[60%] h-[2px] my-10 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>

                        <div className="flex justify-center flex-wrap items-center text-white orbi my-10 ">
                            <div className="flex justify-center items-center flex-col mx-2 my-1">
                                <p className=" text-sm sm:text-md md:text-lg lg:text-xl" >#1</p>
                                <img className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/5330/5330963.png" />
                                <p className="text-blue-200 text-sm sm:text-md md:text-lg lg:text-xl" >Smart Watch</p>
                            </div>
                            <div className="flex justify-center items-center flex-col mx-2 my-1">
                                <p className=" text-sm sm:text-md md:text-lg lg:text-xl" >#2</p>
                                <img className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/5906/5906180.png" />
                                <p className="text-blue-200 text-sm sm:text-md md:text-lg lg:text-xl">TWS Earbuds</p>
                            </div>
                            <div className="flex justify-center items-center flex-col mx-2 my-1">
                                <p className=" text-sm sm:text-md md:text-lg lg:text-xl" >#3</p>
                                <img className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/918/918979.png" />
                                <p className="text-blue-200 text-sm sm:text-md md:text-lg lg:text-xl">Gaming Keyboard</p>
                            </div>


                        </div>
                        <div class="mx-auto relative w-[80%] h-[2px] my-10 bg-gradient-to-r from-gray-400 to-blue-500 rounded-full"></div>

                        <h1 className="my-10 text-white text-center text-2xl md:text-3xl lg:text-4xl orbi font-extrabold">But there's more...</h1>

                        <div className="flex justify-center flex-wrap items-center text-white kanit my-10">
                            <div className="flex justify-center items-center flex-col mx-2">
                                <img className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24  my-5  mb-5" src="https://cdn-icons-png.flaticon.com/512/6232/6232684.png" />
                                <p className="text-sm md:text-md lg:text-base" >crackDSA Merch</p>
                            </div>
                            <div className="flex justify-center items-center flex-col mx-2">
                                <img className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24   my-5 mb-5" src="https://cdn-icons-png.flaticon.com/512/8074/8074470.png" />
                                <p className="text-sm md:text-md lg:text-base">Amazon Vouchers</p>
                            </div>
                            <div className="flex justify-center items-center flex-col mx-2">
                                <img className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24   my-5 mb-5" src="https://cdn-icons-png.flaticon.com/512/2161/2161906.png" />
                                <p className="text-sm md:text-md lg:text-base">Cool Stickers</p>
                            </div>


                        </div>

                        {/* <div class="mx-auto relative w-10 h-1 mb-10 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full"></div> */}

                        <div id="certificates" className="flex flex-wrap justify-center items-center mx-2">
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
                   {/* <div className="flex flex-wrap justify-center items-center">

                    <iframe
                    className="h-[30rem] flex justify-center items-center"
                    src="https://lu.ma/embed-checkout/evt-JI6MLUama5KQDzX"
                    width="600"
                    // height="450"
                    frameborder="0"
                    style={{"border": "1px", "solid" :"#bfcbda88", "border-radius": "4px"}}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    ></iframe>
                    </div> */}
                    <div className="flex justify-center items-center flex-col text-white">
                        {/* <div className="h-[3px] rounded-full w-5 bg-gray-600 m-2 "></div> */}
                        {/* <h1 className="">{festName}</h1> */}
                        <a
                            target={"_blank"}
                            href="https://lu.ma/event/evt-JI6MLUama5KQDzX"
                            data-luma-action="checkout"
                            data-luma-event-id="evt-JI6MLUama5KQDzX"
                        >

                            <button className="festButton mt-5 text-2xl md:text-3xl lg:text-4xl ">
                                {"Register Now!"}
                            </button>
                        </a>
                        <div className="flex justify-center items-center m-5">
                            <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/5408/5408495.png" />
                            <p className="kanit my-5 mx-5">*limited seats, mark your slot!</p>
                        </div>
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
                {/* Speakers section */}
                {/* <h2 className="text-[2.5rem] text-left sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white kanit ml-10  ">The <span className="border-b-purple-400 border-b-[2px]"> Limelight</span></h2>
                <div className="profilecards flex flex-wrap m-10 justify-center items-center">
                    <div class="cardd">
                        <div class="cardd-border-top">
                        </div>
                        <img className="img object-cover" src="https://imgs.search.brave.com/g-Q2lz1Ebm8gRbN2aPhuy0IqRCRtJ3QzGPjUzVpDFOQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnVzaW5lc3NpbnNp/ZGVyLmluL3Bob3Rv/Lzc5NTk5NjMwL2Vs/b24tbXVzay1tYWtl/cy1jbGVhci1oaXMt/c3RhbmNlLW9uLXNl/bGYtZHJpdmluZy1j/YXJzLWFpLW92ZXJz/aWdodC1hbmQtaGlz/LWFkLWZvci1tYXJz/LmpwZz9pbWdzaXpl/PTI0MzYwMTM" />
                        <div className="img"></div>
                        <span> Person</span>
                        <p class="job">Job Title</p>
                        <div className="flex flex-wrap justify-center items-center mt-[5px]">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" />

                        </div>
                    </div>
                    <div class="cardd">
                        <div class="cardd-border-top">
                        </div>
                        <div className="img"></div>
                        <img className="img object-cover" src="https://imgs.search.brave.com/XzxETtV9Z3kH5DiZYvXjlXi4Mhijj5uNLs4wlLNE0CA/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeEdFZHlC/WEJxSk5SXzRya3J0/b2prMHhuV3NiTHFf/aUZjV1VRPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v" />
                        <span> Person</span>
                        <p class="job">Job Title</p>
                        <div className="flex flex-wrap justify-center items-center mt-[5px]">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" />

                        </div>
                    </div>
                    <div class="cardd">
                        <div class="cardd-border-top">
                        </div>

                        <div className="img"></div>
                        <img className="img object-cover" src="https://imgs.search.brave.com/1g9oLO2WpA-wjWTcTaPiM_lbAv92MpHXWrP-CXklV4k/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Et/L0FBdUU3bUJlOC1y/RDdQSDZFOU9McFo0/cmdocl9YWFN4M0Nf/b1JXT2hFUT1zOTAw/LW1vLWMtYzB4ZmZm/ZmZmZmYtcmotay1u/bw" />
                        <span> Person</span>
                        <p class="job">Job Title</p>
                        <div className="flex flex-wrap justify-center items-center mt-[5px]">
                            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968968.png" />

                        </div>
                    </div>

                </div>
                <p className="kanit my-3 italic mx-5 text-gray-200 text-center">stay tuned....</p> */}
                {/* <div className="flex justify-center  items-center">
                    <div className="inline-flex">

                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-500 to-gray-400 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-400 to-gray-300 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-300 to-gray-200 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-200 to-gray-100 rounded-full"></div>

                    </div>
                </div> */}
                {/* Educators Section */}
                {/* <h2 className="text-[2.5rem] text-left sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-white kanit ml-10  "><span className="border-b-green-400 border-b-[2px]"> Educators</span> Crease </h2>
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
                    <div>

                    </div>
                </div> */}
                {/* <p className="kanit my-3 italic mx-5 text-gray-200 text-center">stay tuned....</p> */}
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

            </div>


            <div class="mx-auto relative bottom-32 w-16 h-1 my-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-full"></div>
            <div className="relative bottom-24  flex justify-center items-center my-10 flex-col">
                <a target={"_blank"} href="https://lu.ma/event/evt-JI6MLUama5KQDzX"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-JI6MLUama5KQDzX">

                    <button

                        className="z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px] border-[1px] border-gray-900 shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-black
                 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 orbi font-extrabold text-base md:text-xl">
                        Register
                    </button>
                </a>

                <p className="kanit my-3 italic mx-5 text-gray-200">for completely free!</p>
            </div>

            <div class="mx-auto relative bottom-20 w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-700 rounded-full"></div>

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
                            <a href="https://wa.me/message/TPN76XLWVOWDB1" class="mr-4 hover:underline md:mr-6">Whatsapp</a>
                        </li>
                        <li>
                            <a href="mailto:helloss@crackdsa.com" class="hover:underline">Contact</a>
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