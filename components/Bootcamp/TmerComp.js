import react, { useEffect, useState } from "react";
export default function TimerComp() {
    const [days, setdays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isExpired, setExpired] = useState(0);
    const timer = undefined;
    const setDate = () => {
        const contDownDate = new Date("April 03, 2023 19:00:00").getTime();
        const currentDate = new Date().getTime();
        const distance = contDownDate - currentDate;

        if (distance < 0) {
            clearInterval(timer);
            setExpired(true);
        } else {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
            setdays(Math.floor(distance / day));
            setHours(Math.floor((distance % day) / hour));
            setMinutes(Math.floor((distance % hour) / minute));
            setSeconds(Math.floor((distance % minute) / second));
            setExpired(false);
        }
    }
    // setDate();
    const counter = () => {
        timer = setInterval(() => {
            setDate();
        }, 1000);
    };
    useEffect(() => {
        counter();
    }, [])
    return (
        <>
            {isExpired ?
                <div className="expired">
                    <h1>Bootcamp is Live!</h1>
                </div>
                :
                <div className="main text-white ">
                    <div className="">
                        {/* <p className="comfort text-gray-200 text-center">Starts in</p> */}
                        <div className="flex justify-center items-center gap-3 text-gray-400 my-3">
                            {/* <div className="h-5 rounded-sm w-11 text-white kanit bg-red-400 justify-center items-center flex nunito tracking-widest">
                                
                                Live
                            </div> */}
                            <img className="w-12 h-10" src="https://cdn-icons-png.flaticon.com/512/1246/1246264.png" />
                            <div>
                                in
                            </div>
                        </div>
                        <div className="time-box flex justify-center items-center w-[17rem] md:w-[30rem] border-b-[1px] border-gray-700 pb-3">
                            <div className="days mx-2 my-2">
                                <h2 className="orbi text-lg md:text-4xl font-extrabold tracking-widest">{days}</h2>
                                <p className="text-gray-400 text-xs orbi">DAYS</p>
                            </div>
                            <div className="flex flex-col gap-2 mx-2">
                                <div className="h-1 w-1 bg-gray-500 rounded-full "></div>
                                <div className="h-1 w-1 bg-gray-500 rounded-full "></div>
                            </div>
                            <div className="hours mx-2 my-2">
                                <h2 className="orbi text-lg md:text-4xl font-extrabold tracking-widest">{hours}</h2>
                                <p className="text-gray-400 text-xs orbi">HOURS</p>
                            </div>
                            <div className="flex flex-col gap-2 mx-2">
                                <div className="h-1 w-1 bg-gray-500 rounded-full "></div>
                                <div className="h-1 w-1 bg-gray-500 rounded-full "></div>
                            </div>
                            <div className="minutes mx-2 my-2">
                                <h2 className="orbi text-lg md:text-4xl font-extrabold tracking-widest">{minutes}</h2>
                                <p className="text-gray-400 text-xs orbi">MINUTES</p>
                            </div>
                            <div className="flex flex-col gap-2 mx-2">
                                <div className="h-1 w-1 bg-gray-500 rounded-full "></div>
                                <div className="h-1 w-1 bg-gray-500 rounded-full "></div>
                            </div>
                            <div className="seconds mx-2 my-2">
                                <h2 className="orbi text-lg md:text-4xl font-extrabold tracking-widest">{seconds}</h2>
                                <p className="text-gray-400 text-xs orbi">SECONDS</p>
                            </div>
                        </div>
                        
                    </div>
                </div>}
        </>
    )
}