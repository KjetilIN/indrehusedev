import React from "react";
import { Title } from "../UX/Title";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ContactList } from "./ContactList";

export const Contact = () => {
    const email = "kjetilindrehus@gmail.com"


    return (
        <div id="contact" className=" flex-col h-auto bg-main rounded xl py-10 mb-5">
            <Title text="Contact me!" />
            <ul className="flex flex-col justify-center items-center list-none text-sec gap-5">
                <ContactList link="https://github.com/KjetilIN" handle="@KjetilIN">
                    <FaGithubSquare className="text-4xl"/>
                    Github
                </ContactList>

                <ContactList link="https://www.linkedin.com/in/kjetil-indrehus/" handle="Kjetil Indrehus">
                    <FaLinkedin className="text-5xl"/>
                    LinkedIN
                </ContactList>
                <ContactList link="https://twitter.com/KIndrehus" handle="@KIndrehus">
                    <FaTwitterSquare className="text-4xl" />
                    Twitter
                </ContactList>
            </ul>

            <div className="divider after:bg-sec before:bg-sec text-sec">OR EMAIL ME 📪</div>

            <div className="flex justify-center mt-8">
                <a href={`mailto:${email}`} className="cursor-pointer">
                    <h1 className="font-jost text-sec text-3xl hover:underline transform transition duration-500 hover:scale-110">{email}</h1>  
                </a>
              
            </div>
            

        </div>
    );
};
