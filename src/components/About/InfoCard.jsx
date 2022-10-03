import React from "react";
import { InfoBadge } from "./InfoBadge";

export const InfoCard = () => {
    const skills = [
        "React",
        "Java",
        "Git",
        "GoLang",
        "Python",
        "JavaFX",
        "Tailwind CSS",
        "Firebase",
        "DaisyUI",
    ];

    const info =`
    Software developer, entrepreneur, and student. I enjoy programming and hacking on projects in my spare time.
    I'm a computer science student who enjoys coding puzzles . I've been coding since highschool, and it's a big part of what I do for fun.
    I'm a technology enthusiast who is always on the lookout for new software and hardware to learn. 
    My lates obsession is React and front-end development. I am a person who is always looking for opportunities to grow. 
    I believe that knowledge is power and that each day presents us with a new opportunity to learn. I believe in the importance of hard work and I strive to maintain a positive attitude in order to create the best environment for myself, my family, and my friends.

    `;

    return (
        <div className="card w-96 h-[680px] bg-base-100 shadow-xl px-2 my-2">
            <div className="card-body">
                <h2 className="card-title">Who am I?</h2>
                <p>
                    {info}
                </p>

                <h2 className="card-title">My tools!</h2>
                <div className="mx-auto">
                    {skills.map((skill) => (
                        <InfoBadge title={skill} key={Math.random()}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
