// import { ArrowLongRight } from "@/app/components/icons/arrow-long-r";

type Props = {
  title: string;
  img: string;
  smallDescription: string;
};

export const ProjectsCard = ({ img, title, smallDescription }: Props) => {
  return (
    <div className="border transition-colors min-h-full md:min-h-[520px] p-2 md:p-0 duration-500 ease-in-out w-full cursor-pointer hover:bg-gray-800 flex flex-col border-gray-600">
      <header
        className="bg-cover bg-no-repeat min-h-[120px] sm:h-[400px] w-full cursor-pointer"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      <footer className="flex md:flex-1 justify-center p-2 sm:p-1">
        <div className="flex items-center justify-between mt-3 flex-col text-center">
          <span className="font-semibold mt-2 text-white text-base sm:text-sm md:text-lg">
            {title}
          </span>
          <span className="pt-4 sm:mt-2 flex gap-2 sm:gap-1 mt-7 mb-4 text-gray-300 hover:text-primary-700 cursor-pointer transition-all delay-100 font-semibold items-center text-sm">
            {smallDescription}
            {/* Saber mais <ArrowLongRight tClass="h-5 w-4 sm:h-4 sm:w-3" /> */}
          </span>
        </div>
      </footer>
    </div>
  );
};
