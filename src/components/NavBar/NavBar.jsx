import React from "react";

import { NavButton } from "./NavButton";

export const NavBar = () => {
    const title = "Indrehus Dev </>";

    return (
        <nav className="reltaive container w-full h-3 pt-7">
            <div className="flex items-center justify-between pl-7">
                <h1 className="text-main font-jost md:text-5xl text-3xl">{title}</h1>

                <img className="block md:hidden h-6 m-3" src="./img/main-menu.png" alt="burgerMenu"/>


                <ul className="hidden md:flex items-end">
                    <NavButton text="About" />
                    <NavButton text="Projects" />
                    <NavButton text="Contact" />
                </ul>
            </div>
        </nav>
    );
};
