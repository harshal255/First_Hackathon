import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Reportcard } from './Reportcard';

const Reports = () => {
  return (
    <div className="Reports rounded-[1rem] m-2 p-2 bg-black  h-[40rem] z-[4] xl:w-[30rem] ">
            <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center text-[1.5rem]">
                <span className=' pt-[9px] w-[75%] h-[3rem] bg-[#26003b] text-center rounded-[12px] ml-[2rem]'>Reports</span>
                <AddBoxIcon className='m-2 text-green-500 hover:cursor-pointer'></AddBoxIcon>
            </div>
            <div className=" flex mt-2 p-2 h-[4rem] justify-between rounded-[12px] bg-slate-900">
                <span className='pt-[9px]  h-[3rem] w-[7rem]  '>Search Report</span>
                <FilterAltIcon className='m-2'></FilterAltIcon>

            </div>
            <Reportcard Id="2" Address="Maninagar St,Ahmedabad" Crime="Vehicle Stolen Report" Name="Alisha Wilson" Time="Yesterday, 2:17pm"></Reportcard>
            <Reportcard Id="1" Address="katargam St,Surat" Crime="Vehicle Stolen Report" Name="Joey Gupta" Time="Yesterday, 8:48am"></Reportcard>
          

        </div>
  )
}

export default Reports