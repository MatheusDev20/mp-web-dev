 
import socials from "@/app/config/socials.json"
import bio from "@/app/config/bio.json"
import { Socials, Bio } from "../../@types"

export const loadSocialConfigs = (): Socials => {
  return socials as unknown as Socials
}

export const loadBioConfigs = (): Bio => {
  return bio as unknown as Bio
}