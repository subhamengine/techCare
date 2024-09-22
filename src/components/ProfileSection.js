import React from "react";
import insurance from "../assets/insurance.svg"
import gender from "../assets/gender.svg"
import contact from "../assets/contact.svg"
import birthicon from "../assets/BirthIcon.png";
import LabResults from "./LabResults";

const ProfileSection = ({stats}) => {
  console.log(stats);
  
  return (
    <div className="w-[20%]  h-[100%] flex flex-col gap-[2rem]">
      {stats !== null && <div className="w-[100%] h-[75%]  border rounded-[10px] bg-white p-[1rem] flex flex-col items-center justify-between">
        <div className="w-[100%] h-[35%]  flex flex-col items-center gap-[0.5rem]">
          <div className="w-[150px] h-[150px]  rounded-[100%]">
            <img src={stats?.profile_picture} className="w-[100%] h-[100%] object-fill" />
          </div>
          <span className="text-[20px] font-semibold">{stats.name}</span>
        </div>
        <div className="w-[100%] h-[45%] flex flex-col items-center gap-[1rem]">
          <div className="w-[100%]  h-[20%] flex items-center gap-[1rem]">
            <img src={birthicon}/>
            <div className="h-[100%]  w-[90%] flex flex-col text-[12px]">
              <span>Date Of Birth</span>
              <span className="font-bold">{stats.date_of_birth}</span>
            </div>
          </div>
          <div className="w-[100%]  h-[20%] flex items-center gap-[1rem]">
            <img src={gender}/>
            <div className="h-[100%]  w-[90%] flex flex-col text-[12px]">
              <span>Gender</span>
              <span className="font-bold">{stats.gender}</span>
            </div>
          </div>
          <div className="w-[100%]  h-[20%] flex items-center gap-[1rem]">
            <img src={contact}/>
            <div className="h-[100%]  w-[90%] flex flex-col text-[12px]">
              <span>Contact Info</span>
              <span className="font-bold">{stats.phone_number}</span>
            </div>
          </div>
          <div className="w-[100%]  h-[20%] flex items-center gap-[1rem]">
            <img src={contact}/>
            <div className="h-[100%]  w-[90%] flex flex-col text-[12px]">
              <span>Emergency Contacts</span>
              <span className="font-bold">{stats.emergency_contact}</span>
            </div>
          </div>
          <div className="w-[100%]  h-[20%] flex items-center gap-[1rem]">
            <img src={insurance}/>
            <div className="h-[100%]  w-[90%] flex flex-col text-[12px]">
              <span>Insurance Provider</span>
              <span className="font-bold">{stats.insurance_type}</span>
            </div>
          </div>
        </div>
        <button className="mt-[2rem] px-[0.5rem]  py-[0.5rem] rounded-[100px] w-[80%] bg-[#01F0D0]">Show All Information</button>
      </div>}
      <LabResults LabResults={stats?.lab_results}/>


    </div>
  );
};

export default ProfileSection;
