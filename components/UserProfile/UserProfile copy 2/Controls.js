import React from "react"
export default function Controls() {
    return (
        <div id="elements" className=" text-white  justify-center items-center flex flex-row flex-wrap mt-16">
            {/* <p className=" font-bold ml-2">#{walletName}</p> */}
            <div class="inline-flex transition-all duration-1000 ease-in-out justify-center flex-wrap items-center rounded-md shadow-sm" role="group">
                
                <button className=" p-2  text-xs md:text-md lg:text-lg  btn-bt bg-gray-800 before:bg-gray-700 m-1">
                    <span className="btn-span">Edit Profile</span>
                </button>
                
                <button className=" p-2  text-xs md:text-md lg:text-lg  btn-bt bg-gray-800 before:bg-gray-700 m-1">
                    <span className="btn-span">Share</span>
                </button>
                <button className=" p-2  text-xs md:text-md lg:text-lg  btn-bt bg-gray-800 before:bg-gray-700 m-1">
                    <span className="btn-span">Follow</span>
                </button>
                
                
                
            </div>


        </div>
    )
}