"use client"

import Image from "next/image";
import MP from "../../public/mp-dark.png"
import EmailIcon from "../../public/email.svg"
import GithubIcon from "../../public/github.svg"
import LinkedinIcon from "../../public/linkedin.svg"
import BR from "../../public/brazil.svg"
import US  from "../../public/usa.svg"
import ES from "../../public/spain.svg"
import { CountrySelect } from "./components/select";
import React from "react";

export default function Home() {
  // const [selectedLanguage, setSelectedLanguage] = React.useState("EN");

  const languages = [
    { name: "PT", imgLink: BR },
    { name: "EN", imgLink: US },
    { name: "ES", imgLink: ES },
  ]
  return (
    /* Header */
    <header className="flex debug justify-center w-screen py-0 px-16">
      <div className="w-full flex debug px-16 items-center justify-evenly">
        <Image src={MP} alt="MP" className="w-32 h-32" />
        <nav className="flex justify-center items-center w-full">
          <ul className="flex justify-center items-center space-x-4">
            <li className="text-2xl font-bold text-primary-500">Home</li>
            <li className="text-2xl font-bold text-primary-500">About</li>
            <li className="text-2xl font-bold text-primary-500">Projects</li>
            <li className="text-2xl font-bold text-primary-500">Contact</li>
          </ul>
        </nav>
        <div>
          <div className="flex flex-row items-center justify-between min-w-[320px]">
            <div className="flex gap-4">
              <Image src={EmailIcon} alt="Email" className="text-white debug cursor-pointer w-6 h-6" />
              <Image src={GithubIcon} alt="github" className="text-white cursor-pointer debug w-6 h-6" />
              <Image src={LinkedinIcon} alt="linkedin" className="text-white cursor-pointer debug w-6 h-6" />
            </div>  

            {/* Country Select */}
            <CountrySelect onChange={() => console.log("Do")} value="EN" options={languages}/>
          </div>
        
        </div>
      </div>
    </header>  
  );
}
