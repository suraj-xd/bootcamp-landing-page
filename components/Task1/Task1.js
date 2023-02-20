import React, { useEffect } from "react";
import FestCard from "./FestCard";
import Run from "./Run";
export default function Task1() {
    useEffect(() => {
        Run(["Voting"]) // voting animation on first mount 
    }, [])
    return (
        <>
            <div class=" flex justify-center items-center flex-col">
                <div className=" rounded-full w-12 bg-gray-600 my-5"></div>
                <div class="retro-bg">

                    <h1 class="retro text-4xl md:text-5xl lg:text-6xl" >Film Fest</h1>

                </div>
                <div className="h-[3px] rounded-full w-5 bg-gray-600 mt-10 "></div>
                <div class="text lowercase font-extrabold  text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center py-2 text-gray-200"></div>
                <div className="h-[3px] rounded-full w-5 bg-gray-600 mt-1 "></div>
                {/* Fest Cards */}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 m-5">
                    <FestCard mediaSrc={""} title={"Sad Valentine Event"}/>
                    <FestCard mediaSrc={""} title={"Happy Birthday Fest"}/>
                </div>
            </div>
        </>




    )
}