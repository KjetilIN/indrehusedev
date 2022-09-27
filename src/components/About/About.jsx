import React from "react";
import { AboutTitle } from "./AboutTitle";
import { ImageCard } from "./ImageCard";
import { InfoCard } from "./InfoCard";

export const About = () => {
    return (
        <div className="w-full h-auto bg-main pb-5">
            <AboutTitle/>
            <div className="flex flex-col md:flex-row gap-5 justify-center px-3">
                <InfoCard/>
                <ImageCard/>
            </div>

        </div>
    );
};
