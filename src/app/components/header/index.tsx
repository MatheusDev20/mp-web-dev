
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
import { motion } from "motion/react"
import { MenuIcon } from "../icons/menu"

type Props = {
  navHover: boolean
  setNavHover: (navHover: boolean) => void
}

export const Header = ({ navHover, setNavHover }: Props) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { greatingWhatsap, currentPhone, linkedin, github, languages } = loadSocialConfigs()
  const idioms = languages.map((l) => ({ name: l.name, imgLink: l.name === "PT" ? BR : l.name === "EN" ? US : ES }))

  return (
    <header className="flex justify-center min-h-16 w-screen py-0 px-0 md:px-16 border-b border-gray-700/50">
      <div className="w-full flex flex-wrap px-0 md:px-12 items-center justify-between">
        {/* Logo And "Web Developer" */}
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

        {/* Wrapper div to handle hover */}
        <div
          className="relative p-4 debug"
          onMouseEnter={() => setNavHover(true)}
        >
          {/* Navigation Trigger */}
          {/* <div className="text-gray-300 font-light cursor-pointer">Navegação</div> */}
          <div className="flex items-center gap-2 text-gray-300 font-light cursor-pointer">
            <MenuIcon tClass="w-5 h-5 font-light text-gray-300" />
            <span className="hidden md:inline">Navegação</span>
          </div>

          {/* Dropdown Menu */}
          {navHover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseLeave={() => setNavHover(false)}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute left-0 top-full mt-2 md:w-28 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50"
            >
              <ul className="flex flex-col space-y-2 p-4">
              <li>
                  <a
                    href="#landing"
                    className="text-gray-300 font-light md:text-[14px]  cursor-pointer hover:text-primary-500"
                  >
                    Landing
                  </a>
                </li>
              <li>
                  <a
                    href="#bio"
                    className="text-gray-300 font-light md:text-[14px]  cursor-pointer hover:text-primary-500"
                  >
                    Bio
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 font-light md:text-[14px] cursor-pointer hover:text-primary-500"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#goals"
                    className="text-gray-300 font-light  md:text-[14px] cursor-pointer hover:text-primary-500"
                  >
                    Experiência
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>

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