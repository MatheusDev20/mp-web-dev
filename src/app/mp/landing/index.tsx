import Typewriter from "@/app/components/fancy/typewritter";
import { NextSection } from "@/app/components/next-section";
import { getCvFileId } from "@/app/utils/utils";
import { useTranslations } from "next-intl";

export const Landing = () => {
  const t = useTranslations("Landing");
  const fileID = getCvFileId(t("lang"));

  return (
    <div className="flex min-h-[calc(100vh-92px)] justify-center" id="landing">
      <main className="flex absolute flex-col gap-4 px-4 md:p-12 top-[25%] md:top-[35%]">
        <span className="text-[12px] md:text-[16px] font-light text-gray-300 place-self-center">
          {t("mainDescription")}
        </span>
        <Typewriter
          text={t("role")}
          className="text-white text-sm font-bold md:text-3xl"
        />
        <div className="place-self-center mt-6 gap-6 flex">
          <a
            href={`https://drive.google.com/uc?export=download&id=${fileID}`}
            download="matheus_cv.pdf"
          >
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-[#171717] font-bold rounded-md text-sm ring-offset-background transition-colors duration-200 ease-in-out 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white border border-gray-300 h-10 px-4 py-2 
    hover:bg-gray-100 hover:border-gray-400 hover:text-black"
            >
              Download CV
            </button>
          </a>

          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-white font-bold rounded-md text-sm ring-offset-background transition-colors duration-200 ease-in-out 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#171717] border border-gray-700 h-10 px-4 py-2 
          hover:bg-gray-800 hover:border-gray-600 hover:text-white"
          >
            {t("getInTouch")}
          </button>
        </div>
      </main>
      <NextSection
        next="#bio"
        className="absolute bottom-60 md:bottom-[92px] flex justify-center"
      />
    </div>
  );
};
