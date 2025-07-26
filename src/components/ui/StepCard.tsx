import React from "react";

export interface StepCardProps {
  imagePath: string;
  title: string;
}

export const StepCard = ({ imagePath, title }: StepCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[300px]">
      <img className="w-full max-w-[300px] h-[250px]" src={imagePath} alt="Choose Show Image" />
      <h1 className="font-medium text-2xl text-center">{title}</h1>
    </div>
  );
};
