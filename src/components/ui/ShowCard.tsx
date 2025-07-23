import React from "react";
import no_cover from "../../assets/images/no-show-cover.jpg";

interface ShowCardProps {
  imagePath?: string;
  showTitle?: string;
}

const ShowCard = ({ imagePath = no_cover, showTitle = "Test" }: ShowCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <img className="w-full max-w-[150px] h-[250px]" src={imagePath} alt="" />
      {showTitle !== "" && <h1>{showTitle}</h1>}
    </div>
  );
};

export default ShowCard;
