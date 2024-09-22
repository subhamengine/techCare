import React from 'react'
import TestLogo from "../assets/TestLogo.svg"
import home from "../assets/home.svg"
import patiens from "../assets/patients.svg"
import calender from "../assets/calender.svg"
import chat from "../assets/chat.svg"
import credit_card from "../assets/credit_card.svg"
import doctor from "../assets/senior-woman-doctor.png"
import more from "../assets/more.png"
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-[95vw] h-[8vh]  bg-white rounded-[100px] flex items-center justify-between px-[2rem]'>
        <img src={TestLogo}/>
        <div className='w-[50%] h-[100%]  flex items-center justify-between'>
            <Link to={'/'} className='w-[18%] h-[60%]  flex  gap-[5px] items-center justify-center'><img src={home}/> Overview</Link>
            <Link to={'/patients'} className='w-[18%] h-[60%]  flex  gap-[5px] items-center justify-center bg-[#01F0D0] rounded-[100px]'><img src={patiens}/> Patients</Link>
            <Link to={'/'} className='w-[18%] h-[60%]  flex  gap-[5px] items-center justify-center'><img src={calender}/> Schedule</Link>
            <Link to={'/'} className='w-[18%] h-[60%]  flex  gap-[5px] items-center justify-center'><img src={chat}/> Message</Link>
            <Link to={'/'} className='w-[18%] h-[60%]  flex  gap-[5px] items-center justify-center'><img src={credit_card}/> Transactions</Link>
        </div>
        <div className='w-[20%] h-[100%]  flex items-center'>
            <div className='w-[80%] h-[100%]  flex items-center'>
                <div className='w-[100%] h-[65%]  flex items-center gap-[10px]'>
                    <div className='w-[18%]  h-[100%] rounded-[100%]'>
                        <img src={doctor} className='w-[100%] h-[100%] object-cover'/>
                    </div>
                    <span className='flex flex-col h-[80%] justify-center'>
                        <span className='w-[100%]'>Dr. Jose Simmons</span>
                        <span className='text-[#707070] font-light text-[14px]'>General Practioner</span>
                    </span>
                </div>
            </div>
            <div className='w-[2px] h-[70%] bg-[#F6F7F8]'></div>
            <div className='w-[20%] h-[100%]  flex items-center'>
                <div className='w-[100%] h-[65%]  flex items-center justify-center gap-[10px]'> 
                    <img src={settings}/>
                    <img src={more} className='h-[20px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header