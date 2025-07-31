import React from "react";
import no_cover from "../../assets/images/no-show-cover.jpg";
import { Link } from "react-router-dom";

interface ShowCardProps {
  imagePath?: string;
  showTitle?: string;
  showID?: string;
}

const ShowCard = ({ imagePath = no_cover, showTitle = "Test", showID = "1" }: ShowCardProps) => {
  return (
    <Link to={`/customer/show/${showID}`}>
      <div className="flex flex-col gap-2">
        <img className="w-full max-w-[150px] h-[250px] rounded" src={imagePath} alt="" />
        {showTitle !== "" && <h1>{showTitle}</h1>}
      </div>
    </Link>
  );
};

export default ShowCard;
