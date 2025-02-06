import socials from "@/app/config/socials.json";
import { Socials } from "../../@types";

export const loadSocialConfigs = (): Socials => {
  return socials as unknown as Socials;
};
