import React from "react";

export default function About() {
    return (
        <div className="mt-96 bg-mainSH h-full p-4">
            <h1 className="text-center text-white underline font-bold text-[50px] font-oswald p-5">
                About Me!
            </h1>

            <div className="flex">
                <div className="myItem1">
                    <div className="flex">
                        <div className="bg-white w-[640px] rounded-sm border-b-gray-dark border-2 shadow-card1 hover:shadow-card2 transition-shadow relative left ml-10 h-auto p-6">
                            <h1>Hi 🙌</h1>
                            <p>
                                My name is Kjetil Indrehus. I am a Computer
                                engineer student at NTNT Gjøvik 👨‍💻! <br /> I
                                have a lot of ambition for developing usefull
                                techonolgy, and learning new techonolgy every
                                day! I made this website so you could now what I
                                am currently learning! Feel free to contact me!
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="bg-white w-[200px] rounded-sm border-b-gray-dark border-2 shadow-card1 hover:shadow-card2 transition-shadow relative left ml-10 h-auto p-6 my-2 flex-col">
                            <img
                                className="h-[150px] w-[150px]"
                                src="./img/ntnu.png"
                            />
                            <h2 className="relative top-5">
                                <span className="font-bold">Education:</span>{" "}
                                Computer engineer (2021-2024)
                            </h2>
                        </div>
                        <div className="bg-white w-[400px] rounded-sm border-b-gray-dark border-2 shadow-card1 hover:shadow-card2 transition-shadow relative left ml-1 p-6 my-2 flex-col">
                            <h1 className="font-bold">Experice: </h1>
                            <ui>
                                <li>TekKom Member </li>
                                <li>Start Gjøvik: Website and Podcast </li>
                                <li>Future Bekk Intern </li>
                            </ui>
                        </div>
                    </div>
                </div>

                <div className="myItem2">
                    <img className=" sm:hidden md:block relative mx-40 my-1" src="./img/prog.svg" />
                </div>
            </div>
        </div>
    );
}
