import React, { useState } from "react";
import { useGetShowsForMenu } from "../../../_lib/@react-client-query/customer";
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
    { imagePath: glee_club_logo, label: "SLU Glee Club" },
    { imagePath: symphonic_band_logo, label: "SLU Symphonic Band" },
    { imagePath: concert_orchestra_logo, label: "SLU Concert Orchestra" },
    { imagePath: dance_troupe_logo, label: "SLU Dance Troupe" },
    { imagePath: cca_logo, label: "Major Production" },
  ];

  const { data, isLoading, error } = useGetShowsForMenu();
  const [performingGroup, setPerformingGroup] = useState<IconOptionProps | null>(null);
  const [showInput, setShowInput] = useState<string>("");

  const departmentsWithId = iconMenuOptions.map((department) => {
    const matchedId = data?.departments.find(
      (dbDepartment) => dbDepartment.name.toLowerCase() === department.label?.toLowerCase()
    );
    return { ...department, departmentId: matchedId?.departmentId || null };
  });

  const filterShows = data?.shows.filter((show) => {
    const showMatchedWithDepartment =
      !performingGroup ||
      performingGroup.label === "All Groups" ||
      show.departmentId === performingGroup.departmentId ||
      (performingGroup?.label === "Major Production" && show.showType === "majorProduction"); // Not Working

    const searchedShow = show.title.toLowerCase().includes(showInput.toLowerCase()); // Not Working

    return showMatchedWithDepartment;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong</p>;

  return (
    <ContentWrapper className="flex flex-col gap-5">
      <TextInput placeholder="Search a show" value={showInput} onChange={(e) => setShowInput(e.target.value)} />
      <IconMenu options={departmentsWithId} onSelect={setPerformingGroup} />
      <h1>Showing shows for {performingGroup?.label ?? "All Groups"}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
        {filterShows?.length === 0 ? (
          <div className="col-span-full text-center flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">0 Shows Found</h1>
            <h2 className="text-sm font-light">Looks like the theater's empty.</h2>
          </div>
        ) : (
          filterShows?.map((show) => (
            <ShowCard
              key={show.showId}
              imagePath={show.showCover}
              showTitle={show.title}
              showID={show.showId}
              departmentID={show.departmentId}
              showType={show.showType}
            />
          ))
        )}
      </div>
    </ContentWrapper>
  );
};

export default ShowMenu;
