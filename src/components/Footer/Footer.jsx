import React from "react";

export const Footer = () => {
    const title = "Indrehus Dev"



    return (
        <>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                <h1 className="text-main font-jost md:text-1xl text-sm">
                    {title}
                </h1>
                    <p>Kjetil K. Indrehus </p>
                    <p>(Updated: 26.09.22)</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    
                    <a href="https://github.com/KjetilIN">
                        <img className="h-7" src='./img/icons/github.svg' alt="Hero Graphics" />
                    </a>

                    <a href="https://www.linkedin.com/in/kjetil-indrehus/">
                        <img className="h-7" src='./img/icons/linkdin.svg' alt="Hero Graphics" />
                    </a>
                    
    
                </div>
            </footer>
        </>
    );
};
