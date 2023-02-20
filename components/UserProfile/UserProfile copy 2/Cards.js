import Glass from "./Glass";

export default function Cards() {
    const borderBottom = "blue";
    return (
        <>
            <div class="flex flex-col bg-transparent m-auto p-auto">
                {/* <h1
                    class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
                >
                </h1> */}
                <div
                    class="flex overflow-x-scroll pb-10 hide-scroll-bar"
                >
                    <div
                        class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                    >
                    


                        <div class="inline-block px-3 ">
                            <div
                                class=" overflow-hidden  rounded-lg shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                <Glass/>
                                {/* <img src="https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/nucast-inception" className="w-full h-full object-cover border-b-8 border-[blue]"></img> */}
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div 
                                class=" overflow-hidden  rounded-lg shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                
                                <Glass/>
                                {/* <img src="https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/atman_poster.webp" className="w-full h-full w-full h-full object-cover border-b-8 border-[blue]"></img> */}
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div
                                class=" overflow-hidden  rounded-lg shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                <Glass/>
                                 {/* <img src="https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/uglys1_uysvj0.webp" className="w-full h-full object-cover border-b-8 border-[blue]"></img> */}
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div
                                class=" overflow-hidden  rounded-lg shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                <Glass/>
                                 {/* <img src="https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/uglys1_uysvj0.webp" className="w-full h-full object-cover border-b-8 border-[blue]"></img> */}
                            </div>
                        </div>
                        <div class="inline-block px-3">
                            <div
                                class=" overflow-hidden  rounded-lg shadow-md  hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                <Glass/>
                                 {/* <img src="https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/uglys1_uysvj0.webp" className="w-full h-full object-cover border-b-8 border-[blue]"></img> */}
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>        </>
    )
}