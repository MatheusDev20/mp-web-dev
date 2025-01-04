/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX } from "react";
import { ChevronDownIcon } from "../icons/chevron.icon";
import { ChevronUpIcon } from "../icons/chevron-up.icon";
import Image from "next/image";

interface Options {
  imgLink?: string;
  name: string;
}
interface Props {
  options: Options[];
  value: any;
  onChange: (selected: Options) => void;
}

export const CountrySelect = ({
  options,
  value,
  onChange,
}: Props): JSX.Element => {
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const flag = options.find((option) => option.name === value) as Options;
  const optionsButSelected = options.filter((option) => option.name !== value);

  return (
    <div className="relative md:w-32">
      <div
        className="flex items-center justify-between bg-gray-800 p-2 rounded-lg border border-gray-600 cursor-pointer hover:border-primary-700"
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        {flag && (
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              width={24}
              height={24}
              alt={flag.name}
              src={flag.imgLink || ""}
            />
            <span className="text-gray-300">{flag.name}</span>
          </div>
        )}
        <button className="text-primary-400 hover:text-primary-200">
          {openDropDown ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>

      {optionsButSelected.length > 0 && openDropDown && (
        <div className="absolute bg-gray-900 border border-gray-700 rounded-lg shadow-lg mt-2 w-full z-50 max-h-60 overflow-y-auto">
          <div className="flex flex-col">
            {optionsButSelected.map((option, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 hover:bg-primary-700 hover:text-white cursor-pointer transition-colors"
                onClick={() => {
                  onChange(option);
                  setOpenDropDown(false);
                }}
              >
                {option.imgLink && (
                  <Image
                    className="rounded-full"
                    width={24}
                    height={24}
                    alt={option.name}
                    src={option.imgLink || ""}
                  />
                )}
                <span>{option.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
