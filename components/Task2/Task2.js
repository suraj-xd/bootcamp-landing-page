import React, { useEffect, useState } from "react";
// import "./Task2.css"
import Card from "./Card";
const initialData = {
    1:{
        "vote":0,
        "movieID":"a",
    },
    2:{
        "vote":0,
        "movieID":"b",
    },
    3:{
        "vote":0,
        "movieID":"c",
    },
    4:{
        "vote":0,
        "movieID":"d",
    },
    5:{
        "vote":0,
        "movieID":"e",
    },
    6:{
        "vote":0,
        "movieID":"f",
    },
    7:{
        "vote":0,
        "movieID":"g",
    },
    8:{
        "vote":0,
        "movieID":"h",
    },
    9:{
        "vote":0,
        "movieID":"i",
    },
    10:{
        "vote":0,
        "movieID":"j",
    }
}
export default function Task2() {
    const votingPowerLimit = 10;
    const [festName, setFestName] = useState("Fest Name");
    const [votingPower, setVotingPower] = useState(votingPowerLimit);
    const [isPowerVisible, setIsPowerVisible] = useState(true);
    const [votingData, setVotingData] = useState(initialData);
    function setVote(vote, key, sign, movieID) {
        if (sign == 1) {
            if (votingPower - 1 >= 0) {
                setVotingPower((c) => c - 1);

                setVotingData((prev) => ({
                    ...prev,
                    [key]: {
                        vote: vote + 1,
                        movieID: movieID
                    }
                }))
                return 1;
            }
        } else {
            setVotingPower((c) => c + 1);
            setVotingData((prev) => ({
                ...prev,
                [key]: {
                    vote: vote - 1,
                    movieID: movieID
                }
            }))
            return -1;
        }
        return 0;
    }

    useEffect(()=>{
        if(isPowerVisible==true) {
            setTimeout(() => {
                setIsPowerVisible(false)
            }, 5000);
        }
    },[])

    function castVote() {
        console.table(votingData);
        const data = {
            festID: festName,
            totalVotingPower: votingPowerLimit,
            votingPowerUtilized: votingPowerLimit - votingPower,
            votingData
        }

        const jsonData = JSON.stringify(data);
        console.log(jsonData);

    }

    return (
        <>
            <main>
                <div id="Header flex">

                    <div className="flex justify-center items-center flex-col text-white">
                        {/* <div className="h-[3px] rounded-full w-5 bg-gray-600 m-2 "></div> */}
                        {/* <h1 className="">{festName}</h1> */}
                        <button className="festButton mt-5 text-xs sm:text-sm md:text-lg lg:text-xl ">
                            {festName}
                        </button>
                        <div className="h-[3px] rounded-full w-5 bg-gray-600 mt-5 "></div>
                    </div>
                    <div className="flex  justify-between items-center my-4 flex-wrap px-10">
                        
                    <button onClick={castVote} className={`my-1 group flex items-center justify-center text-[14px] ripple z-40 border-2 py-2 px-6 text-white rounded-[8px] bg-[#5F4DFF] border-transparent hover:!bg-white hover:text-black font-semibold hover:border-transparent duration-100 
                         transition-[background] `}>
                            <img className="absolute duration-500  transform -translate-x-32 transition-all ease-in-out group-hover:-translate-x-8 w-5 h-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/2087/2087986.png" />
                            <span className="group-hover:translate-x-3 transition-all ease-in-out duration-500 group-hover:text-black text-white ">

                                Cast Vote
                            </span>
                        </button>
                        <button className="votingPower my-1 flex px-1 text-white cursor-default rounded-full">
                            {isPowerVisible && <>
                                <span className="ml-2 z-0">Voting Power :</span>
                                <span class="mr-2 ml-1"> {votingPower} </span>
                            </>
                            }
                            <img onClick={() => setIsPowerVisible((c) => !c)} className=" icon hover:brightness-125" src="https://img.icons8.com/3d-fluency/94/null/lightning-bolt.png" />
                        </button>

                        
                    </div>

                </div>
                <div id="MovieCards">
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-5 group">
                        <Card setVote={setVote} movieID={"a"} id={1} mediaSrc={"https://imgs.search.brave.com/NUA9IMhlRLPdCVZ_VmjdS0zT3ooa5kUaEJbuXDmdMDY/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2FsbHBhcGVy/c2Rlbi5jb20vaW1h/Z2UvZG93bmxvYWQv/Y3liZXJwdW5rLTIw/NzctNGstZ2FtZV9h/MnRuWjJxVW1acWFy/YVdrcEpSbVoyMWxy/V1psWjJrLmpwZw"} />
                        <Card setVote={setVote} movieID={"b"} id={2} mediaSrc={"https://imgs.search.brave.com/JOu7EKJcueGdQfGTHBufkR2h41Buq0faNkUANvizVXw/rs:fit:1000:931:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMuM2R0b3RhbC5j/b20vMTAtLS1maW5h/bDAxLnlnb24xcC5m/dWxsLXZpZXcuYzE2/LmpwZw"} />
                        <Card setVote={setVote} movieID={"c"} id={3} mediaSrc={"https://imgs.search.brave.com/UASCOeQ2oTmuOs8BLdO16KYglN91KJ9PrZVEJPQueog/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2FsbHBhcGVy/c2Rlbi5jb20vaW1h/Z2UvZG93bmxvYWQv/d29tYW4taW4tY3li/ZXJwdW5rLWNpdHlf/Ykdkb2JtYVVtWnFh/cmFXa3BKUm5hbXRs/cldaclpXVS5qcGc"} />
                        <Card setVote={setVote} movieID={"d"} id={4} mediaSrc={"https://imgs.search.brave.com/4hnawdQgyE_SpQOIDbbdcIJEwxyC9tqbjXxuV62eUho/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMyLnJvY2twYXBl/cnNob3RndW4uY29t/L2N5YmVycHVuay0y/MDc3LWNoYXJhY3Rl/ci1hcnQuanBnL0JS/T0svcmVzaXplLzE5/MjAlM0UvZm9ybWF0/L2pwZy9xdWFsaXR5/LzgwL2N5YmVycHVu/ay0yMDc3LWNoYXJh/Y3Rlci1hcnQuanBn"} />
                        <Card setVote={setVote} movieID={"e"} id={5} mediaSrc={"https://imgs.search.brave.com/VqqOfApPZKaX7agZi3qBx3sh_04p-_h_hEmwc-Hfp28/rs:fit:1138:700:1/g:ce/aHR0cHM6Ly9ibG9n/cy1pbWFnZXMuZm9y/YmVzLmNvbS9wYXVs/YXJtc3Ryb25ndGVj/aC9maWxlcy8yMDE3/LzAyL3Bld2RpZXBp/ZS1icm9maXN0Lmpw/Zw"} />
                        <Card setVote={setVote} movieID={"f"} id={6} mediaSrc={"https://imgs.search.brave.com/BdpCfuiQpZ2pvdwPTzKFg4ILahuETI5gdIhN_4EVuA4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YnVzaW5lc3NpbnNp/ZGVyLmluL3Bob3Rv/Lzc5Mzk5MzY5L3lv/dXR1YmUtc3VkZGVu/bHktYmFubmVkLWFu/ZC10aGVuLXF1aWNr/bHktcmVpbnN0YXRl/ZC1lLWdpcmwtaW5m/bHVlbmNlci1iZWxs/ZS1kZWxwaGluZXMt/Y2hhbm5lbC5qcGc_/aW1nc2l6ZT0xNDg5/ODI"} />
                        <Card setVote={setVote} movieID={"g"} id={7} mediaSrc={"https://imgs.search.brave.com/yNMuNLrkjlbud71B03N6xHn5Yr-EDq7WnndCSfVbZEo/rs:fit:960:499:1/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2xjNDBnNTF3dTE3/MS5qcGc_d2lkdGg9/OTYwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9OWVlN2IwNGQx/NzE2YzVlNThmYzgy/MDQ1ZjY4OWNmMWEx/ZTU0M2JhMg"} />
                        <Card setVote={setVote} movieID={"h"} id={8} mediaSrc={"https://imgs.search.brave.com/RICC7xqKS1FGjhFAaNGhsoV6g5CB7dNy4qG94ZgxrsE/rs:fit:1035:949:1/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzVs/Mnk2eC5qcGc"} />
                        <Card setVote={setVote} movieID={"i"} id={9} mediaSrc={"https://imgs.search.brave.com/oMH_MCo8naL5ftQaQlHVBGZUMFEXs_jNlXWNQQETzNg/rs:fit:642:500:1/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzIy/cjhiNy5qcGc"} />
                    </div>

                </div>
                
            </main>
        </>
    )
}