import React from "react";
import { NavBurger } from "./NavBurger";

import { NavButton } from "./NavButton";

export const NavBar = () => {
    const title = "Indrehus Dev </>";

    return (
        <nav className="reltaive container w-full h-3 pt-7">
            <div className="flex items-center justify-between pl-7">
                <h1 className="text-main font-jost md:text-5xl text-3xl">
                    {title}
                </h1>

    
                <NavBurger/>

                <ul className="hidden md:flex items-end gap-6">
                    <NavButton text="About" />
                    <NavButton text="Projects" />
                    <NavButton text="Contact" />
                </ul>
            </div>
        </nav>
    );
};
