/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Typewriter from "@/app/components/fancy/typewritter";
// import Me from "../../../../public/me.png"
import VerticalCutReveal from "@/app/components/fancy/vertical-reveal";
import { ChevronUpIcon } from "@/app/components/icons/chevron-up.icon";
import { ChevronDownIcon } from "@/app/components/icons/chevron.icon";
import { NextSection } from "@/app/components/next-section";
import { loadBioConfigs } from "@/app/utils/json";
import { motion } from "framer-motion";
// import Image from "next/image";
import { useState } from "react";

type AccordionItemProps = {
  title: string;
  id: number;
  isOpen: boolean;
  setAccordionOpen: (id: number) => void;
  children: React.ReactNode;
};

const AccordionItem = ({ title, id, isOpen, setAccordionOpen, children }: AccordionItemProps) => {
  return (
    <div className="border-b border-primary-700" onClick={() => setAccordionOpen(id)}>
      <button
        className="transition ease-out delay-75 w-full flex hover:font-light justify-between items-center py-4 px-0 text-left text-gray-300 text-lg font-semibold focus:outline-none hover:text-primary-700"
        onClick={() => setAccordionOpen(id)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-[300px]" : "max-h-0"
          }`}
      >
        <main>
          <span style={{ lineHeight: "1.6rem" }} className="px-6 pb-4 text-gray-400 sm:text-sm md:text-[16px]">{children}</span>
        </main>
      </div>
    </div>
  );
};

export default function Bio() {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);
  const { professionalSummary, howIgotHere } = loadBioConfigs();

  const toggleAccordion = (id: number) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const transition = {
    type: "spring",
    stiffness: 250,
    damping: 30,
    delay: 0,
  } as any
  return (
    <div id="bio" className="min-h-screen md:py-24 2xl:p-12 relative px-12 flex flex-col md:gap-8">
      <div className="flex flex-col text-center mb-2">
      <Typewriter text="Um pouco sobre mim e minha carreira" showCursor={false} className=" text-white text-lg font-bold md:text-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[80%] flex flex-col gap-4 md:gap-16 self-center"
      >
        <AccordionItem
          title="Como cheguei aqui?"
          id={1}
          isOpen={openAccordionId === 1}
          setAccordionOpen={toggleAccordion}
        >
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.01}
            staggerFrom="first"
            reverse={true}
            transition={transition}
          >
            {howIgotHere}
          </VerticalCutReveal>
        </AccordionItem>
        <AccordionItem
          title="Caminhada profissional"
          id={2}
          isOpen={openAccordionId === 2}
          setAccordionOpen={toggleAccordion}
        >
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.01}
            staggerFrom="first"
            reverse={true}
            transition={transition}
          >
            {professionalSummary}
          </VerticalCutReveal>
        </AccordionItem>

        <AccordionItem
          title="Hobbies & Interesses"
          id={3}
          isOpen={openAccordionId === 3}
          setAccordionOpen={toggleAccordion}
        >
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.01}
            staggerFrom="first"
            reverse={true}
            transition={transition}
          >
            {professionalSummary}
          </VerticalCutReveal>
        </AccordionItem>

      </motion.div>
      <NextSection next="#projects" className="2xl:bottom-52 md:bottom-44 bottom-12 flex self-center mt-8" />
    </div>
  );
}
