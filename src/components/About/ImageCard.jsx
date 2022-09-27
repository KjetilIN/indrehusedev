import React from "react";

export const ImageCard = () => {
    return (
        <div className="card w-auto md:w-96 bg-base-100 shadow-xl h-auto">
            <figure>
                <img src="./img/portrait.png" alt="Myself" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Kjetil K. Indrehus</h2>
                <p>Junior Developer | NTNU Student</p>
            </div>
        </div>
    );
};
