import { motion } from "motion/react"
import { Socials } from "../../icons/socials";
import { LinkedinIcon } from "../../icons/linkedin";
import { GithubIcon } from "../../icons/github";
import { loadSocialConfigs } from "@/app/utils/json";
import { useTranslations } from "next-intl";

type Props = {
  navHover: { socials: boolean, menu: boolean }
  setNavHover: (hoverOptions: { socials: boolean, menu: boolean }) => void
}

export const SocialNav = ({ navHover, setNavHover }: Props) => {
  const { linkedin, github } = loadSocialConfigs()
  const t = useTranslations('Header');

  return (
    <div
      className="relative p-4"
      onMouseEnter={() => setNavHover({ ...navHover, socials: true, menu: false })}
    >
      {/* Navigation Trigger */}
      {/* <div className="text-gray-300 font-light cursor-pointer">Navegação</div> */}
      <div className="flex items-center gap-2 text-gray-300 font-light cursor-pointer">
        <Socials tClass="w-5 h-5 font-light text-gray-300" />
        <span className="hidden md:inline">{t("socials")}</span>
      </div>

      {/* Dropdown Menu */}
      {navHover.socials && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onMouseLeave={() => setNavHover({ ...navHover, socials: false })}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute left-0 top-full mt-2 md:w-28 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50"
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                target="_blank"
                href={linkedin}
                className="text-gray-300 flex font-light gap-2 md:text-[14px] items-center cursor-pointer hover:text-primary-500"
              >
                <LinkedinIcon tClass="text-white cursor-pointer w-4 h-4 md:w-8 md:h-8" />
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={github}
                className="flex text-gray-300 font-light md:text-[14px] gap-2 cursor-pointer hover:text-primary-500"
              >
                <GithubIcon tClass="text-white cursor-pointer w-4 h-4 md:w-5 md:h-5" />
                Github
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  )

}