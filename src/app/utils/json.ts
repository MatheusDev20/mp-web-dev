import socials from "@/app/config/socials.json";
import projects from "@/app/config/projects.json";
import { Project, Socials } from "../../@types";

export const loadSocialConfigs = (): Socials => {
  return socials as unknown as Socials;
};

export const loadProjects = (): Project[] => {
  return projects.data as unknown as Project[];
};
