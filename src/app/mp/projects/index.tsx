import { PROJECTS_ENABLE_FLAG } from "@/app/utils/constants";
import { loadProjects } from "@/app/utils/json";
import { useTranslations } from "next-intl";

import "react-multi-carousel/lib/styles.css";
import { ProjectsCard } from "./components";

export const Projects = () => {
  const t = useTranslations("Project");
  const projects = loadProjects();

  return (
    <div
      id="projects"
      className="min-h-[calc(100vh-92px)] flex flex-col px-3 md:gap-8 items-center md:p-12"
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
        <div className="flex md:mt-0 flex-col md:gap-12 w-full items-center">
          <header className="max-w-[50%] mb-8 md:mb-0 flex flex-col gap-2">
            <h2 className="text-white self-center font-semibold md:text-2xl">
              {t("title")}
            </h2>
          </header>
          <div className="md:grid md:grid-cols-3 md:gap-8 md:p-24 pt-4 md:pt-16">
            {projects.map((project) => (
              <div
                className="flex flex-col items-center justify-center"
                key={project.title}
              >
                <ProjectsCard
                  img={project.img}
                  title={project.title}
                  smallDescription={project.smallDescription}
                />
              </div>
            ))}
          </div>
          {/* <div className="min-w-full min-h-screen justify-normal md:justify-center flex-col md:flex-row flex gap-8 md:gap-12 md:p-24 pt-4 md:pt-16">
            <Carousel className="max-w-[70%]">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem className="h-full" key={project.title}>
                    <ProjectsCard
                      img={project.img}
                      title={project.title}
                      smallDescription={project.smallDescription}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                size="lg"
                className="bg-transparent text-white border-none"
              />
              <CarouselNext className="bg-transparent border-none text-white" />
            </Carousel>
          </div> */}
        </div>
      )}
      {/* <NextSection
        next="#bio"
        className="bottom-0 md:bottom-[0px] flex justify-center"
      /> */}
    </div>
  );
};
