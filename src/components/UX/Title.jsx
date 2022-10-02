import React from "react";

export const Title = (props) => {
    return (
        <div className="flex justify-center py-6">
            <div className="relative">
                {props.light === true ? (
                    <h1 className="text-main font-jost text-3xl font-bold relative z-10 w-full md:text-5xl">
                        {props.text}
                    </h1>
                ) : (
                    <h1 className="text-sec font-jost text-3xl font-bold relative z-10 w-full md:text-5xl">
                        {props.text}
                    </h1>
                )}

                <h1 className="text-orangetheme font-jost text-3xl font-bold absolute z-1 left-1 top-1 w-full md:text-5xl">
                    {props.text}
                </h1>
            </div>
        </div>
    );
};
