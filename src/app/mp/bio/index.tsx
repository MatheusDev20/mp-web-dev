/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import VerticalCutReveal from "@/app/components/fancy/vertical-reveal";
import { ChevronUpIcon } from "@/app/components/icons/chevron-up.icon";
import { ChevronDownIcon } from "@/app/components/icons/chevron.icon";
import Timeline from "@/app/components/timeline";
import { loadExperience } from "@/app/utils/json";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode, useState } from "react";

type AccordionItemProps = {
  title: ReactNode;
  id: number;
  isOpen: boolean;
  setAccordionOpen: (id: number) => void;
  children: React.ReactNode;
};

export const AccordionSections = [
  {
    id: 1,
    title: "aboutMe",
    content: "aboutMeSummary",
    icon: <User className="w-8 h-8 text-green-400" />,
  },
  {
    id: 2,
    title: "workExperience",
    content: "workExperienceSummary",
    icon: <BriefcaseBusiness className="w-8 h-8 text-red-400" />,
  },
  {
    id: 3,
    title: "skills",
    content: "skills",
    icon: <Code className="w-8 h-8 text-blue-600" />,
  },
];

const AccordionItem = ({
  title,
  id,
  isOpen,
  setAccordionOpen,
  children,
}: AccordionItemProps) => {
  return (
    <div className="md:px-0 px-4" onClick={() => setAccordionOpen(id)}>
      <button
        className="transition ease-out delay-75 w-full flex hover:font-light justify-between items-center py-4 px-0 text-left text-gray-300 text-lg font-semibold focus:outline-none hover:text-primary-700"
        onClick={() => setAccordionOpen(id)}
      >
        <span className="md:text-lg text-[12px]">{title}</span>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      <div
        className={`md:overflow-hidden overflow-y-auto transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <main>
          <span
            style={{ lineHeight: "1.6rem" }}
            className="md:px-6 pb-2 px-0 md:pb-4 text-gray-400 sm:text-sm md:text-[16px]"
          >
            {children}
          </span>
        </main>
      </div>
    </div>
  );
};

export default function Bio() {
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const t = useTranslations("Bio");
  const experiences = loadExperience();
  const toggleAccordion = (id: number) => {
    console.log("Toggling accordion with id:", id);
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const transition = {
    type: "spring",
    stiffness: 250,
    damping: 30,
    delay: 0,
  } as any;

  return (
    <div
      id="bio"
      className="min-h-[calc(100vh-92px)] 2xl:py-12 md:py-0 py-24 relative px-12 flex flex-col gap-12 md:gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:max-w-[80%] flex flex-col p-6 gap-4 md:gap-16 self-center"
      >
        {AccordionSections.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-500 transition-colors duration-500 ease-in-out bg-gray-800 shadow-md md:p-6 2xl:p-6"
          >
            <AccordionItem
              title={
                <span className="flex items-center gap-6">
                  {item.icon} {t(item.title)}
                </span>
              }
              id={item.id}
              isOpen={openAccordionId === item.id}
              setAccordionOpen={toggleAccordion}
            >
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.01}
                staggerFrom="first"
                reverse={true}
                transition={transition}
              >
                {t(item.content)}
              </VerticalCutReveal>
              {item.id === 2 && <Timeline experiences={experiences} />}
            </AccordionItem>
          </div>
        ))}
      </motion.div>
      {!openAccordionId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="absolute bottom-[92px] flex self-center"
        ></motion.div>
      )}
    </div>
  );
}
