import React from "react";
import { Title } from "./Title";
import { Experience } from "./Experience/Experience";
import { ImageCard } from "./ImageCard";
import { InfoCard } from "./InfoCard";
import { ExperienceCard } from "./Experience/ExperienceCard";

export const About = () => {
    return (
        <div className="flex-col justify-center h-auto bg-main rounded-xl">
            <Title text="About Me!"/>
            <div className="flex flex-col-reverse gap-5 items-center px-3 md:flex-row md:justify-center">
                <InfoCard/>
                <ImageCard/>
            </div>
            <Experience/>
            <div className="flex flex-col flex-wrap items-center gap-5 md:flex-row md:justify-center py-4">
                <ExperienceCard title="Start Gjøvik" text="IT repsonsible for website" img="../img/avatar/start.png"/>
                <ExperienceCard title="Bekk Summer Intern 2023" text="Internship as Developer" img="../img/avatar/bekk.png"/>
                <ExperienceCard title="NTNU" text="Computer Engineering student"img="../img/avatar/ntnu.png" />
            </div>

        </div>
    );
};
