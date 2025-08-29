import { useState } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import BreadCrumb from "../components/ui/BreadCrumb";
import no_cover from "../assets/images/no-show-cover.jpg";
import GenreCard from "../components/ui/GenreCard";
import { useGetSelectedShowDetails } from "../_lib/@react-client-query/customer";
import { PageWrapper } from "../components/layout/Wrapper";
import { ShowDataContext } from "../context/ShowDataContext";

const SelectedShowLayout = () => {
  const { showID } = useParams();
  const [displayGenre, setDisplayGenre] = useState(false);
  const { data, isLoading, error } = useGetSelectedShowDetails(showID as string);
  const navigate = useNavigate();

  const renderAllGenres = (genres: string[]) => {
    return genres.map((value, index) => <GenreCard key={index} genre={value} />);
  };

  const renderGenreToggle = () => {
    return (
      <div onClick={() => setDisplayGenre((prev) => !prev)} className="cursor-pointer ">
        <GenreCard genre={displayGenre ? "-" : "+"} />
      </div>
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (!isLoading && !data) return navigate("/not_found");
  if (error) return <p>Something is wrong</p>;

  return (
    <>
      <PageWrapper className="px-3 w-full min-w-[350px] md:max-w-[1000px] flex flex-col items-center">
        <div className="py-3 md:py-5 md:self-start">
          <BreadCrumb
            backLink={"/customer/menu"}
            items={[
              { name: "Menu", path: "/customer/menu" },
              { name: data?.title, path: "" },
            ]}
          />
        </div>
        <div className="py-3 w-full md:max-w-[800px]">
          <div className="flex flex-col gap-5 md:flex-row items-center md:justify-start md:gap-10">
            <img className="w-full max-w-[250px] aspect-[2/3] rounded" src={data?.showCover || no_cover} alt="" />
            <div className="flex flex-col gap-2 md:self-start md:max-w-[500px]">
              <h1 className="font-bold text-xl text-center md:text-start md:text-2xl text-amber-900">{data?.title}</h1>
              <div className="flex flex-wrap flex-row gap-1 ">
                {(data?.genreNames?.length ?? 0) < 5 && renderAllGenres(data?.genreNames ?? [])}

                {(data?.genreNames?.length ?? 0) >= 5 && (
                  <>
                    {displayGenre
                      ? renderAllGenres(data?.genreNames ?? [])
                      : (data?.genreNames ?? [])
                          .slice(0, 4)
                          .map((value, index) => <GenreCard key={index} genre={value} />)}
                    {renderGenreToggle()}
                  </>
                )}
              </div>
              <p className="text-md font-light">{data?.description}</p>
            </div>
          </div>
        </div>
        <ShowDataContext.Provider value={data}>
          <div className="w-full py-3">
            <Outlet />
          </div>
        </ShowDataContext.Provider>
      </PageWrapper>
    </>
  );
};

export default SelectedShowLayout;
