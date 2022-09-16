import React from "react";


export default function NavBar(){


    return(
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <img className="w-72" src="./img/logo.PNG" alt="logo_img"/>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-main font-merri font-medium">About Me</a>
                    <a href="#" className="hover:text-main font-merri font-medium">My Project</a>
                    <a href="#" className="hover:text-main font-merri font-medium">Contact</a>
                </div>

            </div>
        </nav>
    )
}