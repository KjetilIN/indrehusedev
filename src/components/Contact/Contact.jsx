import React from "react";
import { Title } from "../About/Title";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ContactList } from "./ContactList";

export const Contact = () => {
    return (
        <div className=" flex-col h-auto bg-main rounded xl py-10 mb-5">
            <Title text="Contact me!" />
            <ul class="flex flex-col justify-center items-center list-none text-sec gap-5">
                <ContactList link="https://github.com/KjetilIN" handle="@KjetilIN">
                    <FaGithubSquare />
                    Github
                </ContactList>

                <ContactList link="https://www.linkedin.com/in/kjetil-indrehus/" handle="Kjetil Indrehus">
                    <FaLinkedin />
                    LinkedIN
                </ContactList>
                <ContactList link="https://twitter.com/KIndrehus" handle="@KIndrehus">
                    <FaTwitterSquare />
                    Twitter
                </ContactList>
            </ul>

        </div>
    );
};
