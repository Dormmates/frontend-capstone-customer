import React from "react";

interface GenreCardProps {
  genre: string;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return <div className="bg-zinc-100 border border-zinc-400 py-1 px-8 rounded-lg text-xs">{genre}</div>;
};

export default GenreCard;
