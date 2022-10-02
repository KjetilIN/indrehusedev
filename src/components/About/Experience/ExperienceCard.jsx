import React from "react";

export const ExperienceCard = (props) => {
    return (
        <div className="transform transition duration-500 hover:scale-90">
            <div className="flex justify-center">
                <div className="avatar relative -bottom-7 z-10 animate-bounce">
                    <div className="w-24 rounded-full ring ring-orangetheme ring-offset-base-100 ring-offset-0">
                        <img src={props.img} alt={props.title} />
                    </div>
                </div>
            </div>

            <div className="card w-[100%] md:w-96 bg-sec text-white">
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
};
