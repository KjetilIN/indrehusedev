import React from "react";

export default function Hero() {
    return (
        <div className="flex justify-center">
            <div className="border-2 border-secSh border-spacing rounded-xl shadow-xl w-3/5">
                <div className="bg-hero overflow-hidden relative h-[600px]">
                  <img src="./img/me.PNG" className="rounded-3xl relative top-10 left-10 w-96"></img>

                  <div className="bg-sec w-[550px] rounded-sm border-b-gray-dark border-2 shadow-card1 hover:shadow-card2 transition-shadow relative left-1/3 h-40 p-6">
                    <h2 className="font-bold text-lg">Hi 🙌</h2>
                    <h1 className="text-3xl">My name is Kjetil Indrehus 💻</h1>
                    <h3 className="italic">Student & Developer</h3>
                  </div>

                  
                </div>

            </div>
        </div>
        
    );
}
