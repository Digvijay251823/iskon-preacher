import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useMyContext } from "../../store/context";
ChartJS.register(...registerables);

function DevoteesAttendingCbmBelowThreshold() {
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
        text: "COUNSELOR ATTENDED CBM BELOW THRESHOLD(1 YEAR)",
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
        label: "ATTENDED CBM",
        data: [5, 4, 1, 6, 5, 4, 1, 2, 3, 2, 6],
        backgroundColor: `${
          state.Theme.Theme === "light" ? "rgb(5 150 105)" : "rgb(4 120 87)"
        }`,
        borderColor: `${
          state.Theme.Theme === "light" ? "rgb(16 185 129)" : "rgb(5 150 105)"
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

export default DevoteesAttendingCbmBelowThreshold;
