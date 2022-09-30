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

    return (
        <div className="card w-96 h-[680px] bg-base-100 shadow-xl px-2 my-2">
            <div className="card-body">
                <h2 className="card-title">Who am I?</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
