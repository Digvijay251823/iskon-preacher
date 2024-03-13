import React from "react";
import { useMyContext } from "../../store/context";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function CounselerNotConductingCounseleeMeeting() {
  const { state } = useMyContext();
  const chart = new ChartJS();

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
        text: "DEVOTEE CONDUCTING COUNSELEE MEETING BELOW THRESHOLD",
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
        label: "COUNT OF COUNSELEE MEETINGS",
        data: [1, 3, 2, 3, 4, 3, 1, 4, 5, 3, 6],
        backgroundColor: `${
          state.Theme.Theme === "light" ? "rgb(249 115 22)" : "rgb(124 45 18)"
        }`,
        borderColor: `${
          state.Theme.Theme === "light" ? "rgb(194 65 12)" : "rgb(194 65 12)"
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

export default CounselerNotConductingCounseleeMeeting;
