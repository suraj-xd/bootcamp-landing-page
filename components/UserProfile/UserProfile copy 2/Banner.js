import React from "react"
export default function Banner() {
    return (
        <div className="flex ml-20 mr-20 bg-gray-900 rounded-2xl mt-5 pb-5 justify-center items-center flex-col  ">
            <div class="box w-[9rem] h-36 sm:w-36 sm:h-56 md:w-40 md:h-60 ">
                <span className="invisible md:visible
                        "></span>
                <div class="content">


                </div>
                <img className=" rounded-full rotate-[-90deg] z-50 ml-52 sm:w-24 w-20 transition-all ease-in-out md:w-32 border-[2px] border-gray-600" src="https://avatarfiles.alphacoders.com/310/310736.jpg" />
            </div>
        </div>
    )
}