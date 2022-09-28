import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Vehiclescard from './Vehiclescard';


const Vehicles = () => {
  return (
    <div id='Vehicles' className="Vehicles rounded-[1rem] m-2 md:w-[80%] md:ml-[20%] mt-[1rem]
    lg:mt-1 h-[35rem] bg-slate-800">
      <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center text-[1.5rem]">
        <span className=' pt-[9px] w-[75%] h-[3rem] bg-[#26003b] text-center rounded-[12px] ml-[2rem]'>Vehicles</span>
        <AddBoxIcon className='m-2 text-green-500 hover:cursor-pointer'></AddBoxIcon>
      </div>
      <div className=" flex m-2 p-2 h-[4rem] justify-between rounded-[12px] bg-slate-900">
        <span className='pt-[9px]  h-[3rem] w-[7rem]  '>Search Vehicle</span>
        <FilterAltIcon className='m-2'></FilterAltIcon>

      </div>

      <Vehiclescard Num="GJ 01 BM 2563" Btn1="Lost" Btn2="Found" Owner="Alisha Wilson " Contact="+91 9782310456" Address="Maninagar st,Ahmedabad"></Vehiclescard>
      <Vehiclescard Num="GJ 05 LH 3264" Btn1="Warrant" Btn2="Found" Owner="Cesar Parkour" Contact="+91 7583023648" Address="Pandesara,Surat"></Vehiclescard>
     


    </div>
  )
}

export default Vehicles