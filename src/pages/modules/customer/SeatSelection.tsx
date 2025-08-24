import React from "react";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import Button from "../../../components/ui/Button";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Use showScheduleID to fetch seats for show schedule
const SeatSelection = () => {
  const { showID, showScheduleID } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 w-full">
      <span>Put Seatmap Here</span>
      <div className="flex flex-row justify-center items-end md:justify-end gap-5">
        <div className="flex flex-col w-full max-w-[200px] gap-1">
          <span className="text-sm text-darkGrey">Previous Step: Select Schedule</span>
          <Button onClick={() => navigate(-1)} className="bg-slate-300">
            Previous
          </Button>
        </div>
        <div className="flex flex-col w-full max-w-[200px] gap-1">
          <span className="text-sm text-darkGrey">Next Step: Input Details</span>
          <Link to={`/customer/show/${showID}/schedule/${showScheduleID}/reservation`}>
            <Button className="w-full">Confrim Seats</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
