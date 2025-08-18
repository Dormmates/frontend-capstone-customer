import React from "react";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import { useParams } from "react-router-dom";

const SeatSelection = () => {
  const { showScheduleID } = useParams();
  return (
    <div className="flex flex-col items-center gap-5">
      <div>{showScheduleID}</div>
      <span>October 14 2025 | 3:04 AM</span>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-2">
          <span className="bg-green px-4 py-2 rounded-full">1</span>
          <span>Seat Selection</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="bg-green px-4 py-2 rounded-full">2</span>
          <span>Customer Details</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
