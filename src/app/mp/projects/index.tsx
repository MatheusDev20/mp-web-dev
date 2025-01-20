import { useTranslations } from "next-intl"

export const Projects = () => {

  const t = useTranslations("Project")

  return (
    <div id="projects" className="min-h-[calc(100vh-92px)] flex flex-col debug md:gap-8 items-center md:p-4">
      <header className="max-w-[50%] flex flex-col gap-2">
        <h2 className="text-white md:text-2xl">{t("title")}</h2>
        <p className="text-gray-300">{t("description")}</p>
      </header>
      <div className="min-w-full grid grid-cols-2 p-4 flex-grow">
        <div className="debug min-h-[300px]">
          Projeto
        </div>
        <div className="debug min-h-[300px]">
          Projeto
        </div>
        <div className="debug min-h-[300px]">
          Projeto
        </div>
        <div className="debug min-h-[300px]">
          Projeto
        </div>
        <div className="debug min-h-[300px]">
          Projeto
        </div>
      </div>
    </div>
  )
}