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
    <header style={{'backgroundColor':''}} className="shadow-md sticky top-0 z-60 flex bg-transparent items-center pt-2 p-2 ">
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <div onClick={()=>{setFeed(true);setPublic(false);setFav(false);}}>
           <HeaderIcon Icon={HomeIcon} />
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
    <div className="flex-grow h-screen pl-3 pb-44 pt-6 mr-2 overflow-y-auto scrollbar-hide feedback">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Feed */}
        {isFeed && <InputBox /> }
        {isFeed && <Posts genre="feed" posts={posts} /> }
        {isPublic && <Posts genre="public" posts={posts}/> }
        {isFav && <Posts genre="favorite" posts={posts}/> }
      </div>
    </div>
    </>
  );
}

export default Feed;
