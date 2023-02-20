import Link from "next/link";
import Cards from "./Cards";
import VanillaTilt from 'vanilla-tilt';
import Glass from "./Glass";
import { useEffect } from "react";
function Header() {
  const userName =  "Demo User";
  const avatar = "https://w7.pngwing.com/pngs/581/432/png-transparent-zombie-animated-illustration-t-shirt-drawing-ferocious-masks-avatar-heroes-head-masks.png";
  const power = "🌟" // level
  const deckBackground = "https://w7.pngwing.com/pngs/915/475/png-transparent-nebula-desktop-space-galaxy-space-purple-violet-atmosphere.png";
  const userBackground = "/1.jpg";

  useEffect(()=>{
    const elements = document.querySelectorAll(".main");
    VanillaTilt.init(elements);
  },[])
  return (
    <>
      <div className="overflow-hidden">

        <div  className=" m-3 flex items-center justify-center">
          {/* User Card */}
          <span className="main flex m-4 p-4 rounded-2xl bg-transparent blur-xs">

            <div>
              <img className="w-24 h-24 sm:w-[9rem] sm:h-[9rem] rounded-full object-cover" src={avatar}></img>
            </div>
            {/* <div className="m-3 ">

              <h2 className=" text-base text-right mt-2 font-extrabold   md:text-xl lg:text-2xl   text-white">Power <p className="mt-2 animate-bounce"> {power}</p> </h2>

            </div> */}
              <h1 className="text-2xl  text-center font-extrabold   md:text-4xl lg:text-5xl  text-transparent bg-clip-text bg-gradient-to-br  from-purple-400 via-purple-300 to-blue-600">{userName}</h1>
          </span>

        </div>
        {/* Deck Title */}
        <h1 class="mb-4 text-2xl ml-10 font-extrabold   md:text-4xl lg:text-5xl  text-transparent bg-clip-text bg-gradient-to-br  from-purple-400 via-green-300 to-blue-600"> My Gamified Deck<span className="text-white">🕹️</span> </h1>

        {/* Deck */}
        <div style={{"background":`url(${deckBackground})`}}  className="flex bg-gray-900 overflow-x-scroll max-w-full scrollbar-hide mb-10  mr-3 ml-3 rounded-lg">
          {/* <Cards /> */}
          <div  className="cards flex  flex-row m-10">
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/nucast-inception"} />
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/atman_poster.webp"} />
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/uglys1_uysvj0.webp"} />

            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/nucast-inception"} />
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/atman_poster.webp"} />
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/uglys1_uysvj0.webp"} />

            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/nucast-inception"} />
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/atman_poster.webp"} />
            <Glass uB={"/upperBorder.png"} bB={"/bottomBorder.png"} poster={"https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/movies/uglys1_uysvj0.webp"} />
          </div>


        </div>



      </div>





    </>
  );
}

export default Header;
