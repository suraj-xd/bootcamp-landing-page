import React from "react"
import { CSSTransition } from "react-transition-group"
export default function Deck({ gridAction }) {
    return (
        
        <CSSTransition
            in={gridAction}
            classNames="deckImage"
            timeout={100}
        >
            <div className="cards  flex flex-wrap  justify-center items-center  overflow-y-scroll h-[40rem] hide-scroll-bar">
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105 " src="./8.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105 " src="./8.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105 " src="./8.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />
                <img className="card w-[30%] sm:w-[26%] md:w[20%] lg:w-[15%] hover:scale-105" src="./9.png" />

                {/* <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105" src="./10.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105 " src="./8.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem]  hover:scale-105" src="./9.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105" src="./10.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105 " src="./8.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem]  hover:scale-105" src="./9.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105" src="./10.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105 " src="./8.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem]  hover:scale-105" src="./9.png" />
            <img className="card w-[8.5rem] h-[11rem] md:w-[9rem] md:[13rem] lg:w-[11rem] lg:h-[14rem] hover:scale-105" src="./10.png" /> */}
            </div>
        </CSSTransition>
    )
}