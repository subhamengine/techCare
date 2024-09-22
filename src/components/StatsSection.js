import React from "react";
import Chart from "./Chart";
import respiratory from "../assets/respiratory.png";
import temperature from "../assets/temperature.svg";
import HeartBPM from "../assets/HeartBPM.svg";
import DiagnosticTable from "../components/DiagonsticTable";
const StatsSection = ({ stats }) => {
  
  
  
  return (
    <div className="w-[50%]  rounded-[10px] bg-[#F6F7F8]  flex flex-col gap-[1rem] overflow-y-scroll">
      {stats !== null  && (
        <div className="w-[100%] h-[750px] flex flex-col items-center bg-white">
          <span className="w-[100%] font-bold text-[20px] p-[1rem]">
            Diagnosis History
          </span>
          <div className="w-[100%] h-[100%]  p-[1rem] flex flex-col gap-[1rem] bg-white">
            <Chart diagnosisHistory={stats.diagnosis_history}/>
            <div className="w-[100%] h-[45%] flex justify-between">
              <div className="w-[30%] h-[100%]  rounded-[10px] bg-[#E0F3FA] gap-[1rem] p-[1rem]">
                <div className="w-[100%] h-[55%] ">
                  <img src={respiratory} />
                </div>
                <div className="w-[100%] h-[42%]  flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="font-light">Respiratory Rate</span>
                    <span className="font-bold text-[22px]">{stats?.diagnosis_history[stats?.diagnosis_history?.length-1]?.respiratory_rate?.value} bpm</span>
                  </div>
                  <span className="font-extralight">{stats?.diagnosis_history[stats?.diagnosis_history?.length-1]?.respiratory_rate?.levels}</span>
                </div>
              </div>
              <div className="w-[30%] h-[100%]  rounded-[10px] bg-[#FFE6E9] gap-[1rem] p-[1rem]">
                <div className="w-[100%] h-[55%] ">
                  <img src={temperature} />
                </div>
                <div className="w-[100%] h-[42%]  flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="font-light">Temperature</span>
                    <span className="font-bold text-[22px]">{stats?.diagnosis_history[stats?.diagnosis_history?.length-1]?.temperature?.value} F</span>
                  </div>
                  <span className="font-extralight">{stats?.diagnosis_history[stats?.diagnosis_history?.length-1]?.temperature?.levels}</span>
                </div>
              </div>
              <div className="w-[30%] h-[100%]  rounded-[10px] bg-[#FFE6F1] gap-[1rem] p-[1rem]">
                <div className="w-[100%] h-[55%] ">
                  <img src={HeartBPM} />
                </div>
                <div className="w-[100%] h-[42%]  flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="font-light">Heart Rate</span>
                    <span className="font-bold text-[22px]">{stats?.diagnosis_history[stats?.diagnosis_history?.length-1]?.heart_rate?.value} bpm</span>
                  </div>
                  <span className="font-extralight">{stats?.diagnosis_history[stats?.diagnosis_history?.length-1]?.heart_rate?.levels}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-[100%] p-[1rem]  bg-white rounded-[10px]">
        <span className="font-bold text-[20px]">Diagnostic list</span>
        <DiagnosticTable diagnosticList={stats?.diagnostic_list}/>
      </div>
    </div>
  );
};

export default StatsSection;
