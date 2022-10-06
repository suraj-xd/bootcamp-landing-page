import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  MapIcon,
TagIcon,
} from "@heroicons/react/solid";

import React, { useState } from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";


function Feed({ posts }) {
  const [isFeed,setFeed] = useState(true);
  const [isPublic,setPublic] = useState(false);
  const [isFav,setFav] = useState(false);
  return (
    <>
    
    <div className="flex-grow h-screen pl-3 pb-44 pt-6 mr-2 overflow-y-auto scrollbar-hide feedback">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Feed */}
        {isFeed && <InputBox /> }
        {isFeed && <Posts genre="feed" posts={posts} /> }
        {isPublic && <Posts genre="public" posts={posts}/> }
        {isFav && <Posts genre="favorite" posts={posts}/> }
      </div>
    <header style={{'backgroundColor':'','left':'35%'}} className="absolute bottom-2 border-b-blue-500 border-blue-200 border-2 rounded-2xl  z-60  bg-gray-800  items-center pt-2 p-2 ">
      <div className="flex flex-grow">
        <div className="flex space-x-8 md:space-x-6">
          <div onClick={()=>{setFeed(true);setPublic(false);setFav(false);}}>
           <HeaderIcon active Icon={HomeIcon} />
          </div>
          <div onClick={()=>{setFeed(false);setPublic(true);setFav(false);}}>
           <HeaderIcon Icon={MapIcon} />
          </div>
          <div onClick={()=>{setFeed(false);setPublic(false);setFav(true);}}>
          <HeaderIcon Icon={TagIcon} />
          </div>

        </div>
      </div>
    </header>
    </div>
    </>
  );
}

export default Feed;
