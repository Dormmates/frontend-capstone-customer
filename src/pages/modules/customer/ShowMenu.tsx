import React, { useState } from "react";
import { useGetShowsForMenu } from "../../../_lib/@react-client-query/customer";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import { type IconOptionProps, IconMenu } from "../../../components/ui/IconMenu";
import cca_logo from "../../../assets/images/cca-logo.png";
import select_all from "../../../assets/images/select-all.png";
// import tanghalang_slu_logo from "../../../assets/images/tanghalang-slu-logo.png";
// import glee_club_logo from "../../../assets/images/glee-club-logo.png";
// import dance_troupe_logo from "../../../assets/images/dance-troupe-logo.png";
// import symphonic_band_logo from "../../../assets/images/symphonic-band-logo.png";
// import concert_orchestra_logo from "../../../assets/images/concert-orchestra-logo.png";
import ShowCard from "../../../components/ui/ShowCard";
import TextInput from "../../../components/ui/TextInput";

const ShowMenu = () => {
  const { data, isLoading, error } = useGetShowsForMenu();
  const [performingGroup, setPerformingGroup] = useState<IconOptionProps | null>(null);
  const [showInput, setShowInput] = useState<string>("");

  const allocateMenuOptions = (): IconOptionProps[] => {
    const majorProduction: IconOptionProps = { imagePath: cca_logo, label: "Major Production" };
    const allShows: IconOptionProps = { imagePath: select_all, label: "All Groups" };
    const departments: IconOptionProps[] =
      data?.departments.map((department) => ({
        label: department.name,
        imagePath: department.logoUrl,
        departmentId: department.departmentId,
      })) ?? [];

    return [allShows, ...departments, majorProduction];
  };

  const filterShows = data?.shows.filter((show) => {
    const showMatchedWithDepartment =
      !performingGroup ||
      performingGroup.label === "All Groups" ||
      show.departmentId === performingGroup.departmentId ||
      (performingGroup?.label === "Major Production" && show.showType === "majorProduction");

    const searchedShow = show.title.toLowerCase().includes(showInput.toLowerCase().trim());

    return showMatchedWithDepartment && searchedShow;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something is wrong</p>;

  return (
    <ContentWrapper className="flex flex-col gap-5">
      <TextInput placeholder="Search a show" value={showInput} onChange={(e) => setShowInput(e.target.value)} />
      <IconMenu options={allocateMenuOptions()} onSelect={setPerformingGroup} />
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
