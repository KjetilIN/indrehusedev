import React from "react";

export const Title = (props) => {
    return (
        <div className="flex justify-center py-6">
            <div className="relative">
                <h1 className="text-sec font-jost text-5xl font-bold relative z-10 w-full">
                    {props.text}
                </h1>
                <h1 className="text-orangetheme font-jost text-5xl font-bold absolute z-1 left-1 top-1 w-full">
                    {props.text}
                </h1>
            </div>
        </div>
    );
};
