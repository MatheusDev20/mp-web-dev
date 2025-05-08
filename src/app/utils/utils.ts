import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
export const getCvFileId = (lang: string) => {
  return lang === "pt"
    ? "1aAb3C2ZHv16JfennBWC3wlou4MU-HqEPpA2-LtAaeoA"
    : "1ZC9yKrpj_MY6j-pctKIlw6pOKmgtjqKBvNj0Lpk13G4";
};
