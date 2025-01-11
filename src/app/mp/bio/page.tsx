/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import VerticalCutReveal from "@/app/components/fancy/vertical-reveal";
import { ChevronUpIcon } from "@/app/components/icons/chevron-up.icon";
import { ChevronDownIcon } from "@/app/components/icons/chevron.icon";
import { loadBioConfigs } from "@/app/utils/json";
import { motion } from "framer-motion";
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
    <div className="border-b-2 border-primary-400" onClick={() => setAccordionOpen(id)}>
      <button
        className="w-full flex justify-between items-center py-4 px-0 text-left text-gray-300 text-lg font-semibold focus:outline-none hover:text-primary-500"
        onClick={() => setAccordionOpen(id)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-[300px]" : "max-h-0"
          }`}
      >
        <div className="px-6 pb-4 text-gray-400 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Bio() {
  const [showContent, setShowContent] = useState(false);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);
  const { begining } = loadBioConfigs();

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
    <div className="md:py-6 2xl:p-6 px-12 flex flex-col md:gap-16 min-w-full mt-4 h-full">
      <div className="flex flex-col">
        <VerticalCutReveal
          onComplete={() => setShowContent(true)}
          staggerDuration={0.1}
          containerClassName="self-center text-gray-300 text-md md:text-[24px] font-light"
        >
          Olá 👋 seja bem vindo!
        </VerticalCutReveal>
        {/* <VerticalCutReveal
          staggerDuration={0.1}
          containerClassName="self-center text-gray-300 text-md md:text-[16px] font-light"
        >
          Aqui você encontra informações sobre minha carreira, experiência de trabalho e objetivos futuros.
        </VerticalCutReveal> */}
      </div>
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[70%] flex flex-col gap-8 self-center"
        >
          <AccordionItem
            title="Início de Carreira"
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
              {begining}
            </VerticalCutReveal>
          </AccordionItem>
          <AccordionItem
            title="Expereiência Profissional"
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
              {begining}
            </VerticalCutReveal>
          </AccordionItem>
          <AccordionItem
            title="Interesses"
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
              {begining}
            </VerticalCutReveal>
          </AccordionItem>
          {/* "Tecnologias e Stack" */}
          <AccordionItem
            title="Tecnologias e Stack"
            id={4}
            isOpen={openAccordionId === 4}
            setAccordionOpen={toggleAccordion}
          >
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.01}
              staggerFrom="first"
              reverse={true}
              transition={transition}
            >
              {begining}
            </VerticalCutReveal>
          </AccordionItem>
        </motion.div>
      )}
      {/* <div className="min-h-[100px] flex justify-center items-center text-gray-300 text-sm">
        More items
      </div> */}
    </div>
  );
}
