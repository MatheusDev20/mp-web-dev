import { useTranslations } from "next-intl";

/* eslint-disable @next/next/no-img-element */
type Props = {
  title: string;
  img: string;
  smallDescription: string;
  ghLink: string;
  focalPoint?: string;
};

export const ProjectsCard = ({
  img,
  title,
  smallDescription,
  focalPoint = "center",
  ghLink,
}: Props) => {
  const t = useTranslations("Project");
  return (
    <div className="flex flex-col mt-8 bg-gray-900 rounded-xl w-[70%] md:w-[100%] shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="relative w-full min-h-[70%] aspect-video">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full"
          style={{ objectPosition: focalPoint }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* text */}
      <div className="flex flex-col bg-gray-900 flex-1 gap-2 p-6">
        <h3 className="text-white text-xl font-semibold line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-gray-400 text-[16px] flex-1 line-clamp-3">
          {smallDescription}
        </p>
        <a
          target="_blank"
          href={ghLink}
          className="text-blue-500 mt-3 hover:text-blue-700"
        >
          {t("githubCheck")}
        </a>
      </div>
    </div>
  );
};
