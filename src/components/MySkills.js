import React from "react";
import SkillCard from "./SkillCard";

export default function MySkills() {
    const title = "<Skills/>";

    return (
        <div className="flex flex-col justify-center pt-[50px]">
            <h1 className="text-[60px] font-merri font-bold flex justify-center mt-72 motion-safe:animate-bounce">
                {title}
            </h1>

            <div className="flex items-center space-x-3 top-0 h-50 mb-16">
                <SkillCard title="React" exp="Beginner" img="./favicon.ico" />
                <SkillCard
                    title="Java"
                    exp="Intermediate"
                    img="./img/java.png"
                />
                <SkillCard
                    title="Python"
                    exp="Intermediate"
                    img="./img/python.png"
                />
                <SkillCard title="Go" exp="Beginner" img="./img/go-lang.png" />
                <SkillCard title="Flutter" exp="Beginner" img="./img/smartphone.png" />
            </div>
        </div>
    );
}
