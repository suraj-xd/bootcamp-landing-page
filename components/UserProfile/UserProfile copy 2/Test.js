import { useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import Banner from "./Banner";
import Controls from "./Controls";
import Deck from "./Deck";
export default function UserProfile2() {
    const walletName = "Suraj";
    const [isOpen, setIsOpen] = useState(true);
    const [submenu1, setSubMenu1] = useState(false);
    const [submenu2, setSubMenu2] = useState(false);
    const [gridAction,setGridAction] = useState(false);

    return (
        <>
            <main className="">

                <Banner />
                <Controls />

                <div className="h-[1px] mt-10 bg-gray-900"></div>


                {/* Bottom */}
                <div id="bottomControls" className="flex mt-2 justify-between items-center">
                    {/* Filter */}
                    <div onClick={() => { setIsOpen(!isOpen) }} className="flex hover:bg-gray-800 cursor-pointer rounded-full mt-2 bg-gray-900 ml-2">

                        <img className=" w-6 h-6 sm:h-8 sm:w-8 md:w-10 md:h-10 m-2 p-1 flex " src="https://cdn-icons-png.flaticon.com/512/9630/9630119.png " />
                        <a class="flex items-center text-sm sm:text-md md:text-xl  font-bold text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
                            <span class="mr-5  md:mr-8 text-white">Filter</span>
                        </a>

                    </div>

                    <div onClick={()=>setGridAction(!gridAction)} className=" mr-4 mt-2 cursor-pointer">
                        <div className="flex hover:bg-gray-700 bg-gray-800  rounded-2xl">
                            {/* Small Grid */}
                            {/* <img className="w-6 h-6 sm:h-8 sm:w-8 md:w-10 md:h-10 m-2 p-1 flex  rounded-xl hover:bg-gray-800 hover:brightness-200" src="https://cdn-icons-png.flaticon.com/512/923/923035.png" />
                             */}

                            <img className="w-6 h-6 sm:h-8 sm:w-8 md:w-10 md:h-10 m-2 flex  hover:brightness-200" src="https://img.icons8.com/nolan/64/hide-grid.png" />


                        </div>

                    </div>

                </div>
                <div className="grid menu mb-10 transition-all ease-in">

                    {/* Cards */}
                    <CSSTransition
                        in={isOpen}
                        timeout={500}
                        classNames="filter-menu"

                    >
                        <div id="filters" className="absolute -translate-x-full">

                            <aside id="sidebar-multi-level-sidebar" class="z-40 w-[16rem]
                            sm:w-[17rem]
                             md:w-[18rem]
                            transition-transform " aria-label="Sidebar">
                                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900 rounded-r-xl mt-4 mr-10 dark:bg-gray-800">

                                    <ul class="space-y-2 pl-2">
                                        <li className="flex hover:border-b-[1px] border-gray-500 rounded-xl">
                                            <img className="h-10 w-10 md:w-12 md:h-12  m-2 p-1 flex hover:bg-gray-800" src="https://img.icons8.com/nolan/64/geometric-flowers.png" />
                                            <a href="#" class="flex items-center text-sm  md:text-base font-bold text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">

                                                <span class="ml-3 text-white">Explore</span>
                                            </a>
                                        </li>
                                        <li>
                                            <button onClick={() => setSubMenu1(!submenu1)} type="button" class="flex hover:border-b-[1px] border-gray-500 items-center w-full p-2 text-sm md:text-base font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                                                <span class="flex-1 ml-3 text-white text-left whitespace-nowrap" sidebar-toggle-item>Options</span>
                                                <svg sidebar-toggle-item class="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        {submenu1 && 
                                            <CSSTransition
                                                in={submenu1}
                                                timeout={5010}
                                                classNames="filter-submenu"
                                            >

                                                <ul id="dropdown-example" class=" filter-submenu py-2 space-y-2">
                                                    <li>
                                                        <a href="#" class="hover:border-b-[1px] border-gray-500 flex items-center w-full p-2 text-sm md:text-md text-white font-medium transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"><img className="h-3 w-4 mr-2" src="https://img.icons8.com/nolan/64/chevron-left.png"/>Buy Now</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="hover:border-b-[1px] border-gray-500 flex items-center w-full p-2 text-sm md:text-md text-white font-medium transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"><img className="h-3 w-4 mr-2" src="https://img.icons8.com/nolan/64/chevron-left.png"/>Sale</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="hover:border-b-[1px] border-gray-500 flex items-center w-full p-2 text-sm md:text-md text-white font-medium transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"><img className="h-3 w-4 mr-2" src="https://img.icons8.com/nolan/64/chevron-left.png"/>Auction</a>
                                                    </li>

                                                </ul>
                                            </CSSTransition>
                                        }
                                        </li>
                                        <button onClick={() => setSubMenu2(!submenu2)} type="button" class="flex hover:border-b-[1px] border-gray-500 items-center w-full p-2 text-sm md:text-base font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                                                <span class="flex-1 ml-3 text-white text-left whitespace-nowrap" sidebar-toggle-item>Collections</span>
                                                <svg sidebar-toggle-item class="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                            {submenu2 && 
                                            <CSSTransition
                                                in={submenu2}
                                                timeout={5010}
                                                classNames="filter-submenu"
                                            >

                                                <ul id="dropdown-example" class=" filter-submenu py-2 space-y-2">
                                                    <li>
                                                    
                                                        <a href="#" class="hover:border-b-[1px] border-gray-500 flex items-center w-full p-2 text-sm md:text-md text-white font-medium transition duration-75 rounded-lg pl-10 group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/arcade/64/null/circled-up-left.png"/>Etherium</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="hover:border-b-[1px] border-gray-500 flex items-center w-full p-2 text-sm md:text-md text-white font-medium transition duration-75 rounded-lg pl-10 group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/arcade/64/null/circled-up-left.png"/>Blockchain</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="hover:border-b-[1px] border-gray-500 flex items-center w-full p-2 text-sm md:text-md text-white font-medium transition duration-75 rounded-lg pl-10 group hover:bg-gray-800 dark:text-white dark:hover:bg-gray-700"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/arcade/64/null/circled-up-left.png"/>Cardano</a>
                                                    </li>

                                                </ul>
                                            </CSSTransition>
                                        }
                                        
                                        <li>
                                            <a href="#" class="flex hover:border-b-[1px] border-gray-500 items-center p-2 text-sm md:text-base font-bold text-gray-900 rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700">

                                                <span class="flex-1 ml-3 text-white whitespace-nowrap">Pricing</span>

                                            </a>
                                        </li>


                                    </ul>

                                </div>
                                {/* <img onClick={() => { setIsOpen(!isOpen) }} className=" mr-1 h-8 w-8 relative bottom-0
                                      rounded-2xl p-[0.6rem] bg-gray-600 " src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" /> */}
                            </aside>
                        </div>
                    </CSSTransition>


                    <Deck gridAction={gridAction} />
                </div>

            </main>
        </>
    )
}