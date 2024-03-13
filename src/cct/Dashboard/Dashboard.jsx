import React from "react";
import { useMyContext } from "../../store/context";
import CountOfCounseleeMeetings from "./CountOfCounseleeMeetings";
import CBMMonthylAttendanceCount from "./CBMMonthlyAttendanceCount";
import DevoteeCountAttendingMorningProgram from "./DevoteeCountAttendingMontingProgram";
import CounselerNotConductingCounseleeMeeting from "./CounselerNotCounseleeMeeting";
import DevoteesNotAttendedMOnringProgram from "./DevoteesNotAttendedMOnringProgram";
import DevoteesAttendingCbmBelowThreshold from "./DevoteesAttendingCbmBelowThreshold";

function Dashboard() {
  const { state } = useMyContext();
  return (
    <div
      className={`min-h-screen ${
        state.Theme.Theme === "light" ? "bg-white" : "bg-stone-950"
      } p-5`}
    >
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <CountOfCounseleeMeetings />

          <CBMMonthylAttendanceCount />
          <DevoteeCountAttendingMorningProgram />
        </div>
        <div className="flex flex-col gap-5">
          <CounselerNotConductingCounseleeMeeting />

          <DevoteesNotAttendedMOnringProgram />
          <DevoteesAttendingCbmBelowThreshold />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
