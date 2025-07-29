import React from "react";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import select_image from "../../../assets/images/customer-select-landing.png";
import choose_image from "../../../assets/images/customer-choose-landing.png";
import reserve_image from "../../../assets/images/customer-reserve-landing.png";
import cover_image from "../../../assets/images/customer-cover-landing.png";
import tanghalang_slu_logo from "../../../assets/images/tanghalang-slu-logo.png";
import glee_club_logo from "../../../assets/images/glee-club-logo.png";
import dance_troupe_logo from "../../../assets/images/dance-troupe-logo.png";
import symphonic_band_logo from "../../../assets/images/symphonic-band-logo.png";
import concert_orchestra_logo from "../../../assets/images/concert-orchestra-logo.png";
import { type StepCardProps, StepCard } from "../../../components/ui/StepCard";

const CustomerHome = () => {
  const stepCardDetails: StepCardProps[] = [
    { imagePath: choose_image, title: "Choose a show" },
    { imagePath: select_image, title: "Select your seat" },
    { imagePath: reserve_image, title: "Confirm your reservation" },
  ];

  return (
    <>
      <img className="hidden sm:block" src={cover_image} alt="" />
      <ContentWrapper>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col-reverse md:flex-row md:justify-evenly items-center w-full bg-white p-5 pt-10 md:p-20 ">
            <div className="flex flex-col gap-2 md:gap-5 w-full md:max-w-[600px]">
              <h1 className="text-black text-3xl md:text-5xl font-bold">
                Theatrical Performances <br /> by SLU CCA
              </h1>
              <span className="text-black text-lg md:text-xl font-extralight">
                View the upcoming shows of the SLU CCA and Reserve your seats now!
              </span>
              <Link to="/customer/menu">
                <Button>View Show Menu</Button>
              </Link>
            </div>
            <div className="grid grid-cols-6 grid-rows-2 place-items-center">
              <img className="max-w-[100px] col-start-1 col-span-2" src={glee_club_logo} alt="" />
              <img className="max-h-[100px] col-start-3 col-span-2" src={symphonic_band_logo} alt="" />
              <img className="max-w-[100px] col-start-5 col-span-2" src={tanghalang_slu_logo} alt="" />
              <img className="max-w-[100px] row-start-2 col-start-2 col-span-2" src={dance_troupe_logo} alt="" />
              <img className="max-w-[100px] row-start-2 col-start-4 col-span-2" src={concert_orchestra_logo} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="self-center">
              <h1 className="text-xl md:text-3xl font-semibold self-center">Save your space. Reserve a Seat</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-evenly items-center">
              {stepCardDetails.map((item, index) => (
                <StepCard key={index} imagePath={item.imagePath} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default CustomerHome;
