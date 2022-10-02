import React from "react";

export const ContactList = (props) => {
    return (
        <a href={props.link} className="font-jost cursor-pointer border-spacing border-2 border-sec w-[50%] transform transition duration-500 hover:scale-110 hover:bg-sec hover:text-main" target="_blank">
            <div className="flex gap-3 py-2 text-3xl items-center justify-center ">
                {props.children}
            </div>
            <div className="flex justify-center -py-2">
                <h2 className="text-lg">{props.handle}</h2>
            </div>
        </a>
    );
};
