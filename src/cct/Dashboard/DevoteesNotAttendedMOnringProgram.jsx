import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useMyContext } from "../../store/context";
ChartJS.register(...registerables);

function DevoteesNotAttendedMOnringProgram() {
  const { state } = useMyContext();

  const options = {
    horizontalLine: [
      {
        y: 6,
        style: "black",
        text: "max",
      },
    ],
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "COUNSELOR ATTENDING MORNING PROGRAM BELOW THRESHOLD(3 MONTHS)",
      },
    },
  };
  const donationCollectionData = {
    labels: [
      "Krishna Das",
      "Nityananda Das",
      "Balram Das",
      "Gaurangi DD",
      "Radha DD",
      "Ram Das",
      "Sakhi DD",
      "Bhakta DaS",
      "Vaishnavi DD",
      "Bhakta Das",
    ],
    datasets: [
      {
        label: "ATTENDED MORNING PROGRAMS",
        data: [10, 18, 15, 11, 12, 8, 11, 12, 15, 10, 20],
        backgroundColor: `${
          state.Theme.Theme === "light" ? "rgb(139 92 246)" : "rgb(91 33 182)"
        }`,
        borderColor: `${
          state.Theme.Theme === "light" ? "rgb(167 139 250)" : "rgb(109 40 217)"
        }`,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      className={`rounded-xl w-full border ${
        state.Theme.Theme === "light"
          ? "bg-gray-100 border-gray-200"
          : "bg-stone-900 border-stone-800"
      }`}
    >
      <div className="w-full">
        <Bar
          data={donationCollectionData}
          options={options}
          className="h-[10px]"
          height={60}
        />
      </div>
    </div>
  );
}

export default DevoteesNotAttendedMOnringProgram;
