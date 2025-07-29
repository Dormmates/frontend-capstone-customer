import React from "react";

interface GenreCardProps {
  genre: string;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return <div className="bg-zinc-100 border border-zinc-400 py-2 px-4 rounded text-sm">{genre}</div>;
};

export default GenreCard;
