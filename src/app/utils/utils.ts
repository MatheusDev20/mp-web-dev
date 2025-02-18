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
    ? "1-YqHaKvr4e8TAt8jJmcj3Pk-0hHPfdYB"
    : "1eiOWSPWiVYZd7C_sHqejo5P_1ZkF0_92";
};
