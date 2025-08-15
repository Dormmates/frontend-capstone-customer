import React, { useState } from "react";
import merge from "../../utils/merge";

export interface IconOptionProps {
  imagePath: string;
  label: string;
  departmentId?: string | null;
  isClicked?: boolean;
  onClick?: () => void;
}

interface IconMenuProps {
  options: IconOptionProps[];
  className?: string;
  onSelect?: (selectedLabel: IconOptionProps) => void;
}

const iconOptionStyle =
  "max-w-[150px] h-[125px] flex flex-col items-center justify-center p-5 rounded-lg cursor-pointer hover:bg-lightPrimary transition";
const selectedIconStyle = "transition bg-lightPrimary shadow-inner";

export const IconOption = ({ imagePath, label, isClicked = false, onClick }: IconOptionProps) => {
  return (
    <div onClick={onClick} className={merge(iconOptionStyle, isClicked ? selectedIconStyle : "")}>
      <img className="w-full max-w-[60px] max-h-[60px]" src={imagePath} alt={label || "icon"} />
      <span className="text-[12px] mt-2 text-center">{label || ""}</span>
    </div>
  );
};

const iconMenuStyle = "grid gap-2 grid-cols-3 md:grid-rows-1 md:grid-cols-7 place-items-center";

export const IconMenu = ({ options, className, onSelect }: IconMenuProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(index);
    if (onSelect) onSelect(options[index] ?? "");
  };

  return (
    <div className={merge(iconMenuStyle, className)}>
      {options.map((item, index) => (
        <IconOption
          key={index}
          label={item.label}
          imagePath={item.imagePath}
          onClick={() => handleClick(index)}
          isClicked={index === openIndex}
        />
      ))}
    </div>
  );
};

export default IconMenu;
