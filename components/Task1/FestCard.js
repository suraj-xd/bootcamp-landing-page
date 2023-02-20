import React from "react";

export default function FestCard({title}) {
    return (
        <>
            <div class="w-full bgtry bg-gray-900 rounded-2xl sahdow-lg overflow-hidden flex flex-col md:flex-row">
                <div class="w-full md:w-2/5 ">
                    <img class="object-center object-cover w-full h-full" src="https://images7.alphacoders.com/611/611138.png" alt="photo" />
                </div>
                <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2 text-gray-300 text-sm sm:text-md md:text-base">
                    
                    <h1 className="font-extrabold text-white text-base sm:text-lg md:text-xl">{title}</h1>
                    <div className="border-l-2 border-green-300 pl-2">
                        <p><span className="font-extrabold"> Voting Registration Starts at:</span> XXXXXXX</p>
                        <p><span className="font-extrabold">Voting Registration Ends at:</span> XXXXXXX</p>
                    </div>
                    <div className="border-l-2 border-yellow-300 pl-2">
                        <p><span className="font-extrabold">Voting Starts at:</span> XXXXXXX</p>
                        <p><span className="font-extrabold">Voting Ends at:</span> XXXXXXX</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-2">
                        <p><span className="font-extrabold">Voting⚡Power Snapshot Timing:</span> XX</p>
                    </div>
                    <div className="flex justify-start items-center">

                    <img className="icon cursor-default mr-2" src="https://cdn-icons-png.flaticon.com/512/1582/1582054.png"/>
                    {/* <Route to="/event/${eventName}"> add a route here */}
                    <button className={`flex items-center justify-center text-[14px] ripple z-40 border-2 py-2 px-6 text-black rounded-[8px] bg-yellow-300 border-transparent hover:!bg-yellow-400 hover:text-black font-semibold hover:border-transparent duration-500 transition-[background]`}>
                        Register / Vote
                    </button>
                    {/* </Route>  */}
                    </div>
                  </div>
                  </div>
        </>
    )
}