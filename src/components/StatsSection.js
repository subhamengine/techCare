import React from "react";
import Chart from "./Chart";
import respiratory from "../assets/respiratory.png";
import DiagnosticTable from "../components/DiagonsticTable";
const StatsSection = () => {
  return (
    <div className="w-[50%]  rounded-[10px] bg-[#F6F7F8]  flex flex-col gap-[1rem] overflow-y-scroll">
      <div className="w-[100%] h-[750px] flex flex-col items-center bg-white">
        <span className="w-[100%] font-bold text-[20px] p-[1rem]">
          Diagnosis History
        </span>
        <div className="w-[100%] h-[100%]  p-[1rem] flex flex-col gap-[1rem] bg-white">
          <Chart />
          <div className="w-[100%] h-[45%] flex justify-between">
            <div className="w-[30%] h-[100%]  rounded-[10px] bg-[#E0F3FA] gap-[1rem] p-[1rem]">
              <div className="w-[100%] h-[55%] ">
                <img src={respiratory} />
              </div>
              <div className="w-[100%] h-[42%]  flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="font-light">Respiratory Rate</span>
                  <span className="font-bold text-[22px]">20 bpm</span>
                </div>
                <span className="font-extralight">Normal</span>
              </div>
            </div>
            <div className="w-[30%] h-[100%]  rounded-[10px] bg-[#FFE6E9] gap-[1rem] p-[1rem]">
              <div className="w-[100%] h-[55%] ">
                <img src={respiratory} />
              </div>
              <div className="w-[100%] h-[42%]  flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="font-light">Temperature</span>
                  <span className="font-bold text-[22px]">20 bpm</span>
                </div>
                <span className="font-extralight">Normal</span>
              </div>
            </div>
            <div className="w-[30%] h-[100%]  rounded-[10px] bg-[#FFE6F1] gap-[1rem] p-[1rem]">
              <div className="w-[100%] h-[55%] ">
                <img src={respiratory} />
              </div>
              <div className="w-[100%] h-[42%]  flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="font-light">Heart Rate</span>
                  <span className="font-bold text-[22px]">20 bpm</span>
                </div>
                <span className="font-extralight">Normal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] p-[1rem]  bg-white rounded-[10px]">
        <span className="font-bold text-[20px]">Diagnostic list</span>
        <DiagnosticTable />
      </div>
    </div>
  );
};

export default StatsSection;
