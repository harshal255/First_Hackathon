import React from 'react'

const Vehiclescard = ({Num,Btn1,Btn2,Owner,Contact,Address}) => {
    return (
        <div className="vehiclescard bg-[#141f1f]   rounded-[1rem] m-2 pb-2">
            <div className='flex justify-between items-center m-2'>
                <span className='justify-start m-2 '>{Num}</span>
                <div className="btn flex flex-row justify-end ">
                    <button className='m-1 rounded-[2rem] bg-[#0000ff] w-[5rem] h-[2rem]   active:bg-[#000066] hover:bg-[#000099] '>{Btn1}</button>
                    <button className='m-1 rounded-[2rem] bg-green-500 w-[5rem]   h-[2rem]   active:bg-green-900 hover:bg-green-700 '>{Btn2}</button>
                </div>
            </div>

            <div className='flex text-[0.5rem] sm:text-[1rem] md:text-xl justify-evenly'>
                <span>Owner :{Owner}</span>
                <span>Contact :{Contact}</span>
                <span>{Address}</span>
            </div>
        </div>
    )
}

export default Vehiclescard