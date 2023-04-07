import { useState } from "react"

export default function List({ day, date, topic, session, notes, rec, assign, pp , live, title1, title1Link, title2, title2Link}) {
    return (
        <>
            <li class="ml-4 mt-5">
                <div class={` active:bg-blue-500 bg-white absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700`}></div>
                <time class="block mb-1 text-md font-normal leading-none text-gray-50 dark:text-gray-500">{day} </time>
                <button  class="cursor-pointer text-3xl font-semibold text-blue-700 dark:text-white">{topic}</button>
                
                    <div className='mt-2'>
                        <div class="card w-[350px] sm:w-[500px] md:w-[600px]">
                            <div className="flex items-center justify-start gap-2 text-gray-100 text-md">
                                <img className="w-4 h-4 mx-1 my-1" src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" />
                                <span className="flex justify-center items-center gap-3">
                                    <p className="">{date}</p>
                                </span>
                            </div>
                            {/* Validation */}


                            {/* Ticket Info */}
                            <span class="title text-sm md:text-lg">{session}</span>


                            <div className='mt-2 flex flex-wrap gap-2'>
                            {live &&
                                    <a target="_blank" href={live}>

                                        <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm  sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                            <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
                                            Live Session</h2>
                                    </a>
                                }
                                {notes &&
                                    <a target="_blank" href={notes}>

                                        <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm  sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                            <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" />
                                            Notes</h2>
                                    </a>
                                }
                                {rec && 
                                <a href={rec}>
                                    <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm   flex-wrap gap-2sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                        <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/565/565665.png" />
                                        Recordings</h2>
                                </a>}
                                {assign && 
                                <a href={assign}>
                                    <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm   flex-wrap gap-2sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                        <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/10270/10270629.png" />
                                        Assignments</h2>
                                </a> }
                                {pp && 
                                <a href={pp} download={"./"+pp}>
                                    <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm   flex-wrap gap-2sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                        <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/999/999378.png" />
                                        DSA Topic Tree</h2>
                                </a>
                                }
                                {title1Link &&
                                    <a target="_blank" href={title1Link}>

                                        <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm  sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                            <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" />
                                            {title1}</h2>
                                    </a>
                                }
                                {title2Link &&
                                    <a target="_blank" href={title2Link}>

                                        <h2 d ata-shadow='anveshna ' className="text bg-white px-3 py-1  font-extrabold text-xs md:text-sm  sm:text-md  rounded-md text-gray-800 flex justify-start items-center gap-1">
                                            <img className="h-3 w-3" src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" />
                                            {title2}</h2>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
            </li>
        </>
    )
}