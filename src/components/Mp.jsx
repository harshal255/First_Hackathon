import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Mpcard from './Mpcard';

const Mp = () => {
  return (
    <div className="MissingPerson rounded-[1rem] m-2 p-2 bg-black  h-[40rem] z-[4] xl:w-[25rem] md:w-[80%] md:ml-[20%]">
    <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center text-[1.5rem]">
        <span className=' pt-[9px] w-[75%] h-[3rem] bg-[#26003b] text-center rounded-[12px] ml-[2rem]'>Missing Person</span>
        <AddBoxIcon className='m-2 text-green-500 hover:cursor-pointer'></AddBoxIcon>
    </div>
    <div className=" flex mt-2 p-2 h-[4rem] justify-between rounded-[12px] bg-slate-900">
        <span className='pt-[9px]  h-[3rem] w-[5rem]  '>Jimmy</span>
        <FilterAltIcon className='m-2'></FilterAltIcon>

    </div>
   <Mpcard Photo="caser1" btn="Wanted" Address="Maninagar st,Ahmedabad"></Mpcard>
   <Mpcard Photo="caser2" btn="Missing" Address="Varachha st Surat"></Mpcard>

</div>
  )
}

export default Mp