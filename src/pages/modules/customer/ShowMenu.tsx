import React, { useState } from "react";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import { type IconOptionProps, IconMenu } from "../../../components/ui/IconMenu";
import cca_logo from "../../../assets/images/cca-logo.png";
import tanghalang_slu_logo from "../../../assets/images/tanghalang-slu-logo.png";
import glee_club_logo from "../../../assets/images/glee-club-logo.png";
import dance_troupe_logo from "../../../assets/images/dance-troupe-logo.png";
import symphonic_band_logo from "../../../assets/images/symphonic-band-logo.png";
import concert_orchestra_logo from "../../../assets/images/concert-orchestra-logo.png";
import select_all from "../../../assets/images/select-all.png";
import ShowCard from "../../../components/ui/ShowCard";
import TextInput from "../../../components/ui/TextInput";

const ShowMenu = () => {
  const iconMenuOptions: IconOptionProps[] = [
    { imagePath: select_all, label: "All Groups" },
    { imagePath: tanghalang_slu_logo, label: "Tanghalang SLU" },
    { imagePath: glee_club_logo, label: "Glee Club" },
    { imagePath: symphonic_band_logo, label: "Symphonic Band" },
    { imagePath: concert_orchestra_logo, label: "Concert Orchestra" },
    { imagePath: dance_troupe_logo, label: "Dance Troupe" },
    { imagePath: cca_logo, label: "Major Production" },
  ];

  const [performingGroup, setPerformingGroup] = useState<string | null>(null);

  return (
    <ContentWrapper className="flex flex-col gap-5">
      <TextInput placeholder="Search a show" />
      <IconMenu options={iconMenuOptions} onSelect={setPerformingGroup} />
      <h1>Showing shows for {performingGroup ? performingGroup : "All Groups"}</h1>
      <div className="grid grid-flow-col place-items-center">
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
        <ShowCard />
      </div>
    </ContentWrapper>
  );
};

export default ShowMenu;
