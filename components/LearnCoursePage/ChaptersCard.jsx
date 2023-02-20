import React from "react";

export default function ChaptersCard({ icon, title, desc }) {
    return (
        <div class="card card-5 max-h-content">
            <div className="flex relative justify-start items-center">

                <div class=" relative -left-10 -top-10 text-4xl">{icon}</div>
                
                <h1 className="relative -left-12  text-lg py-1  text-white kanit italic ">{title}</h1>
            </div>

            <div className="content py-2">
                <p className="text-gray-300 text-sm ">{desc}</p>
            </div>
            <p class="card__apply">
                <a class="card__link" href="#"><i class="fas fa-arrow-right"></i></a>
            </p>
        </div>
    )
}