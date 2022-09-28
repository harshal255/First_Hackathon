import React from 'react'

const Casecard = ({CaseNum,Date,Address}) => {
  return (
    <div className=' my-4 py-2 rounded-[0.5rem] flex flex-col bg-[#141f1f]'>
    
    <div className="flex  justify-evenly">
        <span>Case:{CaseNum}</span>
        <span>{Date}</span>
       
    </div>

   <div className='text-start mx-[1rem] '>{Address}</div>
    </div>
  )
}

export default Casecard