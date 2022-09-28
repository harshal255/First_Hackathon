import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

const Criminals = () => {
    return (
        <div className="KnownCrimes flex flex-col  bg-black rounded-[1rem] m-2 p-2 xl:w-[24rem]">
            <div className=' text-center h-[3rem] bg-[#141f1f]  rounded-[12px] p-2 w-[95%] justify-evenly items-center flex'>
                <div>Criminals</div>
                <AddBoxIcon className='text-green-600 hover:cursor-pointer'></AddBoxIcon>

            </div>
            <div className=" flex py-2 my-5 h-[10rem] text-center justify-center items-center flex-col">

                <span className='py-1 mb-1 my-2 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Cesar Morals</span>
                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Jamses Chatri</span>

                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Ganesh Verma</span>

            </div>
            <div className=' text-center h-[3rem] bg-[#141f1f]  rounded-[12px] p-2 w-[95%] justify-evenly items-center flex my-2'>
                Fine: 35000/- Each Person


            </div>
            <div className=' text-center h-[3rem] bg-[#141f1f]  rounded-[12px] p-2 w-[95%] justify-evenly items-center flex'>
                <div>Sentence</div>
                <AddBoxIcon className='text-green-600 hover:cursor-pointer'></AddBoxIcon>

            </div>
            <div className=" flex py-2 my-5 h-[10rem] text-center justify-center items-center flex-col">

                <span className='py-1 mb-1 my-2 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Cesar Morals - 2 Years</span>
                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Jamses Chatri - 2 Years</span>

                <span className='py-1 my-1 w-[15.5rem] rounded-[2rem] bg-[#8a00e6]'>Ganesh Verma - 1 Years</span>

            </div>

        </div>
    )
}

export default Criminals