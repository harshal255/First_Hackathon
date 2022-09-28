import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Casecard from './Casecard';

const Searchcase = () => {
  return (
    <div className="Reports rounded-[1rem] m-2 p-2 bg-black  h-[50rem] z-[4] xl:w-[30rem] ">
    <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center text-[1.5rem]">
        <span className=' pt-[9px] w-[75%] h-[3rem] bg-[#26003b] text-center rounded-[12px] ml-[2rem]'>Case</span>
        <AddBoxIcon className='m-2 text-green-500 hover:cursor-pointer'></AddBoxIcon>
    </div>
    <div className=" flex mt-2 p-2 h-[4rem] justify-between rounded-[12px] bg-slate-900">
        <span className='pt-[9px]  h-[3rem] w-[7rem]  '>Search Case</span>
        <FilterAltIcon className='m-2'></FilterAltIcon>

    </div>
   <Casecard CaseNum="124" Date="21-07-2021,7:12pm" Address="Maninagar St,Ahmedabad"></Casecard>
   <Casecard CaseNum="523" Date="17-10-2021,5:49pm" Address="Katargam st,Surat"></Casecard>
  

</div>
  )
}

export default Searchcase