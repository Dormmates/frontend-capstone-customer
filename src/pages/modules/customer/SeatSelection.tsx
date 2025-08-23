import React from "react";
import { ContentWrapper } from "../../../components/layout/Wrapper";
import { useParams } from "react-router-dom";

// Use showScheduleID to fetch seats for show schedule
const SeatSelection = () => {
  const { showScheduleID } = useParams();
  return (
    <div className="flex flex-col items-center gap-5">
      <div>{showScheduleID}</div>
    </div>
  );
};

export default SeatSelection;
