import { PROJECTS_ENABLE_FLAG } from "@/app/utils/constants";
import { loadProjects } from "@/app/utils/json";
import { useTranslations } from "next-intl";
import { ProjectsCard } from "./components";

export const Projects = () => {
  const t = useTranslations("Project");
  const projects = loadProjects();

  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-92px)] flex flex-col md:gap-8 items-center md:p-12"
    >
      {!PROJECTS_ENABLE_FLAG ? (
        <div className="text-white text-center">
          <div className="flex items-center justify-center">
            <h2 className="text-gray-300 m-auto">
              Section under development 🚧{" "}
            </h2>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <header className="max-w-[50%] flex flex-col gap-2">
            <h2 className="text-white self-center font-semibold md:text-2xl">
              {t("title")}
            </h2>
            {/* <p className="text-gray-300">{t("description")}</p> */}
          </header>
          <div className="min-w-full grid md:grid-cols-3 grid-cols-2 p-4">
            {projects.map((project, index) => {
              return (
                <ProjectsCard
                  key={index}
                  img={project.img}
                  title={project.title}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
