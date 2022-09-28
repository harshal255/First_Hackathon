
import React from 'react'
import Criminals from './Criminals'
import Summery from './Summery'

const Searchcase2 = () => {
    return (
        <div className="CaserMoral flex flex-col   bg-black rounded-[1rem] m-2 p-2 xl:w-[40rem] ">
            <div className=' text-center h-[3rem] bg-[#26003b]  rounded-[12px] p-2 w-[95%] ml-3 text-[1.5rem]'>Case: 124</div>
            <div className="flex bg-[#001a00] rounded-[1rem] my-2 ">

                <Summery></Summery>
                <Criminals></Criminals>
            </div>

            <div className="btn flex flex-row justify-end ">
                <button className='m-2 rounded-[2rem] bg-green-500 w-[10rem] h-[2.5rem]   active:bg-green-900 hover:bg-green-700 '>Save</button>
                <button className='m-2 rounded-[2rem] bg-red-500 w-[10rem]   h-[2.5rem]   active:bg-red-900 hover:bg-red-700 '>Delete</button>
            </div>

        </div>
    )
}

export default Searchcase2