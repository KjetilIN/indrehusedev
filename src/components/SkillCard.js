import React from "react";

export default function SkillCard(porps){

    return(
        <div className="bg-sec w-[130px] rounded-sm border-b-gray-dark border-2 shadow-card1 hover:shadow-card2 transition-shadow relative left-1/3 h-[150px] p-6 flex-none">
            <img src={porps.img}/>
            <h1 className="font-bold">{porps.title}</h1>
            <h2 className="italic">{porps.exp}</h2>
        </div>
    )
}