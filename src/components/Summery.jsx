import React from 'react'

const Summery = () => {
    return (
        <div className='Summery'>

            <div className='m-2 ml-[25%] text-center px-5 rounded-[1rem] bg-slate-900  h-[2rem] w-[10rem] items-center justify-center'>
                Summary
            </div>

            <div className="text-start  m-2 p-2 md:p-4 rounded-[1rem] bg-[#141f1f]  flex flex-col">

                <p> Date: 21-07-2021</p>

                <p> Jetpur st, Rajkot</p>

                <br className='m-3'/>



                <p> Criminal Tried to Rob a XYZ Bank at ABC street, JKL Area.
                    3 robbers come with a hostage and weapons in bank, and
                    tried to do robbery.</p>

                <br className='m-3' />


                <p> We reach there as we got a call from unknown number
                    about that incident. we tried to negotiate with them and
                    keep everyone safe inside bank.</p>

                <br className='m-3'/>


                <p> We successfull caught all the robbers and items found
                    from them are listed below:</p>

                <br className='m-3'/>


                <p> Cesar Morals:</p>

                <p> 1 cellphone, 1 Pistol, 2 magazine ammo</p>
                <br className='m-3'/>


                <p> James Chatri:</p>

                <p> 1 cellphone, 1 pistol, medicines</p>
                <br className='m-3'/>


                <p> Ganesh Verma:</p>

                <p>2 cellphones, 1 knife</p>

            </div>
        </div>
    )
}

export default Summery