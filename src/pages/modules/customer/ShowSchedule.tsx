import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShowDataContext } from "../../../context/ShowDataContext";
import formatSchedules from "../../../utils/formatSchedules";

const ShowSchedule = () => {
  const { showID } = useParams();
  const selectedShowData = useContext(ShowDataContext);
  const selectedShowSchedules = () => {
    return formatSchedules(selectedShowData?.showschedules ?? []);
  };

  return (
    <div className="flex flex-col gap-5 self-start w-full">
      <h1 className="font-bold text-xl">Select Show Schedule</h1>
      {Object.keys(selectedShowSchedules()).length === 0 && <p>No schedules available</p>}
      {Object.entries(selectedShowSchedules()).map(([date, times]) => (
        <div className="flex flex-col bg-lightPrimary p-4 gap-2 border rounded border-lightGrey" key={date}>
          <h2 className="font-thin">{selectedShowData?.title}</h2>
          <h3 className="font-semibold">{date}</h3>
          <div className="flex flex-row flex-wrap gap-2">
            {times.map((timeData) => (
              <Link to={`/customer/show/${showID}/schedule/${timeData.scheduleId}`}>
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
