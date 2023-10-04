import { useEffect, useState } from "react"
import { BsDownload, BsLinkedin, BsTelegram } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import Marquee from "react-fast-marquee";
export default function Bootcamp() {
    const [rotationAngle, setRotationAngle] = useState(0);
    useEffect(() => {
        // Function to update rotation angle when scrolling
        const handleScroll = () => {
            // Get the current scroll position
            const scrollY = window.scrollY || window.pageYOffset;

            // Calculate the rotation angle based on the scroll position
            const newRotationAngle = scrollY;

            // Update the rotation angle state
            setRotationAngle(newRotationAngle);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <title>DSA - MERN Roadmap | crackDSA Bootcamps</title>
            <div className="w-screen h-screen bg-[#F7F6E9]">

                <div class='wrap z-20 bg-[#F7F6E9]'>
                    {/* <img
                        style={{ transform: `rotate(${rotationAngle}deg)` }}
                        className="transition-all ease-in-out absolute bottom-[20%] z-[100] right-[5%] w-[50px] md:w-[120px]" src="./star.png" /> */}
                    <div style={{ transform: `rotate(${rotationAngle}deg)` }}
                        className="flex justify-center items-center transition-all ease-in-out absolute bottom-[20%] z-[100] right-[5%] w-[50px] md:w-[120px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <path d="M48.7523 87.686L42.3994 76.6824C37.0715 67.4542 40.2333 55.6541 49.4615 50.3262L55.8145 61.3298C61.1424 70.558 57.9806 82.3581 48.7523 87.686Z" fill="url(#paint0_linear_500_7108)" />
                            <path d="M50.2998 12.4841L56.6527 23.4877C61.9807 32.716 58.8188 44.5161 49.5906 49.844L43.2377 38.8404C37.9097 29.6122 41.0716 17.8121 50.2998 12.4841Z" fill="url(#paint1_linear_500_7108)" />
                            <path d="M11.9252 49.3114L22.9288 42.9585C32.157 37.6305 43.9571 40.7924 49.285 50.0206L38.2814 56.3735C29.0532 61.7015 17.2531 58.5396 11.9252 49.3114Z" fill="url(#paint2_linear_500_7108)" />
                            <path d="M87.127 50.8589L76.1234 57.2118C66.8952 62.5398 55.0951 59.3779 49.7671 50.1497L60.7708 43.7968C69.999 38.4688 81.7991 41.6307 87.127 50.8589Z" fill="url(#paint3_linear_500_7108)" />
                            <defs>
                                <linearGradient id="paint0_linear_500_7108" x1="49.143" y1="83.6568" x2="49.7199" y2="49.3619" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="#070707" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_500_7108" x1="49.9092" y1="16.5134" x2="49.3322" y2="50.8083" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="#070707" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_500_7108" x1="15.9544" y1="49.702" x2="50.2493" y2="50.279" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="#070707" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_500_7108" x1="83.0978" y1="50.4682" x2="48.8029" y2="49.8913" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="#070707" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <img
                        style={{ transform: `rotate(${rotationAngle}deg)` }}
                        className="transition-all ease-in-out absolute bottom-[10%] z-[100] left-[5%] w-[50px] md:w-[120px]" src="./star.png" />

                    <div class='top-plane '></div>
                    <div className="header flex flex-col justify-center items-center">

                        <p className="text-black relative top-[17rem] w-[95%] text-2xl p-5 rounded-2xl backdrop-blur-sm flex justify-between items-center px-8 flex-wrap">
                            <a href="/" className="text-extrabold text-sm sm:text-xl md:text-2xl">bootcamp.<span className="text-black font-extrabold kanit">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span></a>

                            <a target="_blank" href="https://telegram.me/cpabhinav" className="text-sm sm:text-base md:text-lg kanit flex justify-center items-center group"> Join Telegram
                                <BsTelegram className="text-[20px] md:text-[30px] text-blue-500 ml-1 md:ml-3" />  </a>
                        </p>

                        {/* <p className="text-black relative top-[18.2rem] bg-gray-900 text-xl p-5 rounded-2xl">crackDSA presents</p> */}
                        <div className="flex justify-center items-center flex-col gap-10  relative top-[26rem] text-4xl  ">
                            <img className="animate-pulse absolute top-0 z-[100] right-[-50px] w-[80px] md:w-[150px]" src="./starfly.png" />
                            <img className="absolute left-[-50px] top-[20px] md:left-[-50px] z-[100] md:top-[-80px] w-[50px] md:w-[80px]" src="./sum.png" />
                            <h1 className="text-center relative text-[3rem] md:text-[7rem] text-[#FF7C2F]" >DSA <span className="eva"> &</span> MERN</h1>
                            <h1 className="text-[4rem] md:text-[10rem] text-[#FF7C2F] md:my-10 relative font-bold" >

                                {/* <img className="absolute bottom-0 left-0 w-[15px] " src="./arrowup.png" /> */}
                                Roadmap</h1>
                            <div className="w-[100px] md:w-[300px] z-[-1] h-[10px] md:h-[50px] border-green-600 border-[1px] md:border-[4px] bg-green-400 absolute bottom-5  left-0 rounded-full"></div>
                            <h1 className="text-[#C2E7C7]"></h1>
                        </div>
                        <div className="w-[100vw] md:w-[50vw] mx-auto">

                            <Marquee pauseOnHover={true} className="flex top-[28rem] sm:top-[26rem]">

                                <MarqueCard src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-algorithm-data-analytics-flaticons-lineal-color-flat-icons-4.png" name="Algorithms" />
                                <MarqueCard src="https://img.icons8.com/pulsar-line/48/static-view-level1.png" alt="static-view-level1" name="DS" />
                                <MarqueCard src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" name="HTML" />
                                <MarqueCard src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" name="NodeJS" />
                                <MarqueCard src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" name="CSS" />
                                <MarqueCard src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" name="Javascript" />
                                <MarqueCard src="https://cdn-icons-png.flaticon.com/512/3459/3459528.png" name="React" />
                                <MarqueCard src="./nextjslogo.png" name="NextJS" />
                                <MarqueCard src="https://imgs.search.brave.com/Ccsfb-0nozWdQbOvaSnFT47fYnfx34dBF4Ci8BIgHvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS82/LzEwLzIwL25vZGUt/anMtZXhwcmVzcy1q/cy1qYXZhc2NyaXB0/LXNvbHV0aW9uLXN0/YWNrLXdlYi1hcHBs/aWNhdGlvbi1wbmct/ZmF2cG5nLUREV1Vp/aGtTUmhDVWl0MnNt/Z0pGRjlDZ2RfdC5q/cGc" name="ExpressJS" />
                                <MarqueCard src="https://img.icons8.com/nolan/64/mongo-db.png" name="MongoDB" />
                                <MarqueCard src="https://imgs.search.brave.com/9WMcKd4aN-sXU1-9JDgxk7cQvlGWcqjEzcJHJvuVbFk/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzI2/OTkvUE5HLzUxMi90/YWlsd2luZGNzc19s/b2dvX2ljb25fMTY3/OTIzLnBuZw" name="TailwindCSS" />


                            </Marquee>
                        </div>
                        <a target={"_blank"} href="https://lu.ma/event/evt-suiXAIArdcuVKR3"
                            data-luma-action="checkout"
                            data-luma-event-id="evt-suiXAIArdcuVKR3"
                        >
                            <button
                                style={{ "fontWeight": "1000" }}
                                className="relative top-[30rem] sm:top-[27rem] z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px]  shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-[#ff8c49]
                    bg-gradient-to-r from-gray-100 via-gray-200 to-white comfort font-extrabold text-base md:text-xl eva ">
                                Register

                                {/* <img className="w-[100px] rotate-[0deg] absolute  -left-[100px] scale-[-1]" src="./arrow.png" /> */}
                            </button>
                        </a>

                            <div className="relative top-[30rem] sm:top-[27rem] my-3 flex justify-center items-center gap-5">
                                <a target={"_blank"} href="https://telegram.me/cpabhinav"> <BsTelegram className="text-[30px] text-blue-500" />
                                </a>
                                <a target={"_blank"} href="https://chat.whatsapp.com/DconZihz7nP3tQVLLSn9Kk">
                                    <MdWhatsapp className="text-[30px] text-white rounded-lg p-[2px] bg-green-500" />
                                </a>
                                <a target={"_blank"} href="https://www.linkedin.com/company/crackdsa/">
                                    <BsLinkedin className="text-[30px] text-blue-600 rounded-lg  bg-white" />
                                </a>

                            </div>
                            <p className="top-[30rem] sm:top-[27rem] text-center  relative">Join for Session Updates</p>
                        <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
                    </div>
                    <div class='bottom-plane'></div>
                </div>
            </div>

            <div id="overview" className="text-black relative -top-70 my-10">
                <div className="w-10 h-2 border-gray-50 border-[1px] rounded-lg mx-auto mt-4 mb-8"></div>


                <h1 className="orbi font-bold mx-5 my-5 sm:mx-20 text-2xl sm:text-3xl" >Overview - </h1>
                <div className="flex flex-col items-center justify-start mx-5 my-5 sm:mx-20 comfort">
                    <p className="my-5 text-sm md:text-lg hover:border-blue-300 border-blue-300 hover:border-l-[2px] transition-all ease-in-out hover:pl-2 md:hover:pl-4">Get ready for our upcoming event, "Roadmap to DSA & MERN"! Hosted by the ever-enthusiastic team at crackDSA Events, we're all set to make your evening of October 14, 2023, a memorable one. 🚀
</p>
                    
                    
                    <p className="my-5 text-sm md:text-lg hover:border-purple-300 border-purple-300 hover:border-l-[2px] transition-all ease-in-out hover:pl-2 md:hover:pl-4">Starting at 7 PM, we've got a power-packed hour filled with insights, tips, and tricks to help you navigate the world of Data Structures and Algorithms (DSA) and MongoDB, Express.js, React, Node.js (MERN) stack.
                    </p>


                </div>
                <div className="flex justify-start mx-5 my-5 sm:mx-20 kanit">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl " ><span className="border-b-2 border-b-green-300"> #Session</span> on 14th October!
                    </h1>


                </div>
                <div className="flex justify-center items-center mx-10 my-5 sm:mx-20 kanit">

                    <p className="my-auto">Join Whatsapp
                    </p>
                    <a className="" target={"_blank"} href="https://chat.whatsapp.com/DconZihz7nP3tQVLLSn9Kk">

                        <MdWhatsapp className="text-[30px] mx-3 text-white rounded-lg p-[2px] bg-green-500" />

                    </a>
                    <p className="text-xs text-gray-800 my-auto">*for quick updates</p>
                </div>
            </div>
            <div class="mx-auto relative -top-48 my-32 w-24 h-1 mb-20 bg-gradient-to-r "></div>
            <div className=" relative -top-48">
                <h2 className="text-[2.5rem] text-center sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-black orbi"> what's in for you?</h2>
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
                                    <img src="./nextjslogo.png" className="bg-white rounded-full " alt="" />
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
                            <p className="  text-extrabold text-blue-500 text-base  sm:text-lg md:text-xl lg:text-2xl">DSA & MERN</p>
                            <h1 class="logo text-gray-700 text-xl  sm:text-3xl md:text-4xl lg:text-6xl">Roadmap<span className="text-black"></span></h1>
                            <p className="  text-gray-500 nunito text-sm  sm:text-base md:text-lg lg:text-xl my-3">Go From Zero to Mastery🚀</p>
                        </div>
                    </header>
                    <div>
                        <img className="w-[70%] md:w-[30%] rounded-xl mx-auto mt-20 mb-10" src="./roadmapCertificate.png"/>
                        <p className="w-[90%] mx-auto text-center nunito text-xs md:text-xl">Assured Certificates to all the Attendies</p>
                    </div>
                    <div class="mx-auto relative w-32 h-1 my-10 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full"></div>
                    <h2 className="text-[2.5rem] text-center sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] text-black orbi mb-16">so what're you waiting for?</h2>
                    <div className="flex justify-center items-center flex-col text-black">
                        <a
                           target={"_blank"} href="https://lu.ma/crackdsa-dsa-mern-masterclass"
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
                <div className="flex justify-center  items-center">
                    <div className="inline-flex">

                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                    </div>
                </div>
                <h2 className="text-[2.5rem] text-left sm:text-[3.5rem] md:text-[4rem] flex-row lg:text-[5rem] text-black kanit ml-10  ">On the <span className="border-b-purple-400 border-b-[2px]"> Panel</span></h2>

                {/* Speakers section */}

                <div
                    class="flex overflow-x-scroll pb-10 hide-scroll-bar justify-start md:justify-center items-center"
                >
                    <div
                        class="flex flex-wrap justify-center items-center px-5 mt-5 "
                    >

                        <div class="inline-block px-3 my-5">
                            <a href="https://www.linkedin.com/in/singh1aryan/" target={"_blank"}>

                                <div
                                    class="w-48 h-64 max-w-xs overflow-hidden rounded-xl shadow-xl hover:scale-[1.01] hover:border-[1px] bg-[#fffeec] transition-all ease-in-out"
                                >
                                    <div className="flex flex-col text-black justify-center items-center">

                                        <img className="mt-6 h-24 w-24 md:h-32 md:w-32 rounded-3xl my-2" src="./AryanSingh.jpg" />
                                        <h1 className="font-bold my-2">Aryan Singh</h1>
                                        <p className="text-sm flex flex-wrap nunito justify-center items-center text-gray-600">SWE @ <img className="mt-[6px] mx-1 w-11 h-4 " src="https://imgs.search.brave.com/eH-X846pxKMECuDs6pcYawc6FRFXSukvhFktAwVzD4w/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1nb29nbGUt/bG9nby0yMDE1YnJh/bmRsb2dvYnJhbmQt/bG9nb2ljb25zc3lt/Ym9sc2xvZ29zZ29v/Z2xlLTY4MTUyMjkz/NzIzMzNtcXJyLnBu/Zw" /></p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="inline-block px-3 my-5">
                            <a href="https://www.linkedin.com/in/abhinavawasthi01/" target={"_blank"}>

                                <div
                                    class="w-48 h-64 max-w-xs overflow-hidden rounded-lg rounded-xl shadow-xl hover:scale-[1.01] hover:border-[1px] bg-[#fffeec] transition-all ease-in-out"
                                >
                                    <div className="flex nunito flex-col text-black justify-center items-center">

                                        <img className="mt-6 h-24 w-24 object-cover md:h-32 md:w-32 rounded-3xl my-2" src="./abhinav.jpeg" />
                                        <h1 className="font-bold my-2 text-black">Abhinav Awasthi</h1>
                                        <p className="text-xs text-gray-600 flex flex-wrap justify-center items-center">Former SDE @ <img className=" mx-1 mt-1 w-14 object-contain h-4" src="./linkedin_logo.webp" /></p>
                                        <p className="text-xs text-gray-600 flex flex-wrap justify-center items-center">Educator @ GFG</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="inline-block px-3 my-5">
                            <a href="https://www.linkedin.com/in/gaudsuraj/ " target={"_blank"}>

                                <div
                                    class="w-48 h-64 max-w-xs overflow-hidden rounded-lg rounded-xl shadow-xl hover:scale-[1.01] hover:border-[1px] bg-[#fffeec] transition-all ease-in-out"
                                >
                                    <div className="flex flex-col  justify-center items-center">

                                        <img className="mt-6 h-24 w-24 md:h-32 md:w-32 object-cover rounded-3xl my-2" src="./suraj.jpg" />
                                        <h1 className="font-bold my-2 text-black">Suraj Gaud</h1>
                                        <p className="text-gray-600 text-xs flex flex-wrap justify-center items-center mx-1 nunito">SDE @ <img className="mb-[2px] mx-1 w-16  h-5" src="./nucastlogo.svg" /></p>
                                        <p className="text-xs flex text-gray-600 flex-wrap justify-center items-center mx-1 nunito">Mentor @ Coding Spoon</p>
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
                <div className="flex justify-center  items-center ">
                    <div className="inline-flex">

                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-500 to-gray-400 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-400 to-gray-300 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-300 to-gray-200 rounded-full"></div>
                        <div class="mx-1 w-2 h-2 my-1 bg-gradient-to-r from-green-200 to-gray-100 rounded-full"></div>

                    </div>
                </div>
                <div className="flex justify-center items-center flex-col flex-wrap mx-5 relative -bottom-12">
                    <h2 className="text-[2.5rem] text-center sm:text-[2.5rem] md:text-[3rem] lg:text-[5rem] kanit mb-8 text-gray-400">let's <span className="text-black font-extrabold kanit">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span> and more...</h2>
                </div>

            </div>


            <div class="mx-auto relative bottom-32 w-16 h-1 my-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-full"></div>
            <div className="relative bottom-24  flex justify-center items-center my-10 flex-col">
                <a target={"_blank"} href="https://lu.ma/crackdsa-dsa-mern-masterclass">
                    <button
                        className="z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px] border-[1px] border-gray-900 shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-black
                 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 orbi font-extrabold text-base md:text-xl">
                        Register
                    </button>
                </a>
                <p className="kanit my-3 italic mx-5 text-gray-900">for completely free!</p>
            </div>

            <div class="mx-auto relative bottom-20 w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-700 rounded-full"></div>

            <footer class="p-4 shadow md:px-6 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://crackdsa.com/" class="flex items-center mb-4 sm:mb-0">
                        <span className="text-black font-extrabold kanit text-4xl">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-800 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/company/crackdsa/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                        </li>
                        <li>
                            
                            <a target="_blank" href="https://wa.me/message/TPN76XLWVOWDB1" class="mr-4 hover:underline md:mr-6">Whatsapp</a>
                        </li>
                        <li>
                            <a target="_blank" href="mailto:helloss@crackdsa.com" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-black sm:text-center dark:text-gray-400">©  <a href="https://crackdsa.com/" class="hover:underline">crackDSA</a>. All Rights Reserved 2023.
                </span>


            </footer>


        </>

    )
}

const MarqueCard = ({ src = "", name = "" }) => {
    return (
        <>
            <div className="flex justify-center items-center gap-2 bg-[#ffffff83] border-white rounded-lg px-2 md:px-3 py-2 mx-2 md:mx-3">
                <img className="w-4 md:w-6 grayscale" src={src} />
                <h1 className=" text-gray-700 text-xs md:text-md nunito font-extrabold tracking-wider">{name}</h1>
            </div>
        </>
    )
}