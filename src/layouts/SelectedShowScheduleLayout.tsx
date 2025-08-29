import React, { useState } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { useValidateSelectedShowSchedule } from "../_lib/@react-client-query/customer";

// use step number to change the active state of 1 and 2
// when next button is pressed on the outlet the useState 0 should become 1
// useOutletContext
const SelectedShowScheduleLayout = () => {
  const { showScheduleID } = useParams();
  const [stepNumber, setStepNumber] = useState(0);
  const { data, isLoading, error } = useValidateSelectedShowSchedule(showScheduleID as string);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading</p>;
  if (!isLoading && !data) return navigate("/not_found");
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <div className="flex flex-col items-center gap-5">
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
        <Outlet />
      </div>
    </div>
  );
};

export default SelectedShowScheduleLayout;
