import React, { useState } from "react"
import ChaptersCard from "./ChaptersCard";
export default function Main() {
    const [courseName, setCourseName] = useState('Linked List');
    const [courseDesc, setCourseDesc] = useState('Learn about Linked List from the best educators and ace the art of problem solving using Linked List');
    const [educatorProfile, setEducatorProfile] = useState('./i.png');
    const [educatorName, setEducatorName] = useState(' Anish Dey');
    return (
        <main>
            <header class="text-center my-12  text-white">
                <h1 class="text-6xl mb-0 inline-block mx-auto font-extrabold">{courseName}</h1>
                <p class="text-gray3 my-1 text-gray-200">{courseDesc}</p>
            </header>


            <div class="mx-auto w-24 h-1 my-16 bg-gradient-to-r from-gray-300 to-gray-600 rounded-full"></div>


            <div className="flex justify-center items-center">
                <video className="w-[90%] md:w-[60%]" controls >
                    <source src="https://youtu.be/3DPO6xJ5M8Y" type="video/mp4" />
                </video>
            </div>

            <div class="flex items-center no-underline text-white justify-center" itemprop="author" name="Zack DeRose">
                <img class="w-12 h-12 rounded-full block" src={educatorProfile
                } />
                <span class="flex flex-col ml-2 my-5 text-gray-300">
                    <span class="text-lg">Taught by
                        <a class="no-underline text-orange-500" href="/contributors/zack-derose/">{educatorName}</a>
                    </span>
                    <span class="text-sm text-gray4">
                        SDE Microsoft | LinkedIN | crackDSA
                    </span>
                </span>
            </div>

            <div class="mx-auto w-24 h-1 my-16 bg-gradient-to-r from-gray-400 to-green-500 rounded-full"></div>


            <div className="flex justify-center items-center flex-wrap" >

                <div class="hover:scale-105 hover:brightness-125  transition-all ease-in-out   mx-5 h-20 w-20 rounded-md bg-gradient-to-r from-green-500 via-green-800 to-green-200 p-1">
                    <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
                        <h1 class="text-sm font-black text-gray-200">Learn</h1>
                    </div>
                </div>

                <div class="hover:scale-105 hover:brightness-125 transition-all ease-in-out mx-5 h-20 w-20 rounded-md bg-gradient-to-r from-blue-500 via-blue-800 to-blue-200 p-1">
                    <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
                        <h1 class="text-sm font-black text-gray-200">Practice</h1>
                    </div>
                </div>
                <div class="hover:scale-105 hover:brightness-125 transition-all ease-in-out mx-5 h-20 w-20 rounded-md bg-gradient-to-r from-red-500 via-red-800 to-red-200 p-1">
                    <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
                        <h1 class="text-sm font-black text-gray-200">Discuss</h1>
                    </div>
                </div>

            </div>


            <div className="flex justify-center items-center my-10 m-1 ">

                <div class="w-[40rem] p-[2px]">
                    <div class="flex h-full w-full items-center justify-center back flex-wrap flex-col">
                        <h1 class="text-2xl sm:text-3xl  md:text-2xl lg:text-3xl text-gray-200 p-5 kanit font-semibold italic">🤔But.... Why this course?..</h1>

                        <div className="mx-5 mb-5 border-l-yellow-500 border-l-2">
                            <p className="text-xs text-gray-300 pl-2">
                                We have very nice curated content for you and it's totally free, on top of that we have our top not educators to provide you the learning, also the crackDSA eco-system is al`l there to provide you top-notch study content
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center  items-center">
                <div className="inline-flex">

                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-500 to-gray-400 rounded-full"></div>
                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-400 to-gray-300 rounded-full"></div>
                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-300 to-gray-200 rounded-full"></div>
                    <div class="mx-1 w-2 h-2 my-16 bg-gradient-to-r from-blue-200 to-gray-100 rounded-full"></div>

                </div>
            </div>

            <div class="text-center text-white">
                <h2 class="text-5xl border-gray6 pb-2 inline-block mt-10">Chapters</h2>
                <div class="mx-auto w-24 h-1 mb-16 mt-0 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
            </div>

                {/* Experimental */}
                

            <div class="mx-auto w-24 h-1 my-16 bg-gradient-to-r from-gray-400 to-pink-500 rounded-full"></div>

            <div className="chapters ">
                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                
                    <ChaptersCard icon={"⚡"} title={"Getting Started"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"☀️"} title={"Basics"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"🔗"} title={"Link List Part"} desc={"While working with Zack on most comprehensive (and entertaining preparing the course"}/>
                    <ChaptersCard icon={"⭐"} title={"Getting Started"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"🧮"} title={"Understanding the algorithm"} desc={"While working with most comprehensive (and entertaining Zack on preparing the course"}/>
                    <ChaptersCard icon={"🥷🏼"} title={"Problems"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"🗑️"} title={"Debugging"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"✏️"} title={"Getting Started"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"✡️"} title={"Getting Started"} desc={"While working with Zack on most comprehensive (and entertaining preparing the course"}/>
                    <ChaptersCard icon={"🌲"} title={"Traversal"} desc={"While working with Zack on preparing the course"}/>
                    <ChaptersCard icon={"🕑"} title={"Time Complexity"} desc={"While working with Zack on preparing the course most comprehensive (and entertaining"}/>

                    
                    
                    
                    
                </div>
            </div>
        </main>
    )
}