import React from 'react'

const Reportid = () => {
    return (
        <div className="CaserMoral flex flex-col h-[40rem]  bg-black rounded-[1rem] m-2 p-2 xl:w-[40rem]">
            <div className=' text-center h-[3rem] bg-[#26003b]  rounded-[12px] p-2 w-[95%] ml-3 text-[1.5rem]'>Report ID : 2</div>

            <div className='m-2 text-start '>
                <span>Title :</span>
                <span className=' px-5 rounded-[1rem] bg-slate-900 mx-2 '>Vehicle Stolen Report</span>
            </div>
            <div className='m-2 text-start'>
                <span>Victim :</span>
                <span className=' px-5 rounded-[1rem] bg-slate-900 mx-2'>Alisha Wilson</span>
            </div>
            <div className="text-start  m-2 p-2 md:p-4 rounded-[1rem] bg-[#141f1f] h-[26rem]">

                <p className='text-start '>Vehicle Stolen from Apartment Parking. </p>
                <br />



                <p> Vehicle description:
                    <br />


                    Hyundai Creta white color
                    <br />

                    no. plate: GJ 01 BM 2563
                </p>
                <br />


                <p> Incident time: 18-09-2021 (11:00am-12:00pm)</p>
                <br />


                <p> Ms. Alisha mentioned that few people at apartment told her that vehicle stolen
                    by a 20-22 year load man in a mechanic suit.</p>
            </div>

            <div className="btn flex flex-row justify-end ">
            <button className='m-2 rounded-[2rem] bg-green-500 w-[10rem] h-[2.5rem]   active:bg-green-900 hover:bg-green-700 '>Save</button>
            <button className='m-2 rounded-[2rem] bg-red-500 w-[10rem]   h-[2.5rem]   active:bg-red-900 hover:bg-red-700 '>Delete</button>
            </div>

        </div>
    )
}

export default Reportid