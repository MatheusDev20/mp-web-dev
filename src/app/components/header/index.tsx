
import MP from "../../../../public/mp-dark.png"
import BR from "../../../../public/brazil.svg"
import US from "../../../../public/usa.svg"
import ES from "../../../../public/spain.svg"

import Image from "next/image"
import React from "react"
import { LinkedinIcon } from "../icons/linkedin"
import { GithubIcon } from "../icons/github"
import { CountrySelect } from "../language-select"
import { HamburguerIcon } from "../icons/hamburguer"
import { WhatsAppIcon } from "../icons/whatsapp"
import { loadSocialConfigs } from "@/app/utils/json"
import Link from "next/link"
import RandomLetterSwapForward from "../fancy/letter-swap-hover"

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { greatingWhatsap, currentPhone, linkedin, github, languages } = loadSocialConfigs()
  const idioms = languages.map((l) => ({ name: l.name, imgLink: l.name === "PT" ? BR : l.name === "EN" ? US : ES }))

  return (
    <header className="flex justify-center w-screen py-0 px-0 md:px-16 border-b border-gray-700/50">
      <div className="w-full flex flex-wrap px-0 md:px-12 items-center justify-between">
        {/* Logo with "Web Developer" */}
        <div className="flex items-center space-x-4 min-w-[120px] md:min-w-[200px]">
          <Link href="/mp">
            <Image
              src={MP}
              alt="MP"
              className="md:w-[110px] md:h-[110px] w-12 h-12 cursor-pointer"
            />
          </Link>
          <RandomLetterSwapForward
            className="text-gray-300 text-xs md:text-xl font-light"
            label="Web Developer"
          />
        </div>

        {/* Navigation (Hidden on mobile, toggled by menu) */}
        <nav
          className={`${menuOpen ? "block" : "hidden"
            } md:flex justify-center items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <li className="md:text-lg font-bold cursor-pointer text-primary-500 hover:text-primary-700">
              Projetos
            </li>
            <Link href="/mp/bio">
              <li className="md:text-lg font-bold cursor-pointer text-primary-500 hover:text-primary-700">
                Bio
              </li>
            </Link>
          </ul>
        </nav>

        {/* Icons and Language Selector */}
        <div className="flex flex-row items-center mr-6 md:mr-0 gap-4 md:gap-8 md:mt-0">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-8 mr-0 md:mr-12">
            <a
              href={`https://wa.me/${currentPhone}?text=${greatingWhatsap}`}
              target="_blank"
            >
              <WhatsAppIcon tClass="text-white cursor-pointer w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a target="_blank" href={linkedin}>
              <LinkedinIcon tClass="text-white cursor-pointer w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a target="_blank" href={github}>
              <GithubIcon tClass="text-white cursor-pointer w-4 h-4 md:w-6 md:h-6" />
            </a>
          </div>

          {/* Country Select */}
          <CountrySelect
            onChange={() => console.log("Do")}
            value="PT"
            options={idioms}
          />
        </div>
      </div>
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-white focus:outline-none mr-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HamburguerIcon tClass="w-6 h-6" />
      </button>
    </header>

  )
}