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

// const diagnosisHistory = [
//   {
//     month: "March",
//     year: 2024,
//     blood_pressure: {
//       systolic: { value: 163, levels: "Higher than Average" },
//       diastolic: { value: 95, levels: "Normal" }
//     }
//   },
//   {
//     month: "February",
//     year: 2024,
//     blood_pressure: {
//       systolic: { value: 151, levels: "Higher than Average" },
//       diastolic: { value: 120, levels: "Normal" }
//     }
//   },
//   {
//     month: "January",
//     year: 2024,
//     blood_pressure: {
//       systolic: { value: 168, levels: "Higher than Average" },
//       diastolic: { value: 77, levels: "Lower than Average" }
//     }
//   },
//   {
//     month: "December",
//     year: 2023,
//     blood_pressure: {
//       systolic: { value: 158, levels: "Higher than Average" },
//       diastolic: { value: 92, levels: "Normal" }
//     }
//   },
//   {
//     month: "November",
//     year: 2023,
//     blood_pressure: {
//       systolic: { value: 117, levels: "Normal" },
//       diastolic: { value: 95, levels: "Normal" }
//     }
//   },
//   {
//     month: "October",
//     year: 2023,
//     blood_pressure: {
//       systolic: { value: 115, levels: "Normal" },
//       diastolic: { value: 80, levels: "Lower than Average" }
//     }
//   }
// ];



const BloodPressureChart = ({diagnosisHistory}) => {




  const labels = diagnosisHistory?.map(
    (entry) => `${entry.month} ${entry.year}`
  );
  
  const systolicData = diagnosisHistory?.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  
  const diastolicData = diagnosisHistory?.map(
    (entry) => entry.blood_pressure.diastolic.value
  );



  const data = {
    labels, 
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
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
        data: diastolicData, 
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
            <p className="value">{systolicData[systolicData?.length - 1]}</p>
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
            <p className="value">{diastolicData[diastolicData?.length - 1]}</p>
            <p className="status">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
