import React, { useState } from "react";
export default function Card({ mediaSrc, setVote , id, movieID}) {
    const [movieTitle, setMovieTitle] = useState('Charlie Chaplin Title');
    const [movieInfo, setMovieInfo] = useState('This is some description about the movie Card and some blah blah blah!')
    const [voteCount, setVoteCount] = useState(0);
    function doVote(sign){
        if(voteCount == 0 && sign==-1) return;
        const ans = setVote(voteCount,id,sign,movieID);
        if(ans==1){
            setVoteCount((c)=>c+1);
        }else if(ans==-1){
            setVoteCount((c)=>c-1);
        }
    }
    return (
        <>

            <div class="DFest w-full h-[20rem] flex flex-col justify-between     mb-6 py-5 px-4 border-black  hover:border-gray-800  transition ease-in-out hover:border-[1px] rounded-xl ">

                <div className="overflow-hidden    mb-3 h-60 rounded-lg" >
                    <img className="object-cover" src={mediaSrc} />
                </div>
                <div>
                    <h4 class="text-white  font-extrabold mb-1">{movieTitle}</h4>
                    <p class="text-gray-200   text-xs mb-2 overflow-hidden
                    "><span className="font-extrabold">Film-ID:</span> {"aefee3242ddwee".slice(0,10)+"..."}</p>
                    <div class="flex items-center  justify-around flow-col    text-white flex-wrap ">
                        <button className="watchButton w-[9rem] md:w-[6em] lg:w-[8rem] hover:text-black bg-gradient-to-r from-gray-600 to-gray-800"> Watch
                        </button>

                        <a class="m-2 rounded-full text-white flex items-center justify-center " >


                            <img src={'https://cdn-icons-png.flaticon.com/512/130/130906.png'} onClick={()=>doVote(1)} className="icon hover:bg-[#5F4DFF] upicon mr-1 p-2 rounded-full bg-gray-200 " />
                            <p className="text-white mx-1 font-extrabold">{voteCount}</p>
                            <img src={'https://cdn-icons-png.flaticon.com/512/130/130906.png'} onClick={()=>doVote(-1)} className="hover:bg-gray-300 icon downicon ml-1 p-2 rounded-full " />



                        </a>
                    </div>
                </div>
            </div>



        </>
    )
}