import React from 'react'

const KnownCrimes = () => {
    return (
        <div className="KnownCrimes flex flex-col h-[40rem] bg-black rounded-[1rem] m-2 p-2 xl:w-[24rem] ">
            <div className=' text-center h-[3rem] bg-[#26003b]  rounded-[12px] p-2 w-[95%] ml-3 text-[1.5rem]'>KnownCrimes</div>
            <div className=" flex py-3 my-5 h-[10rem] text-center justify-center items-center flex-col">

                <span className='py-1 mb-1 my-2 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Kidnapping</span>
                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Lillgal posession of fire arms</span>
                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>
                    Robbery
                </span>
                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Posession of stolen property</span>




            </div>
            <div className=' text-center h-[3rem] bg-[#26003b]  rounded-[12px] p-2 w-[95%] ml-3 text-[1.5rem]'>Cases</div>
            <div className=" flex py-3  h-[10rem] text-center justify-center items-center flex-col">

                <span className='py-1 mb-1  w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>case 124</span>
                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>case 523</span>
               

            </div>


        </div>
    )
}

export default KnownCrimes