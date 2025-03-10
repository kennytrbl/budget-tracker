import React, { useEffect, useState } from "react";
import "../styles/BarGraph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { updateTotals, labelTotals } from "./DisplayData.tsx";
import { categories } from "./DisplayData.tsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Labels for the bar graph
let labels = categories;

// Options for the bar graph
export const options = {
  plugins: {
    legend: { display: false },
    maintainAspectRatio: false,
    tooltip: {
      callbacks: {
        label: (context) => {
          let value = context.raw;
          return `$${value}`;
        },
      },
    },
  },
};
ChartJS.defaults.borderColor = "#000000";
ChartJS.defaults.color = "#000000";

// Bar graph component
export default function BarGraph() {
  // eslint-disable-next-line
  const [dataReady, setDataReady] = useState(false);
  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        data: new Array(labels.length).fill(0),
        backgroundColor: "#283618",
      },
    ],
  });

  // Initialize the data for the bar graph
  const initializeData = () => {
    updateTotals();
    setChartData({
      labels,
      datasets: [
        {
          data: labelTotals,
          backgroundColor: "#283618",
        },
      ],
    });
    setDataReady(true);
  };

  // Update the data for the bar graph
  useEffect(() => {
    initializeData();
    const intervalId = setInterval(() => {
      remakeGraph();
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);
  const remakeGraph = () => {
    setDataReady(false);
    initializeData();
  };

  // Return the bar graph
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div id="barGraph">
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
}
