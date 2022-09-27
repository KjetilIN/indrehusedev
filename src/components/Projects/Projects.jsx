import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const overviewTitle = "My Projects </>"

    const ITEMS = 3;

    const getPrevItemNumber = (itemNumber) => {
        if (itemNumber === 0) {
            return ITEMS-1;
        }
        return itemNumber - 1;
    };

    const getNextItemNumber = (itemNumber) => {
        if (itemNumber === ITEMS - 1) {
            return 0;
        }
        return itemNumber + 1;
    };

    const projects = [
        {   
            id: 0,
            title: "WarGames",
            languages: ["Java"],
            isNew: false,
            description:
                "A java project created using JavaFX. Simulates battle between two armies!",
            img: "https://user-images.githubusercontent.com/66110094/167279945-8118c1fc-e2c5-4bb7-9199-aa6a649b8d84.gif",
        },
        {
            id: 1,
            title: "Space Invaders",
            languages: ["Go"],
            isNew: true,
            description:
                "Space Invaders created with GoLang, and Ebiten",
            img: "https://user-images.githubusercontent.com/66110094/185804774-a560cfb9-a3ff-4e59-adbe-38bca1c127cc.gif",
        },
        {
            id: 2,
            title: "Portfolio Website",
            languages: ["React","Tailwind css", "DaysyUi"],
            isNew: true,
            description:
                "My portfololio Website created to display my projects",
            img: "./img/web.png",
        },
    
    ];
    return (
        <div className="bg-sec h-[110%] w-full ">
            <div className="flex flex-col items-center justify-center pt-20">

                <h1 className="p-10 text-main text-4xl lg:text-6xl">{overviewTitle}</h1>
                
                <div className="carousel carousel-center w-full">
                    {projects.map((project) => (
                        <div
                            id={"slide" + project.id}
                            key={Math.random()*100}
                            className="carousel-item relative w-full"
                        >
                            <ProjectCard
                                title={project.title}
                                id={project.id}
                                isNew={project.isNew}
                                description={project.description}
                                languages={project.languages}
                                img={project.img}
                

                            />

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                                <a
                                    href={
                                        "#slide" + getPrevItemNumber(project.id)
                                    }
                                    className="btn btn-circle"
                                    //onClick={e => e.preventDefault()}
                                >
                                    ❮
                                </a>

                                <a
                                    href={
                                        "#slide" + getNextItemNumber(project.id)
                                    }
                                    className="btn btn-circle"
                                    //onClick={e => e.preventDefault()} FIX PREVENT DEFAULT
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
