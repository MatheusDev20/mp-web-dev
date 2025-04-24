type Props = {
  title: string;
  img: string;
  smallDescription: string;
  /** optional: focal point, e.g. "top", "center 30%", "50% 75%" */
  focalPoint?: string;
};

export const ProjectsCard = ({
  img,
  title,
  smallDescription,
  focalPoint = "center",
}: Props) => {
  return (
    <div className="flex flex-col mt-8 bg-gray-900 rounded-xl w-[70%] md:w-[100%] md:min-h-[420px] overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      {/* fixed aspect ratio (16:9 for example) */}
      <div className="relative w-full h-[70%] aspect-video">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full"
          style={{ objectPosition: focalPoint }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* text */}
      <div className="flex flex-col flex-1 gap-2 p-8">
        <h3 className="text-white text-xl font-semibold line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-gray-400 text-[16px] flex-1 line-clamp-3">
          {smallDescription}
        </p>
      </div>
    </div>
  );
};
