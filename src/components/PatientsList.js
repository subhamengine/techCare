import React from "react";
import more_horiz from "../assets/more_horiz.svg";

const PatientsList = ({ patients,selectedPatient }) => {
  return (
    <div className=" w-[25%]  rounded-[10px] bg-white  flex flex-col justify-between">
      <span className="w-[100%] font-bold text-[20px] p-[1rem]">Patients</span>
      <div className="w-[100%] h-[90%]  overflow-y-scroll flex flex-col ">
        {patients !== null &&
          patients.map((patient) => (
            <button id={patient.phone_number} className={`w-[100%] min-h-[80px] px-[1rem]  flex items-center ${selectedPatient === patient.name && "bg-[#D8FCF7]"}` }>
              <div className="w-[80%] h-[100%]  flex items-center">
                <div className="w-[100%] h-[65%]  flex items-center gap-[10px]">
                  <div className="w-[50px]  h-[100%] rounded-[100%]">
                    <img src={patient.profile_picture} className="w-[100%] h-[100%] object-fit" />
                  </div>
                  <span className="flex flex-col h-[80%] justify-center  text-start">
                    <span className="w-[100%]">{patient.name}</span>
                    <span className="text-[#707070] font-light text-[14px]">
                      {patient.gender}, {patient.age}
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-[20%] h-[100%]  flex items-center ">
                <div className="w-[100%] h-[65%]  flex items-center justify-center gap-[10px]">
                  <img src={more_horiz} className="w-[20px] h-[20px]" />
                </div>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default PatientsList;
