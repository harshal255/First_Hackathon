import React from 'react'


const CaserMorals = ({CaserMoral}) => {
    return (
        <div className="CaserMoral flex flex-col h-[40rem]  bg-black rounded-[1rem] m-2 p-2 xl:w-[24rem] ">
            <div className=' text-center h-[3rem] bg-[#26003b]  rounded-[12px] p-2 w-[95%] ml-3 text-[1.5rem]'>{CaserMoral}</div>
            <div className=" flex   mt-2 p-2 h-[4rem] text-center justify-center items-center flex-col">

                <img src={require(`../img/caser1.png`)} alt='criminal1' className=' w-40 border-white border-solid border-[1px]  p-1 mt-[25rem]' />

                <div className="info flex flex-col text-start m-3 w-[95%] bg-[#141f1f] p-5 justify-between rounded-[1rem]">
                    <span className='pt-1'>First Name: Cesar</span>
                    <span className='pt-1'>Last Name: Morals</span>
                    <span className='pt-1'>DOB : 09-12-1999</span>
                    <span className='pt-1'>Phone Number: +91 9087654321</span>
                    <span className='pt-1'>Profession:Mechanic</span>
                    <span className='pt-1'>Aadhar : xxxx xxxx xxxx</span>
                    <span className='pt-1'>Fingerprint : 12ad373f28e2</span>
                    <span className='pt-1'>Area : Memnagar</span>
                </div>




            </div>
            <button className=' rounded-[2rem] bg-green-500 w-[10rem] ml-[40%]  h-[2.5rem] mt-[27.5rem]  active:bg-green-900 hover:bg-green-700 '>Save</button>

        </div>
    )
}

export default CaserMorals