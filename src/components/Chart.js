import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Chart.css"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const data = {
    labels: [
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [120, 140, 160, 130, 150, 160], 
        borderColor: "rgba(233, 92, 159, 1)", 
        backgroundColor: "rgba(233, 92, 159, 0.1)",
        pointBackgroundColor: "rgba(233, 92, 159, 1)", 
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(233, 92, 159, 1)",
        pointRadius: 8, 
        pointHoverRadius: 10, 
        fill: false,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: [100, 80, 90, 110, 70, 78], 
        borderColor: "rgba(155, 102, 255, 1)",
        backgroundColor: "rgba(155, 102, 255, 0.1)", 
        pointBackgroundColor: "rgba(155, 102, 255, 1)", 
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(155, 102, 255, 1)",
        pointRadius: 8, 
        pointHoverRadius: 10,
        fill: false,
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
      },
    },
  };

  return (
    <div className="blood-pressure-container">
      <div className="chart-section">
        <span className="text-[20px] font-semibold text-start   w-[100%]">Blood pressure</span>
        <Line data={data} options={options} />
      </div>
      <div className="details-section">
        <div className="details-item systolic">
          <div className="details-text">
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div className="dot systolic-dot"></div>
              <p className="label">Systolic</p>
            </div>
            <p className="value">160</p>
            <p className="status">Higher than Average</p>
          </div>
        </div>
        <hr />

        <div className="details-item diastolic">
          <div className="details-text">
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div className="dot diastolic-dot"></div>
              <p className="label">Diastolic</p>
            </div>
            <p className="value">78</p>
            <p className="status">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;