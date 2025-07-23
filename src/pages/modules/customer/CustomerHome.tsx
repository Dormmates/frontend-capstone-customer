import React from "react";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import select_image from "../../../assets/images/customer-select-landing.png";
import choose_image from "../../../assets/images/customer-choose-landing.png";
import reserve_image from "../../../assets/images/customer-reserve-landing.png";
import cca_logo from "../../../assets/images/cca-logo.png";

const CustomerHome = () => {
  return (
    <ContentWrapper>
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-row justify-evenly items-center w-full bg-white p-20">
          <div className="flex flex-col gap-5 w-full max-w-[600px]">
            <h1 className="text-black text-5xl font-bold">Theatrical Performances by SLU CCA</h1>
            <span className="text-black text-xl font-extralight">
              View the upcoming shows of the SLU CCA and Reserve your seats now!
            </span>
            <Link to="/customer/menu">
              <Button>View Show Menu</Button>
            </Link>
          </div>
          <img src={cca_logo} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="self-center">
            <h1 className="text-3xl font-semibold self-center">Save your space. Reserve a Seat</h1>
          </div>
          <div className="flex flex-row gap-10 justify-evenly items-center">
            <div className="flex flex-col gap-2 w-full max-w-[300px]">
              <img className="w-full max-w-[300px] h-[250px]" src={choose_image} alt="Choose Show Image" />
              <h1 className="font-medium text-2xl text-center">Choose a show</h1>
              <p></p>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-[300px]">
              <img className="w-full max-w-[300px] h-[250px]" src={select_image} alt="Select Seat Image" />
              <h1 className="font-medium text-2xl text-center">Select your seat</h1>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-[300px]">
              <img className="w-full max-w-[300px] h-[250px]" src={reserve_image} alt="Confirm Reservation Image" />
              <h1 className="font-medium text-2xl text-center">Confirm your reservation</h1>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CustomerHome;
