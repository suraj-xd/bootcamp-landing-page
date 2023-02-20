
export default function UserProfile2() {
    const walletName = "Suraj";
    return (
        <>
            <main className="ml-20 mr-20">
                <div className="flex justify-center items-center flex-col  ">
                    <div class="box">
                        <span></span>
                        <div class="content">

                            <img className=" rounded-full rotate-[-90deg] z-50 ml-5 absolute left-12 top-3 w-32 border-[1px] border-gray-300" src="https://avatarfiles.alphacoders.com/310/310736.jpg" />

                        </div>
                    </div>
                </div>
                            <button class="btn-white" href="#">
                                {walletName}
                            </button>
                
                <div className="flex border-2 border-gray-900 mt-2  mb-10"></div>
                <button type="button" className='mt-10' class="btn cube cube-hover">
                    <div class="bg-top">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="text">Manage Your Deck</div>
                </button>

                {/* <h2 className="text-center text-white block rounded-lg bg-gray-200 text-3xl">{walletName}</h2> */}

                {/* <div class="card">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner"></div>
                </div> */}

                <div className="flex justify-center items-center flex-row flex-wrap">

                </div>
                <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 m-10">Sign Out</button>

            </main>
        </>
    )
}