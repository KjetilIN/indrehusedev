import React from "react";

export const ExperienceCard = (props) => {
    return (
        <div>  
            <div className="avatar relative -bottom-7 z-10 left-[8rem] animate-bounce">
                    <div className="w-24 rounded-full ring ring-orangetheme ring-offset-base-100 ring-offset-0">
                        <img src={props.img} alt={props.title} />
                    </div>
                </div>
            <div className="card w-96 bg-sec text-white">
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        
        </div>
        
    );
};
