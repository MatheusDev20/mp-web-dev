/* eslint-disable @typescript-eslint/no-explicit-any */
import socials from "@/app/config/socials.json"
import bio from "@/app/config/bio.json"
import { Socials } from "../@types"

export const loadSocialConfigs = (): Socials => {
  return socials as unknown as Socials
}

export const loadBioConfigs = (): any => {
  return bio as unknown as any
}