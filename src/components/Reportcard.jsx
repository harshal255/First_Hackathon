import React from 'react'

export const Reportcard = ({Id,Address,Crime,Name,Time}) => {
  return (
    <div className=' my-4 py-2 rounded-[0.5rem] flex flex-col bg-[#141f1f]'>
    
    <div className="flex text-[0.65rem] md:text-[0.9rem] justify-around">
        <span>ID : {Id}</span>
        <span>{Address}</span>
        <span>{Crime}</span>
    </div>

    <div className='flex justify-evenly my-1 md:text-[0.9rem] ]'>
        <span>{Name}</span>
        <span>{Time}</span>
    </div>
    </div>
  )
}
