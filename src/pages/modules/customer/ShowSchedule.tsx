import React from "react";
import { Link } from "react-router-dom";

const ShowSchedule = () => {
  const sampleSchedule = {
    "October 24, 2025": [
      { time: "2:00 PM", scheduleId: "sch-001" },
      { time: "6:00 PM", scheduleId: "sch-002" },
    ],
    "October 25, 2025": [
      { time: "4:00 PM", scheduleId: "sch-003" },
      { time: "8:00 PM", scheduleId: "sch-004" },
    ],
  };

  return (
    <div className="flex flex-col gap-5 self-start w-full">
      <h1 className="font-bold text-xl">Select Show Schedule</h1>
      {Object.entries(sampleSchedule).map(([date, times]) => (
        <div className="flex flex-col bg-lightPrimary p-4 gap-2 border rounded border-lightGrey" key={date}>
          <h2 className="font-thin">Show Title</h2>
          <h3 className="font-semibold">{date}</h3>
          <div className="flex flex-row flex-wrap gap-2">
            {times.map((timeData) => (
              <Link to={`/${timeData.scheduleId}`}>
                <div className="flex flex-row px-4 py-2 bg-slate-100 rounded border" key={timeData.scheduleId}>
                  {timeData.time}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowSchedule;
