import React from 'react'
import Reportid from './Reportid'
import Reports from './Reports'

const Report = () => {
  return (
    <div id='Report' className="Report rounded-[2rem] m-2 md:w-[80%] md:ml-[20%] mt-[3rem]
    lg:mt-1 bg-slate-800 flex  flex-col xl:flex-row justify-evenly">



            <Reports></Reports>
            <Reportid></Reportid>
           
       


    </div>
  )
}

export default Report