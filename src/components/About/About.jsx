import React from "react";

export const About = () => {
    return (
        <div className="bg-about w-full h-[130%] md:h-[70%]">
            <div className="flex justify-center">
                <h1 className="bg-orangetheme p-4 rounded-md text-jost text-2xl text-main md:text-6xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.54)] m-8">
                    About Me 👨‍💻
                </h1>
            </div>

            <div>
                <div className="bg-main rounded-xl mx-10 border-2 p-4 m-8 text-jost text-lg md:p-6 md:text-xl md:w-1/2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] ">
                    <p className="">
                        I started coding in High School with <span className="underline decoration-red decoration-4 underline-offset-8 ">Python</span>. The challege was the primary reason. My first code project was with python and challeging.
                        I created a game with using PyGame. It was terrible, but I spend a whole weekend on it. Later on I wanted more challege, so I stared learning 
                         <span className="underline decoration-red decoration-4 underline-offset-8"> C++ </span>. 
                        I used the laguage to primary solve coding challenges on Hackerrank. Later on I desided to persive a bachelor in <span className="underline decoration-red decoration-4 underline-offset-8">Data Engineer at NTNU Gjøvik.</span>
                         Today I am a student, with the same goal: find a challege! 
                    </p>


                    <br />
                    <h1>Keywords!</h1>
                    <ul className="list-disc p-2">
                        <li>Data Engineer Student</li>
                        <li>Like to read about Machine Learing & A.I</li>
                        <li>....</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};
