import React from "react";
import { Title } from "./Title";
import { Experience } from "./Experience/Experience";
import { ImageCard } from "./ImageCard";
import { InfoCard } from "./InfoCard";
import { ExperienceCard } from "./Experience/ExperienceCard";

export const About = () => {
    return (
        <div className="w-full h-auto bg-main pb-5">
            <Title text="About Me!"/>
            <div className="flex flex-col md:flex-row gap-5 justify-center px-3">
                <InfoCard/>
                <ImageCard/>
            </div>
            <Experience/>
            <div className="flex flex-col md:flex-row gap-5 justify-center px-3">
                <ExperienceCard title="Start Gjøvik" text="IT repsonsible for website" img="../img/avatar/start.png"/>
                <ExperienceCard title="Bekk Summer Intern 2023" text="Internship as Developer" img="../img/avatar/bekk.png"/>
                <ExperienceCard title="NTNU" text="Computer Engineering student"img="../img/avatar/ntnu.png" />
            </div>

        </div>
    );
};
