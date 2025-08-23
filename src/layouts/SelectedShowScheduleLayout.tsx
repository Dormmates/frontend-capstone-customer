import React, { use, useState } from "react";
import { Outlet } from "react-router-dom";

// use step number to change the active state of 1 and 2
// when next button is pressed on the outlet the useState 0 should become 1
// useOutletContext
const SelectedShowScheduleLayout = () => {
  const [stepNumber, setStepNumber] = useState(0);
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
      </div>
      <Outlet />
    </div>
  );
};

export default SelectedShowScheduleLayout;
