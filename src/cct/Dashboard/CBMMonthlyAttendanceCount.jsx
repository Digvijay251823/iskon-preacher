import React from "react";
import { useMyContext } from "../../store/context";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function CBMMonthylAttendanceCount() {
  const { state } = useMyContext();
  const donationCollectionData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "CBM ATTENDANCE COUNT",
        data: [
          5000, 6000, 5500, 7000, 8000, 7500, 9000, 9500, 8500, 10000, 10500,
          11000,
        ],
        backgroundColor: `${
          state.Theme.Theme === "light" ? "rgb(37 99 235)" : "rgb(30 64 175)"
        }`,
        borderColor: `${
          state.Theme.Theme === "light" ? "rgb(37 99 235)" : "rgb(30 64 175)"
        }`,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div
        className={`p-5 border rounded-xl ${
          state.Theme.Theme === "light"
            ? "bg-gray-100 border-gray-200"
            : "bg-stone-900 border-stone-800"
        }`}
      >
        <Bar data={donationCollectionData} />
      </div>
    </div>
  );
}

export default CBMMonthylAttendanceCount;
