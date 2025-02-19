import { ArrowLongRight } from "@/app/components/icons/arrow-long-r";

type Props = {
  title: string;
  img: string;
};

export const ProjectsCard = ({ img, title }: Props) => {
  return (
    <div className="border transition-colors duration-500 ease-in-out cursor-pointer hover:bg-gray-800 flex flex-col border-gray-600 sm:p-2">
      <header
        className="bg-cover bg-no-repeat sm:h-[200px] min-h-[40%] w-full cursor-pointer"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      <footer className="flex md:flex-1 justify-center p-2 sm:p-1">
        <div className="flex items-center justify-between mt-3 flex-col text-center">
          <span className="font-semibold mt-2 text-gray-300 text-base sm:text-sm md:text-lg">
            {title}
          </span>
          <span className="pt-8 sm:mt-2 flex gap-2 sm:gap-1 mt-7 hover:text-primary-700 cursor-pointer transition-all delay-100 font-semibold items-center text-sm">
            Saber mais <ArrowLongRight tClass="h-5 w-4 sm:h-4 sm:w-3" />
          </span>
        </div>
      </footer>
    </div>
  );
};
