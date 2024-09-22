import React from "react";
import download from "../assets/download.svg";

const LabResults = ({ LabResults }) => {
  return (
    <div className="border w-[100%] bg-white p-[1rem] rounded-[10px]">
      <span className="font-bold text-[20px]">Lab Results</span>
      <div className="w-[100%]   max-h-[180px] overflow-y-scroll  ">
        {LabResults &&
          LabResults.map((res) => (
            <button className="w-[100%] h-[50px] text-start mt-[1rem] flex items-center justify-between">
              <span>{res}</span>
              <img src={download} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default LabResults;
