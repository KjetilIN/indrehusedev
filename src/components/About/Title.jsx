import React from "react";

export const Title = (props) => {
    return (
        <div className="p-6 py-20 flex justify-center">
            <div className="relative w-full md:left-[66vh]">
                <h1 className="text-sec font-jost text-5xl font-bold absolute z-10">
                    {props.text}
                </h1>
                <h1 className="text-orangetheme font-jost text-5xl font-bold absolute left-1 top-1">
                    {props.text}
                </h1>
            </div>
        </div>
    );
};
