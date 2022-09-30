import React from "react";

export const Title = (props) => {
    return (
        <div className="text-center py-6">
            <h1 className="text-sec font-jost font-bold text-center text-5xl">{props.text}</h1>
        </div>
    );
};
