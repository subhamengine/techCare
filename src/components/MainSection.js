import React,{useEffect, useState} from 'react'
import PatientsList from './PatientsList'
import StatsSection from './StatsSection';
import ProfileSection from './ProfileSection';


const MainSection = () => {
    const [patients, setPatients] = useState(null);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [selectedPatientStats, setSelectedPatientStats] = useState(null);

    useEffect(() => {
        const getPatients = async () => {
          try {
            const username = 'coalition'; 
            const password = 'skills-test'; 
            const credentials = btoa(`${username}:${password}`);
      
            const response = await fetch(
              `https://fedskillstest.coalitiontechnologies.workers.dev`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Basic ${credentials}`, // Basic Auth header
                },
              }
            );
      
            const result = await response.json();
      
            
      
            if (result) {
              setPatients(result);
              setSelectedPatient(result[0].name)
            } else {
              throw new Error("Failed to fetch patients");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        getPatients();
      }, []);

      useEffect(() => {
        const patient = patients?.filter((pat)=>pat.name===selectedPatient)
      
       if(patient){
        setSelectedPatientStats(patient[0])
       }
        
        
      }, [selectedPatient])
      
      


  return (
    <div className='w-[100%] h-[85%]   px-[2rem] flex justify-between'>
        <PatientsList patients={patients} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
        <StatsSection stats={selectedPatientStats}/>
        <ProfileSection stats={selectedPatientStats}/>
    </div>
  )
}

export default MainSection