import List from "./List";

export default function TimeLine() {
    return (
        <>
            <div class='wrapp '>

                <div className=" flex  flex-col justify-center items-center">

                    <p className="text-white border-[1px] border-gray-700 relative top-[17rem] w-[95%] text-2xl p-5 rounded-2xl backdrop-blur-sm  flex justify-between items-center px-8 flex-wrap">
                        <a href="/" className="text-extrabold text-sm sm:text-xl md:text-2xl">bootcamp.<span className="text-white font-extrabold kanit">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span></a>

                        <a href="https://www.youtube.com/@crackDSA" target="_blank" className="text-sm sm:text-base md:text-lg kanit flex justify-center items-center group"> Youtube<img className="h-6 mx-1 w-6 group-hover:animate-pulse" src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube-play.png" /> </a>
                    </p>

                    {/* <p className="text-white relative top-[18.2rem] bg-gray-900 text-xl p-5 rounded-2xl">crackDSA presents</p> */}

                    <h1 data-shadow='anveshna ' className="flex justify-center items-center headerTitle relative top-[23rem] text-[3.2rem]  nunito">{"LaunchPadx"}</h1>

                    {/* <div class="relative top-[16rem] bg-gray-100   text-black py-3 px-8 rounded-lg font-extrabold text-base  sm:text-lg md:text-xl lg:text-2xl"></div> */}
                    <div className="relative text-center top-[23.5rem] bg-gray-100   text-black py-2 px-2 rounded-lg w-[17rem] flex justify-center items-center  z-[99]  ">

                        <h2 d ata-shadow='anveshna ' className="text  font-extrabold text-sm  sm:text-md md:text-lg lg:text-xl z-[99] text-gray-800">Learnings</h2>
                    </div>
                </div>
                <div class='bottom-planee'>

                </div>

            </div>
            <div className="mx-2 relative bottom-32 md:mx-10">
                {/* PDFS */}
                <div className="flex justify-center items-center flex-wrap gap-2 mb-20">
                    <a href="./topictree.pdf" download={"DSA Topic Tree"}>
                        <button class="button w-[9.5rem]" type="button">
                            <span class="btntxt">DSA Topic Tree</span>
                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                        </button>
                    </a>

                    <a href="./dsaguide.pdf" download={"DSA Guide"}>
                        <button class="button w-[9.5rem]" type="button">
                            <span class="btntxt">DSA Guide</span>

                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                        </button>
                    </a>
                    <a href="./dsaproblems.pdf" download={"DSA Problem Sheet"}>
                        <button class="button wrem]" type="button">
                            <span class="btntxt">DSA Problem Sheet</span>

                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                        </button>
                    </a>
                </div>
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <List day={"Day 2"} date={"7th April"} topic="DSA" session="Arrays and Strings" live="https://youtube.com/live/ZJngGYT8gIw" title1="Arrays" title1Link="https://drive.google.com/file/d/1KzZiDcfyUs-rdy0BN3K-O_U8asokGsxb/view?usp=sharing" title2="Strings" title2Link="https://drive.google.com/file/d/1iftmxh2NIywJgtbVaz9D4iDY1yawMCZ6/view?usp=sharing"/>
                    <List day={"Day 1"} date={"6th April"} topic="DSA" session="Basics of Programming and Libraries" notes="https://drive.google.com/file/d/15g8x-6j8xvdX_O6jXLWraHXdaxamvALU/view?usp=sharing" live="https://youtube.com/live/P4dc9dl0SEg" />
                </ol>
            </div>



            {/* <div class="mx-auto relative bottom-32 w-16 h-1 my-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-full"></div> */}
            <div className="relative  mt-20  flex justify-center items-center my-10 flex-col">
                <a target={"_blank"} href="https://lu.ma/event/evt-JI6MLUama5KQDzX"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-JI6MLUama5KQDzX">

                    <button

                        className="z-50 w-40 md:w-48 h-10  md:h-12 rounded-[8px] border-[1px] border-gray-900 shadow-xl hover:scale-[.97] hover:brightness-105 transition-all ease-in-out text-black
                 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 orbi font-extrabold text-base md:text-xl">
                        Register
                    </button>
                </a>
                <div class="mx-auto relative bottom-20 w-12 h-1 bg-gradient-to-r from-gray-200 to-gray-700 rounded-full"></div>

                <p className="kanit my-3 italic mx-5 text-gray-200">Registrations Closes soon..</p>
            </div>


            <footer class="p-4 shadow md:px-6 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://crackdsa.com/" class="flex items-center mb-4 sm:mb-0">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span className="text-white font-extrabold kanit text-4xl">crack<span className="text-blue-400 font-extrabold kanit">DSA</span></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.linkedin.com/company/crackdsa/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                        </li>
                        {/* <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li> */}
                        <li>
                            <a href="https://wa.me/message/TPN76XLWVOWDB1" class="mr-4 hover:underline md:mr-6">Whatsapp</a>
                        </li>
                        <li>
                            <a href="mailto:helloss@crackdsa.com" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-white sm:text-center dark:text-gray-400">©  <a href="https://crackdsa.com/" class="hover:underline">crackDSA</a>. All Rights Reserved.
                </span>


            </footer>


        </>
    )
}