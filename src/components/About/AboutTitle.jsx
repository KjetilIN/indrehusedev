import React from "react";

export const AboutTitle = () => {
    const titleText = "About Me!";
    return (
        <div className="p-6 py-20 flex justify-center">
            <div className="relative w-full md:left-[66vh]">
                <h1 className="text-sec font-jost text-5xl font-bold absolute z-10">
                    {titleText}
                </h1>
                <h1 className="text-orangetheme font-jost text-5xl font-bold absolute left-1 top-1">
                    {titleText}
                </h1>
            </div>
        </div>
    );
};
