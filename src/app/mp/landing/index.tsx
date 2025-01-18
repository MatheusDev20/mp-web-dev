import Typewriter from "@/app/components/fancy/typewritter"
import { NextSection } from "@/app/components/next-section"

export const Landing = () => {
  return (
    <div className="flex min-h-[calc(100vh-92px)] justify-center" id="landing">
      <main className="flex absolute flex-col gap-4 p-12 top-[35%]" >
        <span className="text-[16px] font-light text-gray-300 place-self-center">
          Olá, me chamo Matheus. Engenheiro de Software Pleno
        </span>
        <Typewriter text="Desenvolvedor FullStack Python e Javascript" className=" text-white text-lg font-bold md:text-3xl" />
        <div className="place-self-center mt-6 gap-6 flex">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-[#171717] font-bold rounded-md text-sm ring-offset-background transition-colors duration-200 ease-in-out 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white border border-gray-300 h-10 px-4 py-2 
          hover:bg-gray-100 hover:border-gray-400 hover:text-black">
            Download CV
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-white font-bold rounded-md text-sm ring-offset-background transition-colors duration-200 ease-in-out 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#171717] border border-gray-700 h-10 px-4 py-2 
          hover:bg-gray-800 hover:border-gray-600 hover:text-white">
            Get in Touch
          </button>
        </div>
      </main>
      <NextSection next="#bio" className="absolute bottom-[92px] flex justify-center" />
    </div>
  )
}