import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/ui/BreadCrumb";
import { Outlet } from "react-router-dom";
import no_cover from "../assets/images/no-show-cover.jpg";
import GenreCard from "../components/ui/GenreCard";

const SelectedShowLayout = () => {
  const { showID } = useParams();
  const [displayGenre, setDisplayGenre] = useState(false);
  const sampleGenre: string[] = ["Fantasy", "Medival", "Action", "Comedy", "Comedy", "Tarsier"];

  const renderAllGenres = (genres: string[]) => {
    return genres.map((value, index) => <GenreCard key={index} genre={value} />);
  };

  const renderGenreToggle = () => {
    return (
      <div onClick={() => setDisplayGenre((prev) => !prev)} className=" px-2 py-1 cursor-pointer">
        <span className="text-black font-bold text-3xl">{displayGenre ? "-" : "+"}</span>
      </div>
    );
  };

  return (
    <>
      <div className="px-10 py-5 flex flex-col gap-5 items-center">
        <div className="self-start">
          <BreadCrumb backLink={""} items={[]} />
        </div>
        <img className="w-full max-w-[200px] h-[300px] rounded" src={no_cover} alt="" />
        <h1 className="font-bold">Show Title</h1>
        <div className="flex flex-wrap flex-row gap-1 items-center">
          {sampleGenre.length < 5 && renderAllGenres(sampleGenre)}
          {sampleGenre.length >= 5 && (
            <>
              {displayGenre
                ? renderAllGenres(sampleGenre)
                : sampleGenre.slice(0, 4).map((value, index) => <GenreCard key={index} genre={value} />)}
              {renderGenreToggle()}
            </>
          )}
        </div>
        <p className="text-md font-light self-start">Show Description</p>
        <Outlet />
      </div>
    </>
  );
};

export default SelectedShowLayout;
